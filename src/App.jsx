import Photo from "./assets/Photo.jpg";
import Photo2 from "./assets/Photo2.png";
import Rebio from "./assets/project/rebio.png";
import CareerSprint from "./assets/project/careersprint.png";
import Weather from "./assets/project/weather.png";
import Sobat from "./assets/project/sobat.png";
import {listTools} from "./data"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { TypeAnimation } from 'react-type-animation';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true,     // animasi hanya jalan sekali
    });
  }, []);

  return (
    <>
    <div className="home lg:mt-10 py-30 sd:py-20 md:py-30 z-20" >
        <div className="flex  items-center justify-between sm:mx-4 md:mx-10 lg:mx-30">
          <div className="flex flex-col justify-center">
            <div className="animate__animated animate__slideInUp">
              <h1 className="sm:text-2xl md:text-4xl font-black sm:mb-2 md:mb-3">Hello World!</h1>
              <p className="md:text-2xl md:mb-3 sm:mr-2 sm:mb-2">I'm Sherly Oktavia Willisa </p>
              <p className="md:text-2xl md:mb-3 sm:mr-5 sm:mb-2 font-light">A passionate <span className="font-bold">UI/UX Designer</span>, <span className="font-bold">Frontend Developer</span>, and <span className="font-bold">Data Scientist</span></p>
            </div>
            <div className=" button p-4 md:p-10 flex gap-10 md:gap-20 animate__animated animate__fadeInUp animate__delay-1s">
              <a href="" className="bg-sky-700/30 rounded-xl p-2 md:p-4 xl:font-semibold">Download CV</a>
              <a href="" className="bg-sky-700/30 rounded-xl p-2 md:p-4 xl:font-semibold">Let's Connect</a>
            </div>
          </div>
          <img src={Photo2} alt="Foto Profil" className="opacity-30 w-20 sm:w-30 md:w-60 animate__animated animate__fadeInUp animate__delay-2s"/>
        </div>
    </div>

        {/* About */}
      <div className="about pt-7 sm:pt-10 flex flex-col items-center z-20" data-aos="fade-up">
        <div>
          <p className="sm:text-2xl md:text-5xl font-bold sm:pd-2 md:p-3 text-center">Get to Know</p>
          <p className="md:text-4xl font-bold text-center">About Me</p>
        </div>
        <div className="boxnya flex gap-7 pt-4 md:px-10 lg:px-30 ">
          <div className="profile flex flex-col items-center size-1/2 mr-4">
            <img src={Photo} alt="Foto Profil" className="rounded-full w-20 h-20 sm:w-30 sm:h-30 md:w-45 md:h-45 m-5"/>
            <p className="deskripsi items-center text-center">3rd year as Computer Science student majoring in Data Science at Bina Nusantara University with a strong interest to continue to learn and explore. Actively participating in academic and organization activities, particularly in team based.</p>
            <hr className=" w-full my-5"/>
            <p className="location text-center">
              <i className="ri-map-pin-line"> Jakarta, Indonesia</i>
            </p>
          </div>
          <div className="contentnya size-2/3 flex flex-col justify-items-center sm:my-10 ">
            <h1 className="font-semibold sm:text-2xl mb-2">Education</h1>
            <div className="pendidikan md:flex justify-between">
              <p className="font-semibold">Bina Nusantara University @Bandung</p>
              <p>2023-2027 (Predicted)</p>
            </div>
            <div>
              <p>Bachelor of Computer Science</p>
            </div>
            <hr className="w-full my-5"/>
            <h1 className="font-semibold sm:text-2xl mb-2">Tech Stack</h1>
            <div className="techstack flex flex-wrap gap-3 mb-5">
              {listTools.map(tool => (
                <div className="group border-2 border-zinc-500 rounded-3xl px-2 flex" key={tool.id}>
                <img src={tool.gambar} alt="Tools Image" className="w-8 pr-2"></img>
                  <p>{tool.nama}</p>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project */}
      <div className="project pt-30 z-20">
        <p className="text-2xl md:text-5xl font-bold text-center pb-5 md:pb-10" data-aos="fade-in">My Project</p>
      <div>
        <div className="border rounded-2xl border-zinc-800/70 items-center mx-7 mb-2 p-2 lg:mx-30 md:mb-7 md:p-4 flex gap-5" data-aos="fade-right">
          <div className="flex flex-col">
            <p className="text-xs sm:text-base font-semibold md:font-bold md:text-2xl">ReBio</p>
            <hr className=""/>
            <p className="text-[6px]  sm:text-[10px] md:text-base text-justify mb-1 md:mb-2">A project to reducing organic waste, particularly household waste.</p>
            <p className="text-[6px] sm:text-[10px] md:text-[14px] text-justify mb-1 md:mb-4 text-black/60">This is a group project that created for participating in the DOW: Heroes of Innovation competition which successfully bring us to 6th place in the competition. ReBio mobile application built with Flutter and Firebase, residents of the cluster will be able to do monitoring eco-enzyme condition based on sensor analysis, collaborate to ensure the eco-enzyme remains in healthy state, and interact each other within the system. </p>
            <a href="https://github.com/sherlyoktavia/ReBio" target="_blank" className="border rounded-xl p-1 px-2 font-light md:p-2 md:px-4 border-zinc-800/70 md:font-semibold bg-sky-100 text-center w-fit text-[6px] sm:text-[10px] md:text-base hover:bg-sky-700/60 hover:text-white">GitHub <i className="ri-github-fill"></i></a>
          </div>
          <img src={Rebio} alt="Rebio" className="h-20 md:h-50 lg:h-60 xl:h-75"/>
        </div>
        <div className="border-1 rounded-2xl border-zinc-800/70 items-center mx-7 mb-2 p-2 lg:mx-30 md:mb-7 md:p-5 flex justify-between gap-5" data-aos="fade-left">
          <div className="flex flex-col">
            <p className="text-xs sm:text-base font-semibold md:font-bold md:text-2xl">CareerSprint</p>
            <hr className=""/>
            <p className="text-[6px] sm:text-[10px] md:text-base text-justify mb-1 md:mb-2">This project is purposed to address employee retention, which is a major challenge faced by many big companies, also inefficient and suboptimal communication in the workplace.</p>
            <p className="text-[6px] sm:text-[10px] md:text-[14px] text-justify mb-1 md:mb-4 text-black/60">Progress management feature displays a progress bar that shows each team’s performance and allows team members to receive or give feedback on their performance that can be viewed directly by teammates. Training Roadmap feature, which utilizes AI to perform analysis based on performance results, feedback, and employee capabilities during doing tasks to provide training recommendations.</p>
            <a href="https://drive.google.com/file/d/1wlk4aFj5jfGJCnPreHluwpoQwF5_tK3Z/view" target="_blank" className="border rounded-xl p-1 px-2 font-light md:p-2 md:px-4 border-zinc-800/70 md:font-semibold bg-sky-100 text-center w-fit text-[6px] sm:text-[10px] md:text-base hover:bg-sky-700/60 hover:text-white">Google Drive <i className="ri-drive-fill"></i></a>
          </div>
          <img src={CareerSprint} alt="CareerSprint" className="h-20 md:h-50 lg:h-60 xl:h-75"/>
        </div>
        <div className="border-1 rounded-2xl border-zinc-800/70 items-center mx-7 mb-2 p-2 lg:mx-30 md:mb-7 md:p-5 flex justify-between gap-5" data-aos="fade-right">
          <div className="flex flex-col">
            <p className="text-xs sm:text-base font-semibold md:font-bold md:text-2xl">Weather Forecast Website</p>
            <hr className=""/>
            <p className="text-[6px] sm:text-[10px] md:text-base text-justify mb-1 md:mb-2">A Website to predict weather conditions for the next 5 days also temperature and humidity for the next 5 hours based on the location.</p>
            <p className="text-[6px] sm:text-[10px] md:text-[14px] text-justify mb-1 md:mb-4 text-black/60">Weather analysis is conducted using data sourced from Kaggle and leveraging OpenWeatherMap API to provide more accurate result based on location. A Machine Learning model is used as the basis to provide prediction, with this project employing the Random Forest model, which achieved the highest accuracy compared to other models.</p>
            <a href="https://github.com/sherlyoktavia/Weather-Forecast-Website" target="_blank" className="border rounded-xl p-1 px-2 font-light md:p-2 md:px-4 border-zinc-800/70 md:font-semibold bg-sky-100 text-center w-fit text-[6px] sm:text-[10px] md:text-base hover:bg-sky-700/60 hover:text-white">GitHub <i className="ri-github-fill"></i></a>
          </div>
          <img src={Weather} alt="Weather Forecast" className="w-25 md:w-60 lg:w-80 xl:w-93"/>
        </div>
        <div className="border-1 rounded-2xl border-zinc-800/70 items-center mx-7 mb-2 p-2 lg:mx-30 md:mb-7 md:p-5 flex justify-between gap-5" data-aos="fade-left">
          <div className="flex flex-col">
            <p className="text-xs sm:text-base font-semibold md:font-bold md:text-2xl">Sobat</p>
            <hr className=""/>
            <p className="text-[6px] sm:text-[10px] md:text-base text-justify mb-1 md:mb-2">Application that connects food producers and distributors in the form of government agencies, and beneficiary communities to ensure efficient and targeted food distribution.</p>
            <p className="text-[6px] sm:text-[10px] md:text-[14px] text-justify mb-1 md:mb-4 text-black/60">This application also serves as an effort to reduce food waste, encourage optimal consumption of local food, and connect directly with small farmers/local food communities. There are two roles available when accessing the application: Authority (Government Agency) or Friend (General Public), each leading to a different application page based on their respective roles.</p>
            <a href="https://www.figma.com/proto/oMymoqTCgfoY4i5JwSbnIH/Techfest?node-id=139-7060&t=dhTrdTRnrf7BpuSF-1&starting-point-node-id=139%3A7050" target="_blank" className="border rounded-xl p-1 px-2 font-light md:p-2 md:px-4 border-zinc-800/70 md:font-semibold bg-sky-100 text-center w-fit text-[6px] sm:text-[10px] md:text-base hover:bg-sky-700/60 hover:text-white">Figma <i className="ri-figma-fill"></i></a>
          </div>
          <img src={Sobat} alt="Sobat" className="w-25 md:w-60 lg:w-75 xl:w-93"/>
        </div>
      </div>
      </div>


      {/* Contact */}
      <div className="contact py-30 items-center flex flex-col z-20">
        <div className="items-center text-center mb-10" data-aos="fade-In">
          <p className="text-2xl font-bold">Get in Touch</p>
          <p className="text-4xl font-black">Contact Me</p>
        </div>

        <form action="https://formsubmit.co/sherly.willisa@binus.ac.id" method="POST" className="flex flex-col gap-5 border-2 border-zinc-400 rounded-2xl p-7 sm:p-10" data-aos="zoom-in">
          <p className="font-light text-center sm:text-2xl">Send me a message 🤝</p>
          <input type="text" name="nama" placeholder="Your name..." className="border border-zinc-400 p-2 sd:p-3 pl-4 items-center rounded-2xl" required />
          <input type="email" name="email" placeholder="Your email..." className="border border-zinc-400 p-2 sd:p-3 pl-4 items-center rounded-2xl" required />
          <textarea name="message" id="message" placeholder="Your message..." className="border border-zinc-400 p-3 pl-4 items-center rounded-2xl w-63 h-12 sm:w-80 sm:h-32" required />
          <button type="submit" className="bg-sky-100 border rounded-xl p-2 sm:p-4 sm:mt-4 font-semibold hover:bg-sky-700/60 hover:text-white">Send Message <i className="ri-send-plane-2-line fill-zinc-400"></i></button>
        </form>
      </div>


    </>
  )
}

export default App
