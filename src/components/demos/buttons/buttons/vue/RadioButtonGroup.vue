<template>
  <div class="btn-group" data-toggle="buttons">
  <button class="btn btn-secondary" :class="{active: active==='left'}" @click.prevent="selectButton('left', $event)">
   Left
  </button>
  <button class="btn btn-secondary" :class="{active: active==='middle'}" @click.prevent="selectButton('middle', $event)">
    Middle
  </button>
  <button class="btn btn-secondary" :class="{active: active==='right'}" @click.prevent="selectButton('right', $event)">
   Right
  </button>
</div>
</template>

<script>
export default {
  name: 'RadioButtonGroup',
  data() {
    return {
      active: null,
    };
  },
  methods: {
    selectButton(btn, event) {
      event.stopPropagation();
      if (this.active === btn) {
        this.active = null;
      } else {
        this.active = btn;
      }
    },
  },
};
</script>
