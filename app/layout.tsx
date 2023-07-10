import './globals.css'
import { Figtree } from 'next/font/google'
import SideBar from "@/components/SideBar";
import SupabaseProvider from "@/providers/SupabaseProvider";

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music ! ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font .className}>
          <SupabaseProvider>
              <SideBar>
                {children}
              </SideBar>
          </SupabaseProvider>
      </body>
    </html>
  )
}
