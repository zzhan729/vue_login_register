import {ref} from 'vue'


interface User{
  email: string;
  password: string;
}

interface Rules{
  email: {
    type: string;
    message: string;
    trigger: string;
    required: boolean;
}[];
password: ({
    required: boolean;
    message: string;
    trigger: string;
    min?: undefined;
    max?: undefined;
} | {
    min: number;
    max: number;
    message: string;
    trigger: string;
    required?: undefined;
})[];
}

export const loginUser= ref<User>( {
    email:"",
    password:""
  })

export const rules= ref<Rules>( {
  email: [{ type: 'email',message: 'Please input correct email address',trigger: 'blur', required: true}],
  password: [
    {required:true, message:"Password can not be empty", trigger:'blur'},
    {min:6, max:30, message:"Password's length must be 6 to 30 characters",trigger:'blur'}
  ],
})