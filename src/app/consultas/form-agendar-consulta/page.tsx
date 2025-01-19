"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import FormAgendarConsulta from "@/components/FormAgendarConsulta/FormAgendarConsulta";

const Page = () => {
  const { data: session } = useSession();

  if (!session) {
    return redirect(`/login`);
  }

  return <FormAgendarConsulta />;
};

export default Page;
