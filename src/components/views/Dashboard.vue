<template>
  <div>
    <h1>Home</h1>
    <button @click="goToList">거래 내역 보기</button>
    <!-- <button @click="goTodashtran">대쉬보드 거래내역 보기</button> -->
  </div>
  <Summary></Summary>
  <UpcomingTransaction></UpcomingTransaction>
  <RecentTransaction></RecentTransaction>
</template>

<script setup>
import { useRouter } from 'vue-router';
import UpcomingTransaction from '../dashboard/UpcomingTransaction.vue';
import RecentTransaction from '../dashboard/RecentTransaction.vue';
import summary from '../dashboard/summary.vue';
import Summary from '../dashboard/summary.vue';

const router = useRouter();

const goToList = () => {
  router.push('/api/data'); // /transactions 경로로 이동
};
const goTodashtran = () => {
  router.push('/api/upcoming'); // /UpcomingTransactions 경로로 이동
};
</script>
