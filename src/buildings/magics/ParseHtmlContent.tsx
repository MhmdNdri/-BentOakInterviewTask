import React, { FunctionComponent } from "react";

import { BaseComponentsProps } from "@/types";

interface ParseHtmlContentPropsType extends BaseComponentsProps {
  content?: string | null;
}

export const ParseHtmlContent: FunctionComponent<ParseHtmlContentPropsType> = ({
  content = "",
  className,
}) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: content || "" }}
    />
  );
};
