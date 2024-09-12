"use client";

import Head from 'next/head';
import React, { useState } from 'react';
import styles from '../../styles/auth/login.module.css';
import { FaEnvelope, FaLock, FaEye, FaGoogle, FaApple } from 'react-icons/fa';
import Link from 'next/link';

import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/");
    }
  };

  return (
    <main>
      <Head>
        <title>Login</title>
      </Head>
      {error && <p className="text-danger">{error}</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.labelContainer}>
          <label>Email</label>
        </div>
        <div className={styles.inputContainer}>
          <FaEnvelope size={20} />
          <input
            type="text"
            className={styles.input}
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.labelContainer}>
          <label>Password</label>
        </div>
        <div className={styles.inputContainer}>
          <FaLock size={20} />
          <input
            type="password"
            className={styles.input}
            placeholder="Coloque sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaEye size={20} />
        </div>

        <div className={styles.optionsContainer}>
          <div>
            <input type="checkbox" />
            <label>Lembre me</label>
          </div>
          <span className={styles.link}>Esqueceu sua senha?</span>
        </div>
        <button className={styles.submitButton}>Entrar</button>
        <p className={styles.text}>
          Não tem uma conta?{" "}
          <Link href="/cadastrar-usuario" className={styles.link}>
            Inscrever-se
          </Link>
        </p>
        <p className={`${styles.text} ${styles.separator}`}>Ou com</p>

        <div className={styles.socialButtonsContainer}>
          <button className={`${styles.socialButton} ${styles.google}`}>
            <FaGoogle size={20} />
            Google
          </button>
          <button className={`${styles.socialButton} ${styles.apple}`}>
            <FaApple size={20} />
            Apple
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
