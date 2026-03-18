import { ShieldCheck, BadgeCheck, Zap } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Compra 100% Segura",
    subtitle: "Ambiente protegido e dados criptografados.",
  },
  {
    icon: BadgeCheck,
    title: "30 Dias de Garantia",
    subtitle: "Risco zero. Satisfação garantida ou seu dinheiro de volta.",
  },
  {
    icon: Zap,
    title: "Acesso Imediato",
    subtitle: "Receba o acesso na hora via E-mail e WhatsApp.",
  },
];

const TrustBadgesSection = () => (
  <section className="py-12 px-4 bg-card">
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {badges.map((badge) => (
        <div
          key={badge.title}
          className="flex flex-col items-center text-center gap-3 p-5 rounded-xl bg-section-peach"
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center gradient-hero">
            <badge.icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="font-display font-bold text-base text-foreground">{badge.title}</h3>
          <p className="text-xs text-muted-foreground">{badge.subtitle}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBadgesSection;
