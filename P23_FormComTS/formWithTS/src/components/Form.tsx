import React from "react";
import useForms from "../hooks/useForms";
import { FormSchema } from "../schemas/formSchema";

const Form = () => {
  const { handleSubmit, register, errors } = useForms();
  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-96 bg-white p-4 rounded-md border border-slate-300"
    >
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          {...register("name")}
          placeholder="Digite seu nome..."
          className="h-10 pl-2 rounded-md border border-slate-300"
        />
        {errors.name && (
          <small className="text-red-500 italic">{errors.name.message}</small>
        )}
      </div>

      <button
        type="submit"
        className="w-full h-11 bg-cyan-400 rounded-md my-2 hover:bg-cyan-500 transition-all"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default Form;
