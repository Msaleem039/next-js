
import Image from 'next/image'
const Home = () => {
  return (
    <div className='hero-section'>
    <div className='container'>
    <div className='row d-flex'>
    <div className='col-md-6'>
    <h1>Responsive left align with hero with image </h1>
    <p> Quickle design and customize Responsive mobile positioning with responsive 
     with responsive responsive responsive positioning with responsive responsive positioning  
 just like responsive responsive positioning with responsive responsive positioning
    </p>
    <button className='btn btn-danger mx-2'>primary</button>
    <button className='btn btn-outline-secoundary mx-2'>Secondary</button>

    </div>
    <div className='col-md-6'>
    <div className=''>
    <Image src="/images/img.webp" alt="img" width={476} height={300}
    ></Image>
    </div>
    </div>
    </div>
      </div>
    </div>
  )
}

export default Home
