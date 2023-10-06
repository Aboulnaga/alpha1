import React from "react"

type driverType = {
  driverAge: number
  driverCoast: number
  driverExp: number
  driverID: string
  driverImage: { src: string }
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
    return (
      <div key={driverID} className="driver-profile">
        <div className="driver-img">
          <img src={driverImage.src} alt={driverName} />
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
