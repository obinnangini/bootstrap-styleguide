<template>
<div>
  <div class="row">
    <div class="col">
      <h2>Indicators</h2>
    </div>
  </div>
   <page-section title="Badge">
     <page-sub-section
      slot="content"
      title="Buttons"
      :example-source="badgeButtonsHtml"
      >
      <div v-html="badgeButtonsHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Default"
      :example-source="badgeDefaultHtml"
      >
      <div v-html="badgeDefaultHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Context"
      :example-source="badgeContextHtml"
      >
      <div v-html="badgeContextHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Links"
      :example-source="badgeLinkHtml"
      >
      <div v-html="badgeLinkHtml" slot="example"></div>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="List Group"
      :example-source="badgeListGroupHtml"
      >
      <div v-html="badgeListGroupHtml" slot="example"></div>
    </page-sub-section>
   </page-section>
   <page-section title="Popovers">
    <page-sub-section
      slot="content"
      title="Placement"
      :example-source="popoverPlacementVue"
      >
      <popover-placement-demo slot="example"></popover-placement-demo>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Content"
      :example-source="popoverContentVue"
      >
      <popover-content-demo slot="example"></popover-content-demo>
    </page-sub-section>
   </page-section>
   <page-section title="Tooltip">
    <page-sub-section
      slot="content"
      title="Default"
      :example-source="tooltipDefaultVue"
      >
      <tooltip-default-demo slot="example"></tooltip-default-demo>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Placement"
      :example-source="tooltipPlacementVue"
      >
      <tooltip-placement-demo slot="example"></tooltip-placement-demo>
    </page-sub-section>
   </page-section>
</div>
</template>

<script>
import PopoverPlacement from './popover/vue/Placement.vue';
import PopoverContent from './popover/vue/Content.vue';
import TooltipDefault from './tooltip/vue/Default.vue';
import TooltipPlacement from './tooltip/vue/Placement.vue';
import Section from '../Section.vue';
import SubSection from '../SubSection.vue';

export default {
  name: 'Indicators',
  data() {
    return {
      /* eslint-disable import/no-unresolved */
      badgeButtonsHtml: require('!!raw-loader!./badge/html/buttons.html'),
      badgeDefaultHtml: require('!!raw-loader!./badge/html/default.html'),
      badgeContextHtml: require('!!raw-loader!./badge/html/context.html'),
      badgeLinkHtml: require('!!raw-loader!./badge/html/link.html'),
      badgeListGroupHtml: require('!!raw-loader!./badge/html/list-group.html'),
      popoverPlacementVue: require('!!raw-loader!./popover/vue/Placement.vue'),
      popoverContentVue: require('!!raw-loader!./popover/vue/Content.vue'),
      tooltipDefaultVue: require('!!raw-loader!./tooltip/vue/Default.vue'),
      tooltipPlacementVue: require('!!raw-loader!./tooltip/vue/Placement.vue'),
      // alertVue: require('!!raw-loader!./vue/Alert.vue'),
      /* eslint-enable import/no-unresolved */
    };
  },
  components: {
    'popover-placement-demo': PopoverPlacement,
    'popover-content-demo': PopoverContent,
    'tooltip-default-demo': TooltipDefault,
    'tooltip-placement-demo': TooltipPlacement,
    'page-section': Section,
    'page-sub-section': SubSection,
  },
};
</script>
