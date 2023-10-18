"use client";
import Register from "@/components/account/components/register";
import { useAccount } from "@/lib/context/account-context";
import { ADMIN_EMAIL } from "@/config/site";

export default function RegisterUsers() {
  const { customer } = useAccount();
  return (
    <>
      {customer && ADMIN_EMAIL.includes(customer.email) ? (
        <Register />
      ) : (
        <>Access Prohibited</>
      )}
    </>
  );
}
