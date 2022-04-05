<template>
  <div class="vue">
    <h2>Vue에 대한 학습 및 정리</h2>
    <div class="main">
      <vuecont />
    </div>
  </div>
</template>

<script>
import vuecont from "@/components/vuecont";
export default {
  name: "vue",
  components: {
    vuecont,
  },
};
</script>

<style scoped>
.vue {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
.main {
  border: black 1px solid;
  width: 100%;
  height: 100%;
  max-width: 1600px;
  min-height: 600px;
  text-align: start;
}
</style>
