// @flow
import * as d3 from 'd3'

export type TrackId = 'MOBILE' | 'WEB_CLIENT' | 'FOUNDATIONS' | 'SERVERS' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'WELLBEING' |
  'MENTORSHIP' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'MOBILE': Milestone,
  'WEB_CLIENT': Milestone,
  'FOUNDATIONS': Milestone,
  'SERVERS': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'INITIATIVE': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'ORG_DESIGN': Milestone,
  'WELLBEING': Milestone,
  'MENTORSHIP': Milestone,
  'COMMUNITY': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'MOBILE': Track,
  'WEB_CLIENT': Track,
  'FOUNDATIONS': Track,
  'SERVERS': Track,
  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'INITIATIVE': Track,
  'CAREER_DEVELOPMENT': Track,
  'ORG_DESIGN': Track,
  'WELLBEING': Track,
  'MENTORSHIP': Track,
  'COMMUNITY': Track
|}

export const tracks: Tracks = {
  "MOBILE": {
    "displayName": "Mobile",
    "category": "A",
    "description": "Desenvolve expertise em engenharia de plataformas móveis (PWA)",
    "milestones": [
      {
        "summary": "Conhecimento Básico de Desenvolvimento Mobile",
        "signals": [
          "Compreensão dos princípios básicos de desenvolvimento mobile.",
          "Familiaridade com linguagens de programação e frameworks utilizados no desenvolvimento mobile.",
          "Capacidade de construir aplicativos simples e estáticos para dispositivos móveis."
        ],
        "examples": [
          "Aprender os fundamentos do desenvolvimento de aplicativos para iOS e Android.",
          "Construir interfaces simples utilizando HTML, CSS e JavaScript para aplicativos web mobile.",
          "Desenvolver aplicativos básicos utilizando frameworks como React Native ou Flutter."
        ]
      },
      {
        "summary": "Desenvolvimento de Aplicativos Interativos",
        "signals": [
          "Construção de interfaces de usuário interativas e responsivas.",
          "Implementação de funcionalidades básicas de aplicativos, como navegação entre telas e interações com APIs.",
          "Teste e depuração de aplicativos para garantir sua qualidade e desempenho."
        ],
        "examples": [
          "Desenvolver um aplicativo com várias telas e navegação entre elas.",
          "Integrar APIs externas para obter e exibir dados dinâmicos no aplicativo.",
          "Realizar testes de unidade e integração para identificar e corrigir bugs."
        ]
      },
      {
        "summary": "Publicação de Aplicativos nas Lojas",
        "signals": [
          "Preparação e submissão de aplicativos para as lojas de aplicativos iOS e Android.",
          "Conhecimento dos requisitos e diretrizes de publicação das lojas de aplicativos.",
          "Capacidade de lidar com processos de revisão e correção de problemas identificados pelas lojas."
        ],
        "examples": [
          "Submeter um aplicativo para revisão na App Store e Google Play Store.",
          "Seguir as diretrizes de design e conteúdo das lojas de aplicativos durante o processo de submissão.",
          "Corrigir problemas de conformidade ou desempenho identificados pelos revisores das lojas."
        ]
      },
      {
        "summary": "Desenvolvimento de PWAs (Progressive Web Apps)",
        "signals": [
          "Construção de aplicativos web com funcionalidades de aplicativos nativos.",
          "Implementação de recursos como service workers para oferecer experiências offline.",
          "Teste e otimização de PWAs para garantir compatibilidade e desempenho em diferentes dispositivos."
        ],
        "examples": [
          "Criar um aplicativo web responsivo que funcione bem em dispositivos móveis e desktops.",
          "Implementar caching de conteúdo e funcionalidades offline utilizando service workers.",
          "Otimizar o desempenho de um PWA para carregamento rápido e baixo consumo de recursos."
        ]
      },
      {
        "summary": "Dominância em Padrões de Design e Experiência do Usuário",
        "signals": [
          "Conhecimento avançado de princípios de design de interface e experiência do usuário.",
          "Capacidade de criar interfaces visualmente atraentes e intuitivas para aplicativos móveis.",
          "Reconhecimento como um especialista em padrões de design e tendências do mercado."
        ],
        "examples": [
          "Aplicar princípios de design de material ou design de interface humana para criar interfaces consistentes e agradáveis.",
          "Desenvolver animações e transições fluidas para melhorar a experiência do usuário.",
          "Participar de discussões e apresentações sobre design de aplicativos em conferências ou comunidades de desenvolvedores."
        ]
      }
    ]
  },
  "WEB_CLIENT": {
    "displayName": "Cliente Web",
    "category": "A",
    "description": "Desenvolve expertise em tecnologias de cliente web, como HTML, CSS e JavaScript",
    "milestones": [
      {
        "summary": "Entendimento Básico do Framework e Linguagem de Programação (React com TypeScript)",
        "signals": [
          "Capacidade de criar e modificar componentes de forma independente.",
          "Habilidade para entender e solucionar erros comuns de sintaxe e lógica.",
          "Demonstrar compreensão dos princípios fundamentais do React e TypeScript.",
        ],
        "examples": [
          "Criar e renderizar componentes simples usando JSX e TypeScript.",
          "Utilizar props para passar dados entre componentes.",
          "Entender o ciclo de vida dos componentes e implementar métodos de ciclo de vida básicos.",
        ]
      },
      {
        "summary": "Gerenciamento de Estado e Reatividade",
        "signals": [
          "Capacidade de desenvolver aplicações com lógica de negócios mais complexa, mantendo um estado consistente.",
          "Habilidade para otimizar o desempenho da aplicação através do uso eficaz do estado local e global.",
          "Demonstrar compreensão dos princípios de imutabilidade e reatividade no desenvolvimento de aplicações React.",
        ],
        "examples": [
          "Utilizar useState e useEffect para gerenciar o estado e efeitos secundários em componentes funcionais.",
          "Implementar useContext para compartilhar dados entre componentes sem a necessidade de props intermediárias.",
          "Integrar biblioteca para gerenciamento de estado global em aplicações maiores.",
        ]
      },
      {
        "summary": "Roteamento e Navegação",
        "signals": [
          "Capacidade de criar aplicações de várias páginas usando roteamento dinâmico.",
          "Habilidade para lidar com problemas comuns de roteamento, como tratamento de rotas inexistentes ou erros de redirecionamento.",
          "Demonstrar uma compreensão profunda dos princípios de navegação no contexto de aplicações web.",
        ],
        "examples": [
          "Implementar rotas utilizando React Router para navegação entre diferentes componentes.",
          "Gerenciar parâmetros de URL e navegação programática em resposta a eventos de usuário.",
          "Utilizar componentes de navegação, como links e redirecionamentos, de forma eficaz.",
        ]
      },
      {
        "summary": "Integração de APIs e Requisições Assíncronas",
        "signals": [
          "Capacidade de integrar diversos tipos de APIs em aplicações front-end de forma eficiente.",
          "Habilidade para lidar com situações de erro, como timeouts de requisição ou respostas inesperadas do servidor.",
          "Demonstrar compreensão dos princípios de programação assíncrona e seu impacto na experiência do usuário."
        ],
        "examples": [
          "Consumir APIs RESTful utilizando fetch ou bibliotecas como Axios para obter e enviar dados do servidor.",
          "Implementar tratamento de erros e feedbacks de carregamento durante requisições assíncronas.",
          "Utilizar a Context API para gerenciar o estado da aplicação em resposta a requisições assíncronas."
        ]
      },
      {
        "summary": "Otimização de Desempenho e Acessibilidade",
        "signals": [
          "Capacidade de criar aplicações web responsivas e de alto desempenho em diferentes dispositivos e condições de rede.",
          "Habilidade para interpretar e implementar as diretrizes de acessibilidade, garantindo que a aplicação seja utilizável por todos os usuários.",
          "Demonstrar um compromisso contínuo com a melhoria do desempenho e acessibilidade da aplicação, através de testes regulares e atualizações conforme necessário.",
        ],
        "examples": [
          "Identificar e corrigir gargalos de desempenho na renderização e manipulação de elementos DOM.",
          "Implementar práticas recomendadas de otimização, como lazy loading de recursos e memoização de componentes.",
          "Garantir conformidade com padrões de acessibilidade, utilizando ferramentas como Lighthouse ou axe para auditoria e correção de problemas de acessibilidade.",
        ]
      }
    ]
  },
  "FOUNDATIONS": {
    "displayName": "Fundamentos",
    "category": "A",
    "description": "Desenvolve expertise em sistemas fundamentais, como implantações, pipelines e bancos de dados",
    "milestones": [
      {
        "summary": "Compreensão dos Conceitos Fundamentais",
        "signals": [
          "Entendimento dos princípios básicos de implantações, pipelines e bancos de dados.",
          "Familiaridade com os componentes e processos envolvidos em cada área.",
          "Capacidade de seguir instruções e realizar tarefas simples relacionadas a implantações, pipelines e bancos de dados."
        ],
        "examples": [
          "Compreender o conceito de CI/CD e sua importância no ciclo de vida do desenvolvimento de software.",
          "Familiarizar-se com os diferentes tipos de bancos de dados, como SQL e NoSQL.",
          "Executar scripts de implantação simples em um ambiente de desenvolvimento."
        ]
      },
      {
        "summary": "Aprendizado de Habilidades Técnicas Específicas",
        "signals": [
          "Aquisição de conhecimentos e habilidades técnicas relacionadas a implantações, pipelines e bancos de dados.",
          "Participação em cursos ou treinamentos específicos para aprimoramento técnico nessa área.",
          "Demonstração de capacidade para realizar tarefas mais complexas com orientação mínima."
        ],
        "examples": [
          "Aprender a usar ferramentas de automação de implantação como Ansible ou Terraform.",
          "Concluir cursos online sobre modelagem de dados e consultas SQL avançadas.",
          "Configurar e manter pipelines de integração contínua utilizando ferramentas como Jenkins ou GitLab CI."
        ]
      },
      {
        "summary": "Participação Efetiva em Projetos de Média Complexidade",
        "signals": [
          "Contribuição significativa para projetos que envolvem implantações, pipelines e bancos de dados.",
          "Trabalho em equipe para implementar soluções técnicas e resolver problemas complexos.",
          "Capacidade de lidar com desafios e imprevistos durante o desenvolvimento de sistemas fundamentais."
        ],
        "examples": [
          "Participar da criação e manutenção de pipelines de CI/CD para múltiplos ambientes de implantação.",
          "Projetar e implementar um banco de dados otimizado para uma aplicação de alta escala.",
          "Automatizar processos de implantação e configuração de infraestrutura em um ambiente de produção."
        ]
      },
      {
        "summary": "Resolução de Problemas Complexos",
        "signals": [
          "Capacidade de analisar e resolver problemas técnicos complexos relacionados a implantações, pipelines e bancos de dados.",
          "Desenvolvimento de soluções inovadoras para desafios técnicos específicos.",
          "Demonstração de pensamento crítico e habilidades avançadas de resolução de problemas."
        ],
        "examples": [
          "Identificar e corrigir falhas em pipelines de CI/CD que afetam a estabilidade do ambiente de produção.",
          "Otimizar consultas SQL para melhorar o desempenho de consultas em um banco de dados em grande escala.",
          "Projetar e implementar pipelines de entrega contínua altamente resilientes e escaláveis."
        ]
      },
      {
        "summary": "Especialização e Reconhecimento",
        "signals": [
          "Domínio avançado de conceitos e técnicas relacionadas a implantações, pipelines e bancos de dados.",
          "Reconhecimento como especialista nessa área específica.",
          "Contribuição significativa para o avanço do conhecimento e melhores práticas em sistemas fundamentais."
        ],
        "examples": [
          "Tornar-se um especialista reconhecido em implantação de microservices em ambientes de produção.",
          "Publicar artigos em conferências e revistas renomadas sobre tópicos relacionados a pipelines e implantações.",
          "Desenvolver e compartilhar ferramentas e frameworks de código aberto para automação de implantações e gerenciamento de pipelines."
        ]
      }
    ]
  },
  "SERVERS": {
    "displayName": "Servers",
    "category": "A",
    "description": "Desenvolve expertise em engenharia do lado do servidor, usando tecnologias como Go, NodeJS ou Python",
    "milestones": [
      {
        "summary": "Fundamentos de Desenvolvimento de Servidores e Linguagem de Programação (GoLang)",
        "signals": [
          "Capacidade de criar e executar um servidor HTTP simples",
          "Habilidade para entender e modificar o código existente",
          "Demonstração de familiaridade com conceitos fundamentais de GoLang"
        ],
        "examples": [
          "Criar um servidor HTTP básico",
          "Implementar manipulação de rotas e parâmetros de URL",
          "Utilizar estruturas de controle para processar requisições"
        ]
      },
      {
        "summary": "Integração com Banco de Dados (PostgreSQL) e ORM",
        "signals": [
          "Capacidade de integrar o servidor com PostgreSQL de forma eficiente",
          "Habilidade para criar consultas SQL básicas e utilizar ORM",
          "Demonstração de compreensão dos princípios de modelagem de dados"
        ],
        "examples": [
          "Conectar o servidor GoLang ao PostgreSQL",
          "Criar modelos de dados e definir relações",
          "Implementar operações CRUD"
        ]
      },
      {
        "summary": "Implementação de APIs RESTful e Middleware",
        "signals": [
          "Capacidade de projetar e implementar APIs RESTful completas",
          "Habilidade para adicionar e configurar middleware",
          "Demonstração de proficiência no uso de bibliotecas externas"
        ],
        "examples": [
          "Criar endpoints RESTful",
          "Implementar middleware para autenticação e autorização",
          "Utilizar bibliotecas como Gorilla Mux"
        ]
      },
      {
        "summary": "Concorrência e Gerenciamento de Rotinas (Goroutines)",
        "signals": [
          "Capacidade de projetar servidores eficientes e escaláveis",
          "Habilidade para lidar com problemas de concorrência",
          "Demonstração de compreensão avançada de concorrência em GoLang"
        ],
        "examples": [
          "Utilizar goroutines para tarefas em segundo plano",
          "Implementar canais para comunicação entre goroutines",
          "Utilizar o padrão de Worker Pool"
        ]
      },
      {
        "summary": "Testes, Monitoramento e Escalabilidade",
        "signals": [
          "Escrever testes unitários e de integração",
          "Implementar métricas e instrumentação para monitoramento",
          "Configurar para dimensionamento horizontal"
        ],
        "examples": [
          "Capacidade de desenvolver e manter uma suíte de testes abrangente",
          "Habilidade para monitorar e diagnosticar problemas de desempenho",
          "Demonstração de habilidades avançadas em arquitetura de sistemas distribuídos"
        ]
      }
    ]
  },
  "PROJECT_MANAGEMENT": {
    "displayName": "Gerenciamento de projetos",
    "category": "B",
    "description": "Prática de planejar, coordenar e controlar recursos e atividades para atingir objetivos específicos dentro de prazos e orçamentos definidos.",
    "milestones": [
      {
        "summary": "Compreensão Básica de Metodologias de Desenvolvimento de Software",
        "signals": [
          "Capacidade de entender e aplicar conceitos básicos de metodologias ágeis de desenvolvimento.",
          "Habilidade para trabalhar dentro de estruturas de equipe auto-organizadas.",
          "Demonstração de compreensão dos princípios de entrega incremental e colaborativa."
        ],
        "examples": [
          "Participar de reuniões de planejamento e revisão de sprint em um ambiente Agile.",
          "Ajudar na criação e manutenção do quadro Kanban da equipe.",
          "Contribuir para a elaboração de histórias de usuário durante a fase de levantamento de requisitos."
        ]
      },
      {
        "summary": "Participação Ativa em Cerimônias de Projeto",
        "signals": [
          "Capacidade de participar efetivamente em todas as cerimônias de projeto, contribuindo de forma significativa para o progresso da equipe.",
          "Habilidade para identificar e resolver impedimentos de forma proativa.",
          "Demonstração de compromisso com a melhoria contínua do processo de desenvolvimento."
        ],
        "examples": [
          "Contribuir ativamente em reuniões diárias, compartilhando progresso e impedimentos.",
          "Participar de sessões de retrospectiva para identificar áreas de melhoria e definir ações corretivas.",
          "Colaborar na elaboração e refinamento do backlog do produto, priorizando e estimando as histórias de usuário."
        ]
      },
      {
        "summary": "Gestão de Tarefas e Coordenação de Equipe",
        "signals": [
          "Capacidade de gerenciar eficientemente o fluxo de trabalho da equipe, garantindo que as tarefas sejam concluídas dentro dos prazos estabelecidos.",
          "Habilidade para identificar e resolver conflitos de priorização ou recursos de forma eficaz.",
          "Demonstração de liderança e habilidades de coordenação para garantir o sucesso do projeto."
        ],
        "examples": [
          "Utilizar ferramentas de gerenciamento de tarefas, como kanbanize, para acompanhar o progresso das atividades da equipe.",
          "Atribuir tarefas e responsabilidades de forma equilibrada entre os membros da equipe.",
          "Facilitar a comunicação e a colaboração entre os membros da equipe, garantindo que todos tenham clareza sobre suas responsabilidades e prazos."
        ]
      },
      {
        "summary": "Planejamento e Monitoramento de Projetos",
        "signals": [
          "Capacidade de elaborar planos de projeto detalhados e realistas, levando em consideração recursos, prazos e restrições.",
          "Habilidade para identificar e resolver problemas de forma proativa, mantendo o projeto dentro do escopo e do orçamento definidos.",
          "Demonstração de habilidades avançadas em gerenciamento de projetos, incluindo comunicação eficaz, tomada de decisões e resolução de conflitos."
        ],
        "examples": [
          "Participar na definição de metas e objetivos do projeto, ajudando a estabelecer um plano de ação claro.",
          "Monitorar o progresso do projeto em relação ao cronograma e aos marcos estabelecidos, identificando desvios e tomando medidas corretivas quando necessário.",
          "Realizar análises de risco e implementar estratégias de mitigação para garantir o sucesso do projeto."
        ]
      },
      {
        "summary": "Liderança de Equipe e Gestão de Stakeholders",
        "signals": [
          "Capacidade de liderar equipes multifuncionais e inspirar confiança em seus membros.",
          "Habilidade para influenciar e negociar com stakeholders de diferentes níveis e áreas de interesse.",
          "Demonstração de liderança visionária e estratégica, guiando a equipe em direção aos objetivos do projeto e da organização."
        ],
        "examples": [
          "Orientar e mentorar membros mais juniores da equipe, ajudando no desenvolvimento de suas habilidades e conhecimentos.",
          "Gerenciar as expectativas e as necessidades dos stakeholders, garantindo uma comunicação clara e transparente ao longo do projeto.",
          "Tomar decisões difíceis e assumir a responsabilidade pelo sucesso do projeto, mesmo em situações de pressão ou adversidade."
        ]
      }
    ]
  },
  "COMMUNICATION": {
    "displayName": "Comunicação",
    "category": "B",
    "description": "Compartilha a quantidade certa de informações com as pessoas certas, no momento certo, e ouve com eficácia",
    "milestones": [
      {
        "summary": "Comunicação Básica em Equipe",
        "signals": [
          "Capacidade de comunicar-se efetivamente com colegas de equipe em ambientes de trabalho.",
          "Habilidade para expressar ideias de forma clara e concisa.",
          "Demonstração de respeito e empatia ao interagir com outros membros da equipe."
        ],
        "examples": [
          "Participar ativamente em reuniões de equipe, compartilhando atualizações e contribuindo com ideias.",
          "Comunicar-se de forma clara e respeitosa com colegas de equipe, buscando esclarecimentos quando necessário.",
          "Colaborar em projetos de equipe, seguindo instruções e compartilhando progresso regularmente."
        ]
      },
      {
        "summary": "Comunicação com Stakeholders Externos",
        "signals": [
          "Capacidade de comunicar-se de forma eficaz com clientes e outras partes interessadas externas.",
          "Habilidade para representar a empresa de forma profissional em interações com clientes.",
          "Demonstração de habilidades de negociação e resolução de problemas em contextos externos."
        ],
        "examples": [
          "Participar de reuniões com clientes para entender requisitos e expectativas do projeto.",
          "Apresentar atualizações de progresso e demonstrações de produto para stakeholders externos.",
          "Responder a perguntas e preocupações de clientes de forma clara e profissional."
        ]
      },
      {
        "summary": "Escrita Técnica e Documentação",
        "signals": [
          "Capacidade de produzir documentação técnica de alta qualidade.",
          "Habilidade para organizar informações complexas de forma lógica e acessível.",
          "Demonstração de compromisso com a precisão e atualização contínua da documentação."
        ],
        "examples": [
          "Escrever documentação técnica clara e concisa para projetos de desenvolvimento de software.",
          "Criar guias de usuário detalhados para ajudar os usuários a entender e utilizar os produtos.",
          "Documentar processos e procedimentos internos para facilitar a colaboração e a continuidade do trabalho."
        ]
      },
      {
        "summary": "Comunicação em Situações de Conflito",
        "signals": [
          "Capacidade de lidar com conflitos de forma eficaz, mantendo o foco nos objetivos comuns.",
          "Habilidade para comunicar-se de maneira clara e respeitosa, mesmo em situações difíceis.",
          "Demonstração de habilidades de mediação e resolução de conflitos para alcançar resultados positivos."
        ],
        "examples": [
          "Resolver conflitos de forma construtiva, ouvindo atentamente todas as partes envolvidas e buscando soluções colaborativas.",
          "Comunicar-se de forma calma e assertiva durante discussões acaloradas ou situações de estresse.",
          "Negociar acordos e compromissos que atendam às necessidades de todas as partes envolvidas."
        ]
      },
      {
        "summary": "Liderança em Comunicação",
        "signals": [
          "Capacidade de liderar efetivamente equipes e influenciar outros por meio da comunicação.",
          "Habilidade para adaptar o estilo de comunicação conforme necessário para diferentes públicos e situações.",
          "Demonstração de habilidades avançadas em comunicação interpessoal, incluindo escuta ativa, feedback construtivo e empatia."
        ],
        "examples": [
          "Facilitar reuniões de equipe de forma eficaz, garantindo que todos os participantes tenham a oportunidade de contribuir.",
          "Inspira confiança e motivação em outros membros da equipe por meio de uma comunicação clara e transparente.",
          "Representar a equipe em comunicações com a liderança sênior e outros departamentos, transmitindo informações de forma precisa e relevante."
        ]
      }
    ]
  },
  "CRAFT": {
    "displayName": "Qualidade",
    "category": "B",
    "description": "Incorpora e promove práticas para garantir produtos e serviços de excelente qualidade",
    "milestones": [
      {
        "summary": "Compreensão Básica de Práticas de Qualidade de Software",
        "signals": [
          "Capacidade de escrever código limpo e legível.",
          "Identificação e correção de problemas de qualidade durante revisões de código.",
          "Compromisso com os princípios básicos de teste de software."
        ],
        "examples": [
          "Seguir as diretrizes de codificação da equipe.",
          "Realizar revisões de código regulares para identificar problemas.",
          "Participar de testes de unidade para validar a funcionalidade do código."
        ]
      },
      {
        "summary": "Implementação de Testes Automatizados",
        "signals": [
          "Criação e execução de testes automatizados eficazes.",
          "Escrita de testes abrangentes que cubram diferentes aspectos do sistema.",
          "Compreensão dos benefícios e melhores práticas de teste automatizado."
        ],
        "examples": [
          "Desenvolver testes de unidade para validar o comportamento de funções e métodos.",
          "Escrever testes de integração para verificar a interação entre componentes do sistema.",
          "Implementar testes de regressão para garantir que alterações no código não introduzam novos bugs."
        ]
      },
      {
        "summary": "Análise de Qualidade de Código e Performance",
        "signals": [
          "Utilização de ferramentas de análise estática para identificar e corrigir problemas de código.",
          "Interpretação e ação sobre resultados de profiling para otimizar o desempenho do sistema.",
          "Compromisso contínuo com a melhoria da qualidade do código e do desempenho do software."
        ],
        "examples": [
          "Utilizar ferramentas de análise estática de código para identificar potenciais problemas.",
          "Realizar profiling de código para identificar gargalos de desempenho.",
          "Implementar melhorias no código para aumentar a eficiência e a qualidade do software."
        ]
      },
      {
        "summary": "Implementação de Práticas de DevOps",
        "signals": [
          "Configuração e gerenciamento de pipelines de integração contínua para automatizar o processo de desenvolvimento.",
          "Implantação e escalabilidade eficientes de aplicativos usando práticas de DevOps.",
          "Compreensão dos princípios e práticas de DevOps e sua aplicação na garantia de qualidade de software."
        ],
        "examples": [
          "Automatizar o processo de integração contínua para garantir construção e teste automatizados.",
          "Implantar e escalar aplicativos de forma eficiente usando práticas de DevOps.",
          "Configurar monitoramento de aplicativos para identificar e resolver problemas de desempenho em tempo real."
        ]
      },
      {
        "summary": "Liderança em Qualidade de Software",
        "signals": [
          "Liderança de iniciativas de qualidade de software em toda a organização.",
          "Influência na cultura organizacional em direção a uma mentalidade de qualidade centrada no cliente.",
          "Compromisso com a excelência em qualidade de software e melhoria contínua."
        ],
        "examples": [
          "Definir e implementar estratégias de garantia de qualidade para projetos de grande escala.",
          "Mentorar membros da equipe junior em práticas de qualidade de software.",
          "Colaborar com outras equipes para estabelecer padrões e melhores práticas de qualidade em toda a organização."
        ]
      }
    ]
  },
  "INITIATIVE": {
    "displayName": "Iniciativa",
    "category": "B",
    "description": "Desafia o status quo e promove mudanças organizacionais positivas fora do trabalho obrigatório",
    "milestones": [
      {
        "summary": "Assunção de Responsabilidade Individual",
        "signals": [
          "Conclusão consistente de tarefas dentro dos prazos estabelecidos.",
          "Busca ativa de oportunidades para aprender e crescer.",
          "Demonstração de autodirecionamento e motivação para melhorar constantemente."
        ],
        "examples": [
          "Concluir tarefas atribuídas de forma eficiente e dentro dos prazos.",
          "Procurar proativamente oportunidades para contribuir além das responsabilidades imediatas.",
          "Pedir feedback regularmente e usar para melhorar o desempenho."
        ]
      },
      {
        "summary": "Colaboração em Equipe",
        "signals": [
          "Habilidade para trabalhar em equipe de forma colaborativa e construtiva.",
          "Comunicação eficaz e aberta com colegas de equipe.",
          "Demonstração de flexibilidade e disposição para apoiar os outros quando necessário."
        ],
        "examples": [
          "Contribuir para discussões de equipe com ideias e soluções.",
          "Oferecer ajuda aos colegas quando perceber que estão enfrentando dificuldades.",
          "Trabalhar efetivamente em projetos de equipe, cumprindo prazos e entregando resultados de qualidade."
        ]
      },
      {
        "summary": "Iniciativa em Resolução de Problemas",
        "signals": [
          "Capacidade de identificar problemas e propor soluções eficazes de forma independente.",
          "Demonstração de iniciativa para aprender e aplicar novas habilidades e conhecimentos.",
          "Liderança eficaz na resolução de problemas, garantindo que as soluções sejam implementadas de forma eficiente."
        ],
        "examples": [
          "Identificar e propor soluções para problemas enfrentados no dia a dia.",
          "Pesquisar ativamente novas tecnologias e técnicas para melhorar processos ou resolver desafios.",
          "Assumir a liderança na resolução de problemas complexos, coordenando esforços e reunindo recursos necessários."
        ]
      },
      {
        "summary": "Adoção de Projetos Pessoais ou Iniciativas de Aprendizado",
        "signals": [
          "Compromisso com o aprendizado contínuo e o desenvolvimento profissional.",
          "Demonstração de capacidade de gerenciar e concluir projetos pessoais ou iniciativas de aprendizado de forma autônoma.",
          "Contribuição significativa para projetos de código aberto ou comunidades de desenvolvedores."
        ],
        "examples": [
          "Trabalhar em projetos pessoais de desenvolvimento de software para explorar novas tecnologias ou aprimorar habilidades existentes.",
          "Participar ativamente de cursos online, workshops ou conferências para expandir o conhecimento técnico.",
          "Contribuir para projetos de código aberto ou comunidades de desenvolvedores como forma de aprender e colaborar com outros profissionais."
        ]
      },
      {
        "summary": "Liderança em Inovação e Mudança",
        "signals": [
          "Visão estratégica e capacidade de antecipar tendências e oportunidades.",
          "Demonstração de liderança eficaz na implementação de mudanças e inovações.",
          "Influência positiva na cultura organizacional, promovendo uma mentalidade de inovação e melhoria contínua."
        ],
        "examples": [
          "Identificar oportunidades para melhorias significativas nos processos ou produtos da empresa.",
          "Propor e liderar iniciativas de inovação que agreguem valor aos clientes ou otimizem a eficiência operacional.",
          "Inspirar e motivar colegas de equipe a abraçar mudanças e a contribuir ativamente para o sucesso da empresa."
        ]
      }
    ]
  },
  "CAREER_DEVELOPMENT": {
    "displayName": "Desenvolvimento de carreira",
    "category": "C",
    "description": "Fornece suporte estratégico aos engenheiros para ajudá-los a construir a carreira que desejam",
    "milestones": [
      {
        "summary": "Estabelecimento de Fundamentos Técnicos",
        "signals": [
          "Habilidade para aplicar conceitos básicos de programação para resolver problemas simples.",
          "Demonstração de familiaridade com ambientes de desenvolvimento e ferramentas relevantes.",
          "Compromisso com o aprendizado contínuo e o aprimoramento técnico."
        ],
        "examples": [
          "Aprender os conceitos básicos de linguagens de programação relevantes.",
          "Familiarizar-se com ferramentas de desenvolvimento comuns.",
          "Concluir cursos introdutórios sobre desenvolvimento de software."
        ]
      },
      {
        "summary": "Contribuição Efetiva em Projetos de Equipe",
        "signals": [
          "Capacidade de trabalhar de forma independente em tarefas designadas.",
          "Comunicação eficaz e colaboração com membros da equipe.",
          "Demonstração de iniciativa para melhorar processos e resolver problemas de equipe."
        ],
        "examples": [
          "Trabalhar em tarefas designadas de forma eficiente.",
          "Colaborar com colegas de equipe para alcançar objetivos comuns.",
          "Contribuir com ideias e soluções para problemas de desenvolvimento."
        ]
      },
      {
        "summary": "Desenvolvimento de Habilidades Específicas de Domínio",
        "signals": [
          "Demonstração de proficiência em áreas específicas de desenvolvimento de software.",
          "Capacidade de resolver problemas complexos dentro do campo de especialização.",
          "Contribuição significativa para o sucesso de projetos que exigem habilidades técnicas avançadas."
        ],
        "examples": [
          "Aprofundar o conhecimento em áreas específicas, como front-end ou back-end.",
          "Dominar o uso de frameworks e bibliotecas relevantes para o campo de atuação.",
          "Participar de projetos que exijam habilidades técnicas avançadas."
        ]
      },
      {
        "summary": "Mentoria e Liderança Técnica",
        "signals": [
          "Capacidade de transmitir conhecimento de forma clara e eficaz.",
          "Liderança eficaz em projetos técnicos, garantindo qualidade e eficiência.",
          "Reconhecimento como um especialista técnico dentro da organização ou comunidade."
        ],
        "examples": [
          "Orientar desenvolvedores mais juniores na equipe.",
          "Assumir a liderança técnica em projetos específicos.",
          "Apresentar palestras ou workshops sobre tópicos técnicos relevantes."
        ]
      },
      {
        "summary": "Desenvolvimento de Estratégia de Carreira e Impacto Organizacional",
        "signals": [
          "Visão clara de onde deseja estar em sua carreira e como chegar lá.",
          "Capacidade de influenciar a direção técnica da organização e contribuir para o sucesso a longo prazo.",
          "Reconhecimento como um líder em seu campo, tanto dentro quanto fora da organização."
        ],
        "examples": [
          "Estabelecer metas de carreira de longo prazo e desenvolver um plano para alcançá-las.",
          "Influenciar decisões estratégicas relacionadas ao desenvolvimento de software dentro da organização.",
          "Contribuir para a cultura e o crescimento da empresa de maneira significativa."
        ]
      }
    ]
  },
  "ORG_DESIGN": {
    "displayName": "Design Organizacional",
      "category": "C",
        "description": "Define processos e estruturas que permitem o forte crescimento e execução de uma organização de engenharia diversificada",
        "milestones": [
          {
            "summary": "Compreensão do Contexto Organizacional",
            "signals": [
              "Capacidade de compreender a missão, visão e valores da organização.",
              "Conhecimento das políticas, procedimentos e estrutura organizacional.",
              "Consciência das relações entre diferentes equipes e departamentos."
            ],
            "examples": [
              "Entender a missão da empresa e como o trabalho individual contribui para ela.",
              "Familiarizar-se com os procedimentos de comunicação e tomada de decisão.",
              "Identificar as interações entre equipes de desenvolvimento, QA e operações."
            ]
          },
          {
            "summary": "Adaptação à Cultura Organizacional",
            "signals": [
              "Demonstrar comportamentos e atitudes alinhados com a cultura da empresa.",
              "Colaborar efetivamente com colegas de diferentes origens e perspectivas.",
              "Aceitar e integrar feedback para melhorar o desempenho e o ajuste cultural."
            ],
            "examples": [
              "Seguir as práticas e valores culturais da empresa no trabalho diário.",
              "Trabalhar de forma colaborativa em equipes multidisciplinares.",
              "Responder de forma construtiva ao feedback recebido dos colegas e superiores."
            ]
          },
          {
            "summary": "Participação em Iniciativas Organizacionais",
            "signals": [
              "Engajamento ativo em projetos e iniciativas além das responsabilidades imediatas.",
              "Contribuição para a melhoria de processos e práticas organizacionais.",
              "Assunção de responsabilidades adicionais em projetos ou grupos de trabalho."
            ],
            "examples": [
              "Participar de grupos de melhoria de processos ou de projetos de inovação.",
              "Propor e implementar melhorias em fluxos de trabalho ou comunicação interna.",
              "Assumir liderança em projetos que visam o crescimento ou a eficiência da empresa."
            ]
          },
          {
            "summary": "Desenvolvimento de Habilidades de Liderança",
            "signals": [
              "Capacidade de motivar e influenciar colegas para alcançar objetivos comuns.",
              "Assumir papéis de liderança em projetos ou equipes.",
              "Mentorar e orientar membros juniores da equipe."
            ],
            "examples": [
              "Inspirar colegas a alcançar metas desafiadoras em projetos de equipe.",
              "Liderar iniciativas de mudança ou transformação dentro da organização.",
              "Compartilhar conhecimentos e experiências para ajudar no crescimento profissional dos colegas."
            ]
          },
          {
            "summary": "Contribuição Estratégica para o Desenvolvimento Organizacional",
            "signals": [
              "Identificação e promoção de oportunidades de crescimento e inovação.",
              "Participação ativa em discussões estratégicas sobre o futuro da organização.",
              "Contribuição para a construção de uma cultura de aprendizado e melhoria contínua."
            ],
            "examples": [
              "Propor iniciativas estratégicas para expandir o alcance ou impacto da empresa.",
              "Participar de grupos de trabalho para desenvolver planos de longo prazo da organização.",
              "Facilitar sessões de brainstorming ou workshops para promover a inovação e a criatividade."
            ]
          }
        ]
  },
  "WELLBEING": {
    "displayName": "Bem-estar",
      "category": "C",
        "description": "Apoia o bem-estar emocional dos membros do grupo em tempos difíceis e celebra seus sucessos",
        "milestones": [
          {
            "summary": "Autoconhecimento e Autocuidado",
            "signals": [
              "Reconhecimento das próprias necessidades físicas, mentais e emocionais.",
              "Adoção de práticas regulares de autocuidado para manter o equilíbrio.",
              "Capacidade de identificar e lidar com o estresse de forma saudável."
            ],
            "examples": [
              "Praticar exercícios físicos regularmente para manter a saúde e o bem-estar.",
              "Adotar técnicas de mindfulness ou meditação para gerenciar o estresse.",
              "Estabelecer limites saudáveis entre trabalho e vida pessoal para evitar o esgotamento."
            ]
          },
          {
            "summary": "Equilíbrio entre Trabalho e Vida Pessoal",
            "signals": [
              "Estabelecimento de limites claros entre o trabalho e a vida pessoal.",
              "Priorização do tempo para atividades e relacionamentos fora do trabalho.",
              "Capacidade de desligar-se do trabalho durante períodos de descanso e lazer."
            ],
            "examples": [
              "Definir um horário de trabalho consistente e respeitar os momentos de descanso.",
              "Participar regularmente de atividades de lazer, como hobbies ou tempo com a família.",
              "Desconectar-se do trabalho durante feriados ou férias para recarregar as energias."
            ]
          },
          {
            "summary": "Desenvolvimento de Habilidades de Resiliência",
            "signals": [
              "Capacidade de lidar com desafios e contratempos de forma construtiva.",
              "Adoção de uma mentalidade de crescimento e aprendizado contínuo.",
              "Recuperação rápida após períodos de estresse ou adversidade."
            ],
            "examples": [
              "Encarar feedbacks negativos como oportunidades de crescimento e desenvolvimento.",
              "Aprender com os fracassos e usar essas experiências para melhorar no futuro.",
              "Manter-se otimista e focado em soluções diante de obstáculos ou dificuldades."
            ]
          },
          {
            "summary": "Promoção de um Ambiente de Trabalho Saudável",
            "signals": [
              "Participação ativa em iniciativas de bem-estar dentro da empresa.",
              "Fomento de uma cultura de apoio mútuo e respeito entre os colegas.",
              "Contribuição para a criação de políticas e práticas que promovam o bem-estar dos funcionários."
            ],
            "examples": [
              "Organizar eventos de equipe focados em atividades de relaxamento ou bem-estar.",
              "Oferecer suporte e incentivo aos colegas que estão passando por momentos difíceis.",
              "Advogar por políticas de flexibilidade de horário ou trabalho remoto para melhorar o equilíbrio entre trabalho e vida pessoal."
            ]
          },
          {
            "summary": "Liderança em Saúde e Bem-estar",
            "signals": [
              "Inspiração e motivação dos colegas para priorizarem o bem-estar.",
              "Implementação de estratégias eficazes para promover a saúde mental e emocional no ambiente de trabalho.",
              "Advocacia por mudanças organizacionais que promovam um ambiente de trabalho mais saudável e equilibrado."
            ],
            "examples": [
              "Criar programas de mentoria para promover o autocuidado e a resiliência entre os colegas.",
              "Implementar políticas de licença por saúde mental e flexibilidade de horário para apoiar os funcionários.",
              "Liderar iniciativas de conscientização e treinamento sobre saúde mental e bem-estar no local de trabalho."
            ]
          }
        ]
  },
  "MENTORSHIP": {
    "displayName": "Mentoria",
      "category": "D",
        "description": "Fornece suporte aos colegas, dissemina conhecimento e desenvolve a equipe fora das estruturas formais de relatório",
        "milestones": [
          {
            "summary": "Aprendizado e Adaptação",
            "signals": [
              "Demonstração de vontade de aprender e crescer.",
              "Assimilação rápida de novos conhecimentos e habilidades.",
              "Capacidade de se adaptar a novos ambientes e desafios."
            ],
            "examples": [
              "Fazer perguntas e buscar feedback ativamente.",
              "Aprender novas linguagens de programação ou frameworks conforme necessário para os projetos.",
              "Demonstrar agilidade ao enfrentar mudanças nos requisitos ou nas tecnologias utilizadas."
            ]
          },
          {
            "summary": "Desenvolvimento de Habilidades Técnicas",
            "signals": [
              "Aquisição de conhecimentos e habilidades técnicas relevantes para a função.",
              "Aplicação eficaz das técnicas aprendidas para resolver problemas complexos.",
              "Demonstração de proficiência em ferramentas e tecnologias específicas."
            ],
            "examples": [
              "Participar de cursos online ou treinamentos presenciais para aprimorar habilidades técnicas.",
              "Resolver desafios de codificação em plataformas de competição ou em projetos pessoais.",
              "Dominar o uso de frameworks populares ou ferramentas de desenvolvimento."
            ]
          },
          {
            "summary": "Aprimoramento de Habilidades de Comunicação",
            "signals": [
              "Comunicação clara e eficaz com colegas de equipe e mentores.",
              "Capacidade de explicar conceitos técnicos de forma acessível a outros.",
              "Solicitação e aceitação de feedback de forma construtiva."
            ],
            "examples": [
              "Participar ativamente de reuniões de equipe e expressar ideias de forma clara e organizada.",
              "Preparar e apresentar documentações técnicas ou relatórios de projeto.",
              "Solicitar feedback regularmente e usar para melhorar as habilidades de comunicação."
            ]
          },
          {
            "summary": "Contribuição Efetiva em Projetos",
            "signals": [
              "Entrega consistente de resultados de alta qualidade em projetos.",
              "Colaboração eficaz com colegas de equipe para alcançar objetivos comuns.",
              "Assunção de responsabilidades adicionais e liderança em tarefas específicas."
            ],
            "examples": [
              "Concluir tarefas designadas dentro dos prazos estabelecidos e com qualidade.",
              "Oferecer suporte e orientação a colegas menos experientes na resolução de problemas.",
              "Assumir a liderança em subprojetos ou iniciativas específicas."
            ]
          },
          {
            "summary": "Desenvolvimento de Habilidades de Mentoria",
            "signals": [
              "Oferecimento de orientação e suporte significativos a mentees mais juniores.",
              "Capacidade de identificar e abordar as necessidades individuais de cada mentee.",
              "Demonstração de habilidades de liderança e influência positiva sobre os mentees."
            ],
            "examples": [
              "Atuar como mentor para desenvolvedores mais juniores na equipe, oferecendo conselhos e orientações.",
              "Personalizar a orientação de acordo com as habilidades e metas de carreira de cada mentee.",
              "Inspirar e motivar os mentees a buscar o desenvolvimento profissional e pessoal."
            ]
          }
        ]
  },
  "COMMUNITY": {
    "displayName": "Comunidade",
      "category": "D",
        "description": "Constrói comunidade internamente, contribui para a equipe e defende e exalta os valores da empresa",
        "milestones": [
          {
            "summary": "Participação Ativa em Comunidades Online",
            "signals": [
              "Engajamento regular em fóruns de desenvolvedores, grupos de discussão e comunidades online.",
              "Contribuição para projetos de código aberto ou repositórios de código.",
              "Compartilhamento de conhecimento e experiências com outros membros da comunidade."
            ],
            "examples": [
              "Participar de discussões e responder a perguntas em fóruns como Stack Overflow ou Reddit.",
              "Contribuir com código, correções de bugs ou documentação em projetos de código aberto.",
              "Escrever e publicar artigos técnicos em blogs ou sites de desenvolvimento."
            ]
          },
          {
            "summary": "Engajamento em Eventos e Conferências",
            "signals": [
              "Presença e participação em eventos locais, meetups e conferências da área de tecnologia.",
              "Apresentação de palestras, workshops ou painéis em eventos técnicos.",
              "Networking ativo com outros profissionais da indústria."
            ],
            "examples": [
              "Comparecer a meetups ou grupos de usuários locais sobre tecnologias específicas.",
              "Apresentar um projeto ou tecnologia em uma conferência ou meetup local.",
              "Conhecer e estabelecer contatos com outros desenvolvedores e líderes de tecnologia."
            ]
          },
          {
            "summary": "Contribuição para o Desenvolvimento da Comunidade",
            "signals": [
              "Organização ou coorganização de eventos e meetups técnicos.",
              "Mentoria ou coaching de membros mais juniores da comunidade.",
              "Advocacia por inclusão e diversidade na comunidade de tecnologia."
            ],
            "examples": [
              "Coordenar a organização de um meetup técnico regular em sua cidade.",
              "Oferecer-se como mentor em programas de mentoria para estudantes ou desenvolvedores iniciantes.",
              "Participar ativamente de iniciativas que promovam a diversidade de gênero, raça e origens na comunidade de tecnologia."
            ]
          },
          {
            "summary": "Liderança e Reconhecimento na Comunidade",
            "signals": [
              "Reconhecimento como líder ou referência em uma área específica de tecnologia.",
              "Apresentação de palestras em conferências regionais ou internacionais.",
              "Contribuição significativa para o crescimento e desenvolvimento da comunidade."
            ],
            "examples": [
              "Ser reconhecido como um especialista em uma linguagem de programação ou tecnologia específica.",
              "Ser convidado para palestrar em eventos de grande porte, como conferências internacionais.",
              "Fundar ou liderar uma iniciativa que tenha impacto positivo na comunidade de tecnologia."
            ]
          },
          {
            "summary": "Mentoria e Orientação de Futuras Gerações",
            "signals": [
              "Orientação e apoio a estudantes e novos desenvolvedores que entram na área de tecnologia.",
              "Contribuição para programas de educação em tecnologia em escolas ou universidades.",
              "Investimento pessoal no crescimento e desenvolvimento de futuras gerações de profissionais de tecnologia."
            ],
            "examples": [
              "Participar como mentor em programas educacionais para ensinar habilidades de programação a estudantes.",
              "Oferecer-se como palestrante ou instrutor em workshops de tecnologia para jovens.",
              "Estabelecer programas de estágio ou oportunidades de mentoria em sua empresa para estudantes e novos profissionais."
            ]
          }
        ]
  }
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Desenvolvedor Júnior', minPoints: 0, maxPoints: 16},
  {label: 'Desenvolvedor Pleno', minPoints: 17, maxPoints: 35},
  {label: 'Desenvolvedor Sênior', minPoints: 36, maxPoints: 57},

  // Decisão de carreira
  {label: 'Lider Técnico', minPoints: 58, maxPoints: 89},
  {label: 'Gerente de Software', minPoints: 58, maxPoints: 89},

  {label: 'Diretor de Tecnologia (CTO)', minPoints:90},
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
