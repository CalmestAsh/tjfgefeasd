import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Prism from "prismjs";
import "prismjs/components/prism-r";
import { CodeCard } from "../CodeCard";

export const Importance = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const mappings = [
    ["x", "horas_estudo", "eixo horizontal"],
    ["y", "nota", "eixo vertical"],
    ["color", "turma", "cor dos pontos"],
    ["size", "idade", "tamanho dos pontos"],
  ];

  const code = `aes(
  x = horas_estudo,
  y = nota,
  color = turma,
  size = idade
)`;

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
            aes() transforma colunas em elementos visuais
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
            No ggplot2, estetica significa como os dados aparecem visualmente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <CodeCard title="mapeamento_estetico.R" code={code} preClassName="text-lg" stretch />

          <div className="rounded-2xl bg-[var(--color-surface)] border border-white/10 p-6">
            <div className="space-y-4">
              {mappings.map(([aesName, column, visual]) => (
                <div key={aesName} className="grid grid-cols-[1fr_auto_1.3fr] gap-3 items-center">
                  <span className="rounded-lg border border-[var(--color-primary)]/35 bg-[var(--color-primary)]/10 px-3 py-3 font-mono text-white">
                    {aesName} = {column}
                  </span>
                  <ArrowRight className="w-5 h-5 text-[var(--color-accent)]" />
                  <span className="rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-[var(--color-text-muted)]">
                    {visual}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-7 p-4 rounded-xl bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/35 text-center font-mono text-[var(--color-accent)]">
              aes() = ligacao entre dados e visual
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
