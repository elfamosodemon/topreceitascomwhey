import camilaImg from "@/assets/camila-pereira.webp";
import { AlertTriangle } from "lucide-react";

const AboutSection = () => (
  <section className="py-16 px-4 bg-muted">
    <div className="max-w-3xl mx-auto">
      {/* Card */}
      <div className="bg-card rounded-2xl shadow-card p-8 md:p-12">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src={camilaImg}
            alt="Camila Pereira, nutricionista e criadora do Doce Todo Dia, Shape Todo Ano"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover ring-4 ring-primary ring-offset-4 ring-offset-card"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Name & title */}
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground text-center mb-1">
          CAMILA PEREIRA
        </h2>
        <p className="text-muted-foreground text-sm text-center mb-8">
          Nutricionista · 11 mil seguidores no Instagram
        </p>

        {/* Quote */}
        <blockquote className="text-muted-foreground text-center text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto italic">
          "Passei meses testando cada receita para garantir que sabor, textura e macros batessem. Não é lista de ingredientes jogada num PDF. É um método desenvolvido por nutricionista para quem leva a dieta a sério — sem abrir mão do prazer de comer."
        </blockquote>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
          <div className="text-center">
            <p className="font-display font-extrabold text-xl md:text-2xl text-primary">14.800+</p>
            <p className="text-muted-foreground text-xs uppercase font-semibold tracking-wider">Compradores</p>
          </div>
          <div className="text-center">
            <p className="font-display font-extrabold text-xl md:text-2xl text-primary">+2 Anos</p>
            <p className="text-muted-foreground text-xs uppercase font-semibold tracking-wider">No Mercado</p>
          </div>
          <div className="text-center">
            <p className="font-display font-extrabold text-xl md:text-2xl text-primary">Garantia</p>
            <p className="text-muted-foreground text-xs uppercase font-semibold tracking-wider">Incondicional</p>
          </div>
        </div>
      </div>

      {/* Warning badge */}
      <div className="mt-6 flex justify-center">
        <div className="bg-primary/10 border border-primary/30 rounded-full px-6 py-3 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="text-sm font-semibold text-primary">
            Cuidado com imitações — este é o e-book original criado em 2024
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
