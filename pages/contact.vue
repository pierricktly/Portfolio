<template>
  <div class="container mx-auto p-5 flex flex-col justify-center items-center h-screen text-white space-y-14">
    <!-- formulaire contact -->
    <h2 class="text-5xl font-bold text-secondary">Contact Me</h2>
    <p class="text-xl">You want to work with me? Write me your project</p>
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
      <div class="w-full flex flex-col-reverse md:flex-row gap-3 justify-center items-center md:justify-between md:items-start">
        <div class="flex justify-center overflow-hidden">
          <button type="button" :onclick="copyEmail()" class="hover-underline-animation">Use your mail service?</button>
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
  </div>
</template>

<script>
  import{ init } from '@emailjs/browser';
  import emailjs from '@emailjs/browser';
  init("user_LjdyAMDHMFXk6Or6Ffd5a");
  
  export default {
    name: "Contact",

    created(){
      this.$ga.page('/contact')
    },

    data() {
      return {
        name:"",
        email:"",
        message:"",
      };
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
          } else {
            //OK
          }
      },

      copyEmail() {
        navigator.clipboard.writeText("pierrick.tly@gmail.com");
      }
    }
  }
</script>