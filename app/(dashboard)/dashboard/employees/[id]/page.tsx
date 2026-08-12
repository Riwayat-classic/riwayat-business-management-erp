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
      <div className="flex items-center justify-between">
  <div>
    <h1 className="text-3xl font-bold text-[#7A0019]">
      Employee Details
    </h1>

    <p className="mt-1 text-muted-foreground">
      View employee information and employment details.
    </p>
  </div>

  <div className="flex items-center gap-3">
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${
        employee.isActive
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {employee.isActive ? "Active" : "Inactive"}
    </span>
  </div>
</div>

     <div className="rounded-lg border bg-white p-6">
  <h2 className="text-xl font-semibold text-[#7A0019] mb-6">
    Basic Information
  </h2>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div>
      <p className="text-sm text-muted-foreground">
        Employee Code
      </p>
      <p className="mt-1 font-medium">
        {employee.employeeCode}
      </p>
    </div>

    <div>
      <p className="text-sm text-muted-foreground">
        Full Name
      </p>
      <p className="mt-1 font-medium">
        {employee.fullName}
      </p>
    </div>

    <div>
      <p className="text-sm text-muted-foreground">
        Phone
      </p>
      <p className="mt-1 font-medium">
        {employee.phone}
      </p>
    </div>

    <div>
      <p className="text-sm text-muted-foreground">
        CNIC
      </p>
      <p className="mt-1 font-medium">
        {employee.cnic || "Not provided"}
      </p>
    </div>

    <div className="md:col-span-2">
      <p className="text-sm text-muted-foreground">
        Address
      </p>
      <p className="mt-1 font-medium">
        {employee.address || "Not provided"}
      </p>
    </div>
  </div>
</div>
<div className="rounded-lg border bg-white p-6">
  <h2 className="text-xl font-semibold text-[#7A0019] mb-6">
    Employment Information
  </h2>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div>
      <p className="text-sm text-muted-foreground">
        Branch
      </p>
      <p className="mt-1 font-medium">
        {employee.branch.name}
      </p>
    </div>

    <div>
      <p className="text-sm text-muted-foreground">
        Employee Type
      </p>
      <p className="mt-1 font-medium">
        {employee.employeeType}
      </p>
    </div>

    <div>
      <p className="text-sm text-muted-foreground">
        Department
      </p>
      <p className="mt-1 font-medium">
        {employee.department}
      </p>
    </div>

    <div>
      <p className="text-sm text-muted-foreground">
        Designation
      </p>
      <p className="mt-1 font-medium">
        {employee.designation}
      </p>
    </div>

    <div>
      <p className="text-sm text-muted-foreground">
        Join Date
      </p>
      <p className="mt-1 font-medium">
        {employee.joinDate.toLocaleDateString()}
      </p>
    </div>
  </div>
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