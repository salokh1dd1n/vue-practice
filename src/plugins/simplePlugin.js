import customComponentForPlugin from "../components/customComponentForPlugin";
export default {
  install: (app) => {
    app.component("custom-component", customComponentForPlugin);
  },
};
