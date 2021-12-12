<template>
  <v-app>
    <v-content>
      <Calendar />
    </v-content>
  </v-app>
</template>

<script>
//import TodoList from "@/components/TodoList.vue"
import Calendar from "@/components/Calendar.vue"

export default {
  name: "App",
  components: {
    Calendar,
  },
  data: function () {
    return {}
  },
  methods: {},
}
</script>
