import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  MovingBorderImage,
  MovingButton,
} from "@/components/ui/moving-borders";
import { GetStartedButton } from "@/components/buttons/GetStartedButton";
import BentoGridSection from "@/components/dashboard/bentogrid";
import { BusinessLine } from "@/components/dashboard/businessline";
import CallToActionComponent from "@/components/dashboard/calltoaction";
import Featuressection from "@/components/dashboard/feautressection";
import { HeroHighlightSection } from "@/components/dashboard/hero-highlight-section";
import LampSection from "@/components/dashboard/lamp";
import { Icons } from "@/components/shared/icons";

export default async function IndexPage() {
  const { userId } = auth();
  return (
    <>
      <section className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] space-y-6 pt-8 lg:pb-28 lg:pt-16">
        <div className="container flex max-w-7xl flex-col items-center gap-7 text-center">
          <Link
            href="https://twitter.com/codehagen"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "animate-fade-in rounded-full px-4 text-xs opacity-0 duration-1000",
            )}
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            target="_blank"
          >
            Introducing on <Icons.twitter className="ml-2 h-3 w-3" />
          </Link>

          <h1
            className="animate-fade-down pb-6 font-urban text-5xl font-medium leading-none tracking-tighter opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Budget Better, Gain More Experience{" "}
            <span className="relative bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text text-transparent">
              Badget
            </span>
          </h1>

          <p
            className="max-w-[42rem] animate-fade-down text-balance leading-normal text-muted-foreground opacity-0 [--animation-delay:250ms] sm:text-lg sm:leading-8"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Empower your financial management with AI-driven insights, making
            tracking and optimizing your finances effortless.
          </p>

          <div
            className="flex animate-fade-down justify-center space-x-2 opacity-0 md:space-x-4"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <GetStartedButton />
          </div>
          <div
            className="relative -z-10 mt-20 animate-fade-up opacity-0 duration-1000"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <div className="absolute -bottom-1/4 -left-[10%] -right-[10%] -top-1/4 -z-10 max-w-[100vw] blur-3xl [background:radial-gradient(#6365f1b4,transparent)]" />
            <MovingBorderImage
              src="https://github.com/projectx-codehagen/Badget/assets/24507211/2c2b8e43-3d18-4b28-b8d0-5dc0cbdb530f"
              alt="hero"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-background pt-[7%]" />
            </div>
          </div>
        </div>
      </section>

      

      {/* <BusinessLine /> */}
      <BentoGridSection />
      <HeroHighlightSection />
      <section>
        <LampSection />
      </section>
      <section>{/* <Featuressection /> */}</section>
      <section>{/* <CallToActionComponent /> */}</section>
      {/* <section>
        <FeatureSection1 />
      </section> */}
    </>
  );
}
