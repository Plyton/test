<template>
  <input
    :class="classObject"
    type="text"
    placeholder="Введите город"
    v-model="fromInput"
    @focus="disableError()"
  />
</template>

<script>
export default {
  data() {
    return {
      fromInput: ""
    };
  },
  computed: {
    classObject: function() {
      return {
        weather__input: true,
        "weather__input--error": this.$parent.error
      };
    }
  },
  methods: {
    disableError() {
      this.$parent.error = false;
      this.fromInput = "";
    }
  }
};
</script>

<style>
</style>