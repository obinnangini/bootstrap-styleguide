<template>
  <div style="width: 100%">
    <ag-grid-vue
      style="width: 100%; height: 350px;"
      class="ag-theme-bootstrap"
      :gridOptions="gridOptions"
      :rowData="rowData"
      :columnDefs="columnDefs"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import 'ag-grid';
import { AgGridVue } from 'ag-grid-vue';

export default {
  data() {
    return {
      text: null,
    };
  },
  computed: {
    gridOptions() {
      const gridOptions = {
        enableSorting: true,
        suppressMenuHide: true,
        unSortIcon: true,
        enableColResize: true,
        rowSelection: 'multiple',
        enableFilter: true,

      };
      return gridOptions;
    },
  },
  components: {
    'ag-grid-vue': AgGridVue,
  },
  created() {
    this.rowData = [];
    for (let i = 0; i < 50000; i++) {
      this.rowData.push({
        recordNumber: i,
        value1: Math.floor(Math.random() * 10000),
        value2: Math.floor(Math.random() * 10000),
        value3: Math.floor(Math.random() * 10000),
        value4: Math.floor(Math.random() * 10000),
        value5: Math.floor(Math.random() * 10000),
        value6: Math.floor(Math.random() * 10000),
        value7: Math.floor(Math.random() * 10000),
      });
    }
    this.columnDefs = [
      { headerName: 'Record', field: 'recordNumber', editable: true },
      { headerName: 'Value 1', field: 'value1', editable: true },
      { headerName: 'Value 2', field: 'value2', editable: true },
      { headerName: 'Value 3', field: 'value3', editable: true },
      { headerName: 'Value 4', field: 'value4', editable: true },
      { headerName: 'Value 5', field: 'value5', editable: true },
      { headerName: 'Value 6', field: 'value6', editable: true },
      { headerName: 'Value 7', field: 'value7', editable: true },
    ];
  },
};
</script>
