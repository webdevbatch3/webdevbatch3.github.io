Vue.component("booking-delete", {
    props: ["deleteId"],
    template: `
    <button @click='deleteRecord(deleteId)' class='btn btn-danger'>Delete</button>
    `,
    methods: {
        deleteRecord: function (id) {
            let url = 'https://api.sheety.co/b9b23bacbce0fa05289abc34d8cf52e6/bookingkpt/bookings/' + id;
            fetch(url, {
                method: 'DELETE',
            })
                .then(() => {
                    alert("Record id " + id + " deleted!")
                    app.$children[2].GetBooking()
                });
        }
    }
})