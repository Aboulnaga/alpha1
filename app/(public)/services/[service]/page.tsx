import React from "react"

type pageProps = {
  params: {
    service: string
  }
}

export default function page({ params }: pageProps) {
  return <div>{params.service}</div>
}
