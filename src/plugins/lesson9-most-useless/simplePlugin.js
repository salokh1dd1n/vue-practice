import customComponentForPlugin from "../../components/lesson9-most-useless/customComponentForPlugin";
export default {
  install: (app) => {
    app.component("custom-component", customComponentForPlugin);
  },
};
