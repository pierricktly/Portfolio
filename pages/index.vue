<template>
  <div data-scroll-container class="text-white">
    <div class="overflow-y-scroll flex flex-col lg:text-xl overflow-x-hidden mx-auto">
      <section id="home" data-scroll-section class="w-full min-h-screen mx-auto p-5 lg:p-0 flex flex-col justify-between md:justify-center items-center space-y-5">
        <div
          data-scroll 
          data-scroll-speed="2" 
          class="w-full flex justify-center">
          <h1 class="text-center whitespace-pre-line leading-loose text-3xl lg:text-4xl">
            Hello, I'm
            <span class="font-bold text-5xl lg:text-7xl text-secondary">Pierrick</span>
            a Frontend Developer
          </h1>
        </div>
        <div class="w-full flex justify-center">
          <img alt="Profile picture" src="../assets/images/profile_picture.png" class="bg-gray-500 w-48 lg:w-80 rounded-full aspect-square"/>
        </div>
        <div data-scroll data-scroll-speed="2" class="space-x-5 text-xl w-full flex justify-center">
          <a href="#about" data-scroll-to class="border border-secondary px-5 py-2 text-secondary rounded
          hover:bg-secondary/10">About</a>
          <a href="#contact" data-scroll-to class="bg-secondary px-5 py-2 rounded
          hover:bg-secondary/70">Contact</a>
        </div>
        <div class="md:absolute bottom-2 w-full">
          <div class="flex justify-center items-center animate-bounce">
            <div class="flex flex-col justify-center items-center space-y-1">
              <svg class="w-8 h-8" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 35.7778C9.05315 35.7778 6.227 34.6072 4.14326 32.5234C2.05952 30.4397 0.888889 27.6135 0.888889 24.6667V11.3333C0.888889 8.38649 2.05952 5.56034 4.14326 3.4766C6.227 1.39286 9.05315 0.222229 12 0.222229C14.9468 0.222229 17.773 1.39286 19.8567 3.4766C21.9405 5.56034 23.1111 8.38649 23.1111 11.3333V24.6667C23.1111 26.1258 22.8237 27.5707 22.2653 28.9187C21.7069 30.2668 20.8885 31.4917 19.8567 32.5234C18.825 33.5552 17.6001 34.3736 16.252 34.932C14.904 35.4904 13.4591 35.7778 12 35.7778ZM12 2.44445C9.64252 2.44445 7.3816 3.38096 5.71461 5.04795C4.04762 6.71494 3.11111 8.97586 3.11111 11.3333V24.6667C3.11111 27.0242 4.04762 29.2851 5.71461 30.9521C7.3816 32.6191 9.64252 33.5556 12 33.5556C14.3575 33.5556 16.6184 32.6191 18.2854 30.9521C19.9524 29.2851 20.8889 27.0242 20.8889 24.6667V11.3333C20.8889 8.97586 19.9524 6.71494 18.2854 5.04795C16.6184 3.38096 14.3575 2.44445 12 2.44445Z" fill="white"/>
                <path d="M12 14.6667C11.7053 14.6667 11.4227 14.5496 11.2143 14.3412C11.006 14.1329 10.8889 13.8502 10.8889 13.5556V9.11111C10.8889 8.81643 11.006 8.53381 11.2143 8.32544C11.4227 8.11706 11.7053 8 12 8C12.2947 8 12.5773 8.11706 12.7857 8.32544C12.994 8.53381 13.1111 8.81643 13.1111 9.11111V13.5556C13.1111 13.8502 12.994 14.1329 12.7857 14.3412C12.5773 14.5496 12.2947 14.6667 12 14.6667Z" fill="white"/>
              </svg>
              <p class="text-sm">Scrolldown</p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" data-scroll-section class="w-full min-h-screen mx-auto relative flex flex-col justify-center items-center">
        <div class="flex flex-col items-center space-y-20 md:space-y-0 mt-20 md:mt-60 lg:mt-60 xl:mt-0">
          <h2 id="fixed-element" class="text-5xl font-bold text-secondary z-10">About Me</h2>
          <div class="px-5 lg:px-0">
            <p class="text-center whitespace-pre-line leading-loose text-xl lg:text-2xl max-w-2xl z-10">
              I’m a french frontend developer, based in Paris. 
              Passionate about development and travel, I am surrounded by a multitude of sources of inspiration for new ideas, new projects or just simple improvements.
            </p>
          </div>
          <div class="flex space-x-5 md:hidden">
            <a href="https://www.linkedin.com/in/pierrick-taily/" target="_blank">
              <svg 
                viewBox="0 0 29 29" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-white hover:text-secondary transition-all duration-500 ease-in-out"
              >
                <path 
                  fill-rule="evenodd" 
                  clip-rule="evenodd" 
                  d="M3.52441e-07 2.38105C3.52441e-07 1.74956 0.25086 1.14393 0.697392 0.697395C1.14392 0.250863 1.74955 3.17427e-06 2.38105 3.17427e-06H26.1164C26.4293 -0.000507949 26.7393 0.0607119 27.0285 0.180158C27.3178 0.299604 27.5807 0.474929 27.8021 0.696098C28.0235 0.917266 28.1991 1.17993 28.3189 1.46906C28.4386 1.75819 28.5002 2.0681 28.5 2.38105V26.1164C28.5003 26.4294 28.439 26.7394 28.3194 27.0286C28.1998 27.3179 28.0243 27.5808 27.8031 27.8022C27.5818 28.0235 27.319 28.1991 27.0298 28.3189C26.7406 28.4386 26.4307 28.5002 26.1177 28.5H2.38105C2.06825 28.5 1.75853 28.4384 1.46956 28.3186C1.18059 28.1989 0.918052 28.0234 0.696934 27.8022C0.475817 27.5809 0.300457 27.3183 0.180875 27.0292C0.0612922 26.7402 -0.000169828 26.4305 3.52441e-07 26.1177V2.38105ZM11.2808 10.8663H15.14V12.8043C15.697 11.6902 17.122 10.6875 19.2634 10.6875C23.3687 10.6875 24.3416 12.9066 24.3416 16.9782V24.5204H20.1871V17.9058C20.1871 15.5869 19.63 14.2785 18.2154 14.2785C16.2528 14.2785 15.4366 15.6893 15.4366 17.9058V24.5204H11.2808V10.8663ZM4.15582 24.3429H8.31164V10.6875H4.15582V24.3416V24.3429ZM8.90625 6.23373C8.91409 6.58956 8.85077 6.94336 8.72001 7.27439C8.58926 7.60541 8.3937 7.90698 8.14482 8.16141C7.89594 8.41583 7.59875 8.61798 7.27068 8.75599C6.94261 8.894 6.59029 8.96509 6.23438 8.96509C5.87846 8.96509 5.52613 8.894 5.19807 8.75599C4.87 8.61798 4.57281 8.41583 4.32393 8.16141C4.07505 7.90698 3.87949 7.60541 3.74873 7.27439C3.61798 6.94336 3.55466 6.58956 3.5625 6.23373C3.57788 5.53529 3.86613 4.87064 4.36553 4.38212C4.86493 3.8936 5.53577 3.62004 6.23438 3.62004C6.93298 3.62004 7.60382 3.8936 8.10322 4.38212C8.60261 4.87064 8.89087 5.53529 8.90625 6.23373Z" 
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="https://github.com/Zokiasu" target="_blank">
              <svg 
                viewBox="0 0 29 29" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-white hover:text-secondary transition-all duration-500 ease-in-out"
              >
                <path 
                  fill-rule="evenodd" 
                  clip-rule="evenodd" 
                  d="M14.75 0C6.87687 0 0.5 6.53817 0.5 14.6104C0.5 21.0756 4.57906 26.5362 10.2434 28.4721C10.9559 28.5999 11.2231 28.1616 11.2231 27.7781C11.2231 27.4311 11.2053 26.2805 11.2053 25.0569C7.625 25.7326 6.69875 24.162 6.41375 23.3402C6.25344 22.9201 5.55875 21.6234 4.95312 21.2764C4.45438 21.0025 3.74187 20.3268 4.93531 20.3085C6.0575 20.2902 6.85906 21.3678 7.12625 21.8061C8.40875 24.0159 10.4572 23.395 11.2766 23.0114C11.4012 22.0618 11.7753 21.4226 12.185 21.0573C9.01437 20.692 5.70125 19.4319 5.70125 13.8434C5.70125 12.2545 6.25344 10.9396 7.16188 9.91683C7.01938 9.55157 6.52063 8.054 7.30438 6.04507C7.30438 6.04507 8.49781 5.66154 11.2231 7.54264C12.3631 7.2139 13.5744 7.04954 14.7856 7.04954C15.9969 7.04954 17.2081 7.2139 18.3481 7.54264C21.0734 5.64328 22.2669 6.04507 22.2669 6.04507C23.0506 8.054 22.5519 9.55157 22.4094 9.91683C23.3178 10.9396 23.87 12.2362 23.87 13.8434C23.87 19.4501 20.5391 20.692 17.3684 21.0573C17.885 21.5139 18.3303 22.3905 18.3303 23.7602C18.3303 25.7144 18.3125 27.285 18.3125 27.7781C18.3125 28.1616 18.5797 28.6182 19.2922 28.4721C22.121 27.4928 24.5791 25.6288 26.3206 23.1422C28.0621 20.6556 28.9991 17.6717 29 14.6104C29 6.53817 22.6231 0 14.75 0Z" 
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="slider mt-20 lg:hidden">
          <div class="slide-track">
            <div class="slide flex justify-center items-center bg-primary">
              <icon-css class="w-20 h-20"/>
            </div>
            <div class="slide flex justify-center items-center bg-primary">
              <icon-html class="w-20 h-20"/>
            </div>
            <div class="slide flex justify-center items-center bg-primary">
              <icon-vue class="w-20 h-20"/>
            </div>
            <div class="slide flex justify-center items-center bg-primary">
              <icon-nuxt class="w-20 h-20"/>
            </div>
            <div class="slide flex justify-center items-center bg-primary">
              <icon-firebase class="w-20 h-20"/>
            </div>
            <div class="slide flex justify-center items-center bg-primary">
              <icon-javascript class="w-20 h-20"/>
            </div>
            
            <div class="slide flex justify-center items-center bg-primary">
              <icon-css class="w-20 h-20"/>
            </div>
            <div class="slide flex justify-center items-center bg-primary">
              <icon-html class="w-20 h-20"/>
            </div>
            <div class="slide flex justify-center items-center bg-primary">
              <icon-vue class="w-20 h-20"/>
            </div>
            <div class="slide flex justify-center items-center bg-primary">
              <icon-nuxt class="w-20 h-20"/>
            </div>
            <div class="slide flex justify-center items-center bg-primary">
              <icon-firebase class="w-20 h-20"/>
            </div>
            <div class="slide flex justify-center items-center bg-primary">
              <icon-javascript class="w-20 h-20"/>
            </div>
            
            <div class="slide flex justify-center items-center bg-primary">
              <icon-css class="w-20 h-20"/>
            </div>
            <div class="slide flex justify-center items-center bg-primary">
              <icon-html class="w-20 h-20"/>
            </div>
            <div class="slide flex justify-center items-center bg-primary">
              <icon-vue class="w-20 h-20"/>
            </div>
            <div class="slide flex justify-center items-center bg-primary">
              <icon-nuxt class="w-20 h-20"/>
            </div>
            <div class="slide flex justify-center items-center bg-primary">
              <icon-firebase class="w-20 h-20"/>
            </div>
            <div class="slide flex justify-center items-center bg-primary">
              <icon-javascript class="w-20 h-20"/>
            </div>
          </div>
        </div>
        <div id="direction" class="hidden xl:flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 h-screen w-screen">
          <div class="absolute top-[73%] transform translate-x-[30vw] rotate-[26deg]">
            <span class="bg-white absolute lg:py-5 px-20 lg:text-8xl text-primary font-semibold" data-scroll data-scroll-direction="horizontal" data-scroll-speed="20" data-scroll-target="#direction" data-scroll-delay="0.05">CSS</span>
          </div>
          <div class="absolute top-[15%] transform translate-x-[-20vw]">
            <span class="bg-white absolute lg:py-5 px-20 lg:text-8xl text-primary font-semibold" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-20" data-scroll-target="#direction" data-scroll-delay="1.05">VUEJS</span>
          </div>
          <div class="absolute top-[10%] transform translate-x-[30vw] rotate-[90deg]">
            <span class="bg-white absolute lg:py-5 px-20 lg:text-8xl text-primary font-semibold" data-scroll data-scroll-direction="horizontal" data-scroll-speed="7" data-scroll-target="#direction" data-scroll-delay="0.05">NUXTJS</span>
          </div>
          <div class="absolute top-[88%] transform -translate-x-[50vw] rotate-[-26deg]">
            <span class="bg-white absolute lg:py-5 px-20 lg:text-8xl text-primary font-semibold" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-12" data-scroll-target="#direction" data-scroll-delay="0.05">HTML</span>
          </div>
          <div class="absolute top-[50%] transform -translate-x-[55vw] rotate-[-30deg]">
            <span class="bg-white absolute lg:py-5 px-20 lg:text-8xl text-primary font-semibold" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-12" data-scroll-target="#direction" data-scroll-delay="1.00">FIREBASE</span>
          </div>
          <div class="absolute top-[75%] transform">
            <span class="bg-white absolute lg:py-5 px-20 lg:text-8xl text-primary font-semibold" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-50" data-scroll-target="#direction" data-scroll-delay="0.05">SASS</span>
          </div>
          <div class="absolute top-[40%] transform translate-x-[40vw] rotate-[90deg]">
            <span class="bg-white absolute lg:py-5 px-20 lg:text-8xl text-primary font-semibold" data-scroll data-scroll-direction="horizontal" data-scroll-speed="20" data-scroll-target="#direction" data-scroll-delay="0.05">SQL</span>
          </div>
        </div>
      </section>
      <section id="portfolio" data-scroll-section class="w-full min-h-screen mx-auto p-5 lg:p-0 flex flex-col justify-center items-center space-y-10 z-10">
        <h2 class="text-5xl font-bold text-secondary">My Portfolio</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <work-card
            v-for="(work, index) in works"
            :key="index"
            :work-name="work.name"
            :work-image="work.image"
            :work-description="work.description"
            :work-link="work.link"
            :work-technology="work.technology"
            class=" max-h-80"
          />
        </div>
      </section>
      <section id="contact" data-scroll-section class="w-full container min-h-screen mx-auto p-5 lg:p-0 flex flex-col justify-center items-center space-y-10 z-10">
        <h2 class="text-5xl font-bold text-secondary">Contact Me</h2>
        <p>You want to work with me? Write me your project</p>
        <form class="w-full max-w-7xl min-w-max space-y-10 z-40" @submit.prevent="sendEmail">
          <div class="flex flex-wrap">
            <div class="relative w-full appearance-none">
              <input
                id="name"
                name="name"
                type="text"
                v-model="name"
                placeholder="Enter your name"
                class="peer placeholder-transparent tracking-wide py-2 px-3 leading-relaxed appearance-none block w-full rounded
                bg-primary border border-white 
                focus:bg-white/30 focus:outline-none"
              />
              <label 
                for="name" 
                class="
                  absolute 
                  left-0 -top-7
                  transition-all
                  peer-placeholder-shown:top-2
                  peer-placeholder-shown:left-3
                  peer-focus:-top-7
                  peer-focus:left-0"
                >Enter your name</label>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="relative w-full appearance-none">
              <input 
                id="email" 
                name="email" 
                type="email" 
                v-model="email" 
                placeholder="Enter your email address"
                class="peer placeholder-transparent tracking-wide py-2 px-3 leading-relaxed appearance-none block w-full rounded
                bg-primary border border-white 
                focus:bg-white/30 focus:outline-none"
              />
              <label 
                for="email" 
                class="
                  absolute 
                  left-0 -top-7
                  transition-all
                  peer-placeholder-shown:top-2
                  peer-placeholder-shown:left-3
                  peer-focus:-top-7
                  peer-focus:left-0"
                >Enter your email address</label>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="relative w-full appearance-none">
              <textarea 
              id="message"
              name="message" 
              v-model="message" 
              placeholder="Enter your message"
              class="peer placeholder-transparent tracking-wide py-2 px-3 leading-relaxed appearance-none block w-full h-52 rounded
              bg-primary border border-white 
              focus:bg-white/30 focus:outline-none" 
              />
              <label for="message" class="
                absolute 
                left-0 -top-7
                transition-all
                peer-placeholder-shown:top-2
                peer-placeholder-shown:left-3
                peer-focus:-top-7
                peer-focus:left-0"
              >Enter your message</label>
            </div>
          </div>
          <div class="w-full flex flex-col-reverse md:flex-row gap-3 justify-center items-center md:justify-between md:items-start">
            <div class="flex justify-center overflow-hidden">
              <button type="button" @click="copyEmail()" class="hover-underline-animation">Use your mail service?</button>
            </div>
            <div class="appearance-none w-full md:w-auto">
              <input
                type="submit" 
                value="Send"
                class="cursor-pointer w-full md:w-auto tracking-wide leading-relaxed appearance-none block rounded
                bg-secondary
                hover:bg-secondary/70
                px-5 py-1"/>
            </div>
          </div>
        </form>
      </section>
      <section id="copyright" data-scroll-section class="w-full container mx-auto text-base p-5">
        <p class="text-center">© Zokiasu 2022</p>
      </section>
    </div>
    <!--<div class="absolute bottom-10 right-10 z-50" :class="scrollpx > 800 ? 'flex' : 'hidden'">
      <a data-scroll-to href="#home">
        <icon-arrow-up class="w-10 h-10 text-white"/>
      </a>
    </div>-->
    <div class="hidden absolute space-x-5 top-10 right-0 md:flex-row-reverse md:space-x-reverse md:bottom-20 md:left-0 md:top-auto md:right-auto md:flex items-center justify-center z-10">
      <a href="https://www.linkedin.com/in/pierrick-taily/" target="_blank">
        <icon-linkedin class="w-8 h-8 hover:text-secondary transition-all duration-500 ease-in-out"/>
      </a>
      <a href="https://github.com/Zokiasu" target="_blank">
        <icon-github class="w-8 h-8 hover:text-secondary transition-all duration-500 ease-in-out"/>
      </a>
      <div>
        <div class="border-b-2 border-white bg-red-500 w-10 lg:w-20"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import data from '~/project.json'
  import{ init } from '@emailjs/browser';
  import emailjs from '@emailjs/browser';
  init("user_LjdyAMDHMFXk6Or6Ffd5a");

  export default {
    name: 'app',
    
    data() {
      return {
        works: data,
        name:"",
        email:"",
        message:"",
        scroll: null,
        scrollpx: 0
      };
    },

    mounted() {
      this.scroll = new this.locomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
      });
    },

    methods: {
      sendEmail: function(e) {
          if(this.message != "" || this.message != undefined) {
              emailjs.sendForm('service_98p270n', 'template_0sow3ga', e.target, 'user_LjdyAMDHMFXk6Or6Ffd5a')
              .then((result) => {
                  console.log('SUCCESS!', result.status, result.text);
                  this.message = ""
                  this.name = ""
                  this.email = ""
              }, (error) => {
                  console.log('FAILED...', error);
              });
          }
      },

      copyEmail() {
        console.log("copy")
        navigator.clipboard.writeText("pierrick.tly@gmail.com");
        this.$toasted.show("Email copied!", {
          position: "bottom-center", 
          duration : 5000
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hide-picture {
    opacity: 0;
    transition: opacity 1s;
  }
  .scroll-class-opacity {
    opacity: 1;
  }



$animationSpeed: 70s;

// Animation
@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
}


// Styling
.slider {
	background: #0e141b;
	//box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
	height: 100px;
	margin: auto;
	overflow:hidden;
	position: relative;
	width: auto;
	
	.slide-track {
		animation: scroll $animationSpeed linear infinite;
		display: flex;
		width: calc(250px * 14);
	}
	
	.slide {
		height: 100px;
		width: 150px;
	}
}
</style>