"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

import { Icons } from "../shared/icons";

export function GetStartedButton() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  const handleOnClick = () => {
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      router.push("/signin");
    }
  };

  return (
    <Button onClick={handleOnClick} className="group">
      Get started for free{" "}
      <Icons.arrowRight className="ml-2 h-3 w-3 transition-all ease-in-out group-hover:translate-x-1" />
    </Button>
  );
}
