/**
 * Single source of truth for arbourviewhomes.ca — pricing & investment tracker.
 * Every page, metadata block, and JSON-LD block reads from this file.
 *
 * HOW TO BUMP FRESHNESS DATES: When Mattamy Homes releases new Arbourview details, update LAST_UPDATED and LAST_UPDATED_ISO here. Sitemap lastmod, footer, FAQ, JSON-LD dateModified, and disclaimer copy all derive from these two constants.
 */

export const SITE_URL = "https://arbourviewhomes.ca";
export const SITE_NAME = "arbourviewhomes.ca";
export const SITE_ORG_NAME = "arbourviewhomes.ca";
export const PROJECT_NAME = "Arbourview";
export const PROJECT_NAME_FULL = "Arbourview by Mattamy Homes";
export const WORDMARK = "Arbourview";
export const BUILDER = "Mattamy Homes";
export const CITY = "Georgetown";
export const MUNICIPALITY = "Halton Hills";
export const STREET_ADDRESS = "10114 Eighth Line";
export const POSTAL_CODE = "L7G 4S5";
export const ADDRESS_LOCALITY = "Halton Hills";
export const ADDRESS_REGION = "ON";
export const ADDRESS_COUNTRY = "CA";
export const SITE_ADDRESS = "10114 Eighth Line, Halton Hills, ON L7G 4S5";
export const LAST_UPDATED = "September 1, 2026";
export const LAST_UPDATED_ISO = "2026-09-01";
export const STATUS = "Coming Soon — Registration Open";
export const STATUS_BADGE = "Coming Soon — Registration Open";
export const TAGLINE = "Where Your Kids Will Know the Farmers by Name";
export const SITE_SOURCE = "homes_ca";
export const PLACE_NAME = "Arbourview Sales Information";

export const GEO = {
  // Verified from Mattamy Homes' official Arbourview "Directions" link.
  latitude: 43.6200855,
  longitude: -79.8893979,
};

export const MAPS_EMBED_SRC =
  "https://maps.google.com/maps?q=10114%20Eighth%20Line%2C%20Halton%20Hills%2C%20ON%20L7G%204S5&z=14&output=embed";

export const HERO_EYEBROW = "PRE-CONSTRUCTION · GEORGETOWN, ONTARIO · PRICE TRACKER";
export const HERO_SUBHEAD =
  "Townhomes and detached WideLot™ homes by Mattamy Homes at 10114 Eighth Line, Halton Hills — tracked here for pricing, deposits, and investment fundamentals.";
export const CTA_LABEL = "Register for Arbourview Updates";
export const CTA_NAV_LABEL = "VIP Registration";
export const FORM_HEADING = "VIP Registration";
export const FORM_LEDE =
  "Register to be notified when Arbourview prices, deposit structure, and floor plans are released. Free, with no purchase obligation.";
export const FOOTER_BLURB =
  "Independent pricing and investment tracker for Arbourview by Mattamy Homes in Georgetown, Halton Hills. Not the builder's official site.";

export const HERO_IMAGE = {
  src: "/images/arbourview-hero.webp",
  alt: "Arbourview Georgetown prices context — historic downtown Georgetown Main Street near Eighth Line",
  caption:
    "Downtown Georgetown Main Street context for Arbourview. Official architectural renderings have not been released by Mattamy Homes as of September 1, 2026.",
  width: 1536,
  height: 864,
};

export const GALLERY_IMAGES = [
  {
    src: "/images/arbourview-hero.webp",
    alt: "Arbourview Georgetown prices page — historic Main Street context in downtown Georgetown",
    caption:
      "Historic downtown Georgetown Main Street. Independent neighbourhood-context photography, not an official Mattamy Homes rendering of Arbourview.",
    width: 1536,
    height: 864,
  },
  {
    src: "/images/hungry-hollow-trail.webp",
    alt: "Hungry Hollow trail context used on the Arbourview location and gallery pages",
    caption:
      "Forested conservation-trail context typical of Hungry Hollow in Georgetown. Neighbourhood-context photography, not a project rendering of Arbourview.",
    width: 1536,
    height: 864,
  },
  {
    src: "/images/eighth-line-georgetown.webp",
    alt: "Eighth Line rural edge of Georgetown illustrating the Arbourview location for pricing context",
    caption:
      "Rural Eighth Line corridor at the edge of Georgetown, Halton Hills. Independent location photography, not a site plan or elevation of Arbourview.",
    width: 1536,
    height: 864,
  },
  {
    src: "/images/georgetown-main-street.webp",
    alt: "Georgetown Main Street boutiques and cafés near Arbourview, used as lifestyle context on the pricing tracker",
    caption:
      "Walkable Main Street fabric in downtown Georgetown. Neighbourhood-context photography, not an official Mattamy Homes rendering of Arbourview.",
    width: 1536,
    height: 864,
  },
] as const;

export const INDEPENDENCE_DISCLAIMER =
  "This is an independent information and registration website for Arbourview. It is not the official website of Mattamy Homes and is not affiliated with or endorsed by the builder. All renderings, pricing, sizes, and specifications are for illustration only and are subject to change without notice. E.&O.E.";

export const SPECS_DISCLAIMER = `Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E. Information current as of ${LAST_UPDATED}.`;

export const CASL_CONSENT =
  "I consent to receive electronic communications about Arbourview and similar pre-construction opportunities. I understand I can withdraw consent at any time using the unsubscribe link in any message.";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  h1: string;
  robots?: { index: boolean; follow: boolean };
};

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    path: "/",
    title: "Arbourview Georgetown | Mattamy Homes New Homes",
    description:
      "New townhomes & detached homes by Mattamy Homes at Arbourview in Georgetown. Register for prices & floor plans.",
    h1: "Arbourview Georgetown Prices & Investment Guide — Mattamy Homes",
  },
  floorPlans: {
    path: "/floor-plans",
    title: "Arbourview Floor Plans | Townhomes & Detached",
    description:
      "Explore planned collection tiers at Arbourview Georgetown — townhomes and detached homes by Mattamy Homes.",
    h1: "Arbourview Floor Plans — Townhomes & Detached WideLot™ Homes",
  },
  pricing: {
    path: "/pricing",
    title: "Arbourview Prices | Deposit Structure Georgetown",
    description:
      "Arbourview pricing and deposit structure, tracked and updated as Mattamy Homes releases details.",
    h1: "Arbourview Prices & Deposit Structure",
  },
  location: {
    path: "/location",
    title: "Arbourview Location | Eighth Line, Georgetown",
    description:
      "Arbourview sits at 10114 Eighth Line, Georgetown — downtown, trails, transit & schools.",
    h1: "Arbourview Location — Eighth Line, Georgetown",
  },
  gallery: {
    path: "/gallery",
    title: "Arbourview Renderings | Site Plan Georgetown",
    description:
      "Renderings and site plan for Arbourview, Mattamy Homes' newest Georgetown community.",
    h1: "Arbourview Renderings & Site Plan",
  },
  faq: {
    path: "/faq",
    title: "Arbourview FAQ | Prices, Deposit & VIP Access",
    description:
      "Answers to the most common Arbourview questions — pricing, deposit, launch date, schools & more.",
    h1: "Arbourview FAQ",
  },
  register: {
    path: "/register",
    title: "Register — Arbourview VIP Updates Georgetown",
    description:
      "Register for Arbourview community updates and get first access to pricing and floor plans.",
    h1: "Register for Arbourview Updates",
  },
  thankYou: {
    path: "/thank-you",
    title: "Registration Received | Arbourview Georgetown",
    description:
      "Your Arbourview VIP registration has been received. You will be notified when pricing and floor plans are released.",
    h1: "Registration received",
  },
  guide: {
    path: "/blog/is-oakville-pre-construction-a-good-investment",
    title: "Is Pre-Construction in Halton Hills a Good Investmen",
    description:
      "Is Pre-Construction in Halton Hills a Good Investment in 2026? — practical, sourced context for Halton Hills pre-construction buyers.",
    h1: "Is Pre-Construction in Halton Hills a Good Investment in 2026?",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | arbourviewhomes.ca",
    description:
      "How this independent Arbourview information site collects, stores, and protects your data.",
    h1: "Privacy Policy",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | arbourviewhomes.ca",
    description:
      "Terms of use for this independent Arbourview information and registration website.",
    h1: "Terms of Use",
  },
};

