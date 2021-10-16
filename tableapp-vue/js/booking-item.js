Vue.component("booking-item", {
    props:["item"],
    template:`
    <tr>
        <th scope="row">{{item.id}}</th>
        <td>{{item.name}}</td>
        <td>{{item.email}}</td>
        <td>{{item.pax}}</td>
        <td>{{item.remarks}}</td>
        <td>
            <booking-delete :deleteId="item.id"></booking-delete>
        </td>
    </tr>
    `
})