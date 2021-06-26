<template>
  <WeatherReview />
</template>

<script>
import WeatherReview from "@/components/WeatherReview.vue";

export default {
  name: "Weather",
  components: {
    WeatherReview
  },
  data() {
    return {
      show: false,
      error: false,
      fromInput: "",
      items: {}
    };
  },

  methods: {
    get() {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.fromInput}&APPID=d9cc3d8bf5d0942d3b954aad9c4e7acd&units=metric&lang=ru`
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
          if (this.fromInput) {
            this.error = true;
          }
          console.log(this.error);
          throw new Error("Некорректный запрос");
        });
    },

    disableError() {
      this.error = false;
      this.fromInput = "";
    }
  }
};
</script>