import React, { useState } from 'react'
import hero from '../Img/fkart.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import Cart from './Cart'

const Navbar = () => {
    const [inner, setInner] = useState('')
    const click = () => {
        setInner(!inner)
        // console.log(inner)
    }
    return (
        <>
            <div className='hidden sm:block'>
                <div className='bg-orange-400 w-full h-16 flex justify-between  items-center'>
                    {/* <div className=''> */}
                    <img src={hero} alt="" className='h-8 pl-2  lg:pl-24' />
                    {/* </div> */}
                    <div className=' relative  items-center flex'>
                        <span className=" text-indigo-500 pr-3 cursor-pointer text-xl absolute right-0"><AiOutlineSearch /></span>
                        <input type="" placeholder='Search for anything...' className=' pl-3 w-full  md:w-[300px] lg:w-[600px] h-10 outline-none  rounded ' />
                    </div>
                    <div>
                        <button className='border px-8 py-1 font-bold bg-white rounded text-orange-400'>Login</button>
                    </div>
                    <div className='flex'>
                        <div className='text-white '>
                            <p className='pr-12 font-bold pl-1'>Abhishek</p>
                        </div>
                        <div className='text-white text-xl pr-10 '>
                            <FaShoppingCart className='cursor-pointer' onClick={click} />
                        </div>
                    </div>
                </div>
                {inner === true ? <Cart className='bg-slate-100' /> : null}
            </div>
        </>
    )
}

export default Navbar;