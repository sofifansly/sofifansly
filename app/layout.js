import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import InstagramBypass from './components/InstagramBypass'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Best Blonde OnlyFans Creator | Premium Content❤️',
  description: 'Join Diana, the best blonde OnlyFans creator offering premium content, personal interactions & exclusive access. Get 70% OFF today for a limited time!',
  manifest: '/manifest.json',
  metadataBase: new URL('https://www.onlyfans-blonde.com'),
  alternates: {
    canonical: '/',
  },
  keywords: 'blonde onlyfans, best blonde onlyfans, blonde onlyfans creator, premium blonde content, exclusive onlyfans access, diana onlyfans',
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
    title: 'Best Blonde OnlyFans Creator | Premium Content & Exclusive Access',
    description: 'Join Diana, the best blonde OnlyFans creator offering premium content, personal interactions & exclusive access. Get 70% OFF today!',
    type: 'website',
    url: '/',
    siteName: 'Diana - Blonde OnlyFans',
    locale: 'en_US',
    images: [
      {
        url: '/images/blonde-onlyfans.webp',
        width: 1200,
        height: 630,
        alt: 'Diana - Best Blonde OnlyFans Creator'
      }
    ],
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6'
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Blonde OnlyFans',
      item: 'https://www.onlyfans-blonde.com',
    },
  ],
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Diana',
  description: 'Best blonde OnlyFans creator offering premium content and exclusive access',
  url: 'https://www.onlyfans-blonde.com',
  image: 'https://www.onlyfans-blonde.com/images/1.jpeg',
  sameAs: ['https://onlyfans.com']
}

const offerJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Offer',
  name: 'Premium Blonde OnlyFans Content',
  description: '70% OFF Diana\'s exclusive blonde OnlyFans content - Limited time offer',
  price: '3.00',
  priceCurrency: 'USD',
  availability: 'https://schema.org/LimitedAvailability',
  validFrom: '2025-07-24',
  validThrough: '2025-07-25',
  url: 'https://www.onlyfans-blonde.com'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        
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
        <meta name="apple-mobile-web-app-title" content="Diana - Blonde OnlyFans" />
      </head>
      <body className={inter.className}>
        <InstagramBypass />
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

