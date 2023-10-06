// import carDriverCover from "../assets/car_driver_cover.jpg"
import carDriverCover from "../assets/car_driver_cover.jpg"
import aliAbbas from "../assets/aliAbbas.jpg"
import hadiElshwaykh from "../assets/hadiElshwaykh.jpg"
import muhmmedSalah from "../assets/muhmmedSalah.jpg"
import hassanElmour from "../assets/hassanElmour.jpg"
import ziadNagy from "../assets/ziadNagy.jpg"
import muhmmedMousa from "../assets/muhmmedMousa.jpg"
import ahmedKamal from "../assets/ahmedKamal.jpg"
import rentCarCover from "../assets/rentCarCover.jpg"
import mercedesE200Cabriolet_1 from "../assets/mercedesE200Cabriolet_1.jpeg"
import mercedesE200Cabriolet_2 from "../assets/mercedesE200Cabriolet_2.jpeg"
import mercedesE200Cabriolet_3 from "../assets/mercedesE200Cabriolet_3.jpeg"
import mercedesE200Cabriolet_4 from "../assets/mercedesE200Cabriolet_4.jpeg"
import mercedesE200Cabriolet_5 from "../assets/mercedesE200Cabriolet_5.jpeg"
import bmwX2Hybrid_1 from "../assets/bmwX2Hybrid_1.jpeg"
import bmwX2Hybrid_2 from "../assets/bmwX2Hybrid_2.jpeg"
import bmwX2Hybrid_3 from "../assets/bmwX2Hybrid_3.jpeg"
import bmwX2Hybrid_4 from "../assets/bmwX2Hybrid_4.jpeg"
import bmwX2Hybrid_5 from "../assets/bmwX2Hybrid_5.jpeg"
import kiaCerato_1 from "../assets/kiaCerato_1.jpeg"
import kiaCerato_2 from "../assets/kiaCerato_2.jpeg"
import kiaCerato_3 from "../assets/kiaCerato_3.jpeg"
import kiaCerato_4 from "../assets/kiaCerato_4.jpeg"
import kiaCerato_5 from "../assets/kiaCerato_5.jpeg"
import audiQ3Sline_1 from "../assets/audiQ3Sline_1.jpeg"
import audiQ3Sline_2 from "../assets/audiQ3Sline_2.jpeg"
import audiQ3Sline_3 from "../assets/audiQ3Sline_3.jpeg"
import audiQ3Sline_4 from "../assets/audiQ3Sline_4.jpeg"
import audiQ3Sline_5 from "../assets/audiQ3Sline_5.jpeg"
import rangeRoverVelarHSE_1 from "../assets/rangeRoverVelarHSE_1.jpeg"
import rangeRoverVelarHSE_2 from "../assets/rangeRoverVelarHSE_2.jpeg"
import rangeRoverVelarHSE_3 from "../assets/rangeRoverVelarHSE_3.jpeg"
import rangeRoverVelarHSE_4 from "../assets/rangeRoverVelarHSE_4.jpeg"
import rangeRoverVelarHSE_5 from "../assets/rangeRoverVelarHSE_5.jpeg"
import caravanCover from "../assets/caravanCover.jpg"
import alphaGoCamp_1 from "../assets/alphaGoCamp_1.webp"
import alphaGoCamp_2 from "../assets/alphaGoCamp_2.webp"
import alphaGoCamp_3 from "../assets/alphaGoCamp_3.webp"
import alphaGoCamp3_1 from "../assets/alphaGoCamp3_1.webp"
import alphaGoCamp3_2 from "../assets/alphaGoCamp3_2.webp"
import alphaGoCamp3_3 from "../assets/alphaGoCamp3_3.webp"
import alphaGoCamp4_1 from "../assets/alphaGoCamp4_1.webp"
import alphaGoCamp4_2 from "../assets/alphaGoCamp4_2.webp"
import alphaGoCamp4_3 from "../assets/alphaGoCamp4_3.webp"
import alphaGoCamp5_1 from "../assets/alphaGoCamp5_1.webp"
import alphaGoCamp5_2 from "../assets/alphaGoCamp5_2.webp"
import alphaGoCamp5_3 from "../assets/alphaGoCamp5_3.webp"
import alphaGoCamp6_1 from "../assets/alphaGoCamp6_1.webp"
import alphaGoCamp6_2 from "../assets/alphaGoCamp6_2.webp"
import alphaGoCamp6_3 from "../assets/alphaGoCamp6_3.webp"
import picUpCover from "../assets/picUpCover.jpg"
import FordF150_1 from "../assets/FordF150_1.jpg"
import FordF150_2 from "../assets/FordF150_2.jpg"
import FordF150_3 from "../assets/FordF150_3.jpg"
import Silverado2500_1 from "../assets/Silverado2500_1.jpg"
import Silverado2500_2 from "../assets/Silverado2500_2.jpg"
import Silverado2500_3 from "../assets/Silverado2500_3.jpeg"
import FordMaverick_1 from "../assets/FordMaverick_1.png"
import FordMaverick_2 from "../assets/FordMaverick_2.png"
import FordEv_1 from "../assets/FordEv_1.jpg"
import FordEv_2 from "../assets/FordEv_2.jpg"
import FordEv_3 from "../assets/FordEv_3.jpg"
import CarAccessoriesCover from "../assets/CarAccessoriesCover.jpg"
import SharkFinRoofAntenna from "../assets/SharkFinRoofAntenna.jpg"
import EngineMountLowerVolvo from "../assets/EngineMountLowerVolvo.jpg"
import StainlessSteelExhaust from "../assets/StainlessSteelExhaust.jpg"
import boatTrailer from "../assets/boatTrailer.jpg"
import bikeRack from "../assets/bikeRack.webp"
import campingKit from "../assets/campingKit.jpg"

