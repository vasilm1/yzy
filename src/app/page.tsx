'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [twitchSrc, setTwitchSrc] = useState("https://player.twitch.tv/?channel=kanye&parent=localhost&parent=yzyweb.vercel.app&parent=unlockyeezy.com")
  
  useEffect(() => {
    // Get the current hostname for the Twitch parent parameter
    const hostname = window.location.hostname
    // Add the current hostname to the existing sources
    setTwitchSrc(`https://player.twitch.tv/?channel=kanye&parent=localhost&parent=yzyweb.vercel.app&parent=unlockyeezy.com&parent=${hostname}`)
  }, [])

  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features')
    featuresSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToVision = () => {
    const visionSection = document.querySelector('#vision')
    visionSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTwitch = () => {
    const twitchSection = document.querySelector('#twitch')
    twitchSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-50%] left-[-50%] w-[120vw] h-[120vh] border-[1px] border-white/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute top-[-30%] left-[-30%] w-[100vw] h-[100vh] border-[3px] border-white/20 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>
        <div className="absolute bottom-[-50%] right-[-50%] w-[150vw] h-[150vh] border-[1px] border-white/20 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
        <div className="absolute bottom-[-30%] right-[-30%] w-[130vw] h-[130vh] border-[3px] border-white/20 rounded-full animate-[spin_35s_linear_infinite]"></div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col">
          {/* Hero Section */}
          <div className="h-screen flex flex-col items-center justify-center relative">
            <div className="text-center">
              <h1 className="font-monument text-[35vw] md:text-[25vw] leading-none text-white/90 tracking-tighter mb-8">
                YZY
              </h1>
              <p className="font-brutal text-xl md:text-3xl text-white/60 tracking-widest">
                TRUTH IS THE NEW CURRENCY
              </p>
            </div>
            
            {/* Scroll Indicator */}
            <button 
              onClick={scrollToFeatures}
              className="absolute bottom-32 flex flex-col items-center animate-bounce cursor-pointer group hover:text-white/60 transition-all duration-500"
            >
              <div className="text-white/40 font-brutal text-sm tracking-widest mb-4 group-hover:text-white/60">SCROLL</div>
              <svg className="w-6 h-6 text-white/40 group-hover:text-white/60 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          {/* Features Section */}
          <div id="features" className="min-h-screen p-8 md:p-16 flex items-center bg-black/40">
            <div className="max-w-[120rem] mx-auto w-full space-y-4 md:space-y-8">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="md:w-2/3 p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500">
                  <h2 className="font-monument text-4xl md:text-6xl text-white/90 mb-6">FREEDOM OF SPEECH</h2>
                  <p className="font-brutal text-lg text-white/60 leading-relaxed">
                    A movement beyond physical boundaries. A voice that cannot be silenced. A truth that cannot be hidden.
                  </p>
                </div>
                <div className="md:w-1/3 p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500">
                  <h2 className="font-monument text-4xl md:text-6xl text-white/90 mb-6">DIVINE PURPOSE</h2>
                  <p className="font-brutal text-lg text-white/60 leading-relaxed">
                    Guided by a higher calling. Driven by unwavering faith. Bound by divine truth.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="md:w-1/3 p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500">
                  <h2 className="font-monument text-4xl md:text-6xl text-white/90 mb-6">POWER</h2>
                  <p className="font-brutal text-lg text-white/60 leading-relaxed">
                    The strength to speak truth. The courage to stand alone. The power to change everything.
                  </p>
                </div>
                <div className="md:w-2/3 p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500">
                  <h2 className="font-monument text-4xl md:text-6xl text-white/90 mb-6">TRUTH</h2>
                  <p className="font-brutal text-lg text-white/60 leading-relaxed">
                    Beyond the lies. Beyond the system. Beyond the matrix. The truth shall set you free.
                  </p>
                </div>
              </div>

              {/* Second Scroll Button */}
              <div className="flex justify-center pt-16">
                <button 
                  onClick={scrollToTwitch}
                  className="flex flex-col items-center animate-bounce cursor-pointer group hover:text-white/60 transition-all duration-500"
                >
                  <div className="text-white/40 font-brutal text-sm tracking-widest mb-4 group-hover:text-white/60">SCROLL</div>
                  <svg className="w-6 h-6 text-white/40 group-hover:text-white/60 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Twitch Embed Section */}
          <div id="twitch" className="min-h-screen flex flex-col items-center justify-center p-8 md:p-16 bg-black/40">
            <h2 className="font-monument text-4xl md:text-6xl text-white/90 mb-12 text-center">LIVE</h2>
            <div className="w-full max-w-5xl aspect-video">
              <iframe
                src={twitchSrc}
                height="100%"
                width="100%"
                allowFullScreen={true}
                className="border border-white/10 bg-black/80"
              ></iframe>
            </div>
            
            {/* Third Scroll Button */}
            <div className="flex justify-center pt-16">
              <button 
                onClick={scrollToVision}
                className="flex flex-col items-center animate-bounce cursor-pointer group hover:text-white/60 transition-all duration-500"
              >
                <div className="text-white/40 font-brutal text-sm tracking-widest mb-4 group-hover:text-white/60">SCROLL</div>
                <svg className="w-6 h-6 text-white/40 group-hover:text-white/60 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Vision Link */}
          <div id="vision" className="h-screen flex items-center justify-center">
            <Link href="/whitepaper">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <span className="font-monument text-[15vw] md:text-[10vw] text-white/20 group-hover:text-white/40 transition-all duration-500">
                    VISION
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="font-brutal text-2xl md:text-3xl text-white/90">EXPLORE →</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 py-8 border-t border-white/10 bg-black/95 backdrop-blur-sm z-50">
          <div className="max-w-[120rem] mx-auto px-8 flex justify-between items-center">
            <a 
              href="https://x.com/yzy_tkn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 font-brutal text-sm tracking-[0.3em] hover:text-white/60 transition-colors"
            >
              YZY • X
            </a>
            <a 
              href="#" 
              className="text-white/40 font-brutal text-sm tracking-[0.3em] hover:text-white/60 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              YZY • SOL
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
