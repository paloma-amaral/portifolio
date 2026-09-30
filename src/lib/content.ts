/*
 * Fonte única dos textos do site e do currículo.
 * Só entram fatos confirmados. Itens pendentes de confirmação ficam fora
 * (ver lista de pendências no PR).
 */

export const SITE = {
  name: "Paloma Amaral",
  role: "Analista Financeiro e de Processos",
  cvRole: "Analista Administrativo, Financeiro e de Processos",
  email: "palomaamaral028@gmail.com",
  location: "Pitangueiras, SP",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Renderizados somente quando houver URL confirmada.
  linkedin: "" as string,
  github: "" as string,
};

export const HERO = {
  label: `${SITE.name} · ${SITE.role}`,
  title: "Rotinas financeiras que viram processos e sistemas que funcionam.",
  subtitle:
    "Cuido do financeiro e do fiscal de 5 empresas e desenvolvi, com apoio de IA, o sistema de gestão que o grupo usa todos os dias. Estudante de Engenharia de Software (UNAERP, conclusão em 07/2027).",
  proofs: [
    { value: "5 empresas", text: "financeiro e fiscal, em 4 segmentos" },
    { value: "Mais de 10", text: "planilhas substituídas por um sistema único" },
    { value: "Desde 06/2026", text: "em produção, com uso diário" },
  ],
};

export const SYSTEM_CASE = {
  title: "Sistema de gestão financeira e administrativa",
  context:
    "Um grupo de 5 empresas em 4 segmentos (varejo alimentar, água e gás, locação de máquinas e coleta de resíduos) controlava o financeiro em mais de 10 planilhas que não se comunicavam. As contas mensais dependiam de um lembrete de papel, e a rotina dependia de uma única pessoa.",
  did: "Desenvolvi, com apoio de IA, um sistema web único e o mantenho em produção desde 06/2026. Ele reúne contas a pagar, conciliação bancária, conferência de caixa, impostos, folha e escalas, estoque, frota, fichas técnicas de produção e fechamento por empresa e do grupo.",
  results: [
    "Duas pessoas registram os dados todos os dias; a diretoria consulta o sistema como ponto de informação.",
    "Relatório de tudo que foi pago e visão do total a pagar e dos vencimentos, que antes dependia de lembrete em papel.",
    "Contrato de mútuo entre empresas do grupo gerado automaticamente a partir de conta de origem, conta de destino e valor (antes: caderno e Word).",
    "Faturamento consultável até o dia anterior, assim que o caixa é conferido (antes: só por fórmula em planilha).",
  ],
  how: "Next.js, React, TypeScript, Tailwind e Supabase (PostgreSQL), com regras de segurança por linha, backup, log de auditoria e 17 verificações e testes automatizados executados a cada build.",
  limits:
    'Os dados entram manualmente (extrato colado em lote e planilhas .xlsx importadas), porque bancos e ERP não oferecem API. A conciliação usa regras de "de-para" para reduzir o trabalho manual.',
  code: "Código privado. Posso demonstrar o sistema em entrevista.",
  doc: {
    title: "Documentação da rotina financeira",
    text: "Documentei a rotina diária (caixa, pagamento de fornecedores, contas a pagar, saldos e aprovação) para reduzir a dependência de uma pessoa.",
  },
};

export type Job = {
  title: string;
  org: string;
  period?: string;
  bullets: string[];
};

