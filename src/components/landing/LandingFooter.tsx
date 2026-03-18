const LandingFooter = () => (
  <footer className="py-16 px-4" style={{ background: 'hsl(20 40% 18%)' }}>
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-display font-extrabold text-primary-foreground mb-2">
        Seu scoop de whey pode virar
      </h2>
      <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-6">
        <span className="text-highlight-underline">uma refeição de verdade hoje.</span>
      </h2>
      <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
        🍫 200 Receitas de Doces com Whey Proteico
      </p>
      <a
        href="#precos"
        className="inline-block gradient-cta text-accent-foreground font-bold text-lg px-10 py-4 rounded-full glow-cta hover:glow-cta-hover transition-all duration-300 mb-10"
      >
        QUERO AS RECEITAS
      </a>
      <div className="flex flex-wrap justify-center gap-4 mb-4 text-primary-foreground/50 text-sm mt-8">
        <a href="#" className="hover:text-primary-foreground transition-colors">Termos de Uso</a>
        <span>|</span>
        <a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidade</a>
      </div>
      <p className="text-primary-foreground/40 text-xs">
        CNPJ: 62.173.620/0001-80
      </p>
      <p className="text-primary-foreground/30 text-xs mt-2">
        © 2026 Todos os direitos reservados
      </p>
    </div>
  </footer>
);

export default LandingFooter;
