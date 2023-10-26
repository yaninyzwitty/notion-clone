"use client";

import {ModeToggle} from "@/components/mode-toggle";
import Spinner from "@/components/spinner";
import {Button} from "@/components/ui/button";
import {usescrollTop} from "@/hooks/use-scroll-top";
import {cn} from "@/lib/utils";
import {SignInButton, UserButton} from "@clerk/clerk-react";
import {useConvexAuth} from "convex/react";
import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
  const scrolled = usescrollTop();

  const {isAuthenticated, isLoading} = useConvexAuth();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant={"ghost"} size={"sm"}>
                Login
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size={"sm"}>Get notion free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant={"ghost"} size={"sm"} className="space-x-2">
              <Link href={"/documents"}>Enter notion</Link>
              <UserButton afterSignOutUrl="/" />
            </Button>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}
