// Build-time Open Graph images (1200×630 PNG) for sharing on X.
// Satori lays out a tiny element tree, resvg rasterizes it. Japanese glyphs come from a
// Noto Sans JP subset fetched from Google Fonts with only the characters we need.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

const FOOTER_LEFT = 'grokbotforum.com';
const FOOTER_RIGHT = '非公式・Grok Bot 日本語ナレッジベース';

const logo = (color: 'white' | 'cyan' | 'magenta') =>
  `data:image/png;base64,${readFileSync(join(process.cwd(), `src/assets/og/logo-${color}.png`)).toString('base64')}`;

async function loadFont(weight: 400 | 700, text: string): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@${weight}&text=${encodeURIComponent(text)}`;
  // A non-browser User-Agent makes Google Fonts serve TrueType, which satori can read.
  const css = await (await fetch(url, { headers: { 'User-Agent': 'grokbotforum-og' } })).text();
  const src = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
  if (!src) throw new Error(`Could not load Noto Sans JP ${weight} for OG images`);
  return (await fetch(src)).arrayBuffer();
}

let fonts: Promise<{ name: string; data: ArrayBuffer; weight: 400 | 700 }[]> | undefined;

/** Fetch fonts once per build, subset to every character any OG image will use. */
export function prepareFonts(allText: string) {
  const chars = [...new Set(`${allText}${FOOTER_LEFT}${FOOTER_RIGHT}…0123456789`)].join('');
  fonts ??= Promise.all([
    loadFont(700, chars).then((data) => ({ name: 'Noto Sans JP', data, weight: 700 as const })),
    loadFont(400, chars).then((data) => ({ name: 'Noto Sans JP', data, weight: 400 as const })),
  ]);
  return fonts;
}

function clip(text: string, max: number): string {
  const chars = [...text];
  return chars.length > max ? `${chars.slice(0, max - 1).join('')}…` : text;
}

type Node = { type: string; props: Record<string, any> };
const h = (type: string, style: Record<string, any>, children?: unknown, extra: Record<string, any> = {}): Node => ({
  type,
  props: { style, children, ...extra },
});

export async function renderOgImage({ label, title, summary }: { label: string; title: string; summary?: string }) {
  if (!fonts) throw new Error('prepareFonts() must be called first');
  const LOGO_W = 460;
  const LOGO_H = Math.round((LOGO_W * 187) / 1200);
  const CONTENT_W = OG_WIDTH - 72 * 2;
  const logoBox = { position: 'absolute', top: 0, left: 0, width: LOGO_W, height: LOGO_H };

  const tree = h(
    'div',
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      position: 'relative',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      padding: '64px 72px 120px',
      background: '#0a0a0a',
      color: '#ededed',
      fontFamily: 'Noto Sans JP',
    },
    [
      // Logo with a cyberpunk RGB split, matching the site's glitch effect.
      h('div', { position: 'relative', display: 'flex', width: LOGO_W, height: LOGO_H, flexShrink: 0 }, [
        h('img', { ...logoBox, left: -5, opacity: 0.85 }, undefined, { src: logo('cyan'), width: LOGO_W, height: LOGO_H }),
        h('img', { ...logoBox, left: 5, opacity: 0.85 }, undefined, { src: logo('magenta'), width: LOGO_W, height: LOGO_H }),
        h('img', logoBox, undefined, { src: logo('white'), width: LOGO_W, height: LOGO_H }),
      ]),
      h('div', { display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, width: CONTENT_W, justifyContent: 'center' }, [
        h('div', { display: 'flex', fontSize: 26, fontWeight: 400, color: '#a1a1a1', marginBottom: 16 }, label),
        h(
          'div',
          { display: 'flex', width: CONTENT_W, fontSize: [...title].length > 18 ? 56 : 68, fontWeight: 700, lineHeight: 1.3 },
          clip(title, 40),
        ),
        summary
          ? h('div', { display: 'flex', width: CONTENT_W, fontSize: 26, fontWeight: 400, color: '#a1a1a1', lineHeight: 1.6, marginTop: 20 }, clip(summary, 70))
          : h('div', { display: 'none' }),
      ]),
      h(
        'div',
        {
          position: 'absolute',
          left: 72,
          bottom: 48,
          display: 'flex',
          width: CONTENT_W,
          justifyContent: 'space-between',
          paddingTop: 22,
          borderTop: '1px solid #262626',
          fontSize: 22,
          color: '#8e8e93',
        },
        [h('div', {}, FOOTER_LEFT), h('div', {}, FOOTER_RIGHT)],
      ),
    ],
  );

  const svg = await satori(tree as any, { width: OG_WIDTH, height: OG_HEIGHT, fonts: await fonts });
  return new Resvg(svg, { fitTo: { mode: 'width', value: OG_WIDTH } }).render().asPng();
}
