<template>
<div>
  <div class="row">
    <div class="col">
      <h2>Tables</h2>
    </div>
  </div>
  <page-section title="Tables">
    <page-sub-section
      slot="content"
      title="Default"
      :example-source="tablesDefaultHtml"
      >
      <div v-html="tablesDefaultHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Inverse"
      :example-source="tablesInverseHtml"
      >
      <div v-html="tablesInverseHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Striped"
      :example-source="tablesStripedHtml"
      >
      <div v-html="tablesStripedHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Bordered"
      :example-source="tablesBorderedHtml"
      >
      <div v-html="tablesBorderedHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Hover"
      :example-source="tablesHoverHtml"
      >
      <div v-html="tablesHoverHtml" slot="example"></div>
    </page-sub-section>
  </page-section>
  <page-section title="ag-Grid">
    <page-sub-section
      slot="content"
      title="Default"
      :example-source="agGridVue"
      exampleClass="col-md-12"
      exampleSourceClass="col-md-12"
      >
      <ag-grid-demo slot="example"></ag-grid-demo>
    </page-sub-section>
  </page-section>
</div>
</template>

<script>
import agGrid from './tables/vue/ag-Grid.vue';
import Section from '../Section.vue';
import SubSection from '../SubSection.vue';

export default {
  name: 'Tables',
  data() {
    return {
      /* eslint-disable import/no-unresolved */
      tablesDefaultHtml: require('!!raw-loader!./tables/html/default.html'),
      tablesInverseHtml: require('!!raw-loader!./tables/html/inverse.html'),
      tablesStripedHtml: require('!!raw-loader!./tables/html/striped.html'),
      tablesBorderedHtml: require('!!raw-loader!./tables/html/bordered.html'),
      tablesHoverHtml: require('!!raw-loader!./tables/html/hover.html'),
      agGridVue: require('!!raw-loader!./tables/vue/ag-Grid.vue'),
      /* eslint-enable import/no-unresolved */
    };
  },
  components: {
    'ag-grid-demo': agGrid,
    'page-section': Section,
    'page-sub-section': SubSection,
  },
};
</script>