export const EXPERIENCE: Job[] = [
  {
    title: "Analista Administrativo e Financeiro (prestação de serviços PJ)",
    org: "EcoService (Dorlete), Empório Caroni, Empório Hortifrutti, LGC Comércio de Gás e Eco Caroni Locações",
    period: "04/2025 – atual",
    bullets: [
      "Desde 03/2026, respondo pelo financeiro e pelo fiscal de 5 empresas de um mesmo grupo.",
      "Lanço as contas a pagar, apresento a programação diária para aprovação da diretoria, efetuo os pagamentos e negocio prazos e descontos com fornecedores.",
      "Emito NFC-e e notas fiscais de serviço; faço e confiro o caixa das empresas de água e gás contra o sistema de vendas e o extrato bancário.",
      "Elaboro orçamentos e negocio taxas de maquininha.",
      "Desenvolvi e mantenho o sistema de gestão descrito acima.",
      "04/2025 a 02/2026: emissão de notas fiscais, caixa, apoio ao financeiro e suporte de informática no escritório.",
    ],
  },
  {
    title: "Jovem Aprendiz de Administração",
    org: "Usina Pitangueiras, Pitangueiras (SP)",
    period: "05/2024 – 04/2025",
    bullets: [
      "Primeiros meses no almoxarifado.",
      "Depois, em compras: follow-up com fornecedores por telefone e mensagem para acompanhar prazos de entrega.",
    ],
  },
  {
    title: "Prestação de serviços avulsos (meio período, paralelo à usina)",
    org: "Empório Hortifrutti & Armazém das Bebidas",
    period: "01/2024 – 04/2025",
    bullets: [
      "Treinei novos colaboradores nas rotinas do financeiro e no uso do ERP.",
      "Emiti notas fiscais.",
    ],
  },
  {
    title: "Auxiliar Administrativa",
    org: "Empório Hortifrutti & Armazém das Bebidas",
    period: "06/2022 – 12/2023",
    bullets: [
      "Contas a pagar e a receber; conciliação de pedidos, notas fiscais, pagamentos e extratos bancários; conferência de caixas.",
      "Lançamento e conferência de documentos fiscais (NF-e, boletos, DANFEs) e emissão de NF-e de compra e venda.",
      "Cadastro de produtos, fornecedores e clientes no ERP; precificação e margens; negociação com fornecedores.",
      "Relatórios de vendas, estoque e financeiros e inventários; documentei as atribuições do cargo para a contratação do substituto.",
    ],
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Financeiro e fiscal",
    items: [
      "Contas a pagar e a receber",
      "Conciliação bancária",
      "Conferência de caixa",
      "Fluxo de caixa",
      "NFC-e, NF-e e notas fiscais de serviço",
      "Orçamentos",
      "Negociação com fornecedores e adquirentes (maquininhas)",
    ],
  },
  {
    group: "Sistemas e dados",
    items: [
      "ERP",
      "SQL (uso no dia a dia nos sistemas que desenvolvi, com apoio de IA)",
      "Supabase/PostgreSQL",
      "Next.js e TypeScript",
      "Excel",
      "Git",
      "Python (básico)",
      "Power BI (introdutório)",
      "Desenvolvo sistemas de gestão com apoio de IA (Supabase/PostgreSQL)",
    ],
  },
  {
    group: "Processos e idiomas",
    items: [
      "Documentação de processos",
      "Treinamento de usuários",
      "Scrum e XP (faculdade)",
      "Inglês: leitura e compreensão",
    ],
  },
];

export const EDUCATION = {
  degrees: [
    {
      title: "Engenharia de Software",
      org: "UNAERP, Ribeirão Preto",
      period: "08/2023 – 07/2027 (previsão) · cursando o 7º período",
    },
    {
      title: "Técnico em Administração",
      org: "ETEC Prof. Idio Zucchi",
      period: "Concluído em 06/2022",
    },
    {
      title: "Técnico em Desenvolvimento de Sistemas",
      org: "ETEC Prof. Idio Zucchi",
      period: "Concluído em 07/2020",
    },
  ],
  courses: [
    "Data Analytics com Power BI — Digital Innovation One (82 h)",
    "Inglês — Remington (288 h)",
  ],
};

export const CONTACT = {
  title: "Vamos conversar.",
  text: "Aberta a oportunidades como analista de ERP/implantação, de processos ou financeiro/fiscal. CLT ou PJ, presencial ou híbrido na região de Ribeirão Preto (Bebedouro, Sertãozinho e Jaboticabal) ou remoto.",
};

