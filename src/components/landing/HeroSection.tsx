import heroGirl from "@/assets/hero-girl-new.webp";

const HeroSection = () => (
  <section className="py-16 md:py-24 px-4 gradient-hero-bg relative overflow-hidden">
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
      <h1 className="text-3xl md:text-5xl font-display font-extrabold leading-tight mb-5 text-primary-foreground">
        Doce Todo Dia, Shape Todo Ano:{" "}
        <span className="block mt-1">
          <span className="relative inline-block">
            200 Opções Fit com Whey
            <span className="absolute left-0 right-0 bottom-0 h-3 bg-primary-foreground/20 rounded-sm -z-0" />
          </span>
        </span>{" "}
        que Matam a Vontade de Açúcar.
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-xl text-primary-foreground/85">
        Doces saudáveis, saborosos e fáceis de fazer — sem abrir mão da dieta!
      </p>

      {/* Hero image */}
      <div className="w-64 md:w-80 rounded-2xl overflow-hidden mb-8 shadow-2xl">
        <img
          src={heroGirl}
          alt="200 Receitas Fit com Whey - Livro e panquecas proteicas"
          className="w-full"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Price */}
      <div className="mb-6">
        <span className="line-through text-lg text-primary-foreground/60">De R$ 97</span>
        <span className="text-lg ml-2 text-primary-foreground">por apenas</span>
        <p className="text-5xl md:text-6xl font-display font-extrabold mt-1 text-primary-foreground">
          R$ 19,90
        </p>
      </div>

      {/* CTA */}
      <a
        href="#precos"
        className="inline-block text-accent-foreground font-bold text-lg md:text-xl px-10 py-4 rounded-full transition-all duration-300 animate-bounce-subtle gradient-cta glow-cta hover:glow-cta-hover"
      >
        QUERO AS RECEITAS
      </a>
    </div>
  </section>
);

export default HeroSection;
