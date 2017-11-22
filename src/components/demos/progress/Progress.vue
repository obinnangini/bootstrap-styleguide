<template>
<div>
  <div class="row">
    <div class="col">
      <h2>Progress and Spinners</h2>
    </div>
  </div>
  <page-section title="Progress">
    <page-sub-section
      slot="content"
      title="Default"
      :example-source="progressDefaultHtml"
      >
      <div v-html="progressDefaultHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Height"
      :example-source="progressHeightHtml"
      >
      <div v-html="progressHeightHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Backgrounds"
      :example-source="progressBackgroundsHtml"
      >
      <div v-html="progressBackgroundsHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Stacked"
      :example-source="progressStackedHtml"
      >
      <div v-html="progressStackedHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Striped"
      :example-source="progressStripedHtml"
      >
      <div v-html="progressStripedHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Animated"
      :example-source="progressAnimatedHtml"
      >
      <div v-html="progressAnimatedHtml" slot="example"></div>
    </page-sub-section>
    <!-- <page-sub-section
      slot="content"
      title="Dismissable"
      :example-source="alertVue"
      >
      <alert-demo slot="example"></alert-demo>
    </page-sub-section> -->
  </page-section>
   <page-section title="Spinners">
     <p slot="content">Spinners are created via CSS3 Animations, courtesy of the <a href="https://projects.lukehaas.me/css-loaders/"> CSS Loaders Project</a></p>
    <page-sub-section
      slot="content"
      title="Option 1"
      :example-source="spinnerLoader1Html"
      >
      <div class="loader-container" slot="example">
        <div v-html="spinnerLoader1Html"></div>
      </div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Option 2"
      :example-source="spinnerLoader2Html"
      >
      <div class="loader-container" slot="example">
        <div v-html="spinnerLoader2Html"></div>
      </div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Option 3"
      :example-source="spinnerLoader3Html"
      >
      <div class="loader-container" slot="example">
        <div v-html="spinnerLoader3Html"></div>
      </div>
    </page-sub-section>
   </page-section>
</div>
</template>

<script>
// import Alert from './alert/vue/Alert.vue';
// import Modal from './modal/vue/Default.vue';
import Section from '../Section.vue';
import SubSection from '../SubSection.vue';

export default {
  name: 'Progress',
  data() {
    return {
      /* eslint-disable import/no-unresolved */
      progressDefaultHtml: require('!!raw-loader!./progress/html/default.html'),
      progressHeightHtml: require('!!raw-loader!./progress/html/height.html'),
      progressBackgroundsHtml: require('!!raw-loader!./progress/html/backgrounds.html'),
      progressStackedHtml: require('!!raw-loader!./progress/html/stacked.html'),
      progressStripedHtml: require('!!raw-loader!./progress/html/striped.html'),
      progressAnimatedHtml: require('!!raw-loader!./progress/html/animated.html'),
      spinnerLoader1Html: require('!!raw-loader!./spinner/html/loader1.html'),
      spinnerLoader2Html: require('!!raw-loader!./spinner/html/loader2.html'),
      spinnerLoader3Html: require('!!raw-loader!./spinner/html/loader3.html'),
      // alertVue: require('!!raw-loader!./alert/vue/Alert.vue'),
      /* eslint-enable import/no-unresolved */
    };
  },
  components: {
    // 'alert-demo': Alert,
    // 'modal-demo': Modal,
    'page-section': Section,
    'page-sub-section': SubSection,
  },
};
</script>
<style>
.progress {
  margin: 0.5rem 0;
}
</style>

