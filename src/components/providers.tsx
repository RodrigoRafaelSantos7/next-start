"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();

  //@ts-expect-error
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
