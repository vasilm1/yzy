'use client'

import Link from 'next/link'

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-black text-white/90 p-8 md:p-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] border border-white/5 rounded-full translate-x-1/3 -translate-y-1/3 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] border border-white/5 rounded-[30%] rotate-12 -translate-x-1/3 translate-y-1/3 opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-32 relative">
        <header className="space-y-4">
          <Link href="/" className="inline-block mb-8 text-white/40 hover:text-white/90 transition-colors">
            ←
          </Link>
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-16">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/10 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <span className="text-white/90 font-monument text-4xl md:text-6xl tracking-wider">YZY</span>
              </div>
            </div>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="font-brutal text-4xl md:text-6xl text-white/90 leading-tight">
                Breaking Free From The System
              </h1>
              <p className="font-brutal text-lg md:text-xl text-white/60 leading-relaxed">
                YZY token is the backbone of a creator-controlled ecosystem, where Ye&apos;s vision for freedom directly connects artists with their audience. No middlemen, no censorship, full ownership.
              </p>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-8">
            <h2 className="font-monument text-3xl text-white/90 tracking-wider">DIRECT INTEGRATION</h2>
            <div className="space-y-12">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="font-monument text-xl text-white/90 mb-4">SUNDAY SERVICE PRIVILEGES</h3>
                <ul className="space-y-4 text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Priority lottery for Sunday Service gatherings worldwide based on token tier</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Chance to win exclusive digital viewing access to special Sunday Service moments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Exclusive Sunday Service merchandise not available to the general public</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="font-monument text-xl text-white/90 mb-4">YEEZY PRIORITY ACCESS</h3>
                <ul className="space-y-4 text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>48-hour early access window to all YEEZY drops before public release</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Guaranteed allocation of one pair per drop based on token-tier</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Access to YEEZY archive pieces re-released exclusively for token holders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Monthly token-exclusive colorways not available to general public</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-monument text-3xl text-white/90 tracking-wider">ECOSYSTEM EXPANSION</h2>
            <div className="space-y-12">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="font-monument text-xl text-white/90 mb-4">CREATIVE COMMUNITY</h3>
                <ul className="space-y-4 text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Community-funded creative grants for emerging artists and designers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Access to curated design resources and creative assets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Digital access to select content from Ye&apos;s existing creative archives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Community spotlight features for standout token holder projects</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="font-monument text-xl text-white/90 mb-4">YZY SUPPLY INTEGRATION</h3>
                <ul className="space-y-4 text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Perpetual 15% discount on all non-limited YZY SUPPLY purchases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Token-based loyalty tiers with increasing benefits at 10k, 50k, and 100k token holdings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Exclusive YZY SUPPLY home goods and apparel lines available only with token access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Community feedback system with potential for design team consideration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="font-monument text-3xl text-white/90 tracking-wider text-center">DIRECT ARTIST CONTROL</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="font-monument text-xl text-white/90 mb-4">Music Ownership</h3>
              <ul className="space-y-3 text-white/60">
                <li>• Direct album and single releases outside traditional platforms</li>
                <li>• Token-gated stems and samples from Ye&apos;s production vault</li>
                <li>• Exclusive track releases to token holders</li>
                <li>• Community beat competitions with top entries featured in YZY content</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="font-monument text-xl text-white/90 mb-4">Content Freedom</h3>
              <ul className="space-y-3 text-white/60">
                <li>• Uncensored Ye documentary series access</li>
                <li>• Weekly behind-the-scenes digital content</li>
                <li>• Exclusive streaming events with creative insights</li>
                <li>• Priority access to official YZY messaging channels</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="font-monument text-xl text-white/90 mb-4">Creative Freedom</h3>
              <ul className="space-y-3 text-white/60">
                <li>• Seasonal digital design workshops with YEEZY creative insights</li>
                <li>• Collaborative community design competitions</li>
                <li>• Virtual tours of select creative processes</li>
                <li>• Digital showroom preview access to upcoming collections</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="font-monument text-3xl text-white/90 tracking-wider text-center">TECHNICAL FRAMEWORK</h2>
          <div className="grid grid-cols-1 gap-12">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="font-monument text-xl text-white/90 mb-6">SOLANA FOUNDATION</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-brutal text-white/90 mb-2">On-Chain Verification</h4>
                  <p className="text-white/60">YZY token holdings directly linked to the Yeezy Supply inventory system, guaranteeing authentic products and priority access through cryptographic verification.</p>
                </div>
                <div>
                  <h4 className="font-brutal text-white/90 mb-2">Membership Tiers</h4>
                  <p className="text-white/60">Five distinct membership tiers based on token holdings with escalating benefits at each level, verified by non-transferable Soulbound Tokens.</p>
                </div>
                <div>
                  <h4 className="font-brutal text-white/90 mb-2">Transfer Mechanics</h4>
                  <p className="text-white/60">Custom transfer mechanism enables token trading while preserving membership status through our proprietary cross-chain identity solution built directly into the YZY ecosystem.</p>
                </div>
                <div>
                  <h4 className="font-brutal text-white/90 mb-2">TRUTH Protocol</h4>
                  <p className="text-white/60">Custom censorship-resistant messaging protocol built on Solana delivers Ye&apos;s existing content directly to token holders, bypassing traditional social media platforms and their content restrictions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="pt-16 border-t border-white/10 flex flex-wrap gap-y-4 justify-between items-center">
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
        </footer>
      </div>
    </div>
  )
} 