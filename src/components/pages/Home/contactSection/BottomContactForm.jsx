import React from 'react'
import LeftFormSection from './LeftFormSection'
import RightMapSection from './RightMapSection'

const BottomContactForm = () => {
  return (
    <div className='w-full  py-2 flex flex-col lg:flex-row gap-16 items-start'>
      <LeftFormSection />
      <RightMapSection />
    </div>
  )
}

export default BottomContactForm