export const NAV = [
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/pricing", label: "Pricing" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog/is-oakville-pre-construction-a-good-investment", label: "Investment Guide" },
] as const;

export const LINKS = {
  floorPlans: { href: "/floor-plans", text: "View Arbourview floor plans" },
  pricing: { href: "/pricing", text: "See Arbourview pricing & deposit structure" },
  location: { href: "/location", text: "Explore the Arbourview location" },
  faq: { href: "/faq", text: "Read the full Arbourview FAQ" },
  floorPlansPricing: { href: "/pricing", text: "Check current Arbourview pricing" },
  floorPlansRegister: { href: "/register", text: "Register for floor plan updates" },
  pricingRegister: {
    href: "/register",
    text: "Register to be notified when prices release",
  },
  locationFaq: { href: "/faq", text: "See more Arbourview location FAQs" },
  faqRegister: { href: "/register", text: "Register for Arbourview updates" },
  guide: {
    href: "/blog/is-oakville-pre-construction-a-good-investment",
    text: "Is Pre-Construction in Halton Hills a Good Investment in 2026?",
  },
} as const;

export const HEADINGS = {
  homeAnswer: "Arbourview Georgetown prices, in one paragraph",
  quickFacts: "Arbourview at a glance",
  overview: "Arbourview Georgetown — the public fact sheet",
  investment: "Arbourview Georgetown prices — the investment file",
  comparison: "Arbourview vs other Georgetown pre-construction",
  collections: "Arbourview floor plans — collection tiers",
  collectionsPage: "Arbourview floor plans by collection",
  howMattamyReleases: "How Mattamy typically releases collections",
  answers: "Direct answers buyers ask first",
  pricingStatus: "Arbourview prices — current status",
  deposit: "Arbourview deposit structure",
  incentives: "Incentives — to be announced",
  tracker: "How this price tracker works",
  intersection: "The address, stated plainly",
  downtown: "Downtown Georgetown as a resale and rental fundamental",
  transit: "Highways and transit that serve Arbourview",
  schools: "Schools near Arbourview",
  trails: "Hungry Hollow, recreation, and WideLot™ living space",
  locationAnswers: "Arbourview location, answered first",
  faqQuestions: "Arbourview questions, answered first",
  galleryPending: "Renderings will be added here once released by Mattamy Homes",
  registerVip: "Arbourview VIP registration",
};

export const QUICK_FACTS = [
  { label: "Builder", value: "Mattamy Homes" },
  { label: "Type", value: "Townhomes & Detached Homes (WideLot™)" },
  { label: "Address", value: "10114 Eighth Line, Halton Hills, ON L7G 4S5" },
  { label: "City", value: "Georgetown, Halton Hills, Ontario" },
  { label: "Nearby", value: "Downtown Georgetown Main Street, Hungry Hollow trails" },
  { label: "Connectivity", value: "GO Transit, Highways 7, 401, 407" },
  { label: "Starting Price", value: "To be announced" },
  { label: "Deposit", value: "To be announced" },
  { label: "Occupancy", value: "To be announced" },
  { label: "Status", value: "Coming Soon — Registration Open" },
] as const;

export const HOME_ANSWER =
  "Arbourview is a new pre-construction community by Mattamy Homes in Georgetown, part of Halton Hills, Ontario, planned to offer townhomes and detached homes built using Mattamy's WideLot™ design concept. Located at 10114 Eighth Line, the project is currently in its Coming Soon stage, with pricing and floor plans to be released to registered buyers first.";

export const HOME_OVERVIEW = [
  "Arbourview is Mattamy Homes' newest community in Georgetown, part of Halton Hills, Ontario, sited at 10114 Eighth Line on the edge of one of the GTA's most well-preserved small-town downtowns. Mattamy markets the community around its connection to everyday small-town life — walkable access to Georgetown's historic Main Street, the weekly Georgetown Farmers' Market, and the surrounding Hungry Hollow trail network — while still offering commuter access to GO Transit and Highways 7, 401, and 407.",
  "This .ca sibling is built for the buyer already comparing numbers: price-per-square-foot expectations, deposit schedules, closing costs, and how Arbourview stacks up against other Halton Hills and Georgetown pre-construction investment options.",
  "Mattamy Homes is Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan. The company is known for its WideLot™ home design concept, introduced in the 1990s at The Orchard community in Burlington, Ontario, which uses wider-than-standard lot widths to create a more spacious street profile and larger living areas — a design language Arbourview is being built around.",
  "Mattamy Homes has confirmed Arbourview will include both townhomes and detached homes, alongside nearby recreation at the Gellert Community Centre and Williams Mill Creative Arts Studios. Specific floor plans, lot widths, square footage, and building heights have not yet been released as of the project's Coming Soon stage.",
  "As of this page's last update, Mattamy Homes has not released pricing, floor plans, or a firm launch date for Arbourview. This site exists to track every verified detail as it becomes public and to give interested buyers a straightforward way to register for updates — see the registration form above and the FAQ below for the specific questions buyers ask most at this stage.",
];

export const INVESTMENT_LENS = [
  "Arbourview Georgetown prices are unreleased as of September 1, 2026. That is the first investment fact, not a marketing hedge. A Coming Soon registration stage means no VIP list, no deposit schedule, and no occupancy window that a spreadsheet can use. Aggregator brackets for Georgetown as a whole are city-wide filters, not an Arbourview offer and not a forecast of where this project will land.",
  "What can be measured today is the location envelope. Arbourview sits at 10114 Eighth Line, Halton Hills, with named access to GO Transit and Highways 7, 401, and 407, plus walkable reach of Georgetown's historic Main Street. Those are liquidity factors for resale and rental ads. They still have to be priced against the unknown list, the unknown deposit cadence, and the unknown closing date.",
  "Price-per-square-foot cannot be calculated until Mattamy Homes publishes both a price list and interior sizes. WideLot™ describes a lot-width concept, not a marketed square-footage table. Treat any directory snippet that already lists an Arbourview starting price as referring to Georgetown in general, to another Halton Hills launch, or to an unsourced guess.",
  "Closing costs in Ontario pre-construction typically include land-transfer tax (Toronto's municipal layer does not apply in Halton Hills), legal fees, development charges if not capped by the builder, and HST treatment that depends on whether the home is a qualifying new home with a rebate path. None of those line items has been confirmed for Arbourview. Occupancy is to be announced, so carrying-cost models that assume a specific close year are speculation.",
  "Assignment and rental policy will sit in the agreement of purchase and sale, which does not exist for this project yet. Investors who need a clear assignment window or a landlord-friendly occupancy clause should wait for that document rather than inferring terms from another Mattamy Ontario community. This site will not invent an assignment fee to fill a table.",
];

