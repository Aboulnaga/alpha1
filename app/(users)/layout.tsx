import Link from "next/link"
import React from "react"

type props = {
  children: React.ReactNode
}
export default function layout({ children }: props) {
  return (
    <>
      <aside>
        <ul>
          <li>
            {" "}
            <Link href="/">Back to home</Link>
          </li>
          <li>
            {" "}
            <Link href="/users">Users Page</Link>
          </li>
        </ul>
      </aside>
      <main>{children}</main>
    </>
  )
}
