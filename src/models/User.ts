import { Schema, model, models } from "mongoose";

export interface UserDocument {
  email: string;
  password: string;
  name: string;
  phone: string;
  image: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "O e-mail é obrigatório"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "O e-mail é inválido",
      ],
    },
    password: {
      type: String,
      required: [true, "O nome completo é obrigatório"],
      select: false,
    },
    name: {
      type: String,
      required: [true, "O nome completo é obrigatório"],
      minLength: [3, "O nome completo deve ter pelo menos 3 caracteres"],
      maxLength: [30, "O nome completo deve ter no máximo 30 caracteres"],
    },
    phone: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const User = models.User || model<UserDocument>("User", UserSchema);
export default User;
