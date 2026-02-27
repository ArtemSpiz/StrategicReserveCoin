<script setup>
defineProps({
  customClass: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button
    class="trade-btn rounded-full text-white font-medium font-ibm-sans py-2.5"
    :class="customClass"
  >
    <span class="btn-content">Trade Now</span>
  </button>
</template>

<style scoped>
.trade-btn {
  position: relative;
  background-image: linear-gradient(90deg, #f78c2e -1.8%, #f64340 77.37%);
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.3s ease;
  isolation: isolate;
}

/* Shimmer sweep on hover */
.trade-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 30%,
    rgba(255, 255, 255, 0.35) 50%,
    transparent 70%
  );
  transform: translateX(-100%);
  transition: transform 0.5s ease;
  border-radius: inherit;
  z-index: 1;
}

/* Glow layer — brightens gradient on hover */
.trade-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(90deg, #ffaa55 -1.8%, #ff6360 77.37%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: inherit;
  z-index: 0;
}

.trade-btn:hover::before {
  transform: translateX(100%);
}

.trade-btn:hover::after {
  opacity: 1;
}

.trade-btn:active {
  transform: translateY(0px) scale(0.98);
  box-shadow: 0 3px 10px rgba(246, 67, 64, 0.35);
  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
}

.btn-content {
  position: relative;
  z-index: 2;
}
</style>