export const COMPARISON_COPY = [
  "As of this research, dedicated independent pages for Arbourview are scarce. Most Georgetown pre-construction coverage buries new launches inside city-wide aggregator lists, or skips a Coming Soon project entirely. That thin SERP is why this tracker exists: a dated, project-only record of what Mattamy Homes has actually published.",
  "Compared with many Halton Hills launches sited farther from an established downtown, Arbourview's published location advantage is proximity to Georgetown's historic Main Street, the Georgetown Farmers' Market, Hungry Hollow trails, and named highway and GO Transit access. That is a walkability and commute thesis, not a ranking and not a claim that Arbourview will open below, beside, or above any neighbour's list.",
  "Until Mattamy Homes releases Arbourview prices, any statement that the project is “under $1 million,” “the cheapest Georgetown entry,” or “the last chance” is unsupported. The comparison that can be stated today is location and product type — townhomes and detached WideLot™ homes, Coming Soon — not a dollar spread. Register to be notified when a VIP list appears.",
];

export const AEO_PASSAGES: { heading: string; text: string }[] = [
  {
    heading: "What is Arbourview and who is building it?",
    text: "Arbourview is a new pre-construction community by Mattamy Homes in Georgetown, part of Halton Hills, Ontario, planned to offer townhomes and detached homes built using Mattamy's WideLot™ design concept. The project is located at 10114 Eighth Line and is currently in its Coming Soon registration stage.",
  },
  {
    heading: "Where is Arbourview located in Georgetown?",
    text: "Arbourview is located at 10114 Eighth Line, Halton Hills, Ontario, on the edge of Georgetown's established downtown. The community sits close to Georgetown's historic Main Street, the Georgetown Farmers' Market, and the Hungry Hollow trail and conservation area, with practical access to GO Transit and Highways 7, 401, and 407.",
  },
  {
    heading: "What home types will be available at Arbourview?",
    text: "Arbourview is planned to offer townhomes and detached homes built using Mattamy's WideLot™ concept, which uses wider-than-standard lot widths to create more interior and exterior living space. Exact floor plans, lot sizes, and bedroom counts have not yet been released by Mattamy Homes as of the project's Coming Soon stage.",
  },
  {
    heading: "How much will homes at Arbourview cost?",
    text: "Mattamy Homes has not released pricing for Arbourview as of its Coming Soon registration stage. Buyers who register for community updates typically receive first access to pricing and floor plans once the VIP launch phase begins.",
  },
  {
    heading: "What is a WideLot™ home?",
    text: "WideLot™ is a Mattamy Homes design concept, introduced in the 1990s at The Orchard community in Burlington, Ontario, that uses wider-than-typical lot widths to create a more spacious street profile and larger living areas inside and outside the home. Arbourview in Georgetown is being built around this WideLot™ concept, though exact lot dimensions for the project have not yet been released.",
  },
  {
    heading: "When will Arbourview launch for sale?",
    text: "Mattamy Homes has not announced a firm sales launch date for Arbourview. The project is currently in a Coming Soon, registration-only stage, where interested buyers can sign up for community updates to be notified when floor plans, pricing, and a VIP launch date are announced.",
  },
  {
    heading: "What is the deposit structure for Arbourview?",
    text: "Arbourview's deposit structure has not been announced as of its Coming Soon stage. Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities; registered buyers usually receive this information first, alongside pricing and floor plans.",
  },
  {
    heading: "How do I get VIP registration for Arbourview?",
    text: "Buyers can register for Arbourview community updates directly through this site's registration form, providing a first name, last name, email, and phone number. Registered buyers are typically notified ahead of the public when floor plans, pricing, and the VIP launch date are announced by Mattamy Homes.",
  },
  {
    heading: "What schools will serve Arbourview?",
    text: "Arbourview falls within Halton Hills, an area generally served by the Halton District School Board and the Halton Catholic District School Board. Exact school catchment assignments for the Eighth Line site have not been confirmed and should be verified with the relevant board before purchase.",
  },
  {
    heading: "Is Arbourview a good investment?",
    text: "Arbourview sits close to an established, well-preserved downtown Georgetown with GO Transit and multi-highway access, which are generally favourable investment fundamentals for a commuter-friendly small town. As with any pre-construction purchase, buyers should weigh the unreleased pricing, deposit structure, and closing timeline, and review the assignment and resale policy once Mattamy Homes publishes its agreement of purchase and sale.",
  },
  {
    heading: "What amenities are near Arbourview?",
    text: "Arbourview is close to Georgetown's historic downtown Main Street, home to boutiques, cafés, restaurants, and the Georgetown Farmers' Market. Nearby recreation includes the Hungry Hollow trails and conservation area, the Gellert Community Centre for fitness and swimming, and Williams Mill Creative Arts Studios.",
  },
  {
    heading: "What is the difference between Arbourview's townhomes and detached homes?",
    text: "Mattamy Homes has confirmed Arbourview will include both townhomes and detached homes built using its WideLot™ design concept, but has not yet released specific plan names, square footage, lot widths, or pricing for either collection as of the project's Coming Soon stage.",
  },
  {
    heading: "Who is Mattamy Homes and what is their track record?",
    text: "Mattamy Homes is Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan, and a top-25 homebuilder in the United States. The company introduced its WideLot™ home concept in the 1990s and has built communities across the Greater Toronto Area, including its newest Georgetown community, Arbourview.",
  },
  {
    heading: "What highways and transit serve Arbourview?",
    text: "Arbourview is positioned with practical access to GO Transit and Highways 7, 401, and 407, according to Mattamy Homes' official project page, making it a commuter-friendly location within Halton Hills for travel across the Greater Toronto Area.",
  },
  {
    heading: "Is Arbourview close to downtown Georgetown?",
    text: "Yes. Arbourview is positioned close to one of the GTA's most well-preserved small-town downtowns, with Georgetown's historic Main Street, local boutiques, restaurants, and the Georgetown Farmers' Market within easy reach, alongside nearby trails and community recreation facilities.",
  },
];

export const FLOOR_PLAN_COLLECTIONS = [
  {
    name: "Townhomes",
    slug: "townhomes",
    sizes: "Not yet released",
    beds: "Not yet released",
    status: "Plans to be announced at VIP launch",
    summary:
      "Planned as part of Arbourview's Georgetown community, per Mattamy Homes' official project page. Individual plan names, square footage, and bedroom counts have not yet been released. Register above to be notified when floor plans are published.",
  },
  {
    name: "Detached Homes (WideLot™)",
    slug: "detached-homes",
    sizes: "Not yet released",
    beds: "Not yet released",
    status: "Plans to be announced at VIP launch",
    summary:
      "Planned using Mattamy's WideLot™ concept, built around wider-than-standard lot widths for more interior and exterior living space. Individual plan names, lot widths, and square footage have not yet been released by Mattamy Homes. Register above to be notified when floor plans are published.",
  },
] as const;

