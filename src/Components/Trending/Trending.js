import React from 'react'
import {Link}  from "react-router-dom";
import './trending.scss'
const Trending = () => {
  const  data = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80',
      img2: 'https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80',
      title: 'Suit',
      isNew: true,
      oldPrice: '$100',
      newPrice: '$50',

    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      title: 'Hat',
      oldPrice: '$100',
      newPrice: '$50',

    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80',
      img2: 'https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80',
      title: 'Junp suit',
      oldPrice: '$200',
      isNew: true,
      newPrice: '$150',

    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      title: 'Trousers',
      oldPrice: '$100',
      newPrice: '$50',

    },
  ]
  return (
    <>
          <div class="flex justify-between trend my-10"> 
      <h3 className='w-1/2 text-4xl font-semibold leading-9 text-gray-800'>Trending Products</h3>
      <p className='leading-normal text-center text-gray-600'>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe
      </p>
    </div>
      <div class=" gap-5 flex flex-wrap items-center justify-center my-10">
        {data.map((item) => (
          <Link to={`/product/${item.id}`}>
                      <div class="card rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
            {item.isNew && <span className='new'>New</span>}
              <div className='image rounded-xl'>
                <img src={item.img} alt="" className='main-img'/>
                <img src={item.img2} alt="" className='second-img'/>
              </div>
              <h2>
                {item.title}
              </h2>
              <div>
                <h3 class="first:line-through text-slate-400">{item.oldPrice}</h3>
                <h3 class="first:line-through">{item.newPrice}</h3>  
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Trending