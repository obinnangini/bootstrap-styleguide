<template>
  <div>
    <h5 class="my-3">Content via properties or slots</h5>
    <div class="row">
      <div class="col-md-6 py-4 text-center">
        <button id="exPopover2" class="btn btn-primary">Using properties</button>
        <b-popover target="exPopover2"
            title="Prop Examples"
            triggers="hover focus"
            content="Embedding content using properties is easy">
        </b-popover>
      </div>
      <div class="col-md-6 py-4 text-center">
        <button id="exPopover3" class="btn btn-primary">Using slots</button>
        <b-popover target="exPopover3" triggers="hover focus">
           <template slot="title">Content via Slots</template>
           Embedding content <span class="text-danger">using slots</span>
           affords you <em>greater <strong>control.</strong></em> and
           basic HTML support.
        </b-popover>
      </div>
    </div>
  </div>
</template>
