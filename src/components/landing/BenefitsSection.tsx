const benefits = [
  { emoji: "📢", title: "Transforme whey em refeições reais", desc: "Bolos, pães, pizzas e mousses com sabor de verdade — não de suplemento" },
  { emoji: "📊", title: "Bata sua meta de proteína sem sofrimento", desc: "Cada receita tem calorias e macros detalhados por porção" },
  { emoji: "👩‍🍳", title: "200 receitas testadas por nutricionista", desc: "Não é receita de internet. É ciência aplicada na cozinha" },
  { emoji: "⚡", title: "Pronto em minutos com o que você já tem", desc: "Sem equipamento especial, sem ingredientes exóticos" },
  { emoji: "🎯", title: "Funciona para emagrecer, secar ou ganhar massa", desc: "Cada receita é adaptável ao seu objetivo atual" },
  { emoji: "👥", title: "Mais de 14.800 pessoas já usam", desc: "O e-book de receitas com whey mais vendido do Brasil" },
];

const BenefitsSection = () => (
  <section className="py-16 md:py-20 px-4 bg-section-peach">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-foreground mb-1 uppercase">
        O que muda com o
      </h2>
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-cyan-highlight mb-12 uppercase">
        e-book original
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-card rounded-xl p-6 shadow-card flex items-start gap-4"
          >
            <span className="text-2xl flex-shrink-0 mt-0.5">{b.emoji}</span>
            <div>
              <h3 className="font-display font-bold text-base text-foreground mb-1">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
