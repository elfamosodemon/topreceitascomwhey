import { useState } from "react";
import { Heart, MessageCircle, Send, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import testimonialAna from "@/assets/testimonial-ana.webp";
import testimonialCarla from "@/assets/testimonial-carla.webp";
import testimonialCamila from "@/assets/testimonial-camila.webp";
import testimonialMilla from "@/assets/testimonial-milla.webp";
import testimonialMilena from "@/assets/testimonial-milena.webp";
import testimonialClaudio from "@/assets/testimonial-claudio.webp";
import testimonialRebeca from "@/assets/testimonial-rebeca.webp";
import testimonialRebecaPost from "@/assets/testimonial-rebeca-post.webp";

interface Testimonial {
  name: string;
  text: string;
  likes: number;
  time: string;
  image?: string;
  avatar?: string;
  fullImage?: boolean;
  color: string;
}

const testimonials: Testimonial[] = [
  { name: "Ana Costa", text: "Meu whey nunca mais ficou sem graça. Faço brownie proteico todo dia!", likes: 189, time: "há 2 dias", image: testimonialAna, color: "hsl(25 100% 50%)" },
  { name: "Milena Personal", text: "Nossa amei as receitas! No começo estava com receio achando que era golpe rs mas não, gente, as receitas chegaram pra mim. Receitas incríveis com baixo custo. Super vale a pena comprar o e-book das receitas. Ameiiiiiiii obg!", likes: 198, time: "há 3 dias", avatar: testimonialMilena, color: "hsl(280 70% 50%)" },
  { name: "Carla Rodrigues", text: "O brigadeiro proteico é surreal! Ninguém acredita que é fit.", likes: 156, time: "há 2 dias", image: testimonialCarla, color: "hsl(142 70% 42%)" },
  { name: "Milla Sathler", text: "Adorei! Acabei de comprar, fiquei com medo mas chegou tudo certinho. Muito legal pra poder ter mais ideias!", likes: 127, time: "há 1 dia", avatar: testimonialMilla, color: "hsl(200 70% 50%)" },
  { name: "Camila Ferreira", text: "Comprei o premium e valeu cada centavo. As receitas de air fryer são TOP!", likes: 342, time: "há 2 dias", image: testimonialCamila, color: "hsl(340 70% 50%)" },
  { name: "Claudio Nunes Gularte", text: "Muito legal as receitas, não vejo a hora de começar a fazer!", likes: 145, time: "há 1 dia", avatar: testimonialClaudio, color: "hsl(45 80% 45%)" },
  { name: "Rebeca Bianchi", text: "Amei a área de membros, super fácil de usar!", likes: 167, time: "há 2 dias", avatar: testimonialRebeca, image: testimonialRebecaPost, fullImage: true, color: "hsl(180 60% 45%)" },
  { name: "Mariana Silva", text: "Fiz o mousse de maracujá com whey, ficou igual de confeitaria. Meu marido não acreditou que era fit 😍", likes: 247, time: "2h", color: "hsl(200 70% 50%)" },
  { name: "Juliana Mendes", text: "Receitas fáceis e baratas. Até minha filha de 7 anos faz comigo.", likes: 183, time: "6h", color: "hsl(25 80% 50%)" },
  { name: "Fernanda Lima", text: "Achei que ia ser difícil. Fiz o bolo de caneca no primeiro dia e ficou perfeito.", likes: 231, time: "1d", color: "hsl(142 60% 45%)" },
  { name: "Patrícia Santos", text: "Minha mãe comeu o brownie e nem acreditou que era receita fitness.", likes: 194, time: "1d", color: "hsl(25 100% 50%)" },
  { name: "Roberta Alves", text: "Cookie em 10 minutos. Virou meu ritual antes do treino.", likes: 387, time: "2d", color: "hsl(280 60% 50%)" },
];

const getInitials = (name: string) =>
  name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();

const Stars = () => (
  <div className="flex gap-0.5 mb-2">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
    ))}
  </div>
);

const TestimonialCard = ({ t }: { t: Testimonial }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(t.likes);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="bg-card rounded-xl p-5 shadow-card border border-border/30">
      <Stars />
      <div className="flex items-center gap-3 mb-3">
        {t.avatar ? (
          <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" loading="lazy" decoding="async" />
        ) : (
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs text-primary-foreground"
            style={{ background: t.color }}
          >
            {getInitials(t.name)}
          </div>
        )}
        <div>
          <p className="font-bold text-foreground text-sm">{t.name}</p>
          <p className="text-muted-foreground text-xs">{t.time}</p>
        </div>
      </div>
      <p className="text-foreground text-sm leading-relaxed mb-3">{t.text}</p>
      {t.image && (
        <img
          src={t.image}
          alt="Foto da receita"
          className={`w-full rounded-lg mb-3 ${t.fullImage ? "object-contain" : "aspect-video object-cover"}`}
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border/30">
        <button
          onClick={toggleLike}
          className="flex items-center gap-1.5 cursor-pointer transition-colors duration-200"
        >
          <Heart className={`w-3.5 h-3.5 ${liked ? "fill-red-500 text-red-500" : ""}`} style={liked ? {} : {}} />
          <span className="font-medium" style={liked ? { color: 'hsl(0 84% 60%)' } : {}}>{likeCount}</span>
        </button>
        <span className="cursor-pointer hover:text-foreground">Curtir</span>
        <span className="cursor-pointer hover:text-foreground">Comentar</span>
      </div>
    </div>
  );
};

const TestimonialsSection = () => (
  <section className="py-16 md:py-20 px-4 bg-section-peach">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-foreground mb-1 uppercase">
        Mais de 14.800 pessoas já
      </h2>
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-cyan-highlight mb-3 uppercase">
        transformaram o whey
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        Resultados reais de quem aplicou as receitas na prática
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="#precos"
          className="inline-block gradient-cta text-primary-foreground font-bold text-base px-8 py-3.5 rounded-full glow-cta hover:glow-cta-hover transition-all duration-300 uppercase tracking-wide"
        >
          QUERO AS RECEITAS →
        </a>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
