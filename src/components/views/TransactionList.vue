<template>
  <div class="container">
    <!-- 상단 헤더 -->
    <div class="header">
      <button @click="prevMonth">◀</button>
      <h2>{{ currentMonth }}월</h2>
      <button @click="nextMonth">▶</button>

      <input v-model="search" placeholder="내역 검색하기" />
    </div>

    <!-- 카테고리 필터 -->
    <div class="filters">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="{ active: selectedCategory === cat }"
        @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- 테이블 -->
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>날짜</th>
          <th>거래 내역</th>
          <th>금액</th>
          <th>카테고리</th>
          <th>메모</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredList" :key="item.id">
          <td><input type="checkbox" /></td>
          <td>{{ item.date }}</td>
          <td>{{ item.title }}</td>
          <td>{{ formatPrice(item.amount) }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.memo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const currentMonth = ref(10);
const search = ref('');
const selectedCategory = ref('전체');

const categories = ['전체', '고정된 결제', '교통비', '식비', '여가비'];

// 샘플 데이터
const list = ref([
  {
    id: 1,
    date: '4월 7일',
    title: '지하철',
    amount: 1350,
    category: '교통비',
    memo: '출근',
  },
  {
    id: 2,
    date: '4월 7일',
    title: '버스',
    amount: 1200,
    category: '교통비',
    memo: '',
  },
]);

// 필터링
const filteredList = computed(() => {
  return list.value.filter((item) => {
    const matchCategory =
      selectedCategory.value === '전체' ||
      item.category === selectedCategory.value;

    const matchSearch =
      item.title.includes(search.value) || item.memo.includes(search.value);

    return matchCategory && matchSearch;
  });
});

// 금액 포맷
const formatPrice = (price) => {
  return price.toLocaleString() + '원';
};

// 월 이동
const prevMonth = () => currentMonth.value--;
const nextMonth = () => currentMonth.value++;
</script>

<style scoped>
.container {
  padding: 20px;
  font-family: sans-serif;
}

.header {
  display: flex;
  gap: 10px;
  align-items: center;
}

.filters {
  margin: 15px 0;
}

.filters button {
  margin-right: 8px;
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background: #f5f5f5;
}

.filters .active {
  background: #4caf50;
  color: white;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 10px;
  border-bottom: 1px solid #eee;
  text-align: left;
}
</style>
