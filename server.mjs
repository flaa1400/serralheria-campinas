import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const renderMainPage = () => `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Serralheria em Campinas | Serralheria Precisão Metal</title>
  <meta name="description" content="Procurando por Serralheria em Campinas? Especialistas em portões sob medida, mezaninos e estruturas metálicas. Solicite um orçamento grátis pelo WhatsApp!">
  <link rel="canonical" href="http://Serralheriaprecisaometal.com.br/" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

  <!-- Local SEO Meta Tags -->
  <meta name="geo.region" content="BR-SP" />
  <meta name="geo.placename" content="Campinas" />
  <meta name="geo.position" content="-22.9248;-47.1147" />
  <meta name="ICBM" content="-22.9248, -47.1147" />

  <!-- Open Graph / Social Cards -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="http://Serralheriaprecisaometal.com.br/" />
  <meta property="og:title" content="Serralheria em Campinas | Serralheria Precisão Metal" />
  <meta property="og:description" content="Procurando por Serralheria em Campinas? Especialistas em portões sob medida, mezaninos e estruturas metálicas. Solicite um orçamento grátis pelo WhatsApp!" />
  <meta property="og:site_name" content="Serralheria Precisão Metal" />
  <meta property="og:locale" content="pt_BR" />

  <!-- Schema JSON-LD LocalBusiness -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": "http://Serralheriaprecisaometal.com.br/#organization",
    "name": "Serralheria Precisão Metal",
    "legalName": "Serralheria Precisão Metal Campinas",
    "url": "http://Serralheriaprecisaometal.com.br",
    "telephone": "(11) 96429-9548",
    "priceRange": "$$",
    "description": "Serralheria em Campinas de alto padrão. Especialistas em portões sob medida, estruturas metálicas, mezaninos, portas de aço, grades, corrimãos e soldas com garantia de qualidade.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. John Boyd Dunlop, 3520",
      "addressLocality": "Campinas",
      "addressRegion": "SP",
      "postalCode": "13060-803",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -22.9248,
      "longitude": -47.1147
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:30",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Campinas" },
      { "@type": "City", "name": "Sumaré" },
      { "@type": "City", "name": "Hortolândia" },
      { "@type": "City", "name": "Valinhos" },
      { "@type": "City", "name": "Vinhedo" },
      { "@type": "City", "name": "Paulínia" }
    ]
  }
  </script>

  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#FACC15',
            secondary: '#1E3A8A',
            accent: '#000000',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #F8FAFC;
      color: #334155;
    }
    .section-spacing {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
    @media (min-width: 768px) {
      .section-spacing {
        padding-top: 8rem;
        padding-bottom: 8rem;
      }
    }
    .safe-container {
      max-width: 80rem;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    @media (min-width: 768px) {
      .safe-container {
        padding-left: 3rem;
        padding-right: 3rem;
      }
    }
    ::selection {
      background-color: #FACC15;
      color: #000000;
    }
  </style>
</head>
<body class="min-h-screen flex flex-col bg-slate-50 text-slate-700 antialiased">
  
  <!-- Sticky Header -->
  <header class="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-gray-200/80 shadow-sm transition-all duration-300">
    <div class="safe-container py-5 flex justify-between items-center">
      <a href="/" class="text-xl md:text-2xl font-black tracking-tight text-secondary flex items-center gap-3 group">
        <span class="w-10 h-10 bg-secondary text-primary rounded-xl flex items-center justify-center font-black shadow-md shadow-secondary/20">
          ⚡
        </span>
        <span class="flex flex-col">
          <span class="text-secondary font-black leading-none text-lg">Precisão Metal</span>
          <span class="text-xs text-gray-500 font-semibold tracking-wider uppercase">Serralheria em Campinas</span>
        </span>
      </a>

      <nav class="hidden lg:flex items-center gap-8 text-base font-bold text-gray-800">
        <a href="/" class="hover:text-secondary transition-all">Inicio</a>
        <a href="/servicos" class="hover:text-secondary transition-all">Serviços</a>
        <a href="/#diferenciais" class="hover:text-secondary transition-all">Sobre nós</a>
        <a href="/#contato" class="hover:text-secondary transition-all">Contato</a>
      </nav>

      <div class="hidden lg:flex items-center gap-4">
        <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" class="bg-[#25D366] hover:bg-[#20ba59] text-white font-black px-5 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-emerald-600/20 hover:scale-105 flex items-center gap-2">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.8 1.04 3.951 1.59 6.103 1.595h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Orçamento no WhatsApp
        </a>
      </div>

      <button id="menu-open-btn" aria-label="Abrir Menu Mobile" class="lg:hidden p-2.5 text-secondary rounded-xl bg-slate-100 hover:bg-slate-200 transition-all">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </header>

  <!-- Drawer Mobile -->
  <div id="mobile-menu" class="fixed inset-0 z-[999] bg-accent/95 backdrop-blur-xl hidden flex-col justify-between p-8 text-white">
    <div class="flex justify-between items-center border-b border-gray-800 pb-6">
      <a href="/" class="flex items-center gap-3">
        <span class="w-10 h-10 bg-primary text-accent rounded-xl flex items-center justify-center font-black text-xl">⚡</span>
        <span class="text-white font-black text-xl">Serralheria Precisão Metal</span>
      </a>
      <button id="menu-close-btn" aria-label="Fechar Menu Mobile" class="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center font-black text-2xl">
        ✕
      </button>
    </div>

    <nav class="flex flex-col items-center justify-center gap-6 py-8">
      <a href="/" class="mobile-link text-2xl font-black text-white hover:text-primary transition-all">Inicio</a>
      <a href="/servicos" class="mobile-link text-2xl font-black text-white hover:text-primary transition-all font-bold">Serviços</a>
      <a href="/#diferenciais" class="mobile-link text-2xl font-black text-white hover:text-primary transition-all font-bold">Sobre nós</a>
      <a href="/#contato" class="mobile-link text-2xl font-black text-white hover:text-primary transition-all font-bold">Contato</a>
    </nav>

    <div class="space-y-4 pt-4 border-t border-gray-800 text-center">
      <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" class="mobile-link w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 px-6 rounded-2xl text-base transition-all shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2">
        <span>💬</span> Conversar no WhatsApp
      </a>
    </div>
  </div>

  <!-- Hero Section -->
  <main class="flex-grow">
    <section class="relative bg-slate-950 text-white py-24 md:py-32 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="/hero_metalworker.png" 
          alt="Serralheiro profissional trabalhando em serralheria em Campinas" 
          class="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-110"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/75 to-slate-950/95"></div>
      </div>

      <div class="safe-container relative z-10">
        <div class="max-w-3xl mx-auto text-center space-y-8">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/40 text-primary font-bold text-xs uppercase tracking-wider backdrop-blur-md">
            <span>📍 Atendimento Premium em Campinas e Região</span>
          </div>

          <h1 class="text-4xl md:text-6xl font-black tracking-tight leading-tight drop-shadow-md">
            Serralheria em Campinas com <span class="text-primary underline decoration-amber-400 decoration-wavy">Qualidade e Segurança</span>
          </h1>

          <p class="text-slate-200 text-lg md:text-xl font-medium leading-relaxed drop-shadow">
            Procurando uma <strong>empresa de serralheria</strong> confiável? A Precisão Metal é a sua <strong>serralheria e estruturas metalicas</strong> em Campinas. Desenvolvemos portões sob medida, mezaninos, portas de aço e grades com garantia de durabilidade. Se você precisa de um <strong>serralheiro perto de mim</strong> com atendimento rápido, fale conosco hoje mesmo!
          </p>

          <div class="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-black px-8 py-4 rounded-2xl text-lg shadow-2xl shadow-emerald-600/40 hover:scale-105 transition-all flex items-center justify-center gap-3">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.8 1.04 3.951 1.59 6.103 1.595h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Solicitar Orçamento Grátis
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO DIFERENCIAIS (EXATAMENTE 3 CAIXAS) -->
    <section id="diferenciais" class="section-spacing bg-white border-b border-slate-200/80">
      <div class="safe-container">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-extrabold text-xs uppercase tracking-wider">
            <span>🛡️ Garantia de Qualidade & Compromisso</span>
          </div>

          <h2 class="text-3xl md:text-5xl font-black text-secondary tracking-tight">
            Por Que Escolher Nossa Serralheria em Campinas?
          </h2>

          <p class="text-slate-600 font-medium text-base md:text-lg">
            Combinamos matéria-prima de excelência, equipe especializada e pontualidade rigorosa em Campinas.
          </p>
        </div>

        <!-- 3 Caixas em Grid Responsivo de 1 Linha -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Caixa 1 -->
          <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4 group">
            <div class="w-14 h-14 bg-amber-500/10 text-secondary rounded-2xl flex items-center justify-center text-3xl group-hover:bg-primary group-hover:scale-105 transition-all">
              🛡️
            </div>
            <h3 class="text-xl font-black text-slate-900 group-hover:text-secondary transition-colors">
              Material Galvalume Antiferrugem
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Trabalhamos exclusivamente com aço galvalume e perfis metálicos certificados, oferecendo máxima resistência à chuva e sol.
            </p>
          </div>

          <!-- Caixa 2 -->
          <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4 group">
            <div class="w-14 h-14 bg-amber-500/10 text-secondary rounded-2xl flex items-center justify-center text-3xl group-hover:bg-primary group-hover:scale-105 transition-all">
              ⚡
            </div>
            <h3 class="text-xl font-black text-slate-900 group-hover:text-secondary transition-colors">
              Orçamento Rápido em 24h
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Atendimento ágil pelo WhatsApp. Enviamos o orçamento detalhado em até 24 horas para você não perder tempo na sua obra.
            </p>
          </div>

          <!-- Caixa 3 -->
          <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4 group">
            <div class="w-14 h-14 bg-amber-500/10 text-secondary rounded-2xl flex items-center justify-center text-3xl group-hover:bg-primary group-hover:scale-105 transition-all">
              📜
            </div>
            <h3 class="text-xl font-black text-slate-900 group-hover:text-secondary transition-colors">
              Garantia de 5 Anos em Estruturas
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Compromisso total com o pós-venda. Todas as nossas estruturas possuem termo de garantia contra falhas mecânicas e estruturais.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- SEÇÃO DE CREDIBILIDADE & AUTORIDADE -->
    <section class="bg-secondary border-y border-blue-900/80 relative z-20 shadow-xl py-10">
      <div class="safe-container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-white text-center">
          
          <div class="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div class="text-3xl md:text-4xl font-black text-primary mb-1 tracking-tight">
              +500
            </div>
            <h4 class="font-extrabold text-white text-sm md:text-base mb-1">
              Portões & Projetos
            </h4>
            <p class="text-xs text-slate-300 font-medium">
              Instalados e entregues com sucesso em Campinas.
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div class="text-3xl md:text-4xl font-black text-primary mb-1 tracking-tight">
              10+ Anos
            </div>
            <h4 class="font-extrabold text-white text-sm md:text-base mb-1">
              de Experiência
            </h4>
            <p class="text-xs text-slate-300 font-medium">
              Especialização técnica em serralheria de precisão.
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div class="text-3xl md:text-4xl font-black text-primary mb-1 tracking-tight">
              100%
            </div>
            <h4 class="font-extrabold text-white text-sm md:text-base mb-1">
              Entrega no Prazo
            </h4>
            <p class="text-xs text-slate-300 font-medium">
              Compromisso rigoroso com o seu cronograma.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Seção de Serviços -->
    <section id="servicos" class="section-spacing bg-slate-100">
      <div class="safe-container">
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 class="text-3xl md:text-5xl font-black text-secondary">Serralheria e Estruturas Metálicas em Campinas</h2>
          <p class="text-slate-600 font-medium">Soluções completas sob medida para residências, comércios e indústrias em Campinas.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- 1. Portões Automáticos & Sob Medida -->
          <a href="/servicos/portoes-automaticos" class="group bg-white p-8 rounded-3xl shadow-lg border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="w-14 h-14 bg-amber-500/10 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <svg class="w-8 h-8 stroke-current" fill="none" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 21h18M4 18V5a1 1 0 011-1h14a1 1 0 011 1v13M8 4v14M12 4v14M16 4v14M4 11h16" />
                </svg>
              </div>
              <h3 class="text-xl font-black text-slate-900 mb-3 group-hover:text-secondary transition-colors">Portões Automáticos & Sob Medida</h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">Se você busca uma solução em <strong>serralheria portao</strong> basculante, deslizante ou pivotante, fabricamos em aço galvalume de alta durabilidade com motorização rápida.</p>
            </div>
            <span class="text-secondary font-bold text-sm group-hover:text-amber-500 transition-colors flex items-center gap-1">Saiba Mais &rarr;</span>
          </a>

          <!-- 2. Estruturas Metálicas & Mezaninos -->
          <a href="/servicos/estruturas-mezaninos" class="group bg-white p-8 rounded-3xl shadow-lg border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="w-14 h-14 bg-amber-500/10 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <svg class="w-8 h-8 stroke-current" fill="none" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V3M5 21V3M3 7h18M3 17h18M5 7l14 10M19 7L5 17" />
                </svg>
              </div>
              <h3 class="text-xl font-black text-slate-900 mb-3 group-hover:text-secondary transition-colors">Estruturas Metálicas & Mezaninos</h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">Somos referência em <strong>serralheria e estruturas metalicas</strong> para comércios e galpões industriais, elaborando mezaninos sob medida com certificação técnica.</p>
            </div>
            <span class="text-secondary font-bold text-sm group-hover:text-amber-500 transition-colors flex items-center gap-1">Saiba Mais &rarr;</span>
          </a>

          <!-- 3. Grades e Corrimão -->
          <a href="/servicos/grades-corrimao" class="group bg-white p-8 rounded-3xl shadow-lg border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="w-14 h-14 bg-amber-500/10 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <svg class="w-8 h-8 stroke-current" fill="none" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h18M3 19h18M6 5v14M10 5v14M14 5v14M18 5v14M3 12h18" />
                </svg>
              </div>
              <h3 class="text-xl font-black text-slate-900 mb-3 group-hover:text-secondary transition-colors">Grades e Corrimão</h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">Projetos de segurança para sua casa ou condomínio executados por nossa <strong>empresa de serralheria</strong>, com grades reforçadas e corrimãos sob medida.</p>
            </div>
            <span class="text-secondary font-bold text-sm group-hover:text-amber-500 transition-colors flex items-center gap-1">Saiba Mais &rarr;</span>
          </a>

          <!-- 4. Portas de Aço -->
          <a href="/servicos/portas-de-aco" class="group bg-white p-8 rounded-3xl shadow-lg border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="w-14 h-14 bg-amber-500/10 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <svg class="w-8 h-8 stroke-current" fill="none" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zM3 7h18M3 11h18M3 15h18M9 19h6" />
                </svg>
              </div>
              <h3 class="text-xl font-black text-slate-900 mb-3 group-hover:text-secondary transition-colors">Portas de Aço</h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">Desenvolvemos portas de enrolar sob medida para diversas <strong>serralherias</strong> e comércios locais, garantindo máxima segurança para sua loja ou indústria.</p>
            </div>
            <span class="text-secondary font-bold text-sm group-hover:text-amber-500 transition-colors flex items-center gap-1">Saiba Mais &rarr;</span>
          </a>

          <!-- 5. Serviços de Solda em Geral -->
          <a href="/servicos/servicos-de-solda" class="group bg-white p-8 rounded-3xl shadow-lg border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="w-14 h-14 bg-amber-500/10 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  <path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-black text-slate-900 mb-3 group-hover:text-secondary transition-colors">Serviços de Solda em Geral</h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">Se você precisa de um reparo urgente ou do <strong>telefone de serralheiro</strong> para soldas TIG/MIG e manutenção de portões, estamos prontos para lhe atender.</p>
            </div>
            <span class="text-secondary font-bold text-sm group-hover:text-amber-500 transition-colors flex items-center gap-1">Saiba Mais &rarr;</span>
          </a>

          <!-- 6. Coberturas & Telhados Metálicos -->
          <a href="/servicos/coberturas-metalicas" class="group bg-white p-8 rounded-3xl shadow-lg border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="w-14 h-14 bg-amber-500/10 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <svg class="w-8 h-8 stroke-current" fill="none" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10M9 21V14h6v7" />
                </svg>
              </div>
              <h3 class="text-xl font-black text-slate-900 mb-3 group-hover:text-secondary transition-colors">Coberturas & Telhados Metálicos</h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">Coberturas em policarbonato e telha termoacústica galvalume para garagens, corredores, áreas gourmet e pátios comerciais.</p>
            </div>
            <span class="text-secondary font-bold text-sm group-hover:text-amber-500 transition-colors flex items-center gap-1">Saiba Mais &rarr;</span>
          </a>

        </div>

        <!-- Botão "Mais Serviços" -->
        <div class="mt-14 text-center">
          <a 
            href="/servicos" 
            class="inline-flex items-center justify-center gap-3 bg-secondary hover:bg-blue-900 text-primary font-black px-10 py-4.5 rounded-2xl text-base md:text-lg shadow-xl shadow-blue-900/20 hover:scale-105 active:scale-95 transition-all duration-300 border border-blue-800/60 group"
          >
            <span>Mais Serviços</span>
            <span class="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
          </a>
        </div>
      </div>
    </section>

    <!-- SEÇÃO COMO FUNCIONA / PROCESSO DE TRABALHO -->
    <section id="processo" class="section-spacing bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div class="safe-container">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-secondary font-extrabold text-xs uppercase tracking-wider">
            <span>⚡ Simples, Transparente e Sem Burocracia</span>
          </div>

          <h2 class="text-3xl md:text-5xl font-black text-secondary tracking-tight">
            Sua Empresa de Serralheria em Campinas Passo a Passo
          </h2>

          <p class="text-slate-600 font-medium text-base md:text-lg">
            Do primeiro contato até a entrega final com garantia, saiba como transformamos seu projeto em realidade em 4 passos simples:
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          <div class="group bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between hover:-translate-y-1">
            <div class="space-y-4">
              <div class="flex items-center">
                <span class="w-12 h-12 bg-secondary text-primary rounded-2xl font-black text-xl flex items-center justify-center shadow-md">
                  01
                </span>
              </div>
              <h3 class="text-xl font-black text-slate-900 group-hover:text-secondary transition-colors">
                1. Contato Inicial
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Você entra em contato pelo WhatsApp ou telefone e explica sua necessidade (portão, mezanino, grade ou manutenção).
              </p>
            </div>
            <div class="pt-6 border-t border-slate-200/80 text-xs font-bold text-emerald-600 flex items-center gap-1">
              <span>✓ Resposta Rápida</span>
            </div>
          </div>

          <div class="group bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between hover:-translate-y-1">
            <div class="space-y-4">
              <div class="flex items-center">
                <span class="w-12 h-12 bg-amber-500 text-slate-950 rounded-2xl font-black text-xl flex items-center justify-center shadow-md">
                  02
                </span>
              </div>
              <h3 class="text-xl font-black text-slate-900 group-hover:text-secondary transition-colors">
                2. Visita Técnica & Orçamento
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Agendamos a medição técnica no local em Campinas ou avaliamos seu projeto para enviar o orçamento transparente e sem compromisso.
              </p>
            </div>
            <div class="pt-6 border-t border-slate-200/80 text-xs font-bold text-amber-600 flex items-center gap-1">
              <span>✓ Sem Taxas Escondidas</span>
            </div>
          </div>

          <div class="group bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between hover:-translate-y-1">
            <div class="space-y-4">
              <div class="flex items-center">
                <span class="w-12 h-12 bg-secondary text-primary rounded-2xl font-black text-xl flex items-center justify-center shadow-md">
                  03
                </span>
              </div>
              <h3 class="text-xl font-black text-slate-900 group-hover:text-secondary transition-colors">
                3. Fabricação & Instalação
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Fabricamos a estrutura com aço galvalume de alta qualidade e realizamos a instalação no prazo combinando total limpeza pós-obra.
              </p>
            </div>
            <div class="pt-6 border-t border-slate-200/80 text-xs font-bold text-blue-600 flex items-center gap-1">
              <span>✓ Solda Certificada</span>
            </div>
          </div>

          <div class="group bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between hover:-translate-y-1">
            <div class="space-y-4">
              <div class="flex items-center">
                <span class="w-12 h-12 bg-emerald-600 text-white rounded-2xl font-black text-xl flex items-center justify-center shadow-md">
                  04
                </span>
              </div>
              <h3 class="text-xl font-black text-slate-900 group-hover:text-secondary transition-colors">
                4. Entrega & Garantia Total
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Entregamos seu projeto pronto e testado, acompanhado do nosso suporte pós-venda e termo de garantia de durabilidade.
              </p>
            </div>
            <div class="pt-6 border-t border-slate-200/80 text-xs font-bold text-emerald-600 flex items-center gap-1">
              <span>✓ Garantia de Fábrica</span>
            </div>
          </div>

        </div>

        <div class="mt-14 text-center">
          <a 
            href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20iniciar%20o%20passo%201%20e%20solicitar%20uma%20visita%20t%C3%A9cnica." 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-black px-10 py-4.5 rounded-2xl text-base md:text-lg shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <span>Iniciar Passo 1: Solicitar Visita Técnica</span>
            <span class="group-hover:translate-x-1.5 transition-transform duration-300">💬 &rarr;</span>
          </a>
        </div>

      </div>
    </section>

    <!-- SEÇÃO DE DEPOIMENTOS DE CLIENTES -->
    <section id="depoimentos" class="section-spacing bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      <div class="safe-container relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold text-xs uppercase tracking-wider">
            <span>⭐ 4.9/5 em Avaliações no Google em Campinas</span>
          </div>

          <h2 class="text-3xl md:text-5xl font-black text-secondary tracking-tight">
            O que Dizem sobre nossa Serralheria em Campinas
          </h2>

          <p class="text-slate-600 font-medium text-base md:text-lg">
            Confira a experiência de quem confiou na Serralheria Precisão Metal para executar seus projetos residenciais, comerciais e industriais.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex text-amber-400 text-lg">★★★★★</div>
                <span class="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1">
                  <span class="text-blue-500 font-black">G</span> Cliente Verificado
                </span>
              </div>
              <p class="text-slate-700 text-sm leading-relaxed font-normal italic">
                "Instalaram meu portão basculante basculante sob medida em Barão Geraldo. O acabamento da solda e a pintura ficaram impecáveis. Cumpriram o prazo certinho e o preço foi justo!"
              </p>
            </div>

            <div class="flex items-center gap-4 pt-4 border-t border-slate-200/80">
              <div class="w-12 h-12 rounded-full bg-secondary text-primary font-black flex items-center justify-center text-lg shadow-md">RS</div>
              <div>
                <h4 class="font-extrabold text-slate-900 text-base">Ricardo Silveira</h4>
                <p class="text-xs text-slate-500 font-semibold">Residencial • Barão Geraldo, Campinas</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex text-amber-400 text-lg">★★★★★</div>
                <span class="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1">
                  <span class="text-blue-500 font-black">G</span> Cliente Verificado
                </span>
              </div>
              <p class="text-slate-700 text-sm leading-relaxed font-normal italic">
                "Precisávamos ampliar a área útil da nossa loja com um mezanino metálico de alta resistência. A equipe da Precisão Metal entregou uma estrutura super segura e bem finalizada!"
              </p>
            </div>

            <div class="flex items-center gap-4 pt-4 border-t border-slate-200/80">
              <div class="w-12 h-12 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-lg shadow-md">CF</div>
              <div>
                <h4 class="font-extrabold text-slate-900 text-base">Camila Fernandes</h4>
                <p class="text-xs text-slate-500 font-semibold">Comercial • Centro, Campinas</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex text-amber-400 text-lg">★★★★★</div>
                <span class="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1">
                  <span class="text-blue-500 font-black">G</span> Cliente Verificado
                </span>
              </div>
              <p class="text-slate-700 text-sm leading-relaxed font-normal italic">
                "Contratei para a fabricação dos corrimãos e guarda-corpos do prédio do nosso condomínio no Taquaral. Trabalho extremamente profissional, atenciosos e limpos no pós-obra."
              </p>
            </div>

            <div class="flex items-center gap-4 pt-4 border-t border-slate-200/80">
              <div class="w-12 h-12 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-lg shadow-md">MP</div>
              <div>
                <h4 class="font-extrabold text-slate-900 text-base">Marcelo Prado</h4>
                <p class="text-xs text-slate-500 font-semibold">Síndico • Taquaral, Campinas</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 bg-slate-900 text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div class="space-y-2 text-center md:text-left">
            <h3 class="text-xl md:text-2xl font-black text-primary">Quer ser nosso próximo cliente satisfeito?</h3>
            <p class="text-slate-300 text-sm">Faça como mais de 150 clientes em Campinas e solicite uma visita técnica sem compromisso.</p>
          </div>
          <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Vi%20os%20depoimentos%20no%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" class="shrink-0 bg-[#25D366] hover:bg-[#20ba59] text-white font-black px-8 py-4 rounded-2xl text-base shadow-lg hover:scale-105 transition-all">
            💬 Solicitar Orçamento Grátis
          </a>
        </div>
      </div>
    </section>

    <!-- SEÇÃO DE PERGUNTAS FREQUENTES (FAQ) -->
    <section id="faq" class="section-spacing bg-white border-b border-slate-200/80">
      <div class="safe-container">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-secondary font-extrabold text-xs uppercase tracking-wider">
            <span>❓ Dúvidas Frequentes</span>
          </div>

          <h2 class="text-3xl md:text-5xl font-black text-secondary tracking-tight">
            Dúvidas Frequentes sobre Serralheria em Campinas
          </h2>

          <p class="text-slate-600 font-medium text-base md:text-lg">
            Tire suas principais dúvidas sobre prazos, atendimento em Campinas, materiais e orçamento:
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          
          <details class="group bg-slate-50 border border-slate-200 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all hover:bg-slate-100">
            <summary class="flex justify-between items-center font-extrabold text-slate-900 text-base md:text-lg group-open:text-secondary">
              <span>Quanto tempo leva para fabricar e instalar um portão sob medida?</span>
              <span class="w-8 h-8 rounded-full bg-white border border-slate-200 text-secondary flex items-center justify-center font-black transition-transform group-open:rotate-180">
                ↓
              </span>
            </summary>
            <p class="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-200/80 pt-4">
              O prazo médio de fabricação para portões automáticos sob medida é de 7 a 15 dias úteis, dependendo da complexidade do projeto e acabamentos. A instalação é concluída em um único dia por nossa equipe própria.
            </p>
          </details>

          <details class="group bg-slate-50 border border-slate-200 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all hover:bg-slate-100">
            <summary class="flex justify-between items-center font-extrabold text-slate-900 text-base md:text-lg group-open:text-secondary">
              <span>Quais bairros e cidades da região vocês atendem?</span>
              <span class="w-8 h-8 rounded-full bg-white border border-slate-200 text-secondary flex items-center justify-center font-black transition-transform group-open:rotate-180">
                ↓
              </span>
            </summary>
            <p class="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-200/80 pt-4">
              Nossa sede é em Campinas (Av. John Boyd Dunlop), e atendemos todos os bairros da cidade (Barão Geraldo, Taquaral, Cambuí, Ouro Verde, Campo Grande, etc.) e municípios vizinhos como Sumaré, Hortolândia, Valinhos, Vinhedo e Paulínia.
            </p>
          </details>

          <details class="group bg-slate-50 border border-slate-200 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all hover:bg-slate-100">
            <summary class="flex justify-between items-center font-extrabold text-slate-900 text-base md:text-lg group-open:text-secondary">
              <span>A visita técnica para orçamento possui algum custo?</span>
              <span class="w-8 h-8 rounded-full bg-white border border-slate-200 text-secondary flex items-center justify-center font-black transition-transform group-open:rotate-180">
                ↓
              </span>
            </summary>
            <p class="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-200/80 pt-4">
              Não! A visita técnica para medição no local e elaboração do orçamento é 100% gratuita e sem compromisso para Campinas e região próxima.
            </p>
          </details>

          <details class="group bg-slate-50 border border-slate-200 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all hover:bg-slate-100">
            <summary class="flex justify-between items-center font-extrabold text-slate-900 text-base md:text-lg group-open:text-secondary">
              <span>Qual a garantia dos portões, soldas e estruturas metálicas?</span>
              <span class="w-8 h-8 rounded-full bg-white border border-slate-200 text-secondary flex items-center justify-center font-black transition-transform group-open:rotate-180">
                ↓
              </span>
            </summary>
            <p class="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-200/80 pt-4">
              Oferecemos garantia de até 5 anos para estruturas metálicas e mezaninos, e garantia total de fábrica para automatizadores de portões e fechaduras.
            </p>
          </details>

          <details class="group bg-slate-50 border border-slate-200 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all hover:bg-slate-100">
            <summary class="flex justify-between items-center font-extrabold text-slate-900 text-base md:text-lg group-open:text-secondary">
              <span>Quais são as formas de pagamento aceitas?</span>
              <span class="w-8 h-8 rounded-full bg-white border border-slate-200 text-secondary flex items-center justify-center font-black transition-transform group-open:rotate-180">
                ↓
              </span>
            </summary>
            <p class="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-200/80 pt-4">
              Aceitamos cartões de crédito em até 12x, PIX com desconto especial à vista, boleto bancário e faturamento para empresas e indústrias.
            </p>
          </details>

        </div>

        <div class="mt-12 text-center">
          <p class="text-slate-600 font-medium text-sm mb-4">Tem outra dúvida que não está aqui?</p>
          <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20os%20servi%C3%A7os%20da%20serralheria." target="_blank" class="inline-flex items-center gap-2 text-secondary font-extrabold text-base hover:text-amber-500 transition-colors">
            <span>💬 Tirar Dúvida no WhatsApp com Especialista &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  </main>

  <!-- Botão Flutuante do WhatsApp Premium -->
  <aside aria-label="Contato via WhatsApp" class="fixed bottom-6 right-6 z-50 group flex items-center gap-3">
    <div class="hidden sm:flex items-center gap-2 bg-slate-900/90 text-white text-xs font-extrabold px-3.5 py-2 rounded-full shadow-xl border border-slate-700/50 backdrop-blur-md opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
      <span class="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
      <span>Fale Conosco</span>
    </div>

    <a
      href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp com Serralheria Precisão Metal"
      class="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl shadow-emerald-600/50 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
    >
      <span class="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:animate-none"></span>
      <svg class="w-8 h-8 relative z-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.8 1.04 3.951 1.59 6.103 1.595h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>
  </aside>

  <!-- Rodapé com Atendimento Local e Mapa do Google Maps Integrado -->
  <footer id="contato" class="bg-secondary text-white pt-20 pb-12 border-t border-secondary">
    <div class="safe-container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 pb-12 border-b border-blue-900/60">
        
        <!-- Coluna 1: Sobre -->
        <div class="md:col-span-1 space-y-4">
          <div class="flex items-center gap-2 mb-4">
            <span class="w-9 h-9 bg-primary text-secondary rounded-lg flex items-center justify-center font-bold">⚡</span>
            <span class="text-xl font-black text-white tracking-tight">Serralheria Precisão Metal</span>
          </div>
          <p class="text-slate-300 text-sm leading-relaxed">
            Sua <strong>empresa de serralheria</strong> de confiança. Especialistas em <strong>serralheria portao</strong>, coberturas, mezaninos e soldas industriais em geral.
          </p>
          <!-- Ícones de Redes Sociais -->
          <div class="flex items-center gap-3 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-8 h-8 rounded-full bg-white/10 hover:bg-primary hover:text-secondary flex items-center justify-center text-white transition-all duration-300">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-8 h-8 rounded-full bg-white/10 hover:bg-primary hover:text-secondary flex items-center justify-center text-white transition-all duration-300">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Coluna 2: Navegação -->
        <div>
          <h4 class="text-primary font-black text-base mb-6 tracking-wide uppercase">Navegação</h4>
          <ul class="space-y-3 text-sm text-gray-100">
            <li class="flex items-center">
              <span class="text-blue-400 font-extrabold mr-2">›</span>
              <a href="/" class="hover:text-primary transition-colors">Inicio</a>
            </li>
            <li class="flex items-center">
              <span class="text-blue-400 font-extrabold mr-2">›</span>
              <a href="/servicos" class="hover:text-primary transition-colors">Serviços</a>
            </li>
            <li class="flex items-center">
              <span class="text-blue-400 font-extrabold mr-2">›</span>
              <a href="/#diferenciais" class="hover:text-primary transition-colors">Sobre Nós</a>
            </li>
            <li class="flex items-center">
              <span class="text-blue-400 font-extrabold mr-2">›</span>
              <a href="/#contato" class="hover:text-primary transition-colors">Contato</a>
            </li>
          </ul>
        </div>

        <!-- Coluna 3: Serviços -->
        <div>
          <h4 class="text-primary font-black text-base mb-6 tracking-wide uppercase">Serviços</h4>
          <ul class="space-y-3 text-sm text-gray-100">
            <li><a href="/servicos/portoes-automaticos" class="hover:text-primary">Portões Automáticos</a></li>
            <li><a href="/servicos/estruturas-mezaninos" class="hover:text-primary">Mezaninos Metálicos</a></li>
            <li><a href="/servicos/portas-de-aco" class="hover:text-primary">Portas de Aço</a></li>
            <li><a href="/servicos/grades-corrimao" class="hover:text-primary">Grades e Corrimão</a></li>
            <li><a href="/servicos/servicos-de-solda" class="hover:text-primary">Serviços de Solda</a></li>
            <li><a href="/servicos/coberturas-metalicas" class="hover:text-primary">Coberturas Metálicas</a></li>
          </ul>
        </div>

        <!-- Coluna 4: Atendimento Local & Mapa -->
        <div class="space-y-4">
          <h4 class="text-primary font-black text-base mb-4 tracking-wide uppercase">Atendimento Local & Mapa</h4>
          
          <div class="space-y-2 text-sm text-gray-100">
            <p class="leading-snug">📍 Av. John Boyd Dunlop, 3520 - Jardim Nova Esperança, Campinas - SP</p>
            <p>💬 WhatsApp: (11) 96429-9548</p>
            <p class="text-xs text-slate-300">⏰ Seg a Sex: 07:30 às 18:00 | Sáb: 08:00 às 12:00</p>
          </div>

          <!-- Mapa Pequeno Integrado -->
          <div class="rounded-2xl overflow-hidden border border-blue-900 shadow-lg aspect-video h-48">
            <iframe 
              title="Mapa de localização no rodapé da Serralheria Precisão Metal em Campinas"
              src="https://maps.google.com/maps?q=Av.+John+Boyd+Dunlop%2C+3520+-+Jardim+Nova+Esperan%C3%A7a%2C+Campinas+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              class="w-full h-full border-0" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-100">
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <p>&copy; 2026 Serralheria Precisão Metal. Todos os direitos reservados.</p>
          <div class="hidden sm:block text-blue-900/60">|</div>
          <div class="flex gap-4">
            <a href="/politica-de-privacidade" class="hover:text-primary transition-colors">Políticas de Privacidade</a>
            <span class="text-blue-900/60">|</span>
            <a href="/termos-de-uso" class="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
        <p class="font-bold text-primary">Plataforma Profissional para SEO Local & Alta Conversão ⚡</p>
      </div>
    </div>
  </footer>

  <script>
    const openBtn = document.getElementById('menu-open-btn');
    const closeBtn = document.getElementById('menu-close-btn');
    const menu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-link');

    function openMenu() {
      if (!menu) return;
      menu.classList.remove('hidden');
      menu.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      if (!menu) return;
      menu.classList.remove('flex');
      menu.classList.add('hidden');
      document.body.style.overflow = '';
    }

    openBtn?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    menuLinks.forEach((link) => link.addEventListener('click', closeMenu));
  </script>
</body>
</html>`;

