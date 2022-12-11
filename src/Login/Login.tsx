import { useState } from "react";
import classes from "./Login.module.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../schemas/loginValidation";
import { TextField } from "../components/TextField";

type LoginFormType = {
  Email: string;
  Password: string;
  rememberMe: boolean;
};

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<LoginFormType>({
    mode: "onBlur",
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
      <h1 className={classes.title}>Sing in</h1>
      <div className={classes.formGroup}>
        <label className={classes.formLabel}>Email</label>
        <Controller
          defaultValue={""}
          name={"Email"}
          control={control}
          render={({ field }) => (
            <TextField textFieldMode={"nonOutlined"} {...field} />
          )}
        />
        <div className={classes.error}>
          {errors?.Email && <p>{errors?.Email.message}</p>}
        </div>
      </div>
      <div className={classes.formGroup}>
        <label className={classes.formLabel}>Password</label>
        <Controller
          defaultValue={""}
          name={"Password"}
          control={control}
          render={({ field }) => (
            <TextField
              type={!showPassword ? "password" : "text"}
              onClick={() => setShowPassword(!showPassword)}
              textFieldMode={"nonOutlined"}
              {...field}
            />
          )}
        />
        <div className={classes.error}>
          {errors?.Password && <p>{errors?.Password.message}</p>}
        </div>
      </div>
      <input type="checkbox" {...register("rememberMe")} />
      <span className={classes.checkboxText}>Remember me</span>
      <a href={"#"} className={classes.passRecovery}>
        Forgot Password?
      </a>
      <button className={classes.formButton} disabled={!isValid}>
        Sing in
      </button>
      <span className={classes.question}>Already have an account?</span>
      <a className={classes.signUpLink} href="#">
        Sign Up
      </a>
    </form>
  );
};
