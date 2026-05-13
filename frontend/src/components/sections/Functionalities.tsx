import { useEffect } from "react";
import { motion } from "framer-motion";
import { Braces, Layers, Plus, ScatterChart } from "lucide-react";
import Prism from "prismjs";
import "prismjs/components/prism-r";
import "prismjs/themes/prism-tomorrow.css";

export const Functionalities = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const code = `ggplot(dados, aes(x = coluna_x, y = coluna_y)) +
  geom_point()`;

  const parts = [
    { name: "ggplot()", desc: "base", icon: <Braces className="w-5 h-5" /> },
    { name: "aes()", desc: "mapeamento visual", icon: <Layers className="w-5 h-5" /> },
    { name: "geom_()", desc: "tipo de grafico", icon: <ScatterChart className="w-5 h-5" /> },
    { name: "+", desc: "adiciona camadas", icon: <Plus className="w-5 h-5" /> },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative">
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--color-primary)]">
            A formula de um grafico no ggplot2
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
            O ggplot() cria a base, o aes() liga colunas a elementos visuais e o geom_point() escolhe pontos como forma do grafico.
          </p>
        </motion.div>

        <div className="rounded-2xl bg-[#1e1e1e] border border-white/10 shadow-2xl overflow-hidden mb-8">
          <div className="bg-[#2d2d2d] px-4 py-3 font-mono text-sm text-gray-300 border-b border-gray-800">
            estrutura_basica.R
          </div>
          <pre className="!m-0 !bg-transparent p-6 overflow-x-auto text-lg md:text-2xl">
            <code className="language-r">{code}</code>
          </pre>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {parts.map((part, index) => (
            <motion.div
              key={part.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-xl bg-[var(--color-surface)] border border-white/10 p-5"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/15 text-[var(--color-accent)] flex items-center justify-center mb-4">
                {part.icon}
              </div>
              <h3 className="font-mono text-xl font-bold text-white mb-2">{part.name}</h3>
              <p className="text-[var(--color-text-muted)]">{part.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
