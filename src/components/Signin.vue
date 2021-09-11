<template>
<div id="Signin">
   <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="12"
        >
          <v-text-field
            label="email"
            placeholder="メール"
            type="email"
            v-model="email"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>


        <v-col
          cols="12"
          sm="6"
          md="12"
        >
          <v-text-field
            label="password"
            placeholder="パスワード"
            type="password"
            v-model="password"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col> 
      </v-row>
    </v-container>
  </v-form>
  <div class="text-center">
    <v-btn
      rounded
      color="primary"
      dark
    >
      Signin
    </v-btn>
  </div>
  <p>アカウントを持っていませんか？
      <router-link to="/signup">アカウントを作る</router-link>
    </p>
</div>
</template>
<script>
export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {}
}
</script>



<style lang="scss">
#Signin {
    width: 450px;
    margin: 0 auto;
    display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  v-container {
      margin: 0 auto;
      text-align: center;
  }
   p {
      margin-top: 2rem;
  }
}

</style>