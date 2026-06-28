import type { Dictionary } from "./dictionary";

/**
 * 日本語コピー。表記ルールは dictionary.ts のコメントを参照。
 */
export const ja: Dictionary = {
  site: {
    name: "ORIZURU",
    tagline: "千羽鶴が、世界を救う。",
    meta: {
      title: "ORIZURU ── 千羽鶴が、世界を救う。",
      description:
        "ケアを受ける一人ひとりが折る一羽を、千羽鶴に束ね、世界の支援先へ届ける。介護・ケアの現場から生まれた、循環型のドネーション・プロジェクト。",
      ogImageAlt: "ネイビーの空間に舞う、虹色の折り鶴",
    },
  },

  hero: {
    kicker: "ORIZURU PROJECT",
    title: "千羽鶴が、世界を救う。",
    subtitle:
      "ケアを受ける一人ひとりが折る一羽を、千羽鶴に束ね、世界の支援先へ届ける。介護・ケアの現場から生まれた、循環型のプロジェクトです。",
    scrollCue: "読み進める",
    imageAlt: "光に向かって束ねられていく、無数の折り鶴",
    regionLabel: "ヒーロー",
  },

  problem: {
    kicker: "THE GAP",
    heading: "三つの分断",
    lead: "支えたい想いと、支えを必要とする人。その間には、まだ越えられていない隔たりがあります。",
    items: [
      {
        no: "01",
        title: "福祉就労の現場",
        body: "働く場はあっても、誇りを持てる仕事や、社会とつながる手応えに届きにくい。技能が正当な対価につながる回路が、まだ細い。",
      },
      {
        no: "02",
        title: "支援が届きにくい人々",
        body: "難病やがんと向き合う人、災害や貧困のなかにいる子ども。支援の網の目から、こぼれ落ちてしまう人がいる。",
      },
      {
        no: "03",
        title: "想いの行き場",
        body: "誰かの力になりたい。その純粋な気持ちが、確かな届け先と出会えないまま、行き場を失っている。",
      },
    ],
  },

  belief: {
    kicker: "OUR BELIEF",
    heading: "ケアは、善意の塊",
    lead: "私たちは、ケアの現場に積み重ねられてきた善意を、世界へ循環させたいと考えています。",
    before: {
      label: "これまで",
      title: "支えられる側として",
      body: "ケアは、受け取るもの。誰かの手を借りて日々を過ごす ── そう捉えられがちでした。",
    },
    after: {
      label: "これから",
      title: "世界を支える側へ",
      body: "自らの意思で一羽を折り、想いを発信する。ケアを受けてきた人が、世界に恩返しをする主体になります。",
    },
    statement:
      "高齢者も、障害のある方も、生活保護の方も、難病の方も、孤児も ── ケアを必要とするすべての人が、一羽の鶴を通じて世界とつながります。",
    image: "/images/belief.jpg",
    imageAlt: "世代を越えて、ともに一羽の鶴を折る人たち",
    craneTitle: "主客の反転",
  },

  solution: {
    kicker: "THE SOLUTION",
    heading: "折る、束ねる、届ける",
    lead: "一羽の鶴が世界へ向かうまで。ORIZURU は、ケアの現場と世界の支援先を、千羽鶴でつなぎます。",
    steps: [
      {
        no: "01",
        title: "折る",
        body: "ケアの現場で、一人ひとりが心を込めて鶴を折る。折り手には正当な工賃が支払われます。作る営みには、対価があります。",
        image: "/images/fold.jpg",
        imageAlt: "現場で一羽の鶴を折る手元",
      },
      {
        no: "02",
        title: "束ねる",
        body: "一羽、また一羽。個々の想いが千羽鶴へと束ねられ、ひとつの大きなメッセージになります。",
        image: "/images/bundle.jpg",
        imageAlt: "色とりどりの鶴が千羽鶴に束ねられていく様子",
      },
      {
        no: "03",
        title: "届ける",
        body: "完成した千羽鶴を、世界の支援先へ無償で届ける。鶴とともに、世界からの応援を運びます。",
        image: "/images/deliver.jpg",
        imageAlt: "世界へ向けて千羽鶴を掲げる様子",
      },
      {
        no: "04",
        title: "次の一巡へ",
        body: "一巡ごとに、次の支援が生まれる。届けた先の物語が現場へ還り、また新しい一羽が折られていきます。",
        image: "/images/cycle.jpg",
        imageAlt: "循環していく支援のつながり",
      },
    ],
  },

  cycle: {
    kicker: "THE MODEL",
    heading: "循環するドネーション",
    lead: "ORIZURU を中心に、現場・ドナー・世界の支援先がひとつの円でつながります。",
    note: "作るのは有償、世界へ届けるのは無償。一巡ごとに、次の支援が生まれます。",
    diagramLabel:
      "ORIZURU を中心に、ケアの現場・ドナー・世界の支援先が円でつながる循環図",
    nodes: {
      center: { title: "ORIZURU", body: "現場と世界をつなぐ循環の中心" },
      field: { title: "ケアの現場", body: "鶴を折り、工賃を受け取る" },
      donor: { title: "ドナー", body: "寄付で千羽鶴の旅を支える" },
      world: { title: "世界の支援先", body: "千羽鶴と応援を無償で受け取る" },
    },
  },

  beneficiaries: {
    kicker: "THE ORDER OF CARE",
    heading: "守る順番",
    lead: "支援は、いちばん近い人から。足もとの安心を確かめながら、その先の世界へと広げていきます。",
    steps: [
      { no: "01", title: "当事者本人", body: "折る人自身の自立と誇りを、まず最初に守ります。" },
      { no: "02", title: "家族", body: "本人を支えてきた家族の安心へ。次の一歩を共に描きます。" },
      { no: "03", title: "ケアスタッフ", body: "現場で伴走する人たちが、報われる仕組みをつくります。" },
      { no: "04", title: "世界の支援先", body: "足もとの安心の先に、世界へ千羽鶴を届けます。" },
    ],
    statement:
      "親なき後の不安を、当事者の自立で断つ。誰かに依存し続ける未来ではなく、自ら世界へ働きかける未来を、私たちは選びます。",
    image: "/images/beneficiaries.jpg",
    imageAlt: "鶴を手に、笑顔で語らう子どもたち",
  },

  destinations: {
    kicker: "WHERE IT GOES",
    heading: "届ける先",
    lead: "千羽鶴とともに、世界からの応援を無償で届けます。",
    image: "/images/destinations.jpg",
    imageAlt: "屋外で、鶴を空へ掲げる子どもたち",
    items: [
      {
        title: "子ども支援",
        body: "困難のなかにいる子どもたちへ。救いを待つ側ではなく、自らの未来を選びとる主体として、その歩みを応援します。",
      },
      {
        title: "難病の治療費支援",
        body: "難病やがんと向き合う人へ。治療を続けるための力に、千羽鶴の想いを重ねます。",
      },
      {
        title: "災害支援",
        body: "収支が安定したのちに。困難に見舞われた地域へ、循環の輪を広げていきます。",
      },
    ],
  },

  safeguarding: {
    kicker: "DIGNITY & SAFEGUARDING",
    heading: "尊厳と、信頼の担保",
    lead: "発信は、いつも本人の選択から始まります。私たちは、その尊厳を守る約束を最初に掲げます。",
    items: [
      {
        title: "発信は本人の選択",
        body: "世界へ想いを発信するかどうかは、本人が決めます。住居やケアの提供条件には、決して結びつけません。",
      },
      {
        title: "肖像権と、撤回の自由",
        body: "肖像の扱いには本人の同意を前提とし、いつでも撤回できる自由を保障します。",
      },
      {
        title: "特別な配慮",
        body: "未成年や、判断能力が限定的な方には、特別な配慮と手続きを用意します。",
      },
    ],
  },

  cta: {
    kicker: "JOIN THE CIRCLE",
    heading: "あなたの支援が、世界へ届く千羽鶴になる",
    image: "/images/cta.jpg",
    imageAlt: "吊るされた折り鶴を見上げる子どもたち",
    body: "一羽の鶴が世界へ向かう旅を、あなたの寄付が支えます。まずは、プロジェクトのお知らせから受け取ってください。",
    donateLabel: "寄付で支援する",
    donatePreparingTitle: "寄付の受け皿を準備しています",
    donatePreparingBody:
      "現在、寄付の受け皿となる体制を整えています。準備が整い次第こちらでご案内します。それまでは、お知らせ登録で最新情報をお届けします。",
    subscribeHeading: "プロジェクトのお知らせを受け取る",
    subscribeBody: "公開や寄付受付の開始など、節目のお知らせをメールでお届けします。",
    emailLabel: "メールアドレス",
    emailPlaceholder: "you@example.com",
    subscribeLabel: "登録する",
    subscribeSubmitting: "送信中…",
    subscribeSuccess: "ご登録ありがとうございます。お知らせをお届けします。",
    subscribeError: "送信に失敗しました。時間をおいて、もう一度お試しください。",
    emailInvalid: "メールアドレスの形式をご確認ください。",
    modalClose: "閉じる",
  },

  footer: {
    description:
      "介護・ケアの現場から生まれた、循環型のドネーション・プロジェクト。一羽の鶴を、世界へ。",
    org: "株式会社dhpケアマネジメント／dhp都市開発グループ",
    partner:
      "国連支援財団（Foundation for the Support of the United Nations / FSUN）と連携",
    teaserNote: "本サイトは先行公開（ティザー）です。内容は今後更新される場合があります。",
    imageNote:
      "サイト内の人物・現場の写真はイメージ素材を含みます。実在の利用者の写真ではありません。",
    orgLabel: "Organization",
    partnerLabel: "Partnership",
    socialLabel: "Social",
    social: [
      { label: "X", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "note", href: "#" },
    ],
    copyright: "ORIZURU PROJECT",
  },

  nav: {
    links: [
      { label: "信念", href: "#belief" },
      { label: "仕組み", href: "#solution" },
      { label: "届ける先", href: "#destinations" },
      { label: "尊厳", href: "#safeguarding" },
    ],
    cta: "支援する",
    menuLabel: "メインナビゲーション",
    switch: { label: "English", href: "/en", ariaLabel: "View this site in English" },
    skipToContent: "本文へスキップ",
  },
};
