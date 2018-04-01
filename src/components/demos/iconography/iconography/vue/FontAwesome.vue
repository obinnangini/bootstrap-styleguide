<template>
  <div style="width: 100%">
     <!-- If you are using the "Solid" style you can simply use the icon name -->
    <font-awesome-icon icon="spinner" />
    <!-- Using another style needs a prefix in the following array format -->
    <font-awesome-icon :icon="['fab', 'font-awesome']" />
    <font-awesome-icon :icon="icon" />
    <font-awesome-icon :icon="getIcon()" />
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import regular from '@fortawesome/fontawesome-free-regular';
import brands, { faCloudversify } from '@fortawesome/fontawesome-free-brands';
import solid, { faCoffee } from '@fortawesome/fontawesome-free-solid';

export default {
  data() {
    return {
      icon: faCloudversify,
    };
  },
  methods: {
    getIcon() {
      return faCoffee;
    },
  },
  components: {
    regular,
    solid,
    brands,
    FontAwesomeIcon,
  },
};
</script>
