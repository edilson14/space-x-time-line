<template>
  <v-timeline-item large>
    <template v-slot:icon>
      <v-avatar>
        <img :src="launch.links.mission_patch_small" />
      </v-avatar>
    </template>
    <template v-slot:opposite>
      <span>{{ launchDate }}</span>
    </template>
    <v-card class="elevation-2">
      <v-row>
        <v-col cols="10" md="10">
          <v-card-title class="headline">
            {{ launch.mission_name }}
          </v-card-title>
          <v-card-subtitle>
            <h4>Foguete:</h4>
            {{ launch.rocket.rocket_name }}
          </v-card-subtitle>
          <v-card-text>
            <h4>Detalhes</h4>
            {{ launch.details }}
          </v-card-text>
        </v-col>
        <v-col class="text-right" md="2" sm="2" cols="2">
          <v-icon
            size="30"
            color="sucess"
            v-if="launch.launch_success"
            title="Sucesso no lançamento"
          >
            mdi-checkbox-marked-circle
          </v-icon>
          <v-icon title="Lançamento falhado" size="30" color="danger" v-else>
            mdi-close-circle
          </v-icon>
        </v-col>
      </v-row>
    </v-card>
  </v-timeline-item>
</template>

<script>
import moment from "moment";
moment.locale("pt-br");
export default {
  props: ["launch"],
  computed: {
    launchDate() {
      return moment(this.launch.launch_date_local).format(
        "DD [de] MMMM [de] YYYY [às] HH:MM"
      );
    },
  },
};
</script>
