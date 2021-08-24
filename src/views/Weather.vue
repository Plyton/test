<template>
  <div class="weather">
    <InputCity ref="input"/>
    <span class="weather__error-text" v-show="error">такого города нет</span>
    <div>
      <button class="weather__send-btn" @click="get()">Показать погоду</button>
    </div>
    <WeatherReview :item="items" />
  </div>
</template>

<script>
import WeatherReview from "@/components/WeatherReview.vue";
import InputCity from "@/components/InputCity.vue";

export default {
  name: "Weather",
  components: {
    WeatherReview,
    InputCity
  },
  data() {
    return {
      show: false,
      error: false,
      items: {}
    };
  },

  methods: {
    get() {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.$refs.input.fromInput}&APPID=d9cc3d8bf5d0942d3b954aad9c4e7acd&units=metric&lang=ru`
      )
        .then(d => d.json())
        .then(data => {
          this.show = false;
          this.items.city = data.name;
          this.items.weather = Math.round(data.main.temp) + "°";
          this.items.description = data.weather[0].description;
        })
        .then(() => {
          this.fromInput = "";
          this.show = true;
        })
        .catch(() => {
          if (this.$refs.input.fromInput) {
            this.error = true;
          }
          throw new Error("Некорректный запрос");
        });
    }
  }
};
</script>
