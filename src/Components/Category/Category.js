import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div>
      <div class="flex justify-center items-center">
        <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div role="main" class="flex flex-col items-center justify-center">
            <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800">Categories</h1>
              <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe
              </p>
          </div>
          <div class="lg:flex items-stretch md:mt-12 mt-8">
            <div class="lg:w-1/2">
              <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div class="sm:w-1/2 relative">
                  <div>
                    <button class="p-6 text-xl font-medium leading-3 bg-white text-black absolute top-0 right-0">
                      <Link to="/products/1"> MEN </Link>
                    </button>
                  </div>
                  <img src="https://i.ibb.co/DYxtCJq/img-1.png" class="w-full" alt="chair" />
                </div>
                <div class="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <div>
                    <button class="p-6 text-xl font-medium leading-3 bg-white text-black absolute top-0 right-0">
                      <Link to="/products/1"> WOMEN </Link>
                    </button>
                  </div>
                  <img src="https://i.ibb.co/3C5HvxC/img-2.png" class="w-full" alt="wall design" />
                </div>
            </div>
        <div class="relative">
          <div>
            <button class="md:p-10 p-6 text-xl font-medium leading-3 bg-white text-black absolute top-0 right-0">
              <Link to="/products/1">
                CHILDREN
              </Link>
            </button>
          </div>
          <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" class="w-full mt-8 md:mt-6 hidden sm:block" />
          <img class="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
        </div>
      </div>
      <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
        <div class="relative">
          <div>
            <button class="md:p-10 p-6 text-xl font-medium leading-3 bg-white text-black absolute top-0 right-0">
              <Link to="/products/1">
                SHOES
              </Link>
            </button>
          </div>
          <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" class="w-full sm:block hidden" />
          <img class="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
        </div>
        <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
          <div class="relative w-full">
            <div>
              <button class="p-6 text-xl font-medium leading-3 bg-white text-black absolute top-0 right-0">
                <Link to="/products/1">
                  ACCESSORIES
                </Link>
              </button>
            </div>
            <img src="https://i.ibb.co/3yvZBpm/img-5.png" class="w-full" alt="chair" />
          </div>
          <div class="relative w-full sm:mt-0 mt-4">
            <div>
              <button class="p-6 text-xl font-medium leading-3 bg-white text-black absolute top-0 right-0">
                <Link to="/products/1">
                  HATS
                </Link>
              </button>
            </div>
            <img src="https://i.ibb.co/gDdnJb5/img-6.png" class="w-full" alt="wall design" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Category