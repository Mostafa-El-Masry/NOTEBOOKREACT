import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NOTEBOOK',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>

<body>
        {children}
</body>
    </html>
  )
}
