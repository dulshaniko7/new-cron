<template>
  <div id="app">
    <div class="container">
      <h1>Vue 2 with year</h1>
      <Cron/>
<h1>Vue 2 without year</h1>
      <cron2/>
    </div>
  </div>
</template>

<script>

import Cron from "./components/Cron"
import cron2 from "@/components/cron2";

export default {
  name: 'App',
  components: {cron2,Cron}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tab-border {
  padding: 5%;
}
</style>
