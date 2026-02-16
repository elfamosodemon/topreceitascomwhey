import { Heart, Dumbbell, Shuffle, ChefHat, Candy, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Heart, title: "Coma sem culpa", desc: "Doces saudáveis que cabem na dieta" },
  { icon: Dumbbell, title: "Proteína deliciosa", desc: "Whey em receitas irresistíveis" },
  { icon: Shuffle, title: "Variedade total", desc: "200 opções para nunca enjoar" },
  { icon: ChefHat, title: "Fácil para iniciantes", desc: "Receitas simples e rápidas" },
  { icon: Candy, title: "Sabor de verdade", desc: "Gosto que surpreende qualquer um" },
  { icon: TrendingUp, title: "Emagrecer ou Ganhar Massa", desc: "Receitas para qualquer objetivo" },
];

const BenefitsSection = () => (
  <section className="py-16 px-4 gradient-warm">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-gradient-warm mb-12">
        Benefícios Para o Seu Corpo e Paladar
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-warm transition-shadow duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
              <b.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-foreground">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
