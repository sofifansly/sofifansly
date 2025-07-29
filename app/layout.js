import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import InstagramBypass from './components/InstagramBypass'
import AgeConfirmationProvider from './components/AgeConfirmationProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sofi Best Fansly Creator | Exclusive Content  💗',
  description: 'Join Sofi, the best Fansly creator sharing exclusive content & cute moments. Experience my special corner made just for you!',
  manifest: '/manifest.json',
  metadataBase: new URL('https://www.sofi-fans.com'),
  alternates: {
    canonical: '/',
  },
  keywords: 'sofi fansly, best fansly, sofi best fansly, fansly creator, premium fansly content, exclusive fansly access, cute fansly creator',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    },
  },
  openGraph: {
    title: 'Sofi Best Fansly Creator | Cute Moments & Exclusive Content',
    description: 'Join Sofi, the cutest Fansly creator sharing special moments and exclusive content. Experience my cute corner where I open up just for you!',
    type: 'website',
    url: '/',
    siteName: 'Sofi - Best Fansly Creator',
    locale: 'en_US',
    images: [
      {
        url: '/images/sofiafansly.webp',
        width: 1200,
        height: 630,
        alt: 'Sofi - Best Fansly Creator'
      }
    ],
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ec4899' // Couleur rose pour correspondre au thème Fansly
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Sofi Fansly',
      item: 'https://www.sofi-fans.com',
    },
  ],
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sofi',
  description: 'Best Fansly creator sharing cute moments and exclusive content in her special corner',
  url: 'https://www.sofi-fans.com',
  image: 'https://www.sofi-fans.com/images/sofiafansly.webp',
  sameAs: ['https://fansly.com']
}

const offerJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Offer',
  name: 'Premium Sofi Fansly Content',
  description: 'Join Sofi\'s exclusive Fansly content - Special access to my cute corner',
  price: '3.00',
  priceCurrency: 'USD',
  availability: 'https://schema.org/LimitedAvailability',
  validFrom: '2025-07-28',
  validThrough: '2025-07-29',
  url: 'https://www.sofi-fans.com'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        
        {/* Classic Favicons */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon.png" />
        
        {/* Modern Favicon */}
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="mask-icon" href="/icon.svg" color="#3b82f6" />
        
        {/* Web App */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Sofi - Best Fansly Creator" />
      </head>
      <body className={inter.className}>
        <InstagramBypass />
        <AgeConfirmationProvider />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow relative pt-16">
            {children}
          </main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </body>
    </html>
  )
}

