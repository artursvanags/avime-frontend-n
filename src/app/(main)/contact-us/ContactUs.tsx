"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { ContactsIcons, Icons } from "@/config/icons";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

export const ContactUs = () => {
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const ref = useRef<HTMLFormElement>(null);

  const onContactFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    const formData: { [key: string]: string } = {};
    const elements = e.currentTarget.elements as unknown as Array<
      HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement
    >;

    Array.from(elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/contacts/send", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        setStatus(res.status);
        setDisabled(res.message.length > 0);
        if (res.error) {
          toast({
            variant: "destructive",
            title: "Error!",
            description: res.error,
          });
        } else {
          toast({
            variant: "success",
            title: "Message was sent sucessfully!",
            description: res.message,
          });
        }
      });
    setDisabled(false);
    if (ref.current) {
      ref.current.reset();
    }
  };

  return (
    <div className="align-center container grid grid-cols-1 justify-center pb-24 md:grid-cols-2">
      <section className="mb-8 flex flex-col items-center">
        {" "}
        <p className="mb-8 mt-4">
          Any question? We would be happy to help you!
        </p>
        <div className="flex w-full flex-col gap-4 md:w-auto">
          <Button
            size="xl"
            className="w-full rounded-2xl text-lg font-semibold md:w-[18rem]"
            asChild
          >
            <Link
              href="mailto:hello@avime.au"
              className="flex items-center justify-center"
            >
              <ContactsIcons.Email className="mr-2 h-6 w-6" />
              hello@avime.au
            </Link>
          </Button>
          {/* <Button
            size="xl"
            className="w-full rounded-2xl text-lg font-semibold md:w-[18rem]"
            asChild
          >
            <Link
              href="tel:0735222750"
              className="flex items-center justify-center"
            >
              <ContactsIcons.Phone className="mr-2 h-6 w-6" />
              07 3522 2750
            </Link>
          </Button> */}
        </div>
        <span className="pt-2 text-sm">
          (Business hours: 9am - 5pm on weekdays)
        </span>
      </section>
      <section>
        <form
          className="form space-y-2"
          ref={ref}
          onSubmit={onContactFormSubmit}
        >
          <div className="form-control w-full">
            <p className="pb-1 text-sm font-medium">Full Name</p>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Type your name"
              required
              disabled={disabled}
            />
          </div>

          <div className="form-control w-full">
            <p className="pb-1 text-sm font-medium">E-Mail Address</p>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Type your E-Mail Address"
              required
              disabled={disabled}
            />
          </div>

          <div className="form-control w-full">
            <p className="pb-1 text-sm font-medium">Your message here</p>
            <Textarea
              rows={6}
              name="message"
              id="message"
              required
              disabled={disabled}
            />
          </div>

          <Button
            type="submit"
            size="xl"
            className="w-full"
            disabled={disabled}
          >
            {disabled ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </section>
    </div>
  );
};
