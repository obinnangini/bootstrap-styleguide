<template>
  <!--
  <router-link class="nav-link" active-class="active" :to="{ name: 'Notifications' }" exact>Notifications</router-link>
  -->
  <nav class="nav flex-column">
    <router-link
      v-for="navLink in navLinks"
      :key="navLink.name"
      class="nav-link"
      active-class="active"
      :to="navLink.link"
      exact
      >
      {{navLink.name}}
    </router-link>
  </nav>
</template>
<script>
export default {
  name: 'SideNav',
  data() {
    return {
      navLinks: [
        { name: 'Navigation', link: 'navigation' },
        { name: 'Indicators', link: 'indicators' },
        { name: 'Notifications', link: 'notifications' },
        { name: 'Buttons', link: 'buttons' },
        { name: 'Containers', link: 'containers' },
        { name: 'Forms', link: 'forms' },
        { name: 'Progress', link: 'progress' },
        { name: 'Tables', link: 'tables' },
        { name: 'Typography', link: 'typography' },
        { name: 'Iconography', link: 'iconography' },
      ],
    };
  },
};
</script>
