import { generalFaqs } from "@/data/faqs";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="section-padding section-surface-muted" aria-labelledby="faq">
      <div className="site-container max-w-3xl">
        <SectionHeading
          subtitle="Questions & Answers"
          title="Frequently Asked Questions"
          description="Everything you need to know about booking and staying with Maple & Key."
        />

        <Accordion type="single" collapsible className="w-full">
          {generalFaqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
