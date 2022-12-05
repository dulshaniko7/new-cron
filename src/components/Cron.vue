<template>
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
      <div class="tab-pane fade content" id="minute" role="tabpanel"></div>
      <div class="tab-pane fade content" id="hour" role="tabpanel">ccccccccccccccccccccccccc</div>
      <div class="tab-pane fade show  content" id="day" role="tabpanel">aaaaaaaaaaaaaaaaaaaaaaaaa</div>
      <div class="tab-pane fade content" id="month" role="tabpanel">bbbbbbbbbbbbbbbbbbb</div>
      <div class="tab-pane fade content" id="year" role="tabpanel">ccccccccccccccccccccccccc</div>
    </div>
    <div>
      <div class="counter">{{ counter }}</div>
    </div>
    <div>


      <div class="mt-2 grey--text text--darken-1">cron expression: {{ value }}</div>
    </div>
  </div>
</template>

<script>



export default {
  props: {
    init: {
      type: String,
      default: '30 12,19 24 12 *'
    }
  },
  name: "Cron",
  components: {

  },
  data() {
    return {
      counter: 0,
      value: this.init,
      fields:
          [
            {id: 'minute'},
            {id: 'hour'},
            {id: 'day'},
            {id: 'month'},
            {id: 'dayOfWeek'},
          ],
      periods: [
        {id: 'minute', text: 'Minute', value: []},
        {id: 'hour', text: 'Hour', value: ['minute']},
        {id: 'day', text: 'Day', value: ['hour', 'minute']},
        {id: 'week', text: 'Week', value: ['dayOfWeek', 'hour', 'minute']},
        {id: 'month', text: 'Month', value: ['day', 'dayOfWeek', 'hour', 'minute']},
        {id: 'year', text: 'Year', value: ['month', 'day', 'dayOfWeek', 'hour', 'minute']},
      ],
      locale: "en",

      error: ''
    }
  },
  created() {

  },
  methods: {}
}
</script>

<style scoped>

</style>