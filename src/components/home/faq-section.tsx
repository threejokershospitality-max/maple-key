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
    <section className="py-20 lg:py-28 bg-accent/30" aria-labelledby="faq">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
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