export const FLOOR_PLANS_ANSWER =
  "Arbourview floor plans have not been released by Mattamy Homes as of the project's Coming Soon stage. Planned collection tiers are townhomes and detached homes built using Mattamy's WideLot™ design concept. Exact plan names, lot widths, square footage, and bedroom counts will be published at VIP launch.";

export const FLOOR_PLANS_COPY = [
  "Arbourview floor plans are the missing half of any price-per-square-foot model. Without interior sizes, a VIP list is only a headline. Mattamy Homes has not issued plan names, interior dimensions, or bedroom and bathroom counts for this Georgetown release. This page records the two collection tiers Mattamy has confirmed — townhomes and detached WideLot™ homes — so the same URL can carry real cards the day a booklet is released.",
  "On other Ontario communities, Mattamy typically structures a launch as named collections rather than a single undifferentiated price list. Elevations, included features, and lot premiums are usually presented together with the floor plans at VIP. That pattern is a general Mattamy practice, not a confirmed Arbourview package. Until the builder publishes Arbourview-specific materials, treat collection structure as expected process rather than a guaranteed product mix.",
  "WideLot™ is a Mattamy Homes design concept introduced in the 1990s at The Orchard community in Burlington, Ontario. It uses wider-than-typical lot widths to create a more spacious street profile and larger living areas inside and outside the home. Arbourview is being built around this concept. Exact lot dimensions for Georgetown have not been released, so this page will not invent a frontage in feet.",
  "A unit count for Arbourview has not been announced. Investors who model absorption from another Mattamy community's townhouse block or from a Halton Hills aggregator total are mixing a different file with this sales campaign. Do not treat another community's collection names as if they were Arbourview models.",
  "Registered buyers are typically notified first when Mattamy Homes publishes floor plans. There is no cost to register on this site, and registration does not reserve a specific lot or plan. Use the form on this page to request floor-plan updates, then review pricing status once figures are released.",
  "Until a booklet exists, the honest description of Arbourview floor plans is a pair of collection tiers plus the WideLot™ concept. Townhomes are planned as part of the Georgetown community. Detached homes are planned on wider-than-standard lots. That is the entire confirmed product statement as of September 1, 2026.",
  "Buyers comparing this page with aggregator lists should note the gap those lists leave: most Georgetown directories mention the town as a category and skip Arbourview entirely while it remains Coming Soon. A dedicated, crawlable floor-plans page that refuses to invent model names is the correct pre-launch state. When Mattamy releases plans, this page will add real cards — names, sizes, and bedroom counts — rather than remaining a placeholder.",
  "From an investment standpoint, townhome versus detached is also a liquidity question. Street towns can behave differently on resale and rental than detached WideLot™ product one street over, but those differences cannot be priced until sizes, parking, and freehold versus POTL status are published. This site omits a maintenance-fee line until townhomes are confirmed freehold versus POTL.",
  "When Mattamy Homes eventually publishes an Arbourview collection booklet, buyers should read it as a pricing input, not as lifestyle copy. Each plan's interior area is the denominator for price-per-square-foot. Lot premiums, elevation extras, and included-feature packages are the adders that move the cheque. Until those lines exist for Georgetown, this page will not invent a square-footage band, a bedroom count, or a lot width in feet to make the cards look finished.",
  "Mattamy's public pattern at other Ontario communities is to release named plans together with a VIP price list, not months apart. That is a general observation about how the builder has staged other campaigns, not a promise that Arbourview will follow the same calendar. If floor plans appear before prices, this tracker will still refuse to calculate a hypothetical PPSF from a neighbour's Georgetown list or from a city-wide aggregator bracket.",
  "Architect and interior-designer credits for Arbourview have not been published. They are omitted here rather than guessed. Elevations, included finishes, and optional packages typically arrive with the collection booklet at VIP; none of those packages is confirmed for this project. Registration on this site does not reserve a lot, a plan, or a sales appointment with Mattamy Homes.",
];

export const PRICING_ANSWER =
  "Mattamy Homes has not released pricing for Arbourview as of its Coming Soon registration stage. Buyers who register for community updates typically receive first access to pricing and floor plans once the VIP launch phase begins.";

export const PRICING_AS_OF =
  "As of September 1, 2026, Mattamy Homes has not released pricing for Arbourview.";

export const PRICING_ROWS = [
  { type: "Townhomes", price: "To be announced", status: "Coming Soon" },
  { type: "Detached WideLot™ Homes", price: "To be announced", status: "Coming Soon" },
] as const;

export const DEPOSIT_ROWS = [
  { milestone: "Initial deposit on signing", amount: "To be announced", due: "To be announced at VIP launch" },
  { milestone: "Second staged deposit", amount: "To be announced", due: "To be announced at VIP launch" },
  { milestone: "Subsequent staged deposits", amount: "To be announced", due: "To be announced at VIP launch" },
  { milestone: "Balance on closing", amount: "To be announced", due: "Occupancy to be announced" },
] as const;

export const INCENTIVE_ROWS = [
  { item: "Decor dollars / design studio credit", status: "To be announced" },
  { item: "Capped development charges", status: "To be announced" },
  { item: "Assignment fee policy", status: "To be announced" },
  { item: "Other launch incentives", status: "To be announced" },
] as const;

