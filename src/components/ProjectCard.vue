<template>
  <div class="project" @click="$emit('select')">
    <span class="project-expl">{{ title }}</span>
    <img class="thumbs-icon" :alt="title" :src="imageSrc">
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

defineEmits(['select'])

const imageSrc = computed(() => {
  const path = props.image.startsWith('/') ? props.image.slice(1) : props.image
  return import.meta.env.BASE_URL + path
})
</script>

<style scoped>
.project {
  font-family: var(--alt-font);
  font-size: var(--basement-font-size);
  width: 30rem;
  height: auto;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.project-expl {
  width: 25rem;
}

.thumbs-icon {
  border-radius: var(--thumbs-radius);
  border: 5px solid var(--main-color);
  width: 25rem;
}

.thumbs-icon:hover {
  border: 5px solid var(--alt-color-1);
}

@media (max-width: 1399px) {
  .project {
    width: 25rem;
  }
}

@media (max-width: 767px) {
  .project {
    width: 23rem;
  }
  .project-expl {
    width: 24rem;
  }
  .thumbs-icon {
    width: 23rem;
  }
}

@media (max-width: 575px) {
  .project {
    width: 18rem;
    margin-bottom: 2rem;
    margin-right: 1rem;
  }
  .thumbs-icon {
    width: 17rem;
  }
  .project-expl {
    width: 19rem;
  }
}
</style>