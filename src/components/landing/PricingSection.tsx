import { Check, Star, Gift, Users } from "lucide-react";

const PricingSection = () => (
  <section id="precos" className="py-16 px-4 gradient-warm">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-gradient-warm mb-12">
        Escolha seu plano
      </h2>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Essencial */}
        <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
          <h3 className="font-display font-bold text-2xl text-foreground mb-1">Plano Essencial</h3>
          <p className="text-muted-foreground text-sm mb-6 italic">
            "Pra quem quer bater a meta de proteína sem sofrer."
          </p>
          <div className="mb-6">
            <span className="text-price-old line-through text-lg">R$ 97</span>
            <p className="text-5xl font-display font-extrabold text-price-new">R$ 18</p>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              "200 Receitas com Whey: O guia completo de doces e sobremesas",
              "Macros Calculados: Saiba exatamente o que está comendo",
              "Acesso Vitalício: O material é seu para sempre",
              "Entrega no Zap e E-mail: Receba em segundos após o Pix",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://pay.kirvano.com/75b20320-1748-4edc-9d5a-3a6ab6a99817"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center gradient-cta text-accent-foreground font-bold py-3 rounded-full glow-cta hover:glow-cta-hover transition-all duration-300"
          >
            COMPRAR AGORA
          </a>
        </div>
        {/* Combo Shape Gourmet */}
        <div className="bg-card rounded-2xl p-8 shadow-warm border-2 border-primary relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-hero text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
            <Star className="w-3.5 h-3.5" /> 95% ESCOLHEM ESTE
          </div>
          <h3 className="font-display font-bold text-2xl text-foreground mb-1">Combo Shape Gourmet</h3>
          <p className="text-muted-foreground text-sm mb-6 italic">
            "O protocolo completo para nunca mais errar na dieta."
          </p>
          <div className="mb-6">
            <span className="text-price-old line-through text-lg">R$ 287</span>
            <p className="text-5xl font-display font-extrabold text-price-new">R$ 29</p>
            <p className="text-xs text-muted-foreground mt-1">Menos que um lanche do iFood</p>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2 text-sm text-foreground font-semibold">
              <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              Tudo do Plano Essencial
            </li>
            {[
              "+40 Receitas Salgadas com Whey (Pastinhas, quiches e crepiocas)",
              "+35 Receitas de Pré e Pós-treino (Mais energia e pump)",
              "Guia de Receitas para a Família (Até as crianças vão amar)",
              "+30 Delícias Inéditas para Air Fryer",
              "Sobremesas Proteicas Internacionais",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
            <li className="flex items-start gap-2 text-sm text-foreground">
              <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              Grupo VIP de Alunos: Troca de dicas e suporte exclusivo
            </li>
          </ul>
          <a
            href="https://pay.kirvano.com/64b020d6-08bf-4edd-b4b5-dceec43cc1f5"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center gradient-cta text-accent-foreground font-bold py-3 rounded-full glow-cta hover:glow-cta-hover transition-all duration-300"
          >
            COMPRAR AGORA
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
