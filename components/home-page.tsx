"use client"

import { useState, useEffect } from "react"
import NextImage from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  ChevronDown,
  BarChart2,
  Users,
  TrendingUp,
  FileText,
  UserPlus,
  Mail,
  Phone,
  MapPin,
  Moon,
  Sun,
  Menu,
  X,
  Video,
  Image,
} from "lucide-react"

// Custom hook for detecting mobile view
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])
  return isMobile
}

const HomePage = () => {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  // Skills data from resume
  const skills = [
    "Social Media Marketing",
    "Content Strategies",
    "Digital Marketing",
    "SEO",
    "Brand Awareness",
    "Campaign Management",
    "Social Media Strategy",
    "LinkedIn Marketing",
    "Content Calendar",
    "Email Marketing",
    "Web Traffic",
    "Influencer Marketing",
    "A/B Testing",
    "Graphic Design",
    "Copywriting",
    "Brand Management",
    "Market Research",
    "Lead Generation",
    "Conversion Rate",
    "Audience Targeting",
  ]

  // Technical skills
  const technicalSkills = [
    { name: "Adobe Creative Suite", level: 90 },
    { name: "Meta Ads", level: 95 },
    { name: "Google Analytics", level: 85 },
    { name: "Tableau", level: 70 },
    { name: "Google Data Studio", level: 75 },
    { name: "Facebook Insights", level: 85 },
    { name: "Instagram Insights", level: 88 },
    { name: "TikTok Algorithms", level: 85 },
    { name: "Twitter Insights", level: 70 },
    { name: "Canva", level: 95 },
    { name: "Adobe Premiere Pro", level: 75 },
    { name: "Final Cut Pro", level: 80 },
    { name: "Asana", level: 85 },
    { name: "Trello", level: 85 },
    { name: "Social Bee", level: 78 },
  ]

  // Services
  const services = [
    { title: "Social Media Strategy", icon: <TrendingUp className="h-10 w-10 text-primary mb-4" />, description: "Comprehensive strategy development to align social media efforts with business goals and target audience preferences." },
    { title: "Content Creation", icon: <FileText className="h-10 w-10 text-primary mb-4" />, description: "Compelling, visually appealing content that resonates with your target audience and aligns with brand voice and values." },
    { title: "Community Management", icon: <Users className="h-10 w-10 text-primary mb-4" />, description: "Active engagement with your audience to build relationships, address concerns, and foster brand loyalty." },
    { title: "Analytics & Reporting", icon: <BarChart2 className="h-10 w-10 text-primary mb-4" />, description: "Data-driven insights to measure campaign effectiveness and inform strategic decisions for continuous improvement." },
    { title: "Influencer Partnerships", icon: <UserPlus className="h-10 w-10 text-primary mb-4" />, description: "Strategic collaborations with relevant influencers to expand reach and build credibility with new audiences." },
  ]

  // Case studies
  const caseStudies = [
    { title: "Getrude the osteopath - Social Media Revamp", description: "Developed and executed a comprehensive social media strategy transforming online presence via visual storytelling and targeted engagement.", metrics: ["+20% engagement", "+15% conversion", "-10% CPC", "+35% Instagram growth (6mo)"], image: "/placeholder.svg?height=400&width=600" },
    { title: "Grocer Mbio - Digital Marketing Campaign", description: "Data-driven content + SEO plan enhancing brand visibility and customer engagement.", metrics: ["+15% brand awareness", "+20% organic traffic", "+30% email CTR", "+12% retention"], image: "/placeholder.svg?height=400&width=600" },
    { title: "Fashion Brand Launch Campaign", description: "Launch strategy establishing digital presence from zero to traction.", metrics: ["10k+ followers first month", "25% engagement (avg 3%)", "5 influencer partnerships (500K reach)", "45% initial sales via social"], image: "/placeholder.svg?height=400&width=600" },
  ]

  // Testimonials
  const testimonials = [
    { quote: "Hope transformed our social media presence with strategic insights and creative content that truly resonated.", name: "Marketing Director", company: "Getrude the osteopath", image: "/placeholder.svg?height=60&width=60" },
    { quote: "Analytics-driven approach resulted in measurable growth and better ROI.", name: "CEO", company: "Grocer Mbio", image: "/placeholder.svg?height=60&width=60" },
    { quote: "Game-changer for our brand's online presence.", name: "Marketing Manager", company: "Client Company", image: "/placeholder.svg?height=60&width=60" },
  ]

  // Experience (structured)
  const experiences = [
    {
      role: "Social Media Marketing Specialist",
      company: "Lady and Lord",
      location: "Remote / Kenya",
      start: "Feb 2022",
      end: "Present",
      achievements: [
        "Produced visual content in Adobe Suite increasing engagement 20%",
        "Coordinated cross‑functional teams (Asana/Trello) achieving 95% on‑time delivery",
        "Analyzed performance & insights driving 10% increase in marketing efficiency",
        "Optimized paid ads (FB/IG/TikTok/Google): +15% conversions, -10% CPC",
        "Implemented multi-platform strategy boosting overall reach 20%",
        "Developed multi-format content (text/image/video) lifting audience interaction 25%",
        "Monitored trends & algorithm changes improving campaign effectiveness 20%",
      ],
      stack: ["Meta Ads", "TikTok", "Google Ads", "Adobe Suite", "Asana", "Trello"],
    },
    {
      role: "Social Media Manager",
      company: "Gertrude the Osteopath",
      location: "Remote",
      start: "Jan 2025",
      end: "Mar 2025",
      achievements: [
        "Developed content strategies enhancing brand presence & engagement",
        "Created & curated platform-tailored content maintaining brand voice",
        "Wrote/designed posts & visuals increasing audience connection",
        "Ensured voice/style consistency across assets",
        "Collaborated with influencers expanding reach & community",
      ],
      stack: ["Content Strategy", "Influencer Collabs", "Brand Voice"],
    },
    {
      role: "Content Creator & Social Media Manager",
      company: "Snapic Production",
      location: "(Dates not provided)",
      start: "2024",
      end: "2024",
      achievements: [
        "Produced engaging visual storytelling increasing engagement 20%",
        "Covered high-profile FINAS Summit events generating visibility",
        "Captured photo/video assets boosting event exposure",
        "Supported content creation contributing to follower growth",
        "Maintained brand consistency & quality across event content",
      ],
      stack: ["Event Coverage", "Content Production", "Brand Consistency"],
    },
    {
      role: "Social Media Manager",
      company: "Grocer Mbio",
      location: "Hybrid",
      start: "Jan 2020",
      end: "Feb 2022",
      achievements: [
        "+15% brand awareness via content strategy",
        "+20% organic traffic in 6 months through SEO optimization",
        "+30% click-through with improved marketing copy",
        "+10% conversion via analytics-led adjustments",
        "Email campaigns: 35% open rate / 15% conversion",
        "+12% customer retention through consistent brand alignment",
      ],
      stack: ["SEO", "Email Marketing", "Google Analytics", "Copywriting", "Retention"],
    },
  ]

  // Scroll interaction
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll("section[id]")
      const scrollPos = window.scrollY + 120
      sections.forEach((section) => {
        const el = section as HTMLElement
        if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(el.id)
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animate progress bars
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            const value = target.dataset.value || "0"
            target.style.width = value + "%"
          }
        })
      },
      { threshold: 0.1 },
    )
    const bars = document.querySelectorAll(".progress-bar-fill")
    bars.forEach((b) => observer.observe(b))
    return () => bars.forEach((b) => observer.unobserve(b))
  }, [])

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")
  const toggleMenu = () => setIsMenuOpen((p) => !p)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
            <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Hope Ijaza</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button onClick={toggleTheme} size="icon" variant="ghost" className="hidden md:flex">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button asChild size="sm" className="rounded-full hidden md:flex bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary">
              <Link href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); setActiveSection("contact") }}>Book a Consultation</Link>
            </Button>
            <div className="flex items-center md:hidden gap-2">
              <Button onClick={toggleTheme} size="icon" variant="ghost">{theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}</Button>
              <Button onClick={toggleMenu} size="icon" variant="ghost">{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</Button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm pt-20 px-6 md:hidden">
              <nav className="flex flex-col items-center space-y-6">
                {[
                  { name: "Home", id: "home" },
                  { name: "About", id: "about" },
                  { name: "Experience", id: "experience" },
                  { name: "Services", id: "services" },
                  { name: "Pricing", id: "pricing" },
                  { name: "Portfolio", id: "portfolio" },
                  { name: "Testimonials", id: "testimonials" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <Link key={item.id} href={`#${item.id}`} className={`text-lg font-medium hover:text-primary transition-colors ${activeSection === item.id ? "text-primary font-semibold" : ""}`} onClick={(e) => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" }); setActiveSection(item.id); closeMenu() }}>{item.name}</Link>
                ))}
                <Button asChild size="lg" className="rounded-full mt-4 w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary">
                  <Link href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); setActiveSection("contact"); closeMenu() }}>Book a Consultation</Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/10" />
        <div className="container mx-auto px-4 py-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-6">Social Media Expert</div>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Accomplished <span className="text-primary">Social Media Manager</span><br className="hidden md:block" /> & Digital Strategist</h1>
              <p className="text-md md:text-xl mb-6 max-w-xl">Over 3 years of crafting and executing innovative, data‑driven social media and digital marketing strategies across TikTok, Facebook, Instagram & LinkedIn—boosting brand visibility, engagement and conversions.</p>
              <div className="flex flex-wrap gap-3 mb-8 text-xs">
                {[
                  { label: "+20% Engagement", accent: "primary" },
                  { label: "+25% Audience Interaction", accent: "accent" },
                  { label: "+15% Conversions", accent: "primary" },
                  { label: "-10% CPC", accent: "accent" },
                ].map(b => (
                  <span key={b.label} className={`px-3 py-1 rounded-full border bg-background/70 tracking-wide font-medium border-${b.accent}/30 text-${b.accent}`}>{b.label}</span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button asChild className="rounded-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"><Link href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) }}>Get In Touch</Link></Button>
                <Button asChild variant="outline" className="rounded-full border-primary hover:bg-primary/10"><Link href="#portfolio" onClick={(e) => { e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }) }}>View Work</Link></Button>
              </div>
              <div className="flex gap-6 mt-8">
                <Link href="https://www.instagram.com/miss_ijaza?igsh=bG1kM280djNrZ2Q3" target="_blank" aria-label="Instagram" className="social-icon-animate"><Instagram className="h-5 w-5" /></Link>
                <Link href="https://www.linkedin.com/in/hope-ijaza-smm-472750210" target="_blank" aria-label="LinkedIn" className="social-icon-animate"><Linkedin className="h-5 w-5" /></Link>
                <Link href="https://www.facebook.com/share/1BeEKr8FJf/" target="_blank" aria-label="Facebook" className="social-icon-animate"><Facebook className="h-5 w-5" /></Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <NextImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-18%20at%2011.16.55-7nnMQ8mqCkh1HMlcrWORAeiY4U89OT.jpeg" alt="Hope Ijaza" fill className="object-cover" priority />
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">3+ Years<br />Experience</div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <Link href="#about" aria-label="Scroll down" onClick={(e) => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) }}><ChevronDown className="h-8 w-8 text-primary" /></Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:pr-8">
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10 h-full">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Hope Ijaza</h3>
                  <h4 className="text-xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent font-semibold">Social Media Manager & Digital Strategist</h4>
                  <p className="mb-4">Accomplished Social Media Manager with a proven record delivering platform growth, engagement lift and campaign efficiency. I plan, launch and optimize content & paid initiatives end‑to‑end—aligning creative, audience insight and performance data.</p>
                  <p className="mb-4">Experience spans multi-platform content production, paid ads optimization (Meta, TikTok, Google), community management, influencer collaboration and iterative reporting that drives decisions.</p>
                  <p className="mb-6">Recognized for translating brand goals into actionable roadmaps that increase visibility, lower acquisition costs and elevate retention.</p>
                  <div className="mb-4 mt-8">
                    <h4 className="text-lg font-bold mb-4 flex items-center"><span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2"><span className="text-xs font-bold text-primary">1</span></span>Education</h4>
                    <ul className="space-y-2 ml-8 text-sm">
                      <li className="flex items-start"><span className="text-primary mr-2">•</span><span>2021 — Bachelor of Information Science (IT Major), Kisii University</span></li>
                    </ul>
                  </div>
                  <div className="mb-4 mt-8">
                    <h4 className="text-lg font-bold mb-4 flex items-center"><span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2"><span className="text-xs font-bold text-primary">2</span></span>Certifications</h4>
                    <ul className="space-y-2 ml-8 text-xs md:text-sm">
                      <li className="flex items-start"><span className="text-primary mr-2">•</span><span>2023 — Meta (Facebook) Ads Certification</span></li>
                      <li className="flex items-start"><span className="text-primary mr-2">•</span><span>2023 — Google Ads Certification</span></li>
                      <li className="flex items-start"><span className="text-primary mr-2">•</span><span>2023 — Social Media Marketing – HubSpot Academy</span></li>
                      <li className="flex items-start"><span className="text-primary mr-2">•</span><span>2022 — Internet and Social Media Safety</span></li>
                      <li className="flex items-start"><span className="text-primary mr-2">•</span><span>2022 — Mastering Advertising in the Social Media Age</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 text-[10px] font-medium tracking-wide">
                    <span className="px-3 py-1 rounded-full bg-green-600/10 text-green-600 dark:text-green-400 border border-green-600/30">Open to Remote</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">Consulting</span>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">Campaign Optimization</span>
                  </div>
                  <div className="mt-10">
                    <Link href="#experience" className="inline-flex items-center gap-2 text-primary font-medium hover:underline"><span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">3</span>View Full Career History →</Link>
                  </div>
                </div>
              </div>
              <div className="hidden md:block relative">
                <div className="relative w-full h-[400px] flex items-center justify-center">
                  <div className="w-full max-w-[300px] aspect-square rounded-full border-8 border-white dark:border-gray-800 shadow-2xl overflow-hidden"><NextImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-18%20at%2011.16.55-7nnMQ8mqCkh1HMlcrWORAeiY4U89OT.jpeg" alt="Hope" fill className="object-cover" /></div>
                  <div className="absolute -top-4 px-6 py-2 rounded-full bg-white dark:bg-gray-800 shadow border text-sm font-medium">Social Media Expert</div>
                  <div className="absolute -bottom-4 px-6 py-2 rounded-full bg-white dark:bg-gray-800 shadow border text-sm font-medium">Digital Strategist</div>
                </div>
              </div>
              <div className="md:pl-8">
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10 h-full">
                  <p className="mb-6">Skilled in analytics, campaign optimization, paid media, and creator collaboration. Blend of creativity + performance focus.</p>
                  <h4 className="text-lg font-bold mb-4">Skills Snapshot</h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {skills.slice(0, 10).map(s => <span key={s} className="px-3 py-1 rounded-full bg-primary/10 text-primary">{s}</span>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <h4 className="text-xl font-bold mb-6 text-center">Skills & Tools</h4>
              <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-8">
                  <div className="bg-background/80 rounded-lg p-4 border">
                    <h5 className="font-semibold mb-3 text-primary">Strategy</h5>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {['Social Media Strategy', 'Content Calendar', 'Campaign Management', 'Brand Management', 'Influencer Marketing', 'Lead Generation'].map(s => <span key={s} className="px-2 py-1 rounded-md bg-primary/10 text-primary">{s}</span>)}
                    </div>
                  </div>
                  <div className="bg-background/80 rounded-lg p-4 border">
                    <h5 className="font-semibold mb-3 text-accent">Content & Creative</h5>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {['Content Creation', 'Copywriting', 'Graphic Design', 'Audience Targeting', 'A/B Testing'].map(s => <span key={s} className="px-2 py-1 rounded-md bg-accent/10 text-accent">{s}</span>)}
                    </div>
                  </div>
                  <div className="bg-background/80 rounded-lg p-4 border">
                    <h5 className="font-semibold mb-3 text-secondary">Analytics</h5>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {['SEO', 'Web Traffic', 'Conversion Rate', 'Market Research'].map(s => <span key={s} className="px-2 py-1 rounded-md bg-secondary/10 text-secondary">{s}</span>)}
                    </div>
                  </div>
                  <div className="bg-background/80 rounded-lg p-4 border">
                    <h5 className="font-semibold mb-3 text-emerald-600">Platforms & Tools</h5>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {['Meta Ads', 'TikTok', 'LinkedIn', 'Tableau', 'Google Data Studio', 'Facebook Insights', 'Instagram Insights', 'Twitter Insights', 'Social Bee', 'Asana', 'Trello', 'Canva'].map(s => <span key={s} className="px-2 py-1 rounded-md bg-emerald-600/10 text-emerald-700 dark:text-emerald-400">{s}</span>)}
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {technicalSkills.map(t => (
                    <div key={t.name} className="group">
                      <div className="flex items-center mb-1"><div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20"><span className="text-xs font-bold text-primary">{t.level}%</span></div><span className="font-medium group-hover:text-primary">{t.name}</span></div>
                      <div className="progress-bar bg-gradient-to-r from-background to-background/50 h-2 rounded overflow-hidden"><div className="progress-bar-fill h-full bg-gradient-to-r from-primary to-accent" data-value={t.level} style={{ width: 0 }} /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">Career Journey</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          <div className="relative max-w-5xl mx-auto">
            {/* Mobile vertical line reposition */}
            <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent hidden md:block" />
            <div className="space-y-12 md:space-y-16">
              {experiences.map((exp, idx) => {
                const isEven = idx % 2 === 0
                return (
                  <div key={`${exp.role}-${exp.company}-${idx}`} className="relative grid md:grid-cols-2 gap-10 items-start pt-2 md:pt-0">
                    {/* Text / main content */}
                    <div className={`flex flex-col gap-3 ${isEven ? 'md:order-1' : 'md:order-2'} order-2 md:${isEven ? 'text-right pr-8' : 'text-left'} `}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/70 border text-[11px] font-medium self-start md:self-auto md:ml-auto md:mr-0">
                        <span className="w-2 h-2 rounded-full bg-primary" /> {exp.start} – {exp.end}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold leading-snug">{exp.role}</h3>
                      <p className="text-muted-foreground font-medium text-sm -mt-1">{exp.company}</p>
                      <ul className="space-y-2 text-[13px] leading-relaxed md:text-sm">
                        {exp.achievements.slice(0, 5).map(a => (
                          <li key={a} className={`flex gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                            <span className="text-primary">•</span>
                            <span className="max-w-md">{a}</span>
                          </li>
                        ))}
                        {exp.achievements.length > 5 && (
                          <li className={`text-xs italic text-muted-foreground ${isEven ? 'md:text-right' : ''}`}>+ {exp.achievements.length - 5} more impact points</li>
                        )}
                      </ul>
                    </div>
                    {/* Meta card */}
                    <div className={`order-1 ${isEven ? 'md:order-2' : 'md:order-1'} relative pl-10 md:pl-0`}>
                      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-md">
                        <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary animate-pulse" />
                      </div>
                      <div className="mt-1 md:mt-0 bg-background/80 backdrop-blur-sm border border-border/60 rounded-xl p-4 md:p-6 shadow-sm h-full flex flex-col">
                        <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4">{exp.stack.slice(0, 5).map(tag => <span key={tag} className="text-[9px] md:text-[10px] tracking-wide uppercase bg-primary/10 text-primary px-2 py-1 rounded-md">{tag}</span>)}{exp.stack.length > 5 && <span className="text-[9px] bg-primary/5 px-2 py-1 rounded-md">+{exp.stack.length - 5}</span>}</div>
                        <p className="text-[11px] md:text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">What I Offer</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(s => (
              <div key={s.title} className="bg-white dark:bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-all border group">
                <div className="bg-primary/10 p-4 rounded-lg inline-block mb-6 group-hover:bg-primary/20">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 section-alt relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">Pricing Plans</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SMM Rate Card</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Bronze", price: "KShs 50,000", notes: "Basic", features: ["2 social platforms", "Strategy session", "1 month content calendar", "Design assets", "1 post / 3 stories daily", "Ads", "End of month report"], highlight: false, gradient: "from-teal-600 to-green-400" },
              { name: "Silver", price: "KSh 100,000", notes: "Standard", features: ["3 platforms", "Strategy session", "Monthly calendar", "2 posts / 5 stories weekly", "Ads", "Community management", "Reporting"], highlight: true, gradient: "from-teal-600 to-green-400" },
              { name: "Gold", price: "KSh 150,000", notes: "Premium", features: ["5 platforms", "Strategy session", "Weekly calendar", "3 posts / 5 stories daily", "Design work", "Social ads", "2 content sessions", "Engagement"], highlight: false, gradient: "from-teal-600 to-green-400" },
            ].map(pkg => (
              <div key={pkg.name} className={`bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border transition-transform hover:scale-105 relative ${pkg.highlight ? "scale-105" : ""}`}>
                {pkg.highlight && <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>}
                <div className={`bg-gradient-to-r ${pkg.gradient} p-6 text-white`}><h3 className="text-2xl font-bold mb-1">{pkg.name}</h3><p className="opacity-90">({pkg.notes})</p></div>
                <div className="p-6"><div className="text-3xl font-bold mb-6">{pkg.price}</div><ul className="space-y-3 mb-8 text-sm">{pkg.features.map(f => <li key={f} className="flex items-start"><span className="text-primary mr-2">•</span><span>{f}</span></li>)}</ul><Button asChild className="w-full rounded-full bg-gradient-to-r from-teal-600 to-green-400 hover:from-green-400 hover:to-teal-600"><Link href="#contact">Get Started</Link></Button></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 section-alt relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">Case Studies</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-background/50 backdrop-blur-sm"><TabsTrigger value="all">All</TabsTrigger><TabsTrigger value="strategy">Strategy</TabsTrigger><TabsTrigger value="content">Content</TabsTrigger></TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12">
                {caseStudies.map(study => (
                  <Card key={study.title} className="overflow-hidden border-none shadow-lg bg-background/80 backdrop-blur-sm hover:shadow-xl transition-all">
                    <div className="relative h-64 w-full"><NextImage src={study.image} alt={study.title} fill className="object-cover" /></div>
                    <CardContent className="p-6"><h3 className="text-xl font-bold mb-3">{study.title}</h3><p className="mb-4 text-muted-foreground text-sm leading-relaxed">{study.description}</p><h4 className="font-semibold mb-2">Key Results:</h4><ul className="space-y-1 mb-2 text-sm">{study.metrics.map(m => <li key={m} className="flex items-start"><span className="text-primary mr-2">•</span><span>{m}</span></li>)}</ul></CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2><div className="w-20 h-1 bg-primary mx-auto" /></div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <Card key={t.name} className="p-8 border-none shadow-lg"><p className="mb-6 italic text-sm leading-relaxed">{t.quote}</p><div className="flex items-center"><div className="relative w-12 h-12 rounded-full overflow-hidden mr-4"><NextImage src={t.image} alt={t.name} fill className="object-cover" /></div><div><h4 className="font-bold text-sm">{t.name}</h4><p className="text-xs text-muted-foreground">{t.company}</p></div></div></Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact (expanded) */}
      <section id="contact" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6 shadow-sm"><span className="w-2 h-2 rounded-full bg-primary animate-ping" /> Let's Connect</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Let's Build Your<br className="hidden md:block" /> Digital Presence</h2>
            <p className="max-w-2xl mx-auto mt-2 text-muted-foreground text-lg">Reach out directly—quick responses, strategic insight.</p>
          </div>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-8">
              <div className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-accent/30 to-primary/10">
                <div className="relative rounded-2xl p-8 bg-background/80 backdrop-blur-xl border border-primary/10 shadow-xl h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">Direct Contact</h3>
                  <p className="text-muted-foreground mb-6 text-sm">Choose a channel—I respond fast.</p>
                  <div className="space-y-4 text-sm">
                    <a href="mailto:ijazahope@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border bg-background/60 hover:bg-primary/5 transition-all"><span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><Mail className="h-5 w-5" /></span><div><span className="block text-muted-foreground text-xs">Email</span><span className="font-medium">ijazahope@gmail.com</span></div></a>
                    <a href="tel:+254743125620" className="flex items-center gap-4 p-4 rounded-xl border bg-background/60 hover:bg-primary/5 transition-all"><span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><Phone className="h-5 w-5" /></span><div><span className="block text-muted-foreground text-xs">Phone</span><span className="font-medium">+254 743 125 620</span></div></a>
                    <a href="https://wa.me/254743125620" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border bg-background/60 hover:bg-primary/5 transition-all"><span className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-600"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.164 5.3 5.443 0 12.057 0c3.181 0 6.167 1.24 8.413 3.488a11.79 11.79 0 013.485 8.41c-.003 6.615-5.283 11.903-11.898 11.903a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448-.003 9.886-4.437 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.433-9.889 9.884a9.81 9.81 0 001.588 5.271l-.999 3.648 3.9-1.618zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.767.967-.94 1.165-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" /></svg></span><div><span className="block text-muted-foreground text-xs">WhatsApp</span><span className="font-medium">Chat Instantly</span></div></a>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2 bg-background/60 rounded-lg px-3 py-2 border"><span className="w-2 h-2 rounded-full bg-green-500" />Contracts</div>
                    <div className="flex items-center gap-2 bg-background/60 rounded-lg px-3 py-2 border"><span className="w-2 h-2 rounded-full bg-primary" />Remote</div>
                    <div className="flex items-center gap-2 bg-background/60 rounded-lg px-3 py-2 border"><span className="w-2 h-2 rounded-full bg-accent" />Consulting</div>
                    <div className="flex items-center gap-2 bg-background/60 rounded-lg px-3 py-2 border"><span className="w-2 h-2 rounded-full bg-secondary" />Fast Turnaround</div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4 text-sm">
                    <Link href="#pricing" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-white hover:bg-primary/90">View Packages</Link>
                    <Link href="/cv.pdf" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/30 hover:border-primary">Download CV</Link>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-6 bg-background/70 backdrop-blur-xl border border-border/60 shadow-lg">
                <h4 className="font-semibold mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> Nairobi, Kenya</h4>
                <div className="flex gap-5 mb-4">
                  <Link href="https://www.instagram.com/miss_ijaza?igsh=bG1kM280djNrZ2Q3" target="_blank" aria-label="Instagram" className="social-icon-animate"><Instagram className="h-6 w-6" /></Link>
                  <Link href="https://www.linkedin.com/in/hope-ijaza-smm-472750210" target="_blank" aria-label="LinkedIn" className="social-icon-animate"><Linkedin className="h-6 w-6" /></Link>
                  <Link href="https://www.facebook.com/share/1BeEKr8FJf/" target="_blank" aria-label="Facebook" className="social-icon-animate"><Facebook className="h-6 w-6" /></Link>
                </div>
                <p className="text-sm text-muted-foreground">Available for strategy, full-funnel campaign management & brand acceleration.</p>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
              <div className="relative h-full rounded-3xl overflow-hidden border border-primary/10 bg-gradient-to-br from-primary/20 via-background to-accent/20 p-1">
                <div className="relative h-full w-full rounded-3xl p-10 flex flex-col justify-center items-start gap-8">
                  <div><span className="inline-block mb-4 px-4 py-1 rounded-full bg-background/70 border text-xs uppercase tracking-wide">Collaboration</span><h3 className="text-3xl md:text-4xl font-bold leading-snug max-w-xl">Let’s create data-driven social media campaigns that convert.</h3></div>
                  <p className="max-w-xl text-muted-foreground text-lg">From research and positioning to execution, optimization, and reporting—end‑to‑end partnership for sustainable growth.</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Link href="https://wa.me/254743125620" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-500">Start WhatsApp Chat</Link>
                    <Link href="mailto:ijazahope@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 hover:bg-primary/10">Email Me</Link>
                    <Link href="#portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90">View Case Studies</Link>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="rounded-2xl p-5 bg-background/70 backdrop-blur border hover:border-primary/40 transition-colors"><p className="text-xs text-muted-foreground mb-2">Avg Engagement Lift</p><p className="text-2xl font-bold">+20%</p></div>
                <div className="rounded-2xl p-5 bg-background/70 backdrop-blur border hover:border-primary/40 transition-colors"><p className="text-xs text-muted-foreground mb-2">Client Retention</p><p className="text-2xl font-bold">92%</p></div>
                <div className="rounded-2xl p-5 bg-background/70 backdrop-blur border hover:border-primary/40 transition-colors"><p className="text-xs text-muted-foreground mb-2">Campaign ROI</p><p className="text-2xl font-bold">3.5x</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 mt-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2 mb-4">Hope Ijaza</Link>
              <p className="text-muted-foreground mb-6 text-sm">Strategic social media management & performance-focused digital marketing solutions.</p>
              <div className="flex gap-6">
                <Link href="https://www.instagram.com/miss_ijaza?igsh=bG1kM280djNrZ2Q3" target="_blank" aria-label="Instagram" className="social-icon-animate"><Instagram className="h-5 w-5" /></Link>
                <Link href="https://www.linkedin.com/in/hope-ijaza-smm-472750210" target="_blank" aria-label="LinkedIn" className="social-icon-animate"><Linkedin className="h-5 w-5" /></Link>
                <Link href="https://www.facebook.com/share/1BeEKr8FJf/" target="_blank" aria-label="Facebook" className="social-icon-animate"><Facebook className="h-5 w-5" /></Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center"><Mail className="h-5 w-5 mr-3" /> ijazahope@gmail.com</p>
                <p className="flex items-center"><Phone className="h-5 w-5 mr-3" /> +254 743 125 620</p>
                <p className="flex items-center"><MapPin className="h-5 w-5 mr-3" /> Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Hope Ijaza. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0"><Link href="#" className="hover:text-primary">Privacy Policy</Link><Link href="#" className="hover:text-primary">Terms</Link></div>
          </div>
        </div>
      </footer>

      {/* Floating Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:block">
        <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border">
          <nav className="flex items-center space-x-6 text-xs font-medium">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Experience", id: "experience" },
              { name: "Services", id: "services" },
              { name: "Pricing", id: "pricing" },
              { name: "Portfolio", id: "portfolio" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ].map(item => (
              <Link key={item.id} href={`#${item.id}`} className={`hover:text-primary transition-colors ${activeSection === item.id ? "text-primary" : "text-muted-foreground"}`} onClick={(e) => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" }); setActiveSection(item.id) }}>{item.name}</Link>
            ))}
          </nav>
        </div>
      </div>
    </main>
  )
}

export default HomePage
