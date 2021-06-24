<template>
  <div class="time">
    <TimeDisplay msg="Time" />
  </div>
</template>

<script>

import TimeDisplay from "@/components/TimeDisplay.vue";

export default {
  name: "Time",
  components: {
    TimeDisplay
  },
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