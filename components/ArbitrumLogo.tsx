'use client';

import Image from 'next/image';
import { useTheme } from '@/components/theme/ThemeProvider';

const LOGO = {
  /** For dark backgrounds (navy/dark theme) */
  light: '/1225_Arbitrum_Logo_all/1225_Arbitrum_Logo_FullColorWhite_Clearspace.svg',
  /** For light backgrounds */
  dark: '/1225_Arbitrum_Logo_all/1225_Arbitrum_Logo_FullColorNavy_Clearspace.svg',
} as const;

export interface ArbitrumLogoProps {
  className?: string;
  width?: number;
  height?: number;
  /** Override auto theme: 'light' = use white logo (on dark bg), 'dark' = use navy logo (on light bg) */
  variant?: 'light' | 'dark';
}

export default function ArbitrumLogo({
  className = '',
  width = 120,
  height = 27,
  variant,
}: ArbitrumLogoProps) {
  const { theme } = useTheme();
  const src =
    variant ? LOGO[variant]
      : theme === 'dark'
        ? LOGO.light
        : LOGO.dark;

  return (
    <Image
      src={src}
      alt="Arbitrum"
      width={width}
      height={height}
      className={className}
      priority
      unoptimized
    />
  );
}
