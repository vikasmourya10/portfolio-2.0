import React from 'react'
import gif from '../components/img/gif.gif'
const projects = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-10 gap-10 w-full'>
        <h1 className='
            lilita-one-regular
          text-5xl
          md:text-7xl
            text-gray-800
            items-center
            gap-5
            mt-5
            flex
            justify-center
            '>Projects!!</h1>
      </div>

            <div className='flex flex-col md:ml-10 justify-center items-center mt-10 md:justify-start md:items-start gap-2 '>
            <div className='h-50 w-80 md:h-50 object-cover border-3 bg-pink-100 border-gray-100 rounded-[10px] mt-5 flex flex-row justify-center items-center'> 
              <h1 className='
              boldonse-regular
              text-3xl
              items-center
              text-gray-600
              '>TokitoGPT</h1>
            </div>
            <h1 className='lilita-one-regular text-2xl text-gray-800 md:ml-2'>A chatbot like ChatGPT</h1>
            <h1 className='lilita-one-regular text-xl text-gray-600 md:ml-2'>source code: <a href="https://github.com/vikasmourya10/chatbot" className="text-blue-500 hover:text-blue-700">GitHub</a></h1>
            <h1 className='lilita-one-regular text-lg text-gray-600 md:ml-2'>preview: <a href="https://tokitogpt.netlify.app/" className="text-blue-500 hover:text-blue-700">Live Demo</a></h1>
            </div>
    </div>
  )
}

export default projects
