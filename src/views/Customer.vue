<template>
  <div>
    <table class="table">
  <thead>
    <add-customer></add-customer>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="customer in customers" :key="customer.id">
      <td>{{customer.id}}</td>
      <td>{{customer.firstName}}</td>
      <td>{{customer.lastName}}</td>
      <td>{{customer.email}}</td>
      <td><button @click="removeCustomer(customer.id)" type="button" class="btn btn-danger">X</button></td>
    </tr>
  </tbody>
</table>
  </div> 
</template>

<script>
import AddCustomr from '../components/AddCustomr.vue'
export default {
  components: { AddCustomr },

  data(){
    return{
      customers: [
      {
      id: 1,
      firstName: "Miro",
      lastName: 'Pantos',
      email: 'bboypamik@gmail.com'
      },
        {
          id: 2,
          firstName: "Bjanka",
          lastName: 'Miric',
          email: 'Bjanka@gmil.com'
        }
      ]
    }
  },
  methods:{
    removeCustomer(customer){
       this.customers = this.customers.filter(value => value.id !== customer)
    }
  }
}
</script>

<style>

</style>
