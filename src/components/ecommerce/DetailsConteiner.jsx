import React, { useEffect, useState } from 'react'
import { requestId } from './helper'
import Details from './Details'

function DetailsConteiner( {id} ) {

  const [item, setItem] = useState(null)
  useEffect(() => {
    requestId(id)
      .then((res) => {
        setItem(res)
      })
  }, [])
  return (
    <>
    {item && <Details item={item} />}
    </>
  )
}

export default DetailsConteiner