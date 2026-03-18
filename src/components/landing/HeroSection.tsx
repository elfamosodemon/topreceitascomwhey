import heroGirl from "@/assets/hero-girl-new.webp";
import camilaImg from "@/assets/camila-pereira.webp";

const HeroSection = () => (
  <section className="gradient-hero-bg relative overflow-hidden">
    {/* Main hero */}
    <div className="pt-12 pb-8 md:pt-20 md:pb-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-display font-extrabold leading-tight mb-4 text-primary-foreground uppercase">
          Doce Todo Dia, Shape Todo Ano:{" "}
          <span className="block mt-1">200 Opções Fit com Whey</span>{" "}
          que Matam a Vontade de Açúcar.
        </h1>
        <p className="text-base md:text-lg mb-8 max-w-xl text-primary-foreground/80">
          Doces saudáveis, saborosos e fáceis de fazer — sem abrir mão da dieta!
        </p>

        {/* Hero image */}
        <div className="w-52 md:w-72 rounded-2xl overflow-hidden mb-8" style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.25)' }}>
          <img
            src={heroGirl}
            alt="200 Receitas Fit com Whey - Livro e panquecas proteicas"
            className="w-full"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        {/* Author badge */}
        <div className="bg-card/95 backdrop-blur rounded-xl px-5 py-3 flex items-center gap-3 mb-6 shadow-card">
          <img src={camilaImg} alt="Camila Pereira" className="w-11 h-11 rounded-full object-cover" loading="eager" />
          <div className="text-left">
            <p className="font-bold text-foreground text-sm">Camila Pereira</p>
            <p className="text-muted-foreground text-xs">Nutricionista · +40 mil seguidores</p>
            <span className="inline-block mt-0.5 text-[10px] font-bold text-accent-foreground px-2 py-0.5 rounded-full" style={{ background: 'hsl(142 70% 42%)' }}>
              ✓ Criadora do e-book original desde 2024
            </span>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-card rounded-xl shadow-card flex divide-x divide-border mb-6 overflow-hidden">
          {[
            { value: "14.800+", label: "COMPRADORES" },
            { value: "200", label: "RECEITAS" },
            { value: "7 DIAS", label: "GARANTIA" },
          ].map((s) => (
            <div key={s.label} className="px-5 md:px-8 py-3 text-center">
              <p className="font-display font-extrabold text-primary text-lg md:text-xl">{s.value}</p>
              <p className="text-muted-foreground text-[10px] md:text-xs font-medium tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
