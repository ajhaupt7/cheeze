<template>
  <section class="sidebar">
    <header :style="headerStyles">
      Move Tracker
    </header>
    <article :class="movesWrapperClasses">
      <transition-group name="moves" tag="figure">
        <move
          v-for = "(move, i) in moves"
          :key  = "i"
          :id   = "move.id"
          :colorType = "move.colorType"
        />
      </transition-group>
      <transition name="moves-animate" appear>
        <div class="moves-empty" v-if="!hasMoves">
          Make a move and you'll see it appear here!
        </div>
      </transition>
      <transition name="moves-animate" appear>
        <a
          v-if   = "hasMoves"
          class  = "moves-reset"
          @click = "resetMoves"
        >
          Reset
        </a>
      </transition>
    </article>
    <settings />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Move from './Move';
import Settings from './Settings';
import { COLORS } from '../constants';

export default {
  name: 'sidebar',
  components: {
    Move,
    Settings,
  },
  computed: {
    ...mapState([
      'moves',
      'colors',
    ]),
    hasMoves() {
      return this.moves.length > 0;
    },
    movesWrapperClasses() {
      return { 'has-moves': this.hasMoves };
    },
    headerStyles() {
      return {
        backgroundColor: this.colors[COLORS.DARK],
      };
    },
  },
  methods: {
    ...mapActions([
      'resetMoves',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.sidebar {
  flex: 1;
  width: 100%;
  background: white;
  border-radius: $corners;
  box-shadow: $shadow;
  overflow: scroll;
  @media (min-width: $mobile) {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: $gutters;
  }
}

header {
  font-size: $font-size-lg;
  text-transform: uppercase;
  letter-spacing: 5px;
  text-align: center;
  background: $gray-dark;
  padding: $gutters;
  border-top-right-radius: $corners;
  border-top-left-radius: $corners;
  color: white;
  transition: all 500ms $ease;
}

article {
  padding: $gutters;
  display: block;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex: 1;
  position: relative;
  min-height: 100px;
  transition: all 500ms $ease;
  &.has-moves {
    padding-bottom: $gutters * 3;
  }
}

.moves-empty {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  padding: $gutters;
  width: 100%;
  text-align: center;
}

.moves-enter-active,
.moves-leave-active,
.moves-animate-enter-active,
.moves-animate-leave-active
{
  transition: all 650ms $ease;
}

.moves-enter,
.moves-leave-to {
  position: absolute;
  opacity: 0;
  transform: translateY(-#{$gutters * 2});
}

.moves-animate-enter,
.moves-animate-leave-to {
  position: absolute;
  opacity: 0;
}

.moves-reset {
  text-transform: uppercase;
  font-weight: $font-weight-thick;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: ($gutters / 2) $gutters;
  margin: $gutters;
  font-size: $font-size-sm;
  border-radius: $corners;
  border: 1px solid $gray-dark;
  background: transparent;
  cursor: pointer;
  transition: all 250ms $ease;
  letter-spacing: 2px;
  &:hover {
    background: $gray-dark;
    color: white;
  }
}
</style>
