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
import Vue, { ref } from "vue"

export default Vue.extend({
  name: "RotatingHeader",
  mounted() {
    const refs = [
      ref(this.$refs.rotateable0),
      ref(this.$refs.rotateable1),
      ref(this.$refs.rotateable2),
      ref(this.$refs.rotateable3),
    ]
    let active_index = 1
    let prev_index = 0
    let activeEl = refs[active_index].value
    let prevEl = refs[prev_index].value

    setInterval(() => {
      if (activeEl && prevEl) {
        activeEl = refs[active_index].value
        prevEl = refs[prev_index].value

        activeEl.classList.add("rotate-in", "active")
        activeEl.classList.remove("rotate-out")

        prevEl.classList.add("rotate-out")
        prevEl.classList.remove("rotate-in", "active")

        prev_index = prev_index >= 3 ? 0 : prev_index + 1
        active_index = active_index >= 3 ? 0 : active_index + 1
      }
    }, 3000)
  },
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/theme/_variables.scss";
.rotate-header {
  position: relative;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.5em;
  font-family: $font-secondary;
  text-transform: none;
  color: $color-primary;
  font-weight: 300;
  margin-bottom: 0;
  text-align: center;
  padding-bottom: 1rem;

  @media all and (max-width: $breakpoint-sm) {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }

  .rotate-words {
    font-size: inherit;
    min-height: 22px;
    line-height: 34px;
    display: inline-block;
    min-width: 290px;
    text-align: left;

    span {
      font-size: inherit;
      line-height: 1.4;
      display: inline-block;
      position: absolute;
      opacity: 0;
      font-family: $font-secondary;
      font-weight: 300;

      &:first-of-type {
        opacity: 1;
      }

      &.rotate-in {
        font-size: inherit;
        line-height: 1.4;
        animation: rotateInWord 0.5s linear forwards;
        -webkit-animation: rotateInWord 0.5s linear forwards;
        font-weight: 800;
        font-family: $font-secondary;
      }

      &.rotate-out {
        font-size: inherit;
        animation: rotateOutWord 0.5s linear forwards;
        -webkit-animation: rotateOutWord 0.5s linear forwards;
        position: absolute;
        opacity: 0;
        font-weight: 800;
        font-family: $font-secondary;
        line-height: inherit;
      }
    }
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

  @-webkit-keyframes rotateInWord {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-39px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0px);
    }
  }
  @-webkit-keyframes rotateOutWord {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0px);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(39px);
    }
  }
  @keyframes rotateInWord {
    0% {
      opacity: 0;
      transform: translateY(-39px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes rotateOutWord {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(39px);
    }
  }
}
</style>