export const PRICING_COPY = [
  "Arbourview prices have not been published. This page is the price-and-deposit tracker for the project: every cell below reads “To be announced” until Mattamy Homes issues a VIP price list. City-wide Georgetown aggregator brackets are market context, not an Arbourview offer.",
  "Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities. The usual pattern — an initial deposit on signing, then further deposits at set intervals before occupancy — is described here as general process, not as a confirmed Arbourview schedule. Amounts, percentages, and due dates remain to be announced.",
  "Incentives such as decor dollars or capped development charges have appeared on other Mattamy Ontario launches in the past. Any Arbourview-specific incentive will be confirmed at VIP launch, not before. This site will not invent a number to fill a template slot.",
  "Occupancy and closing dates are likewise unreleased. Registered buyers are typically notified first when a VIP launch date and an occupancy window are set.",
  "This Arbourview prices page is built as a dated tracker. Every cell that would normally hold a dollar figure reads “To be announced” on purpose. Fabricating a starting price to rank for the query would be both inaccurate and a compliance failure. When Mattamy Homes issues a VIP list, the last-updated date in the site source file is the switch that republishes these tables.",
  "A general Mattamy Ontario VIP launch still tends to look like this: registered buyers receive a notice, a sales appointment window opens, collections and prices are presented together, and a staged deposit schedule is attached to the agreement of purchase and sale. The initial deposit is due on signing; later deposits follow at intervals the builder sets. None of those intervals is confirmed for Arbourview. Occupancy remains to be announced.",
  "Investors underwriting cash flow should separate three clocks. The deposit clock starts at signing and can stretch across years. The occupancy clock starts when the builder names a target and can still move. The financing clock starts when a lender will underwrite a specific plan and price. Until Mattamy publishes all three, a “good investment” claim is a location thesis, not a spreadsheet.",
  "Lot premiums, elevation premiums, and included-feature packages usually move the real price more than a collection’s opening number. None of those adders is public for Arbourview. Development-charge treatment, if offered, belongs in the incentive table once confirmed. Assignment fees, rental restrictions, and POTL or freehold confirmation for townhomes belong in the purchase agreement, not on a guess.",
  "This domain’s job is to be the first independent page that can publish real Arbourview prices without rewriting a template. Until that day, the only accurate statement is that pricing has not been released — register for updates. E.&O.E. Information current as of September 1, 2026.",
  "A VIP price list, when it exists, should be read as a starting point plus variables. Collection opening numbers rarely equal the cheque a buyer writes. Lot location, elevation, included features, and any development-charge treatment change the all-in figure. This tracker will add those rows only when Mattamy Homes publishes them for Arbourview. Until then, any directory that already shows a starting price for this project is describing Georgetown as a category, another Halton Hills launch, or an unsourced guess.",
  "Ontario closing costs sit beside the purchase price and are not the same as the deposit. Land-transfer tax in Halton Hills does not include Toronto’s municipal layer. Legal fees, title insurance, and HST treatment for a qualifying new home are general Ontario facts, not Arbourview-confirmed line items. Occupancy is to be announced, so a carrying-cost model that assumes a close in a specific calendar year is speculation dressed as a spreadsheet.",
  "This page will not rank Arbourview against other Georgetown pre-construction campaigns by dollar amount while the list is unpublished. The comparison that can be stated is product type and location: townhomes and detached WideLot™ homes at 10114 Eighth Line, Coming Soon. Register to be notified when prices release.",
  "A deposit is not a down payment in the resale sense, and it is not a closing cost. In a typical Ontario pre-construction agreement, staged deposits leave a buyer's account long before occupancy, while land-transfer tax and legal fees cluster around closing. Mixing those buckets in one cell is how a Coming Soon file gets mis-underwritten. Arbourview has published none of those amounts. This tracker keeps the deposit table separate from the price table for that reason.",
];

export const LOCATION_ANSWER =
  "Arbourview is located at 10114 Eighth Line, Halton Hills, Ontario, on the edge of Georgetown's established downtown. The community sits close to Georgetown's historic Main Street, the Georgetown Farmers' Market, and the Hungry Hollow trail and conservation area, with practical access to GO Transit and Highways 7, 401, and 407.";

export const LOCATION_COPY = {
  intro: [
    "Arbourview location is the part of the investment file that can be written down today. The site address is 10114 Eighth Line, Halton Hills, ON L7G 4S5, in Georgetown, part of Halton Region, Ontario. Approximate coordinates published via Mattamy Homes' own directions link are 43.6200855, -79.8893979. Those named facts are the ones a resale listing, a rental ad, or an answer engine should repeat.",
    "Mattamy Homes describes Arbourview as sitting on the edge of one of the GTA's most well-preserved small-town downtowns. That is a walkability claim with a named street — Georgetown's historic Main Street — not a slogan about an unbeatable location. Door-to-café minutes vary by lot and should be verified by each buyer.",
    "For investors, the Eighth Line address is a liquidity detail: a household that can reach employment nodes on Highways 7, 401, and 407, plus GO Transit, is a wider buyer pool at resale than a launch that still needs a new arterial. Drive times vary with traffic; the highway relationship is the planning fact, not a guaranteed commute clock.",
    "A Coming Soon price tracker still has to pin the parcel before it can pin a number. 10114 Eighth Line, postal code L7G 4S5, is the NAP-style fact this page will keep repeating so that when a VIP list appears, the address, the builder, and the product type are already aligned. The map embed on this page is a location aid, not a site plan. Official architectural renderings and a marketing site plan have not been released by Mattamy Homes as of September 1, 2026.",
    "Halton Hills is the municipality; Georgetown is the urban community; Halton Region is the upper-tier geography. Those nested names matter for land-transfer worksheets, school-board lookups, and resale comparable searches. They do not change the fact that Arbourview's published civic address is 10114 Eighth Line. Buyers should not substitute a nearby concession, a future collector road, or a sales-centre mailing address that has not been published.",
  ],
  downtown: [
    "Downtown Georgetown's Main Street is the named amenity that separates this file from many Halton Hills greenfield launches. Mattamy Homes' official Arbourview page cites a historic, well-preserved Main Street with boutiques, cafés, restaurants, and the weekly Georgetown Farmers' Market. Those are day-one small-town amenities rather than a future retail block on a phasing plan.",
    "The marketing tagline Mattamy uses for Arbourview — “Where Your Kids Will Know the Farmers by Name” — points at that farmers' market and the agricultural edge of Georgetown, not at a numbered amenity list. Independent of the slogan, the investment read is simple: an occupied downtown is already producing foot traffic, storefront rents, and weekend destination demand that a first-phase field still has to invent.",
    "Named comparable areas for context, not as substitutes, include other Georgetown and Halton Hills pre-construction campaigns that sit farther from Main Street and farther from GO. They compete for the same buyer pool. They do not share this Eighth Line parcel or this downtown adjacency. Do not import their price lists onto Arbourview.",
    "From a rental and resale standpoint, an occupied Main Street is a listing photograph that already exists. Cafés, boutiques, restaurants, and a weekly farmers' market are the amenities Mattamy Homes names for Arbourview. They are not a projected plaza on a later phase. Whether that adjacency is priced into the VIP list is unknown until Mattamy publishes figures. Buyers should still walk the street and confirm the relationship from the specific lot they are offered.",
    "Downtown Georgetown is also a weekend destination, which is a different rental pitch from a purely bedroom-community launch. A tenant or a resale buyer who wants a walkable coffee run, a Saturday market, and a named trail network is shopping a small-town file, not a highway interchange. That demand exists independently of Arbourview's unreleased prices. It still has to be paid for when Mattamy Homes sets the list, and it can be overpaid if the deposit cadence or occupancy clock is punitive.",
  ],
  transit: [
    "Arbourview is positioned with practical access to GO Transit and Highways 7, 401, and 407, according to Mattamy Homes' official project page, making it a commuter-friendly location within Halton Hills for travel across the Greater Toronto Area.",
    "GO Transit access is the regional-rail fact this page is willing to state. Station-to-door walking times, parking availability, and specific train-headway claims are not invented here. Buyers should verify the Georgetown GO station relationship against their own commute, including first- and last-mile options.",
    "Highway 7, Highway 401, and Highway 407 are the named corridors. Together they describe east-west employment access across the GTA and north-south movement through Halton. Those three highways, plus GO Transit, are the transit and highway facts this page will repeat. Door-to-office minutes are not.",
    "Investors underwriting a Halton Hills pre-construction file often treat regional-rail access as a liquidity screen: a wider pool of GTA commuters at resale, and a clearer rental pitch, than a site that still depends on a single arterial. That screen is qualitative until Arbourview prices exist. This tracker will not invent a GO parking-lot wait time, a train-headway claim, or a Highway 407 toll budget and then call it an Arbourview carrying cost.",
    "Highway 407 is a toll road. Highway 401 and Highway 7 are not described here with invented peak-hour minutes. GO Transit is named because Mattamy Homes names it on the official Arbourview page. Together they are the commute envelope for a Georgetown Coming Soon file. A household that cannot use any of those three highways or GO should not treat this location page as a substitute for a site visit.",
  ],
  schools: [
    "Arbourview falls within Halton Hills, an area generally served by the Halton District School Board and the Halton Catholic District School Board. Exact school catchment assignments for the Eighth Line site have not been confirmed and should be verified with the relevant board before purchase.",
    "[UNVERIFIED — confirm exact catchment with the Halton District School Board and Halton Catholic District School Board before launch.] Named catchment schools for this exact parcel are not listed on this site as confirmed.",
    "School proximity is a resale fundamental in Halton Hills, but an unconfirmed catchment is not an open school assignment. Secondary-school catchments, French immersion, and Catholic versus public assignment can all differ from a neighbour one concession over. This page will not name a specific school as “the Arbourview school” until a board confirms it.",
    "Until a board map is confirmed for 10114 Eighth Line, school-driven price premiums should stay out of any Arbourview spreadsheet. A neighbour one concession over can sit in a different elementary or secondary envelope. French immersion, gifted, and Catholic versus public assignment are separate questions from “is there a school nearby.” This tracker will add named schools only after the Halton District School Board and the Halton Catholic District School Board confirm catchment for this parcel.",
  ],
  trails: [
    "Arbourview is close to the Hungry Hollow trails and conservation area, offering forested walking paths, bridges, and natural scenery within Georgetown. Nearby recreation also includes the Gellert Community Centre for fitness, swimming, and sports, and Williams Mill Creative Arts Studios, per Mattamy Homes' official project page.",
    "Trail and recreation fabric is part of the location premium buyers already pay in Georgetown. Whether Arbourview prices that premium in will only be knowable when a list is public. Trail access from a specific lot should be confirmed against the released site plan, which has not been published.",
    "WideLot™ is the product overlay on this location story. Wider-than-standard lot widths are intended to create a more spacious street profile and larger interior and exterior living areas. Exact lot dimensions for Arbourview have not been released. Taken together, the Arbourview location story for investors is a small-town downtown plus named highways, GO Transit, Hungry Hollow, and a WideLot™ product type — more specific than “new homes in Georgetown,” and the picture Mattamy's own project page actually supports.",
    "Gellert Community Centre (fitness, swimming, sports) and Williams Mill Creative Arts Studios are the named indoor recreation facts on Mattamy Homes' official Arbourview page. They are municipal and studio amenities already operating in Georgetown, not a future clubhouse whose opening is tied to an unreleased occupancy date. Trail, park, and recreation access from a specific Arbourview lot still has to be confirmed against the site plan Mattamy has not yet published.",
  ],
};

