import { ShoppingCart, Gift, Users, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const benefits = [
  { icon: Gift, text: "+40 Receitas Salgadas com Whey" },
  { icon: Gift, text: "+35 Receitas de Pré e Pós-treino" },
  { icon: Gift, text: "+30 Delícias Inéditas para Air Fryer" },
  { icon: Users, text: "Acesso imediato ao Grupo VIP" },
];

interface UpsellModalProps {
  open: boolean;
  onClose: () => void;
}

const UpsellModal = ({ open, onClose }: UpsellModalProps) => {
  if (!open) return null;

  const handleDecline = () => {
    onClose();
    window.open("https://www.ggcheckout.com/checkout/v5/pUjybKogGwD3UpX1iQ9i", "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-warm max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <button
          onClick={handleDecline}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {/* Progress bar */}
          <p className="text-sm text-muted-foreground text-center mb-2 font-medium">
            Quase lá... Seu pedido ainda não foi finalizado.
          </p>
          <Progress value={85} className="h-3 bg-muted mb-6" />

          {/* Urgency headline */}
          <h2 className="text-xl md:text-2xl font-display font-extrabold text-center text-destructive uppercase mb-5 leading-tight">
            🚨 ESPERA! Não feche ainda...
          </h2>

          {/* Hook */}
          <p className="text-center text-base md:text-lg font-semibold text-foreground mb-6 leading-relaxed">
            Você está a um clique de levar o{" "}
            <span className="font-extrabold">Combo Shape Gourmet COMPLETO</span>{" "}
            pagando apenas{" "}
            <span className="bg-highlight/40 text-price-new font-extrabold px-2 py-0.5 rounded">
              R$ 2,90 a mais
            </span>
            .
          </p>

          {/* Value box */}
          <div className="border-2 border-dashed border-border bg-muted/40 rounded-xl p-5 mb-6">
            <p className="text-foreground text-sm md:text-base leading-relaxed text-center">
              O Plano Essencial custa <span className="font-bold">R$&nbsp;18</span>.
              O Combo Completo custa <span className="font-bold">R$&nbsp;29</span>.
              Mas exclusivamente agora, você destrava{" "}
              <span className="font-extrabold text-primary uppercase">TUDO</span>{" "}
              por apenas{" "}
              <span className="text-xl font-display font-extrabold text-price-new">
                R$&nbsp;20,90
              </span>
              .
            </p>
          </div>

          {/* Benefits */}
          <ul className="space-y-2.5 mb-8">
            {benefits.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-foreground text-sm font-medium">
                <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                {text}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-3">
            <a
              href="https://www.ggcheckout.com/checkout/v2/A8q8FtayMinvM3VWnUg1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center gradient-cta text-accent-foreground font-extrabold text-base md:text-lg py-4 rounded-full glow-cta hover:glow-cta-hover transition-all duration-300 animate-pulse-slow flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              SIM! QUERO TUDO POR R$ 20,90
            </a>

            <button
              onClick={handleDecline}
              className="text-muted-foreground text-xs text-center hover:underline mt-1 bg-transparent border-none cursor-pointer"
            >
              Não, obrigado. Quero apenas o plano básico e abrir mão de todos os
              bônus exclusivos.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpsellModal;
