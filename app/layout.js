import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import "./globals.css"
import logo from "./ramp-ready-logo.png"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ramp Ready',
  description: 'Garment Rental Website',
  openGraph: {
    images: './ramp-ready-logo.png',
  },
}


export default function RootLayout({ children }) {
  return (
  <>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  </>  
  
  )
}
