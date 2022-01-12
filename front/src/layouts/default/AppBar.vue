<template>
  <v-app-bar app color="white" flat>
    <v-row>
      <v-col cols="12" sm="5"></v-col>
      <v-col cols="12" sm="6">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn outlined color="primary" dark v-bind="attrs" v-on="on">
              pc
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in pc"
              :key="index"
              link
              :to="item.to"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn outlined color="primary" dark v-bind="attrs" v-on="on">
              SWITCH
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in nentendo"
              :key="index"
              link
              :to="item.to"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn outlined color="primary" dark v-bind="attrs" v-on="on">
              PLAYSTATION
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in playstation"
              :key="index"
              link
              :to="item.to"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn outlined color="primary" dark v-bind="attrs" v-on="on">
              XBOX
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in xbox"
              :key="index"
              link
              :to="item.to"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="12" sm="1">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn flat color="grey" dark v-bind="attrs" v-on="on" fab
              ><v-icon large>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              link
              :to="item.to"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "DefaultAppBar",
  data: () => ({
    pc: [
      { title: "게임소프트", to: "/pc-gamesoft" },
      { title: "주변기기", to: "/pc-peripherals" },
    ],
    nentendo: [
      { title: "게임소프트", to: "/nentendo-gamesoft" },
      { title: "주변기기", to: "/nentendo-peripherals" },
    ],
    playstation: [
      { title: "게임소프트", to: "/playstation-gamesoft" },
      { title: "주변기기", to: "/playstation-peripherals" },
    ],
    xbox: [
      { title: "게임소프트", to: "/xbox-gamesoft" },
      { title: "주변기기", to: "/xbox-peripherals" },
    ],
    items: [
      { title: "로그인", to: "/auth/login" },
      { title: "내 정보", to: "/auth/userinfo" },
      { title: "로그아웃", to: "/auth/logout" },
    ],
  }),
};
</script>

<style></style>
