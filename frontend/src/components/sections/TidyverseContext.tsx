import { useEffect } from "react";
import { motion } from "framer-motion";
import Prism from "prismjs";
import "prismjs/components/prism-r";
import { CodeCard } from "../CodeCard";

export const TidyverseContext = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const code = `ggplot(alunos, aes(x = horas_estudo, y = nota)) +
  geom_point() +
  facet_wrap(~ turma)`;

  const groups = [
    {
      name: "Turma A",
      color: "bg-[var(--color-accent)]",
      points: [
        { x: 18, y: 70 },
        { x: 36, y: 58 },
        { x: 54, y: 44 },
        { x: 72, y: 28 },
      ],
    },
    {
      name: "Turma B",
      color: "bg-emerald-400",
      points: [
        { x: 16, y: 42 },
        { x: 34, y: 62 },
        { x: 55, y: 36 },
        { x: 74, y: 52 },
      ],
    },
    {
      name: "Turma C",
      color: "bg-amber-400",
      points: [
        { x: 18, y: 28 },
        { x: 36, y: 36 },
        { x: 54, y: 52 },
        { x: 72, y: 68 },
      ],
    },
  ];

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
            Comparando grupos com facet_wrap()
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
            facet_wrap() separa o grafico em varios graficos menores, um para cada categoria.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">
          <div className="flex flex-col gap-5">
            <CodeCard title="facets.R" code={code} preClassName="text-base md:text-lg" />
            <div className="rounded-xl border border-[var(--color-primary)]/35 bg-[var(--color-primary)]/10 p-4 text-center font-mono text-[var(--color-accent)]">
              facet_wrap() = dividir para comparar
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 rounded-2xl bg-[var(--color-surface)] border border-white/10 p-5">
            {groups.map((group) => (
              <div key={group.name} className="rounded-xl border border-white/10 bg-black/20 p-4">
                <h3 className="font-semibold text-white text-center mb-4">{group.name}</h3>
                <div className="relative h-56 border-l border-b border-white/25">
                  {group.points.map((point, pointIndex) => (
                    <span
                      key={`${group.name}-${pointIndex}`}
                      className={`absolute w-3 h-3 rounded-full ${group.color}`}
                      style={{
                        left: `${point.x}%`,
                        top: `${point.y}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
