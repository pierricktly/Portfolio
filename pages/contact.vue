<template>
  <page-template titlePage="Contact">
    <p class="text-sm lg:text-lg my-5 text-center">Une idée ?  Un projet ?  N'hésitez pas contactez-moi !</p>
    <form class="w-full mx-auto max-w-7xl min-w-max space-y-12 z-40 mt-10 lg:mt-20" @submit.prevent="sendEmail">
      <div class="flex flex-wrap">
        <div class="relative w-full appearance-none">
          <input
            id="name"
            name="name"
            type="text"
            v-model="name"
            placeholder="Enter your name"
            minlength="3"
            class="peer placeholder-transparent tracking-wide py-2 px-3 leading-relaxed appearance-none block w-full rounded
            bg-transparent border border-white 
            focus:bg-white/30 focus:outline-none"
          />
          <label 
            for="name" 
            class="
              absolute 
              left-0 -top-8
              transition-all
              peer-placeholder-shown:top-2
              peer-placeholder-shown:left-3
              peer-focus:-top-8
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
            bg-transparent border border-white 
            focus:bg-white/30 focus:outline-none"
          />
          <label 
            for="email" 
            class="
              absolute 
              left-0 -top-8
              transition-all
              peer-placeholder-shown:top-2
              peer-placeholder-shown:left-3
              peer-focus:-top-8
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
            minlength="10"            
            class="peer placeholder-transparent tracking-wide py-2 px-3 leading-relaxed appearance-none block w-full h-52 rounded
            bg-transparent border border-white 
            focus:bg-white/30 focus:outline-none" 
          />
          <label for="message" class="
            absolute 
            left-0 -top-8
            transition-all
            peer-placeholder-shown:top-2
            peer-placeholder-shown:left-3
            peer-focus:-top-8
            peer-focus:left-0"
          >Enter your message</label>
        </div>
      </div>
      <div class="w-full flex flex-col-reverse md:flex-row gap-3 justify-center items-center md:justify-between md:items-start">
        <div class="flex justify-center overflow-hidden">
          <button type="button" @click="copyEmail()" class="hover-underline-animation">Click here to copy my mail address</button>
        </div>
        <div class="appearance-none w-full md:w-auto">
          <input
            type="submit" 
            value="Send"
            class="cursor-pointer w-full md:w-auto tracking-wide leading-relaxed appearance-none block rounded
            bg-primary hover:bg-primary/70 px-5 py-1 transition-all ease-in-out duration-500"
          />
        </div>
      </div>
    </form>
  </page-template>
</template>

<script>
  import{ init } from '@emailjs/browser';
  import emailjs from '@emailjs/browser';
  init("user_LjdyAMDHMFXk6Or6Ffd5a");

  export default {
    name: 'Contact',

    data() {
      return {
        name:"",
        email:"",
        message:"",
      };
    },

    methods: {
      sendEmail: function(e) {
          console.log(this.message, this.name, this.email)
          if((this.message != "" && this.message != undefined && this.message != null) && 
            (this.name != "" && this.name != undefined && this.name != null) && 
            (this.email != "" && this.email != undefined && this.email != null)) 
          {
              emailjs.sendForm('service_98p270n', 'template_0sow3ga', e.target, 'user_LjdyAMDHMFXk6Or6Ffd5a')
              .then((result) => {
                this.message = ""
                this.name = ""
                this.email = ""
                this.$toasted.show("Votre message a bien été envoyé !", {
                  position: "bottom-center",
                  duration: 5000,
                });
                console.log('SUCCESS!', result.status, result.text);
              }, (error) => {
                console.log('FAILED...', error);
                this.$toasted.error("Oops...Quelque chose s'est mal passé !", {
                  position: "top-center",
                  duration: 5000,
                });
              });
          } else {
            this.$toasted.error("Tout les champs doivent être remplie !", {
              position: "top-center",
              duration: 5000,
            });
          }
      },
      copyEmail() {
        navigator.clipboard.writeText("pierrick.tly@gmail.com");
        this.$toasted.show("Email copied!", {
          position: "bottom-center",
          duration: 5000,
        });
      },
    },
  }
</script>