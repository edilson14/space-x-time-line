<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>Lançamentos de Space-X</h2>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-timeline v-if="launches.length > 0">
          <LaunchTimeLineItem
            v-for="(launch, index) in launches"
            :key="index"
            :launch="launch"
          />
        </v-timeline>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import LaunchTimeLineItem from "./components/LauncheTimeLimeItem";
export default {
  name: "App",

  components: {
    LaunchTimeLineItem,
  },

  data: () => ({
    launches: [],
  }),
  async created() {
    const { data } = await axios.get("https://api.spacexdata.com/v3/launches");
    data.forEach((launche) => {
      this.launches.push(launche);
    });
  },
};
</script>
