import './globals.css'
import Navigation from '@/components/Navigation'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import ProgressProviders from '@/components/ProgressProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E1K Urakointi Oy',
  description: 'E1K Urakointi Oy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <ProgressProviders>
          {children}
        </ProgressProviders>
        <Footer />
      </body>
    </html>
  )
}
