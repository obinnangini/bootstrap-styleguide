<template>
  <div class="btn-group" data-toggle="buttons">
  <button class="btn btn-secondary" :class="{active: left}" @click.prevent="selectButton('left', $event)">
   Left
  </button>
  <button class="btn btn-secondary" :class="{active: middle}" @click.prevent="selectButton('middle', $event)">
    Middle
  </button>
  <button class="btn btn-secondary" :class="{active: right}" @click.prevent="selectButton('right', $event)">
   Right
  </button>
</div>
</template>

<script>
export default {
  name: 'CheckboxButtonGroup',
  data() {
    return {
      left: false,
      middle: false,
      right: false,
    };
  },
  methods: {
    selectButton(btn, event) {
      // eslint-disable-next-line no-console
      // console.log('Event', event);
      event.stopPropagation();
      this[btn] = !this[btn];
    },
  },
};
</script>
