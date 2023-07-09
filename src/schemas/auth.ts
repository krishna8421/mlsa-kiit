import validator from "validator";
import z from "zod";

export const registerSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1),
  personalEmail: z
    .string({
      required_error: "Personal Email is required",
    })
    .email("Please enter a valid email.")
    .min(1, "Email is required"),
  kiitEmail: z
    .string({
      required_error: "Kiit Email is required",
    })
    .email("Please enter a valid KIIT email")
    .min(1)
    .refine((data) => data.endsWith("@kiit.ac.in"), {
      message: "Email must be a kiit email",
    }),
  phoneNumber: z
    .string()
    .min(1)
    .refine(validator.isMobilePhone, {
      message: "Please enter a valid phone number",
    })
    .optional(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1)
    .min(8, "Password must have more than 8 characters"),
  githubUrl: z
    .string({
      required_error: "Github URL is required",
    })
    .min(1)
    .refine(validator.isURL, {
      message: "Please enter a valid URL",
    }),
  linkedinUrl: z
    .string({
      required_error: "Linkedin URL is required",
    })
    .min(1)
    .refine(validator.isURL, {
      message: "Please enter a valid URL",
    }),
  portfolioUrl: z
    .string()
    .refine(validator.isURL, {
      message: "Please enter a valid URL",
    })
    .optional(),
  currentYear: z
    .number({
      required_error: "Current Year is required",
    })
    .min(1, "Current year must be between 1-5")
    .max(5, "Current year must be between 1-5"),
  branch: z
    .string({
      required_error: "Branch is required",
    })
    .min(1),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Please enter a valid email."),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, "Password is required"),
});
