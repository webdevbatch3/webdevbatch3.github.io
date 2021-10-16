Vue.component("jumbotron", {
    props: ["page"],
    data: function(){
        return {
            showButton: false
        }
    },
    template: `
    <div class="row">
        <div class="col">
            <div class="jumbotron">
                <h1 class="display-4">{{page.mainTitle}}!</h1>
                <p class="lead">{{page.subTitle}}</p>
                <hr v-if="showButton" class="my-4">
                <a v-if="showButton" class="btn btn-primary btn-lg" :href="page.buttonUrl" role="button">{{page.buttonText}}</a>
            </div>
        </div>
    </div>
    `,
    created: function (){
        if(this.page.buttonUrl == undefined){
            this.showButton = false
        } else {
            this.showButton = true
        }
    }
})