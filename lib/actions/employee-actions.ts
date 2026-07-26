"use server";

import { employeeSchema } from "@/lib/validations/employee-schema";

export async function createEmployee(formData: FormData) {
  const data = {
    employeeCode: formData.get("employeeCode")?.toString() ?? "",

    fullName: formData.get("fullName")?.toString() ?? "",

    phone: formData.get("phone")?.toString() ?? "",

    cnic: formData.get("cnic")?.toString() || undefined,

    address: formData.get("address")?.toString() || undefined,

    branchId: formData.get("branchId")?.toString() ?? "",

    employeeType: formData.get("employeeType")?.toString() ?? "",

    department: formData.get("department")?.toString() ?? "",

    designation: formData.get("designation")?.toString() ?? "",

    salaryType: formData.get("salaryType")?.toString() ?? "",

    basicSalary: Number(formData.get("basicSalary")),

    commissionPercent: Number(formData.get("commissionPercent") ?? 0),

    joinDate: new Date(
      formData.get("joinDate")?.toString() ?? new Date()
    ),

    notes: formData.get("notes")?.toString() || undefined,

    isActive: formData.get("isActive") === "true",
  };

  const validatedData = employeeSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      success: false,
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  // Prisma Save yahan next step mein add hoga.

  return {
    success: true,
    message: "Employee validation successful.",
    data: validatedData.data,
  };
}