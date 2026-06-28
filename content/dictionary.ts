/**
 * ORIZURU ティザーサイト 多言語コピーの型定義とローダー。
 *
 * 表記ルール（全言語で厳守）:
 * - FSUN は「国連支援財団（Foundation for the Support of the United Nations / FSUN）」。
 *   国連（UN）そのものではない。国連公認／認定の表現は使わない。連携 までに留める。
 * - 投資・出資・利回り等の資金スキームは一切含めない。寄付は公益・支援の文脈のみ。
 * - 当事者・子どもは、自らの意思で世界へ働きかける主体として描く。
 */

export type Locale = "ja" | "en";

export const locales: Locale[] = ["ja", "en"];

type Node = { title: string; body: string };

export interface Dictionary {
  site: {
    name: string;
    tagline: string;
    meta: { title: string; description: string; ogImageAlt: string };
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    scrollCue: string;
    imageAlt: string;
    regionLabel: string;
  };
  problem: {
    kicker: string;
    heading: string;
    lead: string;
    items: { no: string; title: string; body: string }[];
  };
  belief: {
    kicker: string;
    heading: string;
    lead: string;
    before: Node & { label: string };
    after: Node & { label: string };
    statement: string;
    image: string;
    imageAlt: string;
    craneTitle: string;
  };
  solution: {
    kicker: string;
    heading: string;
    lead: string;
    steps: { no: string; title: string; body: string; image: string; imageAlt: string }[];
  };
  cycle: {
    kicker: string;
    heading: string;
    lead: string;
    note: string;
    diagramLabel: string;
    nodes: { center: Node; field: Node; donor: Node; world: Node };
  };
  beneficiaries: {
    kicker: string;
    heading: string;
    lead: string;
    steps: { no: string; title: string; body: string }[];
    statement: string;
    image: string;
    imageAlt: string;
  };
  destinations: {
    kicker: string;
    heading: string;
    lead: string;
    image: string;
    imageAlt: string;
    items: { title: string; body: string }[];
  };
  safeguarding: {
    kicker: string;
    heading: string;
    lead: string;
    items: { title: string; body: string }[];
  };
  cta: {
    kicker: string;
    heading: string;
    image: string;
    imageAlt: string;
    body: string;
    donateLabel: string;
    donatePreparingTitle: string;
    donatePreparingBody: string;
    subscribeHeading: string;
    subscribeBody: string;
    emailLabel: string;
    emailPlaceholder: string;
    subscribeLabel: string;
    subscribeSubmitting: string;
    subscribeSuccess: string;
    subscribeError: string;
    emailInvalid: string;
    modalClose: string;
  };
  footer: {
    description: string;
    org: string;
    partner: string;
    teaserNote: string;
    imageNote: string;
    orgLabel: string;
    partnerLabel: string;
    socialLabel: string;
    social: { label: string; href: string }[];
    copyright: string;
  };
  nav: {
    links: { label: string; href: string }[];
    cta: string;
    menuLabel: string;
    /** 言語切替: 切替先のラベルと URL */
    switch: { label: string; href: string; ariaLabel: string };
    skipToContent: string;
  };
}

import { ja } from "./ja";
import { en } from "./en";

const dictionaries: Record<Locale, Dictionary> = { ja, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
