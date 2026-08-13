"use client";

import { useState, useTransition } from "react";
import { updateEmployee } from "@/lib/actions/employee-actions";

interface EditEmployeeFormProps {
  employee: {
    id: string;
    employeeCode: string;
    branchId: string;
    fullName: string;
    phone: string;
    cnic: string;
    address: string;
    employeeType: string;
    designation: string;
    department: string;
    salaryType: string;
    basicSalary: string;
    commissionPercent: string;
    joinDate: string;
    isActive: boolean;
    notes: string;
  };

  branches: {
    id: string;
    name: string;
  }[];
}

export function EditEmployeeForm({
  employee,
  branches,
}: EditEmployeeFormProps) {
  const [employeeCode, setEmployeeCode] = useState(employee.employeeCode);
  const [fullName, setFullName] = useState(employee.fullName);
  const [phone, setPhone] = useState(employee.phone);
  const [cnic, setCnic] = useState(employee.cnic);
  const [address, setAddress] = useState(employee.address);

  const [branchId, setBranchId] = useState(employee.branchId);

  const [employeeType, setEmployeeType] = useState(employee.employeeType);
  const [department, setDepartment] = useState(employee.department);
  const [designation, setDesignation] = useState(employee.designation);

  const [salaryType, setSalaryType] = useState(employee.salaryType);
  const [basicSalary, setBasicSalary] = useState(employee.basicSalary);
  const [commissionPercent, setCommissionPercent] = useState(
    employee.commissionPercent
  );
const [isPending, startTransition] = useTransition();
  const [joinDate, setJoinDate] = useState(employee.joinDate);
  const [isActive, setIsActive] = useState(employee.isActive);
  const [notes, setNotes] = useState(employee.notes);

  return (
  <form
  action={(formData) => {
    startTransition(async () => {
      const result = await updateEmployee(formData);

      if (result.success && result.redirectTo) {
        window.location.href = result.redirectTo;
      }
    });
  }}
  className="space-y-6"
>
<input
  type="hidden"
  name="id"
  value={employee.id}
/>
      {/* Basic Information */}
      <div className="rounded-lg border bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold text-[#7A0019]">
          Basic Information
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <div>
            <label className="text-sm text-muted-foreground">
              Employee Code
            </label>

            <input
  type="text"
  name="employeeCode"
  value={employeeCode}
  onChange={(e) => setEmployeeCode(e.target.value)}
  className="mt-1 w-full rounded-lg border px-3 py-2"
/>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">
              Full Name
            </label>

           <input
  type="text"
  name="fullName"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  className="mt-1 w-full rounded-lg border px-3 py-2"
/>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">
              Phone
            </label>

            <input
  type="text"
  name="phone"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="mt-1 w-full rounded-lg border px-3 py-2"
/>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">
              CNIC
            </label>

            <input
              type="text"
              name="cnic"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-muted-foreground">
              Address
            </label>

            <textarea
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </div>

        </div>
      </div>

      {/* Employment Information */}
      <div className="rounded-lg border bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold text-[#7A0019]">
          Employment Information
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <div>
            <label className="text-sm text-muted-foreground">
              Branch
            </label>

            <select
              value={branchId}
              name="branchId"
              onChange={(e) => setBranchId(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            >
              <option value="">Select Branch</option>

              {branches.map((branch) => (
                <option key={branch.id} value={branch.id}>
                  {branch.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">
              Employee Type
            </label>

            <select
              name="employeeType"
              value={employeeType}
              onChange={(e) => setEmployeeType(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            >
              <option value="ADMIN">ADMIN</option>
              <option value="MANAGER">MANAGER</option>
              <option value="SALES">SALES</option>
              <option value="CASHIER">CASHIER</option>
              <option value="TAILOR">TAILOR</option>
              <option value="KARIGAR">KARIGAR</option>
              <option value="HELPER">HELPER</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">
              Department
            </label>

            <input
              type="text"
              name="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground">
              Designation
            </label>

            <input
              type="text"
              name="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground">
              Join Date
            </label>

            <input
              type="date"
              name="joinDate"
              value={joinDate}
              onChange={(e) => setJoinDate(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </div>

        </div>
      </div>

      {/* Salary Information */}
      <div className="rounded-lg border bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold text-[#7A0019]">
          Salary Information
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <div>
            <label className="text-sm text-muted-foreground">
              Salary Type
            </label>

            <select
              name="salaryType"
              value={salaryType}
              onChange={(e) => setSalaryType(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            >
              <option value="MONTHLY">MONTHLY</option>
              <option value="DAILY">DAILY</option>
              <option value="PER_PIECE">PER PIECE</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">
              Basic Salary
            </label>

            <input
              type="number"
              name="basicSalary"
              value={basicSalary}
              onChange={(e) => setBasicSalary(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground">
              Commission (%)
            </label>

            <input
              type="number"
              name="commissionPercent"
              step="0.01"
              value={commissionPercent}
              onChange={(e) => setCommissionPercent(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </div>

        </div>
      </div>

      {/* Status Information */}
      <div className="rounded-lg border bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold text-[#7A0019]">
          Status Information
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <div>
            <label className="text-sm text-muted-foreground">
              Status
            </label>

            <select
  name="isActive"
  value={isActive ? "true" : "false"}
  onChange={(e) =>
    setIsActive(e.target.value === "true")
  }
  className="mt-1 w-full rounded-lg border px-3 py-2"
>
  <option value="true">Active</option>
  <option value="false">Inactive</option>
</select>
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-muted-foreground">
              Notes
            </label>

            <textarea
              name="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </div>

        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">

        <button
  type="submit"
  disabled={isPending}
  className="rounded-lg bg-[#7A0019] px-5 py-2 font-medium text-white hover:bg-[#5F0014] disabled:cursor-not-allowed disabled:opacity-60"
>
  {isPending ? "Saving..." : "Save Changes"}
</button>

        <button
          type="submit"
          className="rounded-lg bg-[#7A0019] px-5 py-2 font-medium text-white hover:bg-[#5F0014]"
        >
          Save Changes
        </button>

      </div>

    </form>
  );
}