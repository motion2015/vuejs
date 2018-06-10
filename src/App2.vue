<template>
  <div id="app">
    <app-registration @userRegistered="userRegisteredd" :usersAttrN="unregisteredUsers"></app-registration>
    <app-registrations @userUnregistered="userUnregisteredd" :registrationsAttrN="registrationss"></app-registrations>
  </div>
</template>

<script>
  import Registration from './components/Registration.vue';
  import registrationss from './components/Registrations.vue';
export default {
    data() {
        return {
            registrationss: [],
            users: [
                {id: 1, name: 'Max', registered: false},
                {id: 2, name: 'Anna', registered: false},
                {id: 3, name: 'Chris', registered: false},
                {id: 4, name: 'Sven', registered: false}
            ]
        }
    },
    computed: {
        unregisteredUsers() {
            return this.users.filter((user) => {
                return !user.registered;
            });
        }
    },
    methods: {
      userRegisteredd(user) {
          const date = new Date;
          console.log(date);
          console.log(date.getDay());
          this.registrationss.push({userId: user.id, name: user.name, date: date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate()})
      },
        userUnregisteredd(registration) {
          const user = this.users.find(user => {
              return user.id == registration.userId;
          });
          user.registered = false;
          this.registrationss.splice(this.registrationss.indexOf(registration), 1);
        }
    },
    components: {
        appRegistration: Registration,
        appRegistrations: registrationss
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>