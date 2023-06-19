<template>
  <div>
    <div class="fixed top-0 w-full justify-between p-10 hidden bg-gradient-to-b from-secondary to-transparent lg:flex z-50">
      <nuxt-link to="/">
        <h1 class="text-xl font-bold bookman hover:fill-text">Pierrick Taïly</h1>
      </nuxt-link>
      <ul class="flex space-x-5">
				<li>
					<a href="https://www.linkedin.com/in/pierrick-taily/" target="_blank">
						<icon-linkedin class="w-6 h-6 transition-all ease-in-out duration-300 hover:text-primary"/>
					</a>
				</li>
				<li>
					<a href="https://github.com/pierricktly" target="_blank">
						<icon-github class="w-6 h-6 transition-all ease-in-out duration-300 hover:text-primary"/>
					</a>
				</li>
				<li>
					<a href="https://www.malt.fr/profile/pierricktly" target="_blank">
						<icon-malt class="w-6 h-6 transition-all ease-in-out duration-300 hover:text-primary"/>
					</a>
				</li>
			</ul>
    </div>
    <nav ref="navBar" class=" transition-all duration-500 ease-in-out fixed font-bold pb-5 xl:pb-10 bottom-0 left-0 right-0 bg-gradient-to-t from-secondary to-transparent z-50">
      <div 
        class="flex items-center justify-center space-x-0.5"
      >
        <nuxt-link-nav
          icon="icon-house"
          text="Accueil"
          label="acceuil"
          path="/"
          left
        />
        <nuxt-link-nav
          icon="icon-profile"
          text="A Propos"
          label="a propos"
          path="/about"
        />
        <nuxt-link-nav
          icon="icon-project"
          text="Projet"
          label="projet"
          path="/project"
        />
        <nuxt-link-nav
          icon="icon-contact"
          text="Contact"
          label="contact"
          path="/contact"
          right
        />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>