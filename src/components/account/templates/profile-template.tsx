"use client";

import { useAccount } from "@/lib/context/account-context";
import ProfileEmail from "@/components/account/components/profile-email";
import ProfileName from "@/components/account/components/profile-name";
import ProfilePassword from "@/components/account/components/profile-password";
import ProfileBillingAddress from "../components/profile-billing-address";
import ProfilePhone from "../components/profile-phone";

const ProfileTemplate = () => {
  const { customer, retrievingCustomer, refetchCustomer } = useAccount();

  if (retrievingCustomer || !customer) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className=" text-sm">
          View and update your profile information, including your name, email,
          and phone number. You can also update your billing address, or change
          your password.
        </p>
      </div>
      <div className="flex w-full flex-col gap-y-8">
        <ProfileName customer={customer} />
        <Divider />
        <ProfileEmail customer={customer} />
        <Divider />
        <ProfilePhone customer={customer} />
        <Divider />
        <ProfilePassword customer={customer} />
        <Divider />
        <ProfileBillingAddress customer={customer} />
      </div>
    </div>
  );
};

const Divider = () => {
  return <div className="h-px w-full bg-foreground/10" />;
};

export default ProfileTemplate;