const renderServicesListPage = () => `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nossos Serviços em Campinas | Serralheria Precisão Metal</title>
  <meta name="description" content="Conheça a linha completa de serviços da nossa empresa de serralheria em Campinas: mezaninos, estruturas metálicas, instalação e manutenção de portões automáticos, portas de aço e muito mais.">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#FACC15',
            secondary: '#1E3A8A',
            accent: '#000000',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #F8FAFC;
      color: #334155;
    }
    .section-spacing {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
    @media (min-width: 768px) {
      .section-spacing {
        padding-top: 6rem;
        padding-bottom: 6rem;
      }
    }
    .safe-container {
      max-width: 80rem;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    @media (min-width: 768px) {
      .safe-container {
        padding-left: 3rem;
        padding-right: 3rem;
      }
    }
  </style>
</head>
<body class="min-h-screen flex flex-col bg-slate-50 text-slate-700 antialiased">
  
  <!-- Sticky Header -->
  <header class="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-gray-200/80 shadow-sm transition-all duration-300">
    <div class="safe-container py-5 flex justify-between items-center">
      <a href="/" class="text-xl md:text-2xl font-black tracking-tight text-secondary flex items-center gap-3 group">
        <span class="w-10 h-10 bg-secondary text-primary rounded-xl flex items-center justify-center font-black shadow-md shadow-secondary/20 font-bold">
          ⚡
        </span>
        <span class="flex flex-col">
          <span class="text-secondary font-black leading-none text-lg">Precisão Metal</span>
          <span class="text-xs text-gray-500 font-semibold tracking-wider uppercase">Serralheria em Campinas</span>
        </span>
      </a>

      <nav class="hidden lg:flex items-center gap-8 text-base font-bold text-gray-800">
        <a href="/" class="hover:text-secondary transition-all">Inicio</a>
        <a href="/servicos" class="text-secondary transition-all">Serviços</a>
        <a href="/#diferenciais" class="hover:text-secondary transition-all">Sobre nós</a>
        <a href="/#contato" class="hover:text-secondary transition-all">Contato</a>
      </nav>

      <div class="hidden lg:flex items-center gap-4">
        <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" class="bg-[#25D366] hover:bg-[#20ba59] text-white font-black px-5 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-emerald-600/20 hover:scale-105 flex items-center gap-2">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.8 1.04 3.951 1.59 6.103 1.595h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Orçamento no WhatsApp
        </a>
      </div>

      <button id="menu-open-btn" aria-label="Abrir Menu Mobile" class="lg:hidden p-2.5 text-secondary rounded-xl bg-slate-100 hover:bg-slate-200 transition-all">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </header>

  <!-- Drawer Mobile -->
  <div id="mobile-menu" class="fixed inset-0 z-[999] bg-accent/95 backdrop-blur-xl hidden flex-col justify-between p-8 text-white">
    <div class="flex justify-between items-center border-b border-white/10 pb-6">
      <div class="flex items-center gap-3">
        <span class="w-10 h-10 bg-secondary text-primary rounded-xl flex items-center justify-center font-black text-xl">⚡</span>
        <span class="text-white font-black text-xl">Precisão Metal</span>
      </div>
      <button id="menu-close-btn" aria-label="Fechar Menu Mobile" class="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center font-black text-2xl transition-all">
        ✕
      </button>
    </div>

    <nav class="flex flex-col items-center justify-center gap-6 py-8">
      <a href="/" class="mobile-link text-2xl font-black text-white hover:text-primary transition-all">Inicio</a>
      <a href="/servicos" class="mobile-link text-2xl font-black text-white hover:text-primary transition-all text-primary font-bold">Serviços</a>
      <a href="/#diferenciais" class="mobile-link text-2xl font-black text-white hover:text-primary transition-all font-bold">Sobre nós</a>
      <a href="/#contato" class="mobile-link text-2xl font-black text-white hover:text-primary transition-all font-bold">Contato</a>
    </nav>

    <div class="space-y-4 pt-6 border-t border-white/10 text-center">
      <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" class="mobile-link w-full bg-[#25D366] hover:bg-emerald-600 text-white font-black py-4 px-6 rounded-2xl text-base transition-all shadow-xl flex items-center justify-center gap-2">
        💬 Orçamento no WhatsApp
      </a>
    </div>
  </div>

  <main class="flex-grow">
    <!-- Hero Section -->
    <section class="section-spacing bg-white border-b border-slate-200">
      <div class="safe-container text-center max-w-4xl mx-auto space-y-6">
        <span class="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-secondary text-xs font-bold uppercase tracking-wider">
          Nossas Especialidades
        </span>
        <h1 class="text-4xl md:text-5xl font-black text-secondary leading-tight">
          Nossos Serviços de Serralheria em Campinas
        </h1>
        <p class="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          Confira o catálogo de serviços executados por nossa empresa de serralheria e estruturas metálicas em Campinas e região.
        </p>
      </div>
    </section>

    <!-- Services Grid Section -->
    <section class="section-spacing bg-slate-50 border-b border-slate-200">
      <div class="safe-container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Card 1 -->
          <div class="bg-white p-8 rounded-3xl shadow-lg border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="text-4xl mb-6">🏗️</div>
              <h2 class="text-xl font-black text-slate-900 mb-3">Estruturas metalicas em Campinas</h2>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">Projetos estruturais completos para galpões comerciais, hangares, telhados e estruturas metálicas de alta durabilidade e segurança em Campinas.</p>
            </div>
            <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20Estruturas%20metalicas%20em%20Campinas." target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-blue-900 text-white font-bold text-center py-3.5 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2">
              Solicitar Orçamento
            </a>
          </div>

          <!-- Card 2 -->
          <div class="bg-white p-8 rounded-3xl shadow-lg border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="text-4xl mb-6">🪜</div>
              <h2 class="text-xl font-black text-slate-900 mb-3">Mezaninos em Campinas</h2>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">Projetamos e fabricamos mezaninos metálicos sob medida para comércios, lojas e galpões industriais com cálculo estrutural preciso e ART em Campinas.</p>
            </div>
            <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20Mezaninos%20em%20Campinas." target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-blue-900 text-white font-bold text-center py-3.5 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2">
              Solicitar Orçamento
            </a>
          </div>

          <!-- Card 3 -->
          <div class="bg-white p-8 rounded-3xl shadow-lg border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="text-4xl mb-6">👨‍🏭</div>
              <h2 class="text-xl font-black text-slate-900 mb-3">Serralheiro portão perto de mim em Campinas</h2>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">Atendimento especializado de serralheria e fabricação de portões sob medida (basculantes, pivotantes e deslizantes) pertinho de você em Campinas.</p>
            </div>
            <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20Serralheiro%20port%C3%A3o%20perto%20de%20mim%20em%20Campinas." target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-blue-900 text-white font-bold text-center py-3.5 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2">
              Solicitar Orçamento
            </a>
          </div>

          <!-- Card 4 -->
          <div class="bg-white p-8 rounded-3xl shadow-lg border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="text-4xl mb-6">⚙️</div>
              <h2 class="text-xl font-black text-slate-900 mb-3">Manutenção portão eletrônico Campinas</h2>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">Conserto e manutenção técnica rápida de portões eletrônicos em Campinas. Troca de cabos de aço, soldagem de roldanas e reparos elétricos urgentes.</p>
            </div>
            <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20a%20Manuten%C3%A7%C3%A3o%20port%C3%A3o%20eletr%C3%B4nico%20Campinas." target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-blue-900 text-white font-bold text-center py-3.5 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2">
              Solicitar Orçamento
            </a>
          </div>

          <!-- Card 5 -->
          <div class="bg-white p-8 rounded-3xl shadow-lg border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="text-4xl mb-6">⚡</div>
              <h2 class="text-xl font-black text-slate-900 mb-3">Instalação de Portão Automático em Campinas</h2>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">Instalação e automatização de portões com motores rápidos PPA, Rossi e Peccinin, garantindo segurança e comodidade para sua residência em Campinas.</p>
            </div>
            <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20a%20Instala%C3%A7%C3%A3o%20de%20Port%C3%A3o%20Autom%C3%A1tico%20em%20Campinas." target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-blue-900 text-white font-bold text-center py-3.5 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2">
              Solicitar Orçamento
            </a>
          </div>

          <!-- Card 6 -->
          <div class="bg-white p-8 rounded-3xl shadow-lg border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="text-4xl mb-6">🚪</div>
              <h2 class="text-xl font-black text-slate-900 mb-3">Portas de aço em Campinas</h2>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">Fabricação, instalação e automação de portas de enrolar manuais e automáticas em aço galvalume para comércio, lojas e galpões em Campinas.</p>
            </div>
            <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Portas%20de%20a%C3%A7o%20em%20Campinas." target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-blue-900 text-white font-bold text-center py-3.5 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2">
              Solicitar Orçamento
            </a>
          </div>

          <!-- Card 7 -->
          <div class="bg-white p-8 rounded-3xl shadow-lg border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="text-4xl mb-6">🛡️</div>
              <h2 class="text-xl font-black text-slate-900 mb-3">Grades e Corrimão em Campinas</h2>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">Grades reforçadas para janelas e muros, além de corrimãos e guarda-corpos em aço galvanizado sob medida para escadas e rampas em Campinas.</p>
            </div>
            <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Grades%20e%20Corrim%C3%A3o%20em%20Campinas." target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-blue-900 text-white font-bold text-center py-3.5 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2">
              Solicitar Orçamento
            </a>
          </div>

          <!-- Card 8 -->
          <div class="bg-white p-8 rounded-3xl shadow-lg border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="text-4xl mb-6">🔥</div>
              <h2 class="text-xl font-black text-slate-900 mb-3">Serviços de Solda em Geral em Campinas</h2>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">Soldas TIG/MIG e eletrodo revestido de alta precisão para reparação de peças, reformas estruturais e manutenções de segurança em Campinas.</p>
            </div>
            <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20Servi%C3%A7os%20de%20Solda%20em%20Geral%20em%20Campinas." target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-blue-900 text-white font-bold text-center py-3.5 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2">
              Solicitar Orçamento
            </a>
          </div>

          <!-- Card 9 -->
          <div class="bg-white p-8 rounded-3xl shadow-lg border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="text-4xl mb-6">🏠</div>
              <h2 class="text-xl font-black text-slate-900 mb-3">Coberturas & Telhados Metálicos em Campinas</h2>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">Coberturas térmicas em telha sanduíche galvalume e policarbonato para garagens, corredores, áreas gourmet e pátios comerciais em Campinas.</p>
            </div>
            <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Coberturas%20e%20Telhados%20Met%C3%A1licos%20em%20Campinas." target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-blue-900 text-white font-bold text-center py-3.5 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2">
              Solicitar Orçamento
            </a>
          </div>

        </div>
      </div>
    </section>
  </main>

  <!-- Rodapé -->
  <footer id="contato" class="bg-secondary text-white pt-20 pb-12 border-t border-secondary">
    <div class="safe-container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 pb-12 border-b border-blue-900/60 font-bold">
        
        <!-- Coluna 1: Sobre -->
        <div class="md:col-span-1 space-y-4">
          <div class="flex items-center gap-2 mb-4">
            <span class="w-9 h-9 bg-primary text-secondary rounded-lg flex items-center justify-center font-bold">⚡</span>
            <span class="text-xl font-black text-white tracking-tight">Serralheria Precisão Metal</span>
          </div>
          <p class="text-slate-300 text-sm leading-relaxed font-normal">
            Sua <strong>empresa de serralheria</strong> de confiança. Especialistas em <strong>serralheria portao</strong>, coberturas, mezaninos e soldas industriais em geral.
          </p>
          <!-- Ícones de Redes Sociais -->
          <div class="flex items-center gap-3 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-8 h-8 rounded-full bg-white/10 hover:bg-primary hover:text-secondary flex items-center justify-center text-white transition-all duration-300">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-8 h-8 rounded-full bg-white/10 hover:bg-primary hover:text-secondary flex items-center justify-center text-white transition-all duration-300">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Coluna 2: Navegação -->
        <div>
          <h4 class="text-primary font-black text-base mb-6 tracking-wide uppercase">Navegação</h4>
          <ul class="space-y-3 text-sm text-gray-100">
            <li class="flex items-center">
              <span class="text-blue-400 font-extrabold mr-2">›</span>
              <a href="/" class="hover:text-primary transition-colors">Inicio</a>
            </li>
            <li class="flex items-center">
              <span class="text-blue-400 font-extrabold mr-2">›</span>
              <a href="/servicos" class="hover:text-primary transition-colors text-primary">Serviços</a>
            </li>
            <li class="flex items-center">
              <span class="text-blue-400 font-extrabold mr-2">›</span>
              <a href="/#diferenciais" class="hover:text-primary transition-colors">Sobre Nós</a>
            </li>
            <li class="flex items-center">
              <span class="text-blue-400 font-extrabold mr-2">›</span>
              <a href="/#contato" class="hover:text-primary transition-colors">Contato</a>
            </li>
          </ul>
        </div>

        <!-- Coluna 3: Serviços -->
        <div>
          <h4 class="text-primary font-black text-base mb-6 tracking-wide uppercase">Serviços</h4>
          <ul class="space-y-3 text-sm text-gray-100 font-normal">
            <li><a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20port%C3%A3o%20autom%C3%A1tico." target="_blank" class="hover:text-primary">Portões Automáticos</a></li>
            <li><a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20mezanino." target="_blank" class="hover:text-primary">Mezaninos Metálicos</a></li>
            <li><a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20porta%20de%20a%C3%A7o." target="_blank" class="hover:text-primary">Portas de Aço</a></li>
            <li><a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20grades." target="_blank" class="hover:text-primary">Grades e Corrimão</a></li>
            <li><a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20um%20servi%C3%A7o%20de%20solda." target="_blank" class="hover:text-primary">Serviços de Solda</a></li>
            <li><a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20cobertura." target="_blank" class="hover:text-primary">Coberturas Metálicas</a></li>
          </ul>
        </div>

        <!-- Coluna 4: Atendimento Local & Mapa -->
        <div class="space-y-4">
          <h4 class="text-primary font-black text-base mb-4 tracking-wide uppercase">Atendimento Local & Mapa</h4>
          <p class="text-sm text-slate-300 font-normal">📍 Av. John Boyd Dunlop, 3520, Campinas - SP</p>
          <div class="w-full h-48 rounded-2xl overflow-hidden border border-blue-900/60 shadow-lg">
            <iframe 
              src="https://maps.google.com/maps?q=Av.+John+Boyd+Dunlop%2C+3520+-+Jardim+Nova+Esperan%C3%A7a%2C+Campinas+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              class="w-full h-full border-0" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Localização no Google Maps"
            ></iframe>
          </div>
        </div>

      </div>

      <!-- Barra de Direitos -->
      <div class="pt-8 border-t border-blue-900/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
        <p>&copy; 2026 Serralheria Precisão Metal. Todos os direitos reservados.</p>
        <div class="flex items-center gap-6">
          <a href="/politica-de-privacidade" class="hover:text-primary transition-colors">Políticas de Privacidade</a>
          <span class="text-blue-900">|</span>
          <a href="/termos-de-uso" class="hover:text-primary transition-colors">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>

  <script>
    const menu = document.getElementById('mobile-menu');
    const openBtn = document.getElementById('menu-open-btn');
    const closeBtn = document.getElementById('menu-close-btn');
    const menuLinks = document.querySelectorAll('.mobile-link');

    function openMenu() {
      if (!menu) return;
      menu.classList.remove('hidden');
      menu.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      if (!menu) return;
      menu.classList.remove('flex');
      menu.classList.add('hidden');
      document.body.style.overflow = '';
    }

    openBtn?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    menuLinks.forEach((link) => link.addEventListener('click', closeMenu));
  </script>
</body>
</html>`;

