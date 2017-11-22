<template>
<div>
  <div class="row">
    <div class="col">
      <h2>Navigation</h2>
    </div>
  </div>
  <page-section title="Breadcrumb">
    <page-sub-section
      slot="content"
      title="Default"
      :example-source="breadcrumbHtml"
      >
      <div v-html="breadcrumbHtml" slot="example"></div>
    </page-sub-section>
  </page-section>
  <page-section title="Carousel">
    <page-sub-section
      slot="content"
      title="Default"
      :example-source="carouselVue"
      >
      <carousel-demo slot="example"></carousel-demo>
    </page-sub-section>
  </page-section>
  <page-section title="Nav">
    <page-sub-section
      slot="content"
      title="Tabs"
      :example-source="tabsVue"
      >
      <tabs-demo slot="example"></tabs-demo>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Pills"
      :example-source="pillsVue"
      >
      <pills-demo slot="example"></pills-demo>
    </page-sub-section>
     <page-sub-section
      slot="content"
      title="Underline"
      :example-source="underlineVue"
      >
      <underline-demo slot="example"></underline-demo>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Vertical"
      :example-source="verticalVue"
      >
      <vertical-demo slot="example"></vertical-demo>
    </page-sub-section>
  </page-section>
  <page-section title="Navbar">
    <page-sub-section
      slot="content"
      title="Default"
      :example-source="navbarDefaultVue"
      exampleClass="col-md-12"
      exampleSourceClass="col-md-12"
      >
      <navbar-demo slot="example"></navbar-demo>
    </page-sub-section>
  </page-section>
  <page-section title="Pagination">
    <page-sub-section
      slot="content"
      title="Default"
      :example-source="paginationNavVue"
      >
      <pagination-nav-demo slot="example"></pagination-nav-demo>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Navigation"
      :example-source="paginationDefaultVue"
      >
      <pagination-demo slot="example"></pagination-demo>
    </page-sub-section>
  </page-section>
  <page-section title="Tabs">
    <page-sub-section
      slot="content"
      title="Pills"
      :example-source="tabsPillsVue"
      >
      <tabs-pills-demo slot="example"></tabs-pills-demo>
    </page-sub-section>
    <page-sub-section
      slot="content"
      title="Cards"
      :example-source="tabsCardsVue"
      >
      <tabs-cards-demo slot="example"></tabs-cards-demo>
    </page-sub-section>
  </page-section>
</div>
</template>

<script>
import Carousel from './carousel/vue/Carousel.vue';
import Tabs from './nav/vue/Tabs.vue';
import Pills from './nav/vue/Pills.vue';
import Underline from './nav/vue/Underline.vue';
import Vertical from './nav/vue/Vertical.vue';
import Navbar from './navbar/vue/Default.vue';
import PaginationNav from './pagination/vue/Nav.vue';
import Pagination from './pagination/vue/Default.vue';
import TabsPills from './tabs/vue/Pills.vue';
import TabsCards from './tabs/vue/Cards.vue';
import Section from '../Section.vue';
import SubSection from '../SubSection.vue';

export default {
  name: 'Navigation',
  data() {
    return {
      /* eslint-disable import/no-unresolved */
      breadcrumbHtml: require('!!raw-loader!./breadcrumb/html/default.html'),
      carouselVue: require('!!raw-loader!./carousel/vue/Carousel.vue'),
      tabsVue: require('!!raw-loader!./nav/vue/Tabs.vue'),
      pillsVue: require('!!raw-loader!./nav/vue/Pills.vue'),
      underlineVue: require('!!raw-loader!./nav/vue/Underline.vue'),
      verticalVue: require('!!raw-loader!./nav/vue/Vertical.vue'),
      navbarDefaultVue: require('!!raw-loader!./navbar/vue/Default.vue'),
      paginationDefaultVue: require('!!raw-loader!./pagination/vue/Default.vue'),
      paginationNavVue: require('!!raw-loader!./pagination/vue/Nav.vue'),
      tabsPillsVue: require('!!raw-loader!./tabs/vue/Pills.vue'),
      tabsCardsVue: require('!!raw-loader!./tabs/vue/Cards.vue'),
      /* eslint-enable import/no-unresolved */
    };
  },
  components: {
    'carousel-demo': Carousel,
    'tabs-demo': Tabs,
    'pills-demo': Pills,
    'underline-demo': Underline,
    'vertical-demo': Vertical,
    'navbar-demo': Navbar,
    'pagination-nav-demo': PaginationNav,
    'pagination-demo': Pagination,
    'tabs-pills-demo': TabsPills,
    'tabs-cards-demo': TabsCards,
    'page-section': Section,
    'page-sub-section': SubSection,
  },
};
</script>

