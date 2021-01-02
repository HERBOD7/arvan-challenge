export default [
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "LogIn" */ "@/views/LogIn"),
    meta: {
      layout: () => import(/* webpackChunkName: "Auth" */ "@/layouts/Auth"),
      requiresAuth: false
    }
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "@/views/Register"),
    meta: {
      layout: () => import(/* webpackChunkName: "Auth" */ "@/layouts/Auth"),
      requiresAuth: false
    }
  },
  {
    path: "/article",
    name: "article",
    component: () => import(/* webpackChunkName: "Posts" */ "@/views/Posts"),
    meta: {
      layout: () =>
        import(/* webpackChunkName: "Dashboard" */ "@/layouts/Dashboard"),
      requiresAuth: true
    }
  },
  {
    path: "/articles/create",
    name: "crate-article",
    component: () =>
      import(/* webpackChunkName: "NewArticle" */ "@/views/NewArticle"),
    meta: {
      layout: () =>
        import(/* webpackChunkName: "Dashboard" */ "@/layouts/Dashboard"),
      requiresAuth: true
    }
  },
  {
    path: "/articles/:slug",
    name: "edit-article",
    component: () =>
      import(/* webpackChunkName: "EditArticle" */ "@/views/EditArticle"),
    meta: {
      layout: () =>
        import(/* webpackChunkName: "Dashboard" */ "@/layouts/Dashboard"),
      requiresAuth: true
    }
  },
  {
    path: "*",
    redirect: "/article"
  }
];
