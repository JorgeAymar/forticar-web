"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ClipboardList, 
  Package, 
  Users, 
  Receipt, 
  Calendar, 
  BarChart3, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Star, 
  Menu, 
  X,
  Wrench,
  Car,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
const dashboardImage = "/images/generated_images/forticar_dashboard_interface_mockup.png";

const trustedLogos = [
  "AutoPro Service",
  "Taller Hernández",
  "FastFix Motors",
  "Elite Car Care",
  "Premium Auto",
];

const features = [
  {
    icon: ClipboardList,
    title: "Adiós al Papel y al Caos",
    description: "Genera órdenes de servicio profesionales en segundos. Elimina las notas a mano y los errores que te cuestan dinero.",
  },
  {
    icon: Package,
    title: "Control Total de Refacciones",
    description: "Detecta fugas y robos hormiga. Tu inventario se actualiza en tiempo real con cada reparación.",
  },
  {
    icon: Users,
    title: "Fidelización Automática",
    description: "Sorprende a tus clientes con historial digital y recordatorios de servicio por WhatsApp. Vuelven porque confían.",
  },
  {
    icon: Receipt,
    title: "Finanzas Claras",
    description: "Sabe exactamente cuánto ganas. Reportes automáticos de utilidad por mecánico, por servicio y por refacción.",
  },
];

const dashboardFeatures = [
  { x: "15%", y: "25%", label: "Calendario de Citas", description: "Programa y gestiona citas fácilmente" },
  { x: "75%", y: "20%", label: "Panel de KPIs", description: "Métricas en tiempo real de tu negocio" },
  { x: "50%", y: "65%", label: "Órdenes Activas", description: "Vista rápida de trabajos en progreso" },
  { x: "85%", y: "55%", label: "Alertas de Stock", description: "Nunca te quedes sin refacciones" },
];

const benefits = [
  {
    icon: Clock,
    stat: "15 hrs",
    label: "Ahorradas a la semana",
    description: "Deja de perder tiempo buscando papeles o sacando cuentas. Forticar lo hace por ti.",
  },
  {
    icon: TrendingUp,
    stat: "+40%",
    label: "Más ingresos",
    description: "Recupera ventas perdidas con seguimiento automático y cotizaciones que se aprueban desde el celular.",
  },
  {
    icon: Shield,
    stat: "100%",
    label: "Control de tu Negocio",
    description: "Supervisa tu taller desde tu casa o de vacaciones. Todo está en la nube, seguro y accesible.",
  },
];

