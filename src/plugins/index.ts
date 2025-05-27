// import router from "../router";
import { registerAxios } from "./axios";
import i18n from "./i18n";

registerAxios(app);
app.use(router);
app.use(i18n);
