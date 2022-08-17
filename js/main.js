const app = Vue.createApp ({
    data: ()=> ({
        message: 'Hello <span style="color:red;">PiyoPiyo!</span>'
    }),
    methods: {
        clickHandler: function(event) {
            this.message = this.message.split("").reverse().join("")
        }
    }
})
app.mount("#app")