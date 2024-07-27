"use client";

import Navbar from "@/components/ui/navbar";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { LampDemo } from "@/components/ui/lamp";
import HeroImage from "@/components/ui/hero.jpg";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="bg-slate-950">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Calculating Expenses
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={HeroImage}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
        <LampDemo />
      </div>
    </main>
  );
}
