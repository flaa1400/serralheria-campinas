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
  }
];
