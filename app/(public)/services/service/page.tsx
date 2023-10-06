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

type driverType = {
  driverAge: number
  driverCoast: number
  driverExp: number
  driverID: string
  driverImage: {
    src: string
    height: number
    width: number
    blurDataURL: string
    blurWidth: number
  }
  driverName: string
  driverSkills: string
  serviceID: number
}[]

type CarsType = {
  carCoast: number
  carDistance: number
  carDoorsNu: number
  carFuel: number
  carGearbox: string
  carID: string
  carImgs: { src: string; height: number; width: number }[]
  carModel: string
  carPassengers: number
  carStock: number
  carYear: number
  serviceID: number
}[]

export default function page({ searchParams: { id } }: pageProps) {
  const idIndex = DB.findIndex(service => service.serviceID == id)

  const checkIndex = () => {
    if (idIndex == -1) {
      return notFound()
    }
  }

  checkIndex()

  const driversTable: driverType = DB[id - 0].dataTable as driverType
  const rentCarsTable: CarsType = DB[id - 1].dataTable as CarsType
  // console.log(serviceTable)

  return (
    <>
      {id - 1 == 0 ? <HireDriver drivers={driversTable} /> : null}
      {id - 1 == 1 ? <RentCAr cars={rentCarsTable} /> : null}

      <h1>{id}</h1>
    </>
  )
}
