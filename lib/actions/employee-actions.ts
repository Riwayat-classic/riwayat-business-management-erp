"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";
import { generateEmployeeCode } from "@/lib/utils/employee-code";
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
try {
  const employeeCode = await generateEmployeeCode();

  await prisma.employee.create({
    data: {
      employeeCode,

      fullName: validatedData.data.fullName,
      phone: validatedData.data.phone,
      cnic: validatedData.data.cnic,
      address: validatedData.data.address,

      employeeType: validatedData.data.employeeType as any,
      department: validatedData.data.department,
      designation: validatedData.data.designation,

      salaryType: validatedData.data.salaryType as any,
      basicSalary: validatedData.data.basicSalary,
      commissionPercent: validatedData.data.commissionPercent,

      joinDate: validatedData.data.joinDate,

      notes: validatedData.data.notes,
      isActive: validatedData.data.isActive,

      branchId: validatedData.data.branchId,
    },
  });

  revalidatePath("/dashboard/employees");

  return {
    success: true,
    message: "Employee created successfully.",
  };
} catch (error) {
  console.error("Employee Create Error:", error);

  return {
    success: false,
    message: "Unable to create employee.",
  };
}
}
export async function updateEmployee(formData: FormData) {
  const id = formData.get("id")?.toString() ?? "";

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

    commissionPercent: Number(
      formData.get("commissionPercent") ?? 0
    ),

    joinDate: new Date(
      formData.get("joinDate")?.toString() ?? new Date()
    ),

    notes: formData.get("notes")?.toString() || undefined,

    isActive: formData.get("isActive") === "true",
  };

  if (!id) {
    return {
      success: false,
      message: "Employee ID is required.",
    };
  }

  const validatedData = employeeSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      success: false,
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.employee.update({
      where: {
        id,
      },

      data: {
        employeeCode: validatedData.data.employeeCode,

        fullName: validatedData.data.fullName,
        phone: validatedData.data.phone,
        cnic: validatedData.data.cnic,
        address: validatedData.data.address,

        employeeType: validatedData.data.employeeType as any,
        department: validatedData.data.department,
        designation: validatedData.data.designation,

        salaryType: validatedData.data.salaryType as any,
        basicSalary: validatedData.data.basicSalary,
        commissionPercent:
          validatedData.data.commissionPercent,

        joinDate: validatedData.data.joinDate,

        notes: validatedData.data.notes,
        isActive: validatedData.data.isActive,

        branchId: validatedData.data.branchId,
      },
    }); 

    revalidatePath("/dashboard/employees");
    revalidatePath(`/dashboard/employees/${id}`);
    revalidatePath(`/dashboard/employees/${id}/edit`);

    return {
  success: true,
  message: "Employee updated successfully.",
  redirectTo: `/dashboard/employees/${id}`,
};
  } catch (error) {
    console.error("Employee Update Error:", error);

    return {
      success: false,
      message: "Unable to update employee.",
    };
  }
}