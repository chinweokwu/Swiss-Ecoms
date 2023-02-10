import React from 'react'
import {CarouselItem, Carousel} from '../../Components/Carousel/Carousel';
import Featured from '../../Components/Featured/Featured';
import Category from '../../Components/Category/Category';
import Trending from '../../Components/Trending/Trending';
const img = [
  {
    id: 1,
    link: 'https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    link: 'https://images.pexels.com/photos/374677/pexels-photo-374677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    link: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    link: 'https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }

]
const Home = () => {
  return (
    <div>
      <Carousel>
        {img.map((item) => (
          <CarouselItem key={item.id}>
            <img src={item.link} alt="img" style={{width: "100vw", objectFit: "cover", height: "100%"}} />
          </CarouselItem>
        ))}
      </Carousel>
      <Featured />
      <Category />
      <Trending/>
    </div>
  )
}

export default Home