import { useEffect } from "react";
import { motion } from "framer-motion";
import Prism from "prismjs";
import "prismjs/components/prism-r";

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

        <div className="grid lg:grid-cols-2 gap-6">
          <CodePanel title="Antes" code={before} />
          <CodePanel title="Depois" code={after} featured />
        </div>

        <div className="mt-8 rounded-xl border border-[var(--color-primary)]/35 bg-[var(--color-primary)]/10 p-5 text-center font-mono text-[var(--color-accent)]">
          Grafico bom precisa ser legivel, nao so existir.
        </div>
      </div>
    </section>
  );
};

function CodePanel({ title, code, featured = false }: { title: string; code: string; featured?: boolean }) {
  return (
    <div className={`rounded-2xl overflow-hidden border ${featured ? "border-[var(--color-primary)]/45 glow-primary" : "border-white/10"} bg-[#1e1e1e]`}>
      <div className="bg-[#2d2d2d] px-4 py-3 font-mono text-sm text-gray-300 border-b border-gray-800">
        {title}
      </div>
      <pre className="!m-0 !bg-transparent p-5 overflow-x-auto text-sm md:text-base">
        <code className="language-r">{code}</code>
      </pre>
    </div>
  );
}
