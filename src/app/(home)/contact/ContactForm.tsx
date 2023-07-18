"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const sendMail = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const res = await axios.post("/api/contact-mail OR expample/api", {
        name,
        email,
        message,
      });
      if (res.status === 200) {
        setError(null);
        setSuccess(res.data.message);
        reset();
      }
      setIsLoading(false);
    } catch (error: any) {
      setError(error.response.data.message);
      setSuccess(null);
      reset();
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-12 ">


      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Name <span className="text-red-600">*</span></Label>
        <Input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email <span className="text-red-600">*</span></Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="message">Your message <span className="text-red-600">*</span></Label>
        <Textarea
          placeholder="Type your message here."
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
        />
        <div className={`mt-3 ${success || error ? "block" : "hidden"}`}>
          <p className="text-lg text-green-500">{success}</p>
          <p className="text-lg text-red-500">{error}</p>
        </div>
      </div>
      <Button
        className="2xl:text-md rounded-full  bg-gradient-blue px-7 py-2 text-sm bg-gradient-to-r from-[#0070C5] to-[#3BABCF] "
        disabled={isLoading}
        onClick={isLoading ? () => { } : sendMail}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>Send</>
        )}
      </Button>
    </div>
  );
};

export default ContactForm;
