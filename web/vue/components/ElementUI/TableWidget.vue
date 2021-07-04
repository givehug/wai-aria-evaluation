<template>
  <Table :data="tableData" style="width: 100%">
    <TableColumn prop="date" label="Date" width="180"> </TableColumn>
    <TableColumn prop="name" label="Name" width="180"> </TableColumn>
    <TableColumn prop="address" label="Address"> </TableColumn>
  </Table>
</template>

<script>
import { Table, TableColumn } from 'element-ui';

export default {
  components: { Table, TableColumn },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]
    };
  }
};
</script>
