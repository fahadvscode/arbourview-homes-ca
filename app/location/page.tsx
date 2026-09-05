import { JsonLd } from "@/components/JsonLd";
import { LocationMap } from "@/components/LocationMap";
import {
  PageFootForm,
  PageHeader,
  Prose,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/LayoutBits";
import {
  HOME_LOCATION_AEO,
  LINKS,
  LOCATION_ANSWER,
  LOCATION_COPY,
  PAGE_META,
  SITE_ADDRESS,
} from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, placeSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.location();

export default function LocationPage() {
  const meta = PAGE_META.location;

  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: meta.path,
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Location", path: "/location" },
        ])}
      />
      <JsonLd data={placeSchema()} />
      <PageHeader h1={meta.h1} lede={LOCATION_ANSWER} />
      <Section labelledBy="address">
        <SectionHeading id="address">The address, stated plainly</SectionHeading>
        <div className="mt-8">
          <Prose>
            <p>{SITE_ADDRESS}</p>
            {LOCATION_COPY.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
        <div className="mt-10">
          <LocationMap />
        </div>
      </Section>
      <Section alt labelledBy="downtown">
        <SectionHeading id="downtown">Downtown Georgetown and Main Street</SectionHeading>
        <div className="mt-8">
          <Prose>
            {LOCATION_COPY.downtown.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="transit">
        <SectionHeading id="transit">Highways and transit that serve Arbourview</SectionHeading>
        <div className="mt-8">
          <Prose>
            {LOCATION_COPY.transit.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="schools">
        <SectionHeading id="schools">Schools near Arbourview</SectionHeading>
        <div className="mt-8">
          <Prose>
            {LOCATION_COPY.schools.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="trails">
        <SectionHeading id="trails">Hungry Hollow trails and nearby recreation</SectionHeading>
        <div className="mt-8">
          <Prose>
            {LOCATION_COPY.trails.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              <TextLink href={LINKS.locationFaq.href}>{LINKS.locationFaq.text}</TextLink>
            </p>
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="location-answers">
        <SectionHeading id="location-answers">Arbourview location, answered first</SectionHeading>
        <div className="mt-8 space-y-8">
          {HOME_LOCATION_AEO.map((item) => (
            <article key={item.heading} className="card p-5 md:p-6">
              <h3 className="font-display text-xl font-semibold text-brand-deep md:text-2xl">
                {item.heading}
              </h3>
              <p className="prose-measure mt-4 text-text-primary">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <PageFootForm formId="location-register" />
    </>
  );
}
