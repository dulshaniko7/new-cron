<template>

<div class="tab-border">
  <div class="mb-3 "><h3 class="font-weight-bolder">Cron Expression Generator</h3></div>
  <VueCronEditorBuefy v-model="cronExpression"/>
  cron Expression    :       {{cronExpression}}
</div>

</template>

<script>
import VueCronEditorBuefy from 'vue-cron-editor-buefy';

export default {
  name: "cron2",
  components: {
    VueCronEditorBuefy
  },
  data() {
    return{
      cronExpression: "* */1 * * * *"
    }
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.expressions.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.expressions.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
      this.expressions.splice(index, 1);
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedIndex = -1;
        this.editedItem = {};
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(
            this.expressions[this.editedIndex],
            this.editedItem
        );
      } else {
        const newIndex = this.expressions.push(this.editedItem);
        this.expressions[newIndex - 1].id = newIndex;
      }
      this.close();
    }
  },

}
</script>

<style scoped>
.tab-border {
  padding: 5%;
  border: black solid 1px;
}
h3{
  text-decoration-line: underline;
}
</style>