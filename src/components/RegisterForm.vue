<template>
  <el-form
    ref="registerForm"
    :model="registerUser"
    :rules="registerRules"
    label-width="100px"
    class="registerForm sign-up-form"
  >
    <el-form-item label="Username" prop="name">
      <el-input v-model="registerUser.name" placeholder="Enter Username...">
      </el-input>
    </el-form-item>

    <el-form-item label="Email" prop="email">
      <el-input v-model="registerUser.email" placeholder="Enter Email...">
      </el-input>
    </el-form-item>

    <el-form-item label="Password" prop="password">
      <el-input
        v-model="registerUser.password"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>

    <el-form-item label="Confirm" prop="password2">
      <el-input
        v-model="registerUser.password2"
        type="password"
        placeholder="Confirm Password..."
      ></el-input>
    </el-form-item>

    <el-form-item label="Role">
      <el-select v-model="registerUser.role" placeholder="Select role">
        <el-option label="Admin" value="admin"></el-option>
        <el-option label="User" value="user"></el-option>
        <el-option label="Visitor" value="visitor"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button @click="handleRegister()" type="primary" class="submit_btn">
        Register
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ref, unref } from "@vue/reactivity";
import { useRouter } from "vue-router"
export default {
  props:{
      registerUser:{
          type:Object,
          require: true
      },
      registerRules:{
          type:Object,
          require: true
      }
  },
  setup(props) {
    const registerForm = ref(null);
    const router = useRouter();

    const handleRegister = () => {
      const form = unref(registerForm);
      console.log(form);
      form.validate((valid) => {
        if (valid) {
          form.axios.post("/api/v1/auth/register", 
          props.registerUser).then((res)=>{
              form.$message({
                  message:"Register successful",
                  type: "success"
              })
              router.push("/")
          })

          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    return {registerForm, handleRegister}
  },
};
</script>
    
<style>
/* register */
.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

</style>