"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathName = usePathname()
  const usrls = [
    { url: "/", page: "Home" },
    { url: "/about", page: "About" },
    { url: "/work", page: "Work" },
    { url: "/services", page: "Services" },
    { url: "/users", page: "Users" },
  ]

  const mapUrls = usrls.map(pageUrl => {
    const { url, page } = pageUrl
    return (
      <li key={page}>
        <Link className={pathName === url ? "active" : ""} href={url}>
          {page}
        </Link>
      </li>
    )
  })
  return (
    <div className="header-container">
      <header>
        <div className="logo">
          <h1>
            <Link href={"/"}>Logo</Link>
          </h1>
        </div>

        <nav>
          <ul>{mapUrls}</ul>
        </nav>
      </header>
    </div>
  )
}
