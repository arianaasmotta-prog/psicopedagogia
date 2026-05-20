/**
 * ═══════════════════════════════════════════════════════════════
 *  BIBLIOTECA DE JOGOS — ARIANA MOTTA PSICOPEDAGOGIA
 * ═══════════════════════════════════════════════════════════════
 *
 *  COMO ADICIONAR UM NOVO JOGO:
 *  1. Suba o arquivo HTML do jogo no repositório GitHub
 *  2. Copie um bloco abaixo e preencha os campos
 *  3. Salve e faça commit
 *
 *  CATEGORIAS DISPONÍVEIS:
 *  "Matemática" | "Leitura e Escrita" | "Atenção e Memória"
 *  "Funções Executivas" | "Linguagem"
 *
 * ═══════════════════════════════════════════════════════════════
 */

const JOGOS = [

  // ── MATEMÁTICA ───────────────────────────────────────────────
  {
    titulo:    "O Grande Torneio de Xadrez",
    descricao: "Oito desafios com as quatro operações matemáticas em situações-problema com temática de xadrez. Para crianças a partir de 8 anos.",
    categoria: "Matemática",
    arquivo:   "xadrez_matemática_2.html",
    icone:     "♟",
    tags:      ["4 operações", "situação-problema", "8+ anos"]
  },

  // ── LEITURA E ESCRITA ─────────────────────────────────────────
  {
    titulo:    "Jogo das Palavras",
    descricao: "Atividade interativa para desenvolver reconhecimento e uso de palavras com foco em leitura e escrita.",
    categoria: "Leitura e Escrita",
    arquivo:   "JogodasPalavras.html",
    icone:     "📝",
    tags:      ["leitura", "escrita", "vocabulário"]
  },
  {
    titulo:    "Jogo das Palavrinhas",
    descricao: "Atividade lúdica com palavras curtas para estimular a consciência fonológica e o reconhecimento de sílabas.",
    categoria: "Leitura e Escrita",
    arquivo:   "JogodasPalavrinhas.html",
    icone:     "🔤",
    tags:      ["sílabas", "fonologia", "alfabetização"]
  },
  {
    titulo:    "Som das Letras",
    descricao: "Atividade para trabalhar a correspondência grafema-fonema e a consciência fonológica de forma interativa.",
    categoria: "Leitura e Escrita",
    arquivo:   "somdasletras.html",
    icone:     "🔊",
    tags:      ["fonemas", "consciência fonológica", "alfabetização"]
  },
  {
    titulo:    "Produção Textual",
    descricao: "Desafio de escrita criativa com situações-problema para estimular a produção textual estruturada.",
    categoria: "Leitura e Escrita",
    arquivo:   "jogo_producao_textual.html",
    icone:     "✍️",
    tags:      ["escrita criativa", "texto", "produção"]
  },

];
