"use client";
import Spinner from "@/components/spinner";
import {Button} from "@/components/ui/button";
import {SignInButton} from "@clerk/clerk-react";
import {useConvexAuth} from "convex/react";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function Heading() {
  const {isLoading, isAuthenticated} = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your ideas, Documents & Plan, Unified. Welcome to{" "}
        <span className="underline">notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion is the connected workspace where <br />
        better faster work happens
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size={"lg"} />
        </div>
      )}
      {isAuthenticated && (
        <Button>
          <Link href={"/documents"}>Enter notion</Link>
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      )}
      {!isAuthenticated && (
        <div>
          <SignInButton mode="modal">
            <Button>
              Get notion free
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </SignInButton>
        </div>
      )}
    </div>
  );
}
