<template>
<div>
  <div class="row">
    <div class="col">
      <h2>Notifications</h2>
    </div>
  </div>
  <page-section title="Alerts">
    <page-sub-section
      slot="content"
      title="Default"
      :example-source="alertHtml"
      >
      <div v-html="alertHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section 
      slot="content" 
      title="Link" 
      :example-source="alertLinkHtml"
      >
      <div v-html="alertLinkHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section 
      slot="content" 
      title="Heading" 
      :example-source="alertHeaderHtml"
      >
      <div v-html="alertHeaderHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section 
      slot="content" 
      title="Dismissable" 
      :example-source="alertVue"
      >
      <alert-demo slot="example"></alert-demo>
    </page-sub-section>
  </page-section>
  <page-section title="Modals">
    <page-sub-section 
      slot="content" 
      title="Default" 
      :example-source="modalDefaultHtml"
      exampleClass="col-md-12"
      exampleSourceClass="col-md-12"
      >
      <div class="bd-example-modal" slot="example">
        <div v-html="modalDefaultHtml"></div>
      </div>
    </page-sub-section>
    <page-sub-section 
      slot="content" 
      title="Default" 
      :example-source="modalDefaultVue"
      >
      <modal-demo slot="example"></modal-demo>
    </page-sub-section>
  </page-section>
</div>
</template>

<script>
import Alert from './alert/vue/Alert.vue';
import Modal from './modal/vue/Default.vue';
import Section from '../Section.vue';
import SubSection from '../SubSection.vue';

export default {
  name: 'Notifications',
  data() {
    return {
      /* eslint-disable import/no-unresolved */
      alertHtml: require('!!raw-loader!./alert/html/default.html'),
      alertLinkHtml: require('!!raw-loader!./alert/html/link.html'),
      alertHeaderHtml: require('!!raw-loader!./alert/html/header.html'),
      modalDefaultHtml: require('!!raw-loader!./modal/html/default.html'),
      modalDefaultVue: require('!!raw-loader!./modal/vue/Default.vue'),
      alertVue: require('!!raw-loader!./alert/vue/Alert.vue'),
      /* eslint-enable import/no-unresolved */
    };
  },
  components: {
    'alert-demo': Alert,
    'modal-demo': Modal,
    'page-section': Section,
    'page-sub-section': SubSection,
  },
};
</script>

