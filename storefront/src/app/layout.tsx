import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
    
      <head>
<link rel="preconnect" href="https://cdn.houseofbitcoin.com" />
<link rel="preload" href="https://cdn.houseofbitcoin.com/fonts/Satoshi-Variable.woff2" as="font" type="font/woff2" crossorigin />
<link rel="stylesheet" href="https://cdn.houseofbitcoin.com/css/satoshi.css" />
        <script
          defer
          src="https://analytics.wearemetallic.com/script.js"
          data-website-id="7ef0ddd9-7765-4402-9871-43f4e9bb1a94"
        ></script>
      </head>
    
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
