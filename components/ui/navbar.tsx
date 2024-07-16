import { UserButton } from "@clerk/nextjs";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

type Props = {};

async function Navbar() {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 bg-black/15 backdrop-blur-md z-[100] items-center border-b-[1px] justify-between md:px-16 px-4 border-neutral-200">
      <aside className="flex justify-between gap-[2px]">
        <p className="text-3xl font-bold">Xpense Mate</p>
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
        <ClerkLoading>
          <Loader2 className="animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSwitchSessionUrl="/" />
        </ClerkLoaded>
      </aside>
    </header>
  );
}

export default Navbar;
