<template>
  <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">Email address</label>
      <input type="email" class="form-control" v-model="form.email" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>
    <div class="form-group">
      <label for="inputPassword5">Password</label>
      <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
      <small id="passwordHelpBlock" class="form-text text-muted">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
      </small>
    </div>
    <div class="form-group">
      <label for="exampleDisabledInput1">Disabled Input</label>
      <input type="text" class="form-control" id="exampleDisabledInput1" placeholder="Disabled input" disabled>
    </div>
    <div class="form-group">
      <label for="exampleReadonlyInput1">Readonly Input</label>
      <input type="text" class="form-control" id="exampleReadonlyInput1" placeholder="Readonly input here…" readonly>
    </div>
    <div class="form-group row">
      <label for="examplePlainTextInput1" class="col-sm-4 col-form-label">Static Field Label</label>
      <div class="col-sm-8">
        <input type="text" class="form-control-plaintext" id="examplePlainTextInput1" value="Static text">
      </div>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Example select - {{form.singleSelect}}</label>
      <select class="form-control" id="exampleFormControlSelect1" v-model="form.singleSelect">
        <option
          v-for="selectOption in form.selectSingleOptions"
          :value="selectOption"
          :key="selectOption"
        >
        {{selectOption}}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlFile1">Example file input</label>
      <input type="file" class="form-control-file" id="exampleFormControlFile1">
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect2">Example multiple select</label>
      <select multiple class="form-control" id="exampleFormControlSelect2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Example textarea - {{form.textArea}}</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" v-model="form.textArea" rows="3"></textarea>
    </div>
    <div class="form-check">
    <label class="form-check-label">
      <input class="form-check-input" v-model="form.checkbox" type="checkbox" value="">
      Option one is this and that&mdash;be sure to include why it's great - {{form.checkbox}}
    </label>
  </div>
  <div class="form-check disabled">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox" value="" disabled>
      Option two is disabled
    </label>
  </div>
  <p>Radio value - {{form.radio}}</p>
  <div class="form-check">
    <label class="form-check-label">
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" v-model="form.radio">
      Option one is this and that&mdash;be sure to include why it's great
    </label>
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" v-model="form.radio">
      Option two can be something else and selecting it will deselect option one
    </label>
  </div>
  <div class="form-check disabled">
    <label class="form-check-label">
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
      Option three is disabled
    </label>
  </div>
  <p>
    <button type="button" class="btn btn-primary mx-auto" @click.prevent="showForm">Submit</button>
  </p>
  <p>Form Object: {{JSON.stringify(formObj, null, 2)}} </p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      formObj: {},
      form: {
        email: '',
        singleSelect: '',
        selectSingleOptions: ['1', '2', '3', '4', '5'],
        textArea: '',
        checkbox: false,
        radio: null,
      },
    };
  },
  methods: {
    showForm() {
      this.formObj = this.form;
    },
  },
};
</script>
