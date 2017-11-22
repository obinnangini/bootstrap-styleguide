<template>
  <div class="container fluid">

    <h5 class="my-3">Placement</h5>
    <div class="row">
      <div class="col-md-4 py-4 text-center"
           v-for="placement in placements" :key="placement">
        <button class="btn btn-primary" :id="'exTooltip1-'+placement">
          {{ placement }}
        </button>
        <b-tooltip :target="'exTooltip1-'+placement"
                   :placement="placement"
                   :title="`Placement ${placement}`">
        </b-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placements: [
        'topright', 'top', 'topleft',
        'bottomright', 'bottom', 'bottomleft',
        'righttop', 'right', 'lefttop',
        'rightbottom', 'left', 'leftbottom',
      ],
    };
  },
};
</script>
