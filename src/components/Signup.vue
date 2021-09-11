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
            label="name"
            placeholder="名前"
            type="text"
            v-model="username"
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
      @click="signUp"
      rounded
      color="primary"
      dark
    >
      Signup
    </v-btn>
  </div>
  <p>アカウントを持っていますか？
      <router-link to="/signin">ログインする</router-link>
    </p>
</div>
</template>

<script>
export default {
  name: 'Signin',
  data () {
    return {
      username: '',
      email:'',
      password: ''
    }
  },
  methods: {
     signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.email, this.password)
        .then(user => {
          alert('Create account: ', user.email)
        })
        .catch(error => {
          alert(error.message)
        })
     }
  }
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