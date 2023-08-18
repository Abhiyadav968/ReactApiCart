import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'
import { MdShoppingBasket } from 'react-icons/md'
import { FaRupeeSign } from 'react-icons/fa'
import { dataContext } from '../Context/DataProvider';
import { BsHeart } from 'react-icons/bs'
import { BsHeartFill } from 'react-icons/bs'

const API = "https://api.pujakaitem.com/api/products"

const Home = () => {

    const { setValue, value } = useContext(dataContext)

    const [show, setShow] = useState([])
    const [heart, setheart] = useState()
    
    const getProducts = async (url) => {
        const res = await axios.get(url);
        const products = await res.data; //n use aw
        // console.log(products)    
        setShow(products)
        console.log(show)
    };
    useEffect(() => {
        getProducts(API);
    }, []);
    return (
        <>
            <div className='flex flex-wrap mt-6 justify-center gap-8'>
                {show.map((e) => {
                    return (
                        <>
                            <div key={e.id} className='w-[280px] bg-white shadow-lg border rounded-md mb-10 '>
                                <div className='flex relative group'>
                                    <img src={e.image} className='img w-full group-hover:block h-[180px] rounded-t-md cursor-pointer' />
                                    <span className=" absolute left-1 top-1"><p className='
                                     text-xs w-16 text-center py-1 rounded-2xl bg-orange-400  text-white font-semibold'>50% off</p></span>
                                    <div >
                                        {e.id===heart?<span className="absolute right-2 hidden group-hover:block top-2 text-lg
                                         text-red-500"><BsHeartFill className='cursor-pointer' onClick={()=>setheart(null)}/></span>:<span className="absolute  right-2 hidden group-hover:block top-2
                                         text-lg text-red-500 "><BsHeart className='cursor-pointer' onClick={()=>setheart(e.id)}/></span>}
                                        
                                          
                                    </div>
                                </div>
                                <div className='pl-3 pt-2'>
                                    <h1 className='font-semibold text-gray-600'>{e.name}</h1>
                                    <div className='flex text-orange-400 items-center'>
                                        <FaRupeeSign className='text-sm' /><p className='font-semibold mt-0.5'>{e.price}</p>
                                    </div>
                                </div>
                                <div className='flex justify-between p-3'>
                                    <div className='text-xl flex  text-orange-400 gap-2'>
                                        <div><BsStarFill /></div>
                                        <div><BsStarFill /></div>
                                        <div><BsStarFill /></div>
                                        <div><BsStarHalf /></div>
                                        <div><BsStar /></div>
                                    </div>
                                    <div className='flex items-center text-xl text-orange-400 cursor-pointer'>
                                        <MdShoppingBasket onClick={() => { setValue([...value, e]) }} />
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    );
};

export default Home;