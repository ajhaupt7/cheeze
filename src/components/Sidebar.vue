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
  display: inline-block;
  margin-left: $gutters;
  background: white;
  border-radius: $corners;
  box-shadow: $shadow;
}

header {
  font-weight: $font-weight-thick;
  font-size: $font-size-lg;
  text-align: center;
  background: $gray-dark;
  padding: $gutters;
  border-top-right-radius: $corners;
  border-top-left-radius: $corners;
  color: white;
}

article {
  padding: $gutters;
}
</style>
