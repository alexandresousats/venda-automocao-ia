export type Lesson = {
  id: string;
  number: number;
  title: string;
  description: string;
  durationLabel: string;
};

export type Track = {
  id: string;
  number: number;
  numberLabel: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Material = {
  id: string;
  title: string;
  href: string;
};

export type PricingRow = {
  item: string;
  type: string;
  estimate: string;
  notes: string;
};

export type SupportChannel = {
  title: string;
  description: string;
};

export type CommonError = {
  title: string;
  solution: string;
};

export const COURSE = {
  title: "Atendimento com IA no WhatsApp",
  eyebrow: "Plataforma de vídeo · Curso",
  description:
    "Aprenda a instalar, configurar e operar um atendimento automatizado com Evolution API, Typebot e Google Sheets — em 4 trilhas e 8 aulas em vídeo.",
  brand: "Alexandre Sousa",
} as const;

export const TRACKS: Track[] = [
  {
    id: "instalar-e-conectar",
    number: 1,
    numberLabel: "01",
    title: "Instalar e Conectar",
    description:
      "Suba o VPS, rode o Docker Compose e conecte o WhatsApp via QR Code.",
    lessons: [
      {
        id: "subir-vps-docker",
        number: 1,
        title:
          "Subir o VPS e rodar o Docker Compose (Evolution API + Typebot)",
        description:
          "Nesta aula você sobe o VPS, sobe os containers com Docker Compose e deixa Evolution API + Typebot rodando.",
        durationLabel: "Vídeo",
      },
      {
        id: "conectar-whatsapp-qr",
        number: 2,
        title: "Conectar o WhatsApp via QR Code",
        description:
          "Escaneie o QR Code no Evolution API e confirme a conexão do número no WhatsApp.",
        durationLabel: "Vídeo",
      },
    ],
  },
  {
    id: "configurar",
    number: 2,
    numberLabel: "02",
    title: "Configurar",
    description:
      "Preencha os dados do negócio e ajuste o prompt do bot.",
    lessons: [
      {
        id: "preencher-dados-negocio",
        number: 1,
        title:
          "Preencher dados do negócio (nome, horários, serviços, preços, FAQ)",
        description:
          "Organize as informações do negócio que o bot precisa conhecer para atender com precisão.",
        durationLabel: "Vídeo",
      },
      {
        id: "ajustar-prompt-testar",
        number: 2,
        title: "Ajustar o prompt e testar o bot",
        description:
          "Refine o prompt, rode testes rápidos e valide as respostas do atendimento.",
        durationLabel: "Vídeo",
      },
    ],
  },
  {
    id: "google-sheets",
    number: 3,
    numberLabel: "03",
    title: "Google Sheets",
    description:
      "Conecte o Typebot à planilha para salvar leads e ler preços.",
    lessons: [
      {
        id: "conectar-sheets-leads",
        number: 1,
        title:
          "Conectar Typebot ao Google Sheets e salvar leads automaticamente",
        description:
          "Configure a integração para gravar leads na planilha a cada conversa.",
        durationLabel: "Vídeo",
      },
      {
        id: "ler-dados-planilha",
        number: 2,
        title: "Ler dados da planilha (preços e horários) dentro do bot",
        description:
          "Faça o bot consultar preços e horários direto da planilha durante o atendimento.",
        durationLabel: "Vídeo",
      },
    ],
  },
  {
    id: "suporte-e-erros",
    number: 4,
    numberLabel: "04",
    title: "Suporte Técnico e Erros Comuns",
    description:
      "Peça ajuda com clareza e resolva os erros mais frequentes.",
    lessons: [
      {
        id: "como-pedir-ajuda",
        number: 1,
        title: "Como pedir ajuda, canais de contato, o que incluir no relato",
        description:
          "Saiba quais canais usar e quais detalhes aceleram a resolução do seu chamado.",
        durationLabel: "Vídeo",
      },
      {
        id: "erros-comuns",
        number: 2,
        title: "Erros comuns e soluções rápidas",
        description:
          "Resolva os problemas mais frequentes de QR Code, bot, planilha e VPS.",
        durationLabel: "Vídeo",
      },
    ],
  },
];

export const MATERIALS: Material[] = [
  {
    id: "planilha-modelo",
    title: "Planilha modelo Google Sheets",
    href: "/planilha",
  },
  {
    id: "checklist-instalacao",
    title: "Checklist de instalação",
    href: "#",
  },
  {
    id: "lista-vps",
    title: "Lista de VPS recomendados",
    href: "/planilha",
  },
];

export const PRICING_SUMMARY = [
  { label: "Custo mensal estimado", value: "R$ 89" },
  { label: "Setup inicial", value: "R$ 0–400" },
  { label: "Tempo médio", value: "4–8 h" },
] as const;

export const PRICING_ROWS: PricingRow[] = [
  {
    item: "VPS recomendado",
    type: "Mensal",
    estimate: "R$ 20–40",
    notes: "1–2 vCPU, 2–4 GB RAM",
  },
  {
    item: "Domínio (opcional)",
    type: "Anual",
    estimate: "R$ 40–80",
    notes: "Para painéis e webhooks",
  },
  {
    item: "Google Sheets",
    type: "Grátis",
    estimate: "R$ 0",
    notes: "Planilha modelo inclusa",
  },
  {
    item: "Evolution API + Typebot",
    type: "Self-host",
    estimate: "R$ 0",
    notes: "Via Docker Compose",
  },
  {
    item: "Tempo de implantação",
    type: "Setup",
    estimate: "4–8 h",
    notes: "Seguindo as 4 trilhas",
  },
  {
    item: "Serviço gerenciado",
    type: "Opcional",
    estimate: "Sob consulta",
    notes: "Tela Contratar Serviço",
  },
];

export const SUPPORT_CHANNELS: SupportChannel[] = [
  {
    title: "WhatsApp",
    description: "Canal principal para dúvidas e bloqueios durante as aulas.",
  },
  {
    title: "E-mail",
    description: "Para relatos longos, prints e anexos de logs.",
  },
  {
    title: "Trilha 4",
    description:
      "Assista às aulas de erros comuns antes de abrir um chamado.",
  },
];

export const REPORT_CHECKLIST = [
  "Qual trilha e aula você está",
  "O que tentou fazer (passo a passo)",
  "Mensagem de erro completa ou print",
  "Se o QR Code, bot ou planilha falhou",
  "Sistema operacional e provedor do VPS",
] as const;

export const COMMON_ERRORS: CommonError[] = [
  {
    title: "QR Code não conecta",
    solution: "Regenere o QR, confira a Evolution API e a rede do VPS.",
  },
  {
    title: "Bot não responde",
    solution:
      "Valide o Typebot, o prompt e se a sessão WhatsApp está ativa.",
  },
  {
    title: "Planilha não salva",
    solution:
      "Revise permissões do Google Sheets e o bloco de integração.",
  },
  {
    title: "VPS caiu",
    solution: "Reinicie os containers e verifique uso de memória/disco.",
  },
];

export const CONTRACT_FEATURES = [
  "VPS, Docker, Evolution API e Typebot",
  "Conexão WhatsApp e prompt inicial",
  "Google Sheets para leads e preços",
  "Checklist de validação e treino rápido",
] as const;

export const TOTAL_LESSONS = TRACKS.reduce(
  (sum, track) => sum + track.lessons.length,
  0,
);

export function getTrack(trackId: string): Track | undefined {
  return TRACKS.find((track) => track.id === trackId);
}

export function getLesson(
  trackId: string,
  lessonId: string,
): { track: Track; lesson: Lesson } | undefined {
  const track = getTrack(trackId);
  if (!track) return undefined;
  const lesson = track.lessons.find((item) => item.id === lessonId);
  if (!lesson) return undefined;
  return { track, lesson };
}

export function lessonKey(trackId: string, lessonId: string): string {
  return `${trackId}:${lessonId}`;
}

export function allLessonKeys(): string[] {
  return TRACKS.flatMap((track) =>
    track.lessons.map((lesson) => lessonKey(track.id, lesson.id)),
  );
}
