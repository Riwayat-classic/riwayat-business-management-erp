"use client";

import { createEmployee } from "@/lib/actions/employee-actions";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function EmployeeForm() {
  return (
    <div className="space-y-6">
      {/* Page Heading */}
      <div>
        <h1 className="text-3xl font-bold text-[#7A0019]">
          Add Employee
        </h1>

        <p className="mt-2 text-muted-foreground">
          Create a new employee for Riwayat ERP.
        </p>
      </div>

      <form action={createEmployee} className="space-y-6">

        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              <div>
                <Label>Employee Code</Label>

               <Input
  value="Auto Generated"
  readOnly
/>
              </div>

              <div>
                <Label>Full Name</Label>

                <Input
                  name="fullName"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <Label>Phone</Label>

                <Input
                  name="phone"
                  placeholder="03XXXXXXXXX"
                />
              </div>

              <div>
                <Label>CNIC</Label>

                <Input
                  name="cnic"
                  placeholder="42101-1234567-1"
                />
              </div>

              <div className="md:col-span-2">
                <Label>Address</Label>

                <Textarea
                  name="address"
                  placeholder="Employee address"
                />
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Employment Information */}
        <Card>
          <CardHeader>
            <CardTitle>Employment Information</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              <div>
               <Label>Branch</Label>

<Input
  name="branchId"
  defaultValue="branch_karachi_main"
  readOnly
/>
              </div>

              <div>
                <Label>Employee Type</Label>

               <Input
  name="employeeType"
  defaultValue="SALES"
  readOnly
/>
              </div>

              <div>
                <Label>Department</Label>

                <Input
                  name="department"
                  placeholder="Sales Department"
                />
              </div>

              <div>
                <Label>Designation</Label>

                <Input
                  name="designation"
                  placeholder="Sales Executive"
                />
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Salary Information */}
        <Card>
          <CardHeader>
            <CardTitle>Salary Information</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              <div>
                <Label>Salary Type</Label>

                <Input
  name="salaryType"
  defaultValue="MONTHLY"
  readOnly
/>
              </div>

              <div>
                <Label>Basic Salary</Label>

                <Input
                  name="basicSalary"
                  type="number"
                  placeholder="50000"
                />
              </div>

              <div>
                <Label>Commission (%)</Label>

                <Input
                  name="commissionPercent"
                  type="number"
                  placeholder="0"
                />
              </div>

              <div>
                <Label>Join Date</Label>

                <Input
                  name="joinDate"
                  type="date"
                />
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Hidden Fields */}
        <input
          type="hidden"
          name="notes"
          value=""
        />

        <input
          type="hidden"
          name="isActive"
          value="true"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
          >
            Cancel
          </Button>

          <Button type="submit">
            Save Employee
          </Button>
        </div>

      </form>
    </div>
  );
}