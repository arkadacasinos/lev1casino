import type { Metadata, Viewport } from 'next'
import { Manrope, Unbounded } from 'next/font/google'
import './globals.css'

const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  weight: ['600', '700'],
  variable: '--font-unbounded',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const SITE_URL = 'https://lev1casino.vercel.app'
const PAGE_TITLE =
  'Лев Казино официальный сайт: играть онлайн в Lev Casino, бонус и зеркало сегодня'
const PAGE_DESCRIPTION =
  'Лев Казино — официальный сайт онлайн-казино: регистрация за минуту, бонусы новичкам, быстрые выплаты и зеркало Lev Casino. Слоты, рулетка и live-столы с телефона, поддержка 24/7, вход для игроков 18+.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  applicationName: 'Лев Казино',
  authors: [{ name: 'Лев Казино' }],
  category: 'games',
  keywords: [
    'lev casino',
    'lev casino зеркало',
    'лев казино',
    'играть казино лев',
    'лев казино бонус',
    'лев казино зеркало',
    'лев казино онлайн',
    'лев казино официальный',
    'лев казино официальный сайт',
    'лев казино регистрация',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: 'Лев Казино',
    locale: 'ru_RU',
    images: [
      {
        url: '/images/lc9x4-emblem.png',
        width: 1408,
        height: 768,
        alt: 'Лев Казино — золотая эмблема льва на зелёном сукне',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/images/lc9x4-emblem.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0e3f2e',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${manrope.variable} lc9x4-root`}>
      <head>
        <meta name="yandex-verification" content="df2aaa6bbe3b5a6d" />
        {/* Блок для дополнительных пользовательских тегов: вставляйте сюда свои meta, link и коды верификации */}
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="lc9x4-shell">{children}</body>
    </html>
  )
}
