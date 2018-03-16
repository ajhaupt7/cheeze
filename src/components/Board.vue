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
.board {
  width: 800px;
  height: 800px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: stretch;
}
.ranks {
  width: percentage(1/8);
  height: 100%;
}
</style>
