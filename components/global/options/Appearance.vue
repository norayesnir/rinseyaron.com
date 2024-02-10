<script lang="ts" setup>
const mouseHasEntered = ref(false);
const isDarkMode = ref(true);
</script>

<template>
  <div>
    <Icon
      v-if="!mouseHasEntered && !isDarkMode"
      @mouseover="mouseHasEntered = true"
      @mouseleave="mouseHasEntered = false"
      name="material-symbols:dark-mode-outline"
      :class="{ hidden: mouseHasEntered }"
    />
    <Icon
      v-else-if="!isDarkMode"
      name="material-symbols:dark-mode"
      @mouseover="mouseHasEntered = true"
      @mouseleave="mouseHasEntered = false"
      :class="{ hidden: mouseHasEntered }"
    />

    <Icon
      v-if="!mouseHasEntered && isDarkMode"
      name="material-symbols:light-mode-outline"
      @mouseover="mouseHasEntered = true"
      @mouseleave="mouseHasEntered = false"
      :class="{ hidden: mouseHasEntered }"
    />
    <Icon
      v-else-if="isDarkMode"
      name="material-symbols:light-mode"
      @mouseover="mouseHasEntered = true"
      @mouseleave="mouseHasEntered = false"
      :class="{ hidden: mouseHasEntered }"
    />
  </div>
</template>
