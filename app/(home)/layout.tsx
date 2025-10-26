import { DarkMode } from "@/components/DarkMode";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  return (
    <div>
      <div className="border-b">
        {/* Navbar  */}
        <nav className="flex items-center justify-between max-w-7xl mx-auto py-2 px-4">
          <Logo />
          <div className="flex items-center gap-2">
            {user ? (
              <>
                <Link href={"/dashboard/analytics"}>
                  <Button variant={"link"}>Dashboard</Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
                <DarkMode />
              </>
            ) : (
              <>
                <Link href={"/sign-in"}>
                  <Button variant={"ghost"}>Sign In</Button>
                </Link>
                <Link href={"/sign-up"}>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get Started
                  </Button>
                </Link>
                <DarkMode />
              </>
            )}
          </div>
        </nav>
      </div>
      {children}
    </div>
  );
};

export default layout;