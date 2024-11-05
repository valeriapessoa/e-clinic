"use client";

import { FormEvent, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BiLogoGoogle, BiLogoGithub, BiSolidShow, BiSolidHide } from "react-icons/bi"; // Adicionado BiLogoGithub
import styles from '../../styles/auth/cadastrar-usuario.module.css';

const Signup = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/consultas/form-agendar-consulta");
    }
  }, [session, router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const signupResponse = await axios.post('/api/auth/signup', {
        email: formData.get("email"),
        password: formData.get("password"),
        name: formData.get("name"),
        phone: formData.get("phone"),
      });

      const res = await signIn("credentials", {
        email: signupResponse.data.email,
        password: formData.get("password"),
        redirect: false,
      });

      if (res?.ok) return router.push("/");
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      }
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center p-5 mt-5 mb-5">
      <form onSubmit={handleSubmit} className={`p-4 rounded ${styles.form}`}>
        {error && <div className="alert alert-danger">{error}</div>}
        <h1 className={`mb-4 ${styles.title}`}>Inscrever-se</h1>

        <div className="mb-3">
          <label className={styles.label}>Nome completo:</label>
          <input
            type="text"
            className={`form-control ${styles.input}`}
            placeholder="Digite seu nome completo"
            name="name"
            required
          />
        </div>

        <div className="mb-3">
          <label className={styles.label}>E-mail:</label>
          <input
            type="email"
            className={`form-control ${styles.input}`}
            placeholder="Digite seu e-mail"
            name="email"
            required
          />
        </div>

        <div className="mb-3">
          <label className={styles.label}>Senha:</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className={`form-control ${styles.input}`}
              placeholder="Digite sua senha"
              name="password"
              required
            />
            <button
              type="button"
              className={`btn ${styles.showPasswordButton}`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiSolidHide /> : <BiSolidShow />}
            </button>
          </div>
        </div>

        <div className="mb-3">
          <label className={styles.label}>Telefone:</label>
          <input
            type="text"
            className={`form-control ${styles.input}`}
            placeholder="Telefone (não obrigatório)"
            name="phone"
          />
        </div>

        <button type="submit" className={`btn btn-primary w-100 ${styles.submit}`}>
          Inscrever-se
        </button>

        <div className="text-center my-3">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <span className={styles.dividerText}>ou</span>
          </div>
        </div>

        <div className="d-flex gap-2">
          <button
            type="button"
            className={`btn w-100 ${styles.googleButton}`}
            onClick={() => signIn("google")}
          >
            <BiLogoGoogle className={`me-2 ${styles.icon}`} /> Google
          </button>
          <button
            type="button"
            className={`btn w-100 ${styles.githubButton}`}
            onClick={() => signIn("github")}
          >
            <BiLogoGithub className={`me-2 ${styles.icon}`} /> GitHub
          </button>
        </div>

        <p className={`mt-3 text-center ${styles.signin}`}>
          Já tem uma conta? <Link href="/login">Entrar</Link>
        </p>
      </form>
    </section>
  );
};

export default Signup;
