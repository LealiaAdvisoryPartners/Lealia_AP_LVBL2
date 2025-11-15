import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "pt" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.team": "Team",
    "nav.contact": "Contact Us",
    
    // Hero
    "hero.tagline": "Strategic Advisory for Transformative Outcomes",
    
    // Core Values
    "values.title": "Our Foundation",
    "values.integrity": "Integrity",
    "values.integrity.desc": "We uphold the highest ethical standards in every engagement",
    "values.excellence": "Excellence",
    "values.excellence.desc": "We deliver exceptional results through rigorous analysis and expertise",
    "values.partnership": "Partnership",
    "values.partnership.desc": "We work alongside our clients as trusted advisors",
    "values.innovation": "Innovation",
    "values.innovation.desc": "We bring creative solutions to complex business challenges",
    "values.cta": "Learn More About Us",
    
    // Team Preview
    "team.title": "Our Team",
    "team.subtitle": "Led by experienced professionals with deep M&A and financial expertise",
    "team.cta": "Meet Our Team",
    
    // Services Overview
    "services.title": "Our Services",
    "services.ma": "M&A Advisory",
    "services.ma.desc": "Comprehensive buy-side and sell-side advisory for strategic transactions",
    "services.performance": "Performance Improvement",
    "services.performance.desc": "Operational optimization and strategic enhancement initiatives",
    "services.modeling": "Financial Modeling",
    "services.modeling.desc": "Sophisticated financial models for decision-making and valuation",
    "services.cta": "Learn More About Our Services",
    
    // Contact Form
    "contact.title": "Get In Touch",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.company": "Company",
    "contact.message": "Message",
    "contact.name.placeholder": "Your name",
    "contact.email.placeholder": "your.email@company.com",
    "contact.company.placeholder": "Your company name",
    "contact.message.placeholder": "Tell us about your needs...",
    "contact.submit": "Send Message",
    "contact.success.title": "Message Sent!",
    "contact.success.desc": "Thank you for reaching out. We'll be in touch soon.",
    "contact.name.error": "Name must be at least 2 characters",
    "contact.email.error": "Please enter a valid email address",
    "contact.message.error": "Message must be at least 10 characters",
    
    // Footer
    "footer.tagline": "Strategic Advisory for Transformative Outcomes",
    "footer.quicklinks": "Quick Links",
    "footer.copyright": "All rights reserved.",
    
    // About Page
    "about.title": "About Lealia Advisory Partners",
    "about.intro": "Lealia Advisory Partners is a premier M&A advisory firm dedicated to providing strategic guidance and expert counsel to businesses navigating complex transactions and transformative growth opportunities. With deep industry expertise and a client-centric approach, we deliver exceptional results that create lasting value for our clients.",
    "about.whyus.title": "Why Choose Us?",
    "about.whyus.expertise": "Deep Industry Expertise",
    "about.whyus.expertise.desc": "Our team brings decades of combined experience in M&A advisory, having successfully guided transactions across diverse industries and deal sizes. We understand the nuances of complex business transactions and leverage this knowledge to deliver superior outcomes for our clients.",
    "about.whyus.tailored": "Tailored Solutions",
    "about.whyus.tailored.desc": "We recognize that every business is unique, with its own challenges and opportunities. Our approach is highly customized, ensuring that our strategies align perfectly with your specific goals, industry dynamics, and organizational culture.",
    "about.whyus.track": "Proven Track Record",
    "about.whyus.track.desc": "We have consistently delivered exceptional results for our clients, from successful acquisitions and strategic divestitures to transformative performance improvement initiatives. Our track record speaks to our commitment to excellence and measurable outcomes.",
    "about.whyus.client": "Client-Centric Approach",
    "about.whyus.client.desc": "We view ourselves as long-term partners in your success. Our relationships are built on trust, transparency, and open communication. We are deeply invested in understanding your business and working collaboratively to achieve your strategic objectives.",
    "about.story.title": "How We Were Formed",
    "about.story.p1": "Lealia Advisory Partners was founded with a clear vision: to create a boutique advisory firm that combines the rigor and expertise of large institutions with the personalized service and entrepreneurial spirit of a smaller firm.",
    "about.story.p2": "Our founding partners, having worked together for years at leading global institutions, recognized a gap in the market. Mid-sized and growth-oriented companies often struggled to access the same level of strategic advisory services available to large corporations. At the same time, many firms had become too process-driven, losing the personal touch and creative problem-solving that are essential to successful transactions.",
    "about.story.p3": "We established Lealia to address these challenges. Our name reflects our core philosophy: 'Lealia' derives from 'loyalty' and 'alliance,' emphasizing our commitment to building lasting partnerships with our clients. We believe that the best outcomes are achieved when advisors are truly aligned with their clients' success.",
    "about.story.p4": "Since our founding, we have had the privilege of working with exceptional entrepreneurs, business leaders, and investors. Each engagement has reinforced our belief that thoughtful strategy, rigorous analysis, and genuine partnership are the keys to creating lasting value. We look forward to continuing this journey and helping more businesses achieve their strategic goals.",
    
    // Team Page
    "teampage.title": "Meet Our Team",
    "teampage.intro": "Our team combines deep industry expertise, analytical rigor, and a genuine commitment to client success. We bring decades of experience in M&A advisory, strategy consulting, and operational improvement to every engagement.",
    "teampage.role": "Managing Partner",
    "teampage.bio1.p1": "John Anderson is a Managing Partner at Lealia Advisory Partners with over 20 years of experience in M&A advisory and investment banking. He has advised on transactions valued at over $15 billion across diverse industries including technology, healthcare, manufacturing, and financial services.",
    "teampage.bio1.p2": "Prior to co-founding Lealia, John spent 12 years at a leading global investment bank where he served as Managing Director in the M&A group. He specialized in advising middle-market companies on strategic transactions, including buy-side advisory, sell-side advisory, and capital raising initiatives.",
    "teampage.bio1.p3": "John holds an MBA from Harvard Business School and a Bachelor's degree in Economics from Yale University. He is a frequent speaker at industry conferences and has been recognized as a leading M&A advisor by various industry publications.",
    "teampage.bio1.p4": "His approach is characterized by deep analytical rigor, creative problem-solving, and an unwavering commitment to client success. John is known for his ability to navigate complex negotiations and deliver outcomes that exceed client expectations.",
    "teampage.bio2.p1": "Sarah Mitchell is a Managing Partner at Lealia Advisory Partners, bringing extensive expertise in performance improvement, operational optimization, and strategic transformation. With over 18 years of experience, she has helped numerous organizations unlock value and achieve sustainable growth.",
    "teampage.bio2.p2": "Before joining Lealia, Sarah was a Partner at a premier management consulting firm, where she led engagements focused on operational excellence, cost reduction, and post-merger integration. Her work has driven significant improvements in profitability and operational efficiency for clients across various sectors.",
    "teampage.bio2.p3": "Sarah earned her MBA from Stanford Graduate School of Business and holds a Bachelor's degree in Engineering from MIT. She is a Certified Management Consultant (CMC) and has published several articles on performance improvement best practices.",
    "teampage.bio2.p4": "Sarah's collaborative approach and analytical acumen enable her to quickly identify opportunities and develop practical, implementable strategies. She is passionate about partnering with clients to achieve transformative results and build lasting organizational capabilities.",
    "teampage.cta": "Ready to Work Together?",
    
    // Services Page
    "servicespage.nav": "Our Services",
    "servicespage.overview": "Overview",
    "servicespage.buyside": "M&A Buy-Side",
    "servicespage.sellside": "M&A Sell-Side",
    "servicespage.performance": "Performance Improvement",
    "servicespage.modeling": "Modeling",
    "servicespage.overview.title": "Our Services",
    "servicespage.overview.p1": "At Lealia Advisory Partners, we offer comprehensive advisory services designed to help businesses navigate complex transactions, optimize performance, and achieve strategic growth objectives.",
    "servicespage.overview.p2": "Our expertise spans the full spectrum of M&A advisory, from buy-side and sell-side transactions to performance improvement and sophisticated financial modeling. We combine deep industry knowledge with rigorous analytical capabilities to deliver exceptional outcomes.",
    "servicespage.overview.p3": "Each engagement is tailored to your unique needs, ensuring that our strategies align with your business objectives and create lasting value.",
    "servicespage.buyside.title": "M&A Buy-Side Advisory",
    "servicespage.buyside.desc": "Our buy-side advisory services help clients identify, evaluate, and successfully execute strategic acquisitions. We guide you through every stage of the process, from defining your acquisition strategy to closing the transaction and supporting post-merger integration.",
    "servicespage.buyside.step1": "Strategy Definition",
    "servicespage.buyside.step2": "Target Identification",
    "servicespage.buyside.step3": "Due Diligence",
    "servicespage.buyside.step4": "Valuation",
    "servicespage.buyside.step5": "Negotiation & Closing",
    "servicespage.sellside.title": "M&A Sell-Side Advisory",
    "servicespage.sellside.desc": "Our sell-side advisory services maximize value for business owners seeking to divest or exit their companies. We manage the entire process with discretion and professionalism, ensuring optimal outcomes for our clients.",
    "servicespage.sellside.step1": "Preparation",
    "servicespage.sellside.step2": "Valuation",
    "servicespage.sellside.step3": "Marketing",
    "servicespage.sellside.step4": "Buyer Selection",
    "servicespage.sellside.step5": "Transaction Completion",
    "servicespage.performance.title": "Performance Improvement",
    "servicespage.performance.desc": "Our performance improvement services help businesses identify and capture operational efficiencies, enhance profitability, and drive sustainable growth. We work collaboratively with your team to develop and implement strategies that deliver measurable results.",
    "servicespage.performance.step1": "Assessment",
    "servicespage.performance.step1.desc": "Comprehensive analysis of current state",
    "servicespage.performance.step2": "Strategy Development",
    "servicespage.performance.step2.desc": "Tailored improvement roadmap",
    "servicespage.performance.step3": "Implementation",
    "servicespage.performance.step3.desc": "Execute initiatives with your team",
    "servicespage.performance.step4": "Monitoring & Optimization",
    "servicespage.performance.step4.desc": "Track results and refine approach",
    "servicespage.modeling.title": "Financial Modeling",
    "servicespage.modeling.desc": "Our financial modeling expertise provides clients with sophisticated analytical tools for strategic decision-making. We build robust, flexible models that enable you to evaluate scenarios, assess risks, and make informed business decisions.",
    "servicespage.modeling.item1": "Valuation Models",
    "servicespage.modeling.item2": "Transaction Models",
    "servicespage.modeling.item3": "Scenario Analysis",
    "servicespage.modeling.item4": "Forecasting Models",
    "servicespage.cta": "Let's Discuss Your Needs",
  },
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.team": "Equipe",
    "nav.contact": "Contate-nos",
    
    // Hero
    "hero.tagline": "Consultoria Estratégica para Resultados Transformadores",
    
    // Core Values
    "values.title": "Nossa Base",
    "values.integrity": "Integridade",
    "values.integrity.desc": "Mantemos os mais altos padrões éticos em cada compromisso",
    "values.excellence": "Excelência",
    "values.excellence.desc": "Entregamos resultados excepcionais através de análise rigorosa e expertise",
    "values.partnership": "Parceria",
    "values.partnership.desc": "Trabalhamos ao lado de nossos clientes como consultores de confiança",
    "values.innovation": "Inovação",
    "values.innovation.desc": "Trazemos soluções criativas para desafios empresariais complexos",
    "values.cta": "Saiba Mais Sobre Nós",
    
    // Team Preview
    "team.title": "Nossa Equipe",
    "team.subtitle": "Liderada por profissionais experientes com profunda expertise em M&A e finanças",
    "team.cta": "Conheça Nossa Equipe",
    
    // Services Overview
    "services.title": "Nossos Serviços",
    "services.ma": "Consultoria em M&A",
    "services.ma.desc": "Consultoria abrangente de compra e venda para transações estratégicas",
    "services.performance": "Melhoria de Performance",
    "services.performance.desc": "Otimização operacional e iniciativas de aprimoramento estratégico",
    "services.modeling": "Modelagem Financeira",
    "services.modeling.desc": "Modelos financeiros sofisticados para tomada de decisões e avaliação",
    "services.cta": "Saiba Mais Sobre Nossos Serviços",
    
    // Contact Form
    "contact.title": "Entre em Contato",
    "contact.name": "Nome",
    "contact.email": "E-mail",
    "contact.company": "Empresa",
    "contact.message": "Mensagem",
    "contact.name.placeholder": "Seu nome",
    "contact.email.placeholder": "seu.email@empresa.com",
    "contact.company.placeholder": "Nome da sua empresa",
    "contact.message.placeholder": "Conte-nos sobre suas necessidades...",
    "contact.submit": "Enviar Mensagem",
    "contact.success.title": "Mensagem Enviada!",
    "contact.success.desc": "Obrigado por entrar em contato. Responderemos em breve.",
    "contact.name.error": "O nome deve ter pelo menos 2 caracteres",
    "contact.email.error": "Por favor, insira um endereço de e-mail válido",
    "contact.message.error": "A mensagem deve ter pelo menos 10 caracteres",
    
    // Footer
    "footer.tagline": "Consultoria Estratégica para Resultados Transformadores",
    "footer.quicklinks": "Links Rápidos",
    "footer.copyright": "Todos os direitos reservados.",
    
    // About Page
    "about.title": "Sobre a Lealia Advisory Partners",
    "about.intro": "A Lealia Advisory Partners é uma empresa líder em consultoria de M&A dedicada a fornecer orientação estratégica e consultoria especializada para empresas que navegam transações complexas e oportunidades de crescimento transformador. Com profunda expertise do setor e uma abordagem centrada no cliente, entregamos resultados excepcionais que criam valor duradouro para nossos clientes.",
    "about.whyus.title": "Por Que Nos Escolher?",
    "about.whyus.expertise": "Expertise Profunda do Setor",
    "about.whyus.expertise.desc": "Nossa equipe traz décadas de experiência combinada em consultoria de M&A, tendo orientado com sucesso transações em diversos setores e tamanhos de negócios. Compreendemos as nuances de transações empresariais complexas e aproveitamos esse conhecimento para entregar resultados superiores aos nossos clientes.",
    "about.whyus.tailored": "Soluções Personalizadas",
    "about.whyus.tailored.desc": "Reconhecemos que cada empresa é única, com seus próprios desafios e oportunidades. Nossa abordagem é altamente personalizada, garantindo que nossas estratégias se alinhem perfeitamente com seus objetivos específicos, dinâmica do setor e cultura organizacional.",
    "about.whyus.track": "Histórico Comprovado",
    "about.whyus.track.desc": "Entregamos consistentemente resultados excepcionais para nossos clientes, desde aquisições bem-sucedidas e desinvestimentos estratégicos até iniciativas transformadoras de melhoria de desempenho. Nosso histórico comprova nosso compromisso com a excelência e resultados mensuráveis.",
    "about.whyus.client": "Abordagem Centrada no Cliente",
    "about.whyus.client.desc": "Nos vemos como parceiros de longo prazo no seu sucesso. Nossos relacionamentos são construídos sobre confiança, transparência e comunicação aberta. Estamos profundamente investidos em compreender seu negócio e trabalhar colaborativamente para alcançar seus objetivos estratégicos.",
    "about.story.title": "Como Fomos Formados",
    "about.story.p1": "A Lealia Advisory Partners foi fundada com uma visão clara: criar uma empresa de consultoria boutique que combine o rigor e expertise de grandes instituições com o serviço personalizado e espírito empreendedor de uma empresa menor.",
    "about.story.p2": "Nossos sócios fundadores, tendo trabalhado juntos por anos em instituições globais líderes, reconheceram uma lacuna no mercado. Empresas de médio porte e orientadas ao crescimento frequentemente lutavam para acessar o mesmo nível de serviços de consultoria estratégica disponíveis para grandes corporações. Ao mesmo tempo, muitas empresas haviam se tornado muito orientadas a processos, perdendo o toque pessoal e a solução criativa de problemas que são essenciais para transações bem-sucedidas.",
    "about.story.p3": "Estabelecemos a Lealia para enfrentar esses desafios. Nosso nome reflete nossa filosofia central: 'Lealia' deriva de 'lealdade' e 'aliança', enfatizando nosso compromisso em construir parcerias duradouras com nossos clientes. Acreditamos que os melhores resultados são alcançados quando os consultores estão verdadeiramente alinhados com o sucesso de seus clientes.",
    "about.story.p4": "Desde nossa fundação, tivemos o privilégio de trabalhar com empreendedores excepcionais, líderes empresariais e investidores. Cada compromisso reforçou nossa crença de que estratégia cuidadosa, análise rigorosa e parceria genuína são as chaves para criar valor duradouro. Esperamos continuar esta jornada e ajudar mais empresas a alcançar seus objetivos estratégicos.",
    
    // Team Page
    "teampage.title": "Conheça Nossa Equipe",
    "teampage.intro": "Nossa equipe combina profunda expertise do setor, rigor analítico e um compromisso genuíno com o sucesso do cliente. Trazemos décadas de experiência em consultoria de M&A, consultoria estratégica e melhoria operacional para cada compromisso.",
    "teampage.role": "Sócio Diretor",
    "teampage.bio1.p1": "John Anderson é Sócio Diretor da Lealia Advisory Partners com mais de 20 anos de experiência em consultoria de M&A e banco de investimento. Ele assessorou transações avaliadas em mais de US$ 15 bilhões em diversos setores, incluindo tecnologia, saúde, manufatura e serviços financeiros.",
    "teampage.bio1.p2": "Antes de cofundar a Lealia, John passou 12 anos em um banco de investimento global líder, onde atuou como Diretor Geral no grupo de M&A. Ele se especializou em assessorar empresas de médio porte em transações estratégicas, incluindo consultoria de compra, consultoria de venda e iniciativas de captação de capital.",
    "teampage.bio1.p3": "John possui MBA pela Harvard Business School e graduação em Economia pela Yale University. Ele é palestrante frequente em conferências do setor e foi reconhecido como consultor líder em M&A por várias publicações do setor.",
    "teampage.bio1.p4": "Sua abordagem é caracterizada por profundo rigor analítico, solução criativa de problemas e compromisso inabalável com o sucesso do cliente. John é conhecido por sua capacidade de navegar negociações complexas e entregar resultados que excedem as expectativas dos clientes.",
    "teampage.bio2.p1": "Sarah Mitchell é Sócia Diretora da Lealia Advisory Partners, trazendo ampla expertise em melhoria de desempenho, otimização operacional e transformação estratégica. Com mais de 18 anos de experiência, ela ajudou inúmeras organizações a desbloquear valor e alcançar crescimento sustentável.",
    "teampage.bio2.p2": "Antes de se juntar à Lealia, Sarah foi Sócia em uma empresa de consultoria de gestão de primeira linha, onde liderou compromissos focados em excelência operacional, redução de custos e integração pós-fusão. Seu trabalho impulsionou melhorias significativas na lucratividade e eficiência operacional para clientes em vários setores.",
    "teampage.bio2.p3": "Sarah obteve seu MBA na Stanford Graduate School of Business e possui graduação em Engenharia pelo MIT. Ela é Consultora de Gestão Certificada (CMC) e publicou vários artigos sobre melhores práticas de melhoria de desempenho.",
    "teampage.bio2.p4": "A abordagem colaborativa e perspicácia analítica de Sarah a capacitam a identificar rapidamente oportunidades e desenvolver estratégias práticas e implementáveis. Ela é apaixonada por fazer parceria com clientes para alcançar resultados transformadores e construir capacidades organizacionais duradouras.",
    "teampage.cta": "Pronto para Trabalhar Juntos?",
    
    // Services Page
    "servicespage.nav": "Nossos Serviços",
    "servicespage.overview": "Visão Geral",
    "servicespage.buyside": "M&A Lado Comprador",
    "servicespage.sellside": "M&A Lado Vendedor",
    "servicespage.performance": "Melhoria de Performance",
    "servicespage.modeling": "Modelagem",
    "servicespage.overview.title": "Nossos Serviços",
    "servicespage.overview.p1": "Na Lealia Advisory Partners, oferecemos serviços de consultoria abrangentes projetados para ajudar empresas a navegar transações complexas, otimizar desempenho e alcançar objetivos de crescimento estratégico.",
    "servicespage.overview.p2": "Nossa expertise abrange todo o espectro de consultoria de M&A, desde transações de compra e venda até melhoria de desempenho e modelagem financeira sofisticada. Combinamos profundo conhecimento do setor com capacidades analíticas rigorosas para entregar resultados excepcionais.",
    "servicespage.overview.p3": "Cada compromisso é adaptado às suas necessidades únicas, garantindo que nossas estratégias se alinhem com seus objetivos empresariais e criem valor duradouro.",
    "servicespage.buyside.title": "Consultoria de M&A Lado Comprador",
    "servicespage.buyside.desc": "Nossos serviços de consultoria de compra ajudam clientes a identificar, avaliar e executar com sucesso aquisições estratégicas. Orientamos você em cada etapa do processo, desde definir sua estratégia de aquisição até fechar a transação e apoiar a integração pós-fusão.",
    "servicespage.buyside.step1": "Definição de Estratégia",
    "servicespage.buyside.step2": "Identificação de Alvos",
    "servicespage.buyside.step3": "Due Diligence",
    "servicespage.buyside.step4": "Avaliação",
    "servicespage.buyside.step5": "Negociação e Fechamento",
    "servicespage.sellside.title": "Consultoria de M&A Lado Vendedor",
    "servicespage.sellside.desc": "Nossos serviços de consultoria de venda maximizam o valor para proprietários de empresas que buscam desinvestir ou sair de suas empresas. Gerenciamos todo o processo com discrição e profissionalismo, garantindo resultados ideais para nossos clientes.",
    "servicespage.sellside.step1": "Preparação",
    "servicespage.sellside.step2": "Avaliação",
    "servicespage.sellside.step3": "Marketing",
    "servicespage.sellside.step4": "Seleção de Compradores",
    "servicespage.sellside.step5": "Conclusão da Transação",
    "servicespage.performance.title": "Melhoria de Performance",
    "servicespage.performance.desc": "Nossos serviços de melhoria de desempenho ajudam empresas a identificar e capturar eficiências operacionais, aumentar a lucratividade e impulsionar o crescimento sustentável. Trabalhamos colaborativamente com sua equipe para desenvolver e implementar estratégias que entregam resultados mensuráveis.",
    "servicespage.performance.step1": "Avaliação",
    "servicespage.performance.step1.desc": "Análise abrangente do estado atual",
    "servicespage.performance.step2": "Desenvolvimento de Estratégia",
    "servicespage.performance.step2.desc": "Roteiro de melhoria personalizado",
    "servicespage.performance.step3": "Implementação",
    "servicespage.performance.step3.desc": "Executar iniciativas com sua equipe",
    "servicespage.performance.step4": "Monitoramento e Otimização",
    "servicespage.performance.step4.desc": "Acompanhar resultados e refinar abordagem",
    "servicespage.modeling.title": "Modelagem Financeira",
    "servicespage.modeling.desc": "Nossa expertise em modelagem financeira fornece aos clientes ferramentas analíticas sofisticadas para tomada de decisões estratégicas. Construímos modelos robustos e flexíveis que permitem avaliar cenários, avaliar riscos e tomar decisões empresariais informadas.",
    "servicespage.modeling.item1": "Modelos de Avaliação",
    "servicespage.modeling.item2": "Modelos de Transação",
    "servicespage.modeling.item3": "Análise de Cenários",
    "servicespage.modeling.item4": "Modelos de Previsão",
    "servicespage.cta": "Vamos Discutir Suas Necessidades",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Acerca",
    "nav.services": "Servicios",
    "nav.team": "Equipo",
    "nav.contact": "Contáctenos",
    
    // Hero
    "hero.tagline": "Asesoría Estratégica para Resultados Transformadores",
    
    // Core Values
    "values.title": "Nuestra Fundación",
    "values.integrity": "Integridad",
    "values.integrity.desc": "Mantenemos los más altos estándares éticos en cada compromiso",
    "values.excellence": "Excelencia",
    "values.excellence.desc": "Entregamos resultados excepcionales a través de análisis riguroso y experiencia",
    "values.partnership": "Asociación",
    "values.partnership.desc": "Trabajamos junto a nuestros clientes como asesores de confianza",
    "values.innovation": "Innovación",
    "values.innovation.desc": "Aportamos soluciones creativas a desafíos empresariales complejos",
    "values.cta": "Conozca Más Sobre Nosotros",
    
    // Team Preview
    "team.title": "Nuestro Equipo",
    "team.subtitle": "Dirigido por profesionales experimentados con profunda experiencia en M&A y finanzas",
    "team.cta": "Conozca Nuestro Equipo",
    
    // Services Overview
    "services.title": "Nuestros Servicios",
    "services.ma": "Asesoría en M&A",
    "services.ma.desc": "Asesoría integral de compra y venta para transacciones estratégicas",
    "services.performance": "Mejora del Rendimiento",
    "services.performance.desc": "Optimización operacional e iniciativas de mejora estratégica",
    "services.modeling": "Modelado Financiero",
    "services.modeling.desc": "Modelos financieros sofisticados para toma de decisiones y valoración",
    "services.cta": "Conozca Más Sobre Nuestros Servicios",
    
    // Contact Form
    "contact.title": "Póngase en Contacto",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.company": "Empresa",
    "contact.message": "Mensaje",
    "contact.name.placeholder": "Su nombre",
    "contact.email.placeholder": "su.correo@empresa.com",
    "contact.company.placeholder": "Nombre de su empresa",
    "contact.message.placeholder": "Cuéntenos sobre sus necesidades...",
    "contact.submit": "Enviar Mensaje",
    "contact.success.title": "¡Mensaje Enviado!",
    "contact.success.desc": "Gracias por comunicarse. Estaremos en contacto pronto.",
    "contact.name.error": "El nombre debe tener al menos 2 caracteres",
    "contact.email.error": "Por favor ingrese una dirección de correo válida",
    "contact.message.error": "El mensaje debe tener al menos 10 caracteres",
    
    // Footer
    "footer.tagline": "Asesoría Estratégica para Resultados Transformadores",
    "footer.quicklinks": "Enlaces Rápidos",
    "footer.copyright": "Todos los derechos reservados.",
    
    // About Page
    "about.title": "Acerca de Lealia Advisory Partners",
    "about.intro": "Lealia Advisory Partners es una firma líder en asesoría de M&A dedicada a proporcionar orientación estratégica y asesoramiento experto a empresas que navegan transacciones complejas y oportunidades de crecimiento transformador. Con profunda experiencia en la industria y un enfoque centrado en el cliente, entregamos resultados excepcionales que crean valor duradero para nuestros clientes.",
    "about.whyus.title": "¿Por Qué Elegirnos?",
    "about.whyus.expertise": "Experiencia Profunda en la Industria",
    "about.whyus.expertise.desc": "Nuestro equipo aporta décadas de experiencia combinada en asesoría de M&A, habiendo guiado con éxito transacciones en diversas industrias y tamaños de negocio. Entendemos los matices de las transacciones empresariales complejas y aprovechamos este conocimiento para entregar resultados superiores a nuestros clientes.",
    "about.whyus.tailored": "Soluciones a Medida",
    "about.whyus.tailored.desc": "Reconocemos que cada negocio es único, con sus propios desafíos y oportunidades. Nuestro enfoque es altamente personalizado, asegurando que nuestras estrategias se alineen perfectamente con sus objetivos específicos, dinámica de la industria y cultura organizacional.",
    "about.whyus.track": "Historial Comprobado",
    "about.whyus.track.desc": "Hemos entregado consistentemente resultados excepcionales para nuestros clientes, desde adquisiciones exitosas y desinversiones estratégicas hasta iniciativas transformadoras de mejora del rendimiento. Nuestro historial habla de nuestro compromiso con la excelencia y resultados medibles.",
    "about.whyus.client": "Enfoque Centrado en el Cliente",
    "about.whyus.client.desc": "Nos vemos como socios a largo plazo en su éxito. Nuestras relaciones se construyen sobre confianza, transparencia y comunicación abierta. Estamos profundamente comprometidos en comprender su negocio y trabajar colaborativamente para alcanzar sus objetivos estratégicos.",
    "about.story.title": "Cómo Nos Formamos",
    "about.story.p1": "Lealia Advisory Partners fue fundada con una visión clara: crear una firma de asesoría boutique que combine el rigor y la experiencia de grandes instituciones con el servicio personalizado y el espíritu emprendedor de una firma más pequeña.",
    "about.story.p2": "Nuestros socios fundadores, habiendo trabajado juntos durante años en instituciones globales líderes, reconocieron una brecha en el mercado. Las empresas de tamaño medio y orientadas al crecimiento a menudo luchaban por acceder al mismo nivel de servicios de asesoría estratégica disponibles para grandes corporaciones. Al mismo tiempo, muchas firmas se habían vuelto demasiado orientadas a procesos, perdiendo el toque personal y la resolución creativa de problemas que son esenciales para transacciones exitosas.",
    "about.story.p3": "Establecimos Lealia para abordar estos desafíos. Nuestro nombre refleja nuestra filosofía central: 'Lealia' deriva de 'lealtad' y 'alianza', enfatizando nuestro compromiso de construir asociaciones duraderas con nuestros clientes. Creemos que los mejores resultados se logran cuando los asesores están verdaderamente alineados con el éxito de sus clientes.",
    "about.story.p4": "Desde nuestra fundación, hemos tenido el privilegio de trabajar con empresarios excepcionales, líderes empresariales e inversores. Cada compromiso ha reforzado nuestra creencia de que la estrategia cuidadosa, el análisis riguroso y la asociación genuina son las claves para crear valor duradero. Esperamos continuar este viaje y ayudar a más empresas a alcanzar sus objetivos estratégicos.",
    
    // Team Page
    "teampage.title": "Conozca Nuestro Equipo",
    "teampage.intro": "Nuestro equipo combina profunda experiencia en la industria, rigor analítico y un compromiso genuino con el éxito del cliente. Aportamos décadas de experiencia en asesoría de M&A, consultoría estratégica y mejora operacional a cada compromiso.",
    "teampage.role": "Socio Director",
    "teampage.bio1.p1": "John Anderson es Socio Director en Lealia Advisory Partners con más de 20 años de experiencia en asesoría de M&A y banca de inversión. Ha asesorado transacciones valoradas en más de $15 mil millones en diversas industrias incluyendo tecnología, salud, manufactura y servicios financieros.",
    "teampage.bio1.p2": "Antes de cofundar Lealia, John pasó 12 años en un banco de inversión global líder donde se desempeñó como Director General en el grupo de M&A. Se especializó en asesorar empresas de mercado medio en transacciones estratégicas, incluyendo asesoría de compra, asesoría de venta e iniciativas de recaudación de capital.",
    "teampage.bio1.p3": "John posee un MBA de Harvard Business School y una licenciatura en Economía de Yale University. Es un orador frecuente en conferencias de la industria y ha sido reconocido como asesor líder en M&A por varias publicaciones de la industria.",
    "teampage.bio1.p4": "Su enfoque se caracteriza por un profundo rigor analítico, resolución creativa de problemas y un compromiso inquebrantable con el éxito del cliente. John es conocido por su capacidad para navegar negociaciones complejas y entregar resultados que superan las expectativas del cliente.",
    "teampage.bio2.p1": "Sarah Mitchell es Socia Directora en Lealia Advisory Partners, aportando amplia experiencia en mejora del rendimiento, optimización operacional y transformación estratégica. Con más de 18 años de experiencia, ha ayudado a numerosas organizaciones a desbloquear valor y lograr crecimiento sostenible.",
    "teampage.bio2.p2": "Antes de unirse a Lealia, Sarah fue Socia en una firma de consultoría de gestión de primer nivel, donde lideró compromisos enfocados en excelencia operacional, reducción de costos e integración post-fusión. Su trabajo ha impulsado mejoras significativas en rentabilidad y eficiencia operacional para clientes en varios sectores.",
    "teampage.bio2.p3": "Sarah obtuvo su MBA de Stanford Graduate School of Business y posee una licenciatura en Ingeniería del MIT. Es Consultora de Gestión Certificada (CMC) y ha publicado varios artículos sobre mejores prácticas de mejora del rendimiento.",
    "teampage.bio2.p4": "El enfoque colaborativo y la perspicacia analítica de Sarah le permiten identificar rápidamente oportunidades y desarrollar estrategias prácticas e implementables. Le apasiona asociarse con clientes para lograr resultados transformadores y construir capacidades organizacionales duraderas.",
    "teampage.cta": "¿Listo para Trabajar Juntos?",
    
    // Services Page
    "servicespage.nav": "Nuestros Servicios",
    "servicespage.overview": "Visión General",
    "servicespage.buyside": "M&A Lado Comprador",
    "servicespage.sellside": "M&A Lado Vendedor",
    "servicespage.performance": "Mejora del Rendimiento",
    "servicespage.modeling": "Modelado",
    "servicespage.overview.title": "Nuestros Servicios",
    "servicespage.overview.p1": "En Lealia Advisory Partners, ofrecemos servicios de asesoría integral diseñados para ayudar a las empresas a navegar transacciones complejas, optimizar el rendimiento y alcanzar objetivos de crecimiento estratégico.",
    "servicespage.overview.p2": "Nuestra experiencia abarca todo el espectro de asesoría en M&A, desde transacciones de compra y venta hasta mejora del rendimiento y modelado financiero sofisticado. Combinamos profundo conocimiento de la industria con capacidades analíticas rigurosas para entregar resultados excepcionales.",
    "servicespage.overview.p3": "Cada compromiso se adapta a sus necesidades únicas, asegurando que nuestras estrategias se alineen con sus objetivos empresariales y creen valor duradero.",
    "servicespage.buyside.title": "Asesoría de M&A Lado Comprador",
    "servicespage.buyside.desc": "Nuestros servicios de asesoría de compra ayudan a los clientes a identificar, evaluar y ejecutar con éxito adquisiciones estratégicas. Lo guiamos a través de cada etapa del proceso, desde definir su estrategia de adquisición hasta cerrar la transacción y apoyar la integración post-fusión.",
    "servicespage.buyside.step1": "Definición de Estrategia",
    "servicespage.buyside.step2": "Identificación de Objetivos",
    "servicespage.buyside.step3": "Due Diligence",
    "servicespage.buyside.step4": "Valoración",
    "servicespage.buyside.step5": "Negociación y Cierre",
    "servicespage.sellside.title": "Asesoría de M&A Lado Vendedor",
    "servicespage.sellside.desc": "Nuestros servicios de asesoría de venta maximizan el valor para los propietarios de empresas que buscan desinvertir o salir de sus compañías. Gestionamos todo el proceso con discreción y profesionalismo, asegurando resultados óptimos para nuestros clientes.",
    "servicespage.sellside.step1": "Preparación",
    "servicespage.sellside.step2": "Valoración",
    "servicespage.sellside.step3": "Marketing",
    "servicespage.sellside.step4": "Selección de Compradores",
    "servicespage.sellside.step5": "Finalización de Transacción",
    "servicespage.performance.title": "Mejora del Rendimiento",
    "servicespage.performance.desc": "Nuestros servicios de mejora del rendimiento ayudan a las empresas a identificar y capturar eficiencias operacionales, mejorar la rentabilidad e impulsar el crecimiento sostenible. Trabajamos colaborativamente con su equipo para desarrollar e implementar estrategias que entreguen resultados medibles.",
    "servicespage.performance.step1": "Evaluación",
    "servicespage.performance.step1.desc": "Análisis integral del estado actual",
    "servicespage.performance.step2": "Desarrollo de Estrategia",
    "servicespage.performance.step2.desc": "Hoja de ruta de mejora personalizada",
    "servicespage.performance.step3": "Implementación",
    "servicespage.performance.step3.desc": "Ejecutar iniciativas con su equipo",
    "servicespage.performance.step4": "Monitoreo y Optimización",
    "servicespage.performance.step4.desc": "Seguir resultados y refinar enfoque",
    "servicespage.modeling.title": "Modelado Financiero",
    "servicespage.modeling.desc": "Nuestra experiencia en modelado financiero proporciona a los clientes herramientas analíticas sofisticadas para la toma de decisiones estratégicas. Construimos modelos robustos y flexibles que le permiten evaluar escenarios, valorar riesgos y tomar decisiones empresariales informadas.",
    "servicespage.modeling.item1": "Modelos de Valoración",
    "servicespage.modeling.item2": "Modelos de Transacción",
    "servicespage.modeling.item3": "Análisis de Escenarios",
    "servicespage.modeling.item4": "Modelos de Pronóstico",
    "servicespage.cta": "Discutamos Sus Necesidades",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
