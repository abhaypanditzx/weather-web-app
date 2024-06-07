import React from 'react'

const Loading = () => {
  return (
    <div className="from-[#030e20] text-white xs:text-3xl max-xs:text-base flex justify-center items-center  bg-gradient-to-tr to-[#101d32] bg-cover bg-no-repeat h-screen w-full">
<div className='flex items-center gap-2'>
   Loading<div class="w-full gap-x-2 flex justify-center items-center">
  <div
    class="w-3 bg-[#d991c2] animate-pulse h-3 rounded-full animate-bounce"
  ></div>
  <div
    class="w-3 animate-pulse h-3 bg-[#9869b8] rounded-full animate-bounce"
  ></div>
  <div
    class="w-3 h-3 animate-pulse bg-[#6756cc] rounded-full animate-bounce"
  ></div>
</div></div>

  </div>
  )
}

export default Loading