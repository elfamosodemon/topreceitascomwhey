import camilaImg from "@/assets/camila-pereira.webp";

const AboutSection = () => (
  <section className="py-16 px-4 bg-muted">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-5/12 flex-shrink-0">
        <img
          src={camilaImg}
          alt="Camila Pereira, nutricionista e criadora do Doce Todo Dia, Shape Todo Ano"
          className="rounded-full shadow-card w-44 h-44 md:w-56 md:h-56 object-cover mx-auto"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="w-full md:w-7/12">
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gradient-warm mb-2">
          Muito prazer, sou Camila Pereira
        </h2>
        <p className="text-primary font-semibold text-lg mb-6">
          Nutricionista e Criadora do "Doce Todo Dia, Shape Todo Ano"
        </p>
        <p className="text-muted-foreground leading-relaxed text-base">
          Nos meus anos de consultório, percebi que o maior vilão da dieta não é a fome, é a vontade de comer doce. Vi centenas de alunos desistirem dos seus objetivos porque não aguentavam mais comer frango com batata doce e restrições extremas.
        </p>
        <p className="text-muted-foreground leading-relaxed text-base mt-4">
          Por isso, decidi juntar a ciência da nutrição com a confeitaria fit para criar 200 receitas que enganam o cérebro e matam a vontade de açúcar, usando o whey protein a seu favor.
        </p>
        <p className="text-foreground font-semibold leading-relaxed text-base mt-4">
          Meu objetivo é te provar que você pode, sim, comer um doce delicioso todos os dias e ainda assim conquistar o melhor shape da sua vida.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
