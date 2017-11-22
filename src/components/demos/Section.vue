<template>
   <div class="card mb-3">
    <div class="card-body">
      <h3>{{title}}</h3>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
