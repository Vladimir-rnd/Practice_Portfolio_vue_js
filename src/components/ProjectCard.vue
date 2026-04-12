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
  font-family: var(--body-font);
  font-size: 1.2rem;
  width: 18rem;
  height: auto;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
}

.project-expl {
  width: 100%;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
}

.thumbs-icon {
  border-radius: var(--thumbs-radius);
  border: 2px solid rgba(255, 255, 255, 0.15);
  width: 100%;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
}

.project:hover .thumbs-icon {
  border-color: var(--alt-color-1);
  box-shadow: 0 0 20px rgba(222, 204, 149, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 1399px) {
  .project {
    width: 25rem;
  }
}

@media (max-width: 768px) {
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