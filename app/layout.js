import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gabby Epstein OnlyFans - you won\'t believe it ❤️',
  description: 'Get FREE Access to Gabby Epstein\'s Premium OnlyFans! Exclusive content, daily updates & VIP experience. Limited time offer! 🔥',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent'
  },
  alternates: {
    canonical: 'https://www.gabby-epstein-onlyfans.com/'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    },
  },
  openGraph: {
    title: 'Gabby Epstein OnlyFans | Premium Content Creator',
    description: 'Get 30 Days FREE Access to Gabby Epstein\'s Premium OnlyFans! Enjoy exclusive photos, private messages & daily hot content. Limited time offer - Join Now! 🔥',
    type: 'website',
    url: 'https://www.gabby-epstein-onlyfans.com/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabby Epstein OnlyFans | Premium Content',
    description: 'Get 30 Days FREE Access to Gabby Epstein\'s Premium OnlyFans! Enjoy exclusive photos, private messages & daily hot content. Limited time offer - Join Now! 🔥',
  },
  themeColor: '#00AFF0',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  }
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.gabby-epstein-onlyfans.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Gabby Epstein OnlyFans',
      item: 'https://gabby-epstein-onlyfans.com/onlyfans',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00AFF0" />
        <meta name="msapplication-TileColor" content="#00AFF0" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Classic Favicons */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon.png" />
        
        {/* Modern Favicon */}
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="mask-icon" href="/icon.svg" color="#00AFF0" />
        
        {/* Web App */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Gabby Epstein OnlyFans" />
      </head>
      <body className={inter.className}>
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
