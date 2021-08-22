<template>
  <div class="weather">
    <input
      :class="classObject"
      type="text"
      placeholder="Введите город"
      v-model="$parent.fromInput"
      @focus="$parent.disableError()"
    />
    <span class="weather__error-text" v-show="$parent.error">такого города нет</span>
    <div>
      <button class="weather__send-btn" @click="$parent.get()">Показать погоду</button>
    </div>
    <div class="weather__show" v-show="$parent.show">
      <p>{{ item.city }}</p>
      <p>{{ item.weather }}</p>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "WeatherReview",
  props: {
    item: Object
  },
  computed: {
    classObject: function() {
      return {
        weather__input: true,
        "weather__input--error": this.$parent.error
      };
    }
  }
};
</script>




