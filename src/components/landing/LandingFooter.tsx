const LandingFooter = () => (
  <footer className="py-14 px-4" style={{ background: 'hsl(25 30% 15%)' }}>
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-display font-extrabold text-primary-foreground mb-1 uppercase">
        Seu scoop de whey pode virar
      </h2>
      <h2 className="text-2xl md:text-3xl font-display font-extrabold text-cyan-highlight mb-3 uppercase">
        uma refeição de verdade hoje.
      </h2>
      <p className="text-primary-foreground/60 mb-8 max-w-lg mx-auto text-sm">
        Pare de desperdiçar seu whey com água. Transforme cada scoop em uma refeição que você realmente quer comer.
      </p>
      <a
        href="#precos"
        className="inline-block gradient-cta text-primary-foreground font-bold text-base px-10 py-4 rounded-full glow-cta hover:glow-cta-hover transition-all duration-300 uppercase tracking-wide mb-10"
      >
        QUERO AS RECEITAS →
      </a>
      <div className="flex flex-wrap justify-center gap-4 mb-4 text-primary-foreground/40 text-sm mt-4">
        <a href="#" className="hover:text-primary-foreground/70 transition-colors">Termos de Uso</a>
        <span>|</span>
        <a href="#" className="hover:text-primary-foreground/70 transition-colors">Política de Privacidade</a>
      </div>
      <p className="text-primary-foreground/30 text-xs">
        CNPJ: 62.173.620/0001-80
      </p>
      <p className="text-primary-foreground/20 text-xs mt-2">
        © 2026 Todos os direitos reservados
      </p>
    </div>
  </footer>
);

export default LandingFooter;
