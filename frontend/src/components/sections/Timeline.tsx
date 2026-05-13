import { motion } from "framer-motion";
import { Database, SlidersHorizontal, BarChart3 } from "lucide-react";

export const Timeline = () => {
  const steps = [
    {
      title: "Dados",
      desc: "A analise comeca com uma tabela.",
      icon: <Database className="w-7 h-7" />,
    },
    {
      title: "Preparacao",
      desc: "Ferramentas como tidyr e dplyr podem organizar os dados antes.",
      icon: <SlidersHorizontal className="w-7 h-7" />,
    },
    {
      title: "ggplot2",
      desc: "Com os dados prontos, o ggplot2 transforma colunas em visualizacoes.",
      icon: <BarChart3 className="w-7 h-7" />,
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--color-primary)]">
            O ggplot2 e a etapa de visualizacao
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Em uma analise de dados, os dados geralmente sao preparados primeiro. O papel do ggplot2 vem depois: mostrar os dados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="relative rounded-2xl bg-[var(--color-surface)] border border-white/10 p-6 min-h-56"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/40 flex items-center justify-center text-[var(--color-accent)] mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
              {index < steps.length - 1 && (
                <span className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-3xl text-[var(--color-primary)] z-20">→</span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[var(--color-primary)]/30 bg-black/25 p-6 text-center">
          <p className="font-mono text-xl md:text-2xl text-white">
            Dados <span className="text-[var(--color-primary)]">→</span> preparacao <span className="text-[var(--color-primary)]">→</span> ggplot2 <span className="text-[var(--color-primary)]">→</span> grafico
          </p>
          <p className="mt-4 text-[var(--color-text-muted)]">
            tidyr/dplyr preparam os dados. ggplot2 mostra os dados.
          </p>
        </div>
      </div>
    </section>
  );
};
