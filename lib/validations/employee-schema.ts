import { z } from "zod";

export const employeeSchema = z.object({
  employeeCode: z.string(),

  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters."),

  phone: z
    .string()
    .min(11, "Phone number is required."),

  cnic: z
    .string()
    .optional(),

  address: z
    .string()
    .optional(),

  branchId: z.string(),

  employeeType: z.string(),

  department: z
    .string()
    .min(2, "Department is required."),

  designation: z
    .string()
    .min(2, "Designation is required."),

  salaryType: z.string(),

  basicSalary: z.coerce.number(),

  commissionPercent: z.coerce.number(),

  joinDate: z.coerce.date(),

  notes: z.string().optional(),

  isActive: z.boolean(),
});

export type EmployeeFormData = z.infer<typeof employeeSchema>;