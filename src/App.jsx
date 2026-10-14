import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import confetti from 'canvas-confetti';
import {
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Video,
  Flame,
  Send,
  Bot,
  Check,
  FileText,
  Volume2,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const navbarRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Campagne Facebook Ads + Vidéos IA',
    message: ''
  });

  // Track scrolling for floating pill navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Animations with Responsive MatchMedia
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Stagger entrance
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTl
        .from('.hero-badge', {
          y: -15,
          opacity: 0,
          duration: 0.8,
          delay: 0.15
        })
        .from('.hero-avatar', {
          scale: 0.85,
          opacity: 0,
          duration: 0.9,
          ease: 'back.out(1.5)'
        }, '-=0.5')
        .from('.hero-title-name', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08
        }, '-=0.5')
        .from('.hero-subtitle', {
          y: 20,
          opacity: 0,
          duration: 0.7
        }, '-=0.4')
        .from('.hero-stats', {
          y: 15,
          opacity: 0,
          duration: 0.6
        }, '-=0.3')
        .from('.hero-cta-btn', {
          y: 20,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1
        }, '-=0.3')
        .from('.hero-scroll-indicator', {
          opacity: 0,
          y: -10,
          duration: 0.5
        }, '-=0.2');

      // Responsive GSAP animations
      const mm = gsap.matchMedia();

      // Desktop layout animations (>= 768px)
      mm.add("(min-width: 768px)", () => {
        gsap.from('.about-left', {
          scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          x: -40,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out'
        });

        gsap.from('.about-right', {
          scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          x: 40,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out'
        });

        const cards = gsap.utils.toArray('.timeline-card');
        cards.forEach((card, index) => {
          const isEven = index % 2 === 0;
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            x: isEven ? -40 : 40,
            opacity: 0,
            duration: 0.85,
            ease: 'power3.out'
          });
        });
      });

      // Mobile layout animations (< 768px) - Pure vertical fade to prevent any horizontal overflow
      mm.add("(max-width: 767px)", () => {
        gsap.from('.about-left', {
          scrollTrigger: {
            trigger: '#about',
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 25,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out'
        });

        gsap.from('.about-right', {
          scrollTrigger: {
            trigger: '#about',
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 25,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out'
        });

        const cards = gsap.utils.toArray('.timeline-card');
        cards.forEach((card) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none'
            },
            y: 25,
            opacity: 0,
            duration: 0.65,
            ease: 'power3.out'
          });
        });
      });

      // Shared vertical stagger animations
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out'
      });

      gsap.fromTo(
        '.skill-card',
        { y: 20 },
        {
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '#skills',
            start: 'top 95%',
            once: true
          }
        }
      );

      // Counters
      const counters = document.querySelectorAll('.skill-percentage');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0', 10);
        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: counter,
              start: 'top 92%',
              toggleActions: 'play none none none'
            },
            snap: { innerText: 1 }
          }
        );
      });

      gsap.from('.contact-element', {
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'all'
      });

      // Recalculate ScrollTrigger positions to prevent invisible elements
      setTimeout(() => ScrollTrigger.refresh(), 150);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Handle contact form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#7B61FF', '#00F5FF', '#F0EFF4', '#A855F7']
    });

    setFormSubmitted(true);

    const textMsg = encodeURIComponent(
      `Bonjour Abdou Lahat Diop,\n\nJe suis ${formData.name}.\nBesoin : ${formData.service}\nTéléphone : ${formData.phone}\nMessage : ${formData.message || 'Intéressé par vos services publicitaires'}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/221785348888?text=${textMsg}`, '_blank');
    }, 1000);
  };

  const handleCvDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#7B61FF', '#00F5FF', '#F0EFF4']
    });
  };

  const skillsData = [
    {
      title: "IA Générative Vidéo & Image",
      level: 98,
      subtitle: "Runway Gen-3, Midjourney v6, Kling AI, HeyGen",
      desc: "Création de publicités vidéo ultra-qualitatives et visuels percutants sans coûts de tournage astronomiques.",
      category: "Intelligence Artificielle"
    },
    {
      title: "Campagnes Facebook & Meta Ads",
      level: 95,
      subtitle: "Pixel Meta, CBO, Retargeting dynamique, Scaling",
      desc: "Stratégies d'acquisition rentables avec retour sur investissement mesuré pour plus de 100 PME et commerces.",
      category: "Acquisition & Trafic"
    },
    {
      title: "Copywriting & Voix Off (FR & Wolof)",
      level: 96,
      subtitle: "Scripts hypnotiques & Voix off bilingues locales",
      desc: "Rédaction publicitaire adaptée aux codes culturels sénégalais et ouest-africains pour une adhésion immédiate.",
      category: "Création de Contenu"
    },
    {
      title: "Montage Vidéo Publicitaire & Motion",
      level: 92,
      subtitle: "CapCut Pro, Premiere Pro, Hooks dynamiques",
      desc: "Montage rythmé au format Reels, TikTok et Stories avec sous-titres animés et transitions accrocheuses.",
      category: "Post-Production"
    },
    {
      title: "Stratégie Marketing & Gestion Client",
      level: 94,
      subtitle: "+100 Entreprises accompagnées avec succès",
      desc: "Conseil personnalisé, diagnostic d'offre commerciale, reporting régulier et suivi de satisfaction éprouvé.",
      category: "Business & Conseil"
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-void text-ghost selection:bg-accent selection:text-white">
      {/* Background ambient lighting orbs (Aura Digitale Preset D) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 w-full h-full">
        <div className="absolute -top-[15%] -left-[10%] w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] rounded-full bg-accent/15 blur-[100px] sm:blur-[140px] animate-pulse-subtle"></div>
        <div className="absolute top-[40%] -right-[15%] w-[280px] sm:w-[550px] h-[280px] sm:h-[550px] rounded-full bg-cyanAccent/10 blur-[90px] sm:blur-[150px] animate-float"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[320px] sm:w-[700px] h-[320px] sm:h-[700px] rounded-full bg-accent-dark/20 blur-[100px] sm:blur-[160px]"></div>
        {/* Subtle cyber grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f380a_1px,transparent_1px),linear-gradient(to_bottom,#1f1f380a_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem]"></div>
      </div>

      {/* A. NAVBAR — "La Signature Flottante" */}
      <header
        ref={navbarRef}
        className={`fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl transition-all duration-300 rounded-full px-3.5 sm:px-5 py-2 sm:py-3 flex items-center justify-between ${
          isScrolled
            ? 'bg-[#0A0A14]/85 backdrop-blur-xl border border-accent/30 shadow-glow-sm'
            : 'bg-[#121224]/50 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Logo / Brand Signature */}
        <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-accent to-accent-light p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-glow-sm shrink-0">
            <div className="w-full h-full rounded-full bg-void flex items-center justify-center">
              <span className="font-mono text-[10px] sm:text-xs font-bold tracking-wider text-accent-light">ALD</span>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-bold text-xs sm:text-sm tracking-tight text-ghost group-hover:text-accent-light transition-colors truncate max-w-[130px] sm:max-w-none">
              Abdou Lahat Diop
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-muted tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emeraldAccent animate-ping shrink-0"></span>
              SAMA PUB • DAKAR
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs font-mono tracking-wider">
          <a href="#about" className="link-lift text-muted hover:text-accent-light transition-colors">
            // À PROPOS
          </a>
          <a href="#experience" className="link-lift text-muted hover:text-accent-light transition-colors">
            // EXPÉRIENCE
          </a>
          <a href="#skills" className="link-lift text-muted hover:text-accent-light transition-colors">
            // COMPÉTENCES
          </a>
          <a href="#contact" className="link-lift text-muted hover:text-accent-light transition-colors">
            // CONTACT
          </a>
        </nav>

        {/* Right Action: CTA & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/cv-abdou-lahat-diop.pdf"
            download="CV-Abdou-Lahat-Diop.pdf"
            onClick={handleCvDownload}
            className="btn-magnetic flex items-center gap-1.5 bg-gradient-to-r from-accent to-accent-hover text-white text-[11px] sm:text-xs font-mono font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-glow-sm hover:shadow-glow transition-all"
          >
            <Download className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">TÉLÉCHARGER CV</span>
            <span className="sm:hidden">CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 rounded-full bg-surfaceLight/80 border border-white/10 text-ghost hover:text-accent-light transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu Modal */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-void/95 backdrop-blur-2xl flex flex-col justify-center items-center px-6 py-12 md:hidden">
          <div className="w-full max-w-sm flex flex-col items-center gap-5 font-mono text-center">
            <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-accent to-cyanAccent mb-2 shadow-glow">
              <img
                src="/profile.jpg?v=2"
                alt="Abdou Lahat Diop"
                className="w-full h-full object-cover object-[center_30%] rounded-full"
              />
            </div>
            <span className="font-sans font-bold text-lg text-ghost">Abdou Lahat Diop</span>
            <span className="text-xs text-accent-light -mt-3">Sama Pub — Dakar</span>

            <div className="w-full h-[1px] bg-white/10 my-2"></div>

            <nav className="flex flex-col gap-4 text-sm w-full">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl bg-surface/80 border border-white/5 text-ghost hover:text-accent-light hover:border-accent/40 transition-colors"
              >
                // 01. À PROPOS
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl bg-surface/80 border border-white/5 text-ghost hover:text-accent-light hover:border-accent/40 transition-colors"
              >
                // 02. EXPÉRIENCE
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl bg-surface/80 border border-white/5 text-ghost hover:text-accent-light hover:border-accent/40 transition-colors"
              >
                // 03. COMPÉTENCES
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl bg-surface/80 border border-white/5 text-ghost hover:text-accent-light hover:border-accent/40 transition-colors"
              >
                // 04. CONTACT DIRECT
              </a>
            </nav>

            <div className="w-full h-[1px] bg-white/10 my-2"></div>

            <a
              href="https://wa.me/221785348888"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-emeraldAccent/20 border border-emeraldAccent/40 text-emeraldAccent text-xs font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Direct (+221 78 534 88 88)
            </a>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-muted mt-2 underline"
            >
              Fermer le menu
            </button>
          </div>
        </div>
      )}

      <main className="w-full max-w-full overflow-x-hidden">
        {/* B. SECTION HERO — "La Première Impression" */}
        <section
          id="hero"
          ref={heroRef}
          className="relative min-h-[100dvh] pt-20 sm:pt-28 pb-10 sm:pb-16 px-4 sm:px-6 flex flex-col justify-center items-center text-center overflow-hidden max-w-full"
        >
          {/* Subtle glowing ring decoration behind hero */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[750px] h-[300px] sm:h-[500px] md:h-[750px] rounded-full border border-accent/10 pointer-events-none -z-10 animate-pulse-subtle"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[350px] md:w-[520px] h-[220px] sm:h-[350px] md:h-[520px] rounded-full border border-accent/20 pointer-events-none -z-10"></div>

          {/* Availability Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-surface/90 border border-accent/30 backdrop-blur-md mb-4 sm:mb-6 shadow-glow-sm max-w-[95%]">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emeraldAccent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emeraldAccent"></span>
            </span>
            <span className="font-mono text-[9px] sm:text-xs text-accent-light tracking-wide font-medium text-center truncate sm:overflow-visible">
              DISPONIBLE POUR DE NOUVEAUX PROJETS & CAMPAGNES
            </span>
          </div>

          {/* Profile Photo / Avatar */}
          <div className="hero-avatar relative mb-4 sm:mb-5 group cursor-pointer">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-accent via-cyanAccent to-accent-light shadow-glow hover:shadow-glow-lg transition-all duration-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-surface relative">
                <img
                  src="/profile.jpg?v=2"
                  alt="Abdou Lahat Diop"
                  className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-surface to-surfaceLight text-accent font-extrabold text-2xl sm:text-3xl font-mono">
                  ALD
                </div>
              </div>
            </div>
            {/* Badge floating over avatar */}
            <div className="absolute -bottom-2 -right-1 sm:-right-2 bg-void border border-accent/40 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-accent-light" />
              <span className="font-mono text-[9px] sm:text-[10px] text-ghost font-semibold">SAMA PUB</span>
            </div>
          </div>

          {/* Name Header - Massif avec glow accent & responsive wrap */}
          <div className="hero-title-name mb-1.5 sm:mb-2 max-w-full px-2">
            <h1 className="font-sans font-extrabold tracking-tight text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-ghost text-glow break-words leading-tight">
              Abdou Lahat Diop
            </h1>
          </div>

          {/* Titre pro en Serif Italique Dramatique */}
          <div className="hero-subtitle mb-4 sm:mb-6 max-w-2xl px-2">
            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-accent-light/95 leading-snug tracking-wide">
              Agent Marketing Digital & Entrepreneur
            </p>
            <p className="font-mono text-[11px] sm:text-xs md:text-sm text-muted mt-1 sm:mt-1.5 tracking-widest uppercase">
              Fondateur de l'agence Sama Pub — Dakar
            </p>
          </div>

          {/* Stats Bar en Monospace - Responsive flex/stack */}
          <div className="hero-stats mb-6 sm:mb-8 w-full max-w-2xl px-2 sm:px-4">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-surface/70 border border-white/5 backdrop-blur-md flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 font-mono text-[11px] sm:text-xs text-muted">
              <div className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-accent-light shrink-0" />
                <span className="text-ghost font-semibold">+100 Clients Accompagnés</span>
              </div>
              <span className="text-white/20 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyanAccent shrink-0" />
                <span className="text-ghost font-semibold">Dakar, Sénégal</span>
              </div>
              <span className="text-white/20 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Bot className="w-3.5 h-3.5 text-accent-light shrink-0" />
                <span className="text-ghost font-semibold">Vidéos IA & Facebook Ads</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Full width on mobile, inline on desktop */}
          <div className="hero-cta-btn flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none px-4 sm:px-0">
            <a
              href="/cv-abdou-lahat-diop.pdf"
              download="CV-Abdou-Lahat-Diop.pdf"
              onClick={handleCvDownload}
              className="btn-magnetic w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-accent via-accent to-accent-dark text-white font-mono text-xs sm:text-sm font-semibold tracking-wide shadow-glow hover:shadow-glow-lg flex items-center justify-center gap-2.5 transition-all"
            >
              <Download className="w-4 h-4 shrink-0" />
              TÉLÉCHARGER LE CV
            </a>

            <a
              href="#contact"
              className="btn-magnetic w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-surface/90 hover:bg-surfaceLight border border-accent/40 text-ghost font-mono text-xs sm:text-sm font-semibold tracking-wide hover:border-accent flex items-center justify-center gap-2.5 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-accent-light shrink-0" />
              ME CONTACTER
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <a
            href="#about"
            className="hero-scroll-indicator mt-6 sm:mt-10 text-muted hover:text-accent-light transition-colors flex flex-col items-center gap-1 sm:gap-1.5 font-mono text-[10px] sm:text-[11px] tracking-widest"
          >
            <span>DÉCOUVRIR LE PARCOURS</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-accent-light" />
          </a>
        </section>

        {/* C. SECTION À PROPOS — "Le Manifeste Personnel" */}
        <section id="about" className="py-10 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
          {/* Section badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-accent-light tracking-widest uppercase">// 01. MANIFESTE</span>
            <div className="h-[1px] w-12 bg-accent/40"></div>
          </div>

          {/* 2 colonnes avec ligne de séparation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-start">
            {/* Colonne Gauche : Titre Dramatique */}
            <div className="about-left lg:col-span-5 flex flex-col gap-3.5 sm:gap-5">
              <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ghost leading-[1.15]">
                Transformer l'attention en <span className="text-accent-light not-italic font-sans font-bold">croissance concrète.</span>
              </h2>
              <p className="font-mono text-xs text-muted leading-relaxed">
                Une approche publicitaire moderne où la puissance de l'Intelligence Artificielle rencontre la réalité du marché ouest-africain.
              </p>
              <div className="p-3.5 sm:p-4 rounded-2xl sm:rounded-[2rem] bg-surface/60 border border-white/5 backdrop-blur-md flex items-center gap-3.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-ghost">Sama Pub — Dakar</h4>
                  <p className="text-[11px] sm:text-xs text-muted font-mono">Plus de 100 commerces & marques propulsés avec succès.</p>
                </div>
              </div>
            </div>

            {/* Séparateur sur Desktop */}
            <div className="hidden lg:block w-[1px] bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0 h-full"></div>

            {/* Colonne Droite : Le Texte du Parcours */}
            <div className="about-right lg:col-span-6 flex flex-col gap-3.5 sm:gap-5 text-muted text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              <p className="text-ghost font-medium text-base sm:text-lg md:text-xl leading-relaxed">
                Je suis <span className="text-accent-light font-bold">Abdou Lahat Diop</span>, agent marketing digital et fondateur de l'agence <span className="text-ghost font-semibold">Sama Pub</span> à Dakar.
              </p>
              <p>
                Passionné par l'innovation visuelle et les stratégies d'acquisition à fort impact, j'accompagne plus de 100 clients — commerces locaux, restaurants, opticiens, garages automobiles, agences immobilières et artisans — dans la transformation digitale de leur activité.
              </p>
              <p>
                Ma force réside dans la fusion entre la <strong className="text-ghost font-semibold">génération vidéo par intelligence artificielle</strong> et le pilotage rigoureux de <strong className="text-ghost font-semibold">campagnes Facebook Ads</strong> orientées sur les résultats directs. 
              </p>
              <p>
                Grâce à des visuels saisissants et des voix off publicitaires conçues sur mesure en <span className="text-accent-light font-mono text-xs px-2 py-0.5 rounded bg-accent/10 border border-accent/20">Français</span> et en <span className="text-cyanAccent font-mono text-xs px-2 py-0.5 rounded bg-cyanAccent/10 border border-cyanAccent/20">Wolof</span>, je connecte authentiquement les marques avec leur audience locale pour générer un retour sur investissement tangible et durable.
              </p>
            </div>
          </div>

          {/* Cartes Métriques Clés */}
          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mt-8 sm:mt-10">
            <div className="stat-card glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl sm:rounded-[2rem] text-center flex flex-col items-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-accent/15 flex items-center justify-center text-accent-light mb-2">
                <Flame className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-ghost text-glow">100+</div>
              <div className="font-mono text-[10px] sm:text-xs text-muted mt-1 uppercase tracking-wider">Clients Accompagnés</div>
              <span className="text-[10px] sm:text-[11px] text-muted/70 mt-0.5">Commerces, Optique, Immo</span>
            </div>

            <div className="stat-card glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl sm:rounded-[2rem] text-center flex flex-col items-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cyanAccent/15 flex items-center justify-center text-cyanAccent mb-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-ghost text-glow-cyan">3.8x</div>
              <div className="font-mono text-[10px] sm:text-xs text-muted mt-1 uppercase tracking-wider">ROAS Moyen Meta Ads</div>
              <span className="text-[10px] sm:text-[11px] text-muted/70 mt-0.5">Rentabilité maximisée</span>
            </div>

            <div className="stat-card glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl sm:rounded-[2rem] text-center flex flex-col items-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-accent/15 flex items-center justify-center text-accent-light mb-2">
                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-ghost text-glow">FR & WO</div>
              <div className="font-mono text-[10px] sm:text-xs text-muted mt-1 uppercase tracking-wider">Voix Off Bilingues</div>
              <span className="text-[10px] sm:text-[11px] text-muted/70 mt-0.5">Impact local au Sénégal</span>
            </div>

            <div className="stat-card glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl sm:rounded-[2rem] text-center flex flex-col items-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emeraldAccent/15 flex items-center justify-center text-emeraldAccent mb-2">
                <Video className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-ghost">100%</div>
              <div className="font-mono text-[10px] sm:text-xs text-muted mt-1 uppercase tracking-wider">Publicités par IA</div>
              <span className="text-[10px] sm:text-[11px] text-muted/70 mt-0.5">Production ultra-rapide</span>
            </div>
          </div>
        </section>

        {/* D. EXPÉRIENCE — "La Timeline Vivante" */}
        <section id="experience" className="py-10 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto relative">
          <div className="flex items-center gap-2 mb-2 justify-center">
            <span className="font-mono text-xs text-accent-light tracking-widest uppercase">// 02. PARCOURS & EXPÉRIENCES</span>
          </div>

          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-center text-ghost mb-2 sm:mb-3">
            La Timeline <span className="not-italic font-sans font-bold text-accent-light">Professionnelle</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-muted text-center max-w-xl mx-auto mb-8 sm:mb-12 px-2">
            Une trajectoire orientée résultats, de la création de contenus innovants à la direction d'une agence digitale reconnue.
          </p>

          {/* Timeline Wrapper */}
          <div className="relative">
            {/* Ligne de la timeline - adaptée mobile/desktop */}
            <div className="absolute left-3.5 sm:left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/20 via-accent to-accent/20 -translate-x-1/2"></div>

            {/* Carte 1 : Fondateur Sama Pub */}
            <div className="timeline-card relative mb-6 sm:mb-8 md:mb-12 flex flex-col md:flex-row items-start">
              {/* Point sur la timeline */}
              <div className="absolute left-3.5 sm:left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-void border-2 border-accent flex items-center justify-center z-10 shadow-glow">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-light animate-ping"></div>
              </div>

              {/* Contenu - Gauche sur Desktop, décalé propre sur mobile */}
              <div className="ml-8 sm:ml-12 md:ml-0 md:w-1/2 md:pr-10 text-left w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-1/2">
                <div className="glass-panel glass-panel-hover p-4 sm:p-5 md:p-7 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden">
                  <div className="inline-block font-mono text-[10px] sm:text-xs text-accent-light px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-accent/15 border border-accent/30 mb-2 font-semibold">
                    2023 — PRÉSENT
                  </div>
                  <h3 className="font-sans font-bold text-base sm:text-lg md:text-xl text-ghost mb-1">
                    Fondateur & Directeur Marketing Digital
                  </h3>
                  <div className="font-mono text-xs text-muted mb-2.5 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                    <span className="text-cyanAccent font-semibold">Sama Pub</span>
                    <span>•</span>
                    <span>Dakar, Sénégal</span>
                  </div>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    Direction globale de l'agence. Création et déploiement de vidéos publicitaires générées par IA pour plus de 100 entreprises (commerces, opticiens, garages, restaurants, immobilier). Lancement et optimisation de campagnes Facebook Ads à fort retour sur investissement.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['Direction Agence', 'Meta Ads', 'IA Générative', 'Wolof & Français', '+100 Clients'].map((tag, i) => (
                      <span key={i} className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-surfaceLight border border-white/5 text-muted">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Carte 2 : Spécialiste Vidéos IA & Motion */}
            <div className="timeline-card relative mb-6 sm:mb-8 md:mb-12 flex flex-col md:flex-row items-start md:justify-end">
              {/* Point sur la timeline */}
              <div className="absolute left-3.5 sm:left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-void border-2 border-cyanAccent flex items-center justify-center z-10 shadow-glow-cyan">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyanAccent"></div>
              </div>

              {/* Contenu - Droite sur Desktop */}
              <div className="ml-8 sm:ml-12 md:ml-0 md:w-1/2 md:pl-10 text-left w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-1/2">
                <div className="glass-panel glass-panel-hover p-4 sm:p-5 md:p-7 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden">
                  <div className="inline-block font-mono text-[10px] sm:text-xs text-cyanAccent px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-cyanAccent/15 border border-cyanAccent/30 mb-2 font-semibold">
                    2022 — 2023
                  </div>
                  <h3 className="font-sans font-bold text-base sm:text-lg md:text-xl text-ghost mb-1">
                    Spécialiste Vidéos Publicitaires IA & Motion
                  </h3>
                  <div className="font-mono text-xs text-muted mb-2.5 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                    <span className="text-accent-light font-semibold">Studio & Partenariats Digitaux</span>
                    <span>•</span>
                    <span>Freelance & Conseil</span>
                  </div>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    Production créative pionnière avec les technologies d'IA générative (Midjourney, Runway, Kling, HeyGen). Écriture de scripts publicitaires dynamiques et synthèse vocale de voix off adaptées au contexte culturel local, avec un gain de temps de production de plus de 80%.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['Runway Gen-3', 'Midjourney', 'Voix Off IA', 'Montage CapCut', 'Hooks Viraux'].map((tag, i) => (
                      <span key={i} className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-surfaceLight border border-white/5 text-muted">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Carte 3 : Media Buyer & Campagnes Facebook Ads */}
            <div className="timeline-card relative flex flex-col md:flex-row items-start">
              {/* Point sur la timeline */}
              <div className="absolute left-3.5 sm:left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-void border-2 border-accent flex items-center justify-center z-10 shadow-glow">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-light"></div>
              </div>

              {/* Contenu - Gauche sur Desktop */}
              <div className="ml-8 sm:ml-12 md:ml-0 md:w-1/2 md:pr-10 text-left w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-1/2">
                <div className="glass-panel glass-panel-hover p-4 sm:p-5 md:p-7 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden">
                  <div className="inline-block font-mono text-[10px] sm:text-xs text-accent-light px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-accent/15 border border-accent/30 mb-2 font-semibold">
                    2021 — 2022
                  </div>
                  <h3 className="font-sans font-bold text-base sm:text-lg md:text-xl text-ghost mb-1">
                    Media Buyer & Consultant Meta Ads
                  </h3>
                  <div className="font-mono text-xs text-muted mb-2.5 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                    <span className="text-ghost font-semibold">Accompagnement PME & Artisans</span>
                    <span>•</span>
                    <span>Sénégal</span>
                  </div>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    Gestion de budgets publicitaires sur Meta Ads Manager. Ciblage d'audiences locales par centres d'intérêt et géolocalisation, tests A/B de formats vidéos vs carrousels, et suivi strict du coût par contact (CPL) pour garantir la rentabilité des investissements.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['Facebook Ads', 'Meta Pixel', 'A/B Testing', 'CBO & Retargeting', 'ROI Client'].map((tag, i) => (
                      <span key={i} className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-surfaceLight border border-white/5 text-muted">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E. COMPÉTENCES — "Le Tableau de Bord" */}
        <section id="skills" className="pt-8 sm:pt-10 pb-1 sm:pb-2 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-1.5 justify-center">
            <span className="font-mono text-xs text-accent-light tracking-widest uppercase">// 03. TABLEAU DE BORD TECHNIQUE</span>
          </div>

          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-center text-ghost mb-2">
            Matrice des <span className="not-italic font-sans font-bold text-accent-light">Compétences Clés</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-muted text-center max-w-xl mx-auto mb-3.5 sm:mb-4 px-2">
            Une expertise éprouvée sur le terrain, alliant maîtrise des outils d'avant-garde et sens aigu du business local.
          </p>

          {/* Grille de Maîtrise avec jauges circulaires SVG animées */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-4 sm:mb-5">
            {skillsData.map((skill, index) => {
              const radius = 36;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (skill.level / 100) * circumference;

              return (
                <div
                  key={index}
                  className="skill-card glass-panel glass-panel-hover p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between"
                >
                  <div>
                    {/* Header card with category & circular progress */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="font-mono text-[10px] sm:text-[11px] text-accent-light uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 border border-accent/25 truncate max-w-[180px] sm:max-w-none">
                        {skill.category}
                      </span>

                      {/* Circular Gauge */}
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
                        <svg className="w-14 h-14 sm:w-16 sm:h-16 -rotate-90 transform" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="transparent"
                            stroke="#1E1E38"
                            strokeWidth="8"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="transparent"
                            stroke="url(#accentGradient)"
                            strokeWidth="8"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            className="transition-all duration-1000 ease-out"
                          />
                          <defs>
                            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#7B61FF" />
                              <stop offset="100%" stopColor="#00F5FF" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-mono text-[11px] sm:text-xs font-bold text-ghost">
                            <span className="skill-percentage" data-target={skill.level}>{skill.level}</span>%
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-sans font-bold text-base sm:text-lg text-ghost mb-1">
                      {skill.title}
                    </h3>
                    <p className="font-mono text-[11px] sm:text-xs text-accent-light/80 mb-2 sm:mb-3">
                      {skill.subtitle}
                    </p>
                    <p className="text-muted text-xs leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>

                  {/* Visual linear sub-bar */}
                  <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-muted">
                    <span>Niveau de Maîtrise</span>
                    <span className="text-ghost font-bold">Expert ({skill.level}%)</span>
                  </div>
                </div>
              );
            })}

            {/* Radar / Cyber Dashboard Visual Card */}
            <div className="skill-card glass-panel glass-panel-hover p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between lg:col-span-1 border-accent/40 bg-surfaceLight/50">
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="font-mono text-[10px] sm:text-[11px] text-cyanAccent uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyanAccent/10 border border-cyanAccent/25">
                    RADAR DE COMPÉTENCES
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-emeraldAccent animate-ping shrink-0"></div>
                </div>

                <h3 className="font-sans font-bold text-base sm:text-lg text-ghost mb-1.5 sm:mb-2">
                  Profil Multidisciplinaire
                </h3>
                <p className="text-muted text-xs leading-relaxed mb-3 sm:mb-4">
                  Une balance parfaite entre créativité publicitaire, technologie générative et conversion commerciale.
                </p>

                {/* SVG Radar Graphic */}
                <div className="relative w-full aspect-square max-w-[170px] sm:max-w-[200px] mx-auto flex items-center justify-center my-1 sm:my-2">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <polygon points="100,20 176,75 147,165 53,165 24,75" fill="none" stroke="#2A2A4E" strokeWidth="1" />
                    <polygon points="100,45 153,84 133,145 67,145 47,84" fill="none" stroke="#2A2A4E" strokeWidth="1" />
                    <polygon points="100,70 130,92 119,126 81,126 70,92" fill="none" stroke="#2A2A4E" strokeWidth="1" />
                    <line x1="100" y1="100" x2="100" y2="20" stroke="#2A2A4E" strokeWidth="1" />
                    <line x1="100" y1="100" x2="176" y2="75" stroke="#2A2A4E" strokeWidth="1" />
                    <line x1="100" y1="100" x2="147" y2="165" stroke="#2A2A4E" strokeWidth="1" />
                    <line x1="100" y1="100" x2="53" y2="165" stroke="#2A2A4E" strokeWidth="1" />
                    <line x1="100" y1="100" x2="24" y2="75" stroke="#2A2A4E" strokeWidth="1" />
                    <polygon
                      points="100,24 170,78 143,158 58,160 30,78"
                      fill="rgba(123, 97, 255, 0.25)"
                      stroke="#7B61FF"
                      strokeWidth="2.5"
                    />
                    <circle cx="100" cy="24" r="3" fill="#00F5FF" />
                    <circle cx="170" cy="78" r="3" fill="#00F5FF" />
                    <circle cx="143" cy="158" r="3" fill="#00F5FF" />
                    <circle cx="58" cy="160" r="3" fill="#00F5FF" />
                    <circle cx="30" cy="78" r="3" fill="#00F5FF" />
                  </svg>
                </div>
              </div>

              <div className="font-mono text-[9px] sm:text-[10px] text-center text-muted mt-2">
                OPTIMISÉ POUR L'ÉCOSYSTÈME SÉNÉGALAIS
              </div>
            </div>
          </div>

          {/* Outils & Technologies utilisés */}
          <div className="p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-surface/50 border border-white/5 backdrop-blur-md">
            <h4 className="font-mono text-[11px] sm:text-xs text-muted uppercase tracking-widest text-center mb-3 sm:mb-4">
              // ARSENAL LOGICIEL & TECHNOLOGIES DU QUOTIDIEN
            </h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                { name: 'Meta Ads Manager', icon: '📈' },
                { name: 'Midjourney v6', icon: '🎨' },
                { name: 'Runway Gen-3', icon: '🎬' },
                { name: 'Kling AI', icon: '⚡' },
                { name: 'ElevenLabs (Voix IA)', icon: '🎙️' },
                { name: 'HeyGen Video', icon: '👤' },
                { name: 'CapCut Pro', icon: '✂️' },
                { name: 'Adobe Premiere Pro', icon: '🎞️' },
                { name: 'ChatGPT & Claude', icon: '🤖' },
                { name: 'WhatsApp Business API', icon: '💬' },
                { name: 'Canva Pro', icon: '📐' }
              ].map((tool, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full bg-surfaceLight/80 border border-white/5 hover:border-accent/40 font-mono text-[11px] sm:text-xs text-ghost hover:text-accent-light flex items-center gap-1.5 sm:gap-2 transition-all hover:scale-105"
                >
                  <span>{tool.icon}</span>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* F. CONTACT — "Le Pont" (Module 04) */}
        <section id="contact" className="pt-4 sm:pt-6 pb-10 sm:pb-14 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="contact-element flex items-center gap-2 mb-1 justify-center">
            <span className="font-mono text-xs text-accent-light tracking-widest uppercase">// 04. CONTACT & COLLABORATION</span>
          </div>

          <h2 className="contact-element font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-ghost mb-1.5 sm:mb-2 leading-tight">
            Travaillons ensemble sur <span className="not-italic font-sans font-bold text-accent-light">votre succès.</span>
          </h2>
          <p className="contact-element font-mono text-xs sm:text-sm text-muted text-center max-w-lg mx-auto mb-4 sm:mb-5 px-2">
            Besoin d'une vidéo publicitaire percutante par IA ou d'une campagne Facebook Ads qui génère des ventes ? Parlons de votre projet dès aujourd'hui.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Colonne Coordonnées directes */}
            <div className="contact-element lg:col-span-5 space-y-3.5 sm:space-y-4">
              {/* WhatsApp Card (Primary in Senegal) */}
              <a
                href="https://wa.me/221785348888?text=Bonjour%20Abdou%20Lahat,%20j'ai%20vu%20votre%20portfolio%20Sama%20Pub%20et%20j'aimerais%20collaborer%20avec%20vous!"
                target="_blank"
                rel="noreferrer"
                className="block p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-emeraldAccent/15 to-surface border border-emeraldAccent/30 hover:border-emeraldAccent transition-all group shadow-glow-sm"
              >
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emeraldAccent/20 flex items-center justify-center text-emeraldAccent shrink-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-mono text-[9px] sm:text-[10px] text-emeraldAccent px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emeraldAccent/20">
                    CANAL RECOMMANDÉ
                  </span>
                </div>
                <h4 className="font-sans font-bold text-sm sm:text-base text-ghost group-hover:text-emeraldAccent transition-colors">
                  WhatsApp Direct
                </h4>
                <p className="font-mono text-xs sm:text-sm text-ghost font-semibold mt-1">
                  +221 78 534 88 88
                </p>
                <span className="text-[11px] sm:text-xs text-muted block mt-1.5 sm:mt-2">
                  Réponse rapide pour vos demandes de devis et projets vidéos
                </span>
              </a>

              {/* Email Card */}
              <a
                href="mailto:contact@samapub.com"
                className="block p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] glass-panel glass-panel-hover"
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-accent/15 flex items-center justify-center text-accent-light shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-ghost">Email Professionnel</h4>
                    <p className="font-mono text-xs text-accent-light mt-0.5">contact@samapub.com</p>
                    <span className="text-[10px] sm:text-[11px] text-muted block mt-0.5 sm:mt-1">Échanges officiels et propositions</span>
                  </div>
                </div>
              </a>

              {/* Localisation Card */}
              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] glass-panel flex items-center gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-cyanAccent/15 flex items-center justify-center text-cyanAccent shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-ghost">Localisation</h4>
                  <p className="font-mono text-xs text-muted mt-0.5">Dakar, Sénégal (Zone GMT)</p>
                  <span className="text-[10px] sm:text-[11px] text-muted block mt-0.5 sm:mt-1">Disponible pour clients locaux et internationaux</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] glass-panel flex items-center justify-between">
                <span className="font-mono text-[11px] sm:text-xs text-muted">SUIVEZ SAMA PUB :</span>
                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-surfaceLight flex items-center justify-center text-muted hover:text-accent-light hover:scale-110 transition-all border border-white/5"
                    title="Facebook Sama Pub"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-surfaceLight flex items-center justify-center text-muted hover:text-accent-light hover:scale-110 transition-all border border-white/5"
                    title="Instagram"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-surfaceLight flex items-center justify-center text-muted hover:text-accent-light hover:scale-110 transition-all border border-white/5"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Formulaire de Contact Interactif */}
            <div className="contact-element lg:col-span-7">
              <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] relative">
                {formSubmitted ? (
                  <div className="text-center py-8 sm:py-12 space-y-3 sm:space-y-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emeraldAccent/20 border border-emeraldAccent text-emeraldAccent mx-auto flex items-center justify-center shadow-glow">
                      <Check className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-ghost">
                      Message envoyé avec succès !
                    </h3>
                    <p className="text-muted text-xs sm:text-sm max-w-md mx-auto">
                      Merci pour votre message. La conversation WhatsApp s'est ouverte automatiquement pour finaliser votre demande rapidement.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="font-mono text-xs text-accent-light underline mt-3 inline-block cursor-pointer"
                    >
                      Envoyer une autre demande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-ghost mb-1">
                      Démarrer un projet publicitaire
                    </h3>
                    <p className="text-xs font-mono text-muted mb-4 sm:mb-6">
                      Remplissez ces informations pour un devis rapide sous 24h.
                    </p>

                    <div>
                      <label className="block font-mono text-[11px] sm:text-xs text-muted mb-1.5 sm:mb-2">VOTRE NOM COMPLET</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Babacar Ndiaye"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-surfaceLight/80 border border-white/10 text-ghost placeholder-muted/50 font-sans text-xs sm:text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] sm:text-xs text-muted mb-1.5 sm:mb-2">NUMÉRO TÉLÉPHONE / WHATSAPP</label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: +221 77 123 45 67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-surfaceLight/80 border border-white/10 text-ghost placeholder-muted/50 font-sans text-xs sm:text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] sm:text-xs text-muted mb-1.5 sm:mb-2">SERVICE SOUHAITÉ</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-surfaceLight/80 border border-white/10 text-ghost font-sans text-xs sm:text-sm focus:outline-none focus:border-accent transition-colors cursor-pointer"
                      >
                        <option value="Campagne Facebook Ads + Vidéos IA" className="bg-surface text-ghost">Pack Complet : Campagne Meta Ads + Vidéos IA</option>
                        <option value="Création de Vidéos Publicitaires IA" className="bg-surface text-ghost">Création de Vidéos Publicitaires par IA seule</option>
                        <option value="Voix off et scripts personnalisés (FR/Wolof)" className="bg-surface text-ghost">Voix off et scripts (Français / Wolof)</option>
                        <option value="Gestion et optimisation de campagnes existantes" className="bg-surface text-ghost">Audit & Gestion de campagnes Facebook Ads existantes</option>
                        <option value="Autre demande sur mesure" className="bg-surface text-ghost">Autre demande sur mesure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] sm:text-xs text-muted mb-1.5 sm:mb-2">VOTRE ACTIVITÉ OU MESSAGE (OPTIONNEL)</label>
                      <textarea
                        rows="3"
                        placeholder="Décrivez brièvement votre commerce ou votre objectif..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-surfaceLight/80 border border-white/10 text-ghost placeholder-muted/50 font-sans text-xs sm:text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-magnetic w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-accent via-accent to-accent-dark text-white font-mono text-xs sm:text-sm font-semibold tracking-wider shadow-glow hover:shadow-glow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                    >
                      <Send className="w-4 h-4 shrink-0" />
                      ENVOYER MA DEMANDE VIA WHATSAPP
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* H. PIED DE PAGE — "La Clôture" */}
      <footer className="mt-8 sm:mt-12 border-t border-accent/15 bg-[#06060E] rounded-t-[2rem] sm:rounded-t-[3rem] md:rounded-t-[4rem] px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
          {/* Logo & Mentions */}
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent-light font-mono text-[10px] sm:text-xs font-bold shrink-0">
                ALD
              </div>
              <span className="font-sans font-bold text-ghost text-sm sm:text-base">
                Abdou Lahat Diop
              </span>
            </div>
            <p className="font-mono text-[11px] sm:text-xs text-muted">
              Agent Marketing Digital & Entrepreneur • Fondateur de Sama Pub (Dakar)
            </p>
            <p className="text-[11px] sm:text-xs text-muted/60">
              Fait avec le vibe coding • 2026 Tous droits réservés.
            </p>
          </div>

          {/* Status Badge */}
          <div className="flex flex-col items-center md:items-end gap-2.5 sm:gap-3">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-surfaceLight border border-white/10 font-mono text-[11px] sm:text-xs text-ghost">
              <span className="w-2 h-2 rounded-full bg-emeraldAccent animate-ping shrink-0"></span>
              <span>EN LIGNE & ACTIF À DAKAR</span>
            </div>
            <a
              href="/cv-abdou-lahat-diop.pdf"
              download="CV-Abdou-Lahat-Diop.pdf"
              onClick={handleCvDownload}
              className="font-mono text-[11px] sm:text-xs text-accent-light hover:underline flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              Télécharger la version PDF du CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
