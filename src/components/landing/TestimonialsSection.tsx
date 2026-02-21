import { Heart, MessageCircle } from "lucide-react";
import brownieImg from "@/assets/brownie.jpg";
import brigadeiroImg from "@/assets/brigadeiro.jpg";
import cookiesImg from "@/assets/cookies.jpg";

interface Testimonial {
  name: string;
  text: string;
  likes: number;
  time: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  { name: "Mariana Silva", text: "Finalmente consegui matar minha vontade de doce sem sair da dieta! As receitas são incríveis.", likes: 234, time: "há 2 dias" },
  { name: "Ana Costa", text: "Meu whey nunca mais ficou sem graça. Faço brownie proteico todo dia!", likes: 189, time: "há 2 dias", image: brownieImg },
  { name: "Juliana Mendes", text: "Até meu marido que não faz dieta amou as receitas. Virou rotina aqui em casa.", likes: 312, time: "há 2 dias" },
  { name: "Carla Rodrigues", text: "O brigadeiro proteico é surreal! Ninguém acredita que é fit.", likes: 156, time: "há 2 dias", image: brigadeiroImg },
  { name: "Fernanda Lima", text: "Melhor investimento que fiz. Emagreci 8kg comendo doce todo dia.", likes: 445, time: "há 2 dias" },
  { name: "Patrícia Santos", text: "As receitas são super fáceis, faço em menos de 10 minutos.", likes: 201, time: "há 2 dias" },
  { name: "Roberta Alves", text: "O grupo VIP do WhatsApp é maravilhoso! Sempre tem dicas novas.", likes: 178, time: "há 2 dias" },
  { name: "Camila Ferreira", text: "Comprei o premium e valeu cada centavo. As receitas de air fryer são TOP!", likes: 342, time: "há 2 dias", image: cookiesImg },
];

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("");

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <div className="bg-card rounded-2xl p-5 shadow-card break-inside-avoid mb-4 border border-border/50 hover:shadow-warm transition-all duration-300">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center font-bold text-sm text-accent">
        {getInitials(t.name)}
      </div>
      <div className="flex-1">
        <p className="font-semibold text-foreground text-sm">{t.name}</p>
        <p className="text-muted-foreground text-xs">{t.time}</p>
      </div>
    </div>
    <p className="text-foreground text-sm leading-relaxed mb-3">{t.text}</p>
    {t.image && (
      <img
        src={t.image}
        alt="Foto da receita"
        className="w-full rounded-xl mb-3 aspect-video object-cover"
      />
    )}
    <div className="flex items-center gap-4 text-muted-foreground text-xs">
      <div className="flex items-center gap-1.5">
        <Heart className="w-4 h-4 text-destructive fill-destructive" />
        <span>{t.likes}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <MessageCircle className="w-4 h-4" />
        <span>Responder</span>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => (
  <section className="py-16 px-4" style={{ background: '#FAFAF8' }}>
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-gradient-warm mb-2">
        Resultados Reais da Nossa Comunidade
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        Veja o que estão dizendo sobre as receitas 💬
      </p>

      {/* Masonry two-column layout */}
      <div className="columns-1 md:columns-2 gap-4">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="#precos"
          className="inline-block font-bold text-lg px-8 py-3 rounded-full text-accent-foreground transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #10B981, #059669)',
            boxShadow: '0 6px 20px rgba(16, 185, 129, 0.35)',
          }}
        >
          QUERO AS RECEITAS
        </a>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
