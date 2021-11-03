import {ref} from 'vue'


interface RegisterUser {
    name: string;
    email: string;
    password: string;
    password2: string;
    role: string;
  }

export const registerUser = ref<RegisterUser>({
    name: "",
    email: "",
    password: "",
    password2: "",
    role: "",
  });

  interface RegisterRules {
    name: ({
      message: string;
      required: boolean;
      trigger: string;
    } | {
      min: number;
      max: number;
      message: string;
      trigger: string;
    })[];
    email: {
      type: string;
      message: string;
      required: boolean;
      trigger: string;
    }[];
    password: ({
      required: boolean;
      message: string;
      trigger: string;
    } | {
      min: number;
      max: number;
      message: string;
      trigger: string;
    })[];
    password2: ({
      required: boolean;
      message: string;
      trigger: string;
  
    } | {
      min: number;
      max: number;
      message: string;
      trigger: string;
  
    } | {
      validator: (rule: RegisterRules, value: string, callback: any) => void;
      trigger: string;
    })[];
  }

  const validatePass2 = (rule:RegisterRules, value: string, callback: any) => {
    if (value === "") {
      callback(new Error("Please Entry Again"));
    } else if (value !== registerUser.value.password) {
      callback(new Error("The password is not the same!"));
    } else {
      callback();
    }
  };

 export const registerRules = ref<RegisterRules>({
    name: [
      {
        message: "Username cannnot be empty",
        required: true,
        trigger: "blur",
      },
      {
        min: 2,
        max: 30,
        message: "Length must between 2 to 30 characters",
        trigger: "blur",
      },
    ],
    email: [
      {
        type: "email",
        message: "Please input correct email address",
        required: true,
        trigger: "blur",
      },
    ],
    password: [
      {
        required: true,
        message: "Password can not be empty",
        trigger: "blur",
      },
      {
        min: 6,
        max: 30,
        message: "Password's length must be 6 to 30 characters",
        trigger: "blur",
      },
    ],
    password2: [
      {
        required: true,
        message: "Confirm password can not be empty",
        trigger: "blur",
      },
      {
        min: 6,
        max: 30,
        message: "Password's length must be 6 to 30 characters",
        trigger: "blur",
      },
      { validator: validatePass2, trigger: "blur" },
    ],
  });

 