<template>
  <div class="container">
    <div>PORT 3001</div>
    <Search />
    <Result />
  </div>
</template>

<script>
import Search from 'home/Search';
import Result from 'home/Result';
import {HelloWorldMixin} from 'home/HelloWorldMixin'
export default {
  name: 'App',
  mixins: [HelloWorldMixin],
  components: {
    Search,
    Result
  }
}
</script>