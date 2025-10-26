"use server";

import LandingPage from "@/components/LandingPage";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const HomePage = async () => {
  const user = await currentUser();
  // Show the landing page with user info for authenticated users
  return <LandingPage userId={user?.id} />;
};

export default HomePage;
