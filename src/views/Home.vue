<template>
  <div>
    <!-- Split the page up into four primary links, and a credits section at the bottom -->
    
    <!-- Page Title -->
    <div class="display-3 center-title"> Realtime Stylization of Softbody Deformations </div>

    <!-- Primary Links -->
    <div class="link-container">
      <div v-for="link in links">
        <a :href="link.linkTo" style="text-decoration: none;">
          <div class="clickable-card">
            <v-card max-width="400" style="margin: 20px" flat>
              <v-img src="https://placekitten.com/400/600" :gradient="`to top, rgba(100,115,201,.1), ${link.gradient}`" height="450px" max-width="260px">
                <v-card-title style="color: white">{{link.title}}</v-card-title>
              </v-img>

              <v-card-text> {{link.desc}}</v-card-text>
            </v-card>
          </div>
        </a>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      links: [
        {title: 'Overview', desc: 'Project description and background', linkTo: './#/about', gradient: 'rgba(25,32,72,.7)'},
        {title: 'Updates', desc: 'Regular updates on our progress', linkTo: './#/updates', gradient: 'rgba(25,72,35,.7)'}, 
        {title: 'About Us', desc: 'A little bit about us!', linkTo: './#/team', gradient: 'rgba(72,25,25,.7)'}, 
        {title: 'GitHub', desc: 'Find us on GitHub', linkTo: 'https://github.com/CompGeoGroup2191/Realtime-Stylization-of-Softbody-Deformations', gradient: 'rgba(65,25,72,.7)'} 
      ]
    };
  }
};
</script>

<style>
.link-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* .clickable-card:after:hover {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.3);
  left: 0;
  top: 0;
} */
.clickable-card {
  filter: none;
  -webkit-transition: all 0.5s;
}
.clickable-card:hover {
  filter: contrast(140%);
}

</style>
