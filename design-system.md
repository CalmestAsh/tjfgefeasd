# Design System: R Language Presentation

## 1. Visão Geral e Princípios
Este Design System define a linguagem visual e os componentes para a apresentação sobre a linguagem R. O objetivo é criar uma experiência de usuário **moderna, imersiva e com estética "dev"**, focada em legibilidade de código e dados.

**Princípios Fundamentais:**
- **Foco no Conteúdo:** A interface não deve competir com a informação (código R, listas, gráficos).
- **Legibilidade em Tema Escuro:** Contraste adequado para longos períodos de leitura, evitando o "preto puro".
- **Visualização de Dados:** O design deve suportar e realçar a apresentação de dados (o forte do R).
- **Imersão Sensorial:** Ambientação sutil (fundo em movimento) para manter o engajamento sem distrair.

## 2. Paleta de Cores (Tema Escuro)
O tema escuro utiliza tons de cinza profundos com toques vibrantes para ações e destaque de sintaxe, remetendo aos ambientes de desenvolvimento (IDEs) modernos.

### 2.1 Cores de Fundo (Background)
Evita-se o preto absoluto (#000000) para reduzir o cansaço visual.
- **Background Principal:** `#0F111A` (Azul/Cinza muito escuro, imersivo)
- **Background Secundário (Superfícies/Cards):** `#1E212B` (Levemente mais claro para criar hierarquia/elevação)
- **Background Terciário (Modais/Popovers):** `#2A2D3A`

### 2.2 Cores de Texto (Tipografia)
- **Texto Principal (Corpo/Body):** `#E2E8F0` (Slate-200, alto contraste, sem ser branco puro)
- **Texto Secundário (Legendas/Muted):** `#94A3B8` (Slate-400)
- **Texto Desabilitado:** `#475569` (Slate-600)

### 2.3 Cores de Destaque (Accents & Brand)
Inspirado no logo do R e na estética futurista.
- **Destaque Principal (Primary):** `#276DC3` (Azul base do R, ajustado para ser visível no fundo escuro)
- **Destaque Brilhante (Accent/Glow):** `#3498DB` (Azul claro para hover states e brilhos/glows)
- **Cor de Sucesso:** `#10B981` (Emerald-500)
- **Cor de Atenção/Aviso:** `#F59E0B` (Amber-500)
- **Cor de Erro:** `#EF4444` (Red-500)

## 3. Tipografia
A tipografia deve ser técnica, limpa e altamente legível.

- **Fonte Principal (Títulos e Texto):** `Inter` ou `Roboto Flex` (Fontes modernas, sem serifa, perfeitamente legíveis em telas).
- **Fonte Monoespaçada (Código R, Variáveis e Comandos):** `JetBrains Mono` ou `Fira Code`. (Essenciais para a estética "minimalista dev". Fira Code suporta ligaduras, o que deixa o código R, como `<-` ou `%>%`, muito bonito).

**Escala (Exemplo responsivo):**
- Título Grande (Hero): 4rem (Bold)
- H1: 2.5rem (Bold)
- H2: 2rem (SemiBold)
- H3: 1.5rem (Medium)
- Corpo de Texto (Body): 1rem (Regular)
- Código Inline: 0.9rem

## 4. Estilo Visual e Ambientação
Para fugir de uma apresentação estática padrão e trazer a vibe moderna solicitada:

- **Efeito de Partículas no Fundo:**
  - Implementação sugerida: Biblioteca [tsparticles](https://particles.js.org/).
  - **Configuração:** Estilo "poeira intergaláctica" ou "nós de rede" muito finos, movendo-se lentamente no eixo Y ou aleatoriamente.
  - **Cores das partículas:** Quase transparentes (ex: `rgba(255, 255, 255, 0.05)`) para não poluir a leitura do slide.
- **Bordas e Containers:**
  - Cantos levemente arredondados: `border-radius: 8px` ou `12px`.
  - Sem bordas sólidas pesadas. Utilizar um leve border de 1px semitransparente (ex: `rgba(255, 255, 255, 0.1)`).
- **Profundidade (Sombras em Modo Escuro):**
  - O modo escuro não se dá bem com sombras (box-shadow) pretas clássicas.
  - Substituir sombras por "Glows" suaves ao redor do componente ativo, ou sobrepor fundos (Background Secundário sobre o Primário).

## 5. Bibliotecas e Dependências Recomendadas (Stack: Vite + React/Vanilla TS)

Como o projeto é em Vite com TypeScript, as seguintes bibliotecas são ideais para implementar este Design System de forma rápida, moderna e perfomática:

### 5.1 Estilização (CSS)
- **Tailwind CSS:** Indispensável para criar e manter o design system de forma ágil através de classes utilitárias. Permite configurar o arquivo `tailwind.config.js` exatamente com as cores e fontes descritas acima.

### 5.2 Ícones
- **Lucide Icons (`lucide-react` ou apenas `lucide` para Vanilla):** Excelente escolha. Ícones vetoriais modernos, limpos e consistentes. Perfeitos para UI técnica.

### 5.3 Componentoteca (Opcional, mas recomendado para velocidade)
Se for utilizar React futuramente, ou até para extrair os estilos CSS puros (usando Tailwind):
- **Radix UI:** Para componentes primitivos não-estilizados (mas perfeitamente acessíveis).
- **shadcn/ui:** É a escolha "estado da arte" atual. Reúne Tailwind + Radix UI num visual lindo, de código aberto. Pode-se copiar e colar os componentes necessários (modais, botões, cards) mantendo a estética dark-mode nativa.

### 5.4 Efeitos e Animações
- **tsParticles (`@tsparticles/engine`):** Para o fundo animado de poeira cósmica/partículas. É a sucessora moderna do antigo particles.js, otimizada e modular para TypeScript.
- **Framer Motion** (Se estiver usando React) ou **GSAP** (Vanilla): Para transições suaves entre slides/seções (ex: fade in, slide up de listas).

### 5.5 Renderização de Código (Crucial)
Como a apresentação é sobre R:
- **Prism.js** ou **Highlight.js:** Para fazer o *Syntax Highlighting* (coloração do código R) nos slides de exemplo. O R possui sintaxe pronta nessas bibliotecas. Um tema estilo "Dracula" ou "Synthwave" encaixaria perfeitamente na paleta proposta.

## 6. Interatividade e Animações (Engajamento)
Para manter o público engajado, a apresentação deve conter minimamente interatividade, fugindo do modelo estático tradicional.

### 6.1 Cards Interativos (Perguntas e Respostas)
- **Flip Cards (Cartões que viram):** Ao chegar em um slide de "Quiz" ou pergunta reflexiva, a pergunta é exibida na frente do card. O usuário (apresentador ou espectador) deverá clicar no card, que fará uma animação 3D virando (eixo Y) para revelar a resposta no verso.
- **Acordeões (Accordions):** Para tópicos que possuem múltiplos subtópicos, usar listas expansíveis. O título do tópico fica visível e, ao clicar, o conteúdo (ex: um bloco de código R) desliza suavemente para baixo.
- **Reveal on Click (Revelação Gradual):** Em vez de exibir todo o conteúdo de uma vez, elementos-chave (como a saída de uma função R) aparecem apenas após um clique ou evento de navegação, coordenando com a fala do apresentador.

### 6.2 Feedback Visual de Interação
- **Hover States:** Botões e cards interativos devem reagir ao passar o mouse por cima (ex: brilho suave nas bordas, ligeira elevação/mudança no background).
- **Indicadores de Interatividade:** Elementos clicáveis devem ter cursores apropriados (`cursor: pointer`) e, opcionalmente, um pequeno ícone (como um olho ou uma seta de expansão) sutil indicando que há mais conteúdo ali.
