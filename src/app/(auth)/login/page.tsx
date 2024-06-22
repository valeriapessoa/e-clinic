"use client"

import Head from 'next/head';
import React from 'react';
import styles from '../../styles/auth/login.module.css';
import { FaEnvelope, FaLock, FaEye, FaGoogle, FaApple } from 'react-icons/fa';
import Link from 'next/link';

const Login = () => {
  return (
    <main>
      <Head>
        <title>Login</title>
      </Head>
      <form className={styles.form}>
        <div className={styles.labelContainer}>
          <label>Email</label>
        </div>
        <div className={styles.inputContainer}>
          <FaEnvelope size={20} />
          <input type="text" className={styles.input} placeholder="Digite seu e-mail" />
        </div>

        <div className={styles.labelContainer}>
          <label>Password</label>
        </div>
        <div className={styles.inputContainer}>
          <FaLock size={20} />
          <input type="password" className={styles.input} placeholder="Coloque sua senha" />
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
        <p className={styles.text}>Não tem uma conta? <Link href="/cadastrar-usuario" className={styles.link}>Inscrever-se</Link></p>
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
}

export default Login;
