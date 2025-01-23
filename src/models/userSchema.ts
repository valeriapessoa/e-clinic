import { z } from "zod";

export const userSchema = z.object({
  email: z
    .string()
    .email("O e-mail é inválido")
    .nonempty("O e-mail é obrigatório"),
  password: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .nonempty("A senha é obrigatória"),
  name: z
    .string()
    .min(3, "O nome completo deve ter pelo menos 3 caracteres")
    .max(30, "O nome completo deve ter no máximo 30 caracteres")
    .nonempty("O nome completo é obrigatório"),
  phone: z.string().optional(),
});
