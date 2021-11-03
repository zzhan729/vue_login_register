<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    label-width="100px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="Email" prop="email">
      <el-input v-model="loginUser.email" placeholder="Enter Email...">
      </el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button @click="handleLogin()" type="primary" class="submit_btn">
        Login
      </el-button>
    </el-form-item>
    <!-- Forget password-->
    <div class="forget">
      <p>Forget Password?</p>
    </div>
  </el-form>

  <!--signup-->
</template>
<script>
import { ref, unref } from "@vue/reactivity";
import { useRouter } from "vue-router"
export default {
  props: {
    loginUser: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const loginForm = ref(null);
    const router = useRouter();
    //login method
    const handleLogin = () => {
      const form = unref(loginForm);
      
      form.validate((valid) => {
        console.log(props.loginUser)
        if (valid) {
          
          form.axios.post("/api/v1/auth/login"
          , props.loginUser)
          .then((res) => {
            console.log(res.data);
            const { token } = res.data;
            localStorage.setItem("msToken", token)
            router.push("/")

          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    return { loginForm, handleLogin };
  },
};
</script>
<style  scoped>
/* Login */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}
.forget {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.forget p {
  color: #04befe;
}

.submit_btn {
  width: 100%;
}
</style>