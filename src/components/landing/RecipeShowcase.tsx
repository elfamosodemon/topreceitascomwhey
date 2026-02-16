import brownieImg from "@/assets/brownie.jpg";
import mugCakeImg from "@/assets/mug-cake.jpg";
import pudimImg from "@/assets/pudim.jpg";
import cookiesImg from "@/assets/cookies.jpg";
import bombomImg from "@/assets/bombom.jpg";
import brigadeiroImg from "@/assets/brigadeiro.jpg";

const recipes = [
  { name: "Brownie Proteico", kcal: 40, img: brownieImg },
  { name: "Bolo de Caneca", kcal: 70, img: mugCakeImg },
  { name: "Pudim de Coco", kcal: 98, img: pudimImg },
  { name: "Cookies Integrais", kcal: 13, img: cookiesImg },
  { name: "Bombom de Whey", kcal: 47, img: bombomImg },
  { name: "Brigadeiro Proteico", kcal: 12, img: brigadeiroImg },
];

const RecipeShowcase = () => (
  <section className="py-16 px-4 gradient-warm">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-gradient-warm mb-4">
        Veja o que você vai aprender!
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        Só algumas das <strong className="text-foreground">200 receitas</strong> que vão transformar sua dieta
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {recipes.map((r) => (
          <div
            key={r.name}
            className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative">
              <img src={r.img} alt={r.name} className="w-full aspect-square object-cover" />
              <span className="absolute top-2 right-2 bg-badge-cal text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                🔥 {r.kcal} kcal
              </span>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-display font-bold text-foreground text-sm md:text-base">{r.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <p className="text-muted-foreground mb-4">...e muito mais!</p>
        <a
          href="#precos"
          className="inline-block gradient-cta text-accent-foreground font-bold text-lg px-8 py-3 rounded-full glow-cta hover:glow-cta-hover transition-all duration-300"
        >
          QUERO AS RECEITAS
        </a>
      </div>
    </div>
  </section>
);

export default RecipeShowcase;
