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
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {badges.map((badge) => (
        <div
          key={badge.title}
          className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-border bg-background"
        >
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/10">
            <badge.icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-display font-bold text-lg text-foreground">{badge.title}</h3>
          <p className="text-sm text-muted-foreground">{badge.subtitle}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBadgesSection;
