import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../firebase/config'

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser

  console.log('current user in auth guard: ', user)

  if(!user){
    next({ name: 'Welcome'})
  }else{
    // allow view-router to carry on to next route
    next()
  }
 
}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser

  if(user){
    next({ name: 'Chatroom'})
  }else{
    // allow view-router to carry on to next route
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/Chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
