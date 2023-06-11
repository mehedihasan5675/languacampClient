import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg from '../../../../../../public/banner.jpg';
// Import Swiper styles
import { useTypewriter } from 'react-simple-typewriter';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./banner.css";

// import required modules
import { Navigation, Pagination, Parallax } from "swiper";
const Banner = () => {
  const [text] = useTypewriter({
    words: [ 'Bonjour, Summer: Immerse Yourself in the Beauty of French Language', "¡Vamos! Spanish Summer Camp: Let's Dive into the Richness of Spanish", "Deutschland Adventure: Embark on a German Language Journey","Ciao Bella! Italian Language Summer Camp: Experience La Dolce Vita"],
    loop: 0,
    typeSpeed:20
  })

  const [titleOne] = useTypewriter({
    words: [ 'French Language', "¡Vamos! Spanish ", "German Language ","Ciao Bella!Italian"],
    loop: 0,
    typeSpeed:40
  })
  const [title] = useTypewriter({
    words: [ 'Bonjour, Summer', "¡Vamos! ", "mbark on a German ","Ciao Bella!"],
    loop: 0,
    typeSpeed:40
  })
    return (
        <div className="flex h-[400px] md:h-[720px]  bg-gradient-to-r from-violet-950 to-purple-950">
          
        <div className="w-full">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
            
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "backgroundImage":
                `url(${bannerImg})`,
                "backgroundPosition":'top'
                
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide className="flex items-center">
          <div>
          <div className=" text-violet-950 font-semibold font-mono py-3 rounded-full text-base md:text-4xl shadow-md  bg-purple-400 bg-opacity-90 shadow-purple-100 inline-block px-5" data-swiper-parallax="-300">
         
             <div className='App'>
      <span> JOIN THE FOREIGN LANGUAGE SUMMER CAMP! </span><span className="text-[#170131]  font-bold uppercase  italic md:text-5xl text-xl">{titleOne}</span>
    </div>
            </div>
            <div className="w-full md:w-7/12 text-sm shadow-md text-violet-950 bg-purple-400 bg-opacity-90  shadow-purple-100 rounded-full px-5 my-5 py-1 md:text-lg  tracking-widest" data-swiper-parallax="-200">
            {text}.
            </div>
            <div className="w-7/12 px-5 py-6   hidden md:block bg-purple-400 bg-opacity-90  rounded-3xl shadow-lg shadow-purple-400" data-swiper-parallax="-100">
              <p className=" text-violet-950 text-base tracking-wider leading-5  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center">
          <div>
          <div className=" text-purple-950 font-mono py-3 rounded-full text-lg md:text-4xl shadow-md  bg-violet-300 bg-opacity-90 shadow-purple-100 inline-block px-5" data-swiper-parallax="-300">
            ...{title}
            </div>
            <div className="w-full md:w-7/12 text-sm shadow-md bg-violet-300 bg-opacity-90 shadow-purple-100 rounded-full px-5 my-5 py-1 text-purple-950 md:text-lg  tracking-widest" data-swiper-parallax="-200">
            {text}.
            </div>
            <div className="md:w-7/12 hidden md:block w-full px-5 py-6  bg-violet-300 bg-opacity-90 rounded-3xl shadow-lg  shadow-purple-500" data-swiper-parallax="-100">
              <p className=" text-purple-950 text-base tracking-wider leading-5  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center">
          <div className="">
          <div className=" text-black font-semibold font-mono py-3 rounded-full text-lg md:text-4xl shadow-md  bg-yellow-200 bg-opacity-70 shadow-purple-100 inline-block px-5" data-swiper-parallax="-300">
            ...{title}
            </div>
            <div className="w-full md:w-7/12 text-sm shadow-md text-black font-semibold bg-yellow-200 bg-opacity-70 shadow-purple-100 rounded-full px-5 my-5 py-1 md:text-lg  tracking-widest" data-swiper-parallax="-200">
            {text}.
            </div>
            <div className="md:w-7/12 hidden md:block w-full px-5 py-6 bg-yellow-200 bg-opacity-80 rounded-3xl shadow-lg shadow-yellow-200" data-swiper-parallax="-100">
              <p className=" text-black text-base  tracking-wider leading-5  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet fauciLorem ipsum dolor sit amet, conseictum mattis velit, sit amet fauciLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                
              </p>
            </div>
          </div>
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
    );
};

export default Banner;