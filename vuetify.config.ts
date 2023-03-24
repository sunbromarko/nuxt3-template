import { config } from "@vue/test-utils";
import {vuetify} from "./plugins/vuetify";

// Install vuetify in globally in mock function
config.global.plugins.push(vuetify);

(global.CSS as any) = {supports : ()=>false}