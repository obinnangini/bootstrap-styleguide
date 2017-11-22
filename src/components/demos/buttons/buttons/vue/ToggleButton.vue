<template>
  <button type="button" class="btn btn-primary" :aria-pressed="active ? 'true' : 'false'" :class="{active: active}" @click.prevent="selectButton">
  Single toggle
  </button>
</template>

<script>
export default {
  name: 'ToggleButton',
  data() {
    return {
      active: false,
    };
  },
  methods: {
    selectButton() {
      this.active = !this.active;
    },
  },
};
</script>

