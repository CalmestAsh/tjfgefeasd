import { motion } from "framer-motion";
import { BarChart3, Table2 } from "lucide-react";

export const Introduction = () => {
  const rows = [
    ["Ana", "2", "6.5"],
    ["Bruno", "4", "7.8"],
    ["Clara", "6", "8.9"],
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-10 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="z-10 w-full max-w-6xl"
      >
        <div className="text-center mb-10">
          <p className="text-sm tracking-widest uppercase text-[var(--color-accent)] mb-3">
            ggplot2: como o R transforma dados em graficos
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-[var(--color-primary)] drop-shadow-lg">
            O que o ggplot2 faz?
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
            O ggplot2 cria graficos a partir de dados: ele pega uma tabela e transforma colunas em eixos, cores, tamanhos e formas.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center mb-10">
          <div className="rounded-2xl bg-[var(--color-surface)] border border-white/10 p-5">
            <div className="flex items-center gap-2 text-[var(--color-accent)] mb-4">
              <Table2 className="w-5 h-5" />
              <span className="font-semibold">Tabela</span>
            </div>
            <div className="overflow-hidden rounded-lg border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-[var(--color-text-muted)]">
                  <tr>
                    <th className="p-3">aluno</th>
                    <th className="p-3">horas_estudo</th>
                    <th className="p-3">nota</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row[0]} className="border-t border-white/10">
                      {row.map((cell) => (
                        <td key={cell} className="p-3 font-mono">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="hidden md:flex text-4xl text-[var(--color-primary)] font-bold">→</div>

          <div className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-primary)]/40 p-5">
            <div className="flex items-center gap-2 text-[var(--color-accent)] mb-4">
              <BarChart3 className="w-5 h-5" />
              <span className="font-semibold">Grafico</span>
            </div>
            <div className="h-56 border-l border-b border-white/30 relative px-4">
              {[
                { left: "20%", bottom: "34%" },
                { left: "48%", bottom: "58%" },
                { left: "76%", bottom: "78%" },
              ].map((point, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.12 }}
                  className="absolute w-5 h-5 rounded-full bg-[var(--color-accent)] shadow-[0_0_18px_rgba(52,152,219,0.7)]"
                  style={point}
                />
              ))}
              <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-xs text-[var(--color-text-muted)]">horas_estudo</span>
              <span className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 -rotate-90 text-xs text-[var(--color-text-muted)]">nota</span>
            </div>
          </div>
        </div>

        <div className="text-center font-mono text-lg md:text-2xl text-white">
          Tabela <span className="text-[var(--color-primary)]">→</span> Mapeamento visual <span className="text-[var(--color-primary)]">→</span> Grafico
        </div>
      </motion.div>
    </section>
  );
};
