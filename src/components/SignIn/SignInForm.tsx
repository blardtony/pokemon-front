import { Controller, useForm } from "react-hook-form";
import type { SignInInputsType } from "../../types/auth.type";
import { subscribe } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Calendar } from "../UI/Form/Input/Calendar";

const SignInForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInInputsType>({
    defaultValues: {
      login: "",
      password: "",
      lastName: "",
      firstName: "",
      birthDate: null,
    },
  });

  // const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const obSubmit = async (data: SignInInputsType) => {
    const { login, password, lastName, firstName, birthDate } = data;
    const authResult = await subscribe({
      login,
      password,
      lastName,
      firstName,
      birthDate: birthDate?.toISOString() ?? "",
    });

    if (authResult.errorDetails) {
      setError(
        "root",
        {
          message: authResult.errorDetails,
        },
        { shouldFocus: true },
      );
      return;
    }

    navigate("/");
  };
  console.log(errors.root);
  return (
    <form onSubmit={handleSubmit(obSubmit)}>
      <Controller
        name="login"
        control={control}
        rules={{
          required: "Email is required",
          pattern: { value: /^\S+@\S+\.\S+/i, message: "Invalid email" },
        }}
        render={({ field, fieldState }) => (
          <>
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                {...field}
                type="text"
                placeholder="Email"
                className={`input input-bordered w-full ${
                  fieldState.error ? "input-error" : ""
                }`}
              />
              {fieldState.error && (
                <div className="label">
                  <span className="text-error">{fieldState.error.message}</span>
                </div>
              )}
            </label>
          </>
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: "Password is required" }}
        render={({ field, fieldState }) => (
          <>
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                {...field}
                type="password"
                placeholder="Password"
                className={`input input-bordered w-full ${
                  fieldState.error ? "input-error" : ""
                }`}
              />
              {fieldState.error && (
                <div className="label">
                  <span className="text-error">{fieldState.error.message}</span>
                </div>
              )}
            </label>
          </>
        )}
      />

      <Controller
        name="lastName"
        control={control}
        rules={{ required: "Last name is required" }}
        render={({ field, fieldState }) => (
          <>
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Last name</span>
              </div>
              <input
                {...field}
                type="text"
                placeholder="Last name"
                className={`input input-bordered w-full ${
                  fieldState.error ? "input-error" : ""
                }`}
              />
              {fieldState.error && (
                <div className="label">
                  <span className="text-error">{fieldState.error.message}</span>
                </div>
              )}
            </label>
          </>
        )}
      />
      <Controller
        name="firstName"
        control={control}
        rules={{ required: "First name is required" }}
        render={({ field, fieldState }) => (
          <>
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">First name</span>
              </div>
              <input
                {...field}
                type="text"
                placeholder="First name"
                className={`input input-bordered w-full ${
                  fieldState.error ? "input-error" : ""
                }`}
              />
              {fieldState.error && (
                <div className="label">
                  <span className="text-error">{fieldState.error.message}</span>
                </div>
              )}
            </label>
          </>
        )}
      />
      <Controller
        name="birthDate"
        control={control}
        rules={{ required: "Birth day is required" }}
        render={({ field, fieldState }) => (
          <>
            <Calendar
              value={field.value}
              onChange={(e) => field.onChange(e.value)}
              placeholder="Birth day date"
              className={"w-full"}
              invalid={!!fieldState.error}
            />
            {fieldState.error && (
              <div className="label">
                <span className="text-error">{fieldState.error.message}</span>
              </div>
            )}
          </>
        )}
      />

      {errors.root && (
        <div className="text-error mb-4">{errors.root.message}</div>
      )}
      <button className="btn btn-primary" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default SignInForm;
