import { useForm } from "react-hook-form";
import { formSchema, FormSchema } from "../schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const useForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  return { register, handleSubmit, errors };
};

export default useForms;
