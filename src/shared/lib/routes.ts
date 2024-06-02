import { createRoute } from "atomic-router";

export const routes = {
  home: createRoute(),
  auth: {
    signIn: createRoute(),
    forgotPassword: createRoute(),
  },
  protected: {
    manage: {
      plans: createRoute(),
      users: createRoute(),
      groups: createRoute(),
      courses: createRoute(),
      locations: createRoute(),
      dashboard: createRoute(),
      classrooms: createRoute(),
      disciplines: createRoute(),
    },
    chooseRole: createRoute(),
  },
  notFound: createRoute(),
  serverError: createRoute(),
  backToHomeRoute: createRoute(),
};
