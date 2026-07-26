"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function EmployeeForm() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#7A0019]">
          Add Employee
        </h1>

        <p className="mt-2 text-muted-foreground">
          Create a new employee for Riwayat ERP.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            <div>
              <Label>Employee Code</Label>

              <Input
                placeholder="EMP000001"
                readOnly
              />
            </div>

            <div>
              <Label>Full Name</Label>

              <Input
                placeholder="Enter full name"
              />
            </div>

            <div>
              <Label>Phone</Label>

              <Input
                placeholder="03XXXXXXXXX"
              />
            </div>

            <div>
              <Label>CNIC</Label>

              <Input
                placeholder="42101-1234567-1"
              />
            </div>

            <div className="md:col-span-2">
              <Label>Address</Label>

              <Textarea
                placeholder="Employee address"
              />
            </div>

          </div>
        </CardContent>
      </Card>

<Card>
  <CardHeader>
    <CardTitle>Employment Information</CardTitle>
  </CardHeader>

  <CardContent>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

      <div>
        <Label>Branch</Label>

        <Input
          placeholder="Karachi Main Branch"
          readOnly
        />
      </div>

      <div>
        <Label>Employee Type</Label>

        <Input
          placeholder="Sales"
        />
      </div>

      <div>
        <Label>Department</Label>

        <Input
          placeholder="Sales Department"
        />
      </div>

      <div>
        <Label>Designation</Label>

        <Input
          placeholder="Sales Executive"
        />
      </div>

    </div>
  </CardContent>
</Card>

      <div className="flex justify-end gap-3">
        <Button variant="outline">
          Cancel
        </Button>

        <Button>
          Save Employee
        </Button>
      </div>
    </div>
  );
}