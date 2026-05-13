import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Prism from "prismjs";
import "prismjs/components/prism-r";

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
          <div className="rounded-2xl bg-[#1e1e1e] border border-white/10 overflow-hidden">
            <div className="bg-[#2d2d2d] px-4 py-3 font-mono text-sm text-gray-300 border-b border-gray-800">
              geom_{current.label.toLowerCase()}.R
            </div>
            <AnimatePresence mode="wait">
              <motion.pre
                key={active}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="!m-0 !bg-transparent p-6 overflow-x-auto text-base md:text-lg"
              >
                <code className="language-r">{current.code}</code>
              </motion.pre>
            </AnimatePresence>
            <p className="p-6 pt-0 text-[var(--color-text-muted)] leading-relaxed">{current.talk}</p>
          </div>

          <div className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-primary)]/35 p-6">
            <GeomPreview type={current.type} />
          </div>
        </div>
      </div>
    </section>
  );
};

function GeomPreview({ type }: { type: string }) {
  return (
    <div className="relative h-96 border-l border-b border-white/30 ml-8 mb-4">
      {type === "points" && [18, 30, 42, 54, 66, 78].map((x, i) => (
        <span key={x} className="absolute w-4 h-4 rounded-full bg-[var(--color-accent)]" style={{ left: `${x}%`, top: `${75 - i * 10}%` }} />
      ))}
      {type === "bars" && [38, 64, 46, 74].map((h, i) => (
        <span key={i} className="absolute bottom-0 w-12 bg-[var(--color-accent)]/80 rounded-t" style={{ left: `${16 + i * 20}%`, height: `${h}%` }} />
      ))}
      {type === "line" && (
        <svg className="absolute inset-0 w-full h-full overflow-visible">
          <polyline points="40,260 120,220 200,150 280,175 360,80 440,55" fill="none" stroke="#3498DB" strokeWidth="4" />
          {[["40", "260"], ["120", "220"], ["200", "150"], ["280", "175"], ["360", "80"], ["440", "55"]].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" fill="#3498DB" />
          ))}
        </svg>
      )}
      {type === "hist" && [18, 32, 66, 88, 72, 42, 24].map((h, i) => (
        <span key={i} className="absolute bottom-0 bg-[var(--color-accent)]/80 border border-[var(--color-background)]" style={{ left: `${8 + i * 12}%`, width: "12%", height: `${h}%` }} />
      ))}
      {type === "box" && [18, 48, 78].map((x, i) => (
        <div key={x} className="absolute bottom-10 w-20" style={{ left: `${x}%` }}>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-52 border-l border-[var(--color-accent)]" />
          <span className="absolute left-0 bottom-16 w-20 h-24 border-2 border-[var(--color-accent)] bg-[var(--color-accent)]/15" />
          <span className="absolute left-0 bottom-28 w-20 border-t-2 border-white" />
          <span className="absolute left-5 bottom-52 w-10 border-t-2 border-[var(--color-accent)]" />
          <span className="absolute left-5 bottom-0 w-10 border-t-2 border-[var(--color-accent)]" />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-[var(--color-text-muted)]">{String.fromCharCode(65 + i)}</span>
        </div>
      ))}
    </div>
  );
}
