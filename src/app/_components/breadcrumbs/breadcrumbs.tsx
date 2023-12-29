import ChevronRight from "@assets/chevron-right";
import React from "react";

import { cn } from "@/lib/utils";

type BreadcrumbsProps = {
  breadcrumbs: { title: string }[];
};

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <div className="flex items-center gap-3.5 text-xl font-semibold">
      <div className="cursor-pointer">Main Page</div>
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight />
          <div
            className={cn(breadcrumbs.length !== index + 1 && "cursor-pointer")}
          >
            {item.title}
          </div>
        </React.Fragment>
      ))}
      <hr className="grow translate-y-[1px] rounded-full border-2 border-muted" />
    </div>
  );
};
