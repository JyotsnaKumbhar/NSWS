import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./App.css";

const formSchema = z
  .object({
    name: z
      .string()
      .min(3, "Minimumn lenght should be 3")
      .max(10, "Max length should be 10"),
    age: z.coerce
      .number()
      .min(30, "Minimumn age should be 3")
      .max(80, "Max age should be 80"),
    password: z
      .string()
      .min(5, "Minimumn length should be 3")
      .max(10, "Max length should be 80"),
    email: z.email("Email is invalid"),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Password dont match",
    path: ["confirm"],
  });

function ZodForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  function submitForm(data) {
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="first">Name : </label>
          <input
            id="first"
            {...register("name")}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="fourth">Email : </label>
          <input
            id="second"
            {...register("name")}
            className={errors.name ? "error" : ""}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="second">Age : </label>
          <input
            id="third"
            {...register("age")}
            className={errors.name ? "error" : ""}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label htmlFor="third">Password : </label>
          <input
            id="fourth"
            {...register("password")}
            className={errors.name ? "error" : ""}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div>
          <label htmlFor="fifth">Confirmed Password : </label>
          <input
            id="fifth"
            {...register("confirm")}
            className={errors.name ? "error" : ""}
          />
          {errors.confirm && <span>{errors.confirm.message}</span>}
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}

export default ZodForm;
