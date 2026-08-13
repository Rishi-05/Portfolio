import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class", "class"],
  theme: {
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1536px'
  	},
  	extend: {
  		animation: {
  			aurora: 'aurora 60s linear infinite'
  		},
  		colors: {
        mint: 'oklch(0.86 0.19 165)',
        violet: 'oklch(0.66 0.24 300)',
        amber: 'oklch(0.83 0.17 82)',
        ink: 'oklch(0.13 0.03 275)',
  			'purple-500': '#9b5de5',
  			'indigo-400': '#7f5bd1',
  			'purple-300': '#d4a1ed',
  			'violet-200': '#e4c1f9',
  			'purple-400': '#b982e0',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			fontFamily: {
          display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
        boxShadow: {
          glow: '0 0 60px -12px color-mix(in oklab, oklch(0.86 0.19 165) 45%, transparent)',
        },
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
  		keyframes: {
  			aurora: {
  				from: {
  					backgroundPosition: '50% 50%, 50% 50%'
  				},
  				to: {
  					backgroundPosition: '350% 50%, 350% 50%'
  				}
          'marquee-x': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-50%)' },
          },
            'float-y': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-14px)' },
          },
  			}
  		},
      animation: {
        marquee: 'marquee-x 28s linear infinite',
        float: 'float-y 6s ease-in-out infinite',
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [addVariablesForColors, require("tailwindcss-animate")],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
