import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Prism from "prismjs";
import "prismjs/components/prism-r";
import { CodeCard } from "../CodeCard";

const geoms = [
  {
    label: "Pontos",
    code: `ggplot(alunos, aes(x = horas_estudo, y = nota)) +
  geom_point()`,
    talk: "geom_point() cria um grafico de pontos, ideal para ver relacao entre duas variaveis.",
    type: "points",
  },
  {
    label: "Barras",
    code: `ggplot(alunos, aes(x = turma)) +
  geom_bar()`,
    talk: "geom_bar() cria barras contando quantos registros existem em cada categoria.",
    type: "bars",
  },
  {
    label: "Linha",
    code: `ggplot(vendas, aes(x = mes, y = faturamento)) +
  geom_line()`,
    talk: "geom_line() cria grafico de linha, muito usado para mostrar evolucao ao longo do tempo.",
    type: "line",
  },
  {
    label: "Histograma",
    code: `ggplot(alunos, aes(x = nota)) +
  geom_histogram()`,
    talk: "geom_histogram() mostra a distribuicao de uma variavel numerica.",
    type: "hist",
  },
  {
    label: "Boxplot",
    code: `ggplot(alunos, aes(x = turma, y = nota)) +
  geom_boxplot()`,
    talk: "geom_boxplot() ajuda a comparar a distribuicao dos valores entre grupos.",
    type: "box",
  },
];

const boxplots = [
  { label: "A", x: 18, low: 16, q1: 34, median: 48, q3: 62, high: 82 },
  { label: "B", x: 48, low: 10, q1: 24, median: 39, q3: 55, high: 72 },
  { label: "C", x: 78, low: 24, q1: 46, median: 59, q3: 74, high: 90 },
];

export const Customization = () => {
  const [active, setActive] = useState(0);
  const current = geoms[active];

  useEffect(() => {
    Prism.highlightAll();
  }, [active]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative">
      <div className="max-w-6xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--color-primary)]">
            Mudando o tipo de grafico com geom_
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
            O geom define como os dados aparecem: pontos, barras, linhas, histogramas ou boxplots.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {geoms.map((geom, index) => (
            <button
              key={geom.label}
              onClick={() => setActive(index)}
              className={`px-4 py-2 rounded-lg border font-semibold transition-colors ${active === index ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]" : "bg-black/20 text-[var(--color-text-muted)] border-white/10 hover:border-white/35"}`}
            >
              {geom.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="flex flex-col gap-5">
            <AnimatePresence mode="wait">
              <CodeCard
                title={`geom_${current.label.toLowerCase()}.R`}
                code={current.code}
                animatedKey={active}
                preClassName="text-base md:text-lg"
              />
            </AnimatePresence>
            <p className="rounded-xl border border-white/10 bg-black/20 p-5 text-[var(--color-text-muted)] leading-relaxed">{current.talk}</p>
          </div>

          <div className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-primary)]/35 p-6">
            <AnimatePresence mode="wait">
              <GeomPreview key={current.type} type={current.type} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

function GeomPreview({ type }: { type: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: -8 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="relative h-96 border-l border-b border-white/30 ml-8 mb-4"
    >
      {type === "points" && [18, 30, 42, 54, 66, 78].map((x, i) => (
        <motion.span
          key={x}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05, duration: 0.25 }}
          className="absolute w-4 h-4 rounded-full bg-[var(--color-accent)]"
          style={{ left: `${x}%`, top: `${75 - i * 10}%` }}
        />
      ))}
      {type === "bars" && [38, 64, 46, 74].map((h, i) => (
        <motion.span
          key={i}
          initial={{ height: "0%", opacity: 0.4 }}
          animate={{ height: `${h}%`, opacity: 1 }}
          transition={{ delay: i * 0.06, duration: 0.35, ease: "easeOut" }}
          className="absolute bottom-0 w-12 bg-[var(--color-accent)]/80 rounded-t"
          style={{ left: `${16 + i * 20}%` }}
        />
      ))}
      {type === "line" && (
        <svg className="absolute inset-0 w-full h-full overflow-visible">
          <motion.polyline
            points="40,260 120,220 200,150 280,175 360,80 440,55"
            fill="none"
            stroke="#3498DB"
            strokeWidth="4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          />
          {[["40", "260"], ["120", "220"], ["200", "150"], ["280", "175"], ["360", "80"], ["440", "55"]].map(([cx, cy], i) => (
            <motion.circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="6"
              fill="#3498DB"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05, duration: 0.2 }}
            />
          ))}
        </svg>
      )}
      {type === "hist" && [18, 32, 66, 88, 72, 42, 24].map((h, i) => (
        <motion.span
          key={i}
          initial={{ height: "0%", opacity: 0.35 }}
          animate={{ height: `${h}%`, opacity: 1 }}
          transition={{ delay: i * 0.035, duration: 0.32, ease: "easeOut" }}
          className="absolute bottom-0 bg-[var(--color-accent)]/80 border border-[var(--color-background)]"
          style={{ left: `${8 + i * 12}%`, width: "12%" }}
        />
      ))}
      {type === "box" && boxplots.map((box, i) => (
        <motion.div
          key={box.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.28 }}
          className="absolute bottom-0 h-full w-20 -translate-x-1/2"
          style={{ left: `${box.x}%` }}
        >
          <span
            className="absolute left-1/2 -translate-x-1/2 border-l border-[var(--color-accent)]"
            style={{ bottom: `${box.low}%`, height: `${box.high - box.low}%` }}
          />
          <span
            className="absolute left-1/2 -translate-x-1/2 w-10 border-t-2 border-[var(--color-accent)]"
            style={{ bottom: `${box.high}%` }}
          />
          <span
            className="absolute left-1/2 -translate-x-1/2 w-10 border-t-2 border-[var(--color-accent)]"
            style={{ bottom: `${box.low}%` }}
          />
          <motion.span
            initial={{ height: "0%" }}
            animate={{ height: `${box.q3 - box.q1}%` }}
            transition={{ delay: 0.12 + i * 0.08, duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 w-20 border-2 border-[var(--color-accent)] bg-[var(--color-accent)]/15"
            style={{ bottom: `${box.q1}%` }}
          />
          <span
            className="absolute left-0 w-20 border-t-2 border-white"
            style={{ bottom: `${box.median}%` }}
          />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-[var(--color-text-muted)]">{box.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
