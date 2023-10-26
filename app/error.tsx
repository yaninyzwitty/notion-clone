"use client";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
type Props = {};

export default function Error({}: Props) {
  return (
    <div className="h-full flex flex-col justify-center items-center space-y-4">
      <Image
        src={"/error.png"}
        height={300}
        width={300}
        alt={"error"}
        className="dark:hidden"
      />
      <Image
        src={"/error-dark.png"}
        height={300}
        width={300}
        alt={"error"}
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">Something went wrong</h2>
      <Button asChild>
        <Link href={"/documents"}>Go back</Link>
      </Button>
    </div>
  );
}
