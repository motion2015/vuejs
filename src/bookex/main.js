const app= new Vue({
    el: "#app",
    data :{
        friends:[]
    },    
    mounted(){
        fetch("./api/friends.json")
        .then(response)
        .then((data) => {
          this.friends = data
        })
    },
    template: `
    <div>
        <li v-for="friend in friends">{{friend}}</li>
    </div>
    `,
})