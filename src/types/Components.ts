import { PropsWithChildren } from "react";

export interface BaseComponentsProps extends PropsWithChildren {
  className?: string;
  id?: string;
}
