import { Inter,Josefin_Sans } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const josefin = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Home Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} px-10`}>
        <Header />
        {children}
        </body>
    </html>
  )
}