const renderServicePage = (serviceName, serviceDesc, iconSvg) => `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${serviceName} em Campinas | Serralheria Precisão Metal</title>
  <meta name="description" content="${serviceDesc}">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#FACC15',
            secondary: '#1E3A8A',
            accent: '#000000',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
</head>
<body class="min-h-screen flex flex-col bg-slate-50 text-slate-700 antialiased font-sans">

  <!-- Header -->
  <header class="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-gray-200/80 shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
      <a href="/" class="text-xl md:text-2xl font-black tracking-tight text-secondary flex items-center gap-3">
        <span class="w-10 h-10 bg-secondary text-primary rounded-xl flex items-center justify-center font-black">⚡</span>
        <span class="flex flex-col">
          <span class="text-secondary font-black leading-none text-lg">Precisão Metal</span>
          <span class="text-xs text-gray-500 font-semibold uppercase">Serralheria em Campinas</span>
        </span>
      </a>
      <a href="/" class="text-sm font-bold text-secondary hover:text-amber-500 transition-colors">&larr; Voltar para a Home</a>
    </div>
  </header>

  <!-- Hero do Serviço -->
  <main class="flex-grow">
    <section class="bg-gradient-to-b from-slate-900 via-secondary to-slate-950 text-white py-20">
      <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
        <div class="w-20 h-20 mx-auto bg-amber-500/20 text-primary rounded-3xl flex items-center justify-center border border-amber-400/30">
          ${iconSvg}
        </div>
        <h1 class="text-3xl md:text-5xl font-black text-white leading-tight">${serviceName} em Campinas</h1>
        <p class="text-slate-300 text-lg md:text-xl leading-relaxed">${serviceDesc}</p>
        <div class="pt-4">
          <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20${encodeURIComponent(serviceName)}." target="_blank" class="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-black px-8 py-4 rounded-2xl text-lg shadow-xl shadow-emerald-600/40 hover:scale-105 transition-all">
            💬 Solicitar Orçamento no WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- Detalhes e Diferenciais do Serviço -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-6 space-y-12">
        <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6">
          <h2 class="text-2xl font-black text-secondary">Por que contratar a Serralheria Precisão Metal para ${serviceName}?</h2>
          <ul class="space-y-4 text-slate-700">
            <li class="flex items-start gap-3"><span class="text-amber-500 font-black">✓</span> <span><strong>Materiais de Primeira Linha:</strong> Fabricação em aço galvalume e ligas metálicas certificadas contra corrosão.</span></li>
            <li class="flex items-start gap-3"><span class="text-amber-500 font-black">✓</span> <span><strong>Projetos 100% Sob Medida:</strong> Equipe especializada no atendimento residencial, comercial e industrial.</span></li>
            <li class="flex items-start gap-3"><span class="text-amber-500 font-black">✓</span> <span><strong>Garantia & Prazo Rigoroso:</strong> Entrega rápida e pontual em todos os bairros de Campinas e região.</span></li>
          </ul>
        </div>

        <div class="bg-slate-900 text-white p-8 md:p-10 rounded-3xl text-center space-y-6 shadow-2xl">
          <h3 class="text-2xl font-black text-primary">Precisa de Orçamento Rápido para ${serviceName}?</h3>
          <p class="text-slate-300">Entre em contato via WhatsApp e receba a avaliação do nosso serralheiro especialista sem compromisso.</p>
          <a href="https://wa.me/5511964299548?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20${encodeURIComponent(serviceName)}." target="_blank" class="inline-block bg-[#25D366] hover:bg-[#20ba59] text-white font-black px-8 py-4 rounded-2xl text-lg shadow-xl shadow-emerald-600/40 hover:scale-105 transition-all">
            Falar pelo WhatsApp Agora
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-secondary text-white py-8 text-center text-xs border-t border-blue-900">
    <p>&copy; 2026 Serralheria Precisão Metal - Av. John Boyd Dunlop, 3520, Campinas - SP</p>
  </footer>
</body>
</html>`;

