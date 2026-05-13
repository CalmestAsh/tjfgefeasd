import { motion } from "framer-motion";
import { Braces, Palette, Shapes, Tags, Wand2 } from "lucide-react";

export const WhatIsList = () => {
  const layers = [
    { label: "Dados", icon: <Braces className="w-5 h-5" /> },
    { label: "Estetica", icon: <Palette className="w-5 h-5" /> },
    { label: "Geometria", icon: <Shapes className="w-5 h-5" /> },
    { label: "Rotulos", icon: <Tags className="w-5 h-5" /> },
    { label: "Tema", icon: <Wand2 className="w-5 h-5" /> },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--color-primary)]">
            ggplot2 constroi graficos por camadas
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
            A principal ideia e montar o grafico por partes: dados, mapeamento visual, tipo de grafico e personalizacoes.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-4 rounded-xl bg-[var(--color-surface)] border border-white/10 p-4"
            >
              <div className="w-11 h-11 rounded-lg bg-[var(--color-primary)]/15 text-[var(--color-accent)] flex items-center justify-center">
                {layer.icon}
              </div>
              <span className="text-2xl font-bold text-white">+ {layer.label}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="rounded-xl bg-[var(--color-primary)]/20 border border-[var(--color-primary)] p-5 text-center glow-primary"
          >
            <span className="text-2xl md:text-3xl font-bold text-white">= Grafico final</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
