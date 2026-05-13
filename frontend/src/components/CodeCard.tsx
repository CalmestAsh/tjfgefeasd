import { Circle, Terminal } from "lucide-react";
import { motion } from "framer-motion";

type CodeCardProps = {
  title: string;
  code: string;
  className?: string;
  preClassName?: string;
  animatedKey?: string | number;
  featured?: boolean;
  stretch?: boolean;
};

export function CodeCard({ title, code, className = "", preClassName = "", animatedKey, featured = false, stretch = false }: CodeCardProps) {
  const PreTag = animatedKey === undefined ? "pre" : motion.pre;
  const animationProps =
    animatedKey === undefined
      ? {}
      : {
          key: animatedKey,
          initial: { opacity: 0, y: 4 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -4 },
        };

  return (
    <div
      className={`${stretch ? "self-stretch h-full flex flex-col" : "self-start"} w-full rounded-2xl bg-[#1e1e1e] border ${featured ? "border-[var(--color-primary)]/45 glow-primary" : "border-white/10"} shadow-2xl overflow-hidden ${className}`}
    >
      <div className="bg-[#2d2d2d] flex items-center justify-between px-4 py-2.5 border-b border-gray-800/70">
        <div className="flex items-center gap-2">
          <Circle className="w-3 h-3 text-red-500 fill-red-500" />
          <Circle className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          <Circle className="w-3 h-3 text-green-500 fill-green-500" />
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-xs tracking-wider font-mono">
          <Terminal className="w-4 h-4" />
          <span>{title}</span>
        </div>
        <span className="w-14" aria-hidden="true" />
      </div>
      <PreTag {...animationProps} className={`!m-0 !bg-transparent p-6 overflow-x-auto ${stretch ? "flex-1" : ""} ${preClassName}`}>
        <code className="language-r">{code}</code>
      </PreTag>
    </div>
  );
}
