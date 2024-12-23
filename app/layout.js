import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import "./globals.css"
import logo from "./ramp-ready-logo.png"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ramp Ready',
  description: 'Garment Rental Website',
}


export default function RootLayout({ children }) {
  return (
  <>
      <html lang="en">
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
        <body className={inter.className}>{children}</body>
    </html>
  </>  
  
  )
}
