"use client"

import Head from 'next/head';
import styles from '../../styles/auth/cadastrar-usuario.module.css';
import { FaUserAlt } from 'react-icons/fa';
import Link from 'next/link';

const CadastrarUsuario = () => {
  return (
    <main>
      <Head>
        <title>Cadastrar Usuario</title>
      </Head>
      <form className={`form ${styles.form}`}>
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
