<template>
  <main class="container-fluid" style="margin-bottom:20px;">
    <div class="row">
      <div class="col-md-2">
        <SideNav></SideNav>
      </div>
      <div class="col-md-10">
        <div style="max-width:1200px;">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SideNav from './SideNav.vue';

export default {
  name: 'Components',
  data() {
    return {

    };
  },
  mounted() {
    document.addEventListener('click', (event) => {
      if (event.target.nodeName === 'A' && event.target.href.indexOf('#') === event.target.href.length - 1) {
        event.preventDefault();
      }
    });

    document.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  },
  components: {
    SideNav,
  },
};
</script>

