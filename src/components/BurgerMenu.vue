<template>
  <div
    class="burger"
    :class="{ active: isOpen }"
    @click="$emit('toggle')"
  >
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(["toggle"])
</script>

<style scoped>
.burger { display: none; }

@media (max-width: 376px) {
  .burger {
    display: block; margin-top: 1.5rem; margin-left: 1.5rem;
    width: 3rem; height: 3rem; cursor: pointer;
  }
  .burger .line {
    display: block; height: 0.5rem; margin-bottom: 0.5rem;
    border-radius: 1rem; background-color: var(--main-color);
  }
  .burger .line1 { transform-origin: 0% 0%; transition: transform 0.3s ease-in-out; }
  .burger .line2 { transition: transform 0.2s ease-in-out; }
  .burger .line3 { transform-origin: 0% 100%; transition: transform 0.3s ease-in-out; }
  .burger.active .line1 { transform: rotate(45deg); }
  .burger.active .line2 { transform: scaleY(0); }
  .burger.active .line3 { transform: rotate(-45deg); }
}
</style>
