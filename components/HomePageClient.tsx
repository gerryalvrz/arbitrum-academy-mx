'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Section from '@/components/Section';
import ArbitrumHero from '@/components/ArbitrumHero';

const FeatureCard = dynamic(() => import('@/components/FeatureCard'), {
  loading: () => <div className="h-32 bg-gray-100 dark:bg-white/5 animate-pulse rounded" />,
});

const STATS = [
  { value: '100+', label: 'Cadenas (Orbit)' },
  { value: '$20B+', label: 'Total Value Secured' },
  { value: '1.000+', label: 'Proyectos desplegados' },
  { value: '$150M+', label: 'DAO Treasury' },
];

export default function HomePageClient() {
  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24 pb-16 sm:pb-20 lg:pb-24">
      <ArbitrumHero />

      {/* Por qué Arbitrum — datos del ecosistema */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-celo-border bg-celo-card/50 py-10 sm:py-12 lg:py-14 px-6 sm:px-8">
          <p className="text-center text-celo-muted text-sm sm:text-base uppercase tracking-wider mb-8 sm:mb-10">
            El L2 líder. Construye donde está el valor.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-celo-yellow">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-celo-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lo que ofrece la academia (narrativa Arbitrum) */}
      <Section
        title="Construye en Arbitrum"
        subtitle="Apps, cadenas, grants y más. Aprende con cursos y certificaciones alineados al ecosistema."
      >
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Apps y cadenas"
            description="Desarrolla dApps en Arbitrum One y aprende a lanzar tu propia chain con Orbit."
            icon="ok"
          />
          <FeatureCard
            title="Grants y DAO"
            description="Conoce cómo acceder a Foundation Grants, ArbiFuel y programas del DAO."
            icon="knpo"
          />
          <FeatureCard
            title="Stylus y herramientas"
            description="Solidity, Stylus (Rust) y el stack de desarrollador para escalar tu proyecto."
            icon="ipkm"
          />
          <FeatureCard
            title="RWA y ecosistema"
            description="Tokenización, stablecoins y casos de uso institucional en el L2 líder."
            icon="pm"
          />
        </div>
      </Section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl border border-celo-border bg-celo-card/50 py-12 sm:py-16 lg:py-20 px-6 sm:px-10 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-celo-fg mb-4">
            De la idea al grant
          </h2>
          <p className="text-celo-muted text-sm sm:text-base max-w-xl mx-auto mb-8">
            Aprende, construye y accede a programas de la Fundación y el DAO. Más de 100 cadenas y 1.000+ proyectos ya están en Arbitrum.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-celo-yellow text-white font-semibold px-8 py-3.5 text-sm sm:text-base hover:opacity-90 transition-opacity"
            >
              Ver cursos
            </Link>
            <a
              href="https://arbitrum.foundation/grants"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-celo-border text-celo-fg font-semibold px-8 py-3.5 text-sm sm:text-base hover:bg-celo-border/20 transition-colors"
            >
              Grants de la Fundación
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
