import z from "zod";

// name           String
// email          String
// message        String

export const contactUsSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Please enter a valid email.")
    .min(1, "Email is required"),
  message: z

    .string({
      required_error: "Message is required",
    })
    .min(1)
    .max(500, "Message must be under 500 characters"),
});
