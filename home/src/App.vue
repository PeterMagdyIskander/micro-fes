<template>
  <div class="container">
    <Search />
    <Result />
  </div>
</template>

<script>
import Search from './components/Search.vue';
import Result from './components/Result.vue';
export default {
  name: 'App',
  components: {
    Search,
    Result
  }
}
</script>