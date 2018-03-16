<template>
  <div
    :class = "squareClasses"
    :style = "squareStyles"
  >
    <div
      v-if   = "displayFile"
      class  = "file"
      :style = "rankFileStyles"
    >
      {{ file }}
    </div>
    <div
      v-if   = "displayRank"
      class  = "rank"
      :style = "rankFileStyles"
    >
      {{ rank }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'square',
  props: {
    rank: Number,
    file: String,
  },
  computed: {
    ...mapState({
      colors: state => state.board.colors,
      threeDee: state => state.board.threeDee,
    }),
    squareColor() {
      const { dark, light } = this.colors;
      return (this.file.charCodeAt(0) + this.rank) % 2 === 0 ? dark : light;
    },
    displayRank() {
      return this.file === 'a';
    },
    displayFile() {
      return this.rank === 1;
    },
    rankFileStyles() {
      const { dark, light } = this.colors;
      const color = this.squareColor === dark ? light : dark;

      return { color };
    },
    squareClasses() {
      return ['square', { shadow: this.threeDee }];
    },
    squareStyles() {
      return { background: this.squareColor };
    },
  },
};
</script>

<style lang="scss" scoped>
.square {
  width: 100%;
  height: percentage(1/8);
  position: relative;
  cursor: pointer;

  &:hover {
    &:after {
      opacity: 1;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: rgba(black, 0.15);
    transition: all 550ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
}

.file,
.rank {
  position: absolute;
  padding: 0.5rem;
  font-weight: 700;
}

.rank {
  top: 0;
  left: 0;
}

.file {
  bottom: 0;
  right: 0;
}
</style>
