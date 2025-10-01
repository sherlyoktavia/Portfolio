import { useEffect } from 'react';

function Footer(){
    useEffect(() => {
      AOS.init({
        duration: 800, // durasi animasi (ms)
        once: true,     // animasi hanya jalan sekali
      });
    }, []);
  return (
    <div className="footer py-4 sm:py-10 text-center border-t-2 border-zinc-300" data-aos="fade-up">
        <div className="sm:flex items-center justify-between px-5 sd:px-15 md:px-30">
            {/* <div className="flex"> */}
                <p className="opacity-50">© 2025 Sherly Oktavia Willisa.</p>
            {/* </div>   */}
            <div >
                <ul className="flex justify-center items-center gap-5 sd:gap-10">
                    <li className="relative group inline-block gap-2">
                        <a href="https://www.linkedin.com/in/sherlyoktaviawillisa/" target="_blank"><i className="ri-linkedin-box-fill fill-zinc-400 text-2xl cursor-pointer"></i></a>
                        <span className="absolute bottom-full z-50 left-1/2 -translate-x-1/2 mb-2 
                            hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded-lg shadow-lg"> Linkedin
                        </span>
                    </li>
                    <li className="relative group inline-block gap-2">
                        <a href="mailto:sherly.willisa@binus.ac.id" target="_blank"><i className="ri-mail-fill fill-zinc-400 text-2xl"></i></a>
                        <span className="absolute bottom-full z-50 left-1/2 -translate-x-1/2 mb-2 
                            hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded-lg shadow-lg"> Gmail
                        </span>
                    </li>
                    <li className="relative group inline-block gap-2">
                        <a href="https://github.com/sherlyoktavia" target="_blank"><i className="ri-github-fill fill-zinc-400 text-2xl"></i></a>
                        <span className="absolute bottom-full z-50 left-1/2 -translate-x-1/2 mb-2 
                            hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded-lg shadow-lg"> Github
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer



