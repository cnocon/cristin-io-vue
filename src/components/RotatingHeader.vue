<template>
  <div class="rotate-header">
    <span class="rotate-words">
      Hi. I'm&nbsp;
      <span class="rotate-in active" ref="rotateable0">
        a front end engineer.
      </span>
      <span class="rotate-out" ref="rotateable1"> a programming tutor. </span>
      <span class="rotate-out" ref="rotateable2"> an advocate for I&D. </span>
      <span class="rotate-out" ref="rotateable3"> a passionate learner. </span>
    </span>
    <br />
    I live and work in beautiful Utah.
    <br />
    I love to code new things.
  </div>
</template>

<script lang="ts">
import Vue, { ref } from "vue";

export default Vue.extend({
  name: "RotatingHeader",
  mounted() {
    const refs = [
      ref(this.$refs.rotateable0),
      ref(this.$refs.rotateable1),
      ref(this.$refs.rotateable2),
      ref(this.$refs.rotateable3),
    ];
    let active_index = 1;
    let prev_index = 0;
    let activeEl = refs[active_index].value;
    let prevEl = refs[prev_index].value;

    setInterval(() => {
      if (activeEl && prevEl) {
        activeEl = refs[active_index].value;
        prevEl = refs[prev_index].value;

        activeEl.classList.add("rotate-in", "active");
        activeEl.classList.remove("rotate-out");

        prevEl.classList.add("rotate-out");
        prevEl.classList.remove("rotate-in", "active");

        prev_index = prev_index >= 3 ? 0 : prev_index + 1;
        active_index = active_index >= 3 ? 0 : active_index + 1;
      }
    }, 3000);
  },
});
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
.rotate-header {
  padding-bottom: 1rem;

  @media all and (max-width: $breakpoint-sm) {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }

  span {
    font-weight: 300;

    @media all and (max-width: $breakpoint-sm) {
      min-width: 230px;

      &.rotate-in {
        line-height: 34px;
      }
    }
  }
}
</style>
