import React from "react"
import DB from "../../DataBase/DataBase"
import Link from "next/link"

export default function page() {
  const services = DB.map(service => {
    const {
      serviceTitle: title,
      serviceDesc: desc,
      serviceCover: cover,
    } = service

    const servicePageUrl = title.split(" ").join("-").toLowerCase()

    return (
      <div className="service">
        <div className="service-title">
          <Link href={`/services/${servicePageUrl}`}>{title}</Link>
        </div>
        <div className="service-desc">{desc}</div>
        <div className="service-cover">
          <img src={cover.src} alt={title} />
        </div>
      </div>
    )
  })
  return <div className="services">{services}</div>
}
