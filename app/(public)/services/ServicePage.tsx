import React from "react"
import Link from "next/link"

export default function ServicePage({
  children,
}: {
  children: React.ReactNode
}) {
  const url = children?.props.children.split(" ").join("-").toLowerCase()
  return (
    <>
      <Link href={`/services/${url}`}>{children}</Link>
    </>
  )
}
