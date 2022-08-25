import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons"
import { fab } from '@fortawesome/free-brands-svg-icons';
import {far} from "@fortawesome/free-regular-svg-icons"
library.add(fas, far, fab);
const app = createApp(App);
app.component("FAIFatma", FontAwesomeIcon)
app.use(router).mount("#app");

