import { prisma } from "@/lib/prisma";

export async function generateEmployeeCode() {
  const totalEmployees = await prisma.employee.count();

  const nextNumber = totalEmployees + 1;

  return `EMP-${nextNumber.toString().padStart(6, "0")}`;
}