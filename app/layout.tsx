import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost, Geist_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Maria Lucia | Confeitaria Artesanal Premium',
  description:
    'Bolos, doces e sobremesas artesanais feitos com ingredientes selecionados e muito carinho. Encomende bolos de pote, recheados, personalizados, pão de mel e docinhos pelo WhatsApp.',
  keywords: [
    'confeitaria artesanal',
    'bolos personalizados',
    'bolo de pote',
    'pão de mel',
    'docinhos para festa',
    'Maria Lucia',
    'encomenda de bolos',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Maria Lucia | Confeitaria Artesanal Premium',
    description:
      'Transformando momentos especiais em sabores inesquecíveis. Bolos e doces artesanais sob encomenda.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${jost.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
