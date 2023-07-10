"use client";

import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";

const notify = (msg: string) => {
  toast.error(msg);
};

const AuthForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <Card isBlurred className="px-4" shadow="lg">
      <Toaster position="bottom-right" reverseOrder={false} />
      <CardBody>
        <h1 className="p-4 text-center text-2xl font-bold">Login</h1>
        <form className="flex flex-col py-4">
          <Input
            isRequired
            size="lg"
            type="email"
            label="Email"
            placeholder="Enter your Email"
            labelPlacement="outside"
            startContent={<HiOutlineMail size={21} className="text-gray-300" />}
            // validationState="invalid"
            // errorMessage="Please enter a valid email"
            className="max-w-xs"
            value={formData.email}
            onChange={(e:any) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });
            }}
          />
          <Input
            isRequired
            size="lg"
            type="password"
            label="Password"
            placeholder="Enter your password"
            labelPlacement="outside"
            startContent={<MdPassword size={21} className="text-gray-300" />}
            // validationState="invalid"
            // errorMessage="Please enter a valid email"
            className="max-w-xs py-8"
            value={formData.password}
            onChange={(e:any) => {
              setFormData({
                ...formData,
                password: e.target.value,
              });
            }}
          />
          <Button
            color="primary"
            variant="shadow"
            className="mt-4"
            size="lg"
            onPress={async () => {
              const res = await signIn("credentials", {
                redirect: false,
                email: formData.email,
                password: formData.password,
              });
              if (res?.error) {
                notify(res?.error || "Unknown error Occurred");
              } else {
                router.push("/admin");
              }
            }}
          >
            Login
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default AuthForm;
