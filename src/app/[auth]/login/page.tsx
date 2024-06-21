"use client"

import Head from 'next/head';
import React from 'react';
import styles from '../styles/auth/login.module.css';
import { FaEnvelope, FaLock, FaEye, FaGoogle, FaApple } from 'react-icons/fa';

const Login = () => {
  return (
    <main>
      <Head>
        <title>Login</title>
      </Head>
      <form className={styles.form}>
        <div className={styles.flexColumn}>
          <label>Email</label>
        </div>
        <div className={styles.inputForm}>
          <FaEnvelope size={20} />
          <input type="text" className={styles.input} placeholder="Enter your Email" />
        </div>

        <div className={styles.flexColumn}>
          <label>Password</label>
        </div>
        <div className={styles.inputForm}>
          <FaLock size={20} />
          <input type="password" className={styles.input} placeholder="Enter your Password" />
          <FaEye size={20} />
        </div>

        <div className={styles.flexRow}>
          <div>
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <span className={styles.span}>Forgot password?</span>
        </div>
        <button className={styles.buttonSubmit}>Sign In</button>
        <p className={styles.p}>Don't have an account? <span className={styles.span}>Sign Up</span></p>
        <p className={`${styles.p} ${styles.line}`}>Or With</p>

        <div className={styles.flexRow}>
          <button className={`${styles.btn} ${styles.google}`}>
            <FaGoogle size={20} />
            Google
          </button>
          <button className={`${styles.btn} ${styles.apple}`}>
            <FaApple size={20} />
            Apple
          </button>
        </div>
      </form>
    </main>
  );
}

export default Login;

