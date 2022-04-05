<template>
  <div id="List">
    <!-- <ol class="htmlcss_items">   
      <li v-for="item in items" class="htmlcss_item" :key="item.id"> // 클릭 이벤트 넣어서 누를 시 모달창으로 각 데이터 값 보여주기
        {{ item.text }}
      </li>
    </ol> -->
  </div>
</template>

<script>
export default {
  name: "htmlcsscont",
};
// const List = {
//   data() {
//     return {
//       items: [
//         { id: "0", text: "test1" },
//         { id: "1", text: "test2" },
//         { id: "2", text: "test3" },
//       ],
//     };
//   },
// };
</script>

<style scoped>
.htmlcss_item {
  color: black;
}
</style>
