import React from "react"

type props = {
  params: {
    userData: number
  }
}

type userType = {
  id: number
  firstname: string
  lastname: string
  email: string
  birthDate: string
  login: {
    uuid: string
    username: string
    password: string
    md5: string
    sha1: string
    registered: string
  }
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: { lat: string; lng: string }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export default async function UserData({ params: { userData: id } }: props) {
  //   console.log(id)
  const res = await fetch(`https://jsonplaceholder.org/users/${id}`)
  const user: userType = await res.json()

  return (
    <div className="user-table">
      <div className="row1">
        <div className="id">
          <p>ID</p>
          <p>{user.id}</p>
        </div>
      </div>

      <div className="row2">
        <div className="name">
          <p>Name</p>
          <p>
            {user.firstname} {user.lastname}
          </p>
        </div>
      </div>

      <div className="row3">
        <div className="username">
          <p>Username</p>
          <p>{user.login.username}</p>
        </div>
      </div>

      <div className="row4">
        <div className="email">
          <p>Email</p>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="row5">
        <div className="phone">
          <p>Phone</p>
          <p>{user.phone}</p>
        </div>
      </div>

      <div className="row6">
        <div className="website">
          <p>Website</p>
          <p>{user.website}</p>
        </div>
      </div>

      <div className="row7">
        <div className="address">
          <p>Address</p>
          <p>
            {user.address.street} {user.address.suite}
          </p>
        </div>
      </div>

      <div className="row8">
        <div className="city">
          <p>City</p>
          <p>{user.address.city}</p>
        </div>
      </div>

      <div className="row9">
        <div className="zipcode">
          <p>Zipcode</p>
          <p>{user.address.zipcode}</p>
        </div>
      </div>

      <div className="row10">
        <div className="lat">
          <p>Lat</p>
          <p>{user.address.geo.lat}</p>
        </div>
      </div>

      <div className="row11">
        <div className="lng">
          <p>Lng</p>
          <p>{user.address.geo.lng}</p>
        </div>
      </div>

      <div className="row12">
        <div className="company">
          <p>Company</p>
          <p>
            {user.company.name} {user.company.catchPhrase}
          </p>
        </div>
      </div>
    </div>
  )
}
