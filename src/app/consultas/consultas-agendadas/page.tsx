"use client";

import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";

const ConsultasAgendadas = () => {
  const { data: session } = useSession();

  if (!session) {
    return redirect(`/login`);
  }

  return (
    <main>
      <Head>
        <title>Consultas Agendadas</title>
      </Head>
      <Image
        src={session.user?.image as string}
        width={100}
        height={100}
        alt={session.user?.name as string}
      />
      <h1>{session.user?.name}</h1>
      <p>{session.user?.email}</p>
      <button
        onClick={() => signOut()}
        className="rounded-lg btn btn-danger px-5 py-1"
      >
        Sign Out
      </button>
    </main>
  );
};

export default ConsultasAgendadas;
