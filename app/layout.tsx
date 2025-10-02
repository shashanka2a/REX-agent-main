import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
