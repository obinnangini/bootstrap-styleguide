<template>
  <div>
    <b-btn v-b-modal.modal1>Launch demo modal</b-btn>

    <b-modal 
      id="modal1"
      ref="modal1"
      title="Example modal"
      @ok="handleOk"
      @shown="clearName">
      <p>This is some sample modal text</p>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    clearName() {
      return {};
    },
    handleOk(e) {
      e.preventDefault();
    },
  },
};
</script>

