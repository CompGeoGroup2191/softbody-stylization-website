<template>
  <div>
    <div class="display-3 center-title">About Us</div>
    <div v-for="person of team">
      <div class="headline center-title" style="margin-bottom: 0">{{person.name}}</div>
      <v-divider style="max-width: 150px; margin: auto"/>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      team: [
        {name: 'Caleb Adrian' },
        {name: 'Joe Klesczewski' },
        {name: 'Robert Nill' },
        {name: 'Jimmy Moir' },
      ]
    };
  }
};
</script>
