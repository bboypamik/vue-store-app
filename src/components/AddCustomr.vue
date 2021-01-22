<template>
  <div>
    <form @submit.prevent="onSubmit">
       <div class="form-group">
    <label for="firstName">First Name</label>
    <input type="text" class="form-control" id="firstName" placeholder="first name">
  </div>
   <div class="form-group">
    <label for="lastName">Last Name </label>
    <input type="text" class="form-control" id="lastName" placeholder="last name">
  </div>
   <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="name@example.com">
  </div>  
  <button type="submit" class="btn btn-primary mt-4">Submit</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