export const CV = {
  summary:
    "Analista administrativo-financeiro e de processos, com mais de 4 anos de experiência em rotinas administrativas, fiscais e financeiras. Responsável pelo contas a pagar, pela conferência de caixa e pela emissão fiscal (NFC-e e notas de serviço) de 5 empresas de um mesmo grupo. Desenvolvi, com apoio de IA, e mantenho em produção um sistema de gestão financeira que substituiu mais de 10 planilhas desconectadas, hoje usado diariamente e consultado pela diretoria. Estudante de Engenharia de Software (UNAERP, conclusão prevista em 07/2027).",
  experience: [
    {
      title: "Analista Administrativo e Financeiro (prestação de serviços PJ)",
      org: "EcoService, Empório Caroni, Empório Hortifrutti, LGC Comércio de Gás e Eco Caroni Locações",
      period: "04/2025 - Atual",
      bullets: [
        "Respondo pelo financeiro e pelo fiscal de 5 empresas de 4 segmentos (varejo alimentar, água e gás, locação de máquinas e coleta de resíduos).",
        "Lanço as contas a pagar, apresento a programação diária para aprovação da diretoria, efetuo os pagamentos e negocio prazos e descontos com fornecedores.",
        "Emito NFC-e e notas fiscais de serviço; confiro o caixa das empresas contra o sistema de vendas e o extrato; elaboro orçamentos e negocio taxas de maquininha.",
        "Desenvolvi, com apoio de IA, e mantenho em produção desde 06/2026 um sistema de gestão financeira (Next.js, TypeScript e PostgreSQL), usado diariamente e consultado pela diretoria.",
        "Automatizei a geração de contratos de mútuo entre empresas do grupo.",
      ],
    },
    {
      title: "Aprendiz de Administração",
      org: "Usina Pitangueiras - Pitangueiras, SP",
      period: "05/2024 - 04/2025",
      bullets: [
        "Almoxarifado nos primeiros meses e, depois, setor de compras.",
        "Follow-up com fornecedores por telefone e mensagem para acompanhar prazos de entrega.",
      ],
    },
    {
      title: "Prestação de serviços avulsos, meio período (paralelo à usina)",
      org: "Empório Hortifrutti & Armazém das Bebidas LTDA",
      period: "01/2024 - 04/2025",
      bullets: [
        "Treinamento de novos colaboradores nas rotinas do financeiro e no uso do ERP; emissão de notas fiscais.",
      ],
    },
    {
      title: "Auxiliar Administrativa",
      org: "Empório Hortifrutti & Armazém das Bebidas LTDA",
      period: "06/2022 - 12/2023",
      bullets: [
        "Contas a pagar e a receber, notas fiscais, extratos bancários, e conferência de caixas.",
        "Lançamento e conferência de documentos fiscais (NF-e, boletos, DANFEs); cadastro de produtos, fornecedores e clientes no ERP.",
        "Precificação e margens, relatórios de vendas e estoque. Documentei as atribuições do cargo para a contratação do substituto.",
      ],
    },
  ],
  education: [
    "Engenharia de Software - Universidade de Ribeirão Preto (UNAERP) | 08/2023 - 07/2027 (previsão)",
    "Técnico em Administração - ETEC Prof. Idio Zucchi | Concluído em 06/2022",
    "Técnico em Desenvolvimento de Sistemas - ETEC Prof. Idio Zucchi | Concluído em 07/2020",
  ],
  skills: [
    {
      group: "Financeiro e fiscal",
      text: "contas a pagar, conciliação bancária, conferência de caixa, controle de saldos e fluxo de caixa diário, NFC-e, notas fiscais de serviço, orçamentos, negociação com fornecedores e com adquirentes.",
    },
    {
      group: "Sistemas e dados",
      text: "ERP, SQL, Python (básico), Power BI (introdutório), Excel, Next.js, TypeScript, PostgreSQL, Git.",
    },
    {
      group: "Processos",
      text: "documentação de processos, treinamento de usuários, Scrum e XP (aplicados na faculdade).",
    },
  ],
  courses: [
    "Bootcamp Data Analytics com Power BI - Digital Innovation One (82 h)",
    "Inglês - Remington (288 h)",
  ],
};
