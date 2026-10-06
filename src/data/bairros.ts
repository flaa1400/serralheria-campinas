export interface BairroData {
  slug: string;
  name: string;
  preposition: string; // e.g. "no", "na", "em"
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  diferenciais: {
    emoji: string;
    title: string;
    description: string;
  }[];
  aboutTitle: string;
  aboutText: string;
  testimonial: {
    name: string;
    text: string;
    type: string;
    initials: string;
  };
  faqs: {
    q: string;
    a: string;
  }[];
}

export const bairrosData: BairroData[] = [
  {
    slug: "serralheria-em-campo-grande-campinas",
    name: "Campo Grande",
    preposition: "em",
    title: "Serralheria em Campo Grande em Campinas",
    metaDescription: "Procurando serralheria em Campo Grande, Campinas? Fabricamos portões basculantes, grades de proteção e estruturas metálicas com aço galvalume. Peça seu orçamento!",
    heroTitle: "Serralheria no Campo Grande em Campinas | Estruturas e Portões",
    heroSubtitle: "Se você reside ou tem comércio na região do Campo Grande e precisa de um serralheiro qualificado, a Precisão Metal oferece atendimento ágil e sob medida. Projetamos e fabricamos portões robustos, grades reforçadas e coberturas metálicas com solda certificada e alta durabilidade.",
    diferenciais: [
      {
        emoji: "🛡️",
        title: "Perfis em Aço Galvalume",
        description: "Estruturas resistentes às intempéries climáticas da região do Campo Grande, com tratamento contra ferrugem e corrosão precoce."
      },
      {
        emoji: "⚡",
        title: "Medição Rápida Local",
        description: "Nossos técnicos atendem prontamente na região do Campo Grande para tirar medidas precisas e enviar o orçamento em menos de 24 horas."
      },
      {
        emoji: "📜",
        title: "Garantia por Escrito",
        description: "Compromisso total de 5 anos na integridade estrutural e suporte técnico pós-venda garantido para sua tranquilidade."
      }
    ],
    aboutTitle: "Soluções de Serralheria Sob Medida para o Campo Grande",
    aboutText: "A região do Campo Grande em Campinas cresce a cada dia, demandando soluções inteligentes em serralheria residencial e comercial. Nós da Precisão Metal nos especializamos em portões automáticos basculantes e deslizantes, além de estruturas de ferro que garantem a segurança do seu patrimônio. Atendemos com agilidade todas as vilas e loteamentos do distrito, levando materiais de primeira linha e acabamento refinado para valorizar seu imóvel.",
    testimonial: {
      name: "Ana Clara Martins",
      text: "Fizeram as grades de proteção e o portão social da minha casa no Campo Grande. Excelente serviço, entrega rápida e profissionais muito limpos no pós-obra!",
      type: "Residencial • Campo Grande",
      initials: "AM"
    },
    faqs: [
      {
        q: "Vocês cobram taxa de visita para orçamento no Campo Grande?",
        a: "Não! A visita técnica para tirar medidas e elaborar o orçamento é 100% gratuita em toda a região do Campo Grande."
      },
      {
        q: "Qual o prazo médio de instalação para um portão no Campo Grande?",
        a: "O prazo de fabricação é de 7 a 15 dias úteis. A instalação no local é realizada em apenas um dia para evitar transtornos na sua garagem."
      },
      {
        q: "As estruturas metálicas têm garantia?",
        a: "Sim, oferecemos garantia de 5 anos contra problemas mecânicos e defeitos estruturais em todos os nossos projetos."
      }
    ]
  },
  {
    slug: "serralheria-no-ouro-verde-campinas",
    name: "Ouro Verde",
    preposition: "no",
    title: "Serralheria no Ouro Verde em Campinas",
    metaDescription: "Serralheria no Ouro Verde em Campinas sob medida. Fabricação de mezaninos, portões automáticos e guarda-corpos resistentes. Solicite orçamento sem compromisso!",
    heroTitle: "Serralheria no Ouro Verde em Campinas | Soluções em Metalúrgica",
    heroSubtitle: "A Precisão Metal atende com excelência o distrito do Ouro Verde. Oferecemos soluções personalizadas em estruturas de ferro, mezaninos para galpões e portões residenciais com acabamento profissional e preços altamente competitivos.",
    diferenciais: [
      {
        emoji: "🚀",
        title: "Atendimento Express",
        description: "Equipe móvel sempre de prontidão na região do Ouro Verde para vistorias urgentes e medições no mesmo dia do contato."
      },
      {
        emoji: "💎",
        title: "Soldagem Profissional",
        description: "Processos de solda MIG e eletrodo revestido executados por profissionais experientes, garantindo conexões ultra-resistentes."
      },
      {
        emoji: "💰",
        title: "Preço Justo e Facilitado",
        description: "Melhor custo-benefício de Campinas, com parcelamento facilitado no cartão e desconto especial para pagamentos via PIX."
      }
    ],
    aboutTitle: "Projetos de Serralheria Residencial e Industrial no Ouro Verde",
    aboutText: "O distrito do Ouro Verde é um dos polos mais movimentados de Campinas, reunindo comércio vibrante e grande densidade residencial. A Precisão Metal atua fornecendo portas de aço automáticas para lojistas, mezaninos industriais e grades residenciais de alta resistência. Entendemos a necessidade de segurança e rapidez que o Ouro Verde exige, por isso otimizamos nossa logística de fabricação e montagem para entregar obras limpas e com prazos rigorosamente cumpridos.",
    testimonial: {
      name: "Marcos Souza",
      text: "Precisei de um mezanino metálico para o estoque do meu comércio no Ouro Verde. A estrutura ficou extremamente firme e a entrega foi antes do prazo combinado.",
      type: "Comercial • Ouro Verde",
      initials: "MS"
    },
    faqs: [
      {
        q: "A Precisão Metal faz portas comerciais de enrolar no Ouro Verde?",
        a: "Sim! Fabricamos e instalamos portas de aço de enrolar (manuais e automáticas) ideais para comércio no distrito do Ouro Verde."
      },
      {
        q: "Como agendar uma medição no Ouro Verde?",
        a: "Basta nos chamar pelo WhatsApp informando seu endereço. Agendamos a visita técnica gratuita para o dia e horário de sua preferência."
      },
      {
        q: "Quais materiais vocês utilizam?",
        a: "Utilizamos aço carbono qualificado, tubos industriais galvanizados e chapas antiferrugem para assegurar a vida útil das instalações."
      }
    ]
  },
  {
    slug: "serralheria-no-bosque-campinas",
    name: "Bosque",
    preposition: "no",
    title: "Serralheria no Bosque em Campinas",
    metaDescription: "Precisa de serralheiro no Bosque em Campinas? Especialistas em guarda-corpos, corrimãos e portões elegantes em aço galvanizado. Atendimento premium e garantia.",
    heroTitle: "Serralheria no Bosque em Campinas | Design e Segurança",
    heroSubtitle: "Agregue sofisticação e segurança ao seu imóvel no bairro do Bosque. Desenvolvemos estruturas metálicas finas, corrimãos de segurança, portões personalizados e projetos arquitetônicos sob medida com altíssimo padrão de acabamento.",
    diferenciais: [
      {
        emoji: "📐",
        title: "Projetos Sob Medida",
        description: "Executamos projetos sob medida para combinar com a arquitetura tradicional e moderna do tradicional bairro do Bosque."
      },
      {
        emoji: "✨",
        title: "Acabamento Premium",
        description: "Polimento de solda minucioso e preparação de superfície que garante pintura perfeita e lisa, sem imperfeições."
      },
      {
        emoji: "🔒",
        title: "Segurança Reforçada",
        description: "Dispositivos de tranca e reforços internos projetados para garantir o máximo de segurança para residências e condomínios."
      }
    ],
    aboutTitle: "Tradição e Modernidade em Metalurgia no Bairro Bosque",
    aboutText: "O Bosque é um bairro tradicional de Campinas, caracterizado por suas ruas arborizadas e edifícios charmosos. Nossos serviços de serralheria no Bosque são focados no design detalhado, atendendo tanto a projetos de restauração quanto a novas obras de alto padrão. Produzimos guarda-corpos elegantes, corrimãos em conformidade com as normas técnicas de acessibilidade e portões eletrônicos silenciosos que trazem praticidade e beleza ao cotidiano dos moradores locais.",
    testimonial: {
      name: "Letícia Alves",
      text: "Fiquei encantada com o guarda-corpo que instalaram na varanda do meu apartamento no Bosque. O design é clean e o acabamento da pintura ficou impecável.",
      type: "Residencial • Bosque",
      initials: "LA"
    },
    faqs: [
      {
        q: "Vocês atendem condomínios residenciais no Bosque?",
        a: "Sim, somos especialistas em atender condomínios no Bosque, oferecendo grades de fechamento, portões de pedestres e corrimãos de escadas internas e externas."
      },
      {
        q: "Vocês fazem a instalação elétrica do motor do portão?",
        a: "Nossos portões saem preparados para automatização. Oferecemos também o serviço completo de instalação do motor e testes de abertura rápida."
      },
      {
        q: "É possível agendar a instalação aos sábados no Bosque?",
        a: "Sim, alinhamos o cronograma de instalação de acordo com as normas de ruído do seu condomínio ou residência, inclusive aos sábados pela manhã."
      }
    ]
  },
  {
    slug: "serralheria-no-botafogo-campinas",
    name: "Botafogo",
    preposition: "no",
    title: "Serralheria no Botafogo em Campinas",
    metaDescription: "Serviço de serralheria no Botafogo em Campinas. Estruturas metálicas, coberturas de garagem e soldas profissionais. Orçamento rápido via WhatsApp!",
    heroTitle: "Serralheria no Botafogo em Campinas | Soluções Inteligentes em Aço",
    heroSubtitle: "Soluções versáteis em serralheria para residências, escritórios e comércios no bairro Botafogo. Atendimento profissional, fabricação própria e prazos cumpridos rigorosamente para o seu projeto.",
    diferenciais: [
      {
        emoji: "🏗️",
        title: "Estruturas Certificadas",
        description: "Projetos calculados sob medida para suportar cargas exigidas com total segurança e durabilidade no Botafogo."
      },
      {
        emoji: "🔩",
        title: "Ferragens de Primeira",
        description: "Utilizamos exclusivamente dobradiças, fechaduras e roldanas de marcas líderes de mercado para evitar manutenções precoces."
      },
      {
        emoji: "⏱️",
        title: "Pontualidade Rigorosa",
        description: "Compromisso com o cronograma da sua obra. Entregamos e instalamos no dia e hora marcados, sem desculpas."
      }
    ],
    aboutTitle: "Estruturas de Ferro e Manutenção de Portões no Botafogo",
    aboutText: "Localizado em uma região estratégica e de fluxo intenso em Campinas, o bairro Botafogo mistura edifícios comerciais e áreas residenciais consolidadas. A Precisão Metal atua no Botafogo fornecendo serviços rápidos de solda, coberturas metálicas para estacionamentos, portões de garagem rápidos e grades de segurança. Nossos serralheiros estão preparados para intervir com agilidade e eficiência, reduzindo o tempo de obra e garantindo a máxima estabilidade das peças metálicas instaladas.",
    testimonial: {
      name: "Carlos Roberto",
      text: "Fiz o corrimão das escadas e o mezanino da minha oficina no Botafogo. Equipe séria, comprometida e muito profissional. Recomendo o trabalho deles.",
      type: "Comercial • Botafogo",
      initials: "CR"
    },
    faqs: [
      {
        q: "Vocês realizam reparos e reformas em portões antigos no Botafogo?",
        a: "Sim, fazemos troca de roldanas, cabos de aço, reforço de solda e reforma geral de portões basculantes e deslizantes no Botafogo."
      },
      {
        q: "Quanto custa o metro quadrado do mezanino metálico?",
        a: "O valor varia conforme a carga de peso por m² e o tipo de piso (chapa xadrez, painel wall, etc). Solicite um orçamento rápido para receber o cálculo detalhado."
      },
      {
        q: "Vocês fornecem nota fiscal para empresas no Botafogo?",
        a: "Sim, todos os nossos serviços acompanham nota fiscal de prestação de serviços e termo de garantia estrutural."
      }
    ]
  },
  {
    slug: "serralheria-no-cambui-campinas",
    name: "Cambuí",
    preposition: "no",
    title: "Serralheria no Cambuí em Campinas",
    metaDescription: "Serralheria de alto padrão no Cambuí, Campinas. Portões sob medida, guarda-corpos modernos e estruturas metálicas finas. Acabamento impecável e garantia.",
    heroTitle: "Serralheria no Cambuí em Campinas | Alto Padrão em Metalúrgica",
    heroSubtitle: "Projetos de serralheria fina que combinam design moderno, robustez e acabamento impecável. Atendemos residências de alto padrão, lojas conceitos e edifícios comerciais no Cambuí com excelência premium.",
    diferenciais: [
      {
        emoji: "⚜️",
        title: "Design Arquitetônico",
        description: "Alinhamento com projetos de arquitetos e designers, entregando peças integradas perfeitamente ao visual sofisticado do Cambuí."
      },
      {
        emoji: "🎖️",
        title: "Acabamento Sem Emendas",
        description: "Tratamento de soldas invisíveis com lixamento técnico e pintura automotiva ou eletrostática de alta durabilidade."
      },
      {
        emoji: "⚡",
        title: "Atendimento Exclusivo",
        description: "Cronograma de montagem flexível, agendamento personalizado e equipe treinada para trabalhar em ambientes residenciais exigentes."
      }
    ],
    aboutTitle: "Serralheria Premium para Projetos Residenciais e Comerciais no Cambuí",
    aboutText: "O Cambuí é reconhecido como o bairro mais nobre e sofisticado de Campinas, reunindo o melhor da gastronomia, moda e residências de alto padrão. Para acompanhar esse nível de exigência, a Precisão Metal desenvolve produtos de serralheria artística e industrial com acabamento superior. Criamos guarda-corpos minimalistas, corrimãos com fixação oculta, portões basculantes com painel fechado e estruturas metálicas leves que valorizam o design do seu imóvel no Cambuí.",
    testimonial: {
      name: "Mariana Queiroz",
      text: "Contratei a Precisão Metal para fazer o portão e a fachada metálica da minha loja de roupas no Cambuí. Ficou espetacular, acabamento fino e sem nenhuma emenda de solda aparente.",
      type: "Residencial/Comercial • Cambuí",
      initials: "MQ"
    },
    faqs: [
      {
        q: "Vocês trabalham em parceria com escritórios de arquitetura no Cambuí?",
        a: "Sim! Executamos projetos complexos baseados em desenhos técnicos e especificações de arquitetos com total precisão de medidas."
      },
      {
        q: "Quais opções de acabamento e pintura vocês oferecem?",
        a: "Oferecemos pintura com fundo primer epóxi antiferrugem e acabamentos em esmalte sintético automotivo, além de preparação para pintura eletrostática a pó."
      },
      {
        q: "É possível fazer o orçamento por desenho técnico via WhatsApp?",
        a: "Com certeza. Se você já possui o projeto ou as medidas, envie-nos pelo WhatsApp que faremos a análise e enviaremos o orçamento detalhado rapidamente."
      }
    ]
  },
  {
    slug: "serralheria-no-centro-campinas",
    name: "Centro",
    preposition: "no",
    title: "Serralheria no Centro de Campinas",
    metaDescription: "Serralheria no Centro de Campinas com foco em segurança comercial e rapidez. Fabricamos portas de aço automáticas, grades de proteção e fazemos soldas rápidas.",
    heroTitle: "Serralheria no Centro de Campinas | Segurança Comercial e Industrial",
    heroSubtitle: "Procurando por serralheiro no Centro de Campinas? Proteja seu comércio ou residência com portas de aço automatizadas, grades pantográficas, mezaninos para estoque e serviços de soldagem de urgência.",
    diferenciais: [
      {
        emoji: "🔒",
        title: "Reforço contra Invasões",
        description: "Fabricação de grades pesadas, trancas especiais e portas reforçadas para máxima proteção do comércio no Centro."
      },
      {
        emoji: "🏃",
        title: "Atendimento Express",
        description: "Deslocamento rápido na região central para resolver quebras de portões comerciais ou manutenções prediais urgentes."
      },
      {
        emoji: "🧱",
        title: "Instalação Segura e Limpa",
        description: "Isolamento da área de solda para segurança de pedestres e limpeza total após a finalização dos serviços."
      }
    ],
    aboutTitle: "Segurança de Elite e Soluções Comerciais no Centro de Campinas",
    aboutText: "A região central de Campinas possui uma alta concentração de lojas, prédios de escritórios e imóveis históricos que demandam cuidados especiais de segurança. A Precisão Metal se destaca no Centro de Campinas pela agilidade em fabricar e instalar portas automáticas de enrolar, grades sob medida para fachadas e mezaninos metálicos que otimizam estoques comerciais. Nossa equipe é treinada para trabalhar sob cronogramas rigorosos e fora do horário comercial se necessário, minimizando os impactos no funcionamento do seu estabelecimento.",
    testimonial: {
      name: "Bruno Mendes",
      text: "Tivemos problemas com o portão comercial da nossa loja no Centro e a Precisão Metal resolveu no mesmo dia. Ótimo atendimento e preço muito justo para comércio.",
      type: "Comercial • Centro",
      initials: "BM"
    },
    faqs: [
      {
        q: "Vocês atendem fora do horário comercial no Centro?",
        a: "Sim. Para instalações em lojas ou shoppings centrais, programamos a montagem em horários especiais (noite/madrugada) para não interromper suas vendas."
      },
      {
        q: "Vocês fazem portas de enrolar manuais ou apenas automáticas?",
        a: "Trabalhamos com ambas. Oferecemos as tradicionais manuais com mola e fechadura central e as automáticas com motores potentes e controle remoto."
      },
      {
        q: "Qual o prazo para conserto de um portão danificado no Centro?",
        a: "Para reparos emergenciais (cabos rompidos, soldas quebradas), priorizamos a equipe móvel para atendimento e solução no mesmo dia."
      }
    ]
  },
  {
    slug: "serralheria-no-guanabara-campinas",
    name: "Guanabara",
    preposition: "no",
    title: "Serralheria no Guanabara em Campinas",
    metaDescription: "Serralheria no Guanabara em Campinas. Estruturas metálicas pesadas, mezaninos comerciais, portões e grades com alta durabilidade. Solicite seu orçamento!",
    heroTitle: "Serralheria no Guanabara em Campinas | Estruturas e Projetos Sob Medida",
    heroSubtitle: "Soluções robustas em estruturas metálicas e serralheria fina para o bairro Guanabara. Atendemos clínicas, consultórios, comércios e residências com foco em pontualidade, soldagem de alta performance e matérias-primas de qualidade.",
    diferenciais: [
      {
        emoji: "📐",
        title: "Cálculo Estrutural Preciso",
        description: "Projetamos mezaninos e coberturas no Guanabara garantindo segurança máxima e suportabilidade de carga ideal."
      },
      {
        emoji: "🔨",
        title: "Solda Certificada",
        description: "Todos os profissionais são habilitados em soldagem de precisão, oferecendo excelente fixação e visual limpo nas emendas."
      },
      {
        emoji: "🛡️",
        title: "Pós-Venda Ativo",
        description: "Acompanhamos a instalação de perto e oferecemos planos de manutenção preventiva para manter suas estruturas perfeitas."
      }
    ],
    aboutTitle: "Qualidade Metálica para Clínicas, Comércios e Residências no Guanabara",
    aboutText: "O bairro Guanabara é conhecido por sua excelente infraestrutura de saúde e comércio em Campinas, além de agradáveis ruas residenciais. Nós fornecemos soluções sob medida como rampas metálicas de acessibilidade, corrimãos reforçados para clínicas médicas, coberturas de policarbonato para recepções e portões automatizados de alta velocidade. A Precisão Metal atua com precisão técnica nos acabamentos e respeito absoluto aos prazos, garantindo a tranquilidade necessária para quem investe na valorização do seu imóvel no Guanabara.",
    testimonial: {
      name: "Thiago Santos",
      text: "Encomendei a estrutura de um mezanino metálico para armazenar arquivo morto no meu escritório no Guanabara. Excelente cálculo estrutural e montagem impecável.",
      type: "Comercial • Guanabara",
      initials: "TS"
    },
    faqs: [
      {
        q: "Vocês fazem rampas metálicas de acessibilidade conforme a norma NBR 9050?",
        a: "Sim, projetamos e fabricamos rampas e corrimãos de segurança totalmente em conformidade com as exigências da Vigilância Sanitária e NBR 9050."
      },
      {
        q: "Qual material é indicado para cobertura de estacionamento no Guanabara?",
        a: "Recomendamos estruturas de aço com cobertura em telhas termoacústicas (sanduíche) para isolamento térmico, ou policarbonato para manter a luminosidade natural."
      },
      {
        q: "Como funciona o pagamento parcelado?",
        a: "Facilitamos o pagamento em até 12 vezes no cartão de crédito, com opção de faturamento via boleto bancário mediante análise de crédito para empresas."
      }
    ]
  },
  {
    slug: "serralheria-na-vila-itapura-campinas",
    name: "Vila Itapura",
    preposition: "na",
    title: "Serralheria na Vila Itapura em Campinas",
    metaDescription: "Serralheria de confiança na Vila Itapura em Campinas. Portões basculantes rápidos, grades, corrimãos e escadas metálicas sob medida. Peça um orçamento!",
    heroTitle: "Serralheria na Vila Itapura em Campinas | Acabamento e Segurança",
    heroSubtitle: "Projetos sob medida em metal para o bairro Vila Itapura. Do residencial ao corporativo, fabricamos portões basculantes de funcionamento suave e silencioso, grades decorativas e corrimãos com design contemporâneo e durabilidade excepcional.",
    diferenciais: [
      {
        emoji: "🔒",
        title: "Segurança Inteligente",
        description: "Instalação de travas magnéticas e reforço estrutural em portões sociais para elevar a segurança da sua casa ou condomínio."
      },
      {
        emoji: "🛠️",
        title: "Equipe Especializada",
        description: "Serralheiros experientes focados em montagens limpas, rápidas e no alinhamento milimétrico das estruturas na Vila Itapura."
      },
      {
        emoji: "🎨",
        title: "Pintura Antirresíduo",
        description: "Processo de preparação química do aço com fundo fosfatizante que evita descascamento e bolhas na pintura posterior."
      }
    ],
    aboutTitle: "Metalurgia Customizada de Alto Padrão na Vila Itapura",
    aboutText: "A Vila Itapura é uma região nobre e de grande movimentação médica e residencial de Campinas. A Precisão Metal atende ao bairro oferecendo soluções personalizadas que atendem aos rígidos padrões estéticos dos condomínios locais e clínicas. Fabricamos grades de fechamento elegantes, guarda-corpos em aço e vidro, portas sociais com fechaduras elétricas integradas e portões automáticos. Nosso diferencial é aliar a extrema resistência mecânica do aço a acabamentos sofisticados e discretos que complementam as fachadas dos imóveis.",
    testimonial: {
      name: "Fernanda Costa",
      text: "Fui muito bem atendida na Vila Itapura. O portão basculante foi entregue e instalado exatamente no prazo combinado, e o motor abre super rápido.",
      type: "Residencial • Vila Itapura",
      initials: "FC"
    },
    faqs: [
      {
        q: "Vocês instalam fechaduras elétricas ou digitais nos portões sociais?",
        a: "Sim, entregamos o portão social com a furação adequada e fazemos a instalação de fechaduras elétricas padrão ou digitais com integração a interfones."
      },
      {
        q: "Qual a diferença entre portão de aço comum e galvalume?",
        a: "O aço comum oxida rapidamente se exposto à chuva. O galvalume combina aço, alumínio e zinco, proporcionando uma resistência até 4 vezes superior à corrosão."
      },
      {
        q: "Vocês atendem clínicas médicas e consultórios na Vila Itapura?",
        a: "Sim! Temos ampla experiência em adequação de acessibilidade para clínicas, instalando corrimãos duplos, rampas de metal e guarda-corpos de segurança."
      }
    ]
  },
  {
    slug: "serralheria-na-vila-industrial-campinas",
    name: "Vila Industrial",
    preposition: "na",
    title: "Serralheria na Vila Industrial em Campinas",
    metaDescription: "Procurando serralheria na Vila Industrial em Campinas? Fabricação de estruturas metálicas, portões, escadas caracol e reformas de solda com rapidez. Ligue já!",
    heroTitle: "Serralheria na Vila Industrial em Campinas | Tradição e Excelência Metálica",
    heroSubtitle: "O bairro Vila Industrial tem história, e a Precisão Metal tem a técnica. Fabricamos portões basculantes, escadas metálicas (caracol e viga central), corrimãos e estruturas industriais com garantia de qualidade e soldas altamente resistentes.",
    diferenciais: [
      {
        emoji: "🏗️",
        title: "Escadas Metálicas Sob Medida",
        description: "Desenvolvemos escadas caracol, retas ou em L perfeitamente dimensionadas para otimizar espaço na Vila Industrial."
      },
      {
        emoji: "⚒️",
        title: "Reformas e Reparos",
        description: "Executamos troca de chapas enferrujadas, reforço de solda e manutenção corretiva de portões com rapidez local."
      },
      {
        emoji: "📝",
        title: "Garantia Integral",
        description: "Garantimos em contrato a estabilidade estrutural das nossas escadas, mezaninos e portões por 5 anos."
      }
    ],
    aboutTitle: "Escadas, Portões e Estruturas Metálicas na Vila Industrial",
    aboutText: "A Vila Industrial, bairro histórico e berço do desenvolvimento industrial de Campinas, hoje mistura residências consolidadas a novos projetos imobiliários. A Precisão Metal atua na região fornecendo escadas metálicas sob medida para aproveitamento de espaço, portões de chapa ou tubulares para garagens, e reforços estruturais em ferro. Nossa proposta é unir a solidez da serralheria tradicional a acabamentos e designs modernos que agreguem segurança física e valorização patrimonial aos imóveis da Vila Industrial.",
    testimonial: {
      name: "Júlio César",
      text: "Contratei a fabricação de uma escada metálica reta com degraus antiderrapantes para minha oficina na Vila Industrial. Serviço robusto e acabamento muito firme.",
      type: "Residencial • Vila Industrial",
      initials: "JC"
    },
    faqs: [
      {
        q: "Quais tipos de escadas metálicas vocês fabricam na Vila Industrial?",
        a: "Fabricamos escadas caracol (espiral), escadas retas com viga U ou viga central, escadas marinheiro e modelos articulados sob medida."
      },
      {
        q: "Vocês fazem o serviço de pintura final nas estruturas?",
        a: "Entregamos as peças com aplicação de fundo primer antiferrugem. Se contratado, realizamos a pintura de acabamento final com tinta esmalte sintético na cor desejada."
      },
      {
        q: "Como agendar uma avaliação na Vila Industrial?",
        a: "Agendamos uma visita técnica sem compromisso pelo nosso WhatsApp comercial. Nosso serralheiro analisa o local e orienta sobre o melhor modelo de estrutura."
      }
    ]
  },
  {
    slug: "serralheria-no-bonfim-campinas",
    name: "Bonfim",
    preposition: "no",
    title: "Serralheria no Bonfim em Campinas",
    metaDescription: "Serralheria no Bonfim em Campinas. Especialistas em segurança para portões eletrônicos, grades para janelas e soldas residenciais rápidas. Orçamento gratuito!",
    heroTitle: "Serralheria no Bonfim em Campinas | Segurança e Proteção Residencial",
    heroSubtitle: "Garanta a tranquilidade da sua família no bairro Bonfim. Desenvolvemos grades de proteção reforçadas para janelas e muros, portões automáticos basculantes e portas sociais seguras com materiais altamente duráveis.",
    diferenciais: [
      {
        emoji: "🔒",
        title: "Foco em Segurança",
        description: "Grades e portões com espaçamento adequado e trancas reforçadas para inibir invasões residenciais no Bonfim."
      },
      {
        emoji: "💨",
        title: "Instalação sem Sujeira",
        description: "Nossa equipe utiliza ferramentas de corte e solda com coletores e limpa completamente o local após a fixação da estrutura."
      },
      {
        emoji: "🏷️",
        title: "Direto da Fábrica",
        description: "Sem intermediários. Fabricamos todas as peças em nossa própria oficina, garantindo preços muito mais competitivos."
      }
    ],
    aboutTitle: "Segurança de Alto Nível e Serralheria Residencial no Bonfim",
    aboutText: "O bairro Bonfim é uma região predominantemente residencial e comercial em Campinas, necessitando de constantes melhorias na área de segurança perimetral. Nós da Precisão Metal fornecemos serviços especializados de instalação de concertinas, grades tubulares ou de ferro maciço para janelas e portas comerciais, e portões automatizados que abrem em poucos segundos. Combinamos técnicas avançadas de soldagem com pintura de fundo industrial, oferecendo produtos que resistem bravamente ao tempo e garantem a blindagem visual e física da sua casa.",
    testimonial: {
      name: "Rodrigo Lima",
      text: "Fiquei muito satisfeito com as grades de proteção das minhas janelas e o portão novo que a Precisão Metal fabricou para mim no Bonfim. Preço excelente e qualidade incrível.",
      type: "Residencial • Bonfim",
      initials: "RL"
    },
    faqs: [
      {
        q: "Vocês fabricam grades pantográficas sob medida no Bonfim?",
        a: "Sim! As grades pantográficas são ótimas para comércios e residências no Bonfim, pois permitem abertura total quando necessário, otimizando o vão livre."
      },
      {
        q: "Qual o metal mais indicado para grades expostas à chuva?",
        a: "Indicamos tubos e perfis galvanizados ou galvalume, que recebem uma camada protetora de zinco que impede a oxidação natural pelo contato com a água."
      },
      {
        q: "Vocês atendem chamados de solda elétrica rápida no Bonfim?",
        a: "Sim, enviamos um serralheiro com equipamento de solda portátil para reparos estruturais urgentes (dobradiças quebradas, trincos soltos) no bairro."
      }
    ]
  },
  {
    slug: "serralheria-no-jardim-aurelia-campinas",
    name: "Jardim Aurélia",
    preposition: "no",
    title: "Serralheria no Jardim Aurélia em Campinas",
    metaDescription: "Serralheria no Jardim Aurélia em Campinas. Portões basculantes automatizados, grades sob medida e corrimãos de aço galvanizado. Fale com um especialista hoje!",
    heroTitle: "Serralheria no Jardim Aurélia em Campinas | Tecnologia e Design em Aço",
    heroSubtitle: "Modernize a entrada da sua residência no Jardim Aurélia. Fabricamos portões automáticos sob medida de funcionamento suave e silencioso, coberturas para garagem e grades personalizadas com fino acabamento.",
    diferenciais: [
      {
        emoji: "⚡",
        title: "Abertura Ultrarrápida",
        description: "Portões preparados para receber motores rápidos que abrem em até 4 segundos, garantindo sua entrada segura no Jardim Aurélia."
      },
      {
        emoji: "🎨",
        title: "Design Personalizado",
        description: "Portões tubulares, com chapa veneziana ou detalhes em madeira ecológica para combinar com o visual da sua fachada."
      },
      {
        emoji: "🛡️",
        title: "Aço de Alta Qualidade",
        description: "Garantimos o uso de perfis grossos de marcas certificadas, evitando amassados e desalinhamentos futuros."
      }
    ],
    aboutTitle: "Portões Automáticos e Coberturas de Garagem no Jardim Aurélia",
    aboutText: "O Jardim Aurélia é um bairro charmoso e valorizado em Campinas, vizinho de grandes shoppings e vias de acesso. Nossos serviços no Jardim Aurélia são voltados à modernização residencial, substituindo portões antigos e pesados por modelos leves de basculante com contrapeso embutido. Também fabricamos estruturas metálicas para garagens com coberturas em policarbonato alveolar ou telhas termoacústicas, oferecendo sombra, proteção e conforto térmico para seus veículos com um visual contemporâneo que valoriza o imóvel.",
    testimonial: {
      name: "Cláudia Rossi",
      text: "Meu portão antigo vivia dando problema. A Precisão Metal instalou um basculante de aço galvalume no meu condomínio no Jardim Aurélia e agora funciona perfeitamente e em silêncio.",
      type: "Residencial • Jardim Aurélia",
      initials: "CR"
    },
    faqs: [
      {
        q: "Qual a vantagem do portão basculante para casas no Jardim Aurélia?",
        a: "O portão basculante não ocupa espaço nas laterais da garagem ao abrir (ao contrário do deslizante) e protege contra chuva na entrada do veículo."
      },
      {
        q: "Vocês trabalham com portas de aço com detalhes de vidro?",
        a: "Sim, fabricamos portas sociais e caixilharia de ferro sob medida preparadas para instalação de vidros temperados ou laminados."
      },
      {
        q: "Qual o canal para solicitar um orçamento rápido no Jardim Aurélia?",
        a: "Basta clicar no botão do WhatsApp e nos enviar fotos do local e as medidas aproximadas para receber um orçamento prévio em poucas horas."
      }
    ]
  },
  {
    slug: "serralheria-no-jardim-bandeirantes-campinas",
    name: "Jardim Bandeirantes",
    preposition: "no",
    title: "Serralheria no Jardim Bandeirantes em Campinas",
    metaDescription: "Procurando serralheria no Jardim Bandeirantes em Campinas? Atendimento rápido para fabricação de grades, estruturas metálicas e portões sob medida. Ligue já!",
    heroTitle: "Serralheria no Jardim Bandeirantes em Campinas | Estruturas Metálicas e Solda",
    heroSubtitle: "Atendimento técnico qualificado no Jardim Bandeirantes. Projetamos e executamos mezaninos metálicos, portões de correr, corrimãos e escadas sob medida com materiais certificados e soldagem de alta resistência.",
    diferenciais: [
      {
        emoji: "🔨",
        title: "Soldadores Experientes",
        description: "Equipe técnica com anos de experiência em soldagem MIG e reparos rápidos de estruturas danificadas no Jardim Bandeirantes."
      },
      {
        emoji: "⏱️",
        title: "Entrega Rápida",
        description: "Processo produtivo otimizado em nossa serralheria para garantir que sua estrutura seja montada no prazo acordado."
      },
      {
        emoji: "💪",
        title: "Estruturas Fortes",
        description: "Utilizamos ferros e perfis espessos que garantem a estabilidade estrutural de qualquer mezanino ou escada fabricada."
      }
    ],
    aboutTitle: "Estruturas Metálicas e Soluções Customizadas no Jardim Bandeirantes",
    aboutText: "Para os proprietários e comércios localizados no Jardim Bandeirantes, em Campinas, a Precisão Metal é sinônimo de excelência e atendimento sob medida. Fabricamos mezaninos de ferro para ganho de área útil em depósitos, escadas metálicas marinheiro e caracol resistentes à oxidação, grades reforçadas para segurança patrimonial e portões sob medida. Nossa fabricação segue rigorosos critérios de qualidade, resultando em estruturas estáveis, soldas limpas e com excelente preparação para pintura final, prolongando consideravelmente sua vida útil.",
    testimonial: {
      name: "Guilherme Bueno",
      text: "Contratei a Precisão Metal para reforçar as soldas e trocar as roldanas do meu portão deslizante no Jardim Bandeirantes. Serviço limpo, rápido e muito honesto. Recomendo!",
      type: "Residencial • Jardim Bandeirantes",
      initials: "GB"
    },
    faqs: [
      {
        q: "Vocês fazem estruturas para telhados e galpões no Jardim Bandeirantes?",
        a: "Sim, projetamos e montamos treliças, tesouras de ferro, terças e coberturas metálicas completas com telhas galvanizadas ou termoacústicas."
      },
      {
        q: "É possível fazer orçamento com base nas medidas do meu pedreiro?",
        a: "Sim, enviamos uma estimativa de preço com base nas medidas informadas e, antes de fabricar, nosso serralheiro vai ao local confirmar as dimensões exatas."
      },
      {
        q: "Vocês aceitam cartão BNDES para empresas?",
        a: "Sim, aceitamos faturamento por cartão BNDES, além de parcelamento em cartões de crédito corporativos e boleto bancário."
      }
    ]
  },
  {
    slug: "serralheria-no-jardim-campineiro-campinas",
    name: "Jardim Campineiro",
    preposition: "no",
    title: "Serralheria no Jardim Campineiro em Campinas",
    metaDescription: "Serralheria no Jardim Campineiro em Campinas sob medida. Fabricamos grades de segurança, portões basculantes e realizamos soldas em geral. Solicite orçamento!",
    heroTitle: "Serralheria no Jardim Campineiro em Campinas | Segurança de Confiança",
    heroSubtitle: "Leve mais proteção e valorização para o seu imóvel no Jardim Campineiro. Oferecemos serviços especializados de serralheria, com fabricação de portões automáticos, grades tubulares robustas e soldas profissionais.",
    diferenciais: [
      {
        emoji: "🔒",
        title: "Segurança Inteligente",
        description: "Grades com perfis resistentes de ferro e soldagem dupla nas junções para resistir a tentativas de arrombamento."
      },
      {
        emoji: "💰",
        title: "Economia Real",
        description: "Preços de fábrica acessíveis para a região do Jardim Campineiro, com ótimas condições de parcelamento sem juros."
      },
      {
        emoji: "⚙️",
        title: "Componentes Duráveis",
        description: "Utilizamos trincos, fechaduras e roldanas zincadas que evitam o travamento do portão sob a ação de chuva."
      }
    ],
    aboutTitle: "Proteção Perimetral e Portões Sob Medida no Jardim Campineiro",
    aboutText: "A segurança residencial é a principal preocupação dos moradores do Jardim Campineiro em Campinas. Pensando nisso, a Precisão Metal desenvolve grades de proteção reforçadas para janelas, portas e muros, além de portões de garagem manuais e automáticos em chapa de ferro galvanizado. Com foco em excelente custo-benefício, fabricamos estruturas metálicas duradouras que protegem seu patrimônio a preços acessíveis. Nossos serralheiros locais realizam a instalação de forma limpa e rápida, adaptando a peça perfeitamente às condições da sua alvenaria.",
    testimonial: {
      name: "Patrícia Lima",
      text: "Colocaram um portão social novo e as grades do meu muro no Jardim Campineiro. O serviço foi muito rápido, o acabamento ficou ótimo e o preço coube no meu bolso.",
      type: "Residencial • Jardim Campineiro",
      initials: "PL"
    },
    faqs: [
      {
        q: "Vocês atendem urgências de portão quebrado no Jardim Campineiro?",
        a: "Sim, dependendo da disponibilidade da nossa equipe móvel, atendemos chamados rápidos para conserto de eixos ou soldas soltas no bairro."
      },
      {
        q: "Posso escolher o design do portão em chapa ou tubo?",
        a: "Sim, temos um catálogo com diversos modelos em chapa fechada (para privacidade), tubulares (para ventilação) ou mistos."
      },
      {
        q: "Vocês aceitam PIX para pagamento?",
        a: "Sim, o pagamento por PIX garante um desconto especial no valor total do seu orçamento."
      }
    ]
  },
  {
    slug: "serralheria-no-jardim-miranda-campinas",
    name: "Jardim Miranda",
    preposition: "no",
    title: "Serralheria no Jardim Miranda em Campinas",
    metaDescription: "Serralheria de alto padrão no Jardim Miranda em Campinas. Especialistas em coberturas de policarbonato, mezaninos e portões sob medida. Peça orçamento grátis!",
    heroTitle: "Serralheria no Jardim Miranda em Campinas | Coberturas e Portões",
    heroSubtitle: "Projetos em aço e ferro no Jardim Miranda com qualidade garantida. Fabricamos portões basculantes modernos, mezaninos estruturais e coberturas metálicas sob medida para residências e comércios locais.",
    diferenciais: [
      {
        emoji: "📐",
        title: "Desenhos Detalhados",
        description: "Planejamento prévio das dimensões das estruturas para garantir encaixe perfeito no seu espaço no Jardim Miranda."
      },
      {
        emoji: "🛡️",
        title: "Perfis Galvanizados",
        description: "Uso de materiais com tratamento zinco-ferro que resistem muito mais à oxidação por chuva e umidade natural."
      },
      {
        emoji: "💨",
        title: "Montagem Ágil",
        description: "Processo limpo na instalação local, reduzindo ao máximo o barulho e a poeira na garagem do seu imóvel."
      }
    ],
    aboutTitle: "Coberturas Metálicas e Estruturas sob Medida no Jardim Miranda",
    aboutText: "No Jardim Miranda, bairro em constante desenvolvimento residencial e comercial em Campinas, a Precisão Metal atua na fabricação de coberturas de ferro com fechamento em telha sanduíche ou policarbonato, perfeitas para proteção de vagas de garagem e áreas gourmets. Também produzimos portões basculantes sob medida equipados com fechaduras de segurança e sistemas de contrapesos balanceados, proporcionando facilidade no manuseio diário e prevenindo acidentes mecânicos.",
    testimonial: {
      name: "Arthur Pires",
      text: "Contratei para fazer a estrutura e cobertura metálica da garagem da minha casa no Jardim Miranda. Equipe muito prestativa e caprichosa na pintura de acabamento.",
      type: "Residencial • Jardim Miranda",
      initials: "AP"
    },
    faqs: [
      {
        q: "Qual la melhor telha para cobertura de garagem?",
        a: "A telha termoacústica (sanduíche) é ideal, pois reduz o calor sob a garagem em até 90% e diminui o barulho da chuva nos veículos."
      },
      {
        q: "O motor do portão basculante vem incluso?",
        a: "Podemos incluir o motor elétrico e controles configurados no seu orçamento, entregando o portão 100% automatizado e funcionando."
      },
      {
        q: "Qual o prazo para envio do orçamento no Jardim Miranda?",
        a: "Após a medição técnica no local ou envio das especificações pelo WhatsApp, enviamos o orçamento detalhado em até 24 horas úteis."
      }
    ]
  },
  {
    slug: "serralheria-no-jardim-pacaembu-campinas",
    name: "Jardim Pacaembu",
    preposition: "no",
    title: "Serralheria no Jardim Pacaembu em Campinas",
    metaDescription: "Serralheria no Jardim Pacaembu em Campinas. Fabricamos grades reforçadas para janelas, portões de alumínio/ferro e escadas metálicas. Atendimento rápido e garantia.",
    heroTitle: "Serralheria no Jardim Pacaembu em Campinas | Grades e Proteção",
    heroSubtitle: "Atendimento especializado em serralheria no Jardim Pacaembu. Proteja sua residência com grades tubulares reforçadas para janelas e portas, guarda-corpos e portões automáticos basculantes de alta qualidade.",
    diferenciais: [
      {
        emoji: "🔒",
        title: "Grades de Alta Segurança",
        description: "Grades fabricadas em metalon reforçado com soldas nas quatro extremidades, dificultando arrombamentos no Jardim Pacaembu."
      },
      {
        emoji: "⏱️",
        title: "Compromisso com o Prazo",
        description: "Garantia de entrega no dia estipulado, respeitando o planejamento e o tempo dos nossos clientes no bairro."
      },
      {
        emoji: "🛡️",
        title: "Matéria-Prima Certificada",
        description: "Trabalhamos com marcas de aço renomadas, garantindo perfis retos, uniformes e sem defeitos de laminação."
      }
    ],
    aboutTitle: "Grades de Segurança, Corrimão e Portões no Jardim Pacaembu",
    aboutText: "O Jardim Pacaembu é um bairro residencial consolidado de Campinas, onde a segurança física dos imóveis é fundamental. Na Precisão Metal, fabricamos grades para portas de correr, janelas, sacadas e muros utilizando metalon galvanizado antiferrugem de parede grossa. Nossas peças contam com soldagem de acabamento profissional que não deixa rebarbas nem porosidades, resultando em portões sociais e estruturas muito mais fortes e bonitas, prontas para receber pintura esmalte com excelente fixação.",
    testimonial: {
      name: "Sandra Regina",
      text: "Fiquei muito satisfeita com o atendimento. Instalaram grades sob medida nas janelas do meu apartamento no Jardim Pacaembu. Serviço rápido, equipe educada e limpa.",
      type: "Residencial • Jardim Pacaembu",
      initials: "SR"
    },
    faqs: [
      {
        q: "Qual o melhor modelo de grade para janelas de correr?",
        a: "As grades tubulares fixadas internamente ou externamente na alvenaria com parabolts oferecem a maior resistência e segurança visual."
      },
      {
        q: "Vocês atendem condomínios fechados na região do Jardim Pacaembu?",
        a: "Sim, prestamos serviços para condomínios, fabricando portões eletrônicos de pedestres, grades para áreas comuns e corrimãos de escadas internas."
      },
      {
        q: "Quais as formas de pagamento disponíveis?",
        a: "Parcelamos em até 12x no cartão de crédito, PIX com desconto à vista ou parcelado direto com a empresa (entrada + parcelas conforme o andamento da obra)."
      }
    ]
  },
  {
    slug: "serralheria-no-jardim-santa-monica-campinas",
    name: "Jardim Santa Mônica",
    preposition: "no",
    title: "Serralheria no Jardim Santa Mônica em Campinas",
    metaDescription: "Serralheria no Jardim Santa Mônica em Campinas sob medida. Fabricação de portões rápidos, mezaninos metálicos e consertos de solda urgentes. Ligue e peça orçamento!",
    heroTitle: "Serralheria no Jardim Santa Mônica em Campinas | Estruturas Metálicas",
    heroSubtitle: "Projetos de serralheria inteligentes para otimização de espaços no Jardim Santa Mônica. Fabricamos mezaninos residenciais e comerciais, escadas de ferro resistentes e portões automáticos com durabilidade superior.",
    diferenciais: [
      {
        emoji: "🔨",
        title: "Mão de Obra Qualificada",
        description: "Serralheiros especialistas em soldagem pesada e montagem segura de mezaninos estruturais no Jardim Santa Mônica."
      },
      {
        emoji: "⚡",
        title: "Atendimento no Bairro",
        description: "Visita técnica gratuita e envio de orçamento ágil, sem burocracia, para agilizar a reforma do seu espaço."
      },
      {
        emoji: "📐",
        title: "Aproveitamento de Espaço",
        description: "Criamos projetos geométricos ideais para gerar novas áreas úteis na sua casa ou comércio com segurança."
      }
    ],
    aboutTitle: "Mezaninos de Aço e Estruturas para Otimização de Espaço no Jardim Santa Mônica",
    aboutText: "Muitos imóveis residenciais e galpões no Jardim Santa Mônica necessitam de melhor aproveitamento de espaço vertical. A Precisão Metal atende essa demanda projetando e executando mezaninos metálicos com vigas I e U de alta capacidade, pisos em chapa antiderrapante ou painel wall, e escadas integradas de ferro. Nossas estruturas oferecem a estabilidade física exigida por normas de engenharia, criando novas áreas para escritórios, depósitos ou quartos adicionais de forma rápida e muito mais barata que a construção civil em alvenaria.",
    testimonial: {
      name: "Gustavo Rocha",
      text: "Fizeram um mezanino metálico na minha garagem no Jardim Santa Mônica para eu usar de depósito. Ficou super resistente e me ajudou muito a organizar minhas coisas.",
      type: "Residencial • Jardim Santa Mônica",
      initials: "GR"
    },
    faqs: [
      {
        q: "O mezanino metálico necessita de pilares de sustentação?",
        a: "Geralmente sim. Projetamos pilares discretos nos cantos da parede para distribuir o peso com total segurança sem atrapalhar a circulação de veículos."
      },
      {
        q: "Vocês trabalham com guarda-corpos para mezanino?",
        a: "Sim, fabricamos e instalamos guarda-corpos em aço tubular ou com fechamento em tela metálica, garantindo a proteção contra quedas exigida por lei."
      },
      {
        q: "Como solicitar o cálculo e preço de um mezanino no Jardim Santa Mônica?",
        a: "Entre em contato informando a largura, comprimento e a altura do espaço. Agendaremos uma visita sem compromisso para tirar medidas exatas e enviar a cotação."
      }
    ]
  },
  {
    slug: "serralheria-no-parque-cidade-de-campinas",
    name: "Parque Cidade de Campinas",
    preposition: "no",
    title: "Serralheria no Parque Cidade de Campinas",
    metaDescription: "Serralheria de qualidade no Parque Cidade de Campinas. Portões basculantes residenciais, grades tubulares e serviços rápidos de soldador. Orçamento sem compromisso!",
    heroTitle: "Serralheria no Parque Cidade de Campinas | Portões e Grades de Proteção",
    heroSubtitle: "Aumente a segurança e a elegância da sua casa no Parque Cidade de Campinas. Fabricamos portões basculantes de correr, grades sob medida e corrimãos de escadas com excelentes materiais e ótimo preço.",
    diferenciais: [
      {
        emoji: "🛡️",
        title: "Resistência à Corrosão",
        description: "Peças confeccionadas com aço carbono galvanizado de alto padrão, ideal para exposição contínua ao tempo no Parque Cidade de Campinas."
      },
      {
        emoji: "⚡",
        title: "Abertura Suave",
        description: "Sistemas basculantes perfeitamente balanceados, garantindo que o motor trabalhe livre de sobrecargas mecânicas."
      },
      {
        emoji: "💸",
        title: "Condições Especiais",
        description: "Melhor custo-benefício em serralheria da região, com facilidades no pagamento à vista ou parcelado no cartão."
      }
    ],
    aboutTitle: "Portões Basculantes de Alta Performance e Proteções Metálicas",
    aboutText: "No Parque Cidade de Campinas, a Precisão Metal é la melhor escolha para quem procura um serralheiro de portões experiente. Desenvolvemos portões basculantes sob medida, combinando privacidade (com fechamento em chapa veneziana) e ventilação adequada. Todas as nossas peças recebem tratamento fosfatizante antiferrugem antes de saírem da fábrica, assegurando que o portão não sofra desgaste precoce por exposição a sol e chuva. Nossa instalação é limpa, silenciosa e realizada por equipe técnica própria qualificada.",
    testimonial: {
      name: "Aline Fonseca",
      text: "Fizeram meu portão basculante e o social no Parque Cidade de Campinas. O serviço foi super rápido, entregaram dentro do prazo e os instaladores foram super educados.",
      type: "Residencial • Parque Cidade de Campinas",
      initials: "AF"
    },
    faqs: [
      {
        q: "Vocês vendem apenas o portão ou entregam instalado com motor?",
        a: "Entregamos o portão totalmente instalado e fixado na alvenaria. Se desejar, instalamos o motor automatizador para acionamento por controle remoto."
      },
      {
        q: "Como funciona a garantia do portão?",
        a: "Oferecemos garantia de 5 anos na estrutura de aço (soldas e alinhamento) e garantia de fábrica para o motor automatizador (normalmente de 1 ano)."
      },
      {
        q: "Vocês atendem no Parque Cidade de Campinas aos sábados?",
        a: "Sim, realizamos visitas técnicas e entregas de estruturas aos sábados, conforme agendamento prévio com o cliente."
      }
    ]
  },
  {
    slug: "serralheria-no-parque-fazendinha-campinas",
    name: "Parque Fazendinha",
    preposition: "no",
    title: "Serralheria no Parque Fazendinha em Campinas",
    metaDescription: "Serralheria no Parque Fazendinha em Campinas. Coberturas metálicas para garagem, portões residenciais sob medida e grades de segurança. Peça orçamento grátis!",
    heroTitle: "Serralheria no Parque Fazendinha em Campinas | Coberturas e Serralheria",
    heroSubtitle: "Projetos sob medida em aço para residências no Parque Fazendinha. Desenvolvemos coberturas metálicas para garagens, portões eletrônicos deslizantes e basculantes, grades e escadas com qualidade profissional.",
    diferenciais: [
      {
        emoji: "🚗",
        title: "Coberturas de Garagem",
        description: "Estruturas resistentes projetadas para cobrir vagas de veículos com telhas sanduíche ou policarbonato no Parque Fazendinha."
      },
      {
        emoji: "🔨",
        title: "Acabamento Refinado",
        description: "Lixamento técnico das juntas de solda e aplicação de fundo primer industrial que previne ferrugem e oxidação."
      },
      {
        emoji: "🛡️",
        title: "Suporte Técnico Garantido",
        description: "Garantia por escrito de 5 anos e equipe local pronta para dar assistência rápida no pós-obra sempre que necessário."
      }
    ],
    aboutTitle: "Coberturas de Garagem e Estruturas Metálicas no Parque Fazendinha",
    aboutText: "Os proprietários de residências no Parque Fazendinha em Campinas contam com a Precisão Metal para valorizar suas propriedades com estruturas metálicas robustas. Somos especialistas na fabricação de coberturas de aço galvanizado para garagens, quintais e áreas gourmets, utilizando telhas metálicas simples ou termoacústicas para excelente isolamento de calor. Nossos portões sob medida também são referência de qualidade na região, com motores de abertura rápida e estruturas que garantem a segurança do acesso doméstico.",
    testimonial: {
      name: "Renato Silva",
      text: "Fizeram a cobertura de garagem em estrutura de aço e telha sanduíche na minha residência no Parque Fazendinha. Ficou excelente, reduziu muito o calor do carro e a chuva.",
      type: "Residencial • Parque Fazendinha",
      initials: "RS"
    },
    faqs: [
      {
        q: "Qual a melhor telha para reduzir o barulho da chuva na garagem?",
        a: "A telha termoacústica (telha sanduíche) com recheio de EPS (isopor) ou poliuretano é a melhor, pois amortece o impacto acústico e isola a temperatura."
      },
      {
        q: "Como tirar as medidas para fazer o orçamento?",
        a: "Você pode nos enviar fotos do local e as medidas aproximadas pelo WhatsApp para fazermos uma estimativa. Se aprovar, enviamos o serralheiro para tirar as medidas milimétricas oficiais."
      },
      {
        q: "Qual a durabilidade de um portão de aço galvalume no Parque Fazendinha?",
        a: "Com pintura e manutenção corretas (limpeza periódica dos trilhos), um portão em aço galvalume dura mais de 15 anos sem apresentar pontos de ferrugem."
      }
    ]
  },
  {
    slug: "serralheria-no-jardim-chapadao-campinas",
    name: "Jardim Chapadão",
    preposition: "no",
    title: "Serralheria no Jardim Chapadão em Campinas | Portões e Estruturas",
    metaDescription: "Procurando serralheria no Jardim Chapadão em Campinas? Fabricação de portões automáticos, grades e estruturas metálicas de alta durabilidade. Solicite orçamento!",
    heroTitle: "Serralheria no Jardim Chapadão em Campinas | Alta Qualidade e Segurança",
    heroSubtitle: "Atendimento premium para o Jardim Chapadão e região. Desenvolvemos portões basculantes sob medida, corrimãos, guarda-corpos e estruturas metálicas com soldagem profissional e fino acabamento.",
    diferenciais: [
      {
        emoji: "🛡️",
        title: "Aço Galvanizado Premium",
        description: "Perfis resistentes que oferecem excelente proteção contra intempéries climáticas no Jardim Chapadão."
      },
      {
        emoji: "📐",
        title: "Projetos Exclusivos",
        description: "Adequação estética e geométrica para combinar perfeitamente com a arquitetura do bairro."
      },
      {
        emoji: "⏱️",
        title: "Pontualidade na Entrega",
        description: "Garantia de cumprimento de prazos para evitar atrasos na sua reforma ou construção."
      }
    ],
    aboutTitle: "Serralheria de Alto Padrão no Jardim Chapadão",
    aboutText: "O Jardim Chapadão é uma das áreas residenciais mais tradicionais e valorizadas de Campinas, conhecida por sua infraestrutura arborizada e imóveis de alto padrão. A Precisão Metal atua no Jardim Chapadão fornecendo soluções personalizadas de serralheria fina e estruturas de segurança. Atendemos desde a instalação de portões automáticos rápidos e silenciosos até coberturas metálicas modernas para garagens ou quintais, sempre com foco em acabamento impecável e respeito absoluto ao design do seu imóvel.",
    testimonial: {
      name: "Ricardo Nogueira",
      text: "Serviço de altíssimo nível no Jardim Chapadão. O portão basculante e o corrimão da escada ficaram perfeitos. A equipe de instalação trabalhou de forma rápida e muito limpa.",
      type: "Residencial • Jardim Chapadão",
      initials: "RN"
    },
    faqs: [
      {
        q: "Qual o prazo médio para fabricar um portão no Jardim Chapadão?",
        a: "O prazo de fabricação é de 10 a 15 dias úteis, dependendo da complexidade do projeto. A instalação local é feita em apenas um dia."
      },
      {
        q: "A Precisão Metal faz visitas de orçamento no Jardim Chapadão?",
        a: "Sim! Realizamos visitas técnicas sem custo algum no Jardim Chapadão para medir o vão e apresentar o melhor projeto estrutural."
      },
      {
        q: "As soldas são polidas e tratadas contra ferrugem?",
        a: "Com certeza. Todas as nossas junções passam por lixamento técnico e recebem pintura de fundo primer epóxi antiferrugem."
      }
    ]
  },
  {
    slug: "serralheria-no-jardim-magnolia-campinas",
    name: "Jardim Magnólia",
    preposition: "no",
    title: "Serralheria no Jardim Magnólia em Campinas | Precisão Metal",
    metaDescription: "Serviço de serralheria de confiança no Jardim Magnólia em Campinas. Portões basculantes, grades de proteção e coberturas residenciais com garantia de 5 anos.",
    heroTitle: "Serralheria no Jardim Magnólia em Campinas | Durabilidade e Proteção",
    heroSubtitle: "Soluções completas em ferro e aço galvanizado para o Jardim Magnólia. Fabricamos grades reforçadas, portões eletrônicos e escadas metálicas sob medida com excelente relação custo-benefício.",
    diferenciais: [
      {
        emoji: "🔒",
        title: "Segurança Reforçada",
        description: "Trancas e estruturas com perfis de aço espessos que garantem a proteção da sua residência no Jardim Magnólia."
      },
      {
        emoji: "🎨",
        title: "Pintura Durável",
        description: "Preparação de superfície com fundo fosfatizante que evita bolhas e descascamento na tinta final."
      },
      {
        emoji: "🛠️",
        title: "Instalação Rápida",
        description: "Técnicos preparados para fixar as estruturas metálicas de forma limpa e segura no seu imóvel."
      }
    ],
    aboutTitle: "Serralheria sob Medida e Reformas de Portões no Jardim Magnólia",
    aboutText: "No Jardim Magnólia, a Precisão Metal é a melhor escolha para projetos de metalurgia residencial e comercial. Fabricamos portões basculantes e deslizantes ideais para garagens com espaço reduzido, além de grades de proteção para janelas e sacadas. Nossos serralheiros utilizam exclusivamente materiais galvanizados de alta qualidade, garantindo que as estruturas resistam à oxidação por chuva. Também atendemos pequenos reparos de soldagem com rapidez.",
    testimonial: {
      name: "Mariana Fontes",
      text: "Super recomendo! Fizeram as grades das janelas e a porta social da minha casa no Jardim Magnólia. Preço muito bom e entrega dentro do prazo combinado.",
      type: "Residencial • Jardim Magnólia",
      initials: "MF"
    },
    faqs: [
      {
        q: "Vocês fabricam portas comerciais de aço no Jardim Magnólia?",
        a: "Sim! Fabricamos portas de enrolar manuais e automáticas para comércios no Jardim Magnólia e arredores."
      },
      {
        q: "Quais as opções de pagamento?",
        a: "Parcelamos em até 12 vezes no cartão de crédito ou oferecemos desconto especial para pagamentos à vista via PIX."
      },
      {
        q: "Os portões residenciais têm garantia?",
        a: "Sim, oferecemos 5 anos de garantia estrutural por escrito em todas as peças que fabricamos."
      }
    ]
  },
  {
    slug: "serralheria-no-parque-das-universidades-campinas",
    name: "Parque das Universidades",
    preposition: "no",
    title: "Serralheria no Parque das Universidades em Campinas | Coberturas e Grades",
    metaDescription: "Serralheria no Parque das Universidades em Campinas. Estruturas metálicas, portões rápidos e guarda-corpos sob medida para residências e repúblicas. Peça orçamento!",
    heroTitle: "Serralheria no Parque das Universidades em Campinas | Projetos sob Medida",
    heroSubtitle: "Fabricação própria de estruturas metálicas, mezaninos e grades de proteção para o Parque das Universidades. Atendimento técnico qualificado e soldagem de alto desempenho.",
    diferenciais: [
      {
        emoji: "🏗️",
        title: "Mezaninos e Coberturas",
        description: "Otimização máxima de espaço físico com estruturas calculadas por profissionais experientes."
      },
      {
        emoji: "⚡",
        title: "Atendimento Local Ágil",
        description: "Atendimento prioritário na região das universidades para vistorias e orçamentos rápidos."
      },
      {
        emoji: "🛡️",
        title: "Garantia de 5 anos",
        description: "Compromisso total com a estabilidade e a qualidade dos nossos materiais e acabamentos."
      }
    ],
    aboutTitle: "Soluções em Serralheria e Estruturas Metálicas no Parque das Universidades",
    aboutText: "O Parque das Universidades é uma região dinâmica em Campinas, abrigando estudantes, repúblicas e famílias em constante expansão. A Precisão Metal atende ao bairro fornecendo projetos robustos como coberturas metálicas para estacionamentos, mezaninos industriais e residenciais, guarda-corpos em conformidade com as normas de segurança e portões automatizados de rápida abertura. Nosso foco é entregar durabilidade mecânica e estabilidade física às peças metálicas instaladas.",
    testimonial: {
      name: "Gustavo Ferreira",
      text: "Precisávamos de um mezanino metálico para depósito em nossa república no Parque das Universidades. A estrutura ficou muito firme e foi feita em tempo recorde.",
      type: "Comercial/Residencial • Parque das Universidades",
      initials: "GF"
    },
    faqs: [
      {
        q: "Vocês instalam corrimão de acessibilidade no Parque das Universidades?",
        a: "Sim, fabricamos e instalamos corrimãos e rampas em aço tubular atendendo às normas de acessibilidade vigentes."
      },
      {
        q: "Qual o prazo para conserto de portão de garagem no bairro?",
        a: "Para reparos e soldas emergenciais de portões danificados, enviamos uma equipe de manutenção técnica no mesmo dia."
      },
      {
        q: "As coberturas de garagem usam qual material?",
        a: "Usamos estruturas de aço carbono associadas a telhas termoacústicas (sanduíche) ou fechamentos em policarbonato de alta resistência."
      }
    ]
  },
  {
    slug: "serralheria-na-vila-olimpia-campinas",
    name: "Vila Olímpia",
    preposition: "na",
    title: "Serralheria na Vila Olímpia em Campinas | Portões e Grades sob Medida",
    metaDescription: "Procurando serralheiro na Vila Olímpia em Campinas? Fabricamos portões basculantes rápidos, grades de proteção e corrimãos de alta durabilidade. Orçamento gratuito!",
    heroTitle: "Serralheria na Vila Olímpia em Campinas | Segurança e Robustez Metálica",
    heroSubtitle: "Desenvolvemos soluções sob medida em ferro e aço galvalume na Vila Olímpia. Portões residenciais automáticos, estruturas metálicas e grades de proteção com garantia predial.",
    diferenciais: [
      {
        emoji: "🔒",
        title: "Segurança Perimetral",
        description: "Grades e portões robustos projetados para elevar consideravelmente a segurança do seu patrimônio."
      },
      {
        emoji: "⚙️",
        title: "Ferragens Premium",
        description: "Utilizamos dobradiças, fechaduras e roldanas zincadas de marcas de primeira linha nacional."
      },
      {
        emoji: "🎨",
        title: "Preparação Química",
        description: "Banho fosfatizante que evita o surgimento precoce de pontos de ferrugem por umidade."
      }
    ],
    aboutTitle: "Serralheria e Estruturas Metálicas sob Medida na Vila Olímpia",
    aboutText: "A Vila Olímpia em Campinas exige projetos de serralheria que unam excelente resistência física a um design estético agradável. A Precisão Metal se orgulha de atender ao bairro fabricando grades tubulares para muros e janelas, portões de garagem basculantes e portas sociais com fechaduras elétricas integradas. Nosso processo produtivo garante peças livres de rebarbas, soldas perfeitamente lisas e um acabamento que valoriza a entrada da sua casa ou condomínio.",
    testimonial: {
      name: "Beatriz Mendes",
      text: "Fizeram o portão da minha garagem e as grades dos muros na Vila Olímpia. O trabalho ficou excelente e a equipe foi muito pontual e organizada na montagem.",
      type: "Residencial • Vila Olímpia",
      initials: "BM"
    },
    faqs: [
      {
        q: "Vocês atendem chamados de solda na Vila Olímpia?",
        a: "Sim, nossa equipe atende chamados para pequenos consertos de solda e reparos em portões na Vila Olímpia."
      },
      {
        q: "A Precisão Metal faz o orçamento no local?",
        a: "Sim, enviamos um técnico gratuitamente na Vila Olímpia para fazer a medição exata do vão e planejar o melhor projeto."
      },
      {
        q: "Qual a vida útil média de um portão de aço galvanizado?",
        a: "Com manutenção básica e pintura correta, um portão galvanizado pode durar mais de 15 anos sem sofrer corrosão estrutural."
      }
    ]
  },
  {
    slug: "serralheria-na-vila-sao-bento-campinas",
    name: "Vila São Bento",
    preposition: "na",
    title: "Serralheria na Vila São Bento em Campinas | Grades e Portões",
    metaDescription: "Serralheria na Vila São Bento em Campinas. Especialistas em portões basculantes de correr, grades de ferro e estruturas metálicas residenciais. Solicite orçamento!",
    heroTitle: "Serralheria na Vila São Bento em Campinas | Tradição em Metalurgia",
    heroSubtitle: "Fabricamos portões automáticos silenciosos, grades tubulares resistentes e mezaninos de aço para a Vila São Bento. Mão de obra qualificada e ótimas condições de pagamento.",
    diferenciais: [
      {
        emoji: "🛡️",
        title: "Durabilidade do Aço",
        description: "Trabalhamos com ligas metálicas resistentes e de espessura adequada para suportar impactos."
      },
      {
        emoji: "⏱️",
        title: "Entrega no Prazo",
        description: "Cronograma de fabricação rigorosamente cumprido para respeitar o tempo da sua obra na Vila São Bento."
      },
      {
        emoji: "💰",
        title: "Custo-Benefício",
        description: "Excelente preço direto da fábrica, sem intermediários, com parcelamento facilitado no cartão."
      }
    ],
    aboutTitle: "Serralheria Residencial e Comercial de Confiança na Vila São Bento",
    aboutText: "Para quem reside ou mantém comércio na Vila São Bento, em Campinas, a Precisão Metal é parceira ideal para melhorias de infraestrutura metálica. Fabricamos escadas caracol ou retas sob medida para aproveitamento de espaços internos, coberturas de garagem leves e portões automáticos basculantes com balanceamento por contrapeso. Nossas peças contam com soldas reforçadas de alto padrão, resultando em estruturas que garantem a segurança do seu imóvel.",
    testimonial: {
      name: "Cláudio Dias",
      text: "Excelente trabalho na Vila São Bento. Fizeram a escada caracol e o portão basculante da minha oficina. A estrutura ficou muito firme e o atendimento foi nota 10.",
      type: "Residencial • Vila São Bento",
      initials: "CD"
    },
    faqs: [
      {
        q: "Vocês fazem escadas metálicas sob medida na Vila São Bento?",
        a: "Sim! Fabricamos escadas caracol, retas com viga central e escadas de marinheiro personalizadas para o seu espaço."
      },
      {
        q: "Como solicitar uma medição técnica na Vila São Bento?",
        a: "Basta entrar em contato pelo nosso WhatsApp. Agendamos a visita técnica gratuita para o dia e horário que forem melhores para você."
      },
      {
        q: "É possível automatizar um portão de correr antigo?",
        a: "Sim, realizamos reformas estruturais e preparamos portões antigos para receber motor eletrônico moderno e seguro."
      }
    ]
  },
  {
    slug: "serralheria-na-vila-san-martin-campinas",
    name: "Vila San Martin",
    preposition: "na",
    title: "Serralheria na Vila San Martin em Campinas | Portões e Estruturas",
    metaDescription: "Serralheria na Vila San Martin em Campinas. Coberturas metálicas para garagem, grades reforçadas e portões automáticos basculantes com garantia. Peça orçamento grátis!",
    heroTitle: "Serralheria na Vila San Martin em Campinas | Segurança e Durabilidade",
    heroSubtitle: "Projetos de serralheria de ferro e aço galvanizado sob medida na Vila San Martin. Fabricamos grades, portões basculantes de correr e corrimãos residenciais de fino acabamento.",
    diferenciais: [
      {
        emoji: "🔒",
        title: "Segurança Familiar",
        description: "Projetos estruturais focados em dificultar invasões perimetrais e proteger sua garagem na Vila San Martin."
      },
      {
        emoji: "🛠️",
        title: "Mão de Obra Certificada",
        description: "Nossa equipe é especializada em solda profissional MIG, garantindo alta fixação mecânica."
      },
      {
        emoji: "🎨",
        title: "Tratamento Fosfatizante",
        description: "Aplicação de primer antiferrugem em todas as superfícies antes do envio para montagem final."
      }
    ],
    aboutTitle: "Qualidade em Metalurgia e Instalação de Portões na Vila San Martin",
    aboutText: "A Vila San Martin é um bairro residencial que se expande constantemente em Campinas. Na Precisão Metal, fornecemos soluções sob medida como grades de segurança para portas e janelas, caixilharia de ferro, e portões basculantes com sistemas de contrapesos balanceados, que protegem e valorizam as residências locais. Nossa equipe realiza montagens limpas e silenciosas no local da obra, minimizando transtornos aos moradores.",
    testimonial: {
      name: "Juliana Martins",
      text: "Contratei para fabricar o portão basculante e as grades da minha residência na Vila San Martin. O serviço foi impecável, entrega rápida e ótimo atendimento.",
      type: "Residencial • Vila San Martin",
      initials: "JM"
    },
    faqs: [
      {
        q: "Qual o preço do metro quadrado de grade na Vila San Martin?",
        a: "O valor varia de acordo com o design (tubular, chapa ou ferro maciço). Solicite um orçamento rápido no WhatsApp para receber o cálculo detalhado."
      },
      {
        q: "Vocês instalam o motor no portão basculante?",
        a: "Sim! Entregamos o portão instalado e com o motor de alta velocidade configurado e pronto para o uso com controle remoto."
      },
      {
        q: "A visita técnica de medição na Vila San Martin tem custo?",
        a: "Não, realizamos la visita técnica para tirar medidas e fazer o orçamento de forma totalmente gratuita."
      }
    ]
  },
  {
    slug: "serralheria-no-bananal-campinas",
    name: "Bananal",
    preposition: "no",
    title: "Serralheria no Bananal em Campinas | Grades, Portões e Estruturas",
    metaDescription: "Precisa de serralheiro no Bananal em Campinas? Fabricação de portões basculantes, grades de proteção e coberturas residenciais com aço galvanizado. Orçamento rápido!",
    heroTitle: "Serralheria no Bananal em Campinas | Estruturas de Aço Galvanizado",
    heroSubtitle: "Soluções em serralheria robusta para a região do Bananal. Projetamos portões residenciais, corrimãos e coberturas metálicas com alta durabilidade e tratamento anticorrosão.",
    diferenciais: [
      {
        emoji: "🛡️",
        title: "Proteção Anticorrosiva",
        description: "Aço com banho de zinco que resiste muito mais às condições do tempo e umidade na região do Bananal."
      },
      {
        emoji: "📐",
        title: "Medição Técnica Local",
        description: "Deslocamento rápido para vistoria e elaboração de orçamento sem custos no bairro."
      },
      {
        emoji: "💼",
        title: "Nota Fiscal e Garantia",
        description: "Nota fiscal de serviços e termo de garantia estrutural de 5 anos assinado por escrito."
      }
    ],
    aboutTitle: "Serralheria e Estruturas Metálicas para Chácaras e Casas no Bananal",
    aboutText: "A região do Bananal em Campinas mescla características urbanas e rurais, exigindo estruturas metálicas e portões de segurança de altíssima durabilidade. A Precisão Metal atua na fabricação de grades de ferro maciço, coberturas para áreas externas, mezaninos estruturais e portões eletrônicos deslizantes ou basculantes. Nossos projetos são dimensionados para resistir ao tempo e à exposição direta ao sol e chuva, oferecendo excelente segurança perimetral.",
    testimonial: {
      name: "Antônio Prado",
      text: "Fizeram o portão deslizante de entrada e as grades da minha propriedade na região do Bananal. Trabalho forte, soldas perfeitas e atendimento excelente.",
      type: "Residencial/Chácara • Bananal",
      initials: "AP"
    },
    faqs: [
      {
        q: "Vocês fazem grades para chácaras no Bananal?",
        a: "Sim, fabricamos grades robustas sob medida e portões de grandes dimensões ideais para chácaras e propriedades rurais."
      },
      {
        q: "Como funciona o cronograma de instalação no Bananal?",
        a: "O portão é fabricado em nossa oficina e montado no local em apenas um dia para evitar transtornos no acesso à sua garagem."
      },
      {
        q: "Os motores dos portões são rápidos?",
        a: "Sim! Trabalhamos com automatizadores rápidos que abrem ou fecham o portão em cerca de 4 segundos."
      }
    ]
  },
  {
    slug: "serralheria-na-chacara-da-barra-campinas",
    name: "Chácara da Barra",
    preposition: "na",
    title: "Serralheria na Chácara da Barra em Campinas | Precisão Metal",
    metaDescription: "Serralheria na Chácara da Barra em Campinas de alto padrão. Portões basculantes rápidos, corrimãos e mezaninos metálicos com acabamento premium. Peça orçamento!",
    heroTitle: "Serralheria na Chácara da Barra em Campinas | Design e Segurança",
    heroSubtitle: "Peças de serralheria fina que agregam valor e sofisticação ao seu imóvel na Chácara da Barra. Projetos sob medida em aço galvanizado com lixamento minucioso.",
    diferenciais: [
      {
        emoji: "⚜️",
        title: "Design Customizado",
        description: "Execução de projetos arquitetônicos sob medida que complementam o estilo moderno da Chácara da Barra."
      },
      {
        emoji: "✨",
        title: "Soldas Invisíveis",
        description: "Tratamento técnico das juntas que garante superfície lisa para uma pintura perfeita sem imperfeições."
      },
      {
        emoji: "🔒",
        title: "Dispositivos de Tranca",
        description: "Uso de fechaduras reforçadas e travas magnéticas para maior segurança do acesso residencial."
      }
    ],
    aboutTitle: "Serralheria Fina e Projetos Customizados na Chácara da Barra",
    aboutText: "A Chácara da Barra é um bairro nobre e muito valorizado em Campinas, unindo clínicas de alto padrão, escritórios e belas residências. A Precisão Metal atende a essa região desenvolvendo corrimãos residenciais modernos, guarda-corpos minimalistas em aço, portões basculantes rápidos de chapa fechada e estruturas para fachadas comerciais. Nosso diferencial é a atenção milimétrica aos detalhes, garantindo a satisfação de clientes altamente exigentes.",
    testimonial: {
      name: "Renata Viana",
      text: "Fiquei encantada com o guarda-corpo de aço e vidro que instalaram na minha casa na Chácara da Barra. Acabamento perfeito e profissionais super atenciosos.",
      type: "Residencial • Chácara da Barra",
      initials: "RV"
    },
    faqs: [
      {
        q: "Vocês atendem clínicas médicas na Chácara da Barra?",
        a: "Sim! Projetamos e instalamos corrimãos de acessibilidade e rampas de metal totalmente adequados às normas NBR 9050 para clínicas."
      },
      {
        q: "Qual tipo de pintura é utilizada nos portões?",
        a: "Utilizamos fundo primer epóxi e tinta esmalte sintético automotivo de alta resistência contra raios solares e umidade."
      },
      {
        q: "É possível orçar o projeto por desenho técnico?",
        a: "Com certeza. Você pode nos enviar o projeto técnico por WhatsApp para analisarmos as medidas e enviarmos a cotação detalhada."
      }
    ]
  },
  {
    slug: "serralheria-na-chacara-primavera-campinas",
    name: "Chácara Primavera",
    preposition: "na",
    title: "Serralheria na Chácara Primavera em Campinas | Portões e Grades",
    metaDescription: "Serralheria de confiança na Chácara Primavera em Campinas. Fabricação de portões rápidos, grades reforçadas e coberturas de garagem. Solicite seu orçamento!",
    heroTitle: "Serralheria na Chácara Primavera em Campinas | Tecnologia e Design",
    heroSubtitle: "Projetos de serralheria moderna para residências e condomínios na Chácara Primavera. Portões basculantes silenciosos e grades com aço galvalume antiferrugem.",
    diferenciais: [
      {
        emoji: "⚡",
        title: "Portões Automáticos Rápidos",
        description: "Preparamos as estruturas com motores rápidos de até 4 segundos para acesso seguro na garagem."
      },
      {
        emoji: "🛡️",
        title: "Perfis Galvalume",
        description: "Ligas de aço, alumínio e zinco que aumentam consideravelmente a resistência mecânica e evitam oxidação."
      },
      {
        emoji: "📐",
        title: "Projetos Integrados",
        description: "Modelagem das peças de metal em harmonia com o estilo arquitetônico dos condomínios do bairro."
      }
    ],
    aboutTitle: "Serralheria Residencial de Alto Padrão na Chácara Primavera",
    aboutText: "A Chácara Primavera é um bairro que se destaca em Campinas pela presença de condomínios modernos e excelente qualidade de vida. Nossos serviços na Chácara Primavera focam na modernização e segurança residencial. Produzimos portões basculantes silenciosos, grades de fechamento elegantes, corrimãos e escadas de ferro sob medida. Aliamos a robustez mecânica do aço a um acabamento estético refinado que valoriza as fachadas dos imóveis locais.",
    testimonial: {
      name: "Felipe Silveira",
      text: "Excelente portão basculante instalado na minha casa na Chácara Primavera. O motor abre super rápido e a estrutura ficou muito bonita e silenciosa.",
      type: "Residencial • Chácara Primavera",
      initials: "FS"
    },
    faqs: [
      {
        q: "Os portões residenciais saem com preparação para motor?",
        a: "Sim! Todos os nossos portões basculantes saem com a estrutura de contrapeso balanceada e prontos para receber motor."
      },
      {
        q: "Vocês cobram taxa de visita na Chácara Primavera?",
        a: "Não, a medição no local e o envio do orçamento são oferecidos de forma totalmente gratuita."
      },
      {
        q: "As escadas metálicas têm garantia?",
        a: "Sim, oferecemos 5 anos de garantia na integridade estrutural e de soldagem de todas as escadas e mezaninos."
      }
    ]
  },
  {
    slug: "serralheria-no-gramado-campinas",
    name: "Gramado",
    preposition: "no",
    title: "Serralheria no Gramado em Campinas | Projetos de Alto Padrão",
    metaDescription: "Serralheria de luxo no bairro Gramado, Campinas. Portões sob medida, guarda-corpos elegantes e estruturas metálicas finas. Acabamento impecável e garantia.",
    heroTitle: "Serralheria no Gramado em Campinas | Sofisticação e Segurança",
    heroSubtitle: "Desenvolvemos projetos de metalurgia de alto padrão para residências e condomínios no Gramado. Serralheria fina, corrimãos minimalistas e portões robustos.",
    diferenciais: [
      {
        emoji: "⚜️",
        title: "Serralheria Artística",
        description: "Design elaborado e alinhamento milimétrico com projetos de arquitetura de alto luxo no Gramado."
      },
      {
        emoji: "✨",
        title: "Acabamento Sem Emendas",
        description: "Lixamento cuidadoso de todas as conexões e soldas, criando superfícies lisas e perfeitas."
      },
      {
        emoji: "🛡️",
        title: "Garantia Predial",
        description: "Tratamento anticorrosivo de alto nível e garantia de 5 anos em toda a linha de estruturas fabricadas."
      }
    ],
    aboutTitle: "Serralheria Premium para Residências de Luxo no Bairro Gramado",
    aboutText: "O Gramado é um dos bairros mais exclusivos de Campinas, caracterizado por condomínios fechados de altíssimo padrão e chácaras residenciais suntuosas. A Precisão Metal atende ao Gramado oferecendo serralheria premium sob medida, como portas sociais monumentais, guarda-corpos elegantes em aço e vidro, corrimãos com fixações embutidas e portões basculantes rápidos e silenciosos. Garantimos total privacidade e segurança, aliando a solidez estrutural do metal a um acabamento fino impecável.",
    testimonial: {
      name: "Cláudia Vasconcellos",
      text: "A Precisão Metal executou o corrimão e o guarda-corpo da nossa residência no Gramado. O acabamento ficou deslumbrante, de altíssimo padrão arquitetônico.",
      type: "Residencial • Gramado",
      initials: "CV"
    },
    faqs: [
      {
        q: "Vocês executam projetos desenhados por arquitetos no Gramado?",
        a: "Sim! Somos especialistas em transformar desenhos técnicos de escritórios de arquitetura em estruturas metálicas de alta precisão."
      },
      {
        q: "Quais materiais de alta durabilidade vocês recomendam?",
        a: "Recomendamos perfis de aço galvalume com tratamento primer anticorrosivo e finalização com pintura eletrostática ou automotiva."
      },
      {
        q: "Como funciona o atendimento agendado no Gramado?",
        a: "Alinhamos as visitas técnicas e a montagem das peças metálicas de acordo com as normas de horários e barulho do seu condomínio."
      }
    ]
  },
  {
    slug: "serralheria-no-jardim-bela-vista-campinas",
    name: "Jardim Bela Vista",
    preposition: "no",
    title: "Serralheria no Jardim Bela Vista em Campinas | Portões e Grades",
    metaDescription: "Serralheria no Jardim Bela Vista em Campinas. Fabricação de portões basculantes automatizados, grades e corrimãos residenciais. Peça orçamento rápido!",
    heroTitle: "Serralheria no Jardim Bela Vista em Campinas | Proteção e Design",
    heroSubtitle: "Soluções inteligentes em ferro e aço galvanizado para o Jardim Bela Vista. Portões basculantes sob medida, grades tubulares e soldagem profissional.",
    diferenciais: [
      {
        emoji: "🛡️",
        title: "Perfis de Aço Galvanizado",
        description: "Materiais resistentes à ação climática de chuva e sol no Jardim Bela Vista."
      },
      {
        emoji: "⚡",
        title: "Medição Local Express",
        description: "Visita técnica de orçamento ágil e sem custo diretamente na sua casa ou comércio."
      },
      {
        emoji: "⚙️",
        title: "Componentes de Elite",
        description: "Dobradiças e roldanas de primeira linha que impedem ruídos e travamentos do portão."
      }
    ],
    aboutTitle: "Serralheria sob Medida e Coberturas de Garagem no Jardim Bela Vista",
    aboutText: "No Jardim Bela Vista, tradicional bairro de Campinas, os moradores contam com a Precisão Metal para renovar e reforçar a segurança física de seus imóveis. Fabricamos portões basculantes automatizados com motores de fechamento rápido, grades de segurança reforçadas para muros e janelas, e coberturas leves com telha termoacústica para garagens. Nossos serviços prezam pelo alinhamento técnico milimétrico e por montagens sem bagunça, deixando o local de obra limpo e finalizado.",
    testimonial: {
      name: "Sandra Abreu",
      text: "Coloquei um portão basculante e novas grades na varanda no Jardim Bela Vista. O acabamento ficou perfeito e o atendimento foi excelente.",
      type: "Residencial • Jardim Bela Vista",
      initials: "SA"
    },
    faqs: [
      {
        q: "Quanto tempo dura a instalação de um portão no local?",
        a: "A montagem estrutural e os testes do motor são executados em apenas um dia pela nossa equipe técnica."
      },
      {
        q: "A Precisão Metal aceita parcelamento no cartão de crédito?",
        a: "Sim, parcelamos todos os nossos serviços em até 12 vezes no cartão de crédito de sua preferência."
      },
      {
        q: "Os portões são fabricados em aço galvanizado?",
        a: "Sim! Todos os nossos portões usam tubos e perfis galvanizados de alta qualidade para proteção contra ferrugem."
      }
    ]
  },
  {
    slug: "serralheria-no-jardim-guanabara-campinas",
    name: "Jardim Guanabara",
    preposition: "no",
    title: "Serralheria no Jardim Guanabara em Campinas | Precisão Metal",
    metaDescription: "Serralheria no Jardim Guanabara em Campinas sob medida. Fabricação de portões automáticos, grades tubulares e mezaninos comerciais de aço. Ligue já!",
    heroTitle: "Serralheria no Jardim Guanabara em Campinas | Estruturas e Portões",
    heroSubtitle: "Soluções em serralheria residencial e comercial de alta durabilidade para o Jardim Guanabara. Portões rápidos basculantes e corrimãos de acessibilidade.",
    diferenciais: [
      {
        emoji: "🔒",
        title: "Segurança Reforçada",
        description: "Estruturas metálicas pesadas projetadas com soldas MIG para resistir a arrombamentos."
      },
      {
        emoji: "📐",
        title: "Projetos sob Medida",
        description: "Adequação geométrica total de escadas, mezaninos e grades para as necessidades do seu espaço."
      },
      {
        emoji: "⏱️",
        title: "Pontualidade Absoluta",
        description: "Compromisso total de entrega do seu projeto no dia combinado na sua obra."
      }
    ],
    aboutTitle: "Serralheria e Estruturas sob Medida no Jardim Guanabara",
    aboutText: "O Jardim Guanabara em Campinas possui grande densidade de clínicas médicas, comércios e residências consolidadas. A Precisão Metal atua na região fabricando rampas de acessibilidade em aço, corrimãos regulamentados, grades de segurança pantográficas ou tubulares, além de portões eletrônicos rápidos. Nossos serralheiros estão preparados para instalar as estruturas metálicas de forma limpa, segura e de acordo com as especificações exigidas por lei."
    ,
    testimonial: {
      name: "Jorge Albuquerque",
      text: "Fizeram o mezanino metálico de armazenamento e os corrimãos do meu escritório no Jardim Guanabara. Excelente acabamento de solda e montagem rápida.",
      type: "Comercial • Jardim Guanabara",
      initials: "JA"
    },
    faqs: [
      {
        q: "Vocês fazem rampas metálicas de acessibilidade sob a norma NBR 9050?",
        a: "Sim, projetamos e executamos corrimãos e rampas em aço tubular respeitando todas as especificações sanitárias e de acessibilidade."
      },
      {
        q: "Como solicitar orçamento para o Jardim Guanabara?",
        a: "Você pode nos enviar fotos do local e medidas aproximadas pelo WhatsApp para receber uma estimativa ágil de preço."
      },
      {
        q: "Quais metais vocês usam na fabricação?",
        a: "Trabalhamos com aço carbono galvanizado, tubos industriais reforçados e chapas de alta resistência mecânica."
      }
    ]
  },
  {
    slug: "serralheria-no-jardim-madalena-campinas",
    name: "Jardim Madalena",
    preposition: "no",
    title: "Serralheria no Jardim Madalena em Campinas | Fina e Premium",
    metaDescription: "Serralheria de alto padrão no Jardim Madalena, Campinas. Portões sob medida, guarda-corpos modernos e fachadas comerciais metálicas. Orçamento gratuito!",
    heroTitle: "Serralheria no Jardim Madalena em Campinas | Design Contemporâneo",
    heroSubtitle: "Desenvolvemos projetos de serralheria premium, coberturas metálicas leves e guarda-corpos arquitetônicos no Jardim Madalena. Fino acabamento e garantia.",
    diferenciais: [
      {
        emoji: "⚜️",
        title: "Projetos Arquitetônicos",
        description: "Foco em design fino, soldas imperceptíveis e total alinhamento com tendências contemporâneas no Jardim Madalena."
      },
      {
        emoji: "✨",
        title: "Pintura Especializada",
        description: "Processo químico que prepara o metal para receber pintura esmalte com acabamento automotivo liso."
      },
      {
        emoji: "🔒",
        title: "Segurança e Robustez",
        description: "Aço de primeira linha com parede grossa que garante portas e portões altamente resistentes e duráveis."
      }
    ],
    aboutTitle: "Serralheria Premium para Residências e Lojas no Jardim Madalena",
    aboutText: "O Jardim Madalena é um bairro nobre e sofisticado de Campinas, conhecido por abrigar shopping centers de luxo e condomínios de alto padrão. Para atender esse nível de exigência, a Precisão Metal desenvolve produtos de serralheria de acabamento superior. Criamos guarda-corpos minimalistas, corrimãos com fixação embutida, coberturas de policarbonato para áreas gourmets e portões eletrônicos de fechamento rápido, valorizando o design do seu imóvel no Jardim Madalena.",
    testimonial: {
      name: "Patrícia Valente",
      text: "Encomendei o portão basculante e o guarda-corpo da varanda da minha casa no Jardim Madalena. A estrutura ficou espetacular, muito firme e com acabamento impecável.",
      type: "Residencial • Jardim Madalena",
      initials: "PV"
    },
    faqs: [
      {
        q: "A Precisão Metal trabalha em conjunto com arquitetos no Jardim Madalena?",
        a: "Sim! Executamos projetos complexos baseados em desenhos técnicos e especificações detalhadas de escritórios de arquitetura."
      },
      {
        q: "As coberturas de garagem usam quais fechamentos?",
        a: "Podemos fechar com telhas termoacústicas (sanduíche) para conforto térmico ou policarbonato alveolar para luminosidade."
      },
      {
        q: "Qual o prazo de entrega no Jardim Madalena?",
        a: "O prazo de fabricação é de 10 a 15 dias úteis, e a montagem no local leva um dia útil."
      }
    ]
  },
  {
    slug: "serralheria-no-jardim-itamarati-campinas",
    name: "Jardim Itamarati",
    preposition: "no",
    title: "Serralheria no Jardim Itamarati em Campinas | Grades e Portões",
    metaDescription: "Serralheria no Jardim Itamarati em Campinas sob medida. Fabricamos grades de proteção reforçadas, portões basculantes e realizamos soldagem rápida. Ligue já!",
    heroTitle: "Serralheria no Jardim Itamarati em Campinas | Segurança Residencial",
    heroSubtitle: "Leve mais tranquilidade e proteção para a sua família no Jardim Itamarati. Portões basculantes automatizados, grades e corrimãos com aço galvanizado.",
    diferenciais: [
      {
        emoji: "🔒",
        title: "Proteção Ativa",
        description: "Fabricação de grades pesadas em ferro tubular para janelas e portas de entrada no Jardim Itamarati."
      },
      {
        emoji: "💸",
        title: "Economia e Facilidade",
        description: "Preço justo direto da fábrica, com facilidades no parcelamento do cartão e desconto à vista."
      },
      {
        emoji: "🛠️",
        title: "Instalação sem Sujeira",
        description: "Nossos técnicos realizam cortes e soldas de forma limpa e recolhem os resíduos após o serviço."
      }
    ],
    aboutTitle: "Serralheria sob Medida e Proteções Metálicas no Jardim Itamarati",
    aboutText: "No Jardim Itamarati, bairro residencial em Campinas, a Precisão Metal é referência em segurança patrimonial. Especializamo-nos na fabricação de grades de proteção em metalon reforçado e portões basculantes automáticos. Nossos projetos são dimensionados individualmente para as condições de alvenaria do seu imóvel, garantindo que as trancas, dobradiças e motores funcionem perfeitamente por longos anos, livres de oxidação e ruídos mecânicos desagradáveis.",
    testimonial: {
      name: "Edivaldo Costa",
      text: "Fizeram o portão da minha casa no Jardim Itamarati. Excelente serviço, entrega rápida e equipe muito caprichosa no acabamento da pintura.",
      type: "Residencial • Jardim Itamarati",
      initials: "EC"
    },
    faqs: [
      {
        q: "A Precisão Metal faz reparos urgentes de solda no Jardim Itamarati?",
        a: "Sim! Se você teve problemas com fechaduras quebradas ou dobradiças soltas, enviamos um técnico para soldagem rápida no bairro."
      },
      {
        q: "Qual o material mais recomendado para as grades?",
        a: "Utilizamos perfis e tubos de aço galvanizado, que recebem proteção contra ferrugem e duram mais de 10 anos expostos à chuva."
      },
      {
        q: "Qual o prazo para receber o orçamento?",
        a: "Após enviar as medidas e fotos no WhatsApp ou após a nossa visita gratuita, enviamos o orçamento em até 24 horas úteis."
      }
    ]
  },
  {
    slug: "serralheria-na-vila-santa-isabel-campinas",
    name: "Vila Santa Isabel",
    preposition: "na",
    title: "Serralheria na Vila Santa Isabel em Campinas | Portões e Grades",
    metaDescription: "Procurando serralheria na Vila Santa Isabel em Campinas? Portões automáticos basculantes, grades e coberturas metálicas com garantia por escrito. Ligue já!",
    heroTitle: "Serralheria na Vila Santa Isabel em Campinas | Proteção e Qualidade",
    heroSubtitle: "Soluções em metalurgia de alta durabilidade na Vila Santa Isabel. Projetamos grades protetoras, portões basculantes de correr e escadas metálicas sob medida.",
    diferenciais: [
      {
        emoji: "🛡️",
        title: "Aço com Proteção de Zinco",
        description: "Garantia contra ferrugem precoce em toda a estrutura do seu portão na Vila Santa Isabel."
      },
      {
        emoji: "⚡",
        title: "Acionamento Rápido",
        description: "Estruturas preparadas para motores elétricos ultrarrápidos de até 4 segundos de abertura."
      },
      {
        emoji: "📝",
        title: "Garantia Contratual",
        description: "Garantia de 5 anos na estabilidade estrutural e na integridade de todas as soldas executadas."
      }
    ],
    aboutTitle: "Serralheria e Estruturas Metálicas Customizadas na Vila Santa Isabel",
    aboutText: "A Vila Santa Isabel em Campinas abriga moradores e comércios que buscam soluções eficientes em serralheria tradicional. Nós da Precisão Metal fornecemos serviços especializados como troca de cabos de aço e roldanas, fabricação de portões basculantes e deslizantes sob medida, escadas caracol de ferro e grades tubulares para fechamentos residenciais. Nossos serralheiros trabalham com materiais de espessura adequada para garantir rigidez estrutural, durabilidade e tranquilidade para sua família.",
    testimonial: {
      name: "Aparecida Souza",
      text: "Fizeram o portão social e as grades das janelas do meu apartamento na Vila Santa Isabel. O serviço foi muito limpo, o preço foi ótimo e o atendimento excelente.",
      type: "Residencial • Vila Santa Isabel",
      initials: "AS"
    },
    faqs: [
      {
        q: "Vocês atendem chamados de soldador na Vila Santa Isabel?",
        a: "Sim! Oferecemos serviços rápidos de soldagem e manutenção em portões metálicos na Vila Santa Isabel."
      },
      {
        q: "Como funciona a forma de pagamento facilitada?",
        a: "Você pode pagar em até 12x no cartão ou com desconto no pagamento via PIX."
      },
      {
        q: "A Precisão Metal realiza visita técnica de orçamento na Vila Santa Isabel?",
        a: "Sim, a visita técnica para tirar medidas e fazer a consultoria do portão é gratuita no bairro."
      }
    ]
  }
,
  {
    "slug": "serralheria-no-jardim-do-lago-campinas",
    "name": "Jardim do Lago",
    "preposition": "no",
    "title": "Serralheria no Jardim do Lago em Campinas",
    "metaDescription": "Serralheria no Jardim do Lago em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e coberturas com aço galvalume. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim do Lago em Campinas | Portões e Estruturas",
    "heroSubtitle": "Atendimento especializado em serralheria residencial e comercial para o Jardim do Lago. Projetamos e fabricamos portões basculantes com fechamento rápido, grades de proteção e coberturas metálicas com solda reforçada e alta durabilidade.",
    "diferenciais": [
      {
        "emoji": "⚡",
        "title": "Motores de Abertura Rápida",
        "description": "Automatizadores rápidos para portões basculantes e deslizantes no Jardim do Lago, garantindo entrada ágil e segura em sua garagem."
      },
      {
        "emoji": "🛡️",
        "title": "Perfis em Aço Galvanizado",
        "description": "Tubos industriais e chapas tratadas contra umidade e ferrugem, ideais para suportar o clima da região sul de Campinas por anos."
      },
      {
        "emoji": "📏",
        "title": "Visita Técnica sem Custo",
        "description": "Nossa equipe vai até seu imóvel no Jardim do Lago para medições precisas do vão e envio de orçamento transparente em menos de 24 horas."
      }
    ],
    "aboutTitle": "Segurança Perimetral e Portões sob Medida no Jardim do Lago",
    "aboutText": "O Jardim do Lago é um bairro residencial tradicional e muito bem localizado na Região Sul de Campinas, próximo ao Parque das Águas e às principais vias de ligação rápida. A Precisão Metal atua no bairro desenvolvendo portões automáticos basculantes de acionamento macio e silencioso, grades robustas para fechamento de muros e coberturas metálicas com telhas termoacústicas para proteção de veículos. Nossa fábrica alia matéria-prima de primeira linha a acabamentos finos de solda que valorizam a fachada do seu patrimônio.",
    "testimonial": {
      "name": "Eduardo Siqueira",
      "text": "Instalaram o portão basculante e as grades da frente da minha casa no Jardim do Lago. O motor abre super rápido, a solda ficou muito limpa e entregaram antes do prazo combinado.",
      "type": "Residencial • Jardim do Lago",
      "initials": "ES"
    },
    "faqs": [
      {
        "q": "Vocês atendem chamados para troca de cabos de aço e roldanas no Jardim do Lago?",
        "a": "Sim! Realizamos manutenções preventivas e corretivas, substituindo cabos de aço desgastados, roldanas e alinhando portões basculantes no bairro."
      },
      {
        "q": "Qual o prazo médio de fabricação para um portão no Jardim do Lago?",
        "a": "O prazo de confecção na oficina varia de 7 a 15 dias úteis, e a fixação na alvenaria é concluída em um único dia de serviço."
      },
      {
        "q": "A Precisão Metal parcela o valor do serviço?",
        "a": "Sim, facilitamos o pagamento em até 12 vezes no cartão de crédito ou concedemos condições diferenciadas para pagamentos à vista via PIX."
      }
    ]
  },
  {
    "slug": "serralheria-em-barao-geraldo-campinas",
    "name": "Barão Geraldo",
    "preposition": "em",
    "title": "Serralheria em Barão Geraldo em Campinas",
    "metaDescription": "Serralheria em Barão Geraldo em Campinas de alto padrão. Mezaninos metálicos, portões automáticos, guarda-corpos e grades sob medida. Peça orçamento grátis!",
    "heroTitle": "Serralheria em Barão Geraldo em Campinas | Estruturas e Portões",
    "heroSubtitle": "Excelência em soluções metálicas para residências, condomínios fechados, repúblicas e centros de tecnologia em Barão Geraldo. Fabricamos mezaninos para escritórios, portões basculantes modernos e guarda-corpos arquitetônicos sob medida.",
    "diferenciais": [
      {
        "emoji": "🏗️",
        "title": "Cálculo de Carga Estrutural",
        "description": "Mezaninos e coberturas industriais projetados com vigas dimensionadas para máxima segurança e ganho de área útil em Barão Geraldo."
      },
      {
        "emoji": "⚜️",
        "title": "Design e Serralheria Fina",
        "description": "Guarda-corpos minimalistas, corrimãos em aço com fixação embutida e acabamentos alinhados com projetos contemporâneos de arquitetura."
      },
      {
        "emoji": "⏱️",
        "title": "Montagem Pontual e Limpa",
        "description": "Respeito irrestrito aos prazos e às normas de ruído de condomínios fechados e áreas universitárias de Barão Geraldo."
      }
    ],
    "aboutTitle": "Metalurgia Arquitetônica, Mezaninos e Segurança em Barão Geraldo",
    "aboutText": "O distrito de Barão Geraldo é referência tecnológica, universitária e residencial de alto padrão em Campinas. Com grande presença da Unicamp, centros médicos e condomínios horizontais consagrados, a demanda por serralheria no distrito exige sofisticação e precisão técnica. A Precisão Metal projeta mezaninos metálicos para startups e residências, coberturas elegantes em policarbonato e estruturas com solda MIG impecável. Nossas peças combinam robustez contra corrosão e estética clean para valorizar cada ambiente.",
    "testimonial": {
      "name": "Camila Mendonça",
      "text": "Contratamos a Precisão Metal para montar a estrutura metálica do mezanino do nosso escritório em Barão Geraldo. A execução foi impecável, estrutura sólida e acabamento perfeito.",
      "type": "Comercial/Residencial • Barão Geraldo",
      "initials": "CM"
    },
    "faqs": [
      {
        "q": "Vocês atendem condomínios fechados em Barão Geraldo?",
        "a": "Sim, realizamos obras respeitando todos os horários e normas de condomínios fechados em Barão Geraldo, com montagem rápida e isolamento de ruído."
      },
      {
        "q": "É possível fabricar mezanino metálico sem pilares no centro da sala?",
        "a": "Sim! Projetamos mezaninos com vigamento perimetral fixado em paredes estruturais ou pilares laterais discretos para liberar todo o vão inferior."
      },
      {
        "q": "Como solicitar uma vistoria técnica em Barão Geraldo?",
        "a": "Basta nos chamar pelo WhatsApp informando a localização aproximada. Agendamos a visita presencial gratuita no dia de sua conveniência."
      }
    ]
  },
  {
    "slug": "serralheria-em-sousas-campinas",
    "name": "Sousas",
    "preposition": "em",
    "title": "Serralheria em Sousas em Campinas",
    "metaDescription": "Serralheria em Sousas em Campinas de alto padrão. Portões sob medida, guarda-corpos modernos e proteção anticorrosiva para condomínios. Orçamento gratuito!",
    "heroTitle": "Serralheria em Sousas em Campinas | Alto Padrão e Durabilidade",
    "heroSubtitle": "Serralheria premium sob medida para residências de alto padrão, condomínios e chácaras em Sousas. Projetamos guarda-corpos panorâmicos, corrimãos finos, coberturas e portões automáticos com tratamento rigoroso contra umidade.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Tratamento Antioxidante Extra",
        "description": "Aço galvanizado com fundo fosfatizante epóxi, preparado especialmente para resistir à alta umidade da região ribeirinha de Sousas."
      },
      {
        "emoji": "🎨",
        "title": "Acabamento Sem Emendas",
        "description": "Lixamento técnico das soldas e preparação para pintura automotiva e eletrostática, garantindo visual requintado para o seu imóvel."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Segurança comprovada em contrato com garantia técnica de fábrica cobrindo integridade estrutural e ancoragem das peças."
      }
    ],
    "aboutTitle": "Serralheria Fina e Estruturas Metálicas Exclusivas no Distrito de Sousas",
    "aboutText": "O charmoso distrito de Sousas destaca-se por sua exuberante área verde, condomínios fechados de altíssimo luxo e gastronomia tradicional em Campinas. Pela proximidade com matas e cursos d'água, as estruturas metálicas em Sousas necessitam de proteção anticorrosiva superior e acabamento visual refinado. A Precisão Metal fabrica portas de entrada monumentais, guarda-corpos em aço e vidro para varandas com vista panorâmica, e portões automáticos silenciosos que atendem com primor o estilo arquitetônico da região.",
    "testimonial": {
      "name": "Fernando Naves",
      "text": "Fizeram o portão basculante e os guarda-corpos da nossa casa no condomínio em Sousas. O atendimento foi impecável e o acabamento das soldas é de primeiro mundo.",
      "type": "Residencial • Sousas",
      "initials": "FN"
    },
    "faqs": [
      {
        "q": "Como o clima úmido de Sousas afeta as estruturas metálicas?",
        "a": "Por estar próximo ao Rio Atibaia, aplicamos camadas extras de primer epóxi antiferrugem e usamos aço galvalume, impedindo a formação precoce de ferrugem."
      },
      {
        "q": "Vocês produzem portões com fechamento em madeira ecológica ou alumínio?",
        "a": "Sim, estruturamos os quadros principais em aço galvanizado reforçado e preparamos os vãos para aplicação de ripados de madeira, alumínio ou chapa frisada."
      },
      {
        "q": "A visita para orçamento em Sousas é cobrada?",
        "a": "Não cobramos nenhuma taxa de visita técnica em Sousas para avaliar o projeto e realizar o levantamento métrico do vão."
      }
    ]
  },
  {
    "slug": "serralheria-na-nova-aparecida-campinas",
    "name": "Nova Aparecida",
    "preposition": "na",
    "title": "Serralheria na Nova Aparecida em Campinas",
    "metaDescription": "Serralheria na Nova Aparecida em Campinas. Especialistas em portas de aço automáticas, portões basculantes, mezaninos e grades de proteção. Ligue agora mesmo!",
    "heroTitle": "Serralheria na Nova Aparecida em Campinas | Soluções Comerciais e Residenciais",
    "heroSubtitle": "Atendimento completo em metalúrgica e serralheria na Nova Aparecida. Fabricamos portas de enrolar de alta resistência para galpões e lojas, mezaninos industriais, portões residenciais e grades reforçadas com preços direto da fábrica.",
    "diferenciais": [
      {
        "emoji": "🔒",
        "title": "Máxima Proteção Patrimonial",
        "description": "Grades espessas e trancas antifurto projetadas para reforçar a segurança de residências e comércios na Nova Aparecida."
      },
      {
        "emoji": "🏭",
        "title": "Estruturas para Galpões",
        "description": "Mezaninos e portas de aço de enrolar automáticas para empresas, transportadoras e lojas no polo da Nova Aparecida."
      },
      {
        "emoji": "🚀",
        "title": "Prontidão e Deslocamento Ágil",
        "description": "Equipe com fácil acesso aos eixos da Anhanguera e D. Pedro para vistorias, manutenções emergenciais e entregas pontuais."
      }
    ],
    "aboutTitle": "Serralheria Pesada, Portas de Enrolar e Mezaninos na Nova Aparecida",
    "aboutText": "O distrito da Nova Aparecida é um polo estratégico em Campinas, unindo grandes centros de distribuição, empresas logísticas e extensas áreas residenciais ao redor do Padre Anchieta. A Precisão Metal atende a essa região com soluções sob medida em portas de aço de enrolar motorizadas, mezaninos para ganho de área de estoque, coberturas de galpões e portões residenciais basculantes. Fornecemos estruturas de alta rigidez mecânica capazes de suportar uso severo e proporcionar total tranquilidade aos proprietários.",
    "testimonial": {
      "name": "Valter Fagundes",
      "text": "Comprei a porta de enrolar automática e as grades para o meu depósito na Nova Aparecida. Funcionamento perfeito, motor silencioso e preço muito competitivo. Recomendo!",
      "type": "Comercial • Nova Aparecida",
      "initials": "VF"
    },
    "faqs": [
      {
        "q": "Vocês fabricam portas de enrolar perfuradas (transvision) para comércio?",
        "a": "Sim! Fabricamos portas de aço de enrolar tanto em chapa fechada meia-cana quanto no modelo transvision, ideais para visualização noturna da vitrine."
      },
      {
        "q": "Qual o prazo para consertar um portão automático travado na Nova Aparecida?",
        "a": "Atendemos chamados de emergência no mesmo dia para desengavetar portões, trocar roldanas partidas ou substituir motores danificados."
      },
      {
        "q": "Fornecem laudo ou ART para mezaninos comerciais?",
        "a": "Sim, quando contratado para projetos corporativos, emitimos o cálculo de carga estrutural e recolhimento de ART assinado por engenheiro habilitado."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-novo-campos-eliseos-campinas",
    "name": "Jardim Novo Campos Elíseos",
    "preposition": "no",
    "title": "Serralheria no Jardim Novo Campos Elíseos em Campinas",
    "metaDescription": "Serralheria no Jardim Novo Campos Elíseos em Campinas. Portões basculantes de correr, grades de ferro e coberturas residenciais com ótimo preço. Ligue já!",
    "heroTitle": "Serralheria no Jardim Novo Campos Elíseos em Campinas | Portões e Grades",
    "heroSubtitle": "Segurança garantida e estética moderna para o seu imóvel no Jardim Novo Campos Elíseos. Fabricamos portões basculantes silenciosos, grades protetoras para janelas e corrimãos de aço com preços de fábrica e facilidade no pagamento.",
    "diferenciais": [
      {
        "emoji": "🔒",
        "title": "Travamento Duplo Reforçado",
        "description": "Sistemas com trincos embutidos e fechaduras de segurança para dificultar invasões no Jardim Novo Campos Elíseos."
      },
      {
        "emoji": "⚙️",
        "title": "Sistemas Basculantes Balanceados",
        "description": "Caixas de contrapeso calculadas com precisão milimétrica, evitando esforço mecânico excessivo do motor elétrico."
      },
      {
        "emoji": "💰",
        "title": "Preço Direto de Fábrica",
        "description": "Sem intermediários na negociação, garantindo os preços mais acessíveis e condições excelentes de parcelamento."
      }
    ],
    "aboutTitle": "Portões Automáticos e Proteções Metálicas no Jardim Novo Campos Elíseos",
    "aboutText": "O Jardim Novo Campos Elíseos é um bairro dinâmico e densamente habitado na Região Sudoeste de Campinas, vizinho a grandes corredores comerciais. A Precisão Metal desenvolve para os moradores locais portões basculantes inteligentes que economizam espaço na garagem e protegem o veículo durante a entrada. Também produzimos grades tubulares e soldas especiais para portas sociais e muros, entregando soluções robustas e com pintura de proteção anticorrosiva duradoura para o seu imóvel.",
    "testimonial": {
      "name": "Rogério Silveira",
      "text": "Troquei meu portão antigo de duas folhas por um basculante de aço galvalume com a Precisão Metal no Novo Campos Elíseos. A garagem ganhou espaço e ficou linda demais!",
      "type": "Residencial • Jardim Novo Campos Elíseos",
      "initials": "RS"
    },
    "faqs": [
      {
        "q": "Qual o benefício do portão basculante para calçadas no Novo Campos Elíseos?",
        "a": "O portão basculante eleva a folha para cima rente à viga superior, sem invadir a área de passeio público da calçada nem ocupar as laterais da garagem."
      },
      {
        "q": "Vocês fazem reforma geral de portões com ferrugem?",
        "a": "Sim, realizamos recorte das partes corroídas, soldagem de chapas novas de galvalume e aplicação de fundo antiferrugem para renovar o portão."
      },
      {
        "q": "A visita de medição no bairro tem custo?",
        "a": "Não cobramos nenhuma taxa para medir o vão e apresentar o orçamento no Jardim Novo Campos Elíseos."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-campo-belo-campinas",
    "name": "Jardim Campo Belo",
    "preposition": "no",
    "title": "Serralheria no Jardim Campo Belo em Campinas",
    "metaDescription": "Procurando serralheria no Jardim Campo Belo em Campinas? Fabricamos portões deslizantes, grades pesadas e coberturas metálicas com garantia. Orçamento grátis!",
    "heroTitle": "Serralheria no Jardim Campo Belo em Campinas | Portões e Estruturas",
    "heroSubtitle": "Soluções robustas em ferro e aço galvanizado para o Jardim Campo Belo e região do Aeroporto de Viracopos. Fabricamos portões de grande porte, grades perimetrais para chácaras e residências, além de coberturas para garagem.",
    "diferenciais": [
      {
        "emoji": "💪",
        "title": "Perfis Metálicos Espessos",
        "description": "Utilizamos aço tubular de alta espessura para garantir total resistência estrutural contra impactos e tentativas de arrombamento."
      },
      {
        "emoji": "🚗",
        "title": "Portões para Vãos Amplos",
        "description": "Especialistas em portões deslizantes e articulados de grandes medidas, ideais para entrada de caminhonetes e vans."
      },
      {
        "emoji": "🛡️",
        "title": "Solda de Alta Penetração",
        "description": "Processo MIG industrial que une as peças sem pontos frágeis, assegurando durabilidade prolongada em áreas abertas."
      }
    ],
    "aboutTitle": "Estruturas de Aço, Coberturas e Portões de Alta Resistência no Campo Belo",
    "aboutText": "O Jardim Campo Belo é uma região de forte expansão na zona sul de Campinas, próxima ao Aeroporto de Viracopos e à Rodovia Santos Dumont. Composta por moradias amplas, chácaras e novos estabelecimentos comerciais, a localidade demanda serralheria pesada com foco em durabilidade e segurança perimetral. A Precisão Metal atua na fabricação de portões deslizantes motorizados de alto rendimento, grades para fechamento de terrenos e coberturas metálicas com telhas termoacústicas para proteção de garagens.",
    "testimonial": {
      "name": "Gilberto Andrade",
      "text": "Mandei fabricar um portão deslizante de 5 metros para a minha propriedade no Campo Belo. Ficou muito resistente, desliza suavemente e o acabamento da pintura foi impecável.",
      "type": "Residencial/Chácara • Jardim Campo Belo",
      "initials": "GA"
    },
    "faqs": [
      {
        "q": "Vocês instalam motores industriais para portões pesados no Campo Belo?",
        "a": "Sim! Trabalhamos com automatizadores de tração pesada (de até 1000 kg) com engrenagens de bronze, ideais para portões largos e uso frequente."
      },
      {
        "q": "Qual o tipo de cobertura recomendada para garagens amplas?",
        "a": "Indicamos tesouras metálicas treliçadas com telhas termoacústicas tipo sanduíche, que reduzem significativamente a temperatura interna sob o veículo."
      },
      {
        "q": "Como solicitar orçamento no Jardim Campo Belo?",
        "a": "Você pode nos enviar fotos e medidas aproximadas pelo WhatsApp para estimativa inicial ou agendar a visita presencial gratuita de um serralheiro."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-nova-europa-campinas",
    "name": "Jardim Nova Europa",
    "preposition": "no",
    "title": "Serralheria no Jardim Nova Europa em Campinas",
    "metaDescription": "Serralheria de excelência no Jardim Nova Europa em Campinas. Portões basculantes automatizados, corrimãos e coberturas sob medida. Solicite orçamento rápido!",
    "heroTitle": "Serralheria no Jardim Nova Europa em Campinas | Tecnologia e Design",
    "heroSubtitle": "Modernidade e alta proteção para o seu imóvel no tradicional bairro Jardim Nova Europa. Fabricamos portões basculantes de acionamento ultrarrápido, corrimãos em aço, guarda-corpos elegantes e coberturas termoacústicas para garagens.",
    "diferenciais": [
      {
        "emoji": "⚡",
        "title": "Fechamento Rápido de 4s",
        "description": "Motores eletrônicos de abertura rápida para portões no Jardim Nova Europa, reduzindo o tempo de espera do veículo na rua."
      },
      {
        "emoji": "✨",
        "title": "Design Contemporâneo",
        "description": "Modelos modernos com chapa veneziana, frisos horizontais e detalhes sob medida para harmonizar com sobrados e condomínios."
      },
      {
        "emoji": "🛠️",
        "title": "Instalação Limpa e Rápida",
        "description": "Montagem eficiente em apenas um dia de serviço, sem deixar sujeira de solda ou entulho na sua garagem."
      }
    ],
    "aboutTitle": "Serralheria Residencial de Alto Padrão e Portões no Jardim Nova Europa",
    "aboutText": "O Jardim Nova Europa é um dos bairros residenciais mais procurados e estruturados de Campinas, reunindo belos sobrados, condomínios verticais e movimentadas vias comerciais como a Av. Baden Powell. A Precisão Metal oferece aos moradores da região serralheria de alta performance: portões automáticos basculantes que combinam estética refinada e motores velozes, corrimãos com fixação oculta e grades elegantes. Nossas peças passam por lixamento técnico e pintura protetora que garantem longevidade e sofisticação.",
    "testimonial": {
      "name": "Luciana Barreto",
      "text": "A Precisão Metal instalou o portão basculante e o corrimão da escada do meu sobrado no Jardim Nova Europa. O trabalho ficou lindo, muito silencioso e com atendimento exemplar.",
      "type": "Residencial • Jardim Nova Europa",
      "initials": "LB"
    },
    "faqs": [
      {
        "q": "O portão basculante faz muito barulho ao abrir e fechar?",
        "a": "Não! Nossos portões utilizam guias laterais com roldanas de nylon de alta densidade e cabos de aço flexíveis, garantindo um funcionamento quase silencioso."
      },
      {
        "q": "Vocês atendem condomínios residenciais no Jardim Nova Europa?",
        "a": "Sim, realizamos fabricação de corrimãos para escadarias de condomínios, portões sociais com fechadura elétrica e guarda-corpos em aço galvanizado."
      },
      {
        "q": "Qual a forma de pagamento oferecida?",
        "a": "Oferecemos parcelamento facilitado em até 12 vezes sem complicações no cartão de crédito, ou desconto especial para quitação à vista via PIX."
      }
    ]
  },
  {
    "slug": "serralheria-no-parque-prado-campinas",
    "name": "Parque Prado",
    "preposition": "no",
    "title": "Serralheria no Parque Prado em Campinas",
    "metaDescription": "Serralheria no Parque Prado em Campinas de alto padrão. Guarda-corpos de luxo, portões basculantes silenciosos e corrimãos sob medida. Peça orçamento grátis!",
    "heroTitle": "Serralheria no Parque Prado em Campinas | Alto Padrão e Segurança",
    "heroSubtitle": "Serralheria fina de excelência para residências, apartamentos de cobertura e condomínios fechados no Parque Prado. Guarda-corpos arquitetônicos em aço e vidro, corrimãos sofisticados e estruturas metálicas personalizadas.",
    "diferenciais": [
      {
        "emoji": "⚜️",
        "title": "Padrão Arquitetônico Exclusivo",
        "description": "Peças executadas com alinhamento milimétrico, atendendo às rígidas exigências estéticas dos condomínios do Parque Prado."
      },
      {
        "emoji": "💎",
        "title": "Soldas Finas Invisíveis",
        "description": "Lixamento técnico e polimento meticuloso em todas as conexões, proporcionando uma superfície perfeitamente lisa e contínua."
      },
      {
        "emoji": "🔒",
        "title": "Controle e Segurança Integrada",
        "description": "Preparação técnica para fechaduras eletrônicas digitais, biometria e travas eletromagnéticas de segurança avançada."
      }
    ],
    "aboutTitle": "Serralheria Fina, Guarda-Corpos e Estruturas Premium no Parque Prado",
    "aboutText": "O Parque Prado é um dos bairros planejados mais valorizados e modernos de Campinas, marcado por condomínios verticais de alto padrão, ampla arborização e o Shopping Prado Boulevard. Para clientes que priorizam elegância arquitetônica e segurança, a Precisão Metal desenvolve projetos personalizados de serralheria artística e funcional. Fabricamos guarda-corpos em aço e vidro temperado, corrimãos com fixação embutida, coberturas retráteis e portões automáticos que agregam valor e sofisticação incomparáveis ao imóvel.",
    "testimonial": {
      "name": "Maurício Fontes",
      "text": "Contratei a Precisão Metal para os guarda-corpos da varanda e cobertura do meu duplex no Parque Prado. O acabamento é impecável e a equipe foi super cuidadosa no condomínio.",
      "type": "Residencial • Parque Prado",
      "initials": "MF"
    },
    "faqs": [
      {
        "q": "Vocês seguem as normas da ABNT para guarda-corpos no Parque Prado?",
        "a": "Sim! Todos os nossos guarda-corpos e corrimãos são projetados em estrita conformidade com as normas NBR 14718 e NBR 9050, suportando a carga de pressão exigida."
      },
      {
        "q": "Como realizam a montagem em edifícios residenciais?",
        "a": "Nossa equipe respeita rigorosamente as regras do condomínio quanto a horários de barulho, proteção de pisos de elevadores e limpeza total dos resíduos."
      },
      {
        "q": "É possível enviar o projeto arquitetônico em PDF para orçamento?",
        "a": "Com certeza. Você pode enviar sua planta ou desenho técnico em PDF pelo nosso WhatsApp para análise e orçamento detalhado imediato."
      }
    ]
  },
  {
    "slug": "serralheria-no-parque-valenca-campinas",
    "name": "Parque Valença",
    "preposition": "no",
    "title": "Serralheria no Parque Valença em Campinas",
    "metaDescription": "Serralheria no Parque Valença em Campinas sob medida. Fabricamos grades reforçadas, portões basculantes automáticos e soldas em geral. Ligue e peça orçamento!",
    "heroTitle": "Serralheria no Parque Valença em Campinas | Proteção e Qualidade",
    "heroSubtitle": "Serralheiro de confiança e estruturas metálicas sob medida no Parque Valença. Fabricamos portões basculantes de correr, grades de segurança reforçadas para muros e janelas, e coberturas de garagem com garantia e preços acessíveis.",
    "diferenciais": [
      {
        "emoji": "🔒",
        "title": "Proteção Contra Intrusões",
        "description": "Grades fabricadas em metalon reforçado com solda dupla nas junções, garantindo a proteção da sua residência no Parque Valença."
      },
      {
        "emoji": "💰",
        "title": "Preço Justo e Acessível",
        "description": "Condições especiais direto de fábrica para a comunidade do Parque Valença, com parcelamento no cartão sem complicações."
      },
      {
        "emoji": "⚡",
        "title": "Atendimento Ágil no Bairro",
        "description": "Equipe local para medições rápidas no mesmo dia e pronto-atendimento para reparos e soldas emergenciais de portão."
      }
    ],
    "aboutTitle": "Grades Fortes, Portões sob Medida e Soldas no Parque Valença",
    "aboutText": "O Parque Valença, integrado à vibrante macrorregião do Campo Grande em Campinas, é um bairro residencial densamente povoado que preza pelo bem-estar e segurança familiar. A Precisão Metal atua como parceira dos moradores locais, confeccionando portões automáticos basculantes com fechamento em chapa veneziana para total privacidade, além de grades protetoras de ferro e escadas caracol para melhor aproveitamento de espaço. Nossos produtos são feitos para durar, protegendo seu lar com total tranquilidade.",
    "testimonial": {
      "name": "Valdirene Rocha",
      "text": "Fizeram o portão novo da minha casa e as grades das janelas no Parque Valença. O trabalho ficou excelente, muito firme, seguro e entregaram certinho no dia marcado.",
      "type": "Residencial • Parque Valença",
      "initials": "VR"
    },
    "faqs": [
      {
        "q": "Vocês atendem chamados para solda rápida de portão quebrado no Parque Valença?",
        "a": "Sim! Disponibilizamos técnicos com maquinário portátil de solda para reparos emergenciais em dobradiças quebradas, trincos soltos e trilhos danificados."
      },
      {
        "q": "Posso escolher o modelo da chapa do portão para mais privacidade?",
        "a": "Sim, oferecemos opções em chapa lisa, veneziana (com ventilação e privacidade) ou tubulares com espaçamento reduzido à sua escolha."
      },
      {
        "q": "A visita técnica de orçamento no Parque Valença é gratuita?",
        "a": "Sim, nosso técnico vai até o seu endereço no Parque Valença, mede o espaço sem nenhum compromisso e envia a cotação detalhada."
      }
    ]
  }
,
  {
    "slug": "serralheria-no-taquaral-campinas",
    "name": "Taquaral",
    "preposition": "no",
    "title": "Serralheria no Taquaral em Campinas",
    "metaDescription": "Serralheria no Taquaral em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Taquaral em Campinas | Alto Padrão e Portões Rápidos",
    "heroSubtitle": "Procurando por serralheiro experiente no Taquaral? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Taquaral."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Taquaral para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Taquaral",
    "aboutText": "O Taquaral é um dos bairros mais valorizados e tradicionais de Campinas, conhecido pela famosa Lagoa do Taquaral e por suas belas residências e clínicas. A Precisão Metal atua na região desenvolvendo soluções sofisticadas de serralheria: portões automáticos basculantes silenciosos com motores ultrarrápidos, guarda-corpos em aço e vidro para sacadas, corrimãos com fixação embutida e grades de segurança refinadas. Nossas peças aliam robustez mecânica a um acabamento primoroso que valoriza as fachadas do bairro.",
    "testimonial": {
      "name": "Marcos Vinícius",
      "text": "Excelente trabalho executado pela Precisão Metal no Taquaral. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Taquaral",
      "initials": "MV"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Taquaral?",
        "a": "Não! Realizamos a visita técnica no local no Taquaral para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Taquaral?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-castelo-campinas",
    "name": "Castelo",
    "preposition": "no",
    "title": "Serralheria no Castelo em Campinas",
    "metaDescription": "Serralheria no Castelo em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Castelo em Campinas | Portões e Segurança Residencial",
    "heroSubtitle": "Procurando por serralheiro experiente no Castelo? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Castelo."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Castelo para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Castelo",
    "aboutText": "O bairro Castelo é um marco histórico e residencial de Campinas, abrigando a icônica Torre do Castelo, sobrados imponentes e forte comércio nas avenidas Andrade Neves e Alberto Sarmento. A Precisão Metal fornece para os moradores locais portões basculantes automatizados com tecnologia anti-impacto, grades de proteção perimetral para janelas e muros, além de escadas metálicas sob medida. Trabalhamos com aço galvanizado de parede grossa que garante proteção máxima e visual impecável ao seu patrimônio.",
    "testimonial": {
      "name": "Carlos Eduardo",
      "text": "Excelente trabalho executado pela Precisão Metal no Castelo. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Castelo",
      "initials": "CE"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Castelo?",
        "a": "Não! Realizamos a visita técnica no local no Castelo para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Castelo?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-nas-mansoes-santo-antonio-campinas",
    "name": "Mansões Santo Antônio",
    "preposition": "nas",
    "title": "Serralheria nas Mansões Santo Antônio em Campinas",
    "metaDescription": "Serralheria nas Mansões Santo Antônio em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçam",
    "heroTitle": "Serralheria nas Mansões Santo Antônio em Campinas | Serralheria Fina para Condomínios",
    "heroSubtitle": "Procurando por serralheiro experiente nas Mansões Santo Antônio? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas nas Mansões Santo Antônio."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita nas Mansões Santo Antônio para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas nas Mansões Santo Antônio",
    "aboutText": "As Mansões Santo Antônio destacam-se pela modernidade de seus condomínios verticais de alto padrão e localização privilegiada próxima ao Shopping Dom Pedro. A Precisão Metal atende síndicos, decoradores e proprietários do bairro com serviços especializados de serralheria fina: guarda-corpos panorâmicos em aço com pintura eletrostática, corrimãos técnicos segundo a NBR 9050 para escadarias de prédios, portões sociais com fechadura digital integrada e coberturas retráteis de policarbonato para áreas gourmets.",
    "testimonial": {
      "name": "Fernanda Toledo",
      "text": "Excelente trabalho executado pela Precisão Metal nas Mansões Santo Antônio. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Condomínio • Mansões Santo Antônio",
      "initials": "FT"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento nas Mansões Santo Antônio?",
        "a": "Não! Realizamos a visita técnica no local nas Mansões Santo Antônio para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão nas Mansões Santo Antônio?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-ponte-preta-campinas",
    "name": "Ponte Preta",
    "preposition": "na",
    "title": "Serralheria na Ponte Preta em Campinas",
    "metaDescription": "Serralheria na Ponte Preta em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Ponte Preta em Campinas | Portões e Coberturas de Garagem",
    "heroSubtitle": "Procurando por serralheiro experiente na Ponte Preta? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Ponte Preta."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Ponte Preta para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Ponte Preta",
    "aboutText": "A Ponte Preta é um dos bairros mais tradicionais e queridos de Campinas, marcado por ruas históricas ao redor do Estádio Moisés Lucarelli e acesso facilitado ao centro. Os moradores da Ponte Preta contam com a Precisão Metal para modernizar o acesso de suas garagens com portões basculantes motorizados de abertura em 4 segundos, grades de proteção em ferro maciço e coberturas metálicas leves com telhas termoacústicas. Entregamos obras limpas, silenciosas e com garantia estrutural de 5 anos por escrito.",
    "testimonial": {
      "name": "Leonardo Prado",
      "text": "Excelente trabalho executado pela Precisão Metal na Ponte Preta. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Ponte Preta",
      "initials": "LP"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Ponte Preta?",
        "a": "Não! Realizamos a visita técnica no local na Ponte Preta para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Ponte Preta?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-nova-campinas-campinas",
    "name": "Nova Campinas",
    "preposition": "na",
    "title": "Serralheria na Nova Campinas em Campinas",
    "metaDescription": "Serralheria na Nova Campinas em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Nova Campinas em Campinas | Serralheria de Luxo e Fachadas",
    "heroSubtitle": "Procurando por serralheiro experiente na Nova Campinas? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Nova Campinas."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Nova Campinas para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Nova Campinas",
    "aboutText": "A Nova Campinas é sinônimo de sofisticação, abrigando mansões clássicas, consultórios médicos de renome e escritórios corporativos de alto padrão. Para acompanhar esse nível de exigência estética, a Precisão Metal confecciona peças exclusivas de metalurgia fina: portas pivotantes monumentais de aço, guarda-corpos minimalistas, estruturas metálicas para fachadas comerciais e portões eletrônicos rápidos com soldas 100% invisíveis. Atendemos arquitetos com precisão milimétrica em cada projeto executado.",
    "testimonial": {
      "name": "Heloísa Guimarães",
      "text": "Excelente trabalho executado pela Precisão Metal na Nova Campinas. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Comercial/Residencial • Nova Campinas",
      "initials": "HG"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Nova Campinas?",
        "a": "Não! Realizamos a visita técnica no local na Nova Campinas para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Nova Campinas?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-swift-campinas",
    "name": "Swift",
    "preposition": "no",
    "title": "Serralheria no Swift em Campinas",
    "metaDescription": "Serralheria no Swift em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Swift em Campinas | Mezaninos e Portões Automáticos",
    "heroSubtitle": "Procurando por serralheiro experiente no Swift? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Swift."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Swift para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Swift",
    "aboutText": "O bairro Swift é uma das regiões de maior expansão universitária e residencial de Campinas, reunindo grandes faculdades, condomínios modernos e comércio ativo. A Precisão Metal atende a esse polo fornecendo mezaninos metálicos estruturais para ganho de área útil em empresas e comércios, portões de garagem basculantes de alta velocidade para sobrados e condomínios, além de corrimãos em aço com pintura resistente. Nossas estruturas garantem rigidez absoluta e montagem rápida no local.",
    "testimonial": {
      "name": "Daniel Barcellos",
      "text": "Excelente trabalho executado pela Precisão Metal no Swift. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Comercial • Swift",
      "initials": "DB"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Swift?",
        "a": "Não! Realizamos a visita técnica no local no Swift para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Swift?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-proenca-campinas",
    "name": "Jardim Proença",
    "preposition": "no",
    "title": "Serralheria no Jardim Proença em Campinas",
    "metaDescription": "Serralheria no Jardim Proença em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Proença em Campinas | Portões Basculantes e Grades",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Proença? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Proença."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Proença para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Proença",
    "aboutText": "O Jardim Proença é um bairro residencial consolidado de Campinas, vizinho ao Estádio Brinco de Ouro e à arborizada Avenida Princesa d'Oeste. A Precisão Metal atua no bairro fornecendo portões automáticos basculantes com caixas de contrapeso balanceadas, grades reforçadas para fechamento de muros e coberturas para vagas de veículos. Com equipe técnica própria e especializada, garantimos que sua estrutura metálica funcione suavemente, sem ruídos e com total segurança para toda a família.",
    "testimonial": {
      "name": "Sérgio Antunes",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Proença. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Proença",
      "initials": "SA"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Proença?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Proença para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Proença?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-parque-taquaral-campinas",
    "name": "Parque Taquaral",
    "preposition": "no",
    "title": "Serralheria no Parque Taquaral em Campinas",
    "metaDescription": "Serralheria no Parque Taquaral em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Parque Taquaral em Campinas | Design Arquitetônico em Metal",
    "heroSubtitle": "Procurando por serralheiro experiente no Parque Taquaral? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Parque Taquaral."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Parque Taquaral para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Parque Taquaral",
    "aboutText": "O Parque Taquaral reúne residências nobres e imóveis com arquitetura diferenciada no entorno do principal parque de lazer de Campinas. A Precisão Metal desenvolve projetos sob medida que integram aço galvalume, vidro e detalhes em madeira para harmonizar com a sofisticação do bairro. Fabricamos portões basculantes de design moderno, guarda-corpos panorâmicos e corrimãos de segurança para áreas internas e externas. Cada detalhe é tratado com soldagem impecável e pintura automotiva duradoura.",
    "testimonial": {
      "name": "Bárbara Meirelles",
      "text": "Excelente trabalho executado pela Precisão Metal no Parque Taquaral. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Parque Taquaral",
      "initials": "BM"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Parque Taquaral?",
        "a": "Não! Realizamos a visita técnica no local no Parque Taquaral para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Parque Taquaral?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-flamboyant-campinas",
    "name": "Jardim Flamboyant",
    "preposition": "no",
    "title": "Serralheria no Jardim Flamboyant em Campinas",
    "metaDescription": "Serralheria no Jardim Flamboyant em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Flamboyant em Campinas | Portões Rápidos e Coberturas",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Flamboyant? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Flamboyant."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Flamboyant para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Flamboyant",
    "aboutText": "Vizinho ao Shopping Iguatemi e à Rodovia D. Pedro, o Jardim Flamboyant é um bairro de grande valor imobiliário composto por sobrados requintados e comércio qualificado. A Precisão Metal fornece para os moradores da região portões eletrônicos de fechamento veloz, grades para janelas com solda reforçada e coberturas termoacústicas com telha sanduíche para garagens. Nossas peças são projetadas para resistir bravamente ao sol e chuva, garantindo privacidade e estética refinada para o seu imóvel.",
    "testimonial": {
      "name": "Alexandre Gusmão",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Flamboyant. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Flamboyant",
      "initials": "AG"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Flamboyant?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Flamboyant para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Flamboyant?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-nova-campinas",
    "name": "Vila Nova",
    "preposition": "na",
    "title": "Serralheria na Vila Nova em Campinas",
    "metaDescription": "Serralheria na Vila Nova em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Vila Nova em Campinas | Proteção Perimetral e Portões",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Nova? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Nova."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Nova para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Nova",
    "aboutText": "A Vila Nova é um bairro aconchegante e tradicional em Campinas, vizinho ao Guanabara e Taquaral, repleto de praças e comércio de vizinhança. A Precisão Metal é parceira dos moradores da Vila Nova na fabricação de grades de segurança em ferro tubular de parede grossa, portões basculantes e portas sociais com fechaduras elétricas integradas. Também executamos serviços rápidos de solda para reparo de dobradiças e troca de cabos de aço, mantendo seu patrimônio protegido e bem cuidado.",
    "testimonial": {
      "name": "Tereza Cristina",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Nova. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Nova",
      "initials": "TC"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Nova?",
        "a": "Não! Realizamos a visita técnica no local na Vila Nova para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Nova?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-teixeira-campinas",
    "name": "Vila Teixeira",
    "preposition": "na",
    "title": "Serralheria na Vila Teixeira em Campinas",
    "metaDescription": "Serralheria na Vila Teixeira em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Vila Teixeira em Campinas | Portões e Soldas Rápidas",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Teixeira? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Teixeira."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Teixeira para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Teixeira",
    "aboutText": "Vila Teixeira é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Balão do Londres e Av. John Boyd Dunlop. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Ricardo Paiva",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Teixeira. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Teixeira",
      "initials": "RP"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Teixeira?",
        "a": "Não! Realizamos a visita técnica no local na Vila Teixeira para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Teixeira?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-parque-italia-campinas",
    "name": "Parque Itália",
    "preposition": "no",
    "title": "Serralheria no Parque Itália em Campinas",
    "metaDescription": "Serralheria no Parque Itália em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Parque Itália em Campinas | Coberturas e Portões Deslizantes",
    "heroSubtitle": "Procurando por serralheiro experiente no Parque Itália? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Parque Itália."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Parque Itália para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Parque Itália",
    "aboutText": "Parque Itália é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Av. Prestes Maia e Hospital Mário Gatti. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Marilza Duarte",
      "text": "Excelente trabalho executado pela Precisão Metal no Parque Itália. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Parque Itália",
      "initials": "MD"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Parque Itália?",
        "a": "Não! Realizamos a visita técnica no local no Parque Itália para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Parque Itália?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-pauliceia-campinas",
    "name": "Jardim Pauliceia",
    "preposition": "no",
    "title": "Serralheria no Jardim Pauliceia em Campinas",
    "metaDescription": "Serralheria no Jardim Pauliceia em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Pauliceia em Campinas | Portões de Garagem e Grades",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Pauliceia? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Pauliceia."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Pauliceia para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Pauliceia",
    "aboutText": "Jardim Pauliceia é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Av. John Boyd Dunlop e Supermercado Enxuto. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Geraldo Alencar",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Pauliceia. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Pauliceia",
      "initials": "GA"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Pauliceia?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Pauliceia para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Pauliceia?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-eulina-campinas",
    "name": "Jardim Eulina",
    "preposition": "no",
    "title": "Serralheria no Jardim Eulina em Campinas",
    "metaDescription": "Serralheria no Jardim Eulina em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Eulina em Campinas | Serralheria Residencial sob Medida",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Eulina? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Eulina."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Eulina para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Eulina",
    "aboutText": "Jardim Eulina é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Rodovia Anhanguera km 98 e Av. Mal. Rondon. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Viviane Ramos",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Eulina. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Eulina",
      "initials": "VR"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Eulina?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Eulina para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Eulina?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-leonor-campinas",
    "name": "Jardim Leonor",
    "preposition": "no",
    "title": "Serralheria no Jardim Leonor em Campinas",
    "metaDescription": "Serralheria no Jardim Leonor em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Leonor em Campinas | Portões Automáticos e Corrimãos",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Leonor? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Leonor."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Leonor para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Leonor",
    "aboutText": "Jardim Leonor é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Região do Bosque e Av. Washington Luiz. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Fabiano Pires",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Leonor. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Leonor",
      "initials": "FP"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Leonor?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Leonor para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Leonor?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-londres-campinas",
    "name": "Jardim Londres",
    "preposition": "no",
    "title": "Serralheria no Jardim Londres em Campinas",
    "metaDescription": "Serralheria no Jardim Londres em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Londres em Campinas | Portas de Aço e Portões de Garagem",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Londres? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Londres."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Londres para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Londres",
    "aboutText": "Jardim Londres é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de atividades comerciais e serviços nas imediações de Terminal Londres e Av. John Boyd Dunlop. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Cristiano Dias",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Londres. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Comercial • Jardim Londres",
      "initials": "CD"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Londres?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Londres para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Londres?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-carlos-lourenco-campinas",
    "name": "Jardim Carlos Lourenço",
    "preposition": "no",
    "title": "Serralheria no Jardim Carlos Lourenço em Campinas",
    "metaDescription": "Serralheria no Jardim Carlos Lourenço em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçam",
    "heroTitle": "Serralheria no Jardim Carlos Lourenço em Campinas | Grades de Proteção e Portões",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Carlos Lourenço? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Carlos Lourenço."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Carlos Lourenço para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Carlos Lourenço",
    "aboutText": "Jardim Carlos Lourenço é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Anel Viário Magalhães Teixeira. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Lucilene Morais",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Carlos Lourenço. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Carlos Lourenço",
      "initials": "LM"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Carlos Lourenço?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Carlos Lourenço para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Carlos Lourenço?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-garcia-campinas",
    "name": "Jardim Garcia",
    "preposition": "no",
    "title": "Serralheria no Jardim Garcia em Campinas",
    "metaDescription": "Serralheria no Jardim Garcia em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Garcia em Campinas | Portões Basculantes de Alta Durabilidade",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Garcia? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Garcia."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Garcia para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Garcia",
    "aboutText": "Jardim Garcia é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Av. Transamazônica e John Boyd Dunlop. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Reginaldo Santos",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Garcia. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Garcia",
      "initials": "RS"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Garcia?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Garcia para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Garcia?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-santana-campinas",
    "name": "Jardim Santana",
    "preposition": "no",
    "title": "Serralheria no Jardim Santana em Campinas",
    "metaDescription": "Serralheria no Jardim Santana em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Santana em Campinas | Coberturas Metálicas e Portões",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Santana? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Santana."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Santana para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Santana",
    "aboutText": "Jardim Santana é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Parque São Quirino e Taquaral. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Elaine Silveira",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Santana. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Santana",
      "initials": "ES"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Santana?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Santana para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Santana?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-das-paineiras-campinas",
    "name": "Jardim das Paineiras",
    "preposition": "no",
    "title": "Serralheria no Jardim das Paineiras em Campinas",
    "metaDescription": "Serralheria no Jardim das Paineiras em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamen",
    "heroTitle": "Serralheria no Jardim das Paineiras em Campinas | Serralheria Fina de Alto Padrão",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim das Paineiras? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim das Paineiras."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim das Paineiras para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim das Paineiras",
    "aboutText": "Jardim das Paineiras é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Av. Mackenzie e Shopping Iguatemi. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Flávio Junqueira",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim das Paineiras. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim das Paineiras",
      "initials": "FJ"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim das Paineiras?",
        "a": "Não! Realizamos a visita técnica no local no Jardim das Paineiras para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim das Paineiras?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-myrian-moreira-da-costa-campinas",
    "name": "Jardim Myrian Moreira da Costa",
    "preposition": "no",
    "title": "Serralheria no Jardim Myrian Moreira da Costa em Campinas",
    "metaDescription": "Serralheria no Jardim Myrian Moreira da Costa em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça s",
    "heroTitle": "Serralheria no Jardim Myrian Moreira da Costa em Campinas | Estruturas Metálicas e Portões",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Myrian Moreira da Costa? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Myrian Moreira da Costa."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Myrian Moreira da Costa para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Myrian Moreira da Costa",
    "aboutText": "Jardim Myrian Moreira da Costa é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Alphaville Campinas e Rodovia Dom Pedro. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Priscila Ferraz",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Myrian Moreira da Costa. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Myrian Moreira da Costa",
      "initials": "PF"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Myrian Moreira da Costa?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Myrian Moreira da Costa para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Myrian Moreira da Costa?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-sao-gabriel-campinas",
    "name": "Jardim São Gabriel",
    "preposition": "no",
    "title": "Serralheria no Jardim São Gabriel em Campinas",
    "metaDescription": "Serralheria no Jardim São Gabriel em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento",
    "heroTitle": "Serralheria no Jardim São Gabriel em Campinas | Portões de Correr e Grades Pesadas",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim São Gabriel? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim São Gabriel."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim São Gabriel para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim São Gabriel",
    "aboutText": "Jardim São Gabriel é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Região Sul e Rodovia Santos Dumont. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Wagner Botelho",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim São Gabriel. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim São Gabriel",
      "initials": "WB"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim São Gabriel?",
        "a": "Não! Realizamos a visita técnica no local no Jardim São Gabriel para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim São Gabriel?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-paranapanema-campinas",
    "name": "Jardim Paranapanema",
    "preposition": "no",
    "title": "Serralheria no Jardim Paranapanema em Campinas",
    "metaDescription": "Serralheria no Jardim Paranapanema em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçament",
    "heroTitle": "Serralheria no Jardim Paranapanema em Campinas | Grades Reforçadas e Soldagem",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Paranapanema? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Paranapanema."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Paranapanema para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Paranapanema",
    "aboutText": "Jardim Paranapanema é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Região do São Fernando e Proença. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Clenice Moura",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Paranapanema. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Paranapanema",
      "initials": "CM"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Paranapanema?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Paranapanema para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Paranapanema?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-formosa-campinas",
    "name": "Vila Formosa",
    "preposition": "na",
    "title": "Serralheria na Vila Formosa em Campinas",
    "metaDescription": "Serralheria na Vila Formosa em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Vila Formosa em Campinas | Portões Silenciosos e Sobrados",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Formosa? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Formosa."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Formosa para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Formosa",
    "aboutText": "Vila Formosa é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Jardim Nova Europa e Vila Marieta. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "André Bonfim",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Formosa. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Formosa",
      "initials": "AB"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Formosa?",
        "a": "Não! Realizamos a visita técnica no local na Vila Formosa para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Formosa?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-paraiso-campinas",
    "name": "Jardim Paraíso",
    "preposition": "no",
    "title": "Serralheria no Jardim Paraíso em Campinas",
    "metaDescription": "Serralheria no Jardim Paraíso em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Paraíso em Campinas | Serralheria Arquitetônica e Portões",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Paraíso? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Paraíso."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Paraíso para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Paraíso",
    "aboutText": "Jardim Paraíso é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Proença e Nova Campinas. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Carolina Faria",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Paraíso. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Paraíso",
      "initials": "CF"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Paraíso?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Paraíso para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Paraíso?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-do-trevo-campinas",
    "name": "Jardim do Trevo",
    "preposition": "no",
    "title": "Serralheria no Jardim do Trevo em Campinas",
    "metaDescription": "Serralheria no Jardim do Trevo em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim do Trevo em Campinas | Mezaninos Industriais e Grades",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim do Trevo? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim do Trevo."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim do Trevo para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim do Trevo",
    "aboutText": "Jardim do Trevo é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de atividades comerciais e serviços nas imediações de Trevo da Bosch e Rodovia Anhanguera. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Robson Teixeira",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim do Trevo. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Comercial • Jardim do Trevo",
      "initials": "RT"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim do Trevo?",
        "a": "Não! Realizamos a visita técnica no local no Jardim do Trevo para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim do Trevo?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-das-oliveiras-campinas",
    "name": "Jardim das Oliveiras",
    "preposition": "no",
    "title": "Serralheria no Jardim das Oliveiras em Campinas",
    "metaDescription": "Serralheria no Jardim das Oliveiras em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamen",
    "heroTitle": "Serralheria no Jardim das Oliveiras em Campinas | Portões Basculantes e Coberturas",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim das Oliveiras? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim das Oliveiras."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim das Oliveiras para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim das Oliveiras",
    "aboutText": "Jardim das Oliveiras é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Vila Georgina e Jardim Nova Europa. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Marilda Peixoto",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim das Oliveiras. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim das Oliveiras",
      "initials": "MP"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim das Oliveiras?",
        "a": "Não! Realizamos a visita técnica no local no Jardim das Oliveiras para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim das Oliveiras?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-sao-domingos-campinas",
    "name": "Jardim São Domingos",
    "preposition": "no",
    "title": "Serralheria no Jardim São Domingos em Campinas",
    "metaDescription": "Serralheria no Jardim São Domingos em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçament",
    "heroTitle": "Serralheria no Jardim São Domingos em Campinas | Portões Industriais e Galpões",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim São Domingos? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim São Domingos."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim São Domingos para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim São Domingos",
    "aboutText": "Jardim São Domingos é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de galpões industriais e centros de distribuição nas imediações de Complexo do Aeroporto de Viracopos. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Edilson Castro",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim São Domingos. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Industrial • Jardim São Domingos",
      "initials": "EC"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim São Domingos?",
        "a": "Não! Realizamos a visita técnica no local no Jardim São Domingos para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim São Domingos?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-sao-jose-campinas",
    "name": "Jardim São José",
    "preposition": "no",
    "title": "Serralheria no Jardim São José em Campinas",
    "metaDescription": "Serralheria no Jardim São José em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim São José em Campinas | Portões de Ferro e Soldas em Geral",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim São José? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim São José."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim São José para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim São José",
    "aboutText": "Jardim São José é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Região Sul de Campinas. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Vera Lúcia",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim São José. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim São José",
      "initials": "VL"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim São José?",
        "a": "Não! Realizamos a visita técnica no local no Jardim São José para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim São José?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-vista-alegre-campinas",
    "name": "Jardim Vista Alegre",
    "preposition": "no",
    "title": "Serralheria no Jardim Vista Alegre em Campinas",
    "metaDescription": "Serralheria no Jardim Vista Alegre em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçament",
    "heroTitle": "Serralheria no Jardim Vista Alegre em Campinas | Portas de Aço e Portões Populares",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Vista Alegre? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Vista Alegre."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Vista Alegre para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Vista Alegre",
    "aboutText": "Jardim Vista Alegre é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de atividades comerciais e serviços nas imediações de Polo Comercial do Ouro Verde. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Silvio César",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Vista Alegre. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Comercial • Jardim Vista Alegre",
      "initials": "SC"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Vista Alegre?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Vista Alegre para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Vista Alegre?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-yeda-campinas",
    "name": "Jardim Yeda",
    "preposition": "no",
    "title": "Serralheria no Jardim Yeda em Campinas",
    "metaDescription": "Serralheria no Jardim Yeda em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Yeda em Campinas | Grades de Segurança e Portões de Correr",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Yeda? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Yeda."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Yeda para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Yeda",
    "aboutText": "Jardim Yeda é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Av. Ruy Rodriguez e Ouro Verde. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Marcio Donizete",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Yeda. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Yeda",
      "initials": "MD"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Yeda?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Yeda para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Yeda?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-rossin-campinas",
    "name": "Jardim Rossin",
    "preposition": "no",
    "title": "Serralheria no Jardim Rossin em Campinas",
    "metaDescription": "Serralheria no Jardim Rossin em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Rossin em Campinas | Portões sob Medida e Grades",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Rossin? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Rossin."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Rossin para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Rossin",
    "aboutText": "Jardim Rossin é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Região do Campo Grande e Bassoli. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Ivone Carvalho",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Rossin. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Rossin",
      "initials": "IC"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Rossin?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Rossin para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Rossin?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-bassoli-campinas",
    "name": "Jardim Bassoli",
    "preposition": "no",
    "title": "Serralheria no Jardim Bassoli em Campinas",
    "metaDescription": "Serralheria no Jardim Bassoli em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Bassoli em Campinas | Portões Compactos e Grades de Janela",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Bassoli? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Bassoli."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Bassoli para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Bassoli",
    "aboutText": "Jardim Bassoli é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Complexo Residencial Campo Grande. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Nelson Ribeiro",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Bassoli. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Bassoli",
      "initials": "NR"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Bassoli?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Bassoli para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Bassoli?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-itatiaia-campinas",
    "name": "Jardim Itatiaia",
    "preposition": "no",
    "title": "Serralheria no Jardim Itatiaia em Campinas",
    "metaDescription": "Serralheria no Jardim Itatiaia em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Itatiaia em Campinas | Serralheria Fina para Sobrados",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Itatiaia? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Itatiaia."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Itatiaia para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Itatiaia",
    "aboutText": "Jardim Itatiaia é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Av. Mackenzie e Carlos Grimaldi. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Renata Campelo",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Itatiaia. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Itatiaia",
      "initials": "RC"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Itatiaia?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Itatiaia para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Itatiaia?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-santa-lucia-campinas",
    "name": "Jardim Santa Lúcia",
    "preposition": "no",
    "title": "Serralheria no Jardim Santa Lúcia em Campinas",
    "metaDescription": "Serralheria no Jardim Santa Lúcia em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento",
    "heroTitle": "Serralheria no Jardim Santa Lúcia em Campinas | Portões Automáticos e Portas de Enrolar",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Santa Lúcia? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Santa Lúcia."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Santa Lúcia para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Santa Lúcia",
    "aboutText": "Jardim Santa Lúcia é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de atividades comerciais e serviços nas imediações de Av. Ruy Rodriguez e Ouro Verde. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Leandro Macedo",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Santa Lúcia. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Comercial • Jardim Santa Lúcia",
      "initials": "LM"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Santa Lúcia?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Santa Lúcia para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Santa Lúcia?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-alvorada-campinas",
    "name": "Jardim Alvorada",
    "preposition": "no",
    "title": "Serralheria no Jardim Alvorada em Campinas",
    "metaDescription": "Serralheria no Jardim Alvorada em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Alvorada em Campinas | Portões de Correr e Coberturas",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Alvorada? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Alvorada."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Alvorada para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Alvorada",
    "aboutText": "Jardim Alvorada é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Jardim Santa Genebra e Barão Geraldo. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Joana Prado",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Alvorada. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Alvorada",
      "initials": "JP"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Alvorada?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Alvorada para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Alvorada?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-amazonas-campinas",
    "name": "Jardim Amazonas",
    "preposition": "no",
    "title": "Serralheria no Jardim Amazonas em Campinas",
    "metaDescription": "Serralheria no Jardim Amazonas em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Amazonas em Campinas | Portões Rápidos e Corrimãos",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Amazonas? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Amazonas."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Amazonas para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Amazonas",
    "aboutText": "Jardim Amazonas é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Parque Prado e Jardim Nova Europa. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Fábio Medina",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Amazonas. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Amazonas",
      "initials": "FM"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Amazonas?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Amazonas para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Amazonas?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-conceicao-campinas",
    "name": "Jardim Conceição",
    "preposition": "no",
    "title": "Serralheria no Jardim Conceição em Campinas",
    "metaDescription": "Serralheria no Jardim Conceição em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Conceição em Campinas | Portões para Chácaras e Residências",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Conceição? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Conceição."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Conceição para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Conceição",
    "aboutText": "Jardim Conceição é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Rodovia Heitor Penteado e Sousas. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Gustavo Lemos",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Conceição. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Conceição",
      "initials": "GL"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Conceição?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Conceição para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Conceição?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-maracana-campinas",
    "name": "Jardim Maracanã",
    "preposition": "no",
    "title": "Serralheria no Jardim Maracanã em Campinas",
    "metaDescription": "Serralheria no Jardim Maracanã em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Maracanã em Campinas | Portões Basculantes de Alta Segurança",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Maracanã? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Maracanã."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Maracanã para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Maracanã",
    "aboutText": "Jardim Maracanã é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Distrito do Campo Grande. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Aparecido Donizete",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Maracanã. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Maracanã",
      "initials": "AD"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Maracanã?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Maracanã para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Maracanã?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-satelite-iris-campinas",
    "name": "Jardim Satélite Íris",
    "preposition": "no",
    "title": "Serralheria no Jardim Satélite Íris em Campinas",
    "metaDescription": "Serralheria no Jardim Satélite Íris em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamen",
    "heroTitle": "Serralheria no Jardim Satélite Íris em Campinas | Portas Comerciais e Portões",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Satélite Íris? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Satélite Íris."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Satélite Íris para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Satélite Íris",
    "aboutText": "Jardim Satélite Íris é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de atividades comerciais e serviços nas imediações de Av. John Boyd Dunlop e Campo Grande. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Rosemary Lima",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Satélite Íris. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Comercial • Jardim Satélite Íris",
      "initials": "RL"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Satélite Íris?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Satélite Íris para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Satélite Íris?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-florence-campinas",
    "name": "Jardim Florence",
    "preposition": "no",
    "title": "Serralheria no Jardim Florence em Campinas",
    "metaDescription": "Serralheria no Jardim Florence em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Florence em Campinas | Portões sob Medida e Manutenções",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Florence? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Florence."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Florence para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Florence",
    "aboutText": "Jardim Florence é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Terminal Campo Grande. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Jeferson Nunes",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Florence. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Florence",
      "initials": "JN"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Florence?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Florence para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Florence?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-lisa-campinas",
    "name": "Jardim Lisa",
    "preposition": "no",
    "title": "Serralheria no Jardim Lisa em Campinas",
    "metaDescription": "Serralheria no Jardim Lisa em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Lisa em Campinas | Portões de Garagem e Grades de Sacada",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Lisa? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Lisa."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Lisa para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Lisa",
    "aboutText": "Jardim Lisa é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Região do Campo Grande. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Kelly Cristina",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Lisa. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Lisa",
      "initials": "KC"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Lisa?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Lisa para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Lisa?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-santa-rosa-campinas",
    "name": "Jardim Santa Rosa",
    "preposition": "no",
    "title": "Serralheria no Jardim Santa Rosa em Campinas",
    "metaDescription": "Serralheria no Jardim Santa Rosa em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Santa Rosa em Campinas | Portões de Aço Galvalume e Escadas",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Santa Rosa? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Santa Rosa."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Santa Rosa para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Santa Rosa",
    "aboutText": "Jardim Santa Rosa é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Região Oeste de Campinas. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Milton Vilela",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Santa Rosa. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Santa Rosa",
      "initials": "MV"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Santa Rosa?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Santa Rosa para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Santa Rosa?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-san-diego-campinas",
    "name": "Jardim San Diego",
    "preposition": "no",
    "title": "Serralheria no Jardim San Diego em Campinas",
    "metaDescription": "Serralheria no Jardim San Diego em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim San Diego em Campinas | Portões Deslizantes para Vãos Grandes",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim San Diego? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim San Diego."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim San Diego para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim San Diego",
    "aboutText": "Jardim San Diego é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Região do Campo Belo e Viracopos. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Osvaldo Maia",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim San Diego. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim San Diego",
      "initials": "OM"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim San Diego?",
        "a": "Não! Realizamos a visita técnica no local no Jardim San Diego para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim San Diego?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-aeroporto-campinas",
    "name": "Jardim Aeroporto",
    "preposition": "no",
    "title": "Serralheria no Jardim Aeroporto em Campinas",
    "metaDescription": "Serralheria no Jardim Aeroporto em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Aeroporto em Campinas | Portas de Aço e Mezaninos de Estoque",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Aeroporto? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Aeroporto."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Aeroporto para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Aeroporto",
    "aboutText": "Jardim Aeroporto é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de galpões industriais e centros de distribuição nas imediações de Polo Logístico de Viracopos. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Luciano Esteves",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Aeroporto. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Industrial • Jardim Aeroporto",
      "initials": "LE"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Aeroporto?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Aeroporto para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Aeroporto?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-do-vovo-campinas",
    "name": "Jardim do Vovô",
    "preposition": "no",
    "title": "Serralheria no Jardim do Vovô em Campinas",
    "metaDescription": "Serralheria no Jardim do Vovô em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim do Vovô em Campinas | Portões Eletrônicos e Coberturas",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim do Vovô? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim do Vovô."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim do Vovô para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim do Vovô",
    "aboutText": "Jardim do Vovô é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Jardim Eulina e Rodovia Anhanguera. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Neusa Marcondes",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim do Vovô. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim do Vovô",
      "initials": "NM"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim do Vovô?",
        "a": "Não! Realizamos a visita técnica no local no Jardim do Vovô para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim do Vovô?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-primavera-campinas",
    "name": "Jardim Primavera",
    "preposition": "no",
    "title": "Serralheria no Jardim Primavera em Campinas",
    "metaDescription": "Serralheria no Jardim Primavera em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Primavera em Campinas | Serralheria Fina e Portões Elegantes",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Primavera? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Primavera."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Primavera para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Primavera",
    "aboutText": "Jardim Primavera é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Região Leste e Alphaville. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Vinícius Paes",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Primavera. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Primavera",
      "initials": "VP"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Primavera?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Primavera para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Primavera?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-sao-marcos-campinas",
    "name": "Jardim São Marcos",
    "preposition": "no",
    "title": "Serralheria no Jardim São Marcos em Campinas",
    "metaDescription": "Serralheria no Jardim São Marcos em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim São Marcos em Campinas | Portões com Contrapeso e Soldas",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim São Marcos? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim São Marcos."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim São Marcos para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim São Marcos",
    "aboutText": "Jardim São Marcos é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Rodovia Zeferino Vaz e Campineiro. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Djalma Silvano",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim São Marcos. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim São Marcos",
      "initials": "DS"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim São Marcos?",
        "a": "Não! Realizamos a visita técnica no local no Jardim São Marcos para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim São Marcos?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-santa-genebra-campinas",
    "name": "Jardim Santa Genebra",
    "preposition": "no",
    "title": "Serralheria no Jardim Santa Genebra em Campinas",
    "metaDescription": "Serralheria no Jardim Santa Genebra em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamen",
    "heroTitle": "Serralheria no Jardim Santa Genebra em Campinas | Portões Modernos e Guarda-Corpos",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Santa Genebra? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Santa Genebra."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Santa Genebra para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Santa Genebra",
    "aboutText": "Jardim Santa Genebra é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Mata de Santa Genebra e Shopping Dom Pedro. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Sabrina Fontes",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Santa Genebra. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Santa Genebra",
      "initials": "SF"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Santa Genebra?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Santa Genebra para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Santa Genebra?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-chacara-santa-margarida-campinas",
    "name": "Chácara Santa Margarida",
    "preposition": "na",
    "title": "Serralheria na Chácara Santa Margarida em Campinas",
    "metaDescription": "Serralheria na Chácara Santa Margarida em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orça",
    "heroTitle": "Serralheria na Chácara Santa Margarida em Campinas | Portões de Grande Porte para Chácaras",
    "heroSubtitle": "Procurando por serralheiro experiente na Chácara Santa Margarida? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Chácara Santa Margarida."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Chácara Santa Margarida para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Chácara Santa Margarida",
    "aboutText": "Chácara Santa Margarida é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de chácaras de lazer e residências amplas nas imediações de Barão Geraldo e Polo Tecnológico. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Danilo Guedes",
      "text": "Excelente trabalho executado pela Precisão Metal na Chácara Santa Margarida. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Chácara • Chácara Santa Margarida",
      "initials": "DG"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Chácara Santa Margarida?",
        "a": "Não! Realizamos a visita técnica no local na Chácara Santa Margarida para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Chácara Santa Margarida?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-em-joaquim-egidio-campinas",
    "name": "Joaquim Egídio",
    "preposition": "em",
    "title": "Serralheria em Joaquim Egídio em Campinas",
    "metaDescription": "Serralheria em Joaquim Egídio em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria em Joaquim Egídio em Campinas | Serralheria Artística e de Alto Padrão",
    "heroSubtitle": "Procurando por serralheiro experiente em Joaquim Egídio? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas em Joaquim Egídio."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita em Joaquim Egídio para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas em Joaquim Egídio",
    "aboutText": "Joaquim Egídio é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Distrito Histórico e Gastronômico de Campinas. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Rodrigo Nogueira",
      "text": "Excelente trabalho executado pela Precisão Metal em Joaquim Egídio. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Joaquim Egídio",
      "initials": "RN"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento em Joaquim Egídio?",
        "a": "Não! Realizamos a visita técnica no local em Joaquim Egídio para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão em Joaquim Egídio?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-em-betel-campinas",
    "name": "Betel",
    "preposition": "em",
    "title": "Serralheria em Betel em Campinas",
    "metaDescription": "Serralheria em Betel em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria em Betel em Campinas | Guarda-Corpos e Portões de Alta Velocidade",
    "heroSubtitle": "Procurando por serralheiro experiente em Betel? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas em Betel."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita em Betel para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas em Betel",
    "aboutText": "Betel é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Condomínios de Barão Geraldo e Paulínia. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Tatiane Lourenço",
      "text": "Excelente trabalho executado pela Precisão Metal em Betel. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Betel",
      "initials": "TL"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento em Betel?",
        "a": "Não! Realizamos a visita técnica no local em Betel para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão em Betel?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-real-parque-campinas",
    "name": "Real Parque",
    "preposition": "no",
    "title": "Serralheria no Real Parque em Campinas",
    "metaDescription": "Serralheria no Real Parque em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Real Parque em Campinas | Serralheria Contemporânea e Coberturas",
    "heroSubtitle": "Procurando por serralheiro experiente no Real Parque? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Real Parque."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Real Parque para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Real Parque",
    "aboutText": "Real Parque é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Barão Geraldo e Unicamp. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Murilo Camargo",
      "text": "Excelente trabalho executado pela Precisão Metal no Real Parque. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Real Parque",
      "initials": "MC"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Real Parque?",
        "a": "Não! Realizamos a visita técnica no local no Real Parque para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Real Parque?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-cidade-universitaria-campinas",
    "name": "Cidade Universitária",
    "preposition": "na",
    "title": "Serralheria na Cidade Universitária em Campinas",
    "metaDescription": "Serralheria na Cidade Universitária em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamen",
    "heroTitle": "Serralheria na Cidade Universitária em Campinas | Grades de Proteção e Portões Sociais",
    "heroSubtitle": "Procurando por serralheiro experiente na Cidade Universitária? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Cidade Universitária."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Cidade Universitária para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Cidade Universitária",
    "aboutText": "Cidade Universitária é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Campus da Unicamp e Barão Geraldo. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Guilherme Basso",
      "text": "Excelente trabalho executado pela Precisão Metal na Cidade Universitária. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Cidade Universitária",
      "initials": "GB"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Cidade Universitária?",
        "a": "Não! Realizamos a visita técnica no local na Cidade Universitária para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Cidade Universitária?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-parque-ceasa-campinas",
    "name": "Parque Ceasa",
    "preposition": "no",
    "title": "Serralheria no Parque Ceasa em Campinas",
    "metaDescription": "Serralheria no Parque Ceasa em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Parque Ceasa em Campinas | Mezaninos de Carga e Portas Industriais",
    "heroSubtitle": "Procurando por serralheiro experiente no Parque Ceasa? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Parque Ceasa."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Parque Ceasa para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Parque Ceasa",
    "aboutText": "Parque Ceasa é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de galpões industriais e centros de distribuição nas imediações de Ceasa Campinas e Rodovia Dom Pedro. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Valter Meneghetti",
      "text": "Excelente trabalho executado pela Precisão Metal no Parque Ceasa. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Industrial • Parque Ceasa",
      "initials": "VM"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Parque Ceasa?",
        "a": "Não! Realizamos a visita técnica no local no Parque Ceasa para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Parque Ceasa?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-uniao-campinas",
    "name": "Vila União",
    "preposition": "na",
    "title": "Serralheria na Vila União em Campinas",
    "metaDescription": "Serralheria na Vila União em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Vila União em Campinas | Portões Residenciais e Portas Comerciais",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila União? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila União."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila União para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila União",
    "aboutText": "Vila União é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de atividades comerciais e serviços nas imediações de Av. Ruy Rodriguez e Carlos Lacerda. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Sebastião Correa",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila União. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Comercial • Vila União",
      "initials": "SC"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila União?",
        "a": "Não! Realizamos a visita técnica no local na Vila União para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila União?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-mimosa-campinas",
    "name": "Vila Mimosa",
    "preposition": "na",
    "title": "Serralheria na Vila Mimosa em Campinas",
    "metaDescription": "Serralheria na Vila Mimosa em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Vila Mimosa em Campinas | Portões Basculantes e Coberturas",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Mimosa? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Mimosa."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Mimosa para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Mimosa",
    "aboutText": "Vila Mimosa é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Amoreiras e São Bernardo. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Denise Valim",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Mimosa. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Mimosa",
      "initials": "DV"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Mimosa?",
        "a": "Não! Realizamos a visita técnica no local na Vila Mimosa para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Mimosa?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-castelo-branco-campinas",
    "name": "Vila Castelo Branco",
    "preposition": "na",
    "title": "Serralheria na Vila Castelo Branco em Campinas",
    "metaDescription": "Serralheria na Vila Castelo Branco em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçament",
    "heroTitle": "Serralheria na Vila Castelo Branco em Campinas | Portões Automáticos e Grades de Proteção",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Castelo Branco? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Castelo Branco."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Castelo Branco para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Castelo Branco",
    "aboutText": "Vila Castelo Branco é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Balão do Londres e Jardim Garcia. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Moacir Peçanha",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Castelo Branco. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Castelo Branco",
      "initials": "MP"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Castelo Branco?",
        "a": "Não! Realizamos a visita técnica no local na Vila Castelo Branco para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Castelo Branco?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-georgina-campinas",
    "name": "Vila Georgina",
    "preposition": "na",
    "title": "Serralheria na Vila Georgina em Campinas",
    "metaDescription": "Serralheria na Vila Georgina em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Vila Georgina em Campinas | Portões Rápidos e Corrimãos de Escada",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Georgina? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Georgina."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Georgina para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Georgina",
    "aboutText": "Vila Georgina é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Av. Saudade e Nova Europa. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Simone Zanetti",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Georgina. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Georgina",
      "initials": "SZ"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Georgina?",
        "a": "Não! Realizamos a visita técnica no local na Vila Georgina para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Georgina?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-pompeia-campinas",
    "name": "Vila Pompeia",
    "preposition": "na",
    "title": "Serralheria na Vila Pompeia em Campinas",
    "metaDescription": "Serralheria na Vila Pompeia em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Vila Pompeia em Campinas | Portões Eletrônicos e Grades Decorativas",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Pompeia? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Pompeia."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Pompeia para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Pompeia",
    "aboutText": "Vila Pompeia é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Jardim Pauliceia e Vila Teixeira. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Otávio Bernardes",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Pompeia. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Pompeia",
      "initials": "OB"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Pompeia?",
        "a": "Não! Realizamos a visita técnica no local na Vila Pompeia para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Pompeia?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-brandina-campinas",
    "name": "Vila Brandina",
    "preposition": "na",
    "title": "Serralheria na Vila Brandina em Campinas",
    "metaDescription": "Serralheria na Vila Brandina em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Vila Brandina em Campinas | Serralheria Fina para Condomínios de Luxo",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Brandina? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Brandina."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Brandina para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Brandina",
    "aboutText": "Vila Brandina é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Galleria Shopping e Shopping Iguatemi. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Patrícia Mansur",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Brandina. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Brandina",
      "initials": "PM"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Brandina?",
        "a": "Não! Realizamos a visita técnica no local na Vila Brandina para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Brandina?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-rica-campinas",
    "name": "Vila Rica",
    "preposition": "na",
    "title": "Serralheria na Vila Rica em Campinas",
    "metaDescription": "Serralheria na Vila Rica em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Vila Rica em Campinas | Portões de Aço Galvanizado e Soldas",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Rica? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Rica."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Rica para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Rica",
    "aboutText": "Vila Rica é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Novo Campos Elíseos e Amoreiras. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Claudinei Gomes",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Rica. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Rica",
      "initials": "CG"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Rica?",
        "a": "Não! Realizamos a visita técnica no local na Vila Rica para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Rica?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-marieta-campinas",
    "name": "Vila Marieta",
    "preposition": "na",
    "title": "Serralheria na Vila Marieta em Campinas",
    "metaDescription": "Serralheria na Vila Marieta em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Vila Marieta em Campinas | Portões Silenciosos e Corrimãos",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Marieta? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Marieta."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Marieta para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Marieta",
    "aboutText": "Vila Marieta é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Jardim Leonor e Ponte Preta. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Gisela Silveira",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Marieta. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Marieta",
      "initials": "GS"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Marieta?",
        "a": "Não! Realizamos a visita técnica no local na Vila Marieta para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Marieta?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-nogueira-campinas",
    "name": "Vila Nogueira",
    "preposition": "na",
    "title": "Serralheria na Vila Nogueira em Campinas",
    "metaDescription": "Serralheria na Vila Nogueira em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Vila Nogueira em Campinas | Portões com Tratamento Fosfatizante",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Nogueira? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Nogueira."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Nogueira para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Nogueira",
    "aboutText": "Vila Nogueira é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Taquaral e Mansões Santo Antônio. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Clóvis Ramalho",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Nogueira. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Nogueira",
      "initials": "CR"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Nogueira?",
        "a": "Não! Realizamos a visita técnica no local na Vila Nogueira para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Nogueira?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-costa-e-silva-campinas",
    "name": "Vila Costa e Silva",
    "preposition": "na",
    "title": "Serralheria na Vila Costa e Silva em Campinas",
    "metaDescription": "Serralheria na Vila Costa e Silva em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento",
    "heroTitle": "Serralheria na Vila Costa e Silva em Campinas | Portões Automáticos Rápidos e Sacadas",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Costa e Silva? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Costa e Silva."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Costa e Silva para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Costa e Silva",
    "aboutText": "Vila Costa e Silva é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Balão do Timbó e Taquaral. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Magda Fontanelli",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Costa e Silva. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Costa e Silva",
      "initials": "MF"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Costa e Silva?",
        "a": "Não! Realizamos a visita técnica no local na Vila Costa e Silva para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Costa e Silva?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-padre-anchieta-campinas",
    "name": "Vila Padre Anchieta",
    "preposition": "na",
    "title": "Serralheria na Vila Padre Anchieta em Campinas",
    "metaDescription": "Serralheria na Vila Padre Anchieta em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçament",
    "heroTitle": "Serralheria na Vila Padre Anchieta em Campinas | Portões Basculantes e Segurança Residencial",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Padre Anchieta? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Padre Anchieta."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Padre Anchieta para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Padre Anchieta",
    "aboutText": "Vila Padre Anchieta é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Distrito de Nova Aparecida. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Benedito Assis",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Padre Anchieta. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Padre Anchieta",
      "initials": "BA"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Padre Anchieta?",
        "a": "Não! Realizamos a visita técnica no local na Vila Padre Anchieta para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Padre Anchieta?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-nova-esperanca-campinas",
    "name": "Vila Nova Esperança",
    "preposition": "na",
    "title": "Serralheria na Vila Nova Esperança em Campinas",
    "metaDescription": "Serralheria na Vila Nova Esperança em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçament",
    "heroTitle": "Serralheria na Vila Nova Esperança em Campinas | Serralheria Direto de Fábrica com Prontidão",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Nova Esperança? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Nova Esperança."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Nova Esperança para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Nova Esperança",
    "aboutText": "Vila Nova Esperança é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Av. John Boyd Dunlop e Sede Local. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Elizabete Rios",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Nova Esperança. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Nova Esperança",
      "initials": "ER"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Nova Esperança?",
        "a": "Não! Realizamos a visita técnica no local na Vila Nova Esperança para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Nova Esperança?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-boa-vista-campinas",
    "name": "Vila Boa Vista",
    "preposition": "na",
    "title": "Serralheria na Vila Boa Vista em Campinas",
    "metaDescription": "Serralheria na Vila Boa Vista em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Vila Boa Vista em Campinas | Coberturas de Garagem e Portões",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Boa Vista? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Boa Vista."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Boa Vista para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Boa Vista",
    "aboutText": "Vila Boa Vista é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Rodovia Anhanguera e Padre Anchieta. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Geraldo Motta",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Boa Vista. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Boa Vista",
      "initials": "GM"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Boa Vista?",
        "a": "Não! Realizamos a visita técnica no local na Vila Boa Vista para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Boa Vista?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-aeroporto-campinas",
    "name": "Vila Aeroporto",
    "preposition": "na",
    "title": "Serralheria na Vila Aeroporto em Campinas",
    "metaDescription": "Serralheria na Vila Aeroporto em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Vila Aeroporto em Campinas | Estruturas Metálicas para Depósitos",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Aeroporto? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Aeroporto."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Aeroporto para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Aeroporto",
    "aboutText": "Vila Aeroporto é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de galpões industriais e centros de distribuição nas imediações de Adjacências do Aeroporto de Viracopos. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Antônio Carlos",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Aeroporto. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Industrial • Vila Aeroporto",
      "initials": "AC"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Aeroporto?",
        "a": "Não! Realizamos a visita técnica no local na Vila Aeroporto para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Aeroporto?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-renascenca-campinas",
    "name": "Vila Renascença",
    "preposition": "na",
    "title": "Serralheria na Vila Renascença em Campinas",
    "metaDescription": "Serralheria na Vila Renascença em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria na Vila Renascença em Campinas | Portões Eletrônicos e Grades Tubulares",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Renascença? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Renascença."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Renascença para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Renascença",
    "aboutText": "Vila Renascença é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Jardim Santa Genebra e Rodovia D. Pedro. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Cátia Regina",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Renascença. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Renascença",
      "initials": "CR"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Renascença?",
        "a": "Não! Realizamos a visita técnica no local na Vila Renascença para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Renascença?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-parque-industrial-campinas",
    "name": "Parque Industrial",
    "preposition": "no",
    "title": "Serralheria no Parque Industrial em Campinas",
    "metaDescription": "Serralheria no Parque Industrial em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Parque Industrial em Campinas | Mezaninos de Ferro e Portões de Correr",
    "heroSubtitle": "Procurando por serralheiro experiente no Parque Industrial? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Parque Industrial."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Parque Industrial para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Parque Industrial",
    "aboutText": "Parque Industrial é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de atividades comerciais e serviços nas imediações de Região Oeste e São Bernardo. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Everaldo Santos",
      "text": "Excelente trabalho executado pela Precisão Metal no Parque Industrial. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Comercial • Parque Industrial",
      "initials": "ES"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Parque Industrial?",
        "a": "Não! Realizamos a visita técnica no local no Parque Industrial para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Parque Industrial?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-parque-sao-quirino-campinas",
    "name": "Parque São Quirino",
    "preposition": "no",
    "title": "Serralheria no Parque São Quirino em Campinas",
    "metaDescription": "Serralheria no Parque São Quirino em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento",
    "heroTitle": "Serralheria no Parque São Quirino em Campinas | Portões Basculantes e Coberturas",
    "heroSubtitle": "Procurando por serralheiro experiente no Parque São Quirino? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Parque São Quirino."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Parque São Quirino para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Parque São Quirino",
    "aboutText": "Parque São Quirino é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Região do Taquaral e Rodovia D. Pedro. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Helena Duarte",
      "text": "Excelente trabalho executado pela Precisão Metal no Parque São Quirino. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Parque São Quirino",
      "initials": "HD"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Parque São Quirino?",
        "a": "Não! Realizamos a visita técnica no local no Parque São Quirino para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Parque São Quirino?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-parque-brasilia-campinas",
    "name": "Parque Brasília",
    "preposition": "no",
    "title": "Serralheria no Parque Brasília em Campinas",
    "metaDescription": "Serralheria no Parque Brasília em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Parque Brasília em Campinas | Portões com Chapa Veneziana e Grades",
    "heroSubtitle": "Procurando por serralheiro experiente no Parque Brasília? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Parque Brasília."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Parque Brasília para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Parque Brasília",
    "aboutText": "Parque Brasília é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Jardim Flamboyant e Shopping Iguatemi. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Breno Alencar",
      "text": "Excelente trabalho executado pela Precisão Metal no Parque Brasília. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Parque Brasília",
      "initials": "BA"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Parque Brasília?",
        "a": "Não! Realizamos a visita técnica no local no Parque Brasília para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Parque Brasília?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-parque-via-norte-campinas",
    "name": "Parque Via Norte",
    "preposition": "no",
    "title": "Serralheria no Parque Via Norte em Campinas",
    "metaDescription": "Serralheria no Parque Via Norte em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Parque Via Norte em Campinas | Portões Silenciosos para Condomínios",
    "heroSubtitle": "Procurando por serralheiro experiente no Parque Via Norte? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Parque Via Norte."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Parque Via Norte para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Parque Via Norte",
    "aboutText": "Parque Via Norte é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Rodovia Anhanguera e Eixo Norte. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Vanessa Furlan",
      "text": "Excelente trabalho executado pela Precisão Metal no Parque Via Norte. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Parque Via Norte",
      "initials": "VF"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Parque Via Norte?",
        "a": "Não! Realizamos a visita técnica no local no Parque Via Norte para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Parque Via Norte?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-parque-jambeiro-campinas",
    "name": "Parque Jambeiro",
    "preposition": "no",
    "title": "Serralheria no Parque Jambeiro em Campinas",
    "metaDescription": "Serralheria no Parque Jambeiro em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Parque Jambeiro em Campinas | Portões Modernos e Coberturas Gourmet",
    "heroSubtitle": "Procurando por serralheiro experiente no Parque Jambeiro? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Parque Jambeiro."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Parque Jambeiro para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Parque Jambeiro",
    "aboutText": "Parque Jambeiro é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Parque Prado e Parque das Águas. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Henrique Viana",
      "text": "Excelente trabalho executado pela Precisão Metal no Parque Jambeiro. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Parque Jambeiro",
      "initials": "HV"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Parque Jambeiro?",
        "a": "Não! Realizamos a visita técnica no local no Parque Jambeiro para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Parque Jambeiro?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-parque-floresta-campinas",
    "name": "Parque Floresta",
    "preposition": "no",
    "title": "Serralheria no Parque Floresta em Campinas",
    "metaDescription": "Serralheria no Parque Floresta em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Parque Floresta em Campinas | Portões sob Medida e Grades Reforçadas",
    "heroSubtitle": "Procurando por serralheiro experiente no Parque Floresta? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Parque Floresta."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Parque Floresta para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Parque Floresta",
    "aboutText": "Parque Floresta é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Região do Campo Grande. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Zuleica Prado",
      "text": "Excelente trabalho executado pela Precisão Metal no Parque Floresta. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Parque Floresta",
      "initials": "ZP"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Parque Floresta?",
        "a": "Não! Realizamos a visita técnica no local no Parque Floresta para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Parque Floresta?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-parque-dom-pedro-ii-campinas",
    "name": "Parque Dom Pedro II",
    "preposition": "no",
    "title": "Serralheria no Parque Dom Pedro II em Campinas",
    "metaDescription": "Serralheria no Parque Dom Pedro II em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçament",
    "heroTitle": "Serralheria no Parque Dom Pedro II em Campinas | Portões Basculantes e Proteção Perimetral",
    "heroSubtitle": "Procurando por serralheiro experiente no Parque Dom Pedro II? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Parque Dom Pedro II."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Parque Dom Pedro II para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Parque Dom Pedro II",
    "aboutText": "Parque Dom Pedro II é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Região do Ouro Verde. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Anselmo Dias",
      "text": "Excelente trabalho executado pela Precisão Metal no Parque Dom Pedro II. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Parque Dom Pedro II",
      "initials": "AD"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Parque Dom Pedro II?",
        "a": "Não! Realizamos a visita técnica no local no Parque Dom Pedro II para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Parque Dom Pedro II?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-dic-i-campinas",
    "name": "DIC I",
    "preposition": "no",
    "title": "Serralheria no DIC I em Campinas",
    "metaDescription": "Serralheria no DIC I em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no DIC I em Campinas | Portões em Galvalume e Grades Acessíveis",
    "heroSubtitle": "Procurando por serralheiro experiente no DIC I? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no DIC I."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no DIC I para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no DIC I",
    "aboutText": "DIC I é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Conjunto Habitacional Monsenhor Abreu. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Marlene Batista",
      "text": "Excelente trabalho executado pela Precisão Metal no DIC I. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • DIC I",
      "initials": "MB"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no DIC I?",
        "a": "Não! Realizamos a visita técnica no local no DIC I para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no DIC I?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-dic-ii-campinas",
    "name": "DIC II",
    "preposition": "no",
    "title": "Serralheria no DIC II em Campinas",
    "metaDescription": "Serralheria no DIC II em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no DIC II em Campinas | Portas de Enrolar e Portões de Garagem",
    "heroSubtitle": "Procurando por serralheiro experiente no DIC II? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no DIC II."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no DIC II para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no DIC II",
    "aboutText": "DIC II é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de atividades comerciais e serviços nas imediações de Av. Suaçuna e Ouro Verde. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Valmir Siqueira",
      "text": "Excelente trabalho executado pela Precisão Metal no DIC II. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Comercial • DIC II",
      "initials": "VS"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no DIC II?",
        "a": "Não! Realizamos a visita técnica no local no DIC II para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no DIC II?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-dic-iii-campinas",
    "name": "DIC III",
    "preposition": "no",
    "title": "Serralheria no DIC III em Campinas",
    "metaDescription": "Serralheria no DIC III em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no DIC III em Campinas | Portões Balanceados e Troca de Roldanas",
    "heroSubtitle": "Procurando por serralheiro experiente no DIC III? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no DIC III."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no DIC III para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no DIC III",
    "aboutText": "DIC III é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Polo Residencial dos DICs. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Roseli Santana",
      "text": "Excelente trabalho executado pela Precisão Metal no DIC III. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • DIC III",
      "initials": "RS"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no DIC III?",
        "a": "Não! Realizamos a visita técnica no local no DIC III para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no DIC III?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-dic-iv-campinas",
    "name": "DIC IV",
    "preposition": "no",
    "title": "Serralheria no DIC IV em Campinas",
    "metaDescription": "Serralheria no DIC IV em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no DIC IV em Campinas | Portões Automáticos Rápidos e Sacadas",
    "heroSubtitle": "Procurando por serralheiro experiente no DIC IV? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no DIC IV."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no DIC IV para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no DIC IV",
    "aboutText": "DIC IV é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Região do Ouro Verde. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Cícero Alves",
      "text": "Excelente trabalho executado pela Precisão Metal no DIC IV. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • DIC IV",
      "initials": "CA"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no DIC IV?",
        "a": "Não! Realizamos a visita técnica no local no DIC IV para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no DIC IV?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-dic-v-campinas",
    "name": "DIC V",
    "preposition": "no",
    "title": "Serralheria no DIC V em Campinas",
    "metaDescription": "Serralheria no DIC V em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no DIC V em Campinas | Portões de Fácil Manuseio e Grades Tubulares",
    "heroSubtitle": "Procurando por serralheiro experiente no DIC V? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no DIC V."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no DIC V para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no DIC V",
    "aboutText": "DIC V é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Av. Embu-Guaçu e Ouro Verde. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Ailton Pereira",
      "text": "Excelente trabalho executado pela Precisão Metal no DIC V. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • DIC V",
      "initials": "AP"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no DIC V?",
        "a": "Não! Realizamos a visita técnica no local no DIC V para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no DIC V?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-dic-vi-campinas",
    "name": "DIC VI",
    "preposition": "no",
    "title": "Serralheria no DIC VI em Campinas",
    "metaDescription": "Serralheria no DIC VI em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no DIC VI em Campinas | Portões de Correr e Proteção Residencial",
    "heroSubtitle": "Procurando por serralheiro experiente no DIC VI? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no DIC VI."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no DIC VI para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no DIC VI",
    "aboutText": "DIC VI é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Bairro Residencial dos DICs. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Noêmia Franco",
      "text": "Excelente trabalho executado pela Precisão Metal no DIC VI. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • DIC VI",
      "initials": "NF"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no DIC VI?",
        "a": "Não! Realizamos a visita técnica no local no DIC VI para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no DIC VI?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-recanto-dos-dourados-campinas",
    "name": "Recanto dos Dourados",
    "preposition": "no",
    "title": "Serralheria no Recanto dos Dourados em Campinas",
    "metaDescription": "Serralheria no Recanto dos Dourados em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamen",
    "heroTitle": "Serralheria no Recanto dos Dourados em Campinas | Portões Monumentais para Chácaras",
    "heroSubtitle": "Procurando por serralheiro experiente no Recanto dos Dourados? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Recanto dos Dourados."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Recanto dos Dourados para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Recanto dos Dourados",
    "aboutText": "Recanto dos Dourados é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de chácaras de lazer e residências amplas nas imediações de Distrito de Sousas e Área Rural. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Joaquim Beltrão",
      "text": "Excelente trabalho executado pela Precisão Metal no Recanto dos Dourados. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Chácara • Recanto dos Dourados",
      "initials": "JB"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Recanto dos Dourados?",
        "a": "Não! Realizamos a visita técnica no local no Recanto dos Dourados para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Recanto dos Dourados?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-swiss-park-campinas",
    "name": "Swiss Park",
    "preposition": "no",
    "title": "Serralheria no Swiss Park em Campinas",
    "metaDescription": "Serralheria no Swiss Park em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Swiss Park em Campinas | Serralheria Fina de Alto Luxo para Condomínios",
    "heroSubtitle": "Procurando por serralheiro experiente no Swiss Park? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Swiss Park."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Swiss Park para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Swiss Park",
    "aboutText": "Swiss Park é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Complexo de Residenciais Fechados Anhanguera. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Marcelo Bittencourt",
      "text": "Excelente trabalho executado pela Precisão Metal no Swiss Park. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Swiss Park",
      "initials": "MB"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Swiss Park?",
        "a": "Não! Realizamos a visita técnica no local no Swiss Park para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Swiss Park?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-alphaville-campinas-campinas",
    "name": "Alphaville Campinas",
    "preposition": "no",
    "title": "Serralheria no Alphaville Campinas em Campinas",
    "metaDescription": "Serralheria no Alphaville Campinas em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçament",
    "heroTitle": "Serralheria no Alphaville Campinas em Campinas | Metalurgia Nobre e Guarda-Corpos de Luxo",
    "heroSubtitle": "Procurando por serralheiro experiente no Alphaville Campinas? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Alphaville Campinas."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Alphaville Campinas para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Alphaville Campinas",
    "aboutText": "Alphaville Campinas é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Rodovia Campinas-Mogi e Alto Luxo. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Eduardo Paiva",
      "text": "Excelente trabalho executado pela Precisão Metal no Alphaville Campinas. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Alphaville Campinas",
      "initials": "EP"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Alphaville Campinas?",
        "a": "Não! Realizamos a visita técnica no local no Alphaville Campinas para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Alphaville Campinas?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-jardim-botanico-campinas",
    "name": "Jardim Botânico",
    "preposition": "no",
    "title": "Serralheria no Jardim Botânico em Campinas",
    "metaDescription": "Serralheria no Jardim Botânico em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Jardim Botânico em Campinas | Projetos Exclusivos em Metal e Vidro",
    "heroSubtitle": "Procurando por serralheiro experiente no Jardim Botânico? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Jardim Botânico."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Jardim Botânico para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Jardim Botânico",
    "aboutText": "Jardim Botânico é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Condomínios de Sousas e Área Verde. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Giovanna Rossi",
      "text": "Excelente trabalho executado pela Precisão Metal no Jardim Botânico. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Jardim Botânico",
      "initials": "GR"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Jardim Botânico?",
        "a": "Não! Realizamos a visita técnica no local no Jardim Botânico para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Jardim Botânico?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-vale-das-garcas-campinas",
    "name": "Vale das Garças",
    "preposition": "no",
    "title": "Serralheria no Vale das Garças em Campinas",
    "metaDescription": "Serralheria no Vale das Garças em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamento!",
    "heroTitle": "Serralheria no Vale das Garças em Campinas | Portões de Grandes Vãos e Coberturas",
    "heroSubtitle": "Procurando por serralheiro experiente no Vale das Garças? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Vale das Garças."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Vale das Garças para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Vale das Garças",
    "aboutText": "Vale das Garças é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de chácaras de lazer e residências amplas nas imediações de Região de Chácaras em Barão Geraldo. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Alceu Marcondes",
      "text": "Excelente trabalho executado pela Precisão Metal no Vale das Garças. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Chácara • Vale das Garças",
      "initials": "AM"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Vale das Garças?",
        "a": "Não! Realizamos a visita técnica no local no Vale das Garças para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Vale das Garças?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-no-bosque-das-palmeiras-campinas",
    "name": "Bosque das Palmeiras",
    "preposition": "no",
    "title": "Serralheria no Bosque das Palmeiras em Campinas",
    "metaDescription": "Serralheria no Bosque das Palmeiras em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu orçamen",
    "heroTitle": "Serralheria no Bosque das Palmeiras em Campinas | Serralheria Residencial de Alto Nível",
    "heroSubtitle": "Procurando por serralheiro experiente no Bosque das Palmeiras? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas no Bosque das Palmeiras."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita no Bosque das Palmeiras para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas no Bosque das Palmeiras",
    "aboutText": "Bosque das Palmeiras é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Barão Geraldo e Santa Genebra. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Milena Queiroz",
      "text": "Excelente trabalho executado pela Precisão Metal no Bosque das Palmeiras. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Bosque das Palmeiras",
      "initials": "MQ"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento no Bosque das Palmeiras?",
        "a": "Não! Realizamos a visita técnica no local no Bosque das Palmeiras para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão no Bosque das Palmeiras?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  },
  {
    "slug": "serralheria-na-vila-perseu-leite-de-barros-campinas",
    "name": "Vila Perseu Leite de Barros",
    "preposition": "na",
    "title": "Serralheria na Vila Perseu Leite de Barros em Campinas",
    "metaDescription": "Serralheria na Vila Perseu Leite de Barros em Campinas sob medida. Fabricação de portões basculantes rápidos, grades e estruturas com aço galvanizado. Peça seu ",
    "heroTitle": "Serralheria na Vila Perseu Leite de Barros em Campinas | Portões Basculantes e Reforma de Solda",
    "heroSubtitle": "Procurando por serralheiro experiente na Vila Perseu Leite de Barros? A Precisão Metal oferece fabricação própria de portões automáticos, estruturas de mezaninos, corrimãos e grades com garantia de durabilidade e solda de alta performance.",
    "diferenciais": [
      {
        "emoji": "🛡️",
        "title": "Aço Galvalume Certificado",
        "description": "Perfis de alta espessura e resistência mecânica superior contra intempéries climáticas na Vila Perseu Leite de Barros."
      },
      {
        "emoji": "⚡",
        "title": "Medição Rápida sem Custo",
        "description": "Agendamos vistoria técnica gratuita na Vila Perseu Leite de Barros para medição do vão e envio de orçamento em menos de 24 horas."
      },
      {
        "emoji": "📜",
        "title": "Garantia de 5 Anos",
        "description": "Compromisso total de durabilidade por escrito na integridade das soldas e estrutura do seu projeto metálico."
      }
    ],
    "aboutTitle": "Serralheria sob Medida e Estruturas Metálicas na Vila Perseu Leite de Barros",
    "aboutText": "Vila Perseu Leite de Barros é um bairro tradicional e de destaque na cidade de Campinas, com forte presença de residências familiares e condomínios nas imediações de Jardim Londres e John Boyd Dunlop. A Precisão Metal atua na região projetando e fabricando portões automáticos basculantes e de correr, grades de segurança reforçadas com tratamento antiferrugem, corrimãos e coberturas metálicas sob medida. Nosso compromisso é entregar solidez estrutural, acabamento de primeira linha e garantia técnica de fábrica para valorizar seu imóvel.",
    "testimonial": {
      "name": "Wilson Gouveia",
      "text": "Excelente trabalho executado pela Precisão Metal na Vila Perseu Leite de Barros. O portão novo e as proteções ficaram impecáveis, alinhamento perfeito e atendimento nota dez!",
      "type": "Residencial • Vila Perseu Leite de Barros",
      "initials": "WG"
    },
    "faqs": [
      {
        "q": "Vocês cobram taxa para orçamento na Vila Perseu Leite de Barros?",
        "a": "Não! Realizamos a visita técnica no local na Vila Perseu Leite de Barros para tirar medidas e fazer o projeto sem cobrar absolutamente nada."
      },
      {
        "q": "Qual o prazo médio de instalação para um portão na Vila Perseu Leite de Barros?",
        "a": "A fabricação leva entre 7 e 15 dias úteis em nossa oficina. A instalação no seu imóvel é realizada em apenas um dia."
      },
      {
        "q": "Quais as formas de pagamento disponíveis?",
        "a": "Aceitamos parcelamento em até 12 vezes no cartão de crédito, desconto especial para pagamento à vista via PIX e boletos para empresas."
      }
    ]
  }
];
