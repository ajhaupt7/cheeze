<template>
  <section class="board">
    <div
      v-for = "(file, i) in files"
      :key  = "i"
      class = "ranks"
    >
      <square
        v-for  = "(rank, j) in ranks"
        :key   = "i + j"
        :file  = "file"
        :rank  = "rank"
      />
    </div>
  </section>
</template>

<script>
import Square from './Square';

export default {
  name: 'board',
  components: {
    Square,
  },
  data() {
    return {
      files: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
      ranks: [8, 7, 6, 5, 4, 3, 2, 1],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.board {
  width: 50vw;
  height: 50vw;
  max-width: calc(100vh - #{$gutters * 2});
  max-height: calc(100vh - #{$gutters * 2});
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  box-shadow: $shadow;
  overflow: hidden;
  flex: 0 0 50vw;
  border-radius: $corners;
}

.ranks {
  flex: 0 0 percentage(1/8);
  height: 100%;
}
</style>
