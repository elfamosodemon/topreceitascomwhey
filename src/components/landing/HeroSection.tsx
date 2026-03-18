import heroGirl from "@/assets/hero-girl-new.webp";
import camilaImg from "@/assets/camila-pereira.webp";
import { Instagram } from "lucide-react";

const HeroSection = () => (
  <section className="py-16 md:py-24 px-4" style={{ background: '#FFFBF0' }}>
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
      {/* Text content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-display font-extrabold leading-tight mb-5" style={{ color: '#1A1A1A' }}>
          Doce Todo Dia, Shape Todo Ano:{" "}
          <span className="text-gradient-warm">200 Opções Fit com Whey</span> que Matam a Vontade de Açúcar.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl" style={{ color: '#444' }}>
          Doces saudáveis, saborosos e fáceis de fazer — sem abrir mão da dieta!
        </p>
        <div className="mb-6">
          <span className="line-through text-lg" style={{ color: '#999' }}>De R$ 97</span>
          <span className="text-lg ml-2" style={{ color: '#1A1A1A' }}>por apenas</span>
          <p className="text-5xl md:text-6xl font-display font-extrabold mt-1" style={{ color: '#1A1A1A' }}>
            R$ 19,90
          </p>
        </div>
      </div>

      {/* Hero image + Badge + CTA */}
      <div className="flex-shrink-0 flex flex-col items-center gap-5">
        <div
          className="w-72 md:w-96 rounded-2xl overflow-hidden"
          style={{
            boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={heroGirl}
            alt="200 Receitas Fit com Whey - Livro e panquecas proteicas"
            className="w-full"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        {/* Author Badge */}
        <div className="w-72 md:w-96 rounded-2xl bg-primary p-4">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={camilaImg}
              alt="Camila Pereira"
              className="w-12 h-12 rounded-full object-cover border-2 border-primary-foreground flex-shrink-0"
              loading="eager"
              decoding="async"
            />
            <div>
              <p className="font-display font-bold text-primary-foreground text-sm leading-tight">Camila Pereira</p>
              <p className="text-primary-foreground/80 text-xs">
                Nutricionista · 11 mil seguidores
              </p>
              <a
                href="https://www.instagram.com/receitasfitcomwhey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary-foreground/90 text-xs hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-3 h-3" /> @receitasfitcomwhey
              </a>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
              ✓ Criadora do e-book original desde 2024
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="bg-primary-foreground/15 rounded-lg py-2 text-center">
              <p className="font-display font-extrabold text-primary-foreground text-base leading-none">14.800+</p>
              <p className="text-primary-foreground/70 text-[10px] mt-0.5 uppercase font-semibold">Compradores</p>
            </div>
            <div className="bg-primary-foreground/15 rounded-lg py-2 text-center">
              <p className="font-display font-extrabold text-primary-foreground text-base leading-none">200</p>
              <p className="text-primary-foreground/70 text-[10px] mt-0.5 uppercase font-semibold">Receitas</p>
            </div>
            <div className="bg-primary-foreground/15 rounded-lg py-2 text-center">
              <p className="font-display font-extrabold text-primary-foreground text-base leading-none">7 Dias</p>
              <p className="text-primary-foreground/70 text-[10px] mt-0.5 uppercase font-semibold">Garantia</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#precos"
          className="inline-block text-accent-foreground font-bold text-lg md:text-xl px-10 py-4 rounded-full transition-all duration-300 animate-bounce-subtle"
          style={{
            background: 'linear-gradient(135deg, #10B981, #059669)',
            boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)',
          }}
        >
          QUERO AS RECEITAS
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
