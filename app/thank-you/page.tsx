import { JsonLd } from "@/components/JsonLd";
import { ThankYouEvents } from "@/components/ThankYouEvents";
import { CtaLink } from "@/components/CtaLink";
import { PageHeader, Section } from "@/components/LayoutBits";
import { LINKS, PAGE_META } from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.thankYou();

export default function ThankYouPage() {
  const meta = PAGE_META.thankYou;
  return (
    <>
      <ThankYouEvents />
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
          { name: "Thank you", path: "/thank-you" },
        ])}
      />
      <PageHeader
        h1={meta.h1}
        lede="The Registration Team will notify you when Arbourview pricing, floor plans, and a VIP launch date are released. There is no purchase obligation."
      />
      <Section labelledBy="next">
        <h2 id="next" className="font-display text-2xl font-semibold text-brand-deep">
          While you wait
        </h2>
        <p className="mt-4 max-w-[62ch] text-text-primary">
          The investment guide and FAQ collect the sourced facts available today for Arbourview
          in Georgetown, including what remains unpublished until Mattamy Homes releases a price
          list.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink href={LINKS.guide.href} location="thank_you">
            {LINKS.guide.text}
          </CtaLink>
          <CtaLink href={LINKS.faq.href} location="thank_you_faq" className="btn-primary">
            {LINKS.faq.text}
          </CtaLink>
        </div>
      </Section>
    </>
  );
}
