"use client"
import React from "react"
import DB from "@/app/DataBase/DataBase"
import { notFound } from "next/navigation"
import HireDriver from "./servicePageComponent/HireDriver"
import RentCAr from "./servicePageComponent/RentCAr"

type pageProps = {
  searchParams: {
    id: number
  }
}

export default function page({ searchParams: { id } }: pageProps) {
  const idIndex = DB.findIndex(service => service.serviceID == id)

  const checkIndex = () => {
    if (idIndex == -1) {
      return notFound()
    }
  }

  checkIndex()

  const serviceTable = DB[id - 1].dataTable
  // console.log(serviceTable)

  return (
    <>
      {id - 1 == 0 ? <HireDriver drivers={serviceTable} /> : null}
      {id - 1 == 1 ? <RentCAr cars={serviceTable} /> : null}

      <h1>{id}</h1>
    </>
  )
}
