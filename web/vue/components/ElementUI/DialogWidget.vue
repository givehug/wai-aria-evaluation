<template>
  <div>
    <Button type="contained" @click="dialogVisible = true"
      >click to open the Dialog</Button
    >
    <Dialog title="Tips" :visible.sync="dialogVisible" width="30%">
      <span>This is a message</span>
      <span slot="footer" class="dialog-footer">
        <Button @click="dialogVisible = false">Cancel</Button>
        <Button type="primary" @click="dialogVisible = false">OK</Button>
      </span>
    </Dialog>
  </div>
</template>

<script>
import { Button, Dialog } from 'element-ui';

export default {
  components: { Button, Dialog },
  data() {
    return {
      dialogVisible: false
    };
  }
};
</script>
