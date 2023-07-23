"use client";

import { Formik, Form, Field } from 'formik';
import { useState, useEffect } from 'react';
import Navbar from "../NavBar";
import { ILayoutProps } from "@/types";
import { getServerSession } from "@/server/auth";
import { prisma } from "@/server/db";
import { redirect } from "next/navigation";
import { get } from 'lodash';

const UserForm = () => {
  const [user, setUser] = useState(null);

  const getUserData = async (personalEmail: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          personalEmail: personalEmail,
        },
        select: {
          id: true,
          name: true,
          password: true,
          personalEmail: true,
          kiitEmail: true,
          phoneNumber: true,
          githubUrl: true,
          linkedinUrl: true,
          portfolioUrl: true,
          currentYear: true,
          branch: true,
          isMember: true,
        },
      });
      return user
    } catch (error) {
      return null
    }
  }

  async function myDetails(props: ILayoutProps) {
    const session = await getServerSession();

    if (!session?.user?.personalEmail) redirect("/auth/login")

    const user = await getUserData(session?.user?.personalEmail);

    if (!user) return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold text-gray-700">
          ⚠️ Something went wrong ⚠️
        </div>
      </div>
    )

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserData('example@example.com');
      setUser(get(user, 'data', null));
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    </div>
    // <Formik
    //   initialValues={{
    //     name: user.name,
    //     password: user.password,
    //     personalEmail: user.personalEmail,
    //     kiitEmail: user.kiitEmail,
    //     phoneNumber: user.phoneNumber,
    //     githubUrl: user.githubUrl,
    //     linkedinUrl: user.linkedinUrl,
    //     portfolioUrl: user.portfolioUrl,
    //     currentYear: user.currentYear,
    //     branch: user.branch,
    //   }}
    //   onSubmit={(values) => {
    //     // Handle form submission here
    //   }}
    // >
    //   <Form>
    //     <label htmlFor="name">Name:</label>
    //     <Field id="name" name="name" />

    //     <label htmlFor="personalEmail">Personal Email:</label>
    //     <Field id="personalEmail" name="personalEmail" />

    //     <button type="submit">Submit</button>
    //   </Form>
    // </Formik>
  );
}
}