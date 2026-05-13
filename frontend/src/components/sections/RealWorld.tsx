import { useEffect } from "react";
import { motion } from "framer-motion";
import Prism from "prismjs";
import "prismjs/components/prism-r";
import { CodeCard } from "../CodeCard";

export const RealWorld = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const code = `ggplot(alunos, aes(x = horas_estudo, y = nota)) +
  geom_point()`;

  const points = [
    { x: "12%", y: "74%" },
    { x: "24%", y: "62%" },
    { x: "36%", y: "58%" },
    { x: "48%", y: "44%" },
    { x: "60%", y: "35%" },
    { x: "72%", y: "28%" },
    { x: "84%", y: "18%" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative">
      <div className="max-w-6xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--color-primary)]">
            Do codigo ao grafico
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Cada linha da tabela vira um ponto. A coluna horas_estudo vai para o eixo X e nota vai para o eixo Y.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <CodeCard title="dispersao_alunos.R" code={code} preClassName="text-base md:text-lg" stretch />

          <div className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-primary)]/35 p-6">
            <h3 className="text-xl font-bold text-white mb-5">Grafico de dispersao</h3>
            <div className="relative h-80 border-l border-b border-white/30 ml-8 mb-8">
              {points.map((point, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="absolute w-4 h-4 rounded-full bg-[var(--color-accent)]"
                  style={{ left: point.x, top: point.y }}
                />
              ))}
              <span className="absolute bottom-[-2.2rem] left-1/2 -translate-x-1/2 text-sm text-[var(--color-text-muted)]">horas_estudo</span>
              <span className="absolute left-[-3.1rem] top-1/2 -translate-y-1/2 -rotate-90 text-sm text-[var(--color-text-muted)]">nota</span>
            </div>
            <p className="font-mono text-center text-[var(--color-accent)]">
              Cada geom muda a forma como os dados aparecem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
