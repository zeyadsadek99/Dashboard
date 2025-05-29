<template>
  <div class="w-full flex h-full justify-center items-center">
    <span class="loader"></span>
  </div>
</template>

<style>
@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotateZ(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(360deg);
  }
}

@keyframes rotateccw {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes spin {
  0%,
  100% {
    box-shadow: 0.2em 0px 0 0px currentColor;
  }
  12% {
    box-shadow: 0.2em 0.2em 0 0 currentColor;
  }
  25% {
    box-shadow: 0 0.2em 0 0 currentColor;
  }
  37% {
    box-shadow: -0.2em 0.2em 0 0 currentColor;
  }
  50% {
    box-shadow: -0.2em 0 0 0 currentColor;
  }
  62% {
    box-shadow: -0.2em -0.2em 0 0 currentColor;
  }
  75% {
    box-shadow: 0px -0.2em 0 0 currentColor;
  }
  87% {
    box-shadow: 0.2em -0.2em 0 0 currentColor;
  }
}
</style>
