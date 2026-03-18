import brownieImg from "@/assets/brownie.webp";
import mugCakeImg from "@/assets/mug-cake.webp";
import pudimImg from "@/assets/pudim.webp";
import cookiesImg from "@/assets/cookies.webp";
import bombomImg from "@/assets/bombom.webp";
import brigadeiroImg from "@/assets/brigadeiro.webp";

const recipes = [
  { name: "Brownie Proteico com Cacau", kcal: 40, img: brownieImg },
  { name: "Bolo de Caneca com Banana", kcal: 70, img: mugCakeImg },
  { name: "Pudim Fit de Coco", kcal: 98, img: pudimImg },
  { name: "Cookies com Castanhas", kcal: 13, img: cookiesImg },
  { name: "Bombom de Whey", kcal: 47, img: bombomImg },
  { name: "Brigadeiro Proteico", kcal: 12, img: brigadeiroImg },
];

const RecipeShowcase = () => (
  <section className="py-16 md:py-20 px-4 bg-section-peach">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-foreground mb-1 uppercase">
        Veja o que você vai
      </h2>
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-cyan-highlight mb-4 uppercase">
        aprender a fazer
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        Receitas para todos os momentos — sobremesa, lanche, pós-treino ou conforto emocional.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map((r) => (
          <div
            key={r.name}
            className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300"
          >
            <div className="relative">
              <img src={r.img} alt={r.name} className="w-full aspect-[4/3] object-cover" loading="lazy" decoding="async" />
              <span className="absolute top-2 right-2 text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: 'hsl(25 100% 50%)' }}>
                🔥 {r.kcal} kcal
              </span>
            </div>
            <div className="p-3">
              <h3 className="font-display font-bold text-foreground text-sm">{r.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="#precos"
          className="inline-block gradient-cta text-primary-foreground font-bold text-base px-8 py-3.5 rounded-full glow-cta hover:glow-cta-hover transition-all duration-300 uppercase tracking-wide"
        >
          QUERO AS RECEITAS →
        </a>
      </div>
    </div>
  </section>
);

export default RecipeShowcase;
