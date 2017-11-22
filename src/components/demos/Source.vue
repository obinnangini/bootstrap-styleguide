<template>
  <pre class="demo-source">
  <code :class="languageClass">
  <slot>
  </slot>  
  </code>
  </pre>
</template>
<script>
import Prism from 'prismjs';

export default {
  name: 'Source',
  mounted() {
    Prism.highlightAll();
  },
  props: {
    language: {
      type: String,
      default: 'html',
    },
  },
  computed: {
    languageClass() {
      return `language-${this.language}`;
    },
  },
};
</script>
