import React, { useState } from 'react'
import Select from 'react-select';


const ResumeButtons = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div className='z-20'>
         <div className='flex flex-col justify-center w-full h-fit sticky md:flex-row'>

<div
  className='shadow  flex flex-row  mb-5 mx-auto my-5  rounded-xl sticky top-0 w-full md:w-2/6 md:mx-3'
  style={{ height: 'auto', backgroundColor:'black' }}
>
<div className='border border-gray-600 border-r border-t-transparent border-b-transparent border-l-transparent w-1/6 flex flex-col justify-center '>
<div className='h-12 w-12 my-2 bg-slate-400 rounded-full mx-auto'>

</div>
<p className='text-white text-xs text-center'><strong>COLOR</strong></p>
</div>
<div className='border border-gray-600 border-r-0 border-l-0 border-t-black border-b-black w-1/3 flex flex-col'>
<div className='my-3 mx-3'>
<Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
</div>
<p className='text-white text-xs text-center'><strong>TYPOGRAPHY</strong></p>
</div>
<div className='border border-gray-600 border-r-0 border-t-black border-b-black w-1/4 flex flex-col'>
<div className='flex flex-row justify-center my-2'>
<div className='text-gray-500 text-xl mx-1 pt-4 '><strong>A</strong></div>
<div className='text-gray-500 text-2xl mx-1 pt-3'><strong>A</strong></div>
<div className='text-gray-500 text-4xl mx-1 pt-1'><strong>A</strong></div>
</div>
<p className='text-white text-xs text-center '><strong>TEXT-SIZE</strong></p>
</div>
<div className='border border-gray-600 border-t-transparent border-b-transparent border-r-transparent w-1/4 flex flex-col'>
<div className='w-8 h-8 mx-auto mt-4'>
<svg  id="icon_sections"  viewBox="-285 408.9 24 24" ><path d="M-287.2 430.7h13.1v2.2h-13.1v-2.2zm0-4.3h13.1v2.2h-13.1v-2.2zm0-13.1h13.1v2.2h-13.1v-2.2zm0-4.4h13.1v2.2h-13.1v-2.2zm0 13.1h13.1v2.2h-13.1V422zm0-4.4h13.1v2.2h-13.1v-2.2zm15.3 15.3h10.9V422h-10.9v10.9zm0-13.1h10.9v-10.9h-10.9v10.9zm0-4.3h10.9v-6.6h-10.9v6.6z" fill="grey"></path></svg>
</div>
<p className='text-white text-xs text-center mt-3'><strong>EDIT-SECTIONS</strong></p>
</div>
</div>

<div
  className='shadow  p-3 mb-5 mx-auto my-5 bg-white rounded-xl sticky top-0 flex flex-row w-full md:w-48 md:mx-3'
  style={{ height: 'auto',  backgroundColor:'#E87C07' }}
>
  <div className=' mx-auto my-auto'>
  <i class="fa-solid fa-download" style={{color: 'white'}}></i>
  <span className='text-white mx-2'><strong>Download</strong></span>
  </div>

</div>

</div>
    </div>
  )
}

export default ResumeButtons