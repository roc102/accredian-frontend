import React from 'react'
import { styles } from '../../styles'
import { github } from '../../assets'
const ProfileSearch = () => {
  return (
    <section className='relative w-full h-[76.7vh] mx-auto  bg-slate-400'>
        <div
        className={`w-full h-[17rem] border-black py-6 relative top-[6rem] px-[8rem] flex-col justify-center items-center gap-11`}
      >
    <div className='border-black px-16 my-5 h-16'>
    <p className={`${styles.heroSubText} mt-2 text-white-100 flex justify-center`}> 
      Profile
    </p>
    </div>
<div className='border-black h-[8rem] my-5 flex-col justify-center'>
    
    
<form class="flex items-center relative top-[2.5rem]">   
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
            </svg>
        </div>
        <input type="text" id="voice-search" class="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required/>
        <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
            </svg>
        </button>
    </div>
    <button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Search
    </button>
</form>


</div> 

      </div>
    <div className="w-full border-black py-6 relative top-[6rem] flex flex-row justify-evenly h-40 px-20">
        <div className="border-cyan-100 w-[132px] flex justify-center items-center">
            <img src={github}  className='w-auto object-contain h-32'/>
        </div>
        <div className="border-cyan-100 w-[600px] flex-col justify-center">
            <div className='border-cyan-50 h-1/3 flex items-center mx-5'>
                John Doe
            </div>
            <div className='border-cyan-50 h-1/3 flex flex-row justify-start '>
                <div className='border-black w-[100px] h-auto rounded-md mx-2 flex justify-center my-1'>Student</div>
                <div className='border-black w-[100px] h-auto  rounded-md mx-2 flex justify-center my-1'>Content </div>
            </div>
            <div className='border-cyan-50 h-1/3 flex flex-row justify-center items-center'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, ducimus.
            </div>
            
            
        </div>
        <div className="border-cyan-100 w-[120px] flex flex-col justify-center items-center">
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-24">Follow</button>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-24">Message</button>
        </div>
        
        
    </div>
    </section>
  )
}

export default ProfileSearch
