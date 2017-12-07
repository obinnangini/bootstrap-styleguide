<template>
<div style="position: relative">
  <app-header></app-header>
  <router-view></router-view>
  <app-footer></app-footer>
</div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

const resolveAfter2Seconds = (x) => (
  new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  })
);

const add1 = async (x) => {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
};

const foo = async () => add1(6);

export default {
  data() {
    return {value: 0};
  },
  mounted() {
    foo().then(value => { this.value = value; });
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>
