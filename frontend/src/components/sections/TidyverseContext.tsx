import { useEffect } from "react";
import { motion } from "framer-motion";
import Prism from "prismjs";
import "prismjs/components/prism-r";

export const TidyverseContext = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const code = `ggplot(alunos, aes(x = horas_estudo, y = nota)) +
  geom_point() +
  facet_wrap(~ turma)`;

  const groups = ["Turma A", "Turma B", "Turma C"];

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
          <div className="rounded-2xl bg-[#1e1e1e] border border-white/10 overflow-hidden">
            <div className="bg-[#2d2d2d] px-4 py-3 font-mono text-sm text-gray-300 border-b border-gray-800">
              facets.R
            </div>
            <pre className="!m-0 !bg-transparent p-6 overflow-x-auto text-base md:text-lg">
              <code className="language-r">{code}</code>
            </pre>
            <div className="m-6 rounded-xl border border-[var(--color-primary)]/35 bg-[var(--color-primary)]/10 p-4 text-center font-mono text-[var(--color-accent)]">
              facet_wrap() = dividir para comparar
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 rounded-2xl bg-[var(--color-surface)] border border-white/10 p-5">
            {groups.map((group, groupIndex) => (
              <div key={group} className="rounded-xl border border-white/10 bg-black/20 p-4">
                <h3 className="font-semibold text-white text-center mb-4">{group}</h3>
                <div className="relative h-56 border-l border-b border-white/25">
                  {[0, 1, 2, 3].map((item) => (
                    <span
                      key={item}
                      className="absolute w-3 h-3 rounded-full bg-[var(--color-accent)]"
                      style={{
                        left: `${18 + item * 18}%`,
                        top: `${68 - item * 10 - groupIndex * 6}%`,
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
