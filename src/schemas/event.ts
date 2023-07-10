import validator from "validator";
import z from "zod";

export const eventSchema = z.object({
  name: z.string().min(1, "Name is required"),
  imageUrl: z.string().min(1, "Image URL is required").refine(validator.isURL),
  description: z.string().min(1, "Description is required"),
  startDate: z.date().min(new Date(), "Event Start Date must be in the future"),
  registerStartDate: z.date().min(new Date(), "Register Start Date must be in the future"),
  registerEndDate: z.date().min(new Date(), "Register End Date must be in the future"),
  venue: z.string().min(1, "Venue is required"),
  hosts: z.array(z.string()).optional(),
  sponsors: z.array(z.string()).optional(),
  registeredUsers: z.array(z.string()).optional(),
});
