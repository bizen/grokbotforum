import { TIER_LIST, TIER_LIST_CRITERIA, TIER_LIST_LABEL, TIER_LIST_SOURCE, TIER_LIST_UPDATED } from '../data/tier-list';

// Machine-readable mirror of the tier list shown at the top of /bots/.
export function GET() {
  return Response.json({
    label: TIER_LIST_LABEL,
    criteria: TIER_LIST_CRITERIA,
    source: TIER_LIST_SOURCE,
    updated: TIER_LIST_UPDATED,
    tiers: TIER_LIST,
  });
}
