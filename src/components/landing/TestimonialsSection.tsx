import { Heart } from "lucide-react";

const testimonials = [
  { name: "Mariana Silva", text: "Finalmente consegui matar minha vontade de doce sem sair da dieta! As receitas são incríveis.", likes: 234 },
  { name: "Ana Costa", text: "Meu whey nunca mais ficou sem graça. Faço brownie proteico todo dia!", likes: 189 },
  { name: "Juliana Mendes", text: "Até meu marido que não faz dieta amou as receitas. Virou rotina aqui em casa.", likes: 312 },
  { name: "Carla Rodrigues", text: "O brigadeiro proteico é surreal! Ninguém acredita que é fit.", likes: 156 },
  { name: "Fernanda Lima", text: "Melhor investimento que fiz. Emagreci 8kg comendo doce todo dia.", likes: 445 },
  { name: "Patrícia Santos", text: "As receitas são super fáceis, faço em menos de 10 minutos.", likes: 201 },
  { name: "Roberta Alves", text: "O grupo VIP do WhatsApp é maravilhoso! Sempre tem dicas novas.", likes: 178 },
  { name: "Camila Ferreira", text: "Comprei o premium e valeu cada centavo. As receitas de air fryer são TOP!", likes: 267 },
];

const TestimonialsSection = () => (
  <section className="py-16 px-4 bg-card">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-gradient-warm mb-12">
        O Que Nossos Clientes Estão Dizendo:
      </h2>
      <div className="space-y-4">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-background rounded-xl p-5 shadow-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">há 2 dias</p>
              </div>
            </div>
            <p className="text-foreground text-sm mb-3">{t.text}</p>
            <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
              <span>{t.likes}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
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

export default TestimonialsSection;
