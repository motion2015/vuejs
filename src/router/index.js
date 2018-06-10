import Vue from 'vue'
import Router from 'vue-router'
import Home from '../App.vue'
import hello from '../components/Hello'
import Meetups from '../components/Meetups'
import CreateMeetup from '../components/CreateMeetup'
import Meetup from '../components/Meetup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      props: true,
      component: Meetup
    }
  ],
  mode: 'history'
})