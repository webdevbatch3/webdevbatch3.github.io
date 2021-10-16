Vue.component("booking-list", {
    data: function () {
        return {
            jsonFromSheety: ""
        }
    },
    template: `
    <div class="row">
        <div class="col">
            <button type="button" class="btn btn-warning" ref="refreshNowBtn" @click="GetBooking">Refresh Now</button>
            <table class="table table-striped" id="bookingNameList">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Pax</th>
                        <th scope="col">Remarks</th>
                        <th scope="col">Task</th>
                    </tr>
                </thead>
                <tbody>
                    <booking-item v-for="item in jsonFromSheety" v-bind:item="item" :key="item.id"></booking-item>
                </tbody>
            </table>
        </div>
    </div>
    `,
    methods: {
        GetBooking: function () {
            let url = 'https://api.sheety.co/b9b23bacbce0fa05289abc34d8cf52e6/bookingkpt/bookings';
            fetch(url)
                .then((response) => response.json())
                .then(json => {
                    this.jsonFromSheety = json.bookings
                });
        }
    }
})