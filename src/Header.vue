<template>
<b-navbar toggleable="md" type="dark" variant="primary">

  <b-navbar-brand href="/#/">Obi Bootstrap Style Guide</b-navbar-brand>

  <b-nav-toggle target="nav_collapse"></b-nav-toggle>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <!-- <li class="nav-item"><span class="nav-link">Dark</span></li> -->
        <input type="checkbox" id="themeSwitcher" @change="switchTheme" class="tgl tgl-skewed">
        <label class="tgl-btn" for="themeSwitcher" data-tg-on="LIGHT" data-tg-off="DARK"></label>
        <!-- <div class="switch_box box_1">
          <div class="toggle_switch">
          </div>
        </div> -->
        <!-- <li class="nav-item"><span class="nav-link">Light</span></li> -->
      </b-nav-form>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return { theme: document.documentElement.className };
  },
  methods: {
    switchTheme(e) {
      e.preventDefault();
      document.documentElement.className = e.target.checked ? 'light' : 'dark';
      this.theme = document.documentElement.className;
    },
  },
};
</script>

