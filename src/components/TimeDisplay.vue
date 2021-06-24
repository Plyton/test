<template>
  <div class="time">
    <h1>{{ $parent.clock }}</h1>
      </div>
</template>
<script>
export default {
  name: 'TimeDisplay',
  props: {
    msg: String
  }
}
</script>
<style scoped>
.time{
  color: #4caff1;
}
</style>

