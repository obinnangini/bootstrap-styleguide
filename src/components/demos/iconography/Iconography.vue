<template>
<div>
  <div class="row">
    <div class="col">
      <h2>Iconography</h2>
    </div>
  </div>
  <page-section title="Font Awesome">
    <page-sub-section
      slot="content"
      title="Default"
      :example-source="fontAwesomeHtml"
      >
      <div v-html="fontAwesomeHtml" slot="example"></div>
    </page-sub-section>
     <page-sub-section
      slot="content"
      title="Vue"
      :example-source="fontAwesomeVue"
      >
      <font-awesome-demo slot="example"></font-awesome-demo>
    </page-sub-section>
  </page-section>
   <page-section title="Open Iconic">
     <page-sub-section
      slot="content"
      title="Default"
      :example-source="openIconicHtml"
      >
      <div v-html="openIconicHtml" slot="example"></div>
    </page-sub-section>

  </page-section>
</div>
</template>

<script>
import Section from '../Section.vue';
import SubSection from '../SubSection.vue';
import fontAwesome from './iconography/vue/FontAwesome.vue';

export default {
  name: 'Iconography',
  data() {
    return {
      /* eslint-disable import/no-unresolved */
      fontAwesomeHtml: require('!!raw-loader!./iconography/html/font-awesome.html'),
      openIconicHtml: require('!!raw-loader!./iconography/html/open-iconic.html'),
      fontAwesomeVue: require('!!raw-loader!./iconography/vue/FontAwesome.vue'),
      /* eslint-enable import/no-unresolved */
    };
  },
  components: {
    'page-section': Section,
    'page-sub-section': SubSection,
    'font-awesome-demo': fontAwesome,
  },
};
</script>

