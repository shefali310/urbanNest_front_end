import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";
import "../css/urbanNest.css";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { showToast } = useAppContext();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form
      className="flex flex-col border-2 border-black  rounded-md gap-5 mx-auto max-w-md p-5"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl text-orange font-bold ">Sign In</h2>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        ></input>
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "password must be at least  6 characters",
            },
          })}
        ></input>
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>

      <span className="flex items-center justify-between">
        <span className="text-sm">
          Not Registered?{" "}
          <Link to="/register" className="font-bold underline">
            Create an account
          </Link>
        </span>
        <span className="text-sm">
          <Link to="/forgot-password" className="font-bold underline">
            Forgot password?
          </Link>
        </span>
      </span>

      <div className="w-200">
        <button
          type="submit"
          className="bg-orange text-gray p-2 rounded font-bold"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default SignIn;
