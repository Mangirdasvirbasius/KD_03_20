import { useState } from 'react'
import './App.css'
import Dropdown from './dropdown'
import Footer from './assets/components/Footer'
import Hero from './assets/components/Hero'
import Navbar from './assets/components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Hero/>


   <h1 className='text-3xl'>Hello World</h1>
   <Dropdown title='Title' content='Labas rytas' />
   <Dropdown title='Title_2' content='Labas rytas' />
   <Dropdown title='Title_3' content='Labas rytas' />
   <Dropdown title='Title_4' content='Labas rytas' />
   <Dropdown title='Title_5' content='Labas rytas' />
  




<Footer />
   </>
  )
}

export default App
