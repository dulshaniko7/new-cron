<template>
  <div id="app">
    <div class="container">Hiii</div>
    <div class="container border tab-border">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab" aria-controls="home" aria-selected="false">Second</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="minute-tab" data-toggle="tab" href="#minute" role="tab" aria-controls="profile" aria-selected="true">Minutes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="hour-tab" data-toggle="tab" href="#hour" role="tab" aria-controls="contact" aria-selected="false">Hours</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="day-tab" data-toggle="tab" href="#day" role="tab" aria-controls="contact" aria-selected="false">Day</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="month-tab" data-toggle="tab" href="#month" role="tab" aria-controls="contact" aria-selected="false">Months</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="year-tab" data-toggle="tab" href="#year" role="tab" aria-controls="contact" aria-selected="false">Year</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active content" id="second" role="tabpanel">
          <h3>Every second</h3>

        </div>
        <div class="tab-pane fade content" id="minute" role="tabpanel" ></div>
        <div class="tab-pane fade content" id="hour" role="tabpanel">ccccccccccccccccccccccccc</div>
        <div class="tab-pane fade show  content" id="day" role="tabpanel" >aaaaaaaaaaaaaaaaaaaaaaaaa</div>
        <div class="tab-pane fade content" id="month" role="tabpanel">bbbbbbbbbbbbbbbbbbb</div>
        <div class="tab-pane fade content" id="year" role="tabpanel">ccccccccccccccccccccccccc</div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
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
.tab-border{
  padding: 5%;
}
</style>
