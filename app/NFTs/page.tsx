"use client";

import Link from "next/link";
import BalanceWidget from "@/components/BalanceWidget";
import { Button } from "@/components/ui/button";

export default function NFTsPage() {
  return (
    <div className="min-h-screen celo-bg celo-text">
      <div className="border-b celo-border">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl lg:text-5xl font-display celo-heading mb-2">
            NFTs
          </h1>
          <p className="text-lg celo-text opacity-80">
            Esta sección no está disponible en Arbitrum Academy.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="celo-card celo-border rounded-2xl p-8 text-center max-w-xl mx-auto">
          <p className="celo-text opacity-80 mb-6">
            Explora la academia y los cursos para obtener badges y certificados on-chain.
          </p>
          <div className="flex flex-col gap-6">
            <Button asChild className="bg-celo-primary hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl w-fit mx-auto">
              <Link href="/academy">Ir a Academia</Link>
            </Button>
            <div className="flex justify-center">
              <BalanceWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
