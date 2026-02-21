import { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import testimonialAna from "@/assets/testimonial-ana.jpg";
import testimonialCarla from "@/assets/testimonial-carla.jpg";
import testimonialCamila from "@/assets/testimonial-camila.jpg";

interface Testimonial {
  name: string;
  text: string;
  likes: number;
  time: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  { name: "Mariana Silva", text: "Finalmente consegui matar minha vontade de doce sem sair da dieta! As receitas são incríveis.", likes: 234, time: "há 2 dias" },
  { name: "Ana Costa", text: "Meu whey nunca mais ficou sem graça. Faço brownie proteico todo dia!", likes: 189, time: "há 2 dias", image: testimonialAna },
  { name: "Juliana Mendes", text: "Até meu marido que não faz dieta amou as receitas. Virou rotina aqui em casa.", likes: 312, time: "há 2 dias" },
  { name: "Carla Rodrigues", text: "O brigadeiro proteico é surreal! Ninguém acredita que é fit.", likes: 156, time: "há 2 dias", image: testimonialCarla },
  { name: "Fernanda Lima", text: "Melhor investimento que fiz. Emagreci 8kg comendo doce todo dia.", likes: 445, time: "há 2 dias" },
  { name: "Patrícia Santos", text: "As receitas são super fáceis, faço em menos de 10 minutos.", likes: 201, time: "há 2 dias" },
  { name: "Roberta Alves", text: "O grupo VIP do WhatsApp é maravilhoso! Sempre tem dicas novas.", likes: 178, time: "há 2 dias" },
  { name: "Camila Ferreira", text: "Comprei o premium e valeu cada centavo. As receitas de air fryer são TOP!", likes: 342, time: "há 2 dias", image: testimonialCamila },
];

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("");

const TestimonialCard = ({ t }: { t: Testimonial }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(t.likes);
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");
  const { toast } = useToast();

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleSendReply = () => {
    if (!replyText.trim()) return;
    toast({
      title: "Comentário enviado! ✅",
      description: "Seu comentário foi enviado e está em análise pela moderação.",
    });
    setReplyText("");
    setShowReply(false);
  };

  return (
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
      <div className="flex items-center gap-5 text-xs">
        <button
          onClick={toggleLike}
          className="flex items-center gap-1.5 cursor-pointer transition-colors duration-200 hover:opacity-80"
          style={{ color: liked ? "hsl(0 84% 60%)" : "hsl(var(--muted-foreground))" }}
        >
          <Heart className={`w-4 h-4 transition-all duration-200 ${liked ? "fill-current scale-110" : ""}`} />
          <span className="font-medium">{likeCount}</span>
        </button>
        <button
          onClick={() => setShowReply((prev) => !prev)}
          className="flex items-center gap-1.5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors duration-200"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Responder</span>
        </button>
      </div>

      {showReply && (
        <div className="mt-3 flex gap-2 animate-in slide-in-from-top-2 duration-200">
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendReply()}
            placeholder="Escreva sua resposta..."
            className="flex-1 text-sm rounded-lg border border-border bg-background px-3 py-2 focus:outline-none focus:ring-1 focus:ring-accent"
          />
          <button
            onClick={handleSendReply}
            className="flex items-center gap-1 text-sm font-medium text-accent-foreground px-3 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}
          >
            <Send className="w-3.5 h-3.5" />
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};

const TestimonialsSection = () => (
  <section className="py-16 px-4" style={{ background: "#FAFAF8" }}>
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-gradient-warm mb-2">
        Resultados Reais da Nossa Comunidade
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        Veja o que estão dizendo sobre as receitas 💬
      </p>
      <div className="columns-1 md:columns-2 gap-4">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="https://www.ggcheckout.com/checkout/v5/yylOi2P7GKXl9ci6Anwz"
          className="inline-block font-bold text-lg px-8 py-3 rounded-full text-accent-foreground transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #10B981, #059669)",
            boxShadow: "0 6px 20px rgba(16, 185, 129, 0.35)",
          }}
        >
          QUERO AS RECEITAS
        </a>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
