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
  include: {
    branch: true,
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
<div className="rounded-lg border bg-white p-6 space-y-3">
  <h2 className="text-xl font-semibold text-[#7A0019]">
    Employment Information
  </h2>

  <p>
  <strong>Branch:</strong>{" "}
  {employee.branch.name}
</p>

  <p>
    <strong>Employee Type:</strong>{" "}
    {employee.employeeType}
  </p>

  <p>
    <strong>Department:</strong>{" "}
    {employee.department}
  </p>

  <p>
    <strong>Designation:</strong>{" "}
    {employee.designation}
  </p>

  <p>
    <strong>Join Date:</strong>{" "}
    {employee.joinDate.toLocaleDateString()}
  </p>
</div>
<div className="rounded-lg border bg-white p-6 space-y-3">
  <h2 className="text-xl font-semibold text-[#7A0019]">
    Salary Information
  </h2>

  <p>
    <strong>Salary Type:</strong>{" "}
    {employee.salaryType}
  </p>

  <p>
    <strong>Basic Salary:</strong>{" "}
    {employee.basicSalary.toString()}
  </p>

  <p>
    <strong>Commission:</strong>{" "}
    {employee.commissionPercent.toString()}%
  </p>
</div>
<div className="rounded-lg border bg-white p-6 space-y-3">
  <h2 className="text-xl font-semibold text-[#7A0019]">
    Status Information
  </h2>

  <p>
    <strong>Status:</strong>{" "}
    {employee.isActive ? "Active" : "Inactive"}
  </p>

  <p>
    <strong>Created:</strong>{" "}
    {employee.createdAt.toLocaleDateString()}
  </p>

  <p>
    <strong>Last Updated:</strong>{" "}
    {employee.updatedAt.toLocaleDateString()}
  </p>

  {employee.notes && (
    <p>
      <strong>Notes:</strong>{" "}
      {employee.notes}
    </p>
  )}
</div>
    </div>
  );
}