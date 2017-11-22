<template>
<div>
  <div class="row">
    <div class="col">
      <h2>Containers</h2>
    </div>
  </div>
  <page-section title="Cards">
    <page-sub-section
      slot="content"
      title="Block"
      :example-source="cardBlockHtml"
      >
      <div v-html="cardBlockHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Full"
      :example-source="cardFullHtml"
      >
      <div v-html="cardFullHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Kitchen Sink"
      :example-source="cardKitchenSinkHtml"
      >
      <div v-html="cardKitchenSinkHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Context"
      :example-source="cardContextHtml"
      >
      <div v-html="cardContextHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Decks"
      :example-source="cardDeckHtml"
      >
      <div v-html="cardDeckHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Columns"
      :example-source="cardcolumnHtml"
      exampleClass="col-md-12"
      exampleSourceClass="col-md-12"
      >
      <div v-html="cardcolumnHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Collapsing cards (Accordion)"
      :example-source="acocrdionVue"
      >
      <accordion-demo slot="example"></accordion-demo>
    </page-sub-section>
   </page-section>
   <page-section title="Jumbotron">
    <page-sub-section
      slot="content"
      title="Default"
      :example-source="jumbotronDefaultHtml"
      exampleClass="col-md-12"
      exampleSourceClass="col-md-12"
      >
      <div v-html="jumbotronDefaultHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Fluid"
      :example-source="jumbotronFluidtHtml"
      exampleClass="col-md-12"
      exampleSourceClass="col-md-12"
      >
      <div v-html="jumbotronFluidtHtml" slot="example"></div>
    </page-sub-section>
   </page-section>
   <page-section title="List Group">
    <page-sub-section
      slot="content"
      title="Default"
      :example-source="listGroupDefaultHtml"
      >
      <div v-html="listGroupDefaultHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Links"
      :example-source="listGroupLinkstHtml"
      >
      <div v-html="listGroupLinkstHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Context"
      :example-source="listGroupContextHtml"
      >
      <div v-html="listGroupContextHtml" slot="example"></div>
    </page-sub-section>
     <page-sub-section
      slot="content"
      title="Custom"
      :example-source="listGroupCustomtHtml"
      >
      <div v-html="listGroupCustomtHtml" slot="example"></div>
    </page-sub-section>
   </page-section>
</div>
</template>

<script>
import Accordion from './cards/vue/Accordion.vue';
import Section from '../Section.vue';
import SubSection from '../SubSection.vue';

export default {
  name: 'Containers',
  data() {
    return {
      /* eslint-disable import/no-unresolved */
      cardBlockHtml: require('!!raw-loader!./cards/html/block.html'),
      cardFullHtml: require('!!raw-loader!./cards/html/full.html'),
      cardKitchenSinkHtml: require('!!raw-loader!./cards/html/kitchen-sink.html'),
      cardContextHtml: require('!!raw-loader!./cards/html/context.html'),
      cardDeckHtml: require('!!raw-loader!./cards/html/deck.html'),
      cardcolumnHtml: require('!!raw-loader!./cards/html/column.html'),
      acocrdionVue: require('!!raw-loader!./cards/vue/Accordion.vue'),
      jumbotronDefaultHtml: require('!!raw-loader!./jumbotron/html/default.html'),
      jumbotronFluidtHtml: require('!!raw-loader!./jumbotron/html/fluid.html'),
      listGroupDefaultHtml: require('!!raw-loader!./list-group/html/default.html'),
      listGroupLinkstHtml: require('!!raw-loader!./list-group/html/links.html'),
      listGroupContextHtml: require('!!raw-loader!./list-group/html/context.html'),
      listGroupCustomtHtml: require('!!raw-loader!./list-group/html/custom.html'),
      /* eslint-enable import/no-unresolved */
    };
  },
  components: {
    // 'alert-demo': Alert,
    'page-section': Section,
    'page-sub-section': SubSection,
    'accordion-demo': Accordion,
  },
};
</script>

