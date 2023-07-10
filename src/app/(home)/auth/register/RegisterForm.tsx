"use client";

import { registerSchema } from "@/schemas/auth";
import { Button, Card, CardBody } from "@nextui-org/react";
import { useFormik } from "formik";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { AiFillGithub, AiFillLinkedin, AiOutlineUser } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoSchool } from "react-icons/io5";
import { MdClass, MdPassword } from "react-icons/md";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { TypeOf } from "zod";
import InputBox from "../InputBox";
import { toFormikValidationSchema } from "zod-formik-adapter"
import { useRouter } from "next/navigation";
import { useState } from "react";

type registerSchemaType = TypeOf<typeof registerSchema>

const RegisterForm = () => {
  const router = useRouter()

  const formik = useFormik<registerSchemaType>({
    initialValues: {
      name: "",
      personalEmail: "",
      kiitEmail: "",
      phoneNumber: "",
      password: "",
      githubUrl: "",
      linkedinUrl: "",
      portfolioUrl: "",
      currentYear: 0,
      branch: "",
    },
    validationSchema: toFormikValidationSchema(registerSchema),
    onSubmit: async (values) => {
      console.log(values)
      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();
        if (!data.success) {
          toast.error(data.message);
        } else {
          toast.success(data.message);
          await signIn("credentials", {
            redirect: false,
            email: values.personalEmail,
            password: values.password,
          });
          toast.success("Logged In Successfully");
          router.push("/dashboard");
        }
      } catch (err) {
        toast.error("Unknown error Occurred");
      }
    }

  })

  return (
    <Card
      isBlurred
      className="px-4 mb-20 m-4"
      shadow="lg"
    >
      <CardBody>
        <h1 className="p-4 text-center text-2xl font-bold">Register</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <div className="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2">
            <InputBox
              id="name"
              type="text"
              label="Name"
              placeholder="Enter your Name"
              error={formik.touched.name && formik.errors.name}
              icon={<AiOutlineUser size={21} className="text-gray-300" />}
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <InputBox
              id="personalEmail"
              type="email"
              label="Personal Email"
              placeholder="Enter your Personal Email"
              error={formik.touched.personalEmail && formik.errors.personalEmail}
              icon={<HiOutlineMail size={21} className="text-gray-300" />}
              value={formik.values.personalEmail}
              onChange={formik.handleChange}
            />
            <InputBox
              id="kiitEmail"
              type="email"
              label="KIIT Email"
              placeholder="Enter your KIIT Email"
              error={formik.touched.kiitEmail && formik.errors.kiitEmail}
              icon={<HiOutlineMail size={21} className="text-gray-300" />}
              value={formik.values.kiitEmail}
              onChange={formik.handleChange}
            />
            <InputBox
              id="phoneNumber"
              type="text"
              label="Phone Number"
              placeholder="Enter your Phone Number"
              error={formik.touched.phoneNumber && formik.errors.phoneNumber}
              icon={<BsTelephone size={21} className="text-gray-300" />}
              value={formik.values.phoneNumber}
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
            <InputBox
              id="githubUrl"
              type="text"
              label="Github URL"
              placeholder="Enter your Github URL"
              error={formik.touched.githubUrl && formik.errors.githubUrl}
              icon={<AiFillGithub size={21} className="text-gray-300" />}
              value={formik.values.githubUrl}
              onChange={formik.handleChange}
            />
            <InputBox
              id="linkedinUrl"
              type="text"
              label="Linkedin URL"
              placeholder="Enter your Linkedin URL"
              error={formik.touched.linkedinUrl && formik.errors.linkedinUrl}
              icon={<AiFillLinkedin size={21} className="text-gray-300" />}
              value={formik.values.linkedinUrl}
              onChange={formik.handleChange}
            />
            <InputBox
              id="portfolioUrl"
              type="text"
              label="Portfolio URL"
              placeholder="Enter your Portfolio URL"
              error={formik.touched.portfolioUrl && formik.errors.portfolioUrl}
              icon={<PiBracketsCurlyBold size={21} className="text-gray-300" />}
              value={formik.values.portfolioUrl}
              onChange={formik.handleChange}
            />
            <InputBox
              id="currentYear"
              type="number"
              label="Current Year"
              placeholder="Enter your Current Year"
              error={formik.touched.currentYear && formik.errors.currentYear}
              icon={<IoSchool size={21} className="text-gray-300" />}
              value={formik.values.currentYear}
              onChange={formik.handleChange}
            />
            <InputBox
              id="branch"
              type="text"
              label="Branch"
              placeholder="Enter your Branch"
              error={formik.touched.branch && formik.errors.branch}
              icon={<MdClass size={21} className="text-gray-300" />}
              value={formik.values.branch}
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
            Register
          </Button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </CardBody>
    </Card>
  );
};

export default RegisterForm;
