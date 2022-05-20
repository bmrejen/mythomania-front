<script>
import Card from "../../components/ui/Card/Card.vue"
import PostForm from "./PostForm.vue"
import { getUrlAndHeaders } from "./../../services/fetchOptions"
export default {
  name: "WallPage",
  components: {
    Card,
    PostForm
  },
  methods: {
    redirectToLoginIfNoToken() {
      const token = localStorage.getItem("token")
      console.log("token:", token)
      if (token == null) {
        this.$router.push("/login")
      }
    }
  },
  mounted() {
    this.redirectToLoginIfNoToken()
    const { url, headers } = getUrlAndHeaders()
    const options = {
      headers: { ...headers }
    }
    console.log("options:", { ...options })
    fetch(url + "posts/", options)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error("Failed to fetch posts")
        }
      })
      .then((res) => {
        console.log("res:", res)
        const { email, posts } = res
        this.posts = posts
        this.currentUser = email
      })
      .catch((err) => console.log("err:", err))
  },
  data() {
    return {
      posts: [],
      currentUser: null
    }
  }
}
</script>
<template>
  <div v-if="currentUser" class="container-sm">
    <div class="col-sm-12">
      <h1 class="text-center">Welcome, {{ currentUser }}</h1>
    </div>
    <PostForm></PostForm>
    <div v-if="posts.length === 0">No posts to display. Start chatting !</div>
    <div v-for="post in posts">
      <Card
        :currentUser="currentUser"
        :email="post.user.email"
        :content="post.content"
        :url="post.imageUrl"
        :comments="post.comments"
        :id="post.id"
      >
      </Card>
    </div>
  </div>
</template>
<style scoped>
h1 {
  font-size: 0.8em;
  font-weight: bold;
  color: #333;
  margin-block: 0.5em;
}
</style>
