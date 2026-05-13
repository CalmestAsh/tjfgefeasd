import { useEffect } from "react";
import { motion } from "framer-motion";
import Prism from "prismjs";
import "prismjs/components/prism-r";
import { CodeCard } from "../CodeCard";

export const Facets = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const before = `ggplot(alunos, aes(x = horas_estudo, y = nota)) +
  geom_point()`;

  const after = `ggplot(alunos, aes(x = horas_estudo, y = nota, color = turma)) +
  geom_point(size = 3) +
  labs(
    title = "Relacao entre horas de estudo e nota",
    x = "Horas de estudo",
    y = "Nota final",
    color = "Turma"
  ) +
  theme_minimal()`;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative">
      <div className="max-w-6xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--color-primary)]">
            Depois do grafico, vem a comunicacao
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
            labs() melhora os textos e theme_minimal() deixa o visual mais limpo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <CodeCard title="antes.R" code={before} preClassName="text-sm md:text-base" stretch />
          <CodeCard title="depois.R" code={after} preClassName="text-sm md:text-base" featured stretch />
        </div>

        <div className="mt-8 rounded-xl border border-[var(--color-primary)]/35 bg-[var(--color-primary)]/10 p-5 text-center font-mono text-[var(--color-accent)]">
          Grafico bom precisa ser legivel, nao so existir.
        </div>
      </div>
    </section>
  );
};
