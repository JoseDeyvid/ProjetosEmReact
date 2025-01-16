import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(3, "Campo deve possuir pelo menos 3 caracteres."),
    lastname: z.string().min(3, "Campo deve possuir pelo menos 3 caracteres."),
    gender: z.string().refine((field) => field !== "select", {
      message: "Selecione um Gênero.",
    }),
    email: z
      .string()
      .min(1, "Esse campo é obrigatório!")
      .email("Email inválido!"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres."),
    confirmpassword: z
      .string()
      .min(6, "Senha deve ter pelo menos 6 caracteres."),
    agree: z.boolean().refine((field) => field === true, {
      message: "Você precisa concordar com os termos.",
    }),
  })
  .refine((field) => field.password === field.confirmpassword, {
    message: "Senhas não coincidem.",
    path: ["confirmpassword"],
  });

export type FormSchema = z.infer<typeof formSchema>;
