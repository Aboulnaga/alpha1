import React from "react"
import Image from "next/image"

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

{
  /**

driverAge: 1988
driverCoast: 350
driverExp: 7
driverID: "011"
driverImage: {src: '/_next/static/media/aliAbbas.5e274287.jpg', height: 427, width: 640, blurDataURL: '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaliAbbas.5e274287.jpg&w=8&q=70', blurWidth: 8, …}
driverName: "Ali Abbas"
driverSkills: "All Cars"
serviceID: 1

*/
}

export default function HireDriver({ drivers }: { drivers: driverType }) {
  // console.log(drivers)
  const driver = drivers.map(driver => {
    const {
      driverAge,
      driverCoast,
      driverExp,
      driverID,
      driverImage,
      driverName,
      driverSkills,
      serviceID,
    } = driver

    return (
      <div key={driverID} className="driver-profile">
        <div className="driver-img">
          <Image
            priority={true}
            height={driverImage.height}
            width={driverImage.width}
            src={driverImage.src}
            alt={driverName}
          />
        </div>
        <div className="driver-info">
          <h3>{driverName}</h3>
          <p>{driverSkills}</p>
          <p>{driverAge} Years</p>
          <p>{driverCoast} $</p>
          <p>{driverExp} Years</p>
        </div>
      </div>
    )
  })
  return <div className="drivers">{driver}</div>
}

{
  /* 

 const driver = drivers.map((driver: driverType[0]) => {
    const {
      driverAge,
      driverCoast,
      driverExp,
      driverID,
      driverImage,
      driverName,
      driverSkills,
      serviceID,
    } = driver

    console.log(driverImage)
    return (
      <div key={driverID} className="driver-profile">
        <div className="driver-img">
          <Image
            priority={true}
            height={driverImage.height}
            width={driverImage.width}
            src={driverImage.src}
            alt={driverName}
          />
        </div>
        <div className="driver-info">
          <h3>{driverName}</h3>
          <p>{driverSkills}</p>
          <p>{driverAge} Years</p>
          <p>{driverCoast} $</p>
          <p>{driverExp} Years</p>
        </div>
      </div>
    )
  })



*/
}
