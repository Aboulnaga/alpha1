import React from "react"
import Link from "next/link"

type userType = {
  id: number
  firstname: string
  lastname: string
  login: {
    username: string
    password: string
  }
}

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.org/users")
  const users = await res.json()

  const user = () => {
    return users.map((user: userType) => {
      return (
        <div key={user.id} className="user">
          <div className="user-id">{user.id}</div>
          <div className="user-name">{user.login.username}</div>
          <Link href={`/users/${user.id}`}>more ...</Link>
        </div>
      )
    })
  }

  return (
    <>
      <div className="users">{user()}</div>
    </>
  )
}
