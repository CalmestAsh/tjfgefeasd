import { motion } from "framer-motion";
import { CheckCircle2, ChevronUp } from "lucide-react";

export const Conclusion = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const items = [
    ["ggplot()", "escolhe os dados"],
    ["aes()", "mapeia colunas para elementos visuais"],
    ["geom_()", "define o tipo de grafico"],
    ["labs()", "melhora textos"],
    ["theme()", "melhora aparencia"],
    ["facet_wrap()", "separa por grupos"],
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      <div className="max-w-5xl w-full text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="w-20 h-20 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-7 border-2 border-green-500/50 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <CheckCircle2 className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5">
            Resumo do ggplot2
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed mx-auto max-w-3xl">
            O ggplot2 funciona como uma gramatica de graficos: dados, mapeamento, geometria e personalizacao.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {items.map(([fn, desc]) => (
            <div key={fn} className="rounded-xl bg-[var(--color-surface)] border border-white/10 p-5 text-left">
              <p className="font-mono text-[var(--color-accent)] font-bold mb-2">{fn}</p>
              <p className="text-[var(--color-text-muted)]">{desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 p-6 mb-8">
          <p className="font-mono text-xl md:text-2xl text-white">
            ggplot2 transforma dados prontos em visualizacoes claras.
          </p>
        </div>

        <div className="pt-6 border-t border-white/10">
          <p className="text-sm tracking-widest uppercase text-[var(--color-text-disabled)] mb-3">
            Uma apresentacao por
          </p>
          <p className="font-mono text-[var(--color-primary)] font-bold">
            Renan Morellato • Gabriel Barrote • Enzo Bido • Bruno Camisa
          </p>

          <button
            onClick={scrollToTop}
            className="mt-10 group flex flex-col items-center justify-center gap-2 text-[var(--color-text-muted)] hover:text-white transition-colors mx-auto"
          >
            <div className="p-3 rounded-full bg-white/5 group-hover:bg-[var(--color-primary)]/20 transition-all border border-transparent group-hover:border-[var(--color-primary)]/50">
              <ChevronUp className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest font-semibold mt-2">Voltar ao topo</span>
          </button>
        </div>
      </div>
    </section>
  );
};
