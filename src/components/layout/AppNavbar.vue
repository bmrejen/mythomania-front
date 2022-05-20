<script>
import Logo from "../ui/svg/Logo.vue"

export default {
  name: "AppNavbar",
  components: { Logo },
  data() {
    return {
      isLoggedIn: false
    }
  },
  created() {
    const token = localStorage.getItem("token")
    if (token != null) {
      this.isLoggedIn = true
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("token")
      this.$router.go()
    }
  }
}
</script>
<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <router-link
          to="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <Logo class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap" />
        </router-link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <router-link to="/home" class="nav-link px-2 text-secondary">Home</router-link>
          </li>
        </ul>

        <div class="text-end">
          <button
            @click="this.logout"
            v-if="this.isLoggedIn"
            type="button"
            class="btn btn-outline-light me-2"
          >
            Logout
          </button>
          <button v-if="!this.isLoggedIn" type="button" class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </header>
</template>
<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1), inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
