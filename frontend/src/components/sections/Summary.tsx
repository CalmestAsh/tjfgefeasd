import { useEffect } from "react";
import { motion } from "framer-motion";
import Prism from "prismjs";
import "prismjs/components/prism-r";
import { CodeCard } from "../CodeCard";

export const Summary = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const code = `dados_prontos %>%
  ggplot(aes(x = categoria, y = valor)) +
  geom_col()`;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative">
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--color-primary)]">
            E o tidyr e dplyr?
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Eles costumam aparecer antes do ggplot2 para preparar a tabela, mas nao sao o foco da visualizacao.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center mb-8">
          <div className="rounded-2xl bg-[var(--color-surface)] border border-white/10 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">tidyr / dplyr</h3>
            <p className="text-[var(--color-text-muted)]">deixam os dados prontos</p>
          </div>
          <span className="text-4xl text-[var(--color-primary)] text-center">→</span>
          <div className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-primary)]/45 p-8 text-center glow-primary">
            <h3 className="text-2xl font-bold text-white mb-3">ggplot2</h3>
            <p className="text-[var(--color-text-muted)]">cria a visualizacao</p>
          </div>
        </div>

        <CodeCard title="contexto_tidyverse.R" code={code} preClassName="text-base md:text-lg" />

        <p className="mt-6 text-center text-[var(--color-text-muted)]">
          O importante aqui nao e explicar o %&gt;%, mas entender que o ggplot2 recebe uma tabela ja tratada e transforma ela em grafico.
        </p>
      </div>
    </section>
  );
};
