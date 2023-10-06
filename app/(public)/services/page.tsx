import React from "react"
import DB from "../../DataBase/DataBase"
import Link from "next/link"
import Image from "next/image"

export default function page() {
  // const er = DB[3].dataTable[1].pickUpImgs.map(img => {
  //   return <img src={img.src} alt={img.src} />
  // })
  // console.log(er)
  const services = DB.map(service => {
    const {
      serviceID: id,
      serviceTitle: title,
      serviceDesc: desc,
      serviceCover: cover,
    } = service

    const servicePageUrl = title.split(" ").join("-").toLowerCase()

    return (
      <div key={servicePageUrl} className="service">
        <div className="service-title">
          <Link href={`/services/service?id=${id}&service=${servicePageUrl}`}>
            {title}
          </Link>
        </div>
        <div className="service-desc">{desc}</div>
        <div className="service-cover">
          <Image
            priority={true}
            height={cover.height}
            width={cover.width}
            src={cover.src}
            alt={title}
          />
        </div>
      </div>
    )
  })
  return <div className="services">{services}</div>
}
