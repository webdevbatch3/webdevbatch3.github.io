Vue.component("booking-form", {
    template: `
    <div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="userName">Name</label>
                    <input v-model="userName" type="text" class="form-control" id="userName">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="userEmail">Email</label>
                    <input v-model="userEmail" type="text" class="form-control" id="userEmail">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="userPax">Pax</label>
                    <select v-model="userPax" class="form-control" id="userPax">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="userRemarks">Remarks</label>
                    <textarea v-model="userRemarks" class="form-control" id="userRemarks" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-primary float-right" id="bookNowBtn" @click="BookNow">Book Now</button>
            </div>
        </div>
    </div>
    `,
    data: function () {
        return {
            userName: "",
            userEmail: "",
            userPax: "",
            userRemarks: ""
        }
    },
    methods: {
        BookNow: function () {
            let url = 'https://api.sheety.co/b9b23bacbce0fa05289abc34d8cf52e6/bookingkpt/bookings';
            let body = {
                booking: {
                    name: this.userName,
                    email: this.userEmail,
                    pax: this.userPax,
                    remarks: this.userRemarks
                }
            }
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((response) => response.json())
                .then(json => {
                    alert("ID: " + json.booking.id + ", " + json.booking.name + " successfully added!")
                });
        }
    }
})