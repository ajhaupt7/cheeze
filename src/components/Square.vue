<template>
  <div :class="squareClass">

  </div>
</template>

<script>
export default {
  name: 'square',
  props: ['rank', 'file'],
  data() {
    return {

    };
  },
  computed: {
    isDark() {
      return (this.file.charCodeAt(0) + this.rank) % 2 === 0;
    },
    squareClass() {
      return ['square', { dark: this.isDark }];
    },
  },
};
</script>

<style lang="scss" scoped>
.square {
  background: blue;
  width: 100%;
  height: percentage(1/8);
  &.dark {
    background: red;
  }
}
</style>
