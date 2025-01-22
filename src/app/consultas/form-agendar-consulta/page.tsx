"use client";

import Head from 'next/head';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import FormAgendarConsulta from "@/components/FormAgendarConsulta/FormAgendarConsulta";

const Page = () => {
  const { data: session } = useSession();

  if (!session) {
    return redirect(`/login`);
  }

  return(
    <>
      <Head>
        <title>Formulário Agendar Consulta</title>
      </Head>
      <main>
        <FormAgendarConsulta />;
      </main>

    </>
  )
};

export default Page;
