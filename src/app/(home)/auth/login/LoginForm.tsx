"use client";

import { loginSchema } from "@/schemas/auth";
import { useFormik } from "formik";
import { Button, Card, CardBody } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import toast from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";
import InputBox from "../InputBox";
import { toFormikValidationSchema } from "zod-formik-adapter"
import { TypeOf } from "zod";

type loginSchemaType = TypeOf<typeof loginSchema>

const LoginForm = () => {
  const router = useRouter()

  const formik = useFormik<loginSchemaType>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(loginSchema),
    onSubmit: async (values) => {
      try {
        const res = await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        });
        console.log(res)
        if (res?.error) {
          toast.error(res?.error || "Unknown error Occurred");
        } else {
          toast.success("Logged in Successfully");
          router.push("/dashboard")
        }
      } catch (err) {
        toast.error("Unknown error Occurred")
      }
    },
  });

  return (
    <Card isBlurred className="px-4 mb-20 m-4" shadow="lg">
      <CardBody>
        <h1 className="p-4 text-center text-2xl font-bold">Login</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <div className="grid grid-cols-1 gap-4">
            <InputBox
              id="email"
              type="email"
              label="Email"
              placeholder="Enter your Email"
              error={formik.touched.email && formik.errors.email}
              icon={<HiOutlineMail size={21} className="text-gray-300" />}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <InputBox
              id="password"
              type="password"
              label="Password"
              placeholder="Enter your Password"
              error={formik.touched.password && formik.errors.password}
              icon={<MdPassword size={21} className="text-gray-300" />}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <Button
            color="primary"
            variant="shadow"
            className="mt-8 mb-4 w-full"
            size="lg"
            type="submit"
            isLoading={formik.isSubmitting}
          >
            Login
          </Button>
        </form>
        <p className="text-center text-sm text-gray-500">
          New to MLSA KIIT?{" "}
          <Link href="/auth/register" className="text-blue-500 hover:underline">
            Join Now
          </Link>
        </p>
      </CardBody>
    </Card>
  );
};

export default LoginForm;
