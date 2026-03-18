import bonusSalgadas from "@/assets/bonus-salgadas.jpg";
import bonusFamilia from "@/assets/bonus-familia.jpg";
import bonusPretreino from "@/assets/bonus-pretreino.jpg";
import bonusGrupo from "@/assets/bonus-grupo.jpg";

const bonuses = [
  { img: bonusSalgadas, num: "BÔNUS #01", title: "+40 Receitas Salgadas com Whey", desc: "Pastinhas, crepiocas, quiches e muito mais para variar o cardápio" },
  { img: bonusFamilia, num: "BÔNUS #02", title: "Doces Fit para Crianças e Família", desc: "Receitas que toda a família vai amar — sem culpa e sem bagunça" },
  { img: bonusPretreino, num: "BÔNUS #03", title: "+35 Receitas Pré e Pós Treino", desc: "Maximize seus resultados dentro e fora da academia" },
  { img: bonusGrupo, num: "BÔNUS #04", title: "Acesso ao Grupo VIP no WhatsApp", desc: "Suporte exclusivo, dicas diárias e comunidade ativa" },
];

const BonusSection = () => (
  <section className="py-16 md:py-20 px-4 bg-section-peach">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-foreground mb-1 uppercase">
        Você ainda leva
      </h2>
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-cyan-highlight mb-3 uppercase">
        tudo isso de graça
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        Bônus criados para fechar todas as lacunas da sua dieta
      </p>
      <div className="space-y-4">
        {bonuses.map((b) => (
          <div
            key={b.num}
            className="bg-card rounded-xl p-4 md:p-5 shadow-card flex items-center gap-4 md:gap-5"
          >
            <img
              src={b.img}
              alt={b.title}
              className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover flex-shrink-0"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-1">
              <span className="inline-block text-cyan-highlight text-[11px] font-bold tracking-wider uppercase mb-1">
                {b.num}
              </span>
              <h3 className="font-display font-bold text-base md:text-lg text-foreground">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BonusSection;
