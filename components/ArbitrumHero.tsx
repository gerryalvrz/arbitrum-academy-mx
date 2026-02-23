'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ArbitrumHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex flex-col items-center justify-center text-center px-6 sm:px-10 py-16 sm:py-20 lg:py-24">
        {/* Background gradient: lighter blue top/center → navy bottom/edges */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 120% 100% at 50% 20%, #016BE5 0%, #0a2152 45%, #05163D 100%)',
          }}
        />
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-tight italic">
            <span className="block">ARBITRUM</span>
            <span className="flex items-center justify-center gap-3 sm:gap-4 mt-1 sm:mt-2">
              <Image
                src="/1225_Arbitrum_Logomark_all/1225_Arbitrum_Logomark_FullColor_ClearSpace.png"
                alt=""
                width={56}
                height={56}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0 object-contain"
                unoptimized
              />
              <span className="block">ACADEMY</span>
            </span>
          </h1>
          <p className="mt-6 sm:mt-8 text-white/95 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
            Desde cursos hasta certificaciones, Arbitrum Academy te da el conocimiento y las herramientas para construir más rápido y escalar más lejos.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <Link
              href="/academy"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-black text-white font-semibold px-8 py-3.5 text-sm sm:text-base hover:bg-black/90 transition-colors"
            >
              Explorar cursos
            </Link>
            <Link
              href="https://discord.gg/arbitrum"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent text-white font-semibold px-8 py-3.5 text-sm sm:text-base hover:bg-white/10 transition-colors"
            >
              Unirse a la comunidad
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
