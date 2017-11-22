<template>
<div>
  <div class="row">
    <div class="col">
      <h2>Buttons</h2>
    </div>
  </div>
  <page-section title="Buttons">
    <page-sub-section
      slot="content"
      title="Default"
      :example-source="buttonDefaultHtml"
      >
      <div v-html="buttonDefaultHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Outline"
      :example-source="buttonOutlinetHtml"
      >
      <div v-html="buttonOutlinetHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Disabled"
      :example-source="buttonDisabledHtml"
      >
      <div v-html="buttonDisabledHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Sizes"
      :example-source="buttonSizesHtml"
      >
      <div v-html="buttonSizesHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Dropdowns"
      :example-source="buttonDropdownVue"
      >
      <btn-dropdown-demo slot="example"></btn-dropdown-demo>
    </page-sub-section>
  </page-section>
  <page-section title="Button Group">
    <page-sub-section
      slot="content"
      title="Checkbox"
      :example-source="checkboxButtonGroupVue"
      >
      <checkbox-btn-group-demo slot="example"></checkbox-btn-group-demo>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Radio"
      :example-source="radioButtonGroupVue"
      >
      <radio-btn-group-demo slot="example"></radio-btn-group-demo>
    </page-sub-section>
  </page-section>
   <page-section title="Toggle">
    <page-sub-section
      slot="content"
      title="Default"
      :example-source="toggleButtonVue"
      >
      <toggle-btn-demo slot="example"></toggle-btn-demo>
    </page-sub-section>
   </page-section>
</div>
</template>

<script>
import CheckboxButtonGroup from './buttons/vue/CheckboxButtonGroup.vue';
import RadioButtonGroup from './buttons/vue/RadioButtonGroup.vue';
import ToggleButton from './buttons/vue/ToggleButton.vue';
import ButtonDropdown from './buttons/vue/ButtonDropdown.vue';
import Section from '../Section.vue';
import SubSection from '../SubSection.vue';

export default {
  name: 'Buttons',
  data() {
    return {
      /* eslint-disable import/no-unresolved */
      buttonDefaultHtml: require('!!raw-loader!./buttons/html/default.html'),
      buttonOutlinetHtml: require('!!raw-loader!./buttons/html/outline.html'),
      buttonDisabledHtml: require('!!raw-loader!./buttons/html/disabled.html'),
      buttonSizesHtml: require('!!raw-loader!./buttons/html/sizes.html'),
      buttonDropdownVue: require('!!raw-loader!./buttons/vue/ButtonDropdown.vue'),
      checkboxButtonGroupVue: require('!!raw-loader!./buttons/vue/CheckboxButtonGroup.vue'),
      radioButtonGroupVue: require('!!raw-loader!./buttons/vue/RadioButtonGroup.vue'),
      toggleButtonVue: require('!!raw-loader!./buttons/vue/ToggleButton.vue'),
      /* eslint-enable import/no-unresolved */
    };
  },
  components: {
    'checkbox-btn-group-demo': CheckboxButtonGroup,
    'radio-btn-group-demo': RadioButtonGroup,
    'toggle-btn-demo': ToggleButton,
    'btn-dropdown-demo': ButtonDropdown,
    'page-section': Section,
    'page-sub-section': SubSection,
  },
};
</script>

