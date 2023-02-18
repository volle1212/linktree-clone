"use client";

import { useState } from "react";
import Image from "next/image";
import ParkIcon from "@mui/icons-material/Park";
import WebIcon from "@mui/icons-material/Web";
import IosShareIcon from "@mui/icons-material/IosShare";
import InstagramIcon from '@mui/icons-material/Instagram';
import SimpleDialog from "../components/Dialog.js";
import EmailIcon from '@mui/icons-material/Email';

const TikTokIcon = ({ color = "#000000" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

const baseStyles = {
  item: `
		bg-[#f5f4f4]
		mb-[16px]
		h-[56px]
		flex
		justify-between
		items-center
		rounded-[4px]
		hover:scale-[1.02]
		transform
		duration-[.15s]
		delay-[0s]
		ease-[cubic-bezier(0, .2, .5, 3)]
		ml-[12px]
		mr-[12px]
	`,
  icon: `
		hover:scale-[1.10]
	`,
};

const Home = () => {
  const [open, setOpen] = useState(Boolean(false));
  const [selectedValue, setSelectedValue] = useState(null);

  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(Boolean(false));
    setSelectedValue(value);
  };

  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

  return (
    <main className="flex flex-col items-center pt-[64px]">
      <Image
        src="/274014119_472555041168724_3761219825851015079_n.webp"
        width={96}
        height={96}
        className="border rounded-full mb-[16px]"
      />
      <p id="p2" className="hidden">Hi, I'm the 2nd TEXT</p><br/>

      <div className="flex items-center">
        <h1 className="font-bold text-[30px]">Eklidens muster</h1>
      </div>

      <div className="mt-[32px] w-[100%] max-w-[680px]">
        <a href="https://www.instagram.com/eklidens_muster/" target="_blank" rel="noopener norefferer">
          <div className={`${baseStyles.item} group/item`}>
            <InstagramIcon fontSize="large" className="ml-[10px]" />
            <p className="absolute pl-[42%] text-center">Instagram</p>
            <div className="mr-[10px] invisible">
              <IosShareIcon onClick={(e) => handleClickOpen(e)} />
            </div>
          </div>
        </a>

        <a
          href="https://www.tiktok.com/@eklidensmusterab?_t=8Zvyh3bRyLd&_r=1"
          target="_blank"
          rel="noopener norefferer"
        >
          <div className={`${baseStyles.item} group/item`}>
            <TikTokIcon color="black" className="ml-[10px] pl-0"></TikTokIcon>
            <p className="absolute pl-[42%] text-center">TikTok</p>            
            <div className="mr-[10px] invisible ">
            </div>
          </div>
        </a>
        
        <a
          href="mailto:eklidensmuster@gmail.com"
          target="_blank"
          rel="noopener norefferer"
          data-bs-toggle="modal" 
          data-bs-target="#exampleModal"
          className="w-1/2"
        >
          <div className={`${baseStyles.item} group/item`}>
            <EmailIcon fontSize="large" className="ml-[10px]" />
            <p className="absolute pl-[42%] text-left">Kontakta oss <br />eklidensmsuter@gmail.com</p>
            <div className="mr-[10px] invisible ">
              <IosShareIcon onClick={(e) => handleClickOpen(e)} />
            </div>
          </div>
        </a>
      </div>

      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />

      
    </main>

    


  );
};

export default Home;
