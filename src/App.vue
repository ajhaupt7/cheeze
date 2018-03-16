<template>
  <div id="app">
    <div class="container">
      <board />
      <sidebar />
    </div>
  </div>
</template>

<script>
import Board from './components/Board';
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  components: {
    Board,
    Sidebar,
  },
};
</script>

<style lang="scss">
@import './assets/styles/app.scss';

#app {
  max-width: 1280px;
  min-height: 100vh;
  padding: $gutters;
  margin: auto;
}

.container {
  display: flex;
  align-items: stretch;
  justify-content: center;
}
</style>
