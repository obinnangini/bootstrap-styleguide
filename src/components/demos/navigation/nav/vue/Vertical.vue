<template>
<div>
  <b-nav vertical>
    <b-nav-item :active="this.active === 0" @click="selectLink(0)">Active</b-nav-item>
    <b-nav-item :active="this.active === 1" @click="selectLink(1)">Link</b-nav-item>
    <b-nav-item-dropdown id="nav7_ddown" text="Dropdown" right>
      <b-dropdown-item>one</b-dropdown-item>
      <b-dropdown-item>two</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>three</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
  <b-collapse id="collapse1" v-model="collapse[0]" class="mt-2">
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Molestiae tempore excepturi nulla dolorem perferendis, doloribus placeat quae dolore.
      Fugit aut perferendis accusantium nobis cumque eius cum corporis alias sit ab.
    </div>
  </b-collapse>
  <b-collapse id="collapse2" v-model="collapse[1]" class="mt-2">
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Iusto fugit expedita, nam beatae earum amet, odit culpa excepturi dolore,
      eum eligendi commodi porro facilis animi omnis harum sunt rerum officia!
      </div>
  </b-collapse>
</div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      collapse: [true, false],
    };
  },
  methods: {
    selectLink(key) {
      this.active = key;
      for (let i = 0; i < this.collapse.length; i++) {
        this.collapse[i] = false;
      }
      this.collapse[key] = true;
    },
  },
};
</script>
