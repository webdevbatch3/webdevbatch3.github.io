let app = new Vue({
    el: "#app",
    data: {
        message:"Hello Vue!"
    }
});

let app2 = new Vue({
    el: "#app2",
    data: {
        message: "Loaded on " + new Date().toLocaleString(),
        linkUrl: "https://bbc.in/2LAnJs8",
        linkText: "Google is down!"
    }
});

let app3 = new Vue({
    el: "#app3",
    data: {
        showIt: false
    }
});

let app4 = new Vue({
    el: "#app4",
    data: {
        theList: [
            {
                text:"Learn HTML"
            },
            {
                text:"Learn CSS"
            },
            {
                text:"Learn Javascript"
            }
        ]
    }
});

let app5 = new Vue({
    el: "#app5",
    data: {
        msg: "Hakim Ariff"
    },
    method: {
        reverseMsg: function (){
            this.msg = this.msg.split("").reverse().join("");
        }
    }
});