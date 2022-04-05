<template>
  <div class="javascript">
    <h2>JavaScript에 대한 학습 및 정리</h2>
    <div class="main">
      <javascriptcont />
    </div>
  </div>
</template>

<script>
import javascriptcont from "@/components/javascriptcont";
export default {
  name: "javascript",
  components: {
    javascriptcont,
  },
};
</script>

<style scoped>
.javascript {
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
