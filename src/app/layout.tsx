import './globals.css'
import { Header } from './header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'でめたら',
  description: 'githubの進捗でキャラを育成RPG',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <body className={inter.className}>{children}</body>
    </>
  )
}
