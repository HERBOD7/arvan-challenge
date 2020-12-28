import storage from "@/utils/storage";

export default async (to, from, next) => {
  const requiresAuth = to?.matched?.some(r => r?.meta?.requiresAuth);
  const isAuthenticated = storage.getItem("user");

  if (requiresAuth) {
    if (isAuthenticated) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    if (isAuthenticated) {
      next({ name: "article" });
    } else {
      next();
    }
  }
};