const CarServicesDataBase = [
  // Service 1  =======> Car Driver
  {
    serviceID: 1,
    serviceTitle: "Hire a Driver",
    serviceDesc: `we have best drivers
    in Alpha, We have drivers for all types of vehicles. Our drivers are experienced in handling all kinds of vehicle. They have the best driving skills. You can hire them for a long time to drive your vehicle in the`,
    serviceCover: carDriverCover,
    rate: 7,
    dataTable: [
      // Driver 1
      {
        serviceID: 1,
        driverID: "011",
        driverName: "Ali Abbas",
        driverAge: 1988,
        driverExp: 7,
        driverSkills: "All Cars",
        driverCoast: 350,
        driverImage: aliAbbas,
      },
      // End Driver 1
      // Driver 2
      {
        serviceID: 1,
        driverID: "012",
        driverName: "Hadi Elshwaykh",
        driverAge: 1993,
        driverExp: 3,
        driverSkills: "sedan cars",
        driverCoast: 150,
        driverImage: hadiElshwaykh,
      },
      // End Driver 2
      // Driver 3
      {
        serviceID: 1,
        driverID: "013",
        driverName: "Muhmmed Salah",
        driverAge: 1995,
        driverExp: 1,
        driverSkills: "pickup & Caravan Trucks",
        driverCoast: 150,
        driverImage: muhmmedSalah,
      },
      // End Driver 3
      // Driver 4
      {
        serviceID: 1,
        driverID: "014",
        driverName: "Hassan El-Mour",
        driverAge: 1997,
        driverExp: 4,
        driverSkills: "Sedan Cars",
        driverCoast: 250,
        driverImage: hassanElmour,
      },
      // End Driver 4
      // Driver 5
      {
        serviceID: 1,
        driverID: "015",
        driverName: "Ziad Nagy",
        driverAge: 2000,
        driverExp: 1,
        driverSkills: "Sedan Cars",
        driverCoast: 100,
        driverImage: ziadNagy,
      },
      // End Driver 5
      // Driver 6
      {
        serviceID: 1,
        driverID: "016",
        driverName: "Muhmmed Mousa",
        driverAge: 1990,
        driverExp: 6,
        driverSkills: "All kind of cars",
        driverCoast: 275,
        driverImage: muhmmedMousa,
      },
      // End Driver 6
      // Driver 7
      {
        serviceID: 1,
        driverID: "017",
        driverName: "Ahmed Kamal",
        driverAge: 1980,
        driverExp: 6,
        driverSkills: "Trucks",
        driverCoast: 250,
        driverImage: ahmedKamal,
      },
      // End Driver 7
    ],
  },
  // End Service 1  =======> Car Driver

  //  Service 2  =======> Rent a Car Without Driver
  {
    serviceID: 2,
    serviceTitle: "Rent a Car",
    serviceDesc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia et earum
    non corporis incidunt! Ullam quam voluptatum, hic, ut ad iusto
    distinctio neque fuga architecto corrupti saepe eius pariatur,
    reprehenderit alias officia. Magni distinctio optio rem amet laborum
    nihil error possimus nobis deserunt quis esse ipsum mollitia culpa
    velit.`,
    serviceCover: rentCarCover,
    rate: 7,
    dataTable: [
      // car 1
      {
        serviceID: 2,
        carID: "021",
        carModel: "MERCEDES E200 CABRIOLET",
        carYear: 2022,
        carGearbox: "Auto",
        carFuel: 95,
        carDistance: 100000,
        carDoorsNu: 2,
        carCoast: 300,
        carPassengers: 4,
        carStock: 3,
        carImgs: [
          mercedesE200Cabriolet_1,
          mercedesE200Cabriolet_2,
          mercedesE200Cabriolet_3,
          mercedesE200Cabriolet_4,
          mercedesE200Cabriolet_5,
        ],
      },
      // end car 1

      // car 2
      {
        serviceID: 2,
        carID: "022",
        carModel: "BMW X2 Hybrid",
        carYear: 2023,
        carGearbox: "Auto",
        carFuel: 95,
        carDistance: 90000,
        carDoorsNu: 4,
        carCoast: 350,
        carPassengers: 4,
        carStock: 2,
        carImgs: [
          bmwX2Hybrid_1,
          bmwX2Hybrid_2,
          bmwX2Hybrid_3,
          bmwX2Hybrid_4,
          bmwX2Hybrid_5,
        ],
      },
      // end car 2

      // car 3
      {
        serviceID: 2,
        carID: "023",
        carModel: "KIA Cerato",
        carYear: 2022,
        carGearbox: "Auto",
        carFuel: 92,
        carDistance: 250000,
        carDoorsNu: 4,
        carCoast: 70,
        carPassengers: 4,
        carStock: 5,
        carImgs: [
          kiaCerato_1,
          kiaCerato_2,
          kiaCerato_3,
          kiaCerato_4,
          kiaCerato_5,
        ],
      },
      // End Car 3

      // car 4
      {
        serviceID: 2,
        carID: "024",
        carModel: "Audi Q3 S-Line",
        carYear: 2016,
        carGearbox: "Auto",
        carFuel: 92,
        carDistance: 200000,
        carDoorsNu: 4,
        carCoast: 150,
        carPassengers: 4,
        carStock: 1,
        carImgs: [
          audiQ3Sline_1,
          audiQ3Sline_2,
          audiQ3Sline_3,
          audiQ3Sline_4,
          audiQ3Sline_5,
        ],
      },
      // End Car 4

      // car 5
      {
        serviceID: 2,
        carID: "025",
        carModel: "Range Rover Velar HSE mint condition",
        carYear: 2023,
        carGearbox: "Auto",
        carFuel: 92,
        carDistance: 35000,
        carDoorsNu: 4,
        carCoast: 400,
        carPassengers: 4,
        carStock: 1,
        carImgs: [
          rangeRoverVelarHSE_1,
          rangeRoverVelarHSE_2,
          rangeRoverVelarHSE_3,
          rangeRoverVelarHSE_4,
          rangeRoverVelarHSE_5,
        ],
      },
      // End Car 5
    ],
  },
  //  End Service 2  =======> Rent a Car Without Driver

  //  Service 3  =======> Rent Caravan
  {
    serviceID: 3,
    serviceTitle: "Rent Caravan",
    serviceDesc: `
    The length of all our models varies between 6 meters (19.5 ft) and 7.5 meters (24.5 ft) and only require a regular car license
    <br />
    Our Carvans come in these sizes in order to travel comfortably on most roads, which usually aren't very wide.
    `,
    serviceCover: caravanCover,
    rate: 7,
    dataTable: [
      //caravan 1
      {
        serviceID: 3,
        caravanID: "031",
        caravanCode: "Alpha Go Camp 1",
        caravanModel: "Ford Transit Chassis",
        caravanYear: 2022,
        caravanGearbox: "Auto",
        caravanLong: "6.97m",
        caravanPassengers: 6,
        caravanBeds: 6,
        caravRefrigerator: "140 litre",
        caravanCoast: 500,
        caravanStock: 1,
        caravanDesc: `6.97m long RV equipped with 6 beds.
4 are always ready: one double bed above the cockpit (loft), one bunk bed 
in the rear. Another double bed can be prepared converting one of the tables.
 The RV is equipped with an enclosed shower with glass doors, heated restroom 
 with hot water, a 140-litre refrigerator (large), cabin air conditioning, and
  outer tent. Ford Transit chassis with automatic transmission.`,
        caravanRecommended: `families with children, groups of friends.`,
        caravanImgs: [alphaGoCamp_1, alphaGoCamp_2, alphaGoCamp_3],
      },
      //end caravan 1

      //caravan 2
      {
        serviceID: 3,
        caravanID: "032",
        caravanCode: "Alpha Go Camp 2",
        caravanModel: "Ford Transit Chassis",
        caravanYear: 2023,
        caravanGearbox: "Auto",
        caravanLong: "6.90m",
        caravanPassengers: 6,
        caravanBeds: 6,
        caravRefrigerator: "150 litre",
        caravanCoast: 550,
        caravanStock: 1,
        caravanDesc: `4 are always ready: 1 double over the cockpit (attic) and a bunk bed in the rear. 3 more can be prepared if needed, a double bed and a single one that can be set up folding the two central tables. The RV is equipped with a closed shower with glass doors, hot water heating, a 150-liter refrigerator (large), cabin air conditioning. External tent.`,
        caravanImgs: [alphaGoCamp_1, alphaGoCamp_2, alphaGoCamp_3],
      },
      //end caravan 2

      //caravan 3
      {
        serviceID: 3,
        caravanID: "033",
        caravanCode: "Alpha Go Camp 3",
        caravanModel: "Ford Transit Chassis",
        caravanYear: 2021,
        caravanGearbox: "Manual",
        caravanLong: "6.70m",
        caravanPassengers: 7,
        caravanBeds: 7,
        caravRefrigerator: "140 litre",
        caravanCoast: 500,
        caravanStock: 1,
        caravanDesc: `6.90m long RV equipped with 6 beds.
4 are always ready: one double bed above the cockpit (loft), 
one double bed in the rear. A third double bed can be obtained 
converting the two tables. The RV is equipped with an enclosed shower with a glass door,
 a heated restroom with hot water, a 140-litre refrigerator (large), cabin air conditioning,
  and an outer tent. Ford Transit chassis with automatic transmission.`,
        caravanRecommended: `families with children, groups of friends.`,
        caravanImgs: [alphaGoCamp3_1, alphaGoCamp3_2, alphaGoCamp3_3],
      },
      //end caravan 3

      //caravan 4
      {
        serviceID: 3,
        caravanID: "034",
        caravanCode: "Alpha Go Camp 4",
        caravanModel: "Ford Transit Chassis",
        caravanYear: 2022,
        caravanGearbox: "Manual",
        caravanLong: "7.20m",
        caravanPassengers: 7,
        caravanBeds: 7,
        caravRefrigerator: "140 litre",
        caravanCoast: 500,
        caravanStock: 1,
        caravanDesc: `4 are always ready: 1 double over the cockpit (attic), a bunk bed in the rear. 3 more can be prepared, a double bed and a single one that can be set up folding the two central tables. The RV is equipped with a closed shower with glass doors, hot water heating, 150-liter fridge (large), cabin air conditioning. External tent.`,
        caravanRecommended: `families with children, groups of friends.`,
        caravanImgs: [alphaGoCamp4_1, alphaGoCamp4_2, alphaGoCamp4_3],
      },
      //end caravan 4

      //caravan 5
      {
        serviceID: 3,
        caravanID: "035",
        caravanCode: "Alpha Go Camp 5",
        caravanModel: "Ford Transit Chassis",
        caravanYear: 2019,
        caravanGearbox: "Manual",
        caravanLong: "6.99m",
        caravanPassengers: 4,
        caravanBeds: 4,
        caravRefrigerator: "140 litre",
        caravanCoast: 500,
        caravanStock: 1,
        caravanDesc: `6.99m long RV equipped with 4 beds. 4 are always ready: 1 double in the rear that can also be used as twin beds, 1 fold-down double bed in the central part. The RV is equipped with a closed shower with glass doors, hot water heating, 142-liter fridge (large), cabin air conditioning. Rear locker can accommodate a scooter.`,
        caravanRecommended: `families with children, groups of friends.`,
        caravanImgs: [alphaGoCamp5_1, alphaGoCamp5_2, alphaGoCamp5_3],
      },
      //end caravan 5

      //caravan 6
      {
        serviceID: 3,
        caravanID: "036",
        caravanCode: "Alpha Go Camp 6",
        caravanModel: "Ford Transit Chassis",
        caravanYear: 2018,
        caravanGearbox: "Manual",
        caravanLong: "7.37m",
        caravanPassengers: 7,
        caravanBeds: 7,
        caravRefrigerator: "150 litre",
        caravanCoast: 650,
        caravanStock: 1,
        caravanDesc: `7.37m long RV equipped with 7 beds.
4 are always ready: 1 double above the cockpit (attic), a bunk bed in the rear. 3 more can be prepared, a double bed and a single one that can be set up folding the two central tables. The RV is equipped with a closed shower with glass doors, hot water heating, 150-liter fridge (large), cabin air conditioning.`,
        caravanImgs: [alphaGoCamp6_1, alphaGoCamp6_2, alphaGoCamp6_3],
      },
      //end caravan 6
    ],
  },
  //  End Service 2  =======> Rent Caravan

  // Service 4  =======> Rent Pickup
  {
    serviceID: 4,
    serviceTitle: "Rent Picup",
    serviceDesc: `
     We only rent the best of the best trucks because we believe that quality
      is the key to project success. We’ve built our reputation on providing
       companies with half-ton pickups that are built tough. We want our 
       customers to be confident in their truck rentals.
     `,
    serviceCover: picUpCover,
    rate: 7,
    dataTable: [
      // pic up 1
      {
        serviceID: 4,
        pickUpID: "041",
        pickUpModel: "Ford F150",
        pickUpYear: 2022,
        pickUpGearbox: "Auto",
        pickUpFuel: "Gasoline",
        pickUpSeats: 4,
        pickUpMaxTowing: "9,950 LBS",
        pickUpMaxPayLoad: "1,260 LBS",
        pickUpCoast: 270,
        pickUpStock: 2,
        pickUpImgs: [FordF150_1, FordF150_2, FordF150_3],
      },
      // end pic up 1

      // pic up 2
      {
        serviceID: 4,
        pickUpID: "042",
        pickUpModel: "Chevrolet Silverado 2500",
        pickUpYear: 2021,
        pickUpGearbox: "Auto",
        pickUpFuel: "Gasoline",
        pickUpSeats: 4,
        pickUpMaxTowing: "14,550 LBS",
        pickUpMaxPayLoad: "2,370 LBS",
        pickUpCoast: 199,
        pickUpStock: 7,
        pickUpImgs: [Silverado2500_1, Silverado2500_2, Silverado2500_3],
      },
      // end pic up 2

      // pic up 3
      {
        serviceID: 4,
        pickUpID: "043",
        pickUpModel: "FORD MAVERICK",
        pickUpYear: 2019,
        pickUpGearbox: "Auto",
        pickUpFuel: "Gasoline",
        pickUpSeats: 4,
        pickUpMaxTowing: "2000 LBS",
        pickUpMaxPayLoad: "1,500 LBS",
        pickUpCoast: 168,
        pickUpStock: 7,
        pickUpImgs: [FordMaverick_1, FordMaverick_2],
      },
      // end pic up 3

      // pic up 4
      {
        serviceID: 4,
        pickUpID: "043",
        pickUpModel: "Ford EV",
        pickUpYear: 2020,
        pickUpGearbox: "Auto",
        pickUpFuel: "Gasoline",
        pickUpSeats: 4,
        pickUpMaxTowing: "2235 LBS",
        pickUpMaxPayLoad: "1,500 LBS",
        pickUpCoast: 190,
        pickUpStock: 1,
        pickUpImgs: [FordEv_1, FordEv_2, FordEv_3],
      },
      // end pic up 4
    ],
  },
  // end Service 4  =======> Rent Pickup

  // Service 5  =======> Rent acc
  {
    serviceID: 5,
    serviceTitle: "Rent Accesories",
    serviceDesc: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia et earum
    non corporis incidunt! Ullam quam voluptatum, hic, ut ad iusto
    distinctio neque fuga architecto corrupti saepe eius pariatur,
    reprehenderit alias officia. Magni distinctio optio rem amet laborum.
     `,
    serviceCover: CarAccessoriesCover,
    rate: 7,
    dataTable: [
      // Accesories 1
      {
        serviceID: 5,
        accessoryID: "051",
        accessoryName: "Shark Fin Roof Antenna",
        accessoryDesc: `For Decoration Purpose Only, No Reception Function.It is just an object your sticking at the top of your car. The size does not matter.`,
        accessoryCoast: 70,
        accessoryStock: 7,
        accessoryImg: SharkFinRoofAntenna,
      },
      // end Accesories 1

      // Accesories 2
      {
        serviceID: 5,
        accessoryID: "052",
        accessoryName: "Engine Mount Lower Volvo",
        accessoryDesc: `Lower Engine Mount Mounting For Volvo 850 C70 S60 S70 S80 V70 XC70 XC90`,
        accessoryCoast: 35,
        accessoryStock: 4,
        accessoryImg: EngineMountLowerVolvo,
      },
      // end Accesories 2

      // Accesories 3
      {
        serviceID: 5,
        accessoryID: "053",
        accessoryName: "Stainless Steel Exhaust",
        accessoryDesc: `9.5" Universal Stainless Steel Exhaust Twin Tip Land Range Sport 2005-2016`,
        accessoryCoast: 29,
        accessoryStock: 5,
        accessoryImg: StainlessSteelExhaust,
      },
      // end Accesories 3

      // Accesories 4
      {
        serviceID: 5,
        accessoryID: "054",
        accessoryName: "Boat Trailer",
        accessoryDesc: `used for towing a boat on land`,
        accessoryCoast: 88,
        accessoryStock: 10,
        accessoryImg: boatTrailer,
      },
      // end Accesories 4

      // Accesories 5
      {
        serviceID: 5,
        accessoryID: "055",
        accessoryName: "Bike Rack",
        accessoryDesc: `used for holding bikes on cars`,
        accessoryCoast: 100,
        accessoryStock: 8,
        accessoryImg: bikeRack,
      },
      // end Accesories 5

      // Accesories 6
      {
        serviceID: 5,
        accessoryID: "056",
        accessoryName: "Camping Kit",
        accessoryDesc: `contains all the necessary equipment for camping`,
        accessoryCoast: 150,
        accessoryStock: 13,
        accessoryImg: campingKit,
      },
      // end Accesories 6
    ],
  },
  // end Service 5  =======> Rent acc
]

export default CarServicesDataBase
