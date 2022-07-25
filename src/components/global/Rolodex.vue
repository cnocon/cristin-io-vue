<template>
  <div class="rolodex">
    <b>Click to cycle through states:</b>
    <div class="button-container">
      <Transition name="slide-up">
        <button v-if="docState === 'saved'" @click="docState = 'edited'" class="faux-button" >Edit</button>
        <a v-else-if="docState === 'edited'" @click="docState = 'editing'" class="faux-button" >Save</a>
        <button v-else-if="docState === 'editing'" @click="docState = 'saved'" class="faux-button" >Cancel</button>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { ref } from "vue"

export default Vue.extend({
  data() {
    return {
      docState: {
        type: ref,
        default: 'saved',
      }
    }
  },
  setup() {
    this.docState = ref('saved')
  },
})
</script>

<style lang="scss" scoped>
// h3 {
//   display: inline-block;
// }
.button-container {
  display: inline-block;
  position: relative;
  height: 1em;
}
.faux-button {
  position: absolute;
}
</style>
