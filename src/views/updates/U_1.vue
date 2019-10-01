<template>
  <div>
    <div class="display-3 center-title">{{meta.title}}</div>
    <div class="display-1 center-title">{{meta.subtitle}} - {{meta.date}}</div>

    <div class="update-text">This is the first update</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      meta: this.$store.state.update_meta[0]
    };
  }
};
</script>
