import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'REX Agent - The AI that codes while you sleep',
  description: 'Revolutionary autonomous software engineer that transforms development workflows, completing complex tasks end-to-end without human intervention.',
  keywords: ['AI', 'software engineering', 'autonomous coding', 'development', 'automation'],
  authors: [{ name: 'REX Agent' }],
  creator: 'REX Agent',
  publisher: 'REX Agent',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rex-agent.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'REX Agent - The AI that codes while you sleep',
    description: 'Revolutionary autonomous software engineer that transforms development workflows, completing complex tasks end-to-end without human intervention.',
    url: 'https://rex-agent.com',
    siteName: 'REX Agent',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'REX Agent - Autonomous Software Engineering',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REX Agent - The AI that codes while you sleep',
    description: 'Revolutionary autonomous software engineer that transforms development workflows, completing complex tasks end-to-end without human intervention.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
