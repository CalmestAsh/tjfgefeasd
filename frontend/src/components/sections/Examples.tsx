import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Prism from "prismjs";
import "prismjs/components/prism-r";
import { CodeCard } from "../CodeCard";

const cases = [
  {
    title: "Cor vem dos dados",
    desc: "color = turma fica dentro do aes(), entao a cor varia conforme a coluna.",
    code: `ggplot(alunos, aes(x = horas_estudo, y = nota, color = turma)) +
  geom_point()`,
    legend: ["Turma A", "Turma B"],
    fixed: false,
  },
  {
    title: "Cor fixa",
    desc: "color = \"blue\" fica fora do aes(), entao todos os pontos ficam azuis.",
    code: `ggplot(alunos, aes(x = horas_estudo, y = nota)) +
  geom_point(color = "blue")`,
    legend: ["Todos azuis"],
    fixed: true,
  },
];

export const Examples = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    Prism.highlightAll();
  }, [activeTab]);

  const active = cases[activeTab];
  const points = [
    { x: "14%", y: "72%", group: 0 },
    { x: "26%", y: "64%", group: 1 },
    { x: "38%", y: "55%", group: 0 },
    { x: "50%", y: "46%", group: 1 },
    { x: "62%", y: "35%", group: 0 },
    { x: "76%", y: "24%", group: 1 },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative">
      <div className="max-w-6xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mx-auto w-full max-w-3xl mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--color-primary)]">
            Variavel ou valor fixo?
          </h2>
          <p className="text-lg text-[var(--color-text-muted)]">
            Dentro do aes() vem dos dados. Fora do aes() e uma configuracao fixa.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="grid md:grid-cols-3 gap-3">
            {cases.map((item, index) => (
              <motion.button
                key={item.title}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                className={`text-left p-5 rounded-xl border transition-all ${activeTab === index ? "bg-[var(--color-surface)] border-[var(--color-primary)] glow-primary" : "bg-black/20 border-white/10 hover:border-white/30"}`}
              >
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
              </motion.button>
            ))}
            <div className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 p-4 font-mono text-sm text-[var(--color-accent)]">
              Dentro do aes() = vem dos dados<br />
              Fora do aes() = configuracao fixa
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <AnimatePresence mode="wait">
              <CodeCard title="aes_cores.R" code={active.code} animatedKey={activeTab} preClassName="text-[15px]" stretch />
            </AnimatePresence>

            <div className="rounded-2xl bg-[var(--color-surface)] border border-white/10 p-5">
              <div className="relative h-64 border-l border-b border-white/30 ml-7 mb-6">
                {points.map((point, index) => (
                  <motion.span
                    key={`${activeTab}-${index}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`absolute w-4 h-4 rounded-full ${active.fixed || point.group === 0 ? "bg-blue-500" : "bg-emerald-400"}`}
                    style={{ left: point.x, top: point.y }}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                {active.legend.map((item, index) => (
                  <span key={item} className="flex items-center gap-2 text-[var(--color-text-muted)]">
                    <span className={`w-3 h-3 rounded-full ${active.fixed || index === 0 ? "bg-blue-500" : "bg-emerald-400"}`} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
