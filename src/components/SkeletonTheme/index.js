import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

export default function SkeletonTheme() {
  return (
    <div data-testid="skeleton">
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={600} height={118} />
      <Skeleton variant="text" />
    </div>
  );
}
