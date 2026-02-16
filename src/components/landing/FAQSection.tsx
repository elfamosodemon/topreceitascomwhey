import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O acesso é imediato?",
    a: "Sim! Após a confirmação do pagamento, você recebe o acesso completo imediatamente no seu e-mail. É só abrir e começar a fazer suas receitas.",
  },
  {
    q: "As receitas são fáceis de preparar?",
    a: "Com certeza! Todas as receitas foram pensadas para serem práticas e rápidas. A maioria leva menos de 15 minutos para preparar, com ingredientes fáceis de encontrar.",
  },
  {
    q: "Diabéticos podem consumir essas receitas?",
    a: "Sim! As receitas são low carb e sem adição de açúcar refinado. Porém, recomendamos sempre consultar seu médico ou nutricionista antes de incluir novos alimentos na dieta.",
  },
  {
    q: "Posso usar qualquer tipo de Whey?",
    a: "Sim! As receitas funcionam com qualquer tipo de whey: concentrado, isolado ou hidrolisado. Você pode usar o sabor que preferir!",
  },
];

const FAQSection = () => (
  <section className="py-16 px-4 gradient-warm">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-gradient-warm mb-10">
        Perguntas Frequentes
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card rounded-xl px-6 shadow-card border-none"
          >
            <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
