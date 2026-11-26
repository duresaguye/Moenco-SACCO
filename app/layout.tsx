import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { SiteChrome } from '@/components/site-chrome'
import './globals.css'

export const metadata: Metadata = {
  title: 'Moenco SACCO | Save Together. Grow Together.',
  description: 'Build your financial future with Moenco SACCO, the member-owned savings and credit cooperative for Moenco employees in Ethiopia.',
  openGraph: {
    title: 'Moenco SACCO | Save Together. Grow Together.',
    description: 'A member-owned savings and credit cooperative supporting the financial wellbeing of Moenco employees.',
    type: 'website',
    locale: 'en_ET',
    images: ['/moenco-hero.png'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f7f2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteChrome>{children}</SiteChrome>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
