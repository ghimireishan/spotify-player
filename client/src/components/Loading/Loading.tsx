import React from "react";

export const Loading = () => {
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#808080" strokeWidth="10">
                <animate attributeName="r" from="10" to="40" dur="0.8s" begin="0s" repeatCount="indefinite" />
            </circle>
        </svg>
    </div>
  );
};
