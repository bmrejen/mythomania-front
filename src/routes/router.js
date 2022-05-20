// @ts-ignore
import WallPage from "../pages/Wall/WallPage.vue"
// @ts-ignore
import LoginPage from "../pages/LoginPage.vue"
// @ts-ignore
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { name: "login", path: "/login", component: LoginPage },
  { name: "signup", path: "/signup", component: LoginPage },
  { name: "home", path: "/home", component: WallPage },
  { path: "/", redirect: "/home" }
]
const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, from) => {
  if (isLoginRequired(to)) {
    return router.push("/login")
  }
})

function isLoginRequired(to) {
  if (!isPrivatePage(to)) return false
  if (!isTokenInCache()) return true
  return false
}

function isPrivatePage(to) {
  const publicPages = ["/login", "/signup"]
  return !publicPages.includes(to.path)
}

function isTokenInCache() {
  return localStorage.getItem("token") != null
}

export { router }
