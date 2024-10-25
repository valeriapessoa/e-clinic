"use client";

import { FormEvent, useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from 'react-icons/fa';
import styles from '../../styles/auth/login.module.css';

const Signin = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.push("/consultas/consultas-agendadas");
    }
  }, [session, router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res?.error) {
      setError(res.error as string);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center p-5 mt-5 mb-5">
      <form className={styles.form} onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        <h1 className="mb-4 text-center">Entrar</h1>

        <div className="mb-3">
          <label htmlFor="email" className={styles.label}>E-mail</label>
          <div className={styles.inputContainer}>
            <input
              type="email"
              className={`form-control ${styles.input}`}
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className={styles.label}>Senha</label>
          <div className={styles.inputContainer}>
            <input
              type={showPassword ? "text" : "password"}
              className={`form-control ${styles.input}`}
              id="password"
              name="password"
              placeholder="Digite sua senha"
            />
            <button
              type="button"
              className={styles.showPasswordButton}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button type="submit" className={`btn btn-primary w-100 ${styles.submitButton}`}>
          Entrar
        </button>

        <div className="text-center mt-3">ou</div>

        <div className="d-flex gap-2">
          <button
            className={`btn w-100 mt-2 ${styles.socialButton} ${styles.google}`}
            onClick={(e) => {
              e.preventDefault();
              signIn("google");
            }}
          >
            <FaGoogle className={`me-2 ${styles.icon}`} /> Google
          </button>

          <button
            className={`btn w-100 mt-2 ${styles.socialButton} ${styles.github}`}
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            <FaGithub className={`me-2 ${styles.icon}`}  /> GitHub
          </button>
        </div>

        <div className="text-center mt-3">
          <Link href="/cadastrar-usuario" className={styles.link}>
            Não tem uma conta? Inscrever-se
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
