<template>
    <div classs="hello">
        <app-message></app-message>
        <app-2></app-2>
        {{mag}}
    </div>
</template>
<script>
export default {
    name : 'hello',
    data () {
        return {
            mag : 'Welcome  to Your Vue.js App'
        }
    }
}
</script>

<style>
</style>