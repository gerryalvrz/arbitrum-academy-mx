import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
  	extend: {
  		screens: {
  			'xs': '475px',
  			'sm': '640px',
  			'md': '768px',
  			'lg': '1024px',
  			'xl': '1280px',
  			'2xl': '1536px',
  		},
		colors: {
  			/* Arbitrum theme (celo-* var names kept for compatibility) */
  			celo: {
					bg: 'var(--celo-bg)',
					fg: 'var(--celo-fg)',
					muted: 'var(--celo-muted)',
					border: 'var(--celo-border)',
					yellow: 'var(--celo-yellow)',
					yweak: 'var(--celo-yellow-weak)',
					accent: 'var(--celo-accent)',
					card: 'var(--celo-card)'
				},
				/* Arbitrum palette alias */
				arbitrum: {
					bg: 'var(--celo-bg)',
					fg: 'var(--celo-fg)',
					muted: 'var(--celo-muted)',
					border: 'var(--celo-border)',
					blue: 'var(--celo-yellow)',
					accent: 'var(--celo-accent)',
					card: 'var(--celo-card)'
				},
				// Arbitrum primary palette (navy, primary blue, teal)
				celoLegacy: {
					yellow: '#016BE5',
					yellowAlt: '#10E1FF',
					lime: '#10E1FF',
					black: '#05163D',
					white: '#FFFFFF',
					gray: {
						'100': '#f1f5f9',
						'200': '#e2e8f0',
						'300': '#cbd5e1',
						'500': '#64748b',
						'700': '#475569',
						'900': '#05163D'
					}
				},
				arbitrumPalette: {
					navy: '#05163D',
					blue: '#016BE5',
					teal: '#10E1FF',
				},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		borderRadius: {
			xl: '1rem',
			'2xl': '1.25rem',
			'xl2': '1.25rem',
			'xl3': '1.75rem',
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
  		boxShadow: {
  			soft: '0 10px 30px -12px rgba(0,0,0,0.15)',
  			focus: '0 0 0 2px var(--celo-yellow)'
  		},
  		fontFamily: {
  			display: 'var(--font-display)',
  			body: 'var(--font-body)',
  			arbitrum: ['var(--font-arbitrum)', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    animate, 
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
};

export default config;



