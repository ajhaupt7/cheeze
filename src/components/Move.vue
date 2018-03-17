<template>
  <div class="move">
    <div class="move-color" :style="moveColorStyles"></div>
    <div class="move-id">{{ id }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'move',
  props: {
    id: String,
    colorType: String,
  },
  computed: {
    ...mapState([
      'colors',
    ]),
    moveColorStyles() {
      return {
        background: this.colors[this.colorType],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.move {
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin: $gutters;
  font-weight: $font-weight-thick;
}

.move-color {
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  margin-right: 5px;
  box-shadow: $shadow;
}
</style>
