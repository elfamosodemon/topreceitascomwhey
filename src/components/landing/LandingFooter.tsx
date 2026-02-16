const LandingFooter = () => (
  <footer className="gradient-hero py-8 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <p className="font-display font-bold text-primary-foreground text-lg mb-4">
        🍫 200 Receitas de Doces com Whey Proteico
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-4 text-primary-foreground/80 text-sm">
        <a href="#" className="hover:text-primary-foreground transition-colors">Termos de Uso</a>
        <span>|</span>
        <a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidade</a>
      </div>
      <p className="text-primary-foreground/60 text-xs">
        CNPJ: 62.173.620/0001-80
      </p>
      <p className="text-primary-foreground/50 text-xs mt-2">
        © 2026 Todos os direitos reservados
      </p>
    </div>
  </footer>
);

export default LandingFooter;
