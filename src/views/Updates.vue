<template>
  <div>
    <div class="display-3 center-title">Updates</div>
    <div class="link-container">
      <div v-for="u of updates">
        <update-card :id="u.id" :title="u.title" :subtitle="u.title" :content="u.content" :image="u.image"
          :gradient="`to top, rgba(100,115,201,.1), ${u.color}`" :height="250" :width="460"/>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateCard from '../components/UpdateCard.vue';

export default {
  name: 'updates',
  components: { UpdateCard },
  data() {
    return {
      updates: this.$store.state.update_meta
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
</style>
