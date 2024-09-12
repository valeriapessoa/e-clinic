"use client"

import Head from 'next/head';
import styles from '../../styles/auth/cadastrar-usuario.module.css';
import { FaUserAlt } from 'react-icons/fa';

import Link from 'next/link';import { useState } from "react";
import { useRouter } from "next/router";
import bcrypt from "bcryptjs";



const CadastrarUsuario = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validações de senha podem ser adicionadas aqui (ex: força da senha)

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    });

    if (response.ok) {
      router.push("/auth/login");
    } else {
      const data = await response.json();
      setError(data.message);
    }
  };
  return (
    <main>
      <Head>
        <title>Cadastrar Usuario</title>
      </Head>
      {error && <p className="text-danger">{error}</p>}
      <form className={`form ${styles.form}`} onSubmit={handleSubmit}>
        <p className={styles.title}><FaUserAlt />Cadastre-se</p>
        <p className={styles.message}>Cadastre-se agora e tenha acesso total ao aplicativo.</p>
        <div className="d-flex flex-wrap gap-2">
          <label className={styles.label}>
            <input required placeholder="" type="text" className={styles.input} />
            <span className={styles.labelText}>Primeiro nome</span>
          </label>
          <label className={styles.label}>
            <input required placeholder="" type="text" className={styles.input} />
            <span className={styles.labelText}>Sobrenome</span>
          </label>
        </div>
        <label className={styles.label}>
          <input required placeholder="" type="email" className={styles.input} />
          <span className={styles.labelText}>E-mail</span>
        </label>
        <label className={styles.label}>
          <input required placeholder="" type="password" className={styles.input} />
          <span className={styles.labelText}>Senha</span>
        </label>
        <label className={styles.label}>
          <input required placeholder="" type="password" className={styles.input} />
          <span className={styles.labelText}>Confirme sua senha</span>
        </label>
        <button type="submit" className={`btn btn-primary ${styles.submit}`}>Enviar</button>
        <p className={styles.signin}>Já tem uma conta? <Link href="/login">Entrar</Link></p>
      </form>
    </main>
  );
};

export default CadastrarUsuario;