export const FAQ_PAGE_INTRO =
  "This Arbourview FAQ answers the questions buyers type when they are comparing numbers: how much homes cost, what the deposit might look like, whether the project is a reasonable investment thesis, which schools and trails are nearby, and how VIP registration works. Every answer below is written to stand alone if quoted by an answer engine. Unreleased figures stay labelled as to be announced. Last updated: September 1, 2026.";

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "How much do homes at Arbourview cost?",
    a: "Mattamy Homes has not released pricing for Arbourview as of its Coming Soon stage. Registered buyers typically receive first access to pricing and floor plans once the VIP launch phase begins.",
  },
  {
    q: "What is the deposit structure for Arbourview?",
    a: "Arbourview's deposit structure has not been announced as of its Coming Soon stage. Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities; registering for updates is the fastest way to receive this information when it is released.",
  },
  {
    q: "Is Arbourview a good investment?",
    a: "Arbourview sits close to an established downtown Georgetown with strong commuter connectivity via GO Transit and Highways 7, 401, and 407 — generally favourable investment fundamentals. As with any pre-construction purchase, buyers should weigh the currently unreleased pricing, deposit schedule, and closing timeline, and review the assignment and resale policy once Mattamy Homes publishes its purchase agreement.",
  },
  {
    q: "What is the assignment or rental policy at Arbourview?",
    a: "Mattamy Homes has not published an assignment or rental policy specific to Arbourview, as the project has not yet reached its agreement of purchase and sale stage. Assignment and rental terms are typically detailed in the builder's purchase agreement at VIP launch — confirm directly with Mattamy Homes before relying on any third-party summary.",
  },
  {
    q: "How does Arbourview compare to other Georgetown pre-construction communities?",
    a: "Arbourview stands out for its proximity to one of the GTA's best-preserved small-town downtowns — Georgetown's historic Main Street — along with GO Transit and multi-highway access. Compared to many new-launch communities built farther from an established downtown, Arbourview offers walkable small-town amenities from day one.",
  },
  {
    q: "What schools serve Arbourview?",
    a: "Arbourview falls within Halton Hills, generally served by the Halton District School Board and the Halton Catholic District School Board. Exact school catchment assignments for the Eighth Line site have not been confirmed — buyers should verify with the relevant board before purchasing.",
  },
  {
    q: "How do I get VIP access to Arbourview?",
    a: "You can register for Arbourview community updates directly on this site using the five-field form — first name, last name, email, and phone. Registered buyers are typically notified ahead of the general public when floor plans, pricing, and the VIP launch date are announced by Mattamy Homes.",
  },
  {
    q: "When is the launch or occupancy for Arbourview?",
    a: "Mattamy Homes has not announced a firm sales launch date or occupancy timeline for Arbourview. The project is currently in a Coming Soon, registration-only stage; registered buyers are typically notified first when a VIP launch date is set.",
  },
  {
    q: "What home types and sizes are available at Arbourview?",
    a: "Per Mattamy Homes' official project page, Arbourview is planned to include both townhomes and detached homes, built using Mattamy's WideLot™ concept for wider-than-standard lot widths. Exact floor plans, lot widths, and square footage have not yet been released.",
  },
  {
    q: "Where exactly is Arbourview located?",
    a: "Arbourview is located at 10114 Eighth Line, Halton Hills, Ontario, close to Georgetown's historic downtown Main Street. The site has practical access to GO Transit and Highways 7, 401, and 407 for commuting across the Greater Toronto Area.",
  },
  {
    q: "Who is the builder behind Arbourview?",
    a: "Arbourview is being built by Mattamy Homes, Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan. Mattamy is also the company behind the WideLot™ home design concept Arbourview is being built around.",
  },
  {
    q: "What is Arbourview?",
    a: "Arbourview is a new pre-construction community by Mattamy Homes in Georgetown, part of Halton Hills, Ontario, planned to offer townhomes and detached homes built using Mattamy's WideLot™ design concept. Located at 10114 Eighth Line, the project is currently in a Coming Soon, registration-only stage.",
  },
  {
    q: "Are there incentives at Arbourview?",
    a: "Incentives for Arbourview have not been announced as of its Coming Soon stage. Mattamy Homes has offered incentives such as decor dollars or capped development charges on other Ontario launches in the past; any Arbourview-specific incentives will be confirmed at VIP launch, not before.",
  },
  {
    q: "Is there a cost to register for Arbourview?",
    a: "No. Registering for Arbourview community updates is free and simply adds you to Mattamy Homes' notification list for this project. There is no obligation to purchase and no cost associated with registering.",
  },
  {
    q: "What is Mattamy's WideLot™ concept and why does it matter at Arbourview?",
    a: "WideLot™ is a Mattamy Homes design concept introduced in the 1990s at The Orchard community in Burlington, Ontario, using wider-than-typical lot widths to create a more spacious street profile and larger living areas. Arbourview is being built around this WideLot™ concept, though Mattamy has not yet released the exact lot dimensions planned for the community.",
  },
  {
    q: "What trails and green space are near Arbourview?",
    a: "Arbourview is close to the Hungry Hollow trails and conservation area, offering forested walking paths, bridges, and natural scenery within Georgetown. The area also has numerous parks, playgrounds, and green spaces throughout Halton Hills, per Mattamy Homes' official project page.",
  },
];

