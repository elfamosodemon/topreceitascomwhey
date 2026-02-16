import heroBook from "@/assets/hero-book.jpg";

const HeroSection = () => (
  <section className="gradient-hero py-12 md:py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl md:text-5xl font-display font-extrabold text-primary-foreground leading-tight mb-4">
        Doce Todo Dia, Shape Todo Ano:{" "}
        <span className="block">200 Opções Fit com Whey que Matam a Vontade de Açúcar.</span>
      </h1>
      <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Doces saudáveis, saborosos e fáceis de fazer — sem abrir mão da dieta!
      </p>
      <img
        src={heroBook}
        alt="Livro 200 Receitas Fit com Whey"
        className="w-64 md:w-80 mx-auto rounded-2xl shadow-warm mb-8"
      />
      <div className="mb-6">
        <span className="text-primary-foreground/70 line-through text-lg">De R$ 97</span>
        <span className="text-primary-foreground text-lg ml-2">por apenas</span>
        <p className="text-5xl md:text-6xl font-display font-extrabold text-primary-foreground mt-1">
          R$ 18
        </p>
      </div>
      <a
        href="#precos"
        className="inline-block gradient-cta text-accent-foreground font-bold text-lg md:text-xl px-10 py-4 rounded-full glow-cta hover:glow-cta-hover transition-all duration-300 animate-bounce-subtle"
      >
        QUERO AS RECEITAS
      </a>
    </div>
  </section>
);

export default HeroSection;
