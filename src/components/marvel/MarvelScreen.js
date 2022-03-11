import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
  return (
    <div>
      <h1 className=''>MarvelScreen</h1>
      <HeroList publisher={'Marvel Comics'}/>
    </div>
  )
}
