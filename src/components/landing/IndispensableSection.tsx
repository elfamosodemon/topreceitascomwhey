import indispensableImg from "@/assets/indispensable.jpg";

const IndispensableSection = () => (
  <section className="py-16 px-4 bg-card">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gradient-warm mb-6">
        O que torna esse livro indispensável na sua rotina fitness?
      </h2>
      <img
        src={indispensableImg}
        alt="Pudins, Panquecas, Brigadeiros e Cookies"
        className="w-full max-w-lg mx-auto rounded-2xl shadow-warm mb-8"
      />
      <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
        Se você está consumindo whey com água, você está <strong className="text-foreground">perdendo sabor e oportunidade</strong>. 
        Transforme seu suplemento em receitas incríveis como:
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {["🍮 Pudins", "🥞 Panquecas", "🍫 Brigadeiros", "🍪 Cookies"].map((item) => (
          <span
            key={item}
            className="gradient-hero text-primary-foreground font-semibold px-5 py-2.5 rounded-full text-sm md:text-base"
          >
            {item}
          </span>
        ))}
      </div>
      <a
        href="#precos"
        className="inline-block gradient-cta text-accent-foreground font-bold text-lg px-8 py-3 rounded-full glow-cta hover:glow-cta-hover transition-all duration-300"
      >
        QUERO AS RECEITAS
      </a>
    </div>
  </section>
);

export default IndispensableSection;
