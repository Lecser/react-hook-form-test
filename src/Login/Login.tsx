import React, { useState } from "react";
import classes from "./Login.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { ReactComponent as EyeIcon } from "../assets/Eye.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../schemas/loginValidation";

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
        <input
          className={classes.formInput}
          type={"email"}
          {...register("Email")}
        />
        <div className={classes.error}>
          {errors?.Email && <p>{errors?.Email.message}</p>}
        </div>
      </div>
      <div className={classes.formGroup}>
        <label className={classes.formLabel}>Password</label>

        <input
          className={classes.formInput}
          type={!showPassword ? "password" : "text"}
          {...register("Password")}
        />
        <EyeIcon
          className={classes.showPassword}
          onClick={() => setShowPassword(!showPassword)}
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
