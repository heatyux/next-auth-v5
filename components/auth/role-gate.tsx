"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import { FormError } from "../form-error";

type RoleGateProps = {
  allowRole: UserRole;
  children: React.ReactNode;
};

export const RoleGate = ({ allowRole, children }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowRole) {
    return (
      <FormError message="You do not have permission to view this content!" />
    );
  }

  return <>{children}</>;
};
