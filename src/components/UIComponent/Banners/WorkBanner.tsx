import React from 'react'
import Image from 'next/image';
export const WorkBanner = () => {
  return (
    <>
    <div>
      <Image  
        src="/images/case-studies/case-study-id-1.png"
        alt="Work Banner"
        width={1920}
        height={600}
        className="w-full h-auto object-cover"
      />
    </div>    
    </>
  )
}

export default WorkBanner
