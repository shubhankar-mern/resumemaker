import React from 'react'
import { useEffect,useState } from 'react';
import $ from 'jquery';

const generateRandomKey = () => {
  return Math.floor(Math.random() * 100000); // Adjust the range as needed to avoid potential collisions
};

const Content = () => {
  const [numOfCards,setnumOfCards] = useState(1);
  
  const [isVisible, setIsVisible] = useState(false);

  

    const pageStyle = {
        backgroundColor: 'white',
        minHeight: '100rem', // Ensures the background covers the entire viewport height
        // background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 50%)',
        height: 'auto',
        marginBottom: '50px',
        
        opacity: 1,

      };
      

      function OnChangeTextLinear(id){
        // Get the textarea element by its id
        const textarea = document.getElementById(id);
        
       
        // Function to adjust the textarea height based on its content
        function adjustTextareaWidth() {
          textarea.style.width = "auto"; // Reset the width to "auto" to allow it to adjust based on content
        
          const desiredWidth = '120px'; // Initial width of 120px (you can adjust this value as needed)
        
          // If the scroll width is greater than the initial width, increase the width
          if (textarea.scrollWidth > parseInt(desiredWidth)) {
            textarea.style.width = `${(textarea.scrollWidth)*(textarea.scrollHeight/19)}px`;
            console.log('greater');
          } else {
            console.log('less');
            textarea.style.width = `${desiredWidth}px`;
          }
        }
    
        // Call the function initially
        adjustTextareaWidth();
    
        // Call the function whenever the user types in the textarea
        textarea.addEventListener("input", adjustTextareaWidth);
       };
     
  

      function OnChangeText2(id){
        // Get the textarea element by its id
        const textarea = document.getElementById(id);
        
       
        // Function to adjust the textarea height based on its content
        function adjustTextareaHeight() {
          textarea.style.height = "auto";
          
          if(textarea.style.height > '190px'){
            textarea.style.height =  `${textarea.scrollHeight}px`;
            console.log('greater')
          }else{
            console.log('less')
            textarea.style.height = "auto";
            textarea.style.height = Math.min('190px', textarea.scrollHeight) + "px";
          }
          
        }
    
        // Call the function initially
        adjustTextareaHeight();
    
        // Call the function whenever the user types in the textarea
        textarea.addEventListener("input", adjustTextareaHeight);
       };
       
  useEffect(()=>{
    OnChangeText2('myTextarea');
    OnChangeText2('myExp');
  })
  
  // useEffect(() => {
  //   // Event delegation for the click event on the asterisk for adding a new skill input
  //   let shouldAddSkillInput = true;

  //   // Event delegation for the click event on the asterisk for adding a new skill input
  //   $('.container').on('click', '.asterisk', function () {
  //     if (shouldAddSkillInput) {
  //       const newSkillInput = `
  //         <div class='w-fit flex flex-row bg-slate-400 mx-2 mt-1'>
  //           <div class='top-0 asterisk-del'>*</div>
  //           <p>Enter Skill</p>
  //           <div class='top-0 asterisk'>*</div>
  //         </div>
  //       `;
  //       $('.container').append(newSkillInput);

  //       // Set shouldAddSkillInput to false to prevent multiple additions
  //       shouldAddSkillInput = false;

  //       // Set shouldAddSkillInput back to true after a short delay to enable adding again
  //       setTimeout(() => {
  //         shouldAddSkillInput = true;
  //       }, 100);
  //     }
  //   });

  //   // Event delegation for the click event on the asterisk for deleting a skill input
  //   $('.container').on('click', '.asterisk-del', function () {
  //     $(this).closest('.w-fit').remove();
  //   });
  // }, []);
  

      const summaryText ='Enter your professional summary. Provide a brief overview of your relevant skills, experience, and qualities that would make you a good candidate for the job. Make sure to keep it concise and focused. If you need help writing your professional summary, you can use the AI Writing Assistant.';
      const expText = 'Enter your work experience description. Provide details that showcase how you were able to contribute and add value. Focus on responsibilities that are relevant to the job you are applying for. If you need help writing your work experience description, you can use the AI Writing Assistant.';
  
      return (
    <div className='w-10/12 flex flex-row mx-auto' style={pageStyle}>
        <section className='flex flex-col border border-black w-4/12'>
           
            <div className='mx-auto mt-20'>
            <div className='w-60 h-60 rounded-full bg-slate-500'>

              </div>
            </div>
            
            <div className='border border-black mt-10 h-auto'>
              <h3 className='mx-20 font-bold'>SUMMARY</h3>
              <textarea id="myTextarea" className='mx-20 p-1 text-sm font-semibold focus:outline-dashed outline-slate-400 outline-2 rounded-lg resize-none w-3/5  focus:bg-slate-300 ' onChange={()=>OnChangeText2('myTextarea')} placeholder={summaryText}>

              </textarea>
            </div>
             
            <div className='border border-black mt-3'>
              <h3 className='mx-20 font-bold'>PERSONAL DETAILS</h3>
              <h4 className='mx-20 font-bold mt-3 mb-2'>BIRTH DATE</h4>
              <textarea  className='mx-20 text-sm font-semibold p-1 focus:bg-slate-300 focus:outline-none h-auto resize-none rounded-lg w-3/5' placeholder='Enter Your Country & City' />
              <h4 className='mx-20 font-bold mt-3 mb-2'>NATIONALITY</h4>
              <textarea  className='mx-20 text-sm font-semibold p-1 focus:bg-slate-300 focus:outline-none h-auto resize-none rounded-lg w-3/5' placeholder='Enter Your Country & City' />
              <h4 className='mx-20 font-bold mt-3 mb-2'>LOCATION</h4>
              <textarea id='myLocation' className='mx-20 text-sm font-semibold p-1 focus:bg-slate-300 focus:outline-none h-auto resize-none rounded-lg w-3/5' placeholder='Enter Your Country & City' onChange={()=>OnChangeText2('myLocation')}/>
              <h4 className='mx-20 font-bold mt-3 mb-2'>MARTIAL STATUS</h4>
              <textarea  className='mx-20 text-sm font-semibold p-1 focus:bg-slate-300 focus:outline-none h-auto resize-none rounded-lg w-3/5' placeholder='Enter Your Country & City' />
            </div>


            <div className='my-10 border border-black flex flex-col'>
              <h3 className='mx-20 font-bold'>CONTACT</h3>
              
             <span className='mx-20 mt-2'> <i class="fa-solid fa-envelope"></i><input placeholder='Enter Your Email' className='underline  ml-3 w-10/12 text-xs'/></span>
             <span className='mx-20 mt-2'> <i class="fa-solid fa-phone"></i><input placeholder='Enter Your Email' className='underline ml-3 w-10/12 text-xs'/></span>
             <span className='mx-20 mt-2'> <i class="fa-brands fa-chrome"></i><input placeholder='Enter Your Email' className='underline ml-3 w-10/12 text-xs'/></span>
             <span className='mx-20 mt-2'> <i class="fa-brands fa-linkedin"></i><input placeholder='Enter Your Email' className='underline ml-3 w-10/12 text-xs'/></span>
             <span className='mx-20 mt-2'> <i class="fa-brands fa-github"></i><input placeholder='Enter Your Email' className='underline ml-3 w-10/12 text-xs'/></span>
             <span className='mx-20 my-2'> <i class="fa-brands fa-behance"></i><input placeholder='Enter Your Email' className='underline ml-3 w-10/12 text-xs'/></span>
            
            </div>

        </section>
        {/* right sextion */}
        <section className='flex flex-col border border-black w-8/12'>
          <div className='border border-black mt-9'>
          <textarea id="myName" className='ml-10 pt-5 px-3  text-5xl font-semibold  outline-slate-400 outline-0 rounded-lg resize-none w-11/12 mt-24 focus:bg-slate-300' onChange={()=>OnChangeText2('myName')} placeholder='Your Name'/>
          </div>
          <div className='border border-black'>
          <textarea id='myrole' className='mx-10 text-xl font-semibold  focus:bg-slate-300 focus:outline-none h-auto resize-none rounded-lg w-11/12 pt-2 px-4' placeholder='Your Role or Profession' style={{lineHeight: '1'}} />
          </div>

          <div className='border border-black'>
          <h3 className='mx-10 font-bold'>WORK EXPERIENCE</h3>
           <div>
            <p className='ml-5 text-xl font-semibold text-gray-400'><textarea id='myrole' className=' font-semibold  focus:bg-slate-300 focus:outline-none  resize-none rounded-lg px-3 pt-2 w-auto leading-3' placeholder='Position'  /></p>
            <div className='flex flex-row w-11/12 justify-between'>
              <p className='ml-5 text-sm font-semibold text-gray-400'><textarea id='myrole' className=' font-semibold  focus:bg-slate-300 focus:outline-none  resize-none rounded-lg px-3 pt-2 w-auto leading-3' placeholder='EMPLOYER'  /></p>
              <p className='ml-5 text-sm font-semibold w-auto  text-gray-400'><textarea id='myrole' className=' font-semibold  focus:bg-slate-300 focus:outline-none  resize-none rounded-lg px-3 pt-2 w-auto leading-3 text-left' placeholder='From-Untill'  /></p>
            </div>
            <textarea id='myExp' className='ml-5 text-base font-normal  focus:bg-slate-300 focus:outline-none h-auto resize-none rounded-lg w-11/12 pt-2 px-4' placeholder={expText} onChange={()=>OnChangeText2('myExp')} />
           </div>
          </div>

          <div className='border border-black mt-3'>
          <h3 className='mx-10 font-bold'>EDUCATION</h3>
           <div>
            <p  className='ml-5 text-xl font-semibold text-gray-400'><textarea id='myexp11' className=' font-semibold  focus:bg-slate-300 focus:outline-none  resize-none rounded-lg px-3 pt-2 w-auto leading-3' placeholder='Degree' onInput={()=>OnChangeTextLinear('myexp11')}/></p>
            <div className='flex flex-row w-11/12 justify-between'>
              <p className='ml-5 text-sm font-semibold text-gray-400'><textarea id='myrole' className=' font-semibold  focus:bg-slate-300 focus:outline-none  resize-none rounded-lg px-3 pt-2 w-auto leading-3' placeholder='SCHOOL'  /></p>
              <p className='ml-5 text-sm font-semibold w-auto  text-gray-400'><textarea id='myrole' className=' font-semibold  focus:bg-slate-300 focus:outline-none  resize-none rounded-lg px-3 pt-2 w-auto leading-3 text-left' placeholder='From-Untill'  /></p>
            </div>
            
           </div>
          </div>

          <div className='border border-black mt-3'>
      <h3 className='mx-10 font-bold'>HARD SKILLS&nbsp;<i class="fa-solid fa-square-plus fa-xs" ></i></h3>
      <div className='flex flex-wrap main-container'>
      
        

        

     
      </div>
      
    </div>




        </section>
    </div>
  )
}

export default Content