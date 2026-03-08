import { CheckCircle, Mail, Lock } from "lucide-react";
import brownieImg from "@/assets/brownie.jpg";
import mugCakeImg from "@/assets/mug-cake.jpg";
import pudimImg from "@/assets/pudim.jpg";
import cookiesImg from "@/assets/cookies.jpg";
import bombomImg from "@/assets/bombom.jpg";
import brigadeiroImg from "@/assets/brigadeiro.jpg";

const recipes = [
  { name: "Brownie Proteico", kcal: 40, img: brownieImg },
  { name: "Bolo de Caneca", kcal: 70, img: mugCakeImg },
  { name: "Pudim de Chia e Coco", kcal: 98, img: pudimImg },
  { name: "Cookies Integrais", kcal: 13, img: cookiesImg },
  { name: "Bombom de Whey", kcal: 47, img: bombomImg },
  { name: "Barra Proteica de Whey", kcal: 12, img: brigadeiroImg },
];

const steps = [
  {
    icon: CheckCircle,
    title: "Compra Aprovada",
    text: "Assim que o pagamento for confirmado, você receberá o link de acesso imediatamente no seu E-mail e no WhatsApp.",
  },
  {
    icon: Mail,
    title: "Seu Login",
    text: "Para entrar na plataforma, basta usar o mesmo e-mail que você preencheu na hora da compra.",
  },
  {
    icon: Lock,
    title: "Crie sua Senha",
    text: "No primeiro acesso, crie uma senha segura e pronto! Já pode acessar todas as receitas pelo celular ou computador.",
  },
];

const RecipeShowcase = () => (
  <section className="py-16 px-4 gradient-warm">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-gradient-warm mb-4">
        Veja o que você vai aprender!
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        Só algumas das <strong className="text-foreground">200 receitas</strong> que vão transformar sua dieta
      </p>



      {/* Recipe Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {recipes.map((r) => (
          <div
            key={r.name}
            className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative">
              <img src={r.img} alt={r.name} className="w-full aspect-square object-cover" />
              <span className="absolute top-2 right-2 bg-badge-cal text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                🔥 {r.kcal} kcal
              </span>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-display font-bold text-foreground text-sm md:text-base">{r.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Access Steps */}
      <div className="mt-14">
        <h3 className="text-2xl md:text-3xl font-display font-extrabold text-center text-gradient-warm mb-8">
          Acesso imediato e descomplicado:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-card rounded-xl p-6 shadow-card text-center">
              <div className="flex justify-center mb-4">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-display font-bold text-foreground text-lg mb-2">
                Passo {i + 1}: {step.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-muted-foreground mb-4">...e muito mais!</p>
        <a
          href="#precos"
          className="inline-block gradient-cta text-accent-foreground font-bold text-lg px-8 py-3 rounded-full glow-cta hover:glow-cta-hover transition-all duration-300"
        >
          QUERO AS RECEITAS
        </a>
      </div>
    </div>
  </section>
);

export default RecipeShowcase;
