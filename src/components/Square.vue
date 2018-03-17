<template>
  <div
    :class = "squareClasses"
    :style = "squareStyles"
    @click = "handleSquareClick"
  >
    <transition name="current-icon" appear>
      <div class="current-icon" :style="rankFileStyles">
        <checkmark-icon v-if="isCurrentMove" />
      </div>
    </transition>
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
import { mapState, mapActions, mapGetters } from 'vuex';
import { COLORS } from '../constants';
import CheckmarkIcon from './CheckmarkIcon';

export default {
  name: 'square',
  props: {
    rank: Number,
    file: String,
  },
  components: {
    CheckmarkIcon,
  },
  computed: {
    ...mapState([
      'colors',
    ]),
    ...mapGetters([
      'currentMoveId',
    ]),
    isCurrentMove() {
      return this.currentMoveId === `${this.file}${this.rank}`;
    },
    isDark() {
      return (this.file.charCodeAt(0) + this.rank) % 2 === 0;
    },
    displayRank() {
      return this.file === 'a';
    },
    displayFile() {
      return this.rank === 1;
    },
    rankFileStyles() {
      const { dark, light } = this.colors;
      const color = this.isDark ? light : dark;

      return { color };
    },
    squareColorType() {
      return this.isDark ? COLORS.DARK : COLORS.LIGHT;
    },
    squareClasses() {
      return ['square', { 'current-move': this.isCurrentMove }];
    },
    squareStyles() {
      const { dark, light } = this.colors;
      return {
        background: this.isDark ? dark : light,
      };
    },
  },
  methods: {
    ...mapActions([
      'registerMove',
    ]),
    handleSquareClick() {
      this.registerMove({
        id: `${this.file}${this.rank}`,
        colorType: this.squareColorType,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.square {
  width: 100%;
  height: percentage(1/8);
  position: relative;
  cursor: pointer;
  transition: all 650ms $ease;
  &.current-move {
    box-shadow: $shadow-lg;
    border-bottom: 5px solid rgba($gray-dark, 0.75);
  }
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
    transition: opacity 650ms $ease;
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

.current-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.current-icon-enter-active,
.current-icon-leave-active
{
  transition: all 650ms $ease;
}

.current-icon-enter,
.current-icon-leave-to {
  opacity: 0;
  transform: translateY(-#{$gutters * 2});
}
</style>
