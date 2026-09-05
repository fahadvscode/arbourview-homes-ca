import { Hero } from "@/components/Hero";
import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { QuickFacts } from "@/components/QuickFacts";
import { FloorPlanCard } from "@/components/FloorPlanCard";
import { JsonLd } from "@/components/JsonLd";
import { SpecsDisclaimer } from "@/components/Disclaimer";
import {
  CtaBlock,
  Prose,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/LayoutBits";
import {
  AEO_PASSAGES,
  COMPARISON_COPY,
  CTA_LABEL,
  FLOOR_PLAN_COLLECTIONS,
  HEADINGS,
  HOME_ANSWER,
  HOME_OVERVIEW,
  INVESTMENT_LENS,
  LINKS,
  PAGE_META,
} from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import {
  breadcrumbSchema,
  heroImageSchema,
  placeSchema,
  residenceSchema,
  webPageSchema,
} from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.home();

export default function HomePage() {
  const meta = PAGE_META.home;

  return (
    <>
      <JsonLd data={residenceSchema()} />
      <JsonLd data={placeSchema()} />
      <JsonLd data={heroImageSchema()} />
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <Hero />
      <AnswerFirstSummary heading={HEADINGS.homeAnswer}>
        <p>{HOME_ANSWER}</p>
      </AnswerFirstSummary>
      <Section labelledBy="quick-facts">
        <SectionHeading id="quick-facts">Arbourview at a glance</SectionHeading>
        <div className="mt-8">
          <QuickFacts />
        </div>
        <SpecsDisclaimer className="mt-4" />
      </Section>
      <Section alt labelledBy="overview">
        <SectionHeading id="overview">Arbourview Georgetown prices — project overview</SectionHeading>
        <div className="mt-8">
          <Prose>
            {HOME_OVERVIEW.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              Continue with{" "}
              <TextLink href={LINKS.floorPlans.href}>{LINKS.floorPlans.text}</TextLink>,{" "}
              <TextLink href={LINKS.pricing.href}>{LINKS.pricing.text}</TextLink>,{" "}
              <TextLink href={LINKS.location.href}>{LINKS.location.text}</TextLink>, and{" "}
              <TextLink href={LINKS.faq.href}>{LINKS.faq.text}</TextLink>.
            </p>
          </Prose>
        </div>
      </Section>
      <Section labelledBy="investment">
        <SectionHeading id="investment">Arbourview Georgetown prices — the investment file</SectionHeading>
        <div className="mt-8">
          <Prose>
            {INVESTMENT_LENS.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="comparison">
        <SectionHeading id="comparison">{HEADINGS.comparison}</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COMPARISON_COPY.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="collections" id="floor-plans-preview">
        <SectionHeading id="collections">Arbourview floor plans — collection tiers</SectionHeading>
        <p className="mt-4 max-w-[62ch] text-text-muted">
          Individual plan names have not been released. These cards describe the planned
          townhome and detached WideLot™ collections at Arbourview.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {FLOOR_PLAN_COLLECTIONS.map((collection) => (
            <FloorPlanCard key={collection.name} collection={collection} />
          ))}
        </div>
      </Section>
      <Section alt labelledBy="answers">
        <SectionHeading id="answers">Direct answers buyers ask first</SectionHeading>
        <div className="mt-8 space-y-8">
          {AEO_PASSAGES.map((item) => (
            <article key={item.heading} className="card p-5 md:p-6">
              <h3 className="font-display text-xl font-semibold text-brand-deep md:text-2xl">
                {item.heading}
              </h3>
              <p className="prose-measure mt-4 text-text-primary">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <CtaBlock
        heading={CTA_LABEL}
        body="Free VIP registration. First notice when Mattamy Homes releases Arbourview pricing and floor plans. No purchase obligation."
        href="#hero-register"
        label={CTA_LABEL}
        location="home_cta"
      />
    </>
  );
}
