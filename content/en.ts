import type { Dictionary } from "./dictionary";

/**
 * English copy. Same rules as ja.ts:
 * - FSUN is the Foundation for the Support of the United Nations (FSUN), NOT the UN
 *   itself. Never imply UN endorsement; describe it only as a partnership.
 * - No investment / financial-scheme language. Donation stays within the public-good
 *   and support context only.
 * - People who receive care, and children, are portrayed as agents who reach out to
 *   the world by their own choice — never as objects of pity.
 */
export const en: Dictionary = {
  site: {
    name: "ORIZURU",
    tagline: "A thousand cranes can change the world.",
    meta: {
      title: "ORIZURU ── A thousand cranes can change the world.",
      description:
        "Each person who receives care folds a single crane; together they become a thousand, carried to those the world supports. A circular donation project born from the care and welfare front lines.",
      ogImageAlt: "Rainbow paper cranes rising through a deep navy space",
    },
  },

  hero: {
    kicker: "ORIZURU PROJECT",
    title: "A thousand cranes can change the world.",
    subtitle:
      "Each person who receives care folds a single crane; together they are gathered into a thousand and carried to causes around the world. A circular project born from the care and welfare front lines.",
    scrollCue: "Read on",
    imageAlt: "Countless paper cranes gathering and rising toward the light",
    regionLabel: "Hero",
  },

  problem: {
    kicker: "THE GAP",
    heading: "Three divides",
    lead: "Between the wish to help and the people who need it, there are gaps still waiting to be crossed.",
    items: [
      {
        no: "01",
        title: "Work in welfare settings",
        body: "Workplaces exist, yet work that brings pride and a real sense of connection to society remains hard to reach. The path from skill to fair pay is still narrow.",
      },
      {
        no: "02",
        title: "People support struggles to reach",
        body: "Those living with intractable illness or cancer; children facing disaster or poverty. Some still slip through the gaps in the safety net.",
      },
      {
        no: "03",
        title: "Goodwill with nowhere to go",
        body: "The honest wish to be of help to someone too often loses its way, never meeting a destination it can trust.",
      },
    ],
  },

  belief: {
    kicker: "OUR BELIEF",
    heading: "Care is goodwill, gathered",
    lead: "We want to take the goodwill built up on the front lines of care and let it circulate out into the world.",
    before: {
      label: "Until now",
      title: "As the one being supported",
      body: "Care has been seen as something you receive ── days spent leaning on the hands of others.",
    },
    after: {
      label: "From here",
      title: "As one who supports the world",
      body: "Folding a crane and sending a message, by one's own will. People who have received care become the ones giving back to the world.",
    },
    statement:
      "Older adults, people with disabilities, people on public assistance, people living with intractable illness, and children without parents ── everyone who needs care connects with the world through a single crane.",
    image: "/images/belief.jpg",
    imageAlt: "People of different generations folding a crane together",
    craneTitle: "The reversal of roles",
  },

  solution: {
    kicker: "THE SOLUTION",
    heading: "Fold, gather, deliver",
    lead: "From a single crane to the wider world. ORIZURU links the front lines of care with the causes it supports, through a thousand cranes.",
    steps: [
      {
        no: "01",
        title: "Fold",
        body: "On the front lines of care, each person folds a crane with heart. Those who fold are paid fairly. The act of making has its reward.",
        image: "/images/fold.jpg",
        imageAlt: "Hands folding a single paper crane",
      },
      {
        no: "02",
        title: "Gather",
        body: "One crane, then another. Individual hopes are gathered into a thousand cranes ── one larger message.",
        image: "/images/bundle.jpg",
        imageAlt: "Colorful cranes being strung into a thousand-crane garland",
      },
      {
        no: "03",
        title: "Deliver",
        body: "The finished cranes are delivered to causes around the world, free of charge ── carrying encouragement from the world along with them.",
        image: "/images/deliver.jpg",
        imageAlt: "Cranes held up toward the world",
      },
      {
        no: "04",
        title: "Into the next cycle",
        body: "Each turn gives rise to the next act of support. Stories from where the cranes arrived return to the front lines, and new cranes are folded again.",
        image: "/images/cycle.jpg",
        imageAlt: "Support connecting and circulating onward",
      },
    ],
  },

  cycle: {
    kicker: "THE MODEL",
    heading: "Donation that circulates",
    lead: "With ORIZURU at the center, the front lines, donors, and the world's causes connect in a single circle.",
    note: "Making is paid; delivering to the world is free. Each turn gives rise to the next act of support.",
    diagramLabel:
      "A cycle diagram: with ORIZURU at the center, the care front lines, donors, and the world's causes connect in a circle",
    nodes: {
      center: { title: "ORIZURU", body: "The center that links the front lines and the world" },
      field: { title: "Care front lines", body: "Fold cranes and receive fair pay" },
      donor: { title: "Donors", body: "Support the cranes' journey through giving" },
      world: { title: "World's causes", body: "Receive the cranes and encouragement, free of charge" },
    },
  },

  beneficiaries: {
    kicker: "THE ORDER OF CARE",
    heading: "The order we protect",
    lead: "Support begins with those closest. We make sure of the ground beneath our feet, then widen the circle out to the world.",
    steps: [
      { no: "01", title: "The person themselves", body: "First, we protect the independence and pride of the person who folds." },
      { no: "02", title: "Family", body: "Toward peace of mind for the family who has supported them, drawing the next step together." },
      { no: "03", title: "Care staff", body: "We build a structure in which those who walk alongside on the front lines are rewarded." },
      { no: "04", title: "World's causes", body: "Beyond that nearby peace of mind, we deliver the cranes to the world." },
    ],
    statement:
      "We end the worry of life after parents are gone through the person's own independence. We choose a future in which people reach out to the world themselves ── not one of depending on others without end.",
    image: "/images/beneficiaries.jpg",
    imageAlt: "Children talking and smiling, cranes in hand",
  },

  destinations: {
    kicker: "WHERE IT GOES",
    heading: "Where the cranes go",
    lead: "Along with the cranes, we deliver encouragement from the world, free of charge.",
    image: "/images/destinations.jpg",
    imageAlt: "Children outdoors holding cranes up to the sky",
    items: [
      {
        title: "Support for children",
        body: "For children facing hardship. Not as those waiting to be saved, but as people choosing their own future, we cheer their steps onward.",
      },
      {
        title: "Help with treatment costs",
        body: "For people living with intractable illness or cancer. We add the hope of a thousand cranes to the strength to keep treatment going.",
      },
      {
        title: "Disaster relief",
        body: "Once the balance is steady. We widen the circle to regions struck by hardship.",
      },
    ],
  },

  safeguarding: {
    kicker: "DIGNITY & SAFEGUARDING",
    heading: "Dignity, and earned trust",
    lead: "Sharing always begins with the person's own choice. We set out our promise to protect that dignity from the very start.",
    items: [
      {
        title: "Sharing is the person's choice",
        body: "Whether to share with the world is decided by the person. It is never tied to the conditions of housing or care.",
      },
      {
        title: "Likeness, and the freedom to withdraw",
        body: "Use of a person's likeness requires their consent, and we guarantee the freedom to withdraw it at any time.",
      },
      {
        title: "Special consideration",
        body: "For minors and for those whose capacity to decide is limited, we provide special consideration and procedures.",
      },
    ],
  },

  cta: {
    kicker: "JOIN THE CIRCLE",
    heading: "Your support becomes a thousand cranes for the world",
    image: "/images/cta.jpg",
    imageAlt: "Children looking up at hanging paper cranes",
    body: "Your donation supports the journey of a single crane toward the world. To begin, sign up for news from the project.",
    donateLabel: "Support with a donation",
    donatePreparingTitle: "We are preparing to receive donations",
    donatePreparingBody:
      "We are putting in place the structure to receive donations. We will share details here as soon as it is ready. Until then, sign up for news to receive the latest updates.",
    subscribeHeading: "Get news from the project",
    subscribeBody: "We will send milestones by email ── such as the public launch and the start of donations.",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    subscribeLabel: "Sign up",
    subscribeSubmitting: "Sending…",
    subscribeSuccess: "Thank you for signing up. We will keep you posted.",
    subscribeError: "Something went wrong. Please wait a moment and try again.",
    emailInvalid: "Please check the format of your email address.",
    modalClose: "Close",
  },

  footer: {
    description:
      "A circular donation project born from the care and welfare front lines. A single crane, to the world.",
    org: "dhp Care Management, Inc. / dhp Urban Development Group",
    partner:
      "In partnership with the Foundation for the Support of the United Nations (FSUN)",
    teaserNote: "This site is an early preview (teaser). Its content may be updated.",
    imageNote:
      "Photographs of people and settings on this site include stock imagery. They are not photographs of actual service users.",
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
      { label: "Belief", href: "#belief" },
      { label: "How it works", href: "#solution" },
      { label: "Where it goes", href: "#destinations" },
      { label: "Dignity", href: "#safeguarding" },
    ],
    cta: "Support",
    menuLabel: "Main navigation",
    switch: { label: "日本語", href: "/", ariaLabel: "日本語でこのサイトを見る" },
    skipToContent: "Skip to content",
  },
};
