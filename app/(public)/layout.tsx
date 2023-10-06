import type { Metadata } from "next"
import Header from "../components/Header"
import "../app.scss"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="app">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-body">{children}</div>
    </main>
  )
}
