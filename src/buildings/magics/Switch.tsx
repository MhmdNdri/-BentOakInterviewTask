import { Children, ReactElement, isValidElement } from "react";
import type { ReactNode } from "react";

import { nodeToElement, renderProp } from "@/utils";

interface SwitchProps {
  children: ReactNode;
  /** content to display if no Match predicate is truthy */
  fallback?: ReactNode;
}
/** Component to display one exclusive condition out of many,
 * using Match component
 */
export function Switch(props: SwitchProps): ReactElement | null {
  for (const item of Children.toArray(props.children)) {
    if (isValidElement(item) && item.props.when) {
      return item;
    }
  }
  return nodeToElement(props.fallback);
}

interface MatchProps<T> {
  /** predicate */
  when: T | undefined | null | false;
  /** content (or renderProp) to display if predicate is truthy */
  children?: ((item: T) => ReactNode) | ReactNode;
}

/** Single branch of Switch component. */
export function Match<T>({
  when,
  children,
}: MatchProps<T>): ReactElement | null {
  if (!when) {
    return null;
  }
  return renderProp(children, when);
}
