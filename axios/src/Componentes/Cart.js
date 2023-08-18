import React, { useContext } from 'react'
import { dataContext } from '../Context/DataProvider';
import { FaRupeeSign } from 'react-icons/fa'
import InCart from './InCart';

const Cart = () => {
  // const data = []
  const { value } = useContext(dataContext);
  // data.push(value)
  console.log(value)
  // console.log("value", value.length)

  return (
    <>
      <div className=' h-full z-50 w-[380px] bg-white shadow-2xl absolute right-0  overflow-y-scroll'>
        {value.length <= 0 ? <InCart /> : <>{value.map(e => (
          <>
            <div key={e.id} className=' h-[120px]  m-3 flex justify-between'>
              <div>
                <img src={e.image} alt="" className='h-[100px] w-[100px] border p-3' />
              </div>
              <div className=' left-0 flex-col  justify-center items-center'>
                <p className='font-semibold text-gray-400'>{e.name}</p>
                <p className='font-semibold text-gray-400'>{e.company}</p>
                <p className='border text-sm w-14 text-center font- text-gray-400 mt-6' >Qty: 1</p>
              </div>
              <div className=''>
                <div className='flex items-center text-orange-400 '>
                  <FaRupeeSign className='text-sm' /><p className='font-semibold mt-0.5'>{e.price}</p>
                </div>
                <p className='font-semibold text-gray-400 hover:text-indigo-500 hover:underline cursor-pointer mt-[45px]'>Remove</p>
              </div>
            </div>
          </>
        ))}</>}
      </div>
    </>
  )
}
export default Cart;