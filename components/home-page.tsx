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
  ExternalLink,
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
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
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

  // Technical skills data from resume
  const technicalSkills = [
    { name: "Adobe Creative Suite", level: 90 },
    { name: "Meta Ads", level: 95 },
    { name: "Google Analytics", level: 85 },
    { name: "Hootsuite/Buffer", level: 90 },
    { name: "Canva", level: 95 },
    { name: "Asana/Trello", level: 85 },
    { name: "Final Cut Pro", level: 80 },
    { name: "TikTok Algorithms", level: 85 },
  ]

  // Services data
  const services = [
    {
      title: "Social Media Strategy",
      icon: <TrendingUp className="h-10 w-10 text-primary mb-4" />,
      description:
        "Comprehensive strategy development to align social media efforts with business goals and target audience preferences.",
    },
    {
      title: "Content Creation",
      icon: <FileText className="h-10 w-10 text-primary mb-4" />,
      description:
        "Compelling, visually appealing content that resonates with your target audience and aligns with brand voice and values.",
    },
    {
      title: "Community Management",
      icon: <Users className="h-10 w-10 text-primary mb-4" />,
      description:
        "Active engagement with your audience to build relationships, address concerns, and foster brand loyalty.",
    },
    {
      title: "Analytics & Reporting",
      icon: <BarChart2 className="h-10 w-10 text-primary mb-4" />,
      description:
        "Data-driven insights to measure campaign effectiveness and inform strategic decisions for continuous improvement.",
    },
    {
      title: "Influencer Partnerships",
      icon: <UserPlus className="h-10 w-10 text-primary mb-4" />,
      description:
        "Strategic collaborations with relevant influencers to expand reach and build credibility with new audiences.",
    },
  ]

  // Case studies data
  const caseStudies = [
    {
      title: "Getrude the osteopath - Social Media Revamp",
      description:
        "Developed and executed a comprehensive social media strategy that transformed the resort's online presence, focusing on visual storytelling and targeted engagement.",
      metrics: [
        "Increased social media engagement by 20% across all platforms",
        "Boosted conversion rates by 15% through strategic ad campaigns",
        "Decreased cost-per-click by 10% through audience optimization",
        "Grew Instagram following by 35% in just 6 months",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Grocer Mbio - Digital Marketing Campaign",
      description:
        "Implemented a data-driven content strategy and SEO optimization that significantly enhanced brand visibility and customer engagement for this growing grocery chain.",
      metrics: [
        "Improved brand awareness metrics by 15% through consistent messaging",
        "Increased organic website traffic by 20% through SEO-optimized content",
        "Achieved 30% higher click-through rates on email campaigns",
        "Enhanced customer retention by 12% through targeted social media engagement",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Fashion Brand Launch Campaign",
      description:
        "Orchestrated a successful social media launch strategy for an emerging fashion brand, establishing their digital presence from scratch.",
      metrics: [
        "Generated 10,000+ followers across platforms within the first month",
        "Achieved 25% engagement rate on launch posts (industry average: 3%)",
        "Secured 5 influencer partnerships with 500K+ combined reach",
        "Drove 45% of initial sales through social media channels",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      quote:
        "Hope transformed our social media presence with strategic insights and creative content that truly resonated with our audience.",
      name: "Marketing Director",
      company: "Getrude the osteopath",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "The analytics-driven approach Hope brought to our campaigns resulted in measurable growth and better ROI on our marketing spend.",
      name: "CEO",
      company: "Grocer Mbio",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Working with Hope has been a game-changer for our brand's online presence. Her expertise in content strategy is unmatched.",
      name: "Marketing Manager",
      company: "Client Company",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]
  

  // Handle scroll events to update active section and header styling
  useEffect(() => {
    const handleScroll = () => {
      // Update header styling based on scroll position
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animate progress bars on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            const value = target.dataset.value || "0"
            target.style.width = `${value}%`
          }
        })
      },
      { threshold: 0.1 },
    )

    const progressBars = document.querySelectorAll(".progress-bar-fill")
    progressBars.forEach((bar) => observer.observe(bar))

    return () => {
      progressBars.forEach((bar) => observer.unobserve(bar))
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
            <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Hope Ijaza
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Button onClick={toggleTheme} size="icon" variant="ghost" className="hidden md:flex">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              asChild
              size="sm"
              className="rounded-full hidden md:flex bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
            >
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  setActiveSection("contact")
                }}
              >
                Book a Consultation
              </Link>
            </Button>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center md:hidden gap-2">
              <Button onClick={toggleTheme} size="icon" variant="ghost">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button onClick={toggleMenu} size="icon" variant="ghost">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm pt-20 px-6 md:hidden">
              <nav className="flex flex-col items-center space-y-6">
                {[
                  { name: "Home", id: "home" },
                  { name: "About", id: "about" },
                  { name: "Services", id: "services" },
                  { name: "Portfolio", id: "portfolio" },
                  { name: "Blog", id: "blog" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-lg font-medium hover:text-primary transition-colors ${
                      activeSection === item.id ? "text-primary font-semibold" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                      setActiveSection(item.id)
                      closeMenu()
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  asChild
                  size="lg"
                  className="rounded-full mt-4 w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
                >
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      setActiveSection("contact")
                      closeMenu()
                    }}
                  >
                    Book a Consultation
                  </Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/10 z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 z-0">
          {/* This would be replaced with an AI-generated image showing a social media dashboard with analytics and content */}
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/20 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-secondary/30 blur-2xl"></div>

          {/* Social Media Platform Animation */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Instagram */}
            <div className="absolute top-[15%] left-[10%] animate-float-1 opacity-20">
              <Instagram className="h-12 w-12 text-primary" />
            </div>

            {/* Twitter/X */}
            <div className="absolute top-[65%] left-[15%] animate-float-2 opacity-15">
              <Twitter className="h-10 w-10 text-primary" />
            </div>

            {/* LinkedIn */}
            <div className="absolute top-[30%] left-[75%] animate-float-3 opacity-20">
              <Linkedin className="h-14 w-14 text-accent" />
            </div>

            {/* Facebook */}
            <div className="absolute top-[70%] left-[80%] animate-float-4 opacity-20">
              <Facebook className="h-11 w-11 text-secondary" />
            </div>

            {/* TikTok (using FileText as placeholder) */}
            <div className="absolute top-[45%] left-[30%] animate-float-5 opacity-15">
              <FileText className="h-12 w-12 text-primary" />
            </div>

            {/* Pinterest (using Image as placeholder) */}
            <div className="absolute top-[25%] left-[60%] animate-float-6 opacity-15">
              <Image className="h-10 w-10 text-accent" />
            </div>

            {/* YouTube (using Video as placeholder) */}
            <div className="absolute top-[55%] left-[50%] animate-float-7 opacity-20">
              <Video className="h-13 w-13 text-secondary" />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-6">
                Social Media Manager & Digital Strategist
              </div>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Elevating Brands Through <span className="text-primary">Strategic</span> Social Media Management
              </h1>
              <p className="text-md md:text-xl mb-8 max-w-xl">
                As an accomplished Social Media Manager with over 3 years of experience, I craft innovative digital
                marketing strategies that boost brand visibility and drive engagement.
              </p>
              <div className="flex gap-2">
                <Button
                  asChild
                  size="default"
                  className="rounded-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
                >
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Book a Consultation
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="rounded-full border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Link
                    href="#portfolio"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    View My Work
                  </Link>
                </Button>
              </div>
              <div className="flex gap-6 mt-8">
              <Link
                  href="https://www.instagram.com/miss_ijaza?igsh=bG1kM280djNrZ2Q3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-icon-animate"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/hope-ijaza-smm-472750210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon-animate"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/share/1BeEKr8FJf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social-icon-animate"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end animate-fade-in">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <NextImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-18%20at%2011.16.55-7nnMQ8mqCkh1HMlcrWORAeiY4U89OT.jpeg"
                  alt="Hope Ijaza - Social Media Manager"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3+ Years
                  <br />
                  Experience
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link
              href="#about"
              aria-label="Scroll down"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <ChevronDown className="h-8 w-8 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="relative">
            {/* Professional decorative elements */}
            <div className="absolute -top-16 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute -bottom-16 right-1/4 w-40 h-40 rounded-full bg-accent/10 blur-3xl"></div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
              {/* Left Column */}
              <div className="md:pr-8">
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10 h-full">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Hope Ijaza</h3>
                  <h4 className="text-xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent font-semibold">
                    Social Media Manager
                  </h4>
                  <p className="mb-6">
                    As an accomplished Social Media Manager with over 3 years of experience, I demonstrate excellence in
                    crafting and executing innovative digital marketing strategies across platforms like TikTok,
                    Facebook, Instagram, and LinkedIn.
                  </p>
                  <p className="mb-6">
                    Proficient in content creation and skilled in optimizing paid advertising campaigns, I consistently
                    boost brand visibility and drive engagement.
                  </p>

                  <div className="mb-4 mt-8">
                    <h4 className="text-lg font-bold mb-4 flex items-center">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                        <span className="text-xs font-bold text-primary">1</span>
                      </span>
                      Education
                    </h4>
                    <ul className="space-y-2 ml-8">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Bachelor of Information Science (Information technology major), Kisii University, 2021
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Center Column with Image - Hidden on mobile */}
              <div className="hidden md:block relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-[300px] aspect-square rounded-full border-8 border-white dark:border-gray-800 shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                    <NextImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-18%20at%2011.16.55-7nnMQ8mqCkh1HMlcrWORAeiY4U89OT.jpeg"
                      alt="Hope Ijaza - Professional Portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Professional badges around the image */}
                <div className="relative w-full h-[400px]">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-primary/20">
                    <span className="text-primary font-medium">Social Media Expert</span>
                  </div>

                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-primary/20">
                    <span className="text-primary font-medium">Digital Strategist</span>
                  </div>

                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-primary/20">
                    <span className="text-primary font-medium">Content Creator</span>
                  </div>

                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-primary/20">
                    <span className="text-primary font-medium">Brand Builder</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:pl-8">
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10 h-full">
                  <p className="mb-6">
                    I excel in using data analytics to measure campaign effectiveness and inform strategic decisions. My
                    proven track record includes significant growth in organic traffic and follower engagement,
                    enhancing overall brand presence and sales.
                  </p>

                  <div className="mb-4 mt-8">
                    <h4 className="text-lg font-bold mb-4 flex items-center">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                        <span className="text-xs font-bold text-primary">2</span>
                      </span>
                      Certifications
                    </h4>
                    <ul className="space-y-2 ml-8">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Facebook Ads Certification, 2023</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Google Ads Certification, 2023</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Social Media Marketing Certification, HubSpot Academy, 2023</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Professional Expertise */}
          <div className="mt-16">
            <h4 className="text-xl font-bold mb-6 text-center">Professional Expertise</h4>

            <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10">
              <div className="flex justify-between mb-6">
                <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
                  Marketing Skills
                </button>
                <button className="px-4 py-2 bg-background hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                  Technical Tools
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="col-span-2 md:col-span-1">
                  <div className="relative h-full">
                    <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary/20 blur-xl"></div>
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-accent/20 blur-xl"></div>

                    <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 h-full border border-primary/10 relative z-10">
                      <h5 className="font-semibold mb-3 text-primary">Core Competencies</h5>
                      <div className="flex flex-wrap gap-2">
                        {skills.slice(0, 8).map((skill, index) => (
                          <span key={index} className="skill-tag flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 md:col-span-1">
                  <div className="relative h-full">
                    <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-primary/20 blur-xl"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-accent/20 blur-xl"></div>

                    <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 h-full border border-primary/10 relative z-10">
                      <h5 className="font-semibold mb-3 text-accent">Specialized Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {skills.slice(8, 16).map((skill, index) => (
                          <span key={index} className="skill-tag flex items-center">
                            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h5 className="font-semibold text-primary">Technical Proficiency</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center mb-1">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                          <span className="text-xs font-bold text-primary">{skill.level}%</span>
                        </div>
                        <span className="font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                      </div>
                      <div className="progress-bar bg-gradient-to-r from-background to-background/50">
                        <div
                          className="progress-bar-fill bg-gradient-to-r from-primary to-accent"
                          data-value={skill.level}
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Continuously expanding my skillset through professional development
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm">
                  <span className="mr-2">+{skills.length - 16}</span> additional specialized skills
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">
              What I Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Comprehensive social media management services tailored to elevate your brand's online presence and drive
              meaningful engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-card p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-border group"
              >
                <div className="bg-primary/10 p-4 rounded-lg inline-block mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
            >
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Request Custom Service
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 section-alt relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/10 z-0"></div>
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/20 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">
              Case Studies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Showcasing successful social media campaigns and strategies that delivered measurable results.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-background/50 backdrop-blur-sm">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12">
                {caseStudies.map((study, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border-none shadow-lg bg-background/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-64 w-full">
                      <NextImage
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-cover"
                      />
                      {/* This would be replaced with AI-generated images showing social media campaign visuals */}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                      <p className="mb-4 text-muted-foreground">{study.description}</p>
                      <h4 className="font-semibold mb-2">Key Results:</h4>
                      <ul className="space-y-1 mb-6">
                        {study.metrics.map((metric, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="strategy" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12">
                {caseStudies
                  .filter((_, index) => index === 0)
                  .map((study, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden border-none shadow-lg bg-background/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-64 w-full">
                        <NextImage
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                        <p className="mb-4 text-muted-foreground">{study.description}</p>
                        <h4 className="font-semibold mb-2">Key Results:</h4>
                        <ul className="space-y-1 mb-6">
                          {study.metrics.map((metric, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{metric}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          View Case Study
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="content" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12">
                {caseStudies
                  .filter((_, index) => index === 2)
                  .map((study, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden border-none shadow-lg bg-background/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-64 w-full">
                        <NextImage
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                        <p className="mb-4 text-muted-foreground">{study.description}</p>
                        <h4 className="font-semibold mb-2">Key Results:</h4>
                        <ul className="space-y-1 mb-6">
                          {study.metrics.map((metric, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{metric}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          View Case Study
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              What clients say about working with me and the results we've achieved together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-none shadow-lg">
                <div className="mb-6">
                  <span className="testimonial-quote">"</span>
                </div>
                <p className="mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <NextImage
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/5 z-0"></div>
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-accent/20 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">
              Let's Connect
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Ready to elevate your social media presence? Let's discuss how I can help your brand grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <a
                      href="mailto:ijazahope@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      ijazahope@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <a href="tel:+254743125620" className="text-muted-foreground hover:text-primary transition-colors">
                      +254 743 125 620
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-12 mb-6">Follow Me</h3>
              <div className="flex gap-6">
              
              <Link
                  href="https://www.instagram.com/miss_ijaza?igsh=bG1kM280djNrZ2Q3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-icon-animate"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/hope-ijaza-smm-472750210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon-animate"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/share/1BeEKr8FJf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social-icon-animate"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full p-3 rounded-md border border-input bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-3 rounded-md border border-input bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full p-3 rounded-md border border-input bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-3 rounded-md border border-input bg-background/50 min-h-[150px] focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2 mb-4">
                Hope Ijaza
              </Link>
              <p className="text-muted-foreground mb-6">
                Elevating brands through strategic social media management and innovative digital marketing solutions.
              </p>
              <div className="flex gap-6">
                <Link
                  href="https://www.instagram.com/miss_ijaza?igsh=bG1kM280djNrZ2Q3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-icon-animate"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/hope-ijaza-smm-472750210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon-animate"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/share/1BeEKr8FJf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social-icon-animate"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <div className="space-y-3">
                <p className="flex items-center text-muted-foreground">
                  <Mail className="h-5 w-5 mr-3" />
                  ijazahope@gmail.com
                </p>
                <p className="flex items-center text-muted-foreground">
                  <Phone className="h-5 w-5 mr-3" />
                  +254 743 125 620
                </p>
                <p className="flex items-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-3" />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Hope Ijaza. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Navigation Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 hidden md:block">
        <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-border">
          <nav className="flex items-center space-x-8">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Portfolio", id: "portfolio" },
              { name: "Blog", id: "blog" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  activeSection === item.id ? "text-primary" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                  setActiveSection(item.id)
                }}
              >
                {activeSection === item.id ? (
                  <div className="flex flex-col items-center">
                    <span>{item.name}</span>
                    <span className="w-2 h-2 bg-primary rounded-full mt-1"></span>
                  </div>
                ) : (
                  item.name
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </main>
  )
}

export default HomePage

