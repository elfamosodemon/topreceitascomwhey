import { useState } from "react";
import { Check, Star, Gift, Users } from "lucide-react";
import UpsellModal from "./UpsellModal";
import bandeirasPagamento from "@/assets/bandeiras-pagamento.webp";

const PricingSection = () => {
  const [showUpsell, setShowUpsell] = useState(false);

  return (
    <>
      <section id="precos" className="py-16 md:py-20 px-4 bg-section-peach">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-foreground mb-1 uppercase">
            Escolha seu
          </h2>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-cyan-highlight mb-12 uppercase">
            plano
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Starter / Essencial */}
            <div className="bg-card rounded-2xl p-7 md:p-8 shadow-card border border-border">
              <span className="inline-block text-xs font-bold text-muted-foreground border border-border rounded px-3 py-1 mb-4 uppercase tracking-wider">
                Starter
              </span>
              <h3 className="font-display font-extrabold text-2xl text-foreground mb-1 uppercase">
                Kit Doces Fit com Whey
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Para quem quer começar agora
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "200 Receitas Fit com Whey",
                  "Tabela de calorias e macros",
                  "Modo de preparo detalhado com fotos",
                  "Suporte + Garantia 7 dias",
                  "Acesso vitalício",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'hsl(142 70% 42%)' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mb-6">
                <span className="text-muted-foreground line-through text-sm">De R$97</span>
                <p className="text-4xl font-display font-extrabold text-primary">R$19,90</p>
              </div>
              <button
                onClick={() => setShowUpsell(true)}
                className="block w-full text-center font-bold py-3.5 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-wide"
              >
                COMPRAR AGORA
              </button>
              <div className="flex items-center justify-center gap-3 mt-3 text-[11px] text-muted-foreground">
                <span>🔒 Pagamento seguro</span>
                <span>✅ Garantia 7 dias</span>
              </div>
            </div>

            {/* Premium / Combo */}
            <div className="bg-card rounded-2xl p-7 md:p-8 shadow-warm border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-hero text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                <Star className="w-3.5 h-3.5" /> MAIS ESCOLHIDO
              </div>
              <span className="inline-block text-xs font-bold text-primary-foreground rounded px-3 py-1 mb-4 uppercase tracking-wider gradient-hero">
                Premium
              </span>
              <h3 className="font-display font-extrabold text-2xl text-foreground mb-1 uppercase">
                Doce & Fit Premium
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                O sistema completo de alimentação fitness
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "200 Receitas Fit com Whey",
                  "Tabela de calorias e macros",
                  "Modo de preparo detalhado com fotos",
                  "Suporte + Garantia 7 dias",
                  "Acesso vitalício",
                  "+30 Receitas Inéditas para Air Fryer",
                  "+5 Sobremesas Proteicas Internacionais",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'hsl(142 70% 42%)' }} />
                    {item}
                  </li>
                ))}
                {[
                  "+35 Receitas Pré e Pós Treino",
                  "+40 Receitas Salgadas com Whey",
                  "Doces Fit para Crianças e Família",
                  "Acesso ao Grupo VIP no WhatsApp",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'hsl(142 70% 42%)' }} />
                    <span className="flex items-center gap-1.5">
                      🎁 {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mb-6">
                <span className="text-muted-foreground line-through text-sm">De R$187</span>
                <p className="text-4xl font-display font-extrabold text-primary">R$34,90</p>
              </div>
              <button
                onClick={() => (window as any).redirectWithParams("https://www.ggcheckout.com/checkout/v5/yylOi2P7GKXl9ci6Anwz")}
                className="block w-full text-center gradient-cta text-primary-foreground font-bold py-3.5 rounded-full glow-cta hover:glow-cta-hover transition-all duration-300 uppercase tracking-wide"
              >
                COMPRAR AGORA
              </button>
              <div className="flex items-center justify-center gap-3 mt-3 text-[11px] text-muted-foreground">
                <span>🔒 Pagamento seguro</span>
                <span>✅ Garantia 7 dias</span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <img
              src={bandeirasPagamento}
              alt="Formas de pagamento: Pix, Visa, Mastercard, American Express, Elo, Hipercard, Diners Club e Boleto"
              className="max-w-xs md:max-w-sm opacity-50"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
      <UpsellModal open={showUpsell} onClose={() => setShowUpsell(false)} />
    </>
  );
};

export default PricingSection;
