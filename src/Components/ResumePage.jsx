import React from 'react'
import ResumeButtons from './ResumeButtons';
import Footers from './footers';
const ResumePage = () => {
  const pageStyle = {
    backgroundColor: '#0773e8',
    minHeight: '100vh', // Ensures the background covers the entire viewport height
    // background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 50%)',
    opacity: 1,
  };
  return (
    <div className='w-full flex flex-col h-full' style={pageStyle}>
      
      <ResumeButtons/>
      
      <div className='bottom-0 relative w-full'>
      <Footers/>
      </div>
    </div>
  )
}

export default ResumePage;