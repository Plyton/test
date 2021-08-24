<template>
  <div class="weather__show" v-show="$parent.show">
    <p>{{ item.city }}</p>
    <p>{{ item.weather }}</p>
    <p>{{ item.description }}</p>
  </div>
</template>
<script>
export default {
  name: "WeatherReview",
  props: {
    item: Object
  }
};
</script>




