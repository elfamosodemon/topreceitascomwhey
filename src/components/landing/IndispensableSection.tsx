const painPoints = [
  { emoji: "😫", text: "Enjoa do gosto todo dia" },
  { emoji: "🚫", text: "Não bate a meta de proteína" },
  { emoji: "💸", text: "Gasta com suplemento e não aproveita" },
  { emoji: "😒", text: "Dieta monótona e sem graça" },
  { emoji: "❌", text: "Acha que fit tem que ser sem sabor" },
  { emoji: "🔁", text: "Repete as mesmas 3 receitas sempre" },
];

const IndispensableSection = () => (
  <section className="py-16 md:py-20 px-4 bg-section-peach">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-1 uppercase">
        Você ainda mistura whey
      </h2>
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-cyan-highlight mb-4 uppercase">
        só com água?
      </h2>
      <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
        Isso está te fazendo desperdiçar o suplemento mais versátil da sua dieta. Reconhece algum desses?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {painPoints.map((p) => (
          <div
            key={p.text}
            className="bg-card rounded-xl px-5 py-4 shadow-card flex items-center gap-3 text-left"
          >
            <span className="text-2xl flex-shrink-0">{p.emoji}</span>
            <p className="text-foreground text-sm font-medium">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndispensableSection;