const plans = [
  {
    name: "Básico",
    subtitle: "Emprendedor",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    features: [
      "Hasta 50 órdenes/mes",
      "1 usuario",
      "Inventario básico",
      "Facturación simple",
      "Soporte por email",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    subtitle: "Taller en Crecimiento",
    monthlyPrice: 599,
    yearlyPrice: 5990,
    features: [
      "Órdenes ilimitadas",
      "5 usuarios",
      "CRM completo",
      "Reportes avanzados",
      "Soporte prioritario",
      "Integraciones",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    subtitle: "Multi-sucursal",
    monthlyPrice: 999,
    yearlyPrice: 9990,
    features: [
      "Todo en Pro",
      "Usuarios ilimitados",
      "Multi-sucursal",
      "API personalizada",
      "Gerente de cuenta",
      "Capacitación incluida",
    ],
    highlighted: false,
  },
];

const testimonials = [
  {
    name: "Carlos Mendoza",
    business: "AutoPro Service",
    city: "Ciudad de México",
    rating: 5,
    quote: "Forticar transformó mi taller. Ahora tengo control total de todo sin perderme en papeles.",
  },
  {
    name: "María González",
    business: "Taller Hernández",
    city: "Guadalajara",
    rating: 5,
    quote: "Mis clientes reciben recordatorios automáticos. La retención subió un 40% en 3 meses.",
  },
  {
    name: "Roberto Silva",
    business: "FastFix Motors",
    city: "Monterrey",
    rating: 5,
    quote: "El mejor software que he usado. Simple, potente y el soporte es excepcional.",
  },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2" data-testid="link-home">
            <div className="w-10 h-10 bg-forticar-orange rounded-xl flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-forticar-blue">FORTICAR</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#modulos" className="text-forticar-blue/80 hover:text-forticar-orange transition-colors font-medium" data-testid="link-modulos">
              Módulos
            </a>
            <a href="#beneficios" className="text-forticar-blue/80 hover:text-forticar-orange transition-colors font-medium" data-testid="link-beneficios">
              Beneficios
            </a>
            <a href="#precios" className="text-forticar-blue/80 hover:text-forticar-orange transition-colors font-medium" data-testid="link-precios">
              Precios
            </a>
            <a href="#contacto" className="text-forticar-blue/80 hover:text-forticar-orange transition-colors font-medium" data-testid="link-contacto">
              Contacto
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-forticar-blue font-medium" data-testid="button-login">
              Iniciar Sesión
            </Button>
            <Button className="bg-forticar-orange hover:bg-forticar-orange-dark text-white font-semibold px-6" data-testid="button-cta-nav">
              Prueba Gratis
            </Button>
          </div>

          <button 
            className="md:hidden p-2" 
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t shadow-lg"
        >
          <div className="px-4 py-6 space-y-4">
            <a href="#modulos" className="block py-2 text-forticar-blue font-medium" data-testid="link-modulos-mobile">Módulos</a>
            <a href="#beneficios" className="block py-2 text-forticar-blue font-medium" data-testid="link-beneficios-mobile">Beneficios</a>
            <a href="#precios" className="block py-2 text-forticar-blue font-medium" data-testid="link-precios-mobile">Precios</a>
            <a href="#contacto" className="block py-2 text-forticar-blue font-medium" data-testid="link-contacto-mobile">Contacto</a>
            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full" data-testid="button-login-mobile">Iniciar Sesión</Button>
              <Button className="w-full bg-forticar-orange hover:bg-forticar-orange-dark" data-testid="button-cta-mobile">Prueba Gratis</Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden gradient-mesh">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-forticar-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-forticar-blue/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-forticar-orange/10 text-forticar-orange px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              Software #1 para Modernizar Talleres Mecánicos
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-forticar-blue leading-tight">
              Transforma tu Taller en una{" "}
              <span className="text-gradient">Agencia Profesional</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-forticar-blue/70 max-w-lg leading-relaxed">
              La herramienta definitiva para dueños de taller que quieren dejar de operar en el caos, controlar su dinero y crecer sin esclavizarse.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-forticar-orange hover:bg-forticar-orange-dark text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                data-testid="button-cta-hero-trial"
              >
                Prueba Gratis 14 días
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-forticar-blue text-forticar-blue font-bold text-lg px-8 py-6 rounded-xl hover:bg-forticar-blue hover:text-white transition-all"
                data-testid="button-cta-hero-demo"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver Demo en Vivo
              </Button>
            </div>
            
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-forticar-blue/50 mb-4 font-medium">Talleres que confían en nosotros:</p>
              <div className="flex flex-wrap gap-6 items-center">
                {trustedLogos.map((logo, i) => (
                  <span 
                    key={i} 
                    className="text-forticar-blue/30 font-display font-semibold text-sm"
                    data-testid={`text-trusted-logo-${i}`}
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-forticar-orange/20 to-forticar-blue/20 rounded-3xl blur-2xl transform scale-95" />
              <img 
                src={dashboardImage} 
                alt="Dashboard de Forticar" 
                className="relative rounded-2xl shadow-2xl w-full"
                data-testid="img-dashboard-hero"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="modulos" className="py-20 lg:py-32 bg-forticar-silver/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-forticar-blue mb-6">
            Pasa de "Machetero" a Empresario Automotriz
          </h2>
          <p className="text-lg text-forticar-blue/60 max-w-2xl mx-auto">
            Herramientas diseñadas para eliminar los dolores de cabeza diarios de tu operación.
          </p>
        </AnimatedSection>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <AnimatedSection key={i}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-8 rounded-2xl shadow-neumorphic hover:shadow-xl transition-shadow h-full"
                data-testid={`card-feature-${i}`}
              >
                <div className="w-14 h-14 bg-forticar-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-forticar-orange" />
                </div>
                <h3 className="font-display font-bold text-xl text-forticar-blue mb-3">
                  {feature.title}
                </h3>
                <p className="text-forticar-blue/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-forticar-blue overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Interfaz intuitiva y poderosa
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Diseñada para mecánicos, optimizada para dueños de taller
          </p>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-forticar-orange/30 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-white/10 backdrop-blur-sm p-4 sm:p-8 rounded-3xl border border-white/20">
              <div className="relative">
                <img 
                  src={dashboardImage} 
                  alt="Dashboard de Forticar" 
                  className="rounded-xl w-full shadow-2xl"
                  data-testid="img-dashboard-preview"
                />
                
                {dashboardFeatures.map((feature, i) => (
                  <motion.button
                    key={i}
                    style={{ left: feature.x, top: feature.y }}
                    className="absolute w-8 h-8 -ml-4 -mt-4"
                    whileHover={{ scale: 1.2 }}
                    onMouseEnter={() => setActiveHotspot(i)}
                    onMouseLeave={() => setActiveHotspot(null)}
                    data-testid={`button-hotspot-${i}`}
                  >
                    <span className="absolute inset-0 bg-forticar-orange rounded-full animate-ping opacity-75" />
                    <span className="relative flex items-center justify-center w-8 h-8 bg-forticar-orange rounded-full border-2 border-white shadow-lg">
                      <span className="w-2 h-2 bg-white rounded-full" />
                    </span>
                    
                    {activeHotspot === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 bg-white rounded-xl p-4 shadow-xl w-48 z-10"
                      >
                        <p className="font-display font-bold text-forticar-blue text-sm mb-1">
                          {feature.label}
                        </p>
                        <p className="text-xs text-forticar-blue/60">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-forticar-blue mb-6">
            El cambio que tu bolsillo notará
          </h2>
          <p className="text-lg text-forticar-blue/60 max-w-2xl mx-auto">
            La inversión en Forticar se paga sola en la primera semana evitando cobros perdidos.
          </p>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={i}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-white to-forticar-silver/50 shadow-neumorphic"
                data-testid={`card-benefit-${i}`}
              >
                <div className="w-16 h-16 bg-forticar-orange rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl lg:text-6xl font-display font-extrabold text-forticar-blue mb-2">
                  {benefit.stat}
                </div>
                <div className="text-lg font-display font-semibold text-forticar-orange mb-4">
                  {benefit.label}
                </div>
                <p className="text-forticar-blue/60 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="precios" className="py-20 lg:py-32 bg-forticar-silver/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-forticar-blue mb-6">
            Planes para cada taller
          </h2>
          <p className="text-lg text-forticar-blue/60 max-w-2xl mx-auto mb-8">
            Sin compromisos. Cancela cuando quieras.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`font-medium ${!isYearly ? "text-forticar-blue" : "text-forticar-blue/50"}`}>
              Mensual
            </span>
            <Switch 
              checked={isYearly} 
              onCheckedChange={setIsYearly}
              data-testid="switch-billing"
            />
            <span className={`font-medium ${isYearly ? "text-forticar-blue" : "text-forticar-blue/50"}`}>
              Anual
              <span className="ml-2 text-xs bg-forticar-orange text-white px-2 py-1 rounded-full">
                -17%
              </span>
            </span>
          </div>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <AnimatedSection key={i}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`relative p-8 rounded-3xl h-full flex flex-col ${
                  plan.highlighted 
                    ? "bg-forticar-blue text-white shadow-2xl scale-105" 
                    : "bg-white shadow-neumorphic"
                }`}
                data-testid={`card-plan-${i}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-forticar-orange text-white text-sm font-bold px-6 py-2 rounded-full">
                    Más Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`font-display font-bold text-2xl mb-1 ${
                    plan.highlighted ? "text-white" : "text-forticar-blue"
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={plan.highlighted ? "text-white/60" : "text-forticar-blue/50"}>
                    {plan.subtitle}
                  </p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-display font-extrabold ${
                      plan.highlighted ? "text-white" : "text-forticar-blue"
                    }`}>
                      ${isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                    </span>
                    <span className={plan.highlighted ? "text-white/60" : "text-forticar-blue/50"}>
                      MXN/mes
                    </span>
                  </div>
                  {isYearly && (
                    <p className={`text-sm mt-2 ${plan.highlighted ? "text-white/60" : "text-forticar-blue/50"}`}>
                      Facturado anualmente (${plan.yearlyPrice} MXN)
                    </p>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? "bg-forticar-orange" : "bg-forticar-orange/10"
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.highlighted ? "text-white" : "text-forticar-orange"
                        }`} />
                      </div>
                      <span className={plan.highlighted ? "text-white/80" : "text-forticar-blue/70"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-6 font-bold text-lg rounded-xl ${
                    plan.highlighted 
                      ? "bg-forticar-orange hover:bg-forticar-orange-dark text-white" 
                      : "bg-forticar-blue hover:bg-forticar-blue/90 text-white"
                  }`}
                  data-testid={`button-plan-${i}`}
                >
                  Comenzar Ahora
                </Button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-forticar-blue mb-6">
            Lo que dicen nuestros clientes
          </h2>
        </AnimatedSection>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white p-8 lg:p-12 rounded-3xl shadow-neumorphic text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-forticar-orange text-forticar-orange" />
              ))}
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-forticar-blue font-medium mb-8 leading-relaxed" data-testid={`text-testimonial-${current}`}>
              "{testimonials[current].quote}"
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-forticar-orange/10 rounded-full flex items-center justify-center">
                <Car className="w-8 h-8 text-forticar-orange" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-forticar-blue" data-testid={`text-testimonial-name-${current}`}>
                  {testimonials[current].name}
                </p>
                <p className="text-forticar-blue/60 text-sm">
                  {testimonials[current].business} • {testimonials[current].city}
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-forticar-orange hover:text-white transition-colors"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === current ? "bg-forticar-orange" : "bg-forticar-blue/20"
                  }`}
                  data-testid={`button-testimonial-dot-${i}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-forticar-orange hover:text-white transition-colors"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    workshop: "",
    mechanics: "",
    whatsapp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-gradient-to-br from-forticar-blue to-forticar-blue/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              ¿Listo para transformar tu taller?
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Solicita una consultoría gratuita y descubre cómo Forticar puede ayudarte.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-forticar-orange/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-forticar-orange" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Teléfono</p>
                  <p className="text-white font-medium">+52 55 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-forticar-orange/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-forticar-orange" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Email</p>
                  <p className="text-white font-medium">hola@forticar.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-forticar-orange/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-forticar-orange" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Oficinas</p>
                  <p className="text-white font-medium">Ciudad de México, México</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <form 
              onSubmit={handleSubmit}
              className="bg-white p-8 lg:p-10 rounded-3xl shadow-2xl space-y-6"
            >
              <h3 className="font-display font-bold text-2xl text-forticar-blue mb-2">
                Solicita tu demo gratuita
              </h3>
              <p className="text-forticar-blue/60 mb-6">
                Te contactamos en menos de 24 horas
              </p>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-forticar-blue font-medium">Nombre completo</Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 h-12 rounded-xl border-forticar-silver focus:border-forticar-orange"
                    placeholder="Tu nombre"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="workshop" className="text-forticar-blue font-medium">Nombre del taller</Label>
                  <Input 
                    id="workshop"
                    value={formData.workshop}
                    onChange={(e) => setFormData({ ...formData, workshop: e.target.value })}
                    className="mt-2 h-12 rounded-xl border-forticar-silver focus:border-forticar-orange"
                    placeholder="Mi Taller Mecánico"
                    data-testid="input-workshop"
                  />
                </div>
                <div>
                  <Label htmlFor="mechanics" className="text-forticar-blue font-medium">Número de mecánicos</Label>
                  <Input 
                    id="mechanics"
                    type="number"
                    value={formData.mechanics}
                    onChange={(e) => setFormData({ ...formData, mechanics: e.target.value })}
                    className="mt-2 h-12 rounded-xl border-forticar-silver focus:border-forticar-orange"
                    placeholder="5"
                    data-testid="input-mechanics"
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp" className="text-forticar-blue font-medium">WhatsApp</Label>
                  <Input 
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="mt-2 h-12 rounded-xl border-forticar-silver focus:border-forticar-orange"
                    placeholder="+52 55 1234 5678"
                    data-testid="input-whatsapp"
                  />
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full h-14 bg-forticar-orange hover:bg-forticar-orange-dark text-white font-bold text-lg rounded-xl"
                data-testid="button-submit-contact"
              >
                Solicitar Consultoría Gratis
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-forticar-blue py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-forticar-orange rounded-xl flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">FORTICAR</span>
            </div>
            <p className="text-forticar-silver/60 text-sm leading-relaxed">
              Software de gestión integral para talleres mecánicos, centros de colisión y servicios automotrices.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-4">Producto</h4>
            <ul className="space-y-3">
              <li><a href="#modulos" className="text-forticar-silver/60 hover:text-forticar-orange transition-colors text-sm" data-testid="link-footer-modulos">Módulos</a></li>
              <li><a href="#precios" className="text-forticar-silver/60 hover:text-forticar-orange transition-colors text-sm" data-testid="link-footer-precios">Precios</a></li>
              <li><a href="#" className="text-forticar-silver/60 hover:text-forticar-orange transition-colors text-sm" data-testid="link-footer-seguridad">Seguridad</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-4">Recursos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-forticar-silver/60 hover:text-forticar-orange transition-colors text-sm" data-testid="link-footer-blog">Blog</a></li>
              <li><a href="#" className="text-forticar-silver/60 hover:text-forticar-orange transition-colors text-sm" data-testid="link-footer-ayuda">Centro de Ayuda</a></li>
              <li><a href="#" className="text-forticar-silver/60 hover:text-forticar-orange transition-colors text-sm" data-testid="link-footer-api">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-forticar-orange transition-colors" data-testid="link-social-linkedin">
                <svg className="w-5 h-5 text-forticar-silver" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-forticar-orange transition-colors" data-testid="link-social-facebook">
                <svg className="w-5 h-5 text-forticar-silver" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-forticar-orange transition-colors" data-testid="link-social-youtube">
                <svg className="w-5 h-5 text-forticar-silver" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-forticar-silver/40 text-sm">
            Copyright © 2026 Forticar - Software de Gestión Automotriz. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <Benefits />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
