"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
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
    <div className="align-center container justify-center pb-24 pt-4 ">
      <form className="form space-y-2" ref={ref} onSubmit={onContactFormSubmit}>
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

        <Button type="submit" size="xl" className="w-full" disabled={disabled}>
          {disabled ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};
