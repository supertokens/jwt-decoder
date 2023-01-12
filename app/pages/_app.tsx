import React from "react"
import { Roboto } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Roboto({weight: "400"})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}