<template>
    <div>
         <P>{{msg}}</P>
        <input type="text" v-bind:value="msg" @input="changeMessage">
         <P>{{message}}</P>
    </div>
</template>
<script>
export default {
    props : ['msg'],
    data () {
        return {
            message :''
        }
    },
    methods : {
        changeMessage(event) {
            this.message = event.target.value;
            this.$emit('messageChanged', this.message)
        }
    }
}
</script>