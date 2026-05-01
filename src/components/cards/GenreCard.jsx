import React from 'react'

const GenreCard = ({genre}) => {
  return (
    <div className='border-2 border-solid border-black rounded-lg hover:bg-amber-200
    px-4 py-2 max-w-2xs my-2 mx-1'>{genre.name}</div>
  )
}

export default GenreCard