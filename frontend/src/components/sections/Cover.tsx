import { motion } from "framer-motion";
import { BarChart3, ChevronDown } from "lucide-react";

export const Cover = () => {
  const members = [
    "Renan Morellato",
    "Gabriel Barrote",
    "Enzo Bido",
    "Bruno Camisa",
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="z-10 w-full max-w-5xl text-center"
      >
        <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/40 flex items-center justify-center glow-primary">
          <BarChart3 className="w-10 h-10 text-[var(--color-accent)]" />
        </div>

        <p className="text-sm tracking-widest uppercase text-[var(--color-accent)] mb-4">
          Apresentacao de R
        </p>
        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-[var(--color-primary)] drop-shadow-lg">
          ggplot2
        </h1>
        <p className="text-2xl md:text-4xl font-semibold text-white mb-6">
          como o R transforma dados em graficos
        </p>
        <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto mb-14">
          Uma introducao a logica do ggplot2: dados, mapeamento visual, geometrias e camadas.
        </p>

        <div className="pt-8 border-t border-white/10">
          <p className="text-sm tracking-widest uppercase text-[var(--color-text-disabled)] mb-5">
            Equipe
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            {members.map((member) => (
              <span
                key={member}
                className="px-5 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-primary)]/25 font-mono text-sm md:text-base"
              >
                {member}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-2 text-[var(--color-text-disabled)]">
          <ChevronDown className="w-6 h-6 animate-bounce" />
          <span className="text-xs uppercase tracking-widest">role para comecar</span>
        </div>
      </motion.div>
    </section>
  );
};
