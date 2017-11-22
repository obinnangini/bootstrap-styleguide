<template>
  <div>
    <div class="alert alert-danger alert-dismissible" role="alert" v-show="showDismissibleAlert">
      <button type="button" class="close" aria-label="Close" @click="dismissAlert()">
        <span aria-hidden="true">&times;</span>
      </button>
      Dismissible Alert!
    </div>

    <b-alert :show="dismissCountDown" dismissible variant="warning" @dismissed="dismissCountdown=0" @dismiss-count-down="countDownChanged">
      <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
      <b-progress variant="warning" :max="dismissSecs" :value="dismissCountDown" height="4px">
      </b-progress>
    </b-alert>

    <button type="button" class="btn btn-info m-1" @click="showAlert()">
      Show alert with count-down timer
    </button>
    <button type="button" class="btn btn-info m-1" @click="showDismissableAlert()">
     Show dismissible alert ({{showDismissibleAlert?'visible':'hidden'}})
    </button>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  methods: {
    showDismissableAlert() {
      this.showDismissibleAlert = true;
    },
    dismissAlert() {
      this.showDismissibleAlert = false;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>
