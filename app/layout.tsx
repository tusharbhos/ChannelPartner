import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ChannelPartner.Network - Neutral Project Showcase Network',
  description: 'A privacy-first presentation network for real estate Channel Partners and Developers. Showcase ConectR-powered projects without sharing lead details.',
  keywords: 'real estate, channel partners, developers, property presentation, lead privacy, ConectR',
  authors: [{ name: 'ChannelPartner.Network' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'ChannelPartner.Network - Neutral Project Showcase Network',
    description: 'Showcase ConectR-powered projects without sharing lead details',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}