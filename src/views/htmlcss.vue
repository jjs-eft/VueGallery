<template>
  <div class="htmlcss">
    <h2>HTML/CSS에 대한 학습 및 정리</h2>
    <div class="main">
      <ul class="htmlcss_items">
        <li class="htmlcss_item">test1</li>
        <li class="htmlcss_item"></li>
        <li class="htmlcss_item"></li>
        <li class="htmlcss_item"></li>
        <li class="htmlcss_item"></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.htmlcss {
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
