import { useState } from 'react'
import './App.css'
import links from './assets/navlinks.json'
import Link from '../components/Link'

function App() {
  // console.log(links)
  const [isOpen,setIsOpen] = useState(false)
  return (
    <>
      <nav className='w-screen mb-4 h-12 px-4 rounded-sm flex justify-between items-center'>
        <p className='text-3xl font-bold pb-2 text-start'>snap</p>
        <span className="sm:hidden inline-block w-8 h-8 cursor-pointer bg-[url('/icon-menu.svg')] bg-no-repeat bg-center" onClick={() => setIsOpen(true)}></span>
      </nav>

      {/* Mobile side menu */}
      {/* overlay */}
      {isOpen && <div className="w-screen h-screen z-40 bg-black/30 inset-0 absolute">
        {/* side menu canvas */}
          <div className="absolute w-3/4 min-w-72 h-screen right-0 bg-white z-50 ">
            {/* Cross icon */}
            <div className="w-full h-10 mt-4 mb-6 relative" onClick={() => setIsOpen(false)}><span className="inline-block mr-3 w-8 h-full bg-[url('/icon-close-menu.svg')] bg-no-repeat bg-center absolute right-0"></span></div>
            {/* Links */}
            <div className="p-4">
              <Link links={links}></Link>
            </div>
          </div>
      </div>}

      {/* Hero image */}
      <div className='flex w-screen   flex-col justify-center items-center sm:flex-row-reverse' >
        <div className='w-screen '>
          <div className="w-screen sm:hidden mb-8"><img src="/image-hero-mobile.png" className='h-80 w-full'/></div>
          <div className="w-screen hidden sm:block mb-8"><img src="/image-hero-desktop.png" className='h-80 max-h-full '/></div>
        </div>
        <div className='sm:w-1/2'>
          <div className=" w-fit mx-auto mb-4"><p className='text-4xl font-bold'>Make remote work</p></div>
          <div className="mb-6 flex flex-col items-center text-gray-600 text-[1.0625rem] font-semibold"><p>Get your team in sync, no matter your</p><p className='tracking-wide'>location. Streamline processes, create</p> <p>team rituals, and watch productivity soar.</p></div>
          <div className="w-fit mx-auto mb-12"><button className='border border-solid rounded-2xl bg-black text-white border-black px-6 py-2 text-lg font-bold'>Learn More</button></div>
      <ul className="w-full flex justify-around items-center">
        <li><a href="#" className=""><img src="/client-databiz.svg" className='w-[4.5rem]'/></a></li>
        <li><a href="#" className=""><img src="/client-audiophile.svg" className='w-[4.5rem]'/></a></li>
        <li><a href="#" className=""><img src="/client-meet.svg" className='w-[4.5rem]'/></a></li>
        <li><a href="#" className=""><img src="/client-maker.svg" className='w-[4.5rem]'/></a></li>
      </ul>
        </div>
      </div>

      {/* Links */}
    </>
  )
}

export default App
