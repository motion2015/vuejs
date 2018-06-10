<template>
  <div id="app">
    <!-- <app-registration @userRegistered="userRegisteredd" :usersAttrN="unregisteredUsers"></app-registration> -->
    <app-registration></app-registration>
    <!-- <app-registrations @userUnregistered="userUnregisteredd" :registrationsAttrN="registrationss"></app-registrations> -->
    <app-registrations></app-registrations>
  </div>
</template>

<script>
  import Registration from './components/Registration.vue';
  import registrationss from './components/Registrations.vue';
export default {
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