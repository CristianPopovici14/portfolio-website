import { ReactNode } from "react";
import './globals.css'

function Navbar() {
  return (
      <nav className="flex h-16 w-full px-auto items-center">
          <ul className="justify-center w-full justify-between flex gap-4 text-white">
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/projects">Projects</a></li>
          </ul>
      </nav>
  )
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
      <html>
        <body>
          <div className="w-screen flex flex-col items-center justify-center bg-zinc-900 pb-5">
            <div className="flex flex-col items-center w-screen min-h-svh">
              <div className="max-w-[900px] w-[80%] " >
                <Navbar />
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
    )
}