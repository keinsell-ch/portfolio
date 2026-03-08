'use client'

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image"
import { useEffect, useState } from "react"

const TypewriterText = ({ text, delay = 50, className = "" }: { text: string; delay?: number; className?: string }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay])

  // Split text by \n and render each line separately
  const lines = displayText.split('. ')

  return (
    <span className={className}>
      {lines.map((line, index) => (
        <span key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const About = () => {
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const phases = [
      { delay: 0, duration: 1000 },      // Avatar move
      { delay: 1000, duration: 2000 },   // Name typing
      { delay: 3000, duration: 2000 },   // Title typing
      { delay: 5000, duration: 1500 },   // Contact icons
      { delay: 6500, duration: 3000 },   // Summary typing
    ]

    phases.forEach((phase, index) => {
      setTimeout(() => {
        setAnimationPhase(index + 1)
      }, phase.delay)
    })
  }, [])

  const contactIcons = [
    {
      icon: "/images/contact/mail.svg",
      alt: "Email",
      url: "mizunoharuki0624@gmail.com",
      onClick: () => {
        const email = "mizunoharuki0624@gmail.com"
        const subject = "Hello, Haruki!"
        const body = "I'm interested in your project. Please contact me."
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.open(mailtoUrl, "_blank")
      }
    },
    {
      icon: "/images/contact/calendar.svg",
      alt: "Calendar",
      url: "https://calendly.com/harukimizuno0222",
      onClick: () => window.open("https://calendly.com/harukimizuno0222", "_blank")
    },
    {
      icon: "/images/contact/whatsapp.svg",
      alt: "WhatsApp",
      url: "+818021943843",
      onClick: () => {
        const phone = "+818021943843"
        const message = "Hello, Haruki!"
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
      }
    },
    {
      icon: "/images/contact/discord.svg",
      alt: "Discord",
      url: "@lazybigcat0624",
      onClick: () => window.open("https://discord.com/users/lazybigcat0624", "_blank")
    },
    {
      icon: "/images/contact/telegram.svg",
      alt: "Telegram",
      url: "@lazybigcat0624",
      onClick: () => window.open("https://t.me/lazybigcat0624", "_blank")
    },
    {
      icon: "/images/contact/linkedin.svg",
      alt: "LinkedIn",
      url: "https://www.linkedin.com/in/haruki-mizuno-a9540b398",
      onClick: () => window.open("https://www.linkedin.com/in/haruki-mizuno-a9540b398", "_blank")
    },
    {
      icon: "/images/contact/github.svg",
      alt: "GitHub",
      url: "https://github.com/lazybigcat0624",
      onClick: () => window.open("https://github.com/lazybigcat0624", "_blank")
    }
  ]

  const contactDetails = [
    {
      label: "Portfolio",
      value: "harukimizuno.vercel.app",
      href: "https://harukimizuno.vercel.app"
    },
    {
      label: "Email",
      value: "mizunoharuki0624@gmail.com",
      href: "mailto:mizunoharuki0624@gmail.com"
    },
    {
      label: "WhatsApp",
      value: "+81 80-2194-3843",
      href: "https://wa.me/+818021943843"
    },
    {
      label: "Calendar",
      value: "Book a call",
      href: "https://calendly.com/harukimizuno0222"
    },
    {
      label: "LinkedIn",
      value: "haruki-mizuno-6310a6365",
      href: "https://www.linkedin.com/in/haruki-mizuno-a9540b398"
    },
    {
      label: "Telegram",
      value: "@lazybigcat0624",
      href: "https://t.me/lazybigcat0624"
    },
    {
      label: "Discord",
      value: "@lazybigcat0624",
      href: "https://discord.com/users/lazybigcat0624"
    }
  ]

  return (
    <div className="flex-1 flex justify-center text-white p-6">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar Section */}
          <div className={`transition-all duration-1000 ease-out ${animationPhase >= 1
            ? "translate-x-0"
            : "translate-x-[100px]"
            }`}>
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-purple-500/30 shadow-2xl transition-all duration-500 group-hover:ring-purple-400/60 group-hover:shadow-purple-500/25">
                <Image
                  src="/images/logos/bingrong.png"
                  alt="Haruki Mizuno"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center md:text-left">
            {/* Name and Title */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {animationPhase >= 2 ? (
                  <TypewriterText
                    text="Haruki Mizuno"
                    delay={100}
                    className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
                  />
                ) : (
                  <span className="text-transparent">Haruki Mizuno</span>
                )}
              </h1>

              <div className="text-lg md:text-2xl text-gray-300">
                {animationPhase >= 3 ? (
                  <TypewriterText
                    text="Mobile Full-Stack Developer"
                    delay={80}
                    className="text-white font-semibold"
                  />
                ) : (
                  <span className="text-transparent">Mobile Full-Stack Developer</span>
                )}
              </div>
            </div>

            {/* Contact Icons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              {contactIcons.map((social, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${animationPhase >= 4
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-4 scale-75"
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={social.onClick}
                        className="group relative p-3 rounded-full cursor-pointer bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                      >
                        <Image
                          src={social.icon}
                          alt={social.alt}
                          width={24}
                          height={24}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>{social.url}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="max-w-4xl">
              {animationPhase >= 5 ? (
                <div className="text-gray-300 leading-relaxed">
                  <TypewriterText
                    text="Hi, I’m Haruki Mizuno, a Mobile App Developer with over 7 years of experience in full-stack engineering and trading system development. I began my career building scalable web and backend infrastructures using Node.js, AWS, and Firebase, before expanding into mobile development, where I specialize in crafting high-performance iOS and Android applications with Swift, Kotlin, and Flutter. In addition to mobile apps, I’ve developed automated trading platforms that integrate live market data, AI-driven analytics, and automation APIs, enabling smarter decision-making and faster execution. I’m passionate about combining mobile innovation, intelligent architecture, and emerging AI technologies to deliver applications that are not only fast and reliable but also insight-driven and future-ready."
                    delay={30}
                    className="text-base md:text-lg"
                  />
                </div>
              ) : (
                <div className="text-transparent text-base md:text-lg">
                  Hi, I’m Haruki Mizuno, a Mobile App Developer with over 7 years of experience in full-stack engineering and trading system development.

                  I began my career building scalable web and backend infrastructures using Node.js, AWS, and Firebase, before expanding into mobile development, where I specialize in crafting high-performance iOS and Android applications with Swift, Kotlin, and Flutter.

                  In addition to mobile apps, I’ve developed automated trading platforms that integrate live market data, AI-driven analytics, and automation APIs, enabling smarter decision-making and faster execution.

                  I’m passionate about combining mobile innovation, intelligent architecture, and emerging AI technologies to deliver applications that are not only fast and reliable but also insight-driven and future-ready.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About







