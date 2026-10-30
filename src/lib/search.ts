// Client-side search over /index.json. Runs in the browser only.

interface Entry {
  collection: string;
  collectionLabel: string;
  lang: string;
  title: string;
  summary: string;
  tags: string[];
  path: string;
  /** Glossary only: the English UI name. */
  en?: string;
}

let index: Promise<Entry[]> | undefined;

function loadIndex(): Promise<Entry[]> {
  index ??= fetch('/index.json')
    .then((res) => res.json())
    .then((data) => data.items as Entry[])
    .catch(() => []);
  return index;
}

function score(entry: Entry, terms: string[]): number {
  const title = `${entry.title} ${entry.en ?? ''}`.toLowerCase();
  const rest = `${entry.summary} ${entry.tags.join(' ')} ${entry.collectionLabel}`.toLowerCase();
  let total = 0;
  for (const term of terms) {
    if (title.includes(term)) total += title.startsWith(term) ? 4 : 3;
    else if (rest.includes(term)) total += 1;
    else return 0;
  }
  return total;
}

export function initSearch() {
  const dialog = document.querySelector<HTMLDialogElement>('[data-search]');
  const input = document.querySelector<HTMLInputElement>('[data-search-input]');
  const list = document.querySelector<HTMLUListElement>('[data-search-results]');
  if (!dialog || !input || !list) return;

  const lang = dialog.dataset.lang;
  let results: Entry[] = [];
  let active = 0;
  let scope = '';

  const render = () => {
    list.replaceChildren();
    if (input.value.trim() && results.length === 0) {
      const empty = document.createElement('li');
      empty.className = 'r-empty';
      empty.textContent = dialog.dataset.empty ?? '';
      list.append(empty);
      return;
    }
    results.forEach((entry, i) => {
      const li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', String(i === active));
      const a = document.createElement('a');
      a.href = entry.path;
      const meta = document.createElement('span');
      meta.className = 'r-meta';
      meta.textContent = entry.collectionLabel;
      const title = document.createElement('span');
      title.className = 'r-title';
      title.textContent = entry.title;
      const summary = document.createElement('span');
      summary.className = 'r-summary';
      summary.textContent = entry.summary;
      a.append(meta, title, summary);
      li.append(a);
      list.append(li);
    });
  };

  const update = async () => {
    const entries = (await loadIndex()).filter(
      (e) => e.lang === lang && (!scope || e.collection === scope),
    );
    const terms = input.value.toLowerCase().split(/\s+/).filter(Boolean);
    results = terms.length
      ? entries
          .map((e) => ({ e, s: score(e, terms) }))
          .filter((r) => r.s > 0)
          .sort((a, b) => b.s - a.s)
          .map((r) => r.e)
          .slice(0, 8)
      : entries.slice(0, 6);
    active = 0;
    render();
  };

  const open = (query = '', nextScope = '') => {
    if (dialog.open) return;
    input.value = query;
    scope = nextScope;
    dialog.showModal();
    input.focus();
    update();
  };

  document.querySelectorAll<HTMLElement>('[data-search-open]').forEach((el) =>
    el.addEventListener('click', () => open(el.dataset.searchQuery ?? '', el.dataset.searchScope ?? '')),
  );

  addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      dialog.open ? dialog.close() : open();
    } else if (event.key === '/' && !dialog.open && !(event.target instanceof HTMLInputElement)) {
      event.preventDefault();
      open();
    }
  });

  input.addEventListener('input', update);
  input.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!results.length) return;
      active = (active + (event.key === 'ArrowDown' ? 1 : -1) + results.length) % results.length;
      render();
      list.children[active]?.scrollIntoView({ block: 'nearest' });
    } else if (event.key === 'Enter' && results[active]) {
      event.preventDefault();
      location.href = results[active].path;
    }
  });

  // Close when clicking the backdrop.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}
