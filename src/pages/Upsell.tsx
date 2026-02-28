import { ShoppingCart, Gift, Check, Users, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const benefits = [
  { icon: Gift, text: "+40 Receitas Salgadas com Whey" },
  { icon: Gift, text: "+35 Receitas de Pré e Pós-treino" },
  { icon: Gift, text: "+30 Delícias Inéditas para Air Fryer" },
  { icon: Users, text: "Acesso imediato ao Grupo VIP" },
];

const Upsell = () => (
  <div className="min-h-screen bg-background">
    {/* Progress bar area */}
    <div className="w-full px-4 pt-6 pb-2 max-w-2xl mx-auto">
      <p className="text-sm text-muted-foreground text-center mb-2 font-medium">
        Quase lá... Seu pedido ainda não foi finalizado.
      </p>
      <Progress value={85} className="h-3 bg-muted" />
    </div>

    {/* Main content */}
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Urgency headline */}
      <h1 className="text-2xl md:text-3xl font-display font-extrabold text-center text-destructive uppercase mb-6 leading-tight">
        🚨 ESPERA! Não feche esta página ainda...
      </h1>

      {/* Hook */}
      <p className="text-center text-lg md:text-xl font-semibold text-foreground mb-8 leading-relaxed">
        Você está a um clique de levar o{" "}
        <span className="font-extrabold">Combo Shape Gourmet COMPLETO</span>{" "}
        pagando apenas{" "}
        <span className="bg-highlight/40 text-price-new font-extrabold px-2 py-0.5 rounded">
          R$ 2,90 a mais
        </span>
        .
      </p>

      {/* Value comparison box */}
      <div className="border-2 border-dashed border-border bg-muted/40 rounded-2xl p-6 mb-8">
        <p className="text-foreground text-base md:text-lg leading-relaxed text-center">
          O Plano Essencial custa{" "}
          <span className="font-bold">R$&nbsp;18</span>. O Combo Completo custa{" "}
          <span className="font-bold">R$&nbsp;29</span>. Mas exclusivamente
          nesta tela, você destrava{" "}
          <span className="font-extrabold text-primary uppercase">TUDO</span>{" "}
          por apenas{" "}
          <span className="text-2xl font-display font-extrabold text-price-new">
            R$&nbsp;20,90
          </span>
          .
        </p>
      </div>

      {/* Benefits list */}
      <ul className="space-y-3 mb-10 max-w-md mx-auto">
        {benefits.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-3 text-foreground font-medium">
            <Icon className="w-5 h-5 text-accent flex-shrink-0" />
            {text}
          </li>
        ))}
      </ul>

      {/* CTA Buttons */}
      <div className="flex flex-col items-center gap-4">
        <a
          href="https://www.ggcheckout.com/checkout/v2/A8q8FtayMinvM3VWnUg1"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center gradient-cta text-accent-foreground font-extrabold text-lg md:text-xl py-5 rounded-full glow-cta hover:glow-cta-hover transition-all duration-300 animate-pulse-slow flex items-center justify-center gap-3"
        >
          <ShoppingCart className="w-6 h-6" />
          SIM! QUERO ADICIONAR TUDO POR R$ 20,90
        </a>

        <a
          href="https://www.ggcheckout.com/checkout/v5/pUjybKogGwD3UpX1iQ9i"
          className="text-muted-foreground text-sm text-center hover:underline mt-2"
        >
          Não, obrigado. Quero apenas o plano básico e abrir mão de todos os
          bônus exclusivos.
        </a>
      </div>
    </div>
  </div>
);

export default Upsell;
