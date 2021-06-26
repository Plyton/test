<template>
  <div class="weather">
    <input
      class="weather__input"
      :class="calcClass"
      type="text"
      placeholder="Введите город"
      v-model="$parent.fromInput"
      @focus="$parent.disableError()"
    />
    <span class="weather-error" v-show="$parent.error">такого города нет</span>
    <div class="weather__wrp-button">
      <button class="weather__button" @click="$parent.get()">
        Показать погоду
      </button>
    </div>
    <div class="weather__show" v-show="$parent.show">
      <p>{{ $parent.items.city }}</p>
      <p>{{ $parent.items.weather }}</p>
      <p>{{ $parent.items.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "WeatherReview",
  props: {
    msg: String
  },
  computed: {
    calcClass() {
      return this.$parent.error ? "weather--border" : "weather__input";
    }
  }
};
</script>
<style  scoped>
.weather__input {
  border: #4caff1 solid 1px;
  background-color: azure;
  width: 150px;
  font-size: 18px;
  border-radius: 6px;
  padding: 5px 10px;
  box-sizing: border-box;
  text-align: center;
}

.weather__input::placeholder {
  color: #4caff1;
  font-size: 12px;
}

.weather__input:focus {
  outline: blue;
}
.weather__show {
  border: #4caff1 solid 2px;
  width: 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather-error {
  display: block;
  font-size: 12px;
  color: red;
  margin: 5px 0;
}

.weather__button {
  width: 130px;
  font-size: 15px;
  padding: 5px;
  border: none;
  text-transform: lowercase;
  border-radius: 10px;
  margin: 40px 0;
  box-shadow: 0 2px 5px 1px rgb(33 33 33 / 35%);
  background-color: #4caff1;
  transition: all 200ms ease-in;
}

.weather__button:hover {
  background-color: #45a3e2;
}

.weather__button:active {
  box-shadow: none;
}

.weather__show > :nth-child(1) {
  color: #4caff1;
}

.weather__show > :nth-child(1)::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: #4caff1;
  margin-top: 5px;
}

.weather--border {
  border: 1px solid red;
}
</style>

