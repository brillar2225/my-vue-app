<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat>
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            Today
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small> mdi-chevron-left </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small> mdi-chevron-right </v-icon>
          </v-btn>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @dayclick="showEvent"
          :activator="selectedElement"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          slot=""
          offset-y
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-row>
              <v-col>
                <v-checkbox :input-value="active" color="primary"></v-checkbox>
                <v-text-field
                  v-model="inputList"
                  label="Add the list"
                  outlined
                  clearable
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
//import { db } from "@/main"

export default {
  data: () => ({
    focus: "",
    type: "month",
    color: "#1976D2",
    events: [],
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    Todos: [],
    newItem: "",
  }),
  mounted() {
    this.$refs.calendar.checkChange()
  },
  methods: {
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = ""
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    showEvent() {},
  },
}
</script>
