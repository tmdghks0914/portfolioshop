import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from "../layouts/default/Index";
import Authentication from "../layouts/authentication/Index";
import Login from "../views/authentication/Login";
import Register from "../views/authentication/Register";
import UserInfo from "../views/authentication/UserInfo";
import NentendoGameSoft from "../views/nentendo/GameSoft";
import NentendoPeripherals from "../views/nentendo/Peripherals";
import PlaystationGameSoft from "../views/playstation/GameSoft";
import PlaystationPeripherals from "../views/playstation/Peripherals";
import XboxGameSoft from "../views/xbox/GameSoft";
import XboxPeripherals from "../views/xbox/Peripherals";
import PcGameSoft from "../views/pc/GameSoft";
import PcPeripherals from "../views/pc/Peripherals";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/nentendo-gamesoft",
        name: "NentendoGameSoft",
        component: NentendoGameSoft,
      },
      {
        path: "/nentendo-peripherals",
        name: "NentendoPeripherals",
        component: NentendoPeripherals,
      },
      {
        path: "/playstation-gamesoft",
        name: "PlaystationGameSoft",
        component: PlaystationGameSoft,
      },
      {
        path: "/playstation-peripherals",
        name: "PlaystationPeripherals",
        component: PlaystationPeripherals,
      },
      {
        path: "/xbox-gamesoft",
        name: "XboxGameSoft",
        component: XboxGameSoft,
      },
      {
        path: "/xbox-peripherals",
        name: "XboxPeripherals",
        component: XboxPeripherals,
      },
      {
        path: "/pc-gamesoft",
        name: "PcGameSoft",
        component: PcGameSoft,
      },
      {
        path: "/pc-peripherals",
        name: "PcPeripherals",
        component: PcPeripherals,
      },
    ],
  },
  {
    path: "/auth",
    component: Authentication,
    children: [
      {
        path: "login",
        name: "Login",
        component: Login,
      },
      {
        path: "register",
        name: "Register",
        component: Register,
      },
      {
        path: "userInfo",
        name: "UserInfo",
        component: UserInfo,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
