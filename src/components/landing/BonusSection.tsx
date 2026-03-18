import { UtensilsCrossed, Users, Timer, MessageCircle } from "lucide-react";

const bonuses = [
  { icon: UtensilsCrossed, num: "#1", title: "+40 Receitas Salgadas", desc: "Receitas salgadas com whey para refeições completas" },
  { icon: Users, num: "#2", title: "Doces para Família", desc: "Receitas que toda a família vai amar" },
  { icon: Timer, num: "#3", title: "Pré e Pós Treino", desc: "Receitas ideais para antes e depois do treino" },
  { icon: MessageCircle, num: "#4", title: "Grupo VIP WhatsApp", desc: "Comunidade exclusiva com dicas e suporte" },
];

const BonusSection = () => (
  <section className="py-16 px-4 bg-card">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-foreground mb-2">
        Você ainda leva
      </h2>
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center mb-10">
        <span className="text-highlight-underline">tudo isso de graça</span>
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {bonuses.map((b) => (
          <div
            key={b.num}
            className="bg-background rounded-xl p-5 shadow-card hover:shadow-warm transition-shadow duration-300 flex items-center gap-4 border border-border/50"
          >
            <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
              <b.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-sm">{b.num}</span>
                <h3 className="font-display font-bold text-lg text-foreground">{b.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BonusSection;
