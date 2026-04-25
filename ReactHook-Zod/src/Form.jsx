import { useForm } from "react-hook-form";
import "./App.css";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            {...register("name", { required: "Name can not be empty" })}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="second">Age : </label>
          <input
            id="second"
            {...register("age", {
              min: {
                value: 10,
                message: "Minimum Age Should be 10",
              },
            })}
            className={errors.age ? "error" : ""}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label htmlFor="third">Password : </label>
          <input
            id="third"
            {...register("password", { required: "Password needed" })}
            className={errors.password ? "error" : ""}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