export const REGISTER_LEDE =
  "Registering for Arbourview community updates is how buyers typically receive first access to floor plans and pricing when they are released, plus advance notice of the VIP launch date. There is no purchase obligation and no cost to register.";

export const SITEMAP_ROUTES: {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/floor-plans", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/location", changeFrequency: "monthly", priority: 0.8 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "weekly", priority: 0.8 },
  { path: "/register", changeFrequency: "monthly", priority: 0.9 },
  { path: "/thank-you", changeFrequency: "yearly", priority: 0.3 },
  { path: "/blog/is-oakville-pre-construction-a-good-investment", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export const BLOG_GUIDE = {
  lede: "Is pre-construction in Halton Hills a good investment in 2026? The honest answer is that it depends on the unreleased price, the deposit schedule, the occupancy clock, and the assignment clause — not on a slogan. This guide walks through those variables with Arbourview in Georgetown as a worked example of a Coming Soon launch beside an established small-town downtown.",
  sections: [
    {
      h2: "What “good investment” can actually mean in Halton Hills pre-construction",
      paragraphs: [
        "A useful 2026 question is not whether Halton Hills “always goes up.” Georgetown is a supply-constrained GTA-adjacent town with employment access via GO Transit and Highways 7, 401, and 407, plus an occupied historic downtown that already produces weekend and weekday demand. Those are generally favourable fundamentals. They are not a guarantee of appreciation, allocation, or rental yield on any one project.",
        "Pre-construction adds three clocks that resale does not. Deposits leave a buyer’s account years before occupancy. Occupancy can move. Assignment and rental rules live in a builder’s agreement, not in a brochure. A purchase that looks cheap on a launch weekend can look expensive if the deposit is front-loaded, the close is delayed, or assignment is tightly restricted.",
        "This guide does not claim that Arbourview, or any other Halton Hills launch, is the best investment. It explains how to read a Coming Soon file so that when a VIP list appears, the comparison is numbers-first. Arbourview is used because it is a current Georgetown example: Mattamy Homes, townhomes and detached WideLot™ homes at 10114 Eighth Line, pricing not released as of September 1, 2026.",
      ],
    },
    {
      h2: "The 2026 Halton Hills pre-construction backdrop — without invented statistics",
      paragraphs: [
        "Georgetown sits inside the Town of Halton Hills, in Halton Region. New ground-oriented product here competes with other Halton Hills campaigns and with nearby Milton and Brampton launches for the same commuter household. That regional competition, not a marketing map, is why a Coming Soon tracker has to refuse city-wide price brackets as if they were project prices.",
        "Aggregator directories for Georgetown advertise filterable lists of “100+” or “120+” pre-construction homes in the town. Those counts are city-wide inventories, self-disclosed on some sites as possibly outdated, and they have not, at research time, carried a dedicated in-depth Arbourview page. Treat a Georgetown average on an aggregator as corridor context, not an Arbourview list.",
        "Interest rates, lender stress tests, and household incomes in 2026 will do as much to set absorption as any Main Street. This page will not invent a rate path or a price-growth percentage. Buyers should run their own carrying-cost models with their lender and accountant, including land-transfer tax in Halton, legal fees, and HST treatment for a qualifying new home.",
      ],
    },
    {
      h2: "How to underwrite a Coming Soon project before a price list exists",
      paragraphs: [
        "Start with what is sourced. For Arbourview that means Mattamy Homes as builder, 10114 Eighth Line as the site address, planned townhomes and detached homes using the WideLot™ concept, and named nearby facts: Georgetown Main Street, the Georgetown Farmers' Market, Hungry Hollow trails, the Gellert Community Centre, Williams Mill Creative Arts Studios, GO Transit, and Highways 7, 401, and 407. Occupancy, deposits, incentives, and interior sizes are to be announced.",
        "Next, separate location premium from execution risk. A parcel beside an occupied downtown is a different thesis from a first shovel on a field with no Main Street. Arbourview's published location story is small-town walkability plus commuter highways. That continuity can support resale comparables later. It does not tell you what Mattamy will ask in 2026 dollars.",
        "Then wait for the documents that actually bind money: the price list, the deposit schedule, the occupancy target, and the agreement of purchase and sale. Until those exist, registration is an information request, not an allocation. Registering on this independent site is free and creates no purchase obligation.",
      ],
    },
    {
      h2: "Deposits, occupancy, and the cash that sits in between",
      paragraphs: [
        "Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities: an initial deposit on signing, then further deposits at intervals before occupancy. That is a general pattern, not a confirmed Arbourview schedule. Amounts and due dates remain to be announced.",
        "The investment implication of staging is liquidity. A schedule that asks for a large share in the first ninety days is a different product from one that spreads deposits over two years. Opportunity cost, not just the headline price, is the comparison. Occupancy for Arbourview is to be announced, so any model that assumes a specific closing year is speculative.",
        "Carrying costs after occupancy include property tax, insurance, utilities, and — if townhomes are confirmed as POTL rather than freehold — a common-element fee. This site omits a maintenance-fee line until that tenure is confirmed. Do not copy a POTL number from another Halton Hills townhouse project onto Arbourview.",
      ],
    },
    {
      h2: "Assignment, rental, and the policy pages that decide investor fit",
      paragraphs: [
        "Mattamy Homes has not published an assignment or rental policy specific to Arbourview, because the project has not reached its agreement of purchase and sale stage. Assignment fees, consent windows, and occupancy-before-rental rules are typically detailed in that agreement at VIP launch.",
        "Third-party summaries of other Mattamy communities are not Arbourview policy. An investor who needs to assign before occupancy, or to rent on closing, should read the Arbourview agreement when it exists and confirm directly with Mattamy Homes. This independent site will not invent a fee or a yes/no.",
        "Resale after closing is a different legal event from assignment. Georgetown ground-oriented resale near Main Street and Eighth Line is the natural comparable set for Arbourview once closings occur. Until then, using another Halton Hills launch's asking prices as an Arbourview forecast confuses two releases.",
      ],
    },
    {
      h2: "Arbourview versus other Georgetown launches — an investment comparison without a spread",
      paragraphs: [
        "The comparison that can be stated without guessing is downtown adjacency and product type. Arbourview is Coming Soon, with townhomes and detached WideLot™ homes planned at 10114 Eighth Line. Other Georgetown and Halton Hills campaigns may already have published lists, different lot mixes, or sites farther from Main Street. They do not share this parcel.",
        "WideLot™ is a Mattamy-specific overlay. Introduced in the 1990s at The Orchard in Burlington, it uses wider-than-typical lots for a more spacious street profile. Whether that geometry prices as a premium, a differentiator, or a wash against standard-lot detached product in Georgetown is unknown until a list exists. It is not a ranking.",
        "Until Mattamy releases Arbourview prices, claims that the project is cheaper, dearer, or “the last chance” in Halton Hills are unsupported. The entire current investment statement is: favourable small-town and commute fundamentals, incomplete numbers, register for the list.",
      ],
    },
    {
      h2: "Transit, highways, and schools as value drivers — not as slogans",
      paragraphs: [
        "GO Transit and Highways 7, 401, and 407 are the named access facts for Arbourview. Those are liquidity details for resale and rental ads. They are not a promise of a specific train schedule or a door-to-office minute count.",
        "Schools are a core Halton Hills resale driver. Arbourview falls within Halton Hills, generally served by the Halton District School Board and the Halton Catholic District School Board. Exact catchments for the Eighth Line site should be confirmed with those boards. Named schools for this parcel are not listed here as confirmed.",
        "Hungry Hollow trails, the Gellert Community Centre, and Williams Mill Creative Arts Studios are the recreation facts on Mattamy Homes' official Arbourview page. Staging of any on-site landscape will follow the released site plan. Buyers should not assume day-one trail completion on occupancy from an unreleased plan.",
      ],
    },
    {
      h2: "A practical 2026 checklist before calling any Halton Hills pre-con a fit",
      paragraphs: [
        "Ask for the dated price list, the collection booklet with square footage, the deposit schedule with calendar dates, the occupancy target, and the assignment and rental clauses. If a salesperson or a website cannot produce those, the file is still Coming Soon — which is exactly where Arbourview sits as of this guide.",
        "Run land-transfer tax, legal, development charges, and HST treatment with a lawyer and accountant who work in Halton. Halton Hills is not Toronto; municipal land-transfer layers differ. Do not use a downtown condo worksheet on a Georgetown WideLot™ detached lot.",
        "Compare the launch against other Georgetown and Halton Hills campaigns using like-for-like lot width, parking, and downtown adjacency. Then decide. This site will publish Arbourview prices when Mattamy Homes does. Until then, the investment answer is: favourable location fundamentals, incomplete numbers, register for the list, and do not treat an unreleased project as a closed case. E.&O.E. Information current as of September 1, 2026.",
      ],
    },
    {
      h2: "How this Arbourview price tracker will behave after a VIP list exists",
      paragraphs: [
        "The job of arbourviewhomes.ca after a release is narrower than a lifestyle brochure. When Mattamy Homes publishes Arbourview prices, this page should be able to replace every “To be announced” cell with a sourced figure, refresh the last-updated date, and leave the location and process copy intact. That is why the tables already exist with empty dollars rather than invented ones.",
        "Buyers who registered before the list should still read the agreement of purchase and sale, the deposit calendar, and the occupancy target as a set. A headline collection price without those three clocks is not an underwriting file. This independent site is not Mattamy Homes, does not allocate homes, and does not offer investment advice.",
        "Until that release, the 2026 Halton Hills question stays the same: is the household buying a small-town commute thesis next to Georgetown’s Main Street, or buying a number that does not exist yet? For Arbourview, only the thesis is public. Register for the number.",
      ],
    },
    {
      h2: "Closing costs in Ontario, stated generally — not as an Arbourview quote",
      paragraphs: [
        "Even after a VIP list exists, the purchase price is not the only cash a buyer needs. In Ontario, a typical new-home file can include land-transfer tax, legal fees, title insurance, adjustments, and HST treatment that depends on whether the home qualifies for a new-housing rebate path. Halton Hills is not the City of Toronto; Toronto's municipal land-transfer layer does not apply here. None of those line items has been confirmed as included, capped, or extra for Arbourview.",
        "Development charges, if not capped by the builder as an incentive, can move the all-in figure more than a buyer expects from a collection opening number. Mattamy Homes has used capped development charges on other Ontario launches in the past. That history is not an Arbourview offer. The incentive table on this site remains “To be announced” until a VIP document says otherwise.",
        "Carrying costs after occupancy — property tax, insurance, utilities, and any POTL fee if townhomes are not freehold — cannot be modelled from this page. Occupancy itself is to be announced. A 2026 investment thesis that assumes a close in a specific quarter is a guess. Run the worksheet with a Halton lawyer and a lender after Mattamy publishes the clocks, not before.",
      ],
    },
    {
      h2: "What registration on this independent tracker is for",
      paragraphs: [
        "Registering on arbourviewhomes.ca is a request to be notified when Arbourview prices, deposits, floor plans, or a VIP launch date are released. It is free. It creates no purchase obligation. It does not allocate a lot. It does not create a relationship with Mattamy Homes unless the builder independently honours a notification list.",
        "The five-field form is the only contact channel. There is no named agent, no brokerage, and no phone number on this site. Buyers who need a deletion or a correction of their registration record use the same form and state that the submission is a privacy request.",
        "When the list exists, come back to this tracker for dated tables rather than for slogans. Until then, the sourced file for Arbourview in Georgetown is: Mattamy Homes, townhomes and detached WideLot™ homes, 10114 Eighth Line, Coming Soon, pricing not released as of September 1, 2026.",
      ],
    },
  ],
};

export const GALLERY_INTRO =
  "Official architectural renderings and a public marketing site plan for Arbourview have not been released by Mattamy Homes as of September 1, 2026. Renderings will be added here once released by Mattamy Homes. Until then, this gallery shows neighbourhood-context photography of downtown Georgetown, Eighth Line, and Hungry Hollow trail character — clearly labelled so it is never mistaken for a project rendering.";

export const HOME_LOCATION_AEO: { heading: string; text: string }[] = [
  {
    heading: "Where is Arbourview located in Georgetown?",
    text: "Arbourview is located at 10114 Eighth Line, Halton Hills, Ontario, on the edge of Georgetown's established downtown. The community sits close to Georgetown's historic Main Street, the Georgetown Farmers' Market, and the Hungry Hollow trail and conservation area, with practical access to GO Transit and Highways 7, 401, and 407.",
  },
  {
    heading: "What highways and transit serve Arbourview?",
    text: "Arbourview is positioned with practical access to GO Transit and Highways 7, 401, and 407, according to Mattamy Homes' official project page, making it a commuter-friendly location within Halton Hills for travel across the Greater Toronto Area.",
  },
  {
    heading: "What schools will serve Arbourview?",
    text: "Arbourview falls within Halton Hills, an area generally served by the Halton District School Board and the Halton Catholic District School Board. Exact school catchment assignments for the Eighth Line site have not been confirmed and should be verified with the relevant board before purchase.",
  },
  {
    heading: "What amenities are near Arbourview?",
    text: "Arbourview is close to Georgetown's historic downtown Main Street, home to boutiques, cafés, restaurants, and the Georgetown Farmers' Market. Nearby recreation includes the Hungry Hollow trails and conservation area, the Gellert Community Centre for fitness and swimming, and Williams Mill Creative Arts Studios.",
  },
  {
    heading: "Is Arbourview close to downtown Georgetown?",
    text: "Yes. Arbourview is positioned close to one of the GTA's most well-preserved small-town downtowns, with Georgetown's historic Main Street, local boutiques, restaurants, and the Georgetown Farmers' Market within easy reach, alongside nearby trails and community recreation facilities.",
  },
];
