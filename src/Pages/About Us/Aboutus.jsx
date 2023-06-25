import React from 'react';
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share';
import Header from '../../Components/Header';

function Aboutus() {
  // The URL to be shared
  const shareUrl = 'promote my website';

  return (
    <>
      {/* Header Component to Navigate */}
      <Header />

      {/* Main Content */}
      <div className='items-center justify-center ml-[10vw] mr-[10vw] mt-[5vw]'>
        <h1 className="font-bold text-3xl text-center md:text-4xl mb-[2vw]">
        " Welcome to our Resume Builder ! "
        </h1>
        <br></br>

        {/*  About Us paragraph */}   
        <p1 className="mt-15 text-xl justify-center">
            "  we understand the importance of creating a professional and impactful resume. 
          We believe that a well-crafted resume can make a significant difference in your job search, helping you stand out from the competition
          and land your dream job.<br/><br/>Our Resume Builder is designed to simplify the resume creation process, offering a user-friendly interface
          and a wide range of customizable templates. Whether you're a recent graduate, a seasoned professional, or making a career transition,
          our platform provides the tools and resources you need to create a compelling resume that highlights your skills, experience, 
          and achievements.  "
        </p1>
        
        <h2 className='mt-8 font-bold text-xl text-center'>
          Share with Your Friends.
        </h2>

        {/* Share buttons */}
        <div className='mt-8 flex justify-center'>
          <div style={{marginRight:"2vh"}}>
            {/* Facebook share button */}
            <FacebookShareButton
              url={'https://cv-builder-ruddy.vercel.app/'}
              quote={'Title or jo bhi aapko likhna ho'}
              hashtag={'#portfolio...'}
            >
              <FacebookIcon className='buttonIcons' size={40} round={true} />
            </FacebookShareButton>
          </div>

          <div style={{marginRight:"2vh"}}>
            {/* LinkedIn share button */}
            <LinkedinShareButton
              url={'https://cv-builder-ruddy.vercel.app/'}
              quote={'Title or jo bhi aapko likhna ho'}
              hashtag={'#portfolio...'}
            >
              <LinkedinIcon className='buttonIcons' size={40} round={true} />
            </LinkedinShareButton>
          </div>

          <div style={{marginRight:"2vh"}}>
            {/* WhatsApp share button */}
            <WhatsappShareButton
              url={'https://cv-builder-ruddy.vercel.app/'}
              quote={'Title or jo bhi aapko likhna ho'}
              hashtag={'#portfolio...'}
            >
              <WhatsappIcon className='buttonIcons' size={40} round={true} />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
