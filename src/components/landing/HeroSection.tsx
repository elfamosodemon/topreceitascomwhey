import heroGirl from "@/assets/hero-girl.jpg";

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
            R$ 18
          </p>
        </div>
      </div>

      {/* Hero image + CTA below */}
      <div className="flex-shrink-0 flex flex-col items-center gap-6">
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
          />
        </div>
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
