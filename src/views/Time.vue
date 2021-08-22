<template>
  <div class="time">
    <h1>{{ clock }}</h1>
  </div>
</template>

<script>
export default {
  name: "Time",
  data() {
    return {
      clock: "",
      date: null
    };
  },
  mounted() {
    setInterval(() => {
      this.date = new Date();
      this.clock = this.date.toLocaleTimeString("en-GB", {
        timeZone: "Europe/Samara"
      });
    }, 1000);
  }
};
</script>
