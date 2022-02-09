<template>
  <div>
    <div data-scroll-container class="overflow-y-scroll flex flex-col text-white lg:text-xl">
      <section id="home" data-scroll-section class="w-full min-h-screen mx-auto p-5 lg:p-0 flex flex-col justify-center items-center space-y-10">
        <div
          data-scroll 
          data-scroll-speed="2" 
          class="w-full flex justify-center"
        >
          <p class="text-center whitespace-pre-line leading-loose text-xl lg:text-4xl">
            Hello, I'm
            <span class="font-bold text-5xl lg:text-7xl text-secondary">Pierrick</span>
            a Frontend Developer
          </p>
        </div>
        <div class="w-full flex justify-center">
          <img alt="Profile picture" src="../assets/images/profile_picture.png" class="bg-gray-500 w-48 lg:w-80 rounded-full aspect-square"/>
        </div>
        <div
          data-scroll 
          data-scroll-speed="2" 
          class="space-x-5 text-xl w-full flex justify-center"
        >
          <a href="#about" data-scroll-to class="border border-secondary px-5 py-2 text-secondary rounded
          hover:bg-secondary/10">About</a>
          <a href="#contact" data-scroll-to class="bg-secondary px-5 py-2 rounded
          hover:bg-secondary/70">Contact</a>
        </div>
      </section>
      <section id="about" data-scroll-section class="w-full min-h-screen mx-auto relative p-5 lg:p-0 flex flex-col justify-center items-center">
        <div class="flex flex-col items-center">
          <h2 id="fixed-element" 
            class="text-5xl font-bold text-secondary z-10"
          >About Me</h2>
          <p 
            class="text-center whitespace-pre-line leading-loose md:text-xl lg:text-2xl xl:text-3xl max-w-2xl z-10">
            I’m a french frontend developer, based in Paris. 
            Passionate about development and travel, I have multiple sources of inspiration and I have no shortage of new ideas for new projects or improvements.
          </p>
        </div>
        <div id="direction" class="hidden 2xl:block overflow-hidden">
          <div class="absolute top-[73%] transform translate-x-[20vw] rotate-[26deg]">
            <span class="bg-white absolute lg:py-5 px-20 lg:text-8xl text-primary font-semibold" data-scroll data-scroll-direction="horizontal" data-scroll-speed="20" data-scroll-target="#direction" data-scroll-delay="0.05">CSS</span>
          </div>
          <div class="absolute top-[15%] transform translate-x-[-30vw]">
            <span class="bg-white absolute lg:py-5 px-20 lg:text-8xl text-primary font-semibold" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-12" data-scroll-target="#direction" data-scroll-delay="0.05">VUEJS</span>
          </div>
          <div class="absolute top-[10%] transform xl:translate-x-[40vw] 2xl:translate-x-[30vw] rotate-[90deg]">
            <span class="bg-white absolute lg:py-5 px-20 lg:text-8xl text-primary font-semibold" data-scroll data-scroll-direction="horizontal" data-scroll-speed="7" data-scroll-target="#direction" data-scroll-delay="0.05">NUXTJS</span>
          </div>
          <div class="absolute top-[88%] transform -translate-x-[50vw] rotate-[-26deg]">
            <span class="bg-white absolute lg:py-5 px-20 lg:text-8xl text-primary font-semibold" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-12" data-scroll-target="#direction" data-scroll-delay="0.05">HTML</span>
          </div>
          <div class="absolute top-[75%] transform translate-x-[-10vw]">
            <span class="bg-white absolute lg:py-5 px-20 lg:text-8xl text-primary font-semibold" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-50" data-scroll-target="#direction" data-scroll-delay="0.05">SASS</span>
          </div>
        </div>
      </section>
      <section id="portfolio" data-scroll-section class="w-full min-h-screen mx-auto p-5 lg:p-0 flex flex-col justify-center items-center space-y-10">
        <h2 data-scroll data-scroll-speed="2" class="text-5xl font-bold text-secondary">My Portfolio</h2>
        <div data-scroll data-scroll-speed="1" class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <work-card
            v-for="(work, index) in works"
            :key="index"
            :work-name="work.name"
            :work-image="work.image"
          />
        </div>
      </section>
      <section id="contact" data-scroll-section class="w-full container min-h-screen mx-auto p-5 lg:p-0 flex flex-col justify-center items-center space-y-10">
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
                placeholder="Votre nom"
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
                >Entrez votre nom</label>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="relative w-full appearance-none">
              <input 
                id="email" 
                name="email" 
                type="email" 
                v-model="email" 
                placeholder="Votre Email"
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
                >Entrez votre adresse mail</label>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="relative w-full appearance-none">
              <textarea 
              id="message"
              name="message" 
              v-model="message" 
              placeholder="Votre Message"
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
              >Entrez votre message</label>
            </div>
          </div>
          <div class="w-full flex justify-center lg:justify-end items-center space-x-5">
            <a class="hover:text-secondary" href="mailto:pierrick.tly@gmail.com">Prefer to use your mail service?</a>
            <div class="appearance-none">
              <input
                type="submit" 
                value="Send"
                class="cursor-pointer tracking-wide leading-relaxed appearance-none block rounded
                bg-secondary
                hover:bg-secondary/70
                px-5 py-2">
            </div>
          </div>
        </form>
      </section>
    </div>
    <div class="absolute bottom-20 left-0 flex items-center justify-center space-x-5 z-10">
      <div>
        <div class="border-b-2 border-white bg-red-500 w-10 lg:w-20"></div>
      </div>
      <svg 
        viewBox="0 0 29 29" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8 text-white"
      >
        <path 
          fill-rule="evenodd" 
          clip-rule="evenodd" 
          d="M3.52441e-07 2.38105C3.52441e-07 1.74956 0.25086 1.14393 0.697392 0.697395C1.14392 0.250863 1.74955 3.17427e-06 2.38105 3.17427e-06H26.1164C26.4293 -0.000507949 26.7393 0.0607119 27.0285 0.180158C27.3178 0.299604 27.5807 0.474929 27.8021 0.696098C28.0235 0.917266 28.1991 1.17993 28.3189 1.46906C28.4386 1.75819 28.5002 2.0681 28.5 2.38105V26.1164C28.5003 26.4294 28.439 26.7394 28.3194 27.0286C28.1998 27.3179 28.0243 27.5808 27.8031 27.8022C27.5818 28.0235 27.319 28.1991 27.0298 28.3189C26.7406 28.4386 26.4307 28.5002 26.1177 28.5H2.38105C2.06825 28.5 1.75853 28.4384 1.46956 28.3186C1.18059 28.1989 0.918052 28.0234 0.696934 27.8022C0.475817 27.5809 0.300457 27.3183 0.180875 27.0292C0.0612922 26.7402 -0.000169828 26.4305 3.52441e-07 26.1177V2.38105ZM11.2808 10.8663H15.14V12.8043C15.697 11.6902 17.122 10.6875 19.2634 10.6875C23.3687 10.6875 24.3416 12.9066 24.3416 16.9782V24.5204H20.1871V17.9058C20.1871 15.5869 19.63 14.2785 18.2154 14.2785C16.2528 14.2785 15.4366 15.6893 15.4366 17.9058V24.5204H11.2808V10.8663ZM4.15582 24.3429H8.31164V10.6875H4.15582V24.3416V24.3429ZM8.90625 6.23373C8.91409 6.58956 8.85077 6.94336 8.72001 7.27439C8.58926 7.60541 8.3937 7.90698 8.14482 8.16141C7.89594 8.41583 7.59875 8.61798 7.27068 8.75599C6.94261 8.894 6.59029 8.96509 6.23438 8.96509C5.87846 8.96509 5.52613 8.894 5.19807 8.75599C4.87 8.61798 4.57281 8.41583 4.32393 8.16141C4.07505 7.90698 3.87949 7.60541 3.74873 7.27439C3.61798 6.94336 3.55466 6.58956 3.5625 6.23373C3.57788 5.53529 3.86613 4.87064 4.36553 4.38212C4.86493 3.8936 5.53577 3.62004 6.23438 3.62004C6.93298 3.62004 7.60382 3.8936 8.10322 4.38212C8.60261 4.87064 8.89087 5.53529 8.90625 6.23373Z" 
          fill="white"
        />
      </svg>
      <svg 
        viewBox="0 0 29 29" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8 text-white"
      >
        <path 
          fill-rule="evenodd" 
          clip-rule="evenodd" 
          d="M14.75 0C6.87687 0 0.5 6.53817 0.5 14.6104C0.5 21.0756 4.57906 26.5362 10.2434 28.4721C10.9559 28.5999 11.2231 28.1616 11.2231 27.7781C11.2231 27.4311 11.2053 26.2805 11.2053 25.0569C7.625 25.7326 6.69875 24.162 6.41375 23.3402C6.25344 22.9201 5.55875 21.6234 4.95312 21.2764C4.45438 21.0025 3.74187 20.3268 4.93531 20.3085C6.0575 20.2902 6.85906 21.3678 7.12625 21.8061C8.40875 24.0159 10.4572 23.395 11.2766 23.0114C11.4012 22.0618 11.7753 21.4226 12.185 21.0573C9.01437 20.692 5.70125 19.4319 5.70125 13.8434C5.70125 12.2545 6.25344 10.9396 7.16188 9.91683C7.01938 9.55157 6.52063 8.054 7.30438 6.04507C7.30438 6.04507 8.49781 5.66154 11.2231 7.54264C12.3631 7.2139 13.5744 7.04954 14.7856 7.04954C15.9969 7.04954 17.2081 7.2139 18.3481 7.54264C21.0734 5.64328 22.2669 6.04507 22.2669 6.04507C23.0506 8.054 22.5519 9.55157 22.4094 9.91683C23.3178 10.9396 23.87 12.2362 23.87 13.8434C23.87 19.4501 20.5391 20.692 17.3684 21.0573C17.885 21.5139 18.3303 22.3905 18.3303 23.7602C18.3303 25.7144 18.3125 27.285 18.3125 27.7781C18.3125 28.1616 18.5797 28.6182 19.2922 28.4721C22.121 27.4928 24.5791 25.6288 26.3206 23.1422C28.0621 20.6556 28.9991 17.6717 29 14.6104C29 6.53817 22.6231 0 14.75 0Z" 
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
        return {
            title: "Zokiasu's Portfolio - Pierrick TAÏLY",
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Find all my latest works and a short presentation of myself. Don\'t hesitate to contact me if you want us to work together!.',
                }
            ]
        }
    },
    
    data() {
      return {
        works: [
          {
            name: "Project 1",
            image: "https://picsum.photos/400/200"
          },
          {
            name: "Project 2",
            image: "https://picsum.photos/400/200"
          },
          {
            name: "Project 3",
            image: "https://picsum.photos/400/200"
          },
          {
            name: "Project 4",
            image: "https://picsum.photos/400/200"
          },
        ],
        name:"",
        email:"",
        message:"",
        scroll: null
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
                  this.$toast.error(`Votre message a été envoyé`, {position:"top", duration: 5000, max:1});
              }, (error) => {
                  console.log('FAILED...', error);
              });
          } else {
              this.$toast.error(`Message box is empty`, {position:"top", duration: 5000, max:1});
          }
      }
    }
  }
</script>

<style>
  .hide-picture {
    opacity: 0;
    transition: opacity 1s;
  }
  .scroll-class-opacity {
    opacity: 1;
  }
</style>