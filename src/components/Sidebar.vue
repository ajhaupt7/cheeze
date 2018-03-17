<template>
  <section class="sidebar">
    <div class="sidebar-move-tracker">
      <header>
        Move Tracker
      </header>
      <article>

      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'sidebar',
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
}
</style>
