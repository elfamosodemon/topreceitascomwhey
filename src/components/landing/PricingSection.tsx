import { useState } from "react";
import { Check, Star, Gift, Lock, ShieldCheck } from "lucide-react";
import UpsellModal from "./UpsellModal";
import bandeirasImg from "@/assets/bandeiras-pagamento.webp";

const PricingSection = () => {
  const [showUpsell, setShowUpsell] = useState(false);

  return (
    <>
      <section id="precos" className="py-16 px-4 gradient-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-gradient-warm mb-12">
            Escolha seu plano
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Starter */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground border border-border rounded-full px-3 py-1 mb-4">
                Starter
              </span>
              <h3 className="font-display font-extrabold text-2xl text-foreground mb-1">
                Kit Doces Fit com Whey
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Para quem quer começar agora
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "200 Receitas Fit com Whey",
                  "Tabela de calorias e macros",
                  "Modo de preparo detalhado com fotos",
                  "Suporte + Garantia 7 dias",
                  "Acesso vitalício",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mb-6">
                <span className="text-price-old line-through text-base">De R$97</span>
                <p className="text-5xl font-display font-extrabold text-primary">R$ 19,90</p>
              </div>
              <button
                onClick={() => setShowUpsell(true)}
                className="block w-full text-center border-2 border-primary text-primary font-bold py-3.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-base"
              >
                COMPRAR AGORA
              </button>
              <div className="flex items-center justify-center gap-3 mt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Pagamento seguro</span>
                <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Garantia 7 dias</span>
              </div>
            </div>

            {/* Premium */}
            <div className="bg-card rounded-2xl p-8 shadow-warm border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-hero text-primary-foreground text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1 whitespace-nowrap">
                <Star className="w-3.5 h-3.5" /> MAIS ESCOLHIDO
              </div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/30 rounded-full px-3 py-1 mb-4">
                Premium
              </span>
              <h3 className="font-display font-extrabold text-2xl text-foreground mb-1">
                Doce & Fit Premium
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                O sistema completo de alimentação fitness
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "200 Receitas Fit com Whey",
                  "Tabela de calorias e macros",
                  "Modo de preparo detalhado com fotos",
                  "Suporte + Garantia 7 dias",
                  "Acesso vitalício",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
                <li className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  +30 Receitas Inéditas para Air Fryer
                </li>
                <li className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  +5 Sobremesas Proteicas Internacionais
                </li>
                {[
                  "+35 Receitas Pré e Pós Treino",
                  "+40 Receitas Salgadas com Whey",
                  "Doces Fit para Crianças e Família",
                  "Acesso ao Grupo VIP no WhatsApp",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mb-6">
                <span className="text-price-old line-through text-base">De R$287</span>
                <p className="text-5xl font-display font-extrabold text-primary">R$ 34,90</p>
              </div>
              <button
                onClick={() => (window as any).redirectWithParams("https://www.ggcheckout.com/checkout/v5/yylOi2P7GKXl9ci6Anwz")}
                className="block w-full text-center gradient-hero text-primary-foreground font-bold py-3.5 rounded-full hover:opacity-90 transition-all duration-300 text-base"
                style={{
                  boxShadow: '0 6px 20px hsl(25 100% 50% / 0.35)',
                }}
              >
                COMPRAR AGORA
              </button>
              <div className="flex items-center justify-center gap-3 mt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Pagamento seguro</span>
                <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Garantia 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UpsellModal open={showUpsell} onClose={() => setShowUpsell(false)} />
    </>
  );
};

export default PricingSection;
