import React, { useEffect, useState } from 'react'
import { oauth } from "../../../../sourceControl"

function UserCard({ userData }) {
  return (
    <div className="w-[80%] h-64 border-2 pt-5 border-white rounded-lg mx-auto">
      <img src={userData.avatar_url} alt={`${userData.login} avatar`} className="mx-auto rounded-full w-[70%] mb-2" />
      <h1 className="text-center text-2xl truncate text-white font-semibold">{userData.name}</h1>
      <p className="text-center text-zinc-400 text-lg truncate">{userData.login}</p>

      <div className="w-full flex h-auto justify-center">
        <button
          className="mt-3 mx-auto"
          onClick={() => {
            localStorage.removeItem("userData")

            window.location.reload()
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default function Account() {
  const [data, setData] = useState(undefined)

  useEffect(() => {
    const userData = localStorage.getItem("userData")

    if (!userData) return setData(
      <div className="nav-ele">
        <button id="sc-login" onClick={oauth}>Log In with GitHub</button>
      </div>
    )

    const u = JSON.parse(userData)

    setData(<UserCard userData={u} />)
  }, [])

  return (
    <div>
      <b>Account</b>
      {data}
    </div>
  )
}
