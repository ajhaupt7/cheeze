<template>
  <footer class="settings">
    <div class="colors-select-wrapper">
      <div class="color-select">
        <header>
          Light Square Color
        </header>
        <swatches
          :colors  = "colorPaletteLight"
          :value  = "colors.light"
          :inline = "swatchSettings.inline"
          :shapes  = "swatchSettings.shapes"
          :swatch-size = "swatchSettings.size"
          @input  = "handleColorInput($event, 'light')"
        />
      </div>
      <div class="color-select">
        <header>
          Dark Square Color
        </header>
        <swatches
          :colors  = "colorPaletteDark"
          :value  = "colors.dark"
          :inline = "swatchSettings.inline"
          :shapes  = "swatchSettings.shapes"
          :swatch-size = "swatchSettings.size"
          @input  = "handleColorInput($event, 'dark')"
        />
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Swatches from 'vue-swatches';
import { COLORS, MATERIAL_COLOR_PALETTE } from '../constants';

export default {
  name: 'settings',
  components: {
    Swatches,
  },
  data() {
    return {
      swatchSettings: {
        inline: true,
        shapes: 'circles',
        size: '24',
      },
      colorPaletteLight: MATERIAL_COLOR_PALETTE[COLORS.LIGHT],
      colorPaletteDark: MATERIAL_COLOR_PALETTE[COLORS.DARK],
    };
  },
  computed: {
    ...mapState([
      'colors',
    ]),
  },
  methods: {
    ...mapActions([
      'updateSetting',
      'updateColor',
    ]),
    handleColorInput(color, colorType) {
      const type = colorType === 'dark' ? COLORS.DARK : COLORS.LIGHT;
      this.updateColor({
        [type]: color,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.settings {
  border-top: 1px solid $gray-light;
  width: 100%;
  min-height: 200px;
}

.colors-select-wrapper {
  padding: $gutters;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
}

.color-select {
  margin: ($gutters / 2) 0;
  min-width: 150px;
  flex: 1;
  header {
    padding: 5px 0;
    text-transform: uppercase;
    font-weight: $font-weight-thick;
    text-align: center;
  }
}

.vue-swatches {
  text-align: center;
}
</style>
