<template>
<div>
  <div class="row">
    <div class="col">
      <h2>Typography</h2>
    </div>
  </div>
  <page-section title="Typography">
    <page-sub-section
      slot="content"
      title="Headings"
      :example-source="typographyHeadingsHtml"
      >
      <div v-html="typographyHeadingsHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Display"
      :example-source="typographyDisplayHtml"
      >
      <div v-html="typographyDisplayHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Lead"
      :example-source="typographyLeadHtml"
      >
      <div v-html="typographyLeadHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Styles"
      :example-source="typographyStylesHtml"
      >
      <div v-html="typographyStylesHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Blockquote"
      :example-source="typographyBlockquoteHtml"
      >
      <div v-html="typographyBlockquoteHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Description List"
      :example-source="typographyDescriptionListHtml"
      >
      <div v-html="typographyDescriptionListHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Code"
      :example-source="typographyCodeHtml"
      >
      <div v-html="typographyCodeHtml" slot="example"></div>
    </page-sub-section>
  </page-section>
</div>
</template>

<script>
import Section from '../Section.vue';
import SubSection from '../SubSection.vue';

export default {
  name: 'Typography',
  data() {
    return {
      /* eslint-disable import/no-unresolved */
      typographyHeadingsHtml: require('!!raw-loader!./typography/html/headings.html'),
      typographyDisplayHtml: require('!!raw-loader!./typography/html/display.html'),
      typographyLeadHtml: require('!!raw-loader!./typography/html/lead.html'),
      typographyStylesHtml: require('!!raw-loader!./typography/html/styles.html'),
      typographyBlockquoteHtml: require('!!raw-loader!./typography/html/blockquote.html'),
      typographyDescriptionListHtml: require('!!raw-loader!./typography/html/description-list.html'),
      typographyCodeHtml: require('!!raw-loader!./typography/html/code.html'),
      /* eslint-enable import/no-unresolved */
    };
  },
  components: {
    'page-section': Section,
    'page-sub-section': SubSection,
  },
};
</script>

