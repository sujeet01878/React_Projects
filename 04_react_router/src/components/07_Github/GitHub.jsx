import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()        // useLoaderData hook is used 
     
    //  const [data, setData] = useState([])
    //  useEffect(() => {
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    //  }, [])

  return (
    <div className="text-center m-4 bg-green-600 text-white p-4 text-3xl">
      GitHub Followers: {data.followers}
      <img className='text-center' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default GitHub

export const gitHubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return response.json()
}
