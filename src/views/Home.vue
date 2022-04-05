<template>
  <div class="main">
    <h2>HTML, CSS, JavaScript, Vue에 대한 학습 및 정리</h2>
    <div class="home_item">
      <div class="lately">
        <div class="lately_title">최근 학습한 내용</div>
        <ul class="lately_items">
          <li class="lately_item">test1</li>
          <li class="lately_item"></li>
          <li class="lately_item"></li>
          <li class="lately_item"></li>
          <li class="lately_item"></li>
        </ul>
      </div>

      <div class="bookmark">
        <div class="bookmark_title">북마크</div>
        <ul class="bookmark_items">
          <li class="bookmark_item">test2</li>
          <li class="bookmark_item"></li>
          <li class="bookmark_item"></li>
          <li class="bookmark_item"></li>
          <li class="bookmark_item"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  margin: 40px;
}
.home_item {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: black 1px solid;
}

.lately {
  width: 50%;
  height: 100%;
  border: black 1px solid;
  max-width: 800px;
  min-height: 500px;
}

.lately_items {
  display: flex;
  flex-direction: column;
  text-align: start;
}

.bookmark_items {
  display: flex;
  flex-direction: column;
  text-align: start;
}

.bookmark {
  width: 50%;
  height: 100%;
  border: black 1px solid;
  max-width: 800px;
  min-height: 500px;
}
</style>
