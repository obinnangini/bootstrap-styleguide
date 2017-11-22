<template>
  <div>
    <div class="card">
      <div class="card-header">
        <a href="#" v-b-toggle.collapse1>Card #1</a>
      </div>
      <b-collapse id="collapse1">
        <div class="card-body">
          <h4 class="card-title">Title #1</h4>
          <p class="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsa architecto temporibus error iure tempora exercitationem voluptatum consequuntur facere illum nostrum.
            Dolore deserunt expedita esse eius odit quia ipsum aperiam natus.
            </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </b-collapse>
    </div>
    <div class="card mt-2">
      <div class="card-header">
        <a href="#" v-b-toggle.collapse2>Card #2</a>
      </div>
      <b-collapse id="collapse2">
        <div class="card-body">
          <h4 class="card-title">Title #2</h4>
          <p class="card-text">
            Ipsa architecto temporibus error iure tempora exercitationem voluptatum consequuntur facere illum nostrum.
            </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </b-collapse>
    </div>
    <div class="card mt-2">
      <div class="card-header">
        <a href="#" v-b-toggle.collapse3>Card #3</a>
      </div>
      <b-collapse id="collapse3">
        <div class="card-body">
          <h4 class="card-title">Title #3</h4>
          <p class="card-text">
            Dolore deserunt expedita esse eius odit quia ipsum aperiam natus.
            </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionDemo',
};
</script>
