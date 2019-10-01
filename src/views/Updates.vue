<template>
  <div>
    <div class="display-3 center-title">Updates</div>
    <div v-for="u of updates">
      <update-card :title="u.title" :subtitle="u.title" :content="u.content"/>
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
