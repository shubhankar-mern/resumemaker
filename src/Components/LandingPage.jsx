import React from "react";
import Footers from '../Components/footers';
const LandingPage = () => {

    const handleClickfaq = (id) => {
        // const faqItems = document.querySelectorAll('.faq-item');
      
        // // Loop through all FAQ items and remove the 'expanded' class
        // faqItems.forEach(item => {
        //   if (item.id !== id) {
        //     item.classList.remove('expanded');
        //   }
        // });
      
        // Toggle the 'expanded' class on the clicked item
        const clickedItem = document.getElementById(id);
        if(clickedItem.classList.contains('expanded'))
        {
            clickedItem.classList.remove('expanded');
        }else{
            clickedItem.classList.add('expanded');
        }
        
      };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center flex-col">
      <div className="flex flex-row">
      <div className="bg-opacity-0 text-white p-8 rounded-lg  w-full lg:w-3/6">
      <h1 class="text-6xl font-bold mb-4 text-left">
    <span class="text-white-500">R</span>
    <span class="text-yellow-400">e</span>
    <span class="text-cyan-500">s</span>
    <span class="text-white-500">u</span>
    <span class="text-red-900">m</span>
    <span class="text-yellow-400">e</span>
    <span class="text-indigo-500">B</span>
    <span class="text-blue-500">o</span>
    <span class="text-yellow-400">t</span>
    <span class="text-white-500">.</span>
    <span class="text-cyan-500">a</span>
    <span class="text-yellow-400">i</span>
  </h1>
  
        <p className="text-sm md:text-lg md:text-sm mb-8 text-left text-white-500">
          AI-POWERED FREE RESUME MAKER & CV BUILDER ONLINE
        </p>
        <p className="text-xl font-bold mb-4 text-left text-white">
          THE EASIEST WAY TO CREATE A PROFESSIONAL RESUME
        </p>
        <p className="text-sm md:text-lg mb-8 text-left text-white-500">
          CREATE A RESUME IN JUST MINUTES WITH THE EASIEST-TO-USE RESUME BUILDER
          & CV MAKER. LET AI DO THE WRITING FOR YOU AND DOWNLOAD A PERFECT
          RESUME – FOR FREE, NO SIGN-UP REQUIRED!
        </p>
        <button
          className="bg-cyan-950 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded w-fit flex items-center justify-center"
          onClick={() => alert("Button Clicked!")}
        >
          <span role="img" aria-label="pen" className="mr-2">
            ✍️
          </span>
          Create a Resume (No sign-up required)
        </button>
        <p className="text-sm mt-4 text-left text-white-500">
          By pressing "Create a Resume" you agree to our Privacy Policy
        </p>
      </div>

      {/* <div className="w-3/6">
        <img
          src="https://picsum.photos/seed/resume/1024/768"
          alt="Sample Image"
          className="w-full h-full object-cover"
        />
      </div> */}
      </div>
      
     
        <h2 className="text-3xl font-bold mb-4 text-center text-white">Features</h2>
        <div className="flex flex-wrap justify-center">
          <div className="text-base mb-4  px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
            <strong><i class="fa-solid fa-circle-check"></i>  THE BEST FREE RESUME BUILDER IN 2023</strong> 
            <p className="text-xs md:text-sm">Our CV Maker is designed to
            help you craft the perfect resume, no matter what stage of your
            career you're in. With a range of powerful features and a
            user-friendly interface, you'll be able to create a standout resume
            in just a few minutes.</p>
          </div>
          <div className="text-base mb-4  px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
          <strong><i class="fa-solid fa-circle-check"></i>  AI RESUME WRITING ASSISTANT POWERED BY OPENAI'S GPT</strong> 
          <p className="text-xs md:text-sm">Write a flawless resume in no time with our AI resume bullet point
            generator, powered by OpenAI's GPT technology. Effortlessly build
            an error-free resume tailored to your role using the best AI resume
            writer available - all for free!</p>
          </div>
          <div className="text-base mb-4  px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
          <strong><i class="fa-solid fa-circle-check"></i>  EASY TO USE FOR ANY SKILL LEVEL</strong> 
          <p className="text-xs md:text-sm">Designed for job seekers of all levels of expertise, our resume builder offers
                an easy-to-use and straightforward experience. Experience the perfect balance
                between simplicity and functionality, ensuring that creating a professional
                resume is a breeze for everyone.</p>
          </div>
          <div className="text-base mb-4  px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
          <strong><i class="fa-solid fa-circle-check"></i>  ATS-FRIENDLY</strong> 
          <p className="text-xs md:text-sm">Designed with applicant tracking systems (ATS) in mind, you can be confident
                that your resume will make it through the application process and get seen by
                the right people.</p>
          </div>
          <div className="text-base mb-4  px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
          <strong><i class="fa-solid fa-circle-check"></i>  NO SIGN-UP REQUIRED</strong> 
          <p className="text-xs md:text-sm">Build and download your resume without having to create an account. All you need
          to do is enter your information and download your resume.</p>
          </div>
          <div className="text-base mb-4  px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
          <strong><i class="fa-solid fa-circle-check"></i>  PDF DOWNLOAD</strong> 
          <p className="text-xs md:text-sm">Our paid PDF resume download offers a high-quality, professionally designed
          resume that is perfect for printing or emailing to potential employers.</p>
          </div>
          <div className="text-base mb-4  px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
          <strong><i class="fa-solid fa-circle-check"></i>  PAY-PER-DOWNLOAD</strong> 
          <p className="text-xs md:text-sm">We offer a simple and affordable pay-per-download model, no need to worry about
             monthly subscriptions, long-term contracts or hidden fees – just pay as you go.</p>
          </div>
          <div className="text-base mb-4  px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
          <strong><i class="fa-solid fa-circle-check"></i>  SIMPLE RESUME TEMPLATE</strong> 
          <p className="text-xs md:text-sm">We offer an effective simple resume template download to ensure a professional
           presentation of your skills and experience. No need to spend hours scrolling
              through endless resume templates options – we've done the work for you.</p>
          </div>
          <div className="text-base mb-4  px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
          <strong><i class="fa-solid fa-circle-check"></i>  CUSTOMIZABLE FORMAT</strong> 
          <p className="text-xs md:text-sm">With customizable sections, you can tailor your resume template to fit your
           specific needs. Choose from a variety of sections to create a unique and
            personalized resume format.</p>
          </div>
          <div className="text-base mb-4  px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
          <strong><i class="fa-solid fa-circle-check"></i>  PRIVACY FRIENDLY</strong> 
          <p className="text-xs md:text-sm">We won't store any of your data. Save your resume data locally for complete
            control over your personal information.</p>
          </div>
          
          {/* Add the rest of the features */}
        </div>
    

      
  <div className="flex flex-col md:flex-row w-full  justify-start">
    <div className="mx-20 my-10">
    <h2 className="text-3xl font-bold mb-4 text-center text-white">FAQ</h2>
    <h4 className="text-3xl font-bold mb-4 text-center text-white">( Frequently Asked Questions )</h4>
    </div>
  <div className="flex flex-col mx-0  my-20">
    <div className="faq-item text-base   mb-4 px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8" id='faq1' onClick={()=>handleClickfaq('faq1')}>
      <strong><i class="fa-solid fa-play fa-beat"></i>&nbsp;&nbsp;  How to write a resume with AI (artificial intelligence)?</strong> 
      <p className="text-xs md:text-sm">To write a
      resume using artificial intelligence, you'll need to click on the AI
      Assistant Button, which is available for the profile, work experience, and
      skills sections.</p>
    </div>
    <div className="faq-item text-base mb-4 px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8" id='faq2' onClick={()=>handleClickfaq('faq2')}>
    <strong><i class="fa-solid fa-play fa-beat"></i>&nbsp;&nbsp;  How long should a resume be? </strong>
    <p className="text-xs md:text-sm">A resume should be kept to a single page as it allows the employer to
         quickly review the applicant's qualifications
      and experience without getting overwhelmed by unnecessary details.</p>
    </div>
    <div className="faq-item text-base mb-4 px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8" id='faq3' onClick={()=>handleClickfaq('faq3')}>
    <strong><i class="fa-solid fa-play fa-beat"></i>&nbsp;&nbsp;   What to put on a resume? </strong>
    <p className="text-xs md:text-sm">When creating a resume, it's important to include only the relevant information
for the role you're applying for, such as your education, work experience,
skills, and achievements.</p>
    </div>
    <div className="faq-item text-base mb-4 px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8" id='faq4' onClick={()=>handleClickfaq('faq4')}>
    <strong><i class="fa-solid fa-play fa-beat"></i>&nbsp;&nbsp;   How far back should a resume go?</strong>
    <p className="text-xs md:text-sm">A resume should generally go back 10-15 years, or to the start of your relevant
work experience, whichever is more recent.</p>
    </div>
    <div className="faq-item text-base mb-4 px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8" id='faq5' onClick={()=>handleClickfaq('faq5')}>
    <strong><i class="fa-solid fa-play fa-beat"></i>&nbsp;&nbsp;    How to list references on a resume?</strong>
    <p className="text-xs md:text-sm">It's generally recommended not to list references on a resume. Instead, you can
include a separate document with your references, which can be provided upon
request from the employer.</p>
    </div>
    <div className="faq-item text-base mb-4 px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8" id='faq6' onClick={()=>handleClickfaq('faq6')}>
    <strong><i class="fa-solid fa-play fa-beat"></i>&nbsp;&nbsp;    How should a resume look?</strong>
    <p className="text-xs md:text-sm">When it comes to the appearance of a resume, simplicity and readability are key,
and it's generally best to avoid overly creative design elements that could be
distracting or hard to read.</p>
    </div>
    <div className="faq-item text-base mb-4 px-4 mx-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8" id='faq7' onClick={()=>handleClickfaq('faq7')}>
    <strong><i class="fa-solid fa-play fa-beat"></i>&nbsp;&nbsp;    Are there any resume examples available on this website? </strong>
    <p className="text-xs md:text-sm">Yes, this website contains AI-generated resume examples that can be used as
inspiration when creating your own resume.</p>
    </div>
    {/* Add the rest of the FAQ */}
  </div>
  </div>


  {/* footer */}
  <Footers/>

    </div>
  );
};

export default LandingPage;
