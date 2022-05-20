<script>
import Avatar from "../Avatar.vue"
export default {
  name: "Comment",
  components: {
    Avatar
  },
  props: {
    email: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="d-flex gap-1">
    <Avatar />
    <div class="d-flex flex-column comment_text p-1">
      <p>{{ email }}</p>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<style scoped>
.comment_text {
  background-color: var(--bs-gray-200);
  border-radius: 5px;
  width: 100%;
  margin-block: 0.2rem;
}
.card-body > .d-flex {
  margin-bottom: 1rem;
}

.d-flex p {
  margin-bottom: 0;
}
.d-flex p:nth-child(1) {
  font-weight: 500;
}
</style>
