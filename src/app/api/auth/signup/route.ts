import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    await connectDB();
    const { name, email, password, phone } = await request.json();

    if (password.length < 6) {
      return NextResponse.json(
        { message: "A senha deve ter pelo menos 6 caracteres" },
        { status: 400 }
      );
    }

    const userFound = await User.findOne({ email });
    if (userFound) {
      return NextResponse.json(
        { message: "O e-mail já existe" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    return NextResponse.json(
      {
        name: savedUser.name,
        email: savedUser.email,
        createdAt: savedUser.createdAt,
        updatedAt: savedUser.updatedAt,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { message: error.message },
        { status: 400 }
      );
    } else {
      console.error("Erro durante a inscrição:", error);
      return NextResponse.error();
    }
  }
}

export async function PUT(request: Request) {
  try {
    await connectDB();
    const { userId, name, email, password, phone, address } = await request.json();

    if (password && password.length < 6) {
      return NextResponse.json(
        { message: "A senha deve ter pelo menos 6 caracteres" },
        { status: 400 }
      );
    }

    const userToUpdate = await User.findById(userId);
    if (!userToUpdate) {
      return NextResponse.json(
        { message: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    if (name) userToUpdate.name = name;
    if (email) userToUpdate.email = email;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 12);
      userToUpdate.password = hashedPassword;
    }
    if (phone) userToUpdate.phone = phone;
    if (address) userToUpdate.address = address;

    await userToUpdate.save();

    return NextResponse.json(
      {
        message: "Usuário atualizado com sucesso",
        updatedUser: {
          id: userToUpdate._id,
          name: userToUpdate.name,
          email: userToUpdate.email,
          createdAt: userToUpdate.createdAt,
          updatedAt: userToUpdate.updatedAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { message: error.message },
        { status: 400 }
      );
    } else {
      console.error("Erro durante atualização do usuário:", error);
      return NextResponse.error();
    }
  }
}

export async function DELETE(request: Request) {
  try {
    await connectDB();
    const { userId } = await request.json();

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json(
        { message: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    await user.remove();

    return NextResponse.json(
      { message: "Usuário excluído com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro durante a exclusão do usuário:", error);
    return NextResponse.error();
  }
}
