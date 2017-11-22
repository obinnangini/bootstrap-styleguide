<template>
  <div>
    <div class="row">
      <div class="col">
        <h2>Forms</h2>
      </div>
    </div>
    <page-section title="Forms">
      <page-sub-section
        slot="content"
        title="Default"
        :example-source="formsDefaultVue"
      >
       <!-- <div v-html="formsDefaultHtml" slot="example"></div> -->
       <default-forms-demo slot="example"></default-forms-demo>
      </page-sub-section>
      <page-sub-section
        slot="content"
        title="Inline"
        :example-source="formsInlineHtml"
        exampleClass="col-md-12"
        exampleSourceClass="col-md-12"
      >
       <div v-html="formsInlineHtml" slot="example"></div>
      </page-sub-section>
      <page-sub-section
        slot="content"
        title="Disabled"
        :example-source="formsDisabledHtml"
        exampleClass="col-md-6"
        exampleSourceClass="col-md-6"
      >
       <div v-html="formsDisabledHtml" slot="example"></div>
      </page-sub-section>
    </page-section>
  </div>
</template>

<script>
import Forms from './forms/vue/Default.vue';
import Section from '../Section.vue';
import SubSection from '../SubSection.vue';

export default {
  name: 'Forms',
  data() {
    return {
      /* eslint-disable import/no-unresolved */
      formsDefaultHtml: require('!!raw-loader!./forms/html/default.html'),
      formsDisabledHtml: require('!!raw-loader!./forms/html/disabled.html'),
      formsInlineHtml: require('!!raw-loader!./forms/html/inline.html'),
      formsDefaultVue: require('!!raw-loader!./forms/vue/Default.vue'),
      /* eslint-enable import/no-unresolved */
    };
  },
  components: {
    'default-forms-demo': Forms,
    'page-section': Section,
    'page-sub-section': SubSection,
  },
};
</script>
