
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import SignOutBtn from "../auth/SignOutBtn";
import LoginModal from "../auth/LoginModal";
import SignupModal from "../auth/SignupModal";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function NavMenu({ session }: { session: object | null }) {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <MenuIcon className="cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent className="mr-6 ">
          <ul>
            {session ? (
              <>
                 <Link href="/" className="hover:bg-gray-200 rounded-md p-2 cursor-pointer">
                  Inicio
                </Link>
                <SignOutBtn />
              </>
            ) : (
              <>
                <LoginModal />
                <SignupModal />
              </>
            )}
          </ul>
        </PopoverContent>
      </Popover>
    </>
  );
}
