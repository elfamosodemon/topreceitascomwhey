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
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-gradient-warm mb-4">
        Compre e Ganhe!
      </h2>
      <p className="text-center text-muted-foreground mb-10">Bônus para quem compra hoje</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {bonuses.map((b) => (
          <div
            key={b.num}
            className="bg-bonus-bg rounded-xl p-6 shadow-card hover:shadow-warm transition-shadow duration-300 flex items-start gap-4"
          >
            <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
              <b.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <span className="text-primary font-bold text-sm">{b.num}</span>
              <h3 className="font-display font-bold text-lg text-foreground">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BonusSection;
