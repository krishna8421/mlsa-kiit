import validator from "validator";
import z from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  personalEmail: z.string().email("Invalid email").min(1, "Email is required"),
  kiitEmail: z
    .string()
    .email("Invalid email")
    .min(1, "Email is required")
    .refine((data) => data.endsWith("@kiit.ac.in"), {
      message: "Email must be a kiit email",
    }),
  phoneNumber: z
    .string()
    .min(1, "Phone Number is required")
    .refine(validator.isMobilePhone)
    .optional(),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 8 characters"),
  githubUrl: z.string().min(1, "Github URL is required").refine(validator.isURL),
  linkedinUrl: z.string().min(1, "Linkedin URL is required").refine(validator.isURL),
  portfolioUrl: z.string().refine(validator.isURL).optional(),
  currentYear: z.number().min(1, "Current Year is required"),
  branch: z.string().min(1, "Branch is required"),
});
