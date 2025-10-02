/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'display': ['var(--font-space-grotesk)', 'Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        'clash': ['ClashDisplay', 'var(--font-space-grotesk)', 'Space Grotesk', 'system-ui', 'sans-serif'],
        'satoshi': ['Satoshi', 'var(--font-space-grotesk)', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f0f1a 0%, #111827 50%, #1a1f3c 100%)',
        'text-gradient': 'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #14b8a6 100%)',
        'button-primary': 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
        'button-secondary': 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)',
        'navbar-blur': 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)',
        'progress-gradient': 'linear-gradient(90deg, #a855f7 0%, #3b82f6 50%, #14b8a6 100%)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "gradient-pulse": {
          "0%, 100%": {
            opacity: "0.8"
          },
          "50%": {
            opacity: "1"
          }
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "progress-fill": {
          "0%": {
            width: "0%"
          },
          "100%": {
            width: "100%"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "gradient-pulse": "gradient-pulse 2s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "progress-fill": "progress-fill linear"
      },
      boxShadow: {
        'glow-violet': '0 0 20px rgba(168, 85, 247, 0.3)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-teal': '0 0 20px rgba(20, 184, 166, 0.3)',
        'navbar-glow': '0 8px 32px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
