import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

console.log(puppyList)


function App() {
  const [puppies, setPuppies] = useState(puppyList)

  return (
    <>
      <div>
        {puppies.map((puppy) => {
            return <p>{puppy.name}</p>
          })
        }
      </div>
    </>
  )
}

export default App
