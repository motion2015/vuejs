<template>
    <div id="registration">
        <h3>Register here</h3>
        <hr>
        <div class="row" v-for="user in usersAttrN">
            <h4>{{ user.name }}</h4>
            <button @click="registerUser(user)">Register</button>
        </div>
    </div>
</template>

<script>
    export default {
        // props: ['usersAttrN'],
        computed: {
            usersAttrN() {
                return this.$store.state.users.filter(user => {
                    return !user.registered;
                })
            }
        },
        methods: {
            registerUser(user) {
                // this.$emit('userRegistered', user);
                 const date = new Date;
                user.registered = true;
                this.$store.state.registrationss.push({userId: user.id, name: user.name, date: date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate()})
            }
        }
    }
</script>

<style scoped>
    #registration {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
    }
    .row h4 {
        display: inline-block;
        width: 70%;
        text-align: left;
        margin: 0 0 10px 0;
    }
    button {
        background-color: lightgreen;
        border: none;
        box-shadow: 1px 1px 1px black;
        font-size: inherit;
        text-align: right;
        cursor: pointer;
    }
    button:hover {
        background-color: green;
    }
</style>