import camilaImg from "@/assets/camila-pereira.webp";

const AboutSection = () => (
  <section className="py-16 md:py-20 px-4 bg-section-peach">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-1 uppercase">
        Por que o original
      </h2>
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-cyan-highlight mb-10 uppercase">
        é diferente
      </h2>

      {/* Author card */}
      <div className="bg-card rounded-2xl shadow-card p-8 md:p-10 max-w-2xl mx-auto mb-6">
        <img
          src={camilaImg}
          alt="Camila Pereira"
          className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20"
          loading="lazy"
          decoding="async"
        />
        <h3 className="font-display font-extrabold text-xl text-foreground mb-1 uppercase">Camila Pereira</h3>
        <p className="text-muted-foreground text-sm mb-6">
          Nutricionista · +40 mil seguidores no Instagram
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed italic max-w-lg mx-auto mb-8">
          "Nos meus anos de consultório, percebi que o maior vilão da dieta não é a fome, é a vontade de comer doce. Por isso, decidi juntar a ciência da nutrição com a confeitaria fit para criar 200 receitas que matam a vontade de açúcar, usando o whey protein a seu favor."
        </p>

        {/* Stats */}
        <div className="flex justify-center divide-x divide-border">
          {[
            { value: "14.800+", label: "COMPRADORES" },
            { value: "+2 ANOS", label: "NO MERCADO" },
            { value: "GARANTIA", label: "INCONDICIONAL" },
          ].map((s) => (
            <div key={s.label} className="px-4 md:px-8 text-center">
              <p className="font-display font-extrabold text-primary text-base md:text-lg">{s.value}</p>
              <p className="text-muted-foreground text-[10px] font-medium tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Warning badge */}
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-medium">
        ⚠️ Cuidado com imitações — este é o e-book original criado em 2024
      </div>
    </div>
  </section>
);

export default AboutSection;
