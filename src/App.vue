<template>
  <v-app>

    <!-- Navigation -->
    <div>

      <!-- Navigation Bar - Tablet and Desktop -->
      <v-toolbar dense flat>
        <v-app-bar-nav-icon class="hidden-sm-and-up" @click="drawerOpen = !drawerOpen"/>
        <v-spacer/>
        <v-toolbar-items class="hidden-xs-only">

          <v-btn v-for="link in pageLinks" :to="link.linkTo" text color="primary">{{link.text}}</v-btn>

        </v-toolbar-items>
        <v-spacer/>
        <div style="position: fixed; right: 0">
          <v-list-item-avatar style="min-width: 0">
            <img src="./assets/logo.png" style="object-fit: cover">
          </v-list-item-avatar>
        </div>
        
      </v-toolbar>

      <!-- Drawer - Mobile -->
      <v-navigation-drawer v-model="drawerOpen" absolute temporary>
        <v-list>
          <div class="title" style="margin: 10px auto; text-align: center;">Softbody Stylization</div>
          <v-list-item v-for="link in pageLinks" :to="link.linkTo">

            <v-list-item-icon> <v-icon color="accent">{{link.icon}}</v-icon> </v-list-item-icon>
            <v-list-item-content>{{link.text}}</v-list-item-content>

          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>

    <!-- Display the content of the page the user is looking at -->
    <div class="content-boundaries"><router-view/></div>

  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      drawerOpen: false,
      pageLinks: [
        {text: 'Home', linkTo: '/', icon: 'fas fa-home'},
        {text: 'Overview', linkTo: '/about', icon: 'fas fa-question-circle'},
        {text: 'Updates', linkTo: '/updates', icon: 'fas fa-comments'},
        {text: 'About Us', linkTo: '/team', icon: 'fas fa-address-card'},
      ]
    };
  },
  computed: {
    displayRouter() {
      return this.$route && this.$route.name != 'home';
      // return true;
    }
  }
};
</script>

<style>
.content-boundaries {
  margin: 10px;
}

.center-title {
  text-align: center; 
  margin: 20px 0px;
}

.update-text {
  max-width: 1000px;
  margin: auto;
}

@media only screen and (max-width: 950px) {
  .update-text {
    max-width: 100%;
  }
}
</style>
