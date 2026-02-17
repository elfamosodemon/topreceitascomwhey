import { Check, Star } from "lucide-react";

const PricingSection = () => (
  <section id="precos" className="py-16 px-4 gradient-warm">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-gradient-warm mb-12">
        Escolha seu plano
      </h2>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Básico */}
        <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
          <h3 className="font-display font-bold text-2xl text-foreground mb-1">Plano Básico</h3>
          <p className="text-muted-foreground text-sm mb-6">"Doce Fit com Whey"</p>
          <div className="mb-6">
            <span className="text-price-old line-through text-lg">R$ 97</span>
            <p className="text-5xl font-display font-extrabold text-price-new">R$ 18</p>
          </div>
          <ul className="space-y-3 mb-8">
            {["200 receitas doces com whey", "Suporte por e-mail", "Acesso vitalício"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
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
        {/* Premium */}
        <div className="bg-card rounded-2xl p-8 shadow-warm border-2 border-primary relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-hero text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
            <Star className="w-3.5 h-3.5" /> MAIS VENDIDO
          </div>
          <h3 className="font-display font-bold text-2xl text-foreground mb-1">Plano Premium</h3>
          <p className="text-muted-foreground text-sm mb-6">"Doce Fit Premium"</p>
          <div className="mb-6">
            <span className="text-price-old line-through text-lg">R$ 197</span>
            <p className="text-5xl font-display font-extrabold text-price-new">R$ 29</p>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              "TUDO do plano Básico",
              "Todos os 4 Bônus inclusos",
              "+30 receitas para Air Fryer",
              "Sobremesas Internacionais",
              "Suporte prioritário",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                {item}
              </li>
            ))}
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
