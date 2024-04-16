import ProfileTemplate from "@/components/account/templates/profile-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "View and edit your Avime profile.",
};

export default function Profile() {
  return <ProfileTemplate />;
}
