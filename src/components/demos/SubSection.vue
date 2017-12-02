<template>
 <div class="row">
  <div :class="exampleClass">
    <h4>{{title}}</h4>
    <slot name="example"></slot>
  </div>
  <div :class="exampleSourceClass">
    <demo-source>
     <div v-text="exampleSource"></div>
    </demo-source>
  </div>
</div>
</template>

<script>
import Source from './Source.vue';

export default {
  name: 'SubSection',
  props: {
    title: {
      type: String,
      required: true,
    },
    exampleSource: {
      type: String,
      required: true,
    },
    exampleClass: {
      type: String,
      default: 'col-md-6',
    },
    exampleSourceClass: {
      type: String,
      default: 'col-md-6',
    },
  },
  components: {
    'demo-source': Source,
  },
};
</script>

