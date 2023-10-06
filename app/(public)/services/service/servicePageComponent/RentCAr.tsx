import React from "react"
import "./RentCar.scss"
type CarsType = {
  carCoast: number
  carDistance: number
  carDoorsNu: number
  carFuel: number
  carGearbox: string
  carID: string
  carImgs: { src: string }[]
  carModel: string
  carPassengers: number
  carStock: number
  carYear: number
  serviceID: number
}[]

{
  /**
carCoast
: 
300
carDistance
: 
100000
carDoorsNu
: 
2
carFuel
: 
95
carGearbox
: 
"Auto"
carID
: 
"021"
carImgs
: 
(5) [{…}, {…}, {…}, {…}, {…}]
carModel
: 
"MERCEDES E200 CABRIOLET"
carPassengers
: 
4
carStock
: 
3
carYear
: 
2022
serviceID
: 
2

*/
}

export default function RentCAr({ cars }: { cars: CarsType }) {
  const car = cars.map((car: CarsType[0]) => {
    const {
      carCoast,
      carDistance,
      carDoorsNu,
      carFuel,
      carGearbox,
      carID,
      carImgs,
      carModel,
      carPassengers,
      carStock,
      carYear,
      serviceID,
    } = car

    return (
      <div key={carID} className="rent-car-service">
        <div className="car-info">
          <h3>{carModel}</h3>
          <p>{carYear} Year</p>
          <p>{carStock} Stock</p>
          <p>{carGearbox}</p>
          <p> {carFuel} $ </p>
          <p>{carPassengers} Passengers</p>
          <p>{carDistance} KM</p>
          <p>{carCoast} $</p>
        </div>

        <div className="car-imgs">
          {carImgs.map((img, index) => {
            return <img src={img.src} alt={carModel} key={index} />
          })}
        </div>
      </div>
    )
  })
  return <div className="cars">{car}</div>
}
