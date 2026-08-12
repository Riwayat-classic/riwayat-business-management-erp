import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

interface EmployeeDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EmployeeDetailsPage({
  params,
}: EmployeeDetailsPageProps) {
  const { id } = await params;
  const employee = await prisma.employee.findUnique({
  where: {
    id,
  },
});
if (!employee) {
  notFound();
}
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#7A0019]">
        Employee Details
      </h1>

     <div className="rounded-lg border bg-white p-6 space-y-3">
  <p>
    <strong>Employee Code:</strong>{" "}
    {employee.employeeCode}
  </p>

  <p>
    <strong>Full Name:</strong>{" "}
    {employee.fullName}
  </p>

  <p>
    <strong>Phone:</strong>{" "}
    {employee.phone}
  </p>

  <p>
    <strong>CNIC:</strong>{" "}
    {employee.cnic || "Not provided"}
  </p>

  <p>
    <strong>Address:</strong>{" "}
    {employee.address || "Not provided"}
  </p>
</div>
    </div>
  );
}