const servicesMap = {
  '/servicos/portoes-automaticos': {
    name: 'Portões Automáticos & Sob Medida',
    desc: 'Portões basculantes, deslizantes e pivotantes fabricados em aço galvalume de alta resistência com motorização rápida e trava de segurança.',
    icon: `<svg class="w-10 h-10 stroke-current" fill="none" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 21h18M4 18V5a1 1 0 011-1h14a1 1 0 011 1v13M8 4v14M12 4v14M16 4v14M4 11h16" /></svg>`
  },
  '/servicos/estruturas-mezaninos': {
    name: 'Estruturas Metálicas & Mezaninos',
    desc: 'Construção e ampliação de mezaninos comerciais e industriais, galpões e coberturas metálicas com cálculo estrutural preciso.',
    icon: `<svg class="w-10 h-10 stroke-current" fill="none" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V3M5 21V3M3 7h18M3 17h18M5 7l14 10M19 7L5 17" /></svg>`
  },
  '/servicos/grades-corrimao': {
    name: 'Grades e Corrimão',
    desc: 'Grades de proteção reforçadas, corrimãos e guarda-corpos em aço para sacadas, escadas, varandas e janelas residenciais e comerciais.',
    icon: `<svg class="w-10 h-10 stroke-current" fill="none" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5h18M3 19h18M6 5v14M10 5v14M14 5v14M18 5v14M3 12h18" /></svg>`
  },
  '/servicos/portas-de-aco': {
    name: 'Portas de Aço de Enrolar',
    desc: 'Fabricação, instalação e automação de portas de enrolar em aço galvalume para lojas, comércios, galpões industriais e garagens.',
    icon: `<svg class="w-10 h-10 stroke-current" fill="none" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zM3 7h18M3 11h18M3 15h18M9 19h6" /></svg>`
  },
  '/servicos/servicos-de-solda': {
    name: 'Serviços de Solda em Geral',
    desc: 'Solda MIG, TIG e eletrodo para reparos urgentes, reforços de peças de aço, manutenção de portões e alterações de estruturas metálicas.',
    icon: `<svg class="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`
  },
  '/servicos/coberturas-metalicas': {
    name: 'Coberturas & Telhados Metálicos',
    desc: 'Coberturas em policarbonato e telha termoacústica galvalume para garagens, corredores, áreas gourmet e pátios comerciais.',
    icon: `<svg class="w-10 h-10 stroke-current" fill="none" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10M9 21V14h6v7" /></svg>`
  }
};

const renderDocumentPage = (title, content) => `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Serralheria Precisão Metal</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#FACC15',
            secondary: '#1E3A8A',
            accent: '#000000',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
</head>
<body class="min-h-screen flex flex-col bg-slate-50 text-slate-700 antialiased font-sans">
  <header class="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-gray-200/80 shadow-sm py-5">
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center font-bold">
      <a href="/" class="text-xl font-black tracking-tight text-secondary flex items-center gap-3">
        <span class="w-10 h-10 bg-secondary text-primary rounded-xl flex items-center justify-center font-black">⚡</span>
        <span class="flex flex-col">
          <span class="text-secondary font-black leading-none text-lg">Precisão Metal</span>
          <span class="text-xs text-gray-500 font-semibold uppercase">Serralheria em Campinas</span>
        </span>
      </a>
      <a href="/" class="text-sm font-bold text-secondary hover:text-amber-500 transition-colors">&larr; Voltar para a Home</a>
    </div>
  </header>

  <main class="flex-grow py-16 bg-white">
    <div class="max-w-3xl mx-auto px-6 space-y-6 font-medium">
      <h1 class="text-3xl font-black text-secondary mb-8">${title}</h1>
      <div class="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
        ${content}
      </div>
    </div>
  </main>

  <footer class="bg-secondary text-white py-8 text-center text-xs border-t border-blue-900">
    <p>&copy; 2026 Serralheria Precisão Metal - Av. John Boyd Dunlop, 3520, Campinas - SP</p>
  </footer>
</body>
</html>`;

const privacyContent = `
  <p>A sua privacidade é importante para nós. É política da Serralheria Precisão Metal respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.</p>
  <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço (como o envio de orçamentos por formulário ou WhatsApp). Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.</p>
  <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
  <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
  <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
  <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</p>
`;

const termsContent = `
  <p><strong>1. Termos</strong><br>Ao acessar ao site Serralheria Precisão Metal, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
  <p><strong>2. Uso de Licença</strong><br>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Serralheria Precisão Metal, apenas para visualização pessoal, transitória e não comercial.</p>
  <p><strong>3. Isenção de responsabilidade</strong><br>Os materiais no site da Serralheria Precisão Metal são fornecidos 'como estão'. Não oferecemos garantias, expressas ou implícitas, e, por este meio, isentamos e negamos todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
  <p><strong>4. Limitações</strong><br>Em caso algum a Serralheria Precisão Metal ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em nosso site.</p>
  <p><strong>5. Precisão dos materiais</strong><br>Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. Não garantimos que qualquer material em seu site seja preciso, completo ou atual.</p>
`;

const server = http.createServer((req, res) => {
  if (req.url === '/hero_metalworker.png') {
    const imgPath = path.join(__dirname, 'public', 'hero_metalworker.png');
    if (fs.existsSync(imgPath)) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      return fs.createReadStream(imgPath).pipe(res);
    }
  }

  if (req.url === '/politica-de-privacidade') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(renderDocumentPage('Políticas de Privacidade', privacyContent));
  }

  if (req.url === '/termos-de-uso') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(renderDocumentPage('Termos de Uso', termsContent));
  }

  if (req.url === '/servicos') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(renderServicesListPage());
  }

  if (servicesMap[req.url]) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(renderServicePage(servicesMap[req.url].name, servicesMap[req.url].desc, servicesMap[req.url].icon));
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(renderMainPage());
});

server.listen(4321, () => {
  console.log('Servidor rodando em http://localhost:4321');
});
