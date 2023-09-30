import { medusaClient } from "@/lib/config";
import { LOGIN_VIEW, useAccount } from "@/lib/context/account-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Spinner } from "@/config/icons";
interface SignInCredentials extends FieldValues {
  email: string;
  password: string;
}

const Login = () => {
  const { loginView, refetchCustomer } = useAccount();
  const [_, setCurrentView] = loginView;
  const [authError, setAuthError] = useState<string | undefined>(undefined);
  const router = useRouter();

  const handleError = (_e: Error) => {
    setAuthError("Invalid email or password");
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInCredentials>();

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.auth
      .authenticate(credentials)
      .then(() => {
        refetchCustomer();
        router.push("/account");
      })
      .catch(handleError);
  });

  return (
    <div className="flex w-full max-w-sm flex-col">
      <div className="pb-8">
        <h1 className="font-heading text-4xl">Hello there, </h1>
        <p className="text-sm font-normal">
          Sign in to access an enhanced photography experience.
        </p>
      </div>

      <form className="w-full" onSubmit={onSubmit}>
        <div className="flex w-full flex-col gap-y-2">
          <div>
            <p className="pb-1 text-sm font-medium">E-Mail Address</p>
            <Input
              className="h-12"
              disabled={isSubmitting}
              {...register("email", { required: "Email is required" })}
              autoComplete="email"
              type="email"
              placeholder="Type your e-mail address"
            />
          </div>
          <div>
            <p className="pb-1 text-sm font-medium">Password</p>
            <Input
              className="h-12"
              disabled={isSubmitting}
              {...register("password", { required: "Password is required" })}
              autoComplete="current-password"
              type="password"
              placeholder="Type your password"
            />
          </div>
        </div>
        {authError && (
          <div>
            <span className="text-small-regular w-full text-rose-500">
              These credentials do not match our records
            </span>
          </div>
        )}
        <Button size={"xl"} disabled={isSubmitting} className="mt-4 w-full">
          {!isSubmitting ? (
            "Sign-In"
          ) : (
            <>
              <Spinner className="mr-2 h-5 w-5 animate-spin" />
              Signing you in...
            </>
          )}
        </Button>
      </form>
      <div className="mt-4 flex flex-col gap-2 border-t">
        <Button
          size={"xl"}
          variant={"outline"}
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="mt-4"
        >
          Register as an Educational Institution
        </Button>
        <p className="whitespace-normal text-justify text-xs text-muted-foreground">
          If you represent an educational institution and wish to gain access to
          our services and products, please proceed with the registration
          process.{" "}
        </p>
      </div>

      {/* <span className="text-small-regular mt-6 text-center text-gray-700">
        Not a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
        >
          Join us
        </button>
        .
        </span> */}
    </div>
  );
};

export default Login;
