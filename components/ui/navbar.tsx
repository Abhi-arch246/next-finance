// import { UserButton } from "@clerk/nextjs";
// import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
// import { Loader2 } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 bg-black/15 backdrop-blur-md z-[100] items-center border-b-[1px] justify-between md:px-16 px-4 border-neutral-200">
      <div className="flex justify-between gap-[2px]">
        <p className="text-3xl font-bold">Xpense Mate</p>
        <div className="flex justify-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/sign-in">Sign In</Link>
        </div>

        {/* <ClerkLoading>
          <Loader2 className="animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSwitchSessionUrl="/" />
        </ClerkLoaded> */}
      </div>
    </header>
  );
}

export default Navbar;
