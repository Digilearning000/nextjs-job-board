import H1 from "@/components/ui/h1";
import React from "react";

const page = () => {
  return (
    <main className="m-auto my-10 max-w-5xl space-y-5 px-3 text-center">
      <H1>Job submitted</H1>
      <p>
        Your job has been submitted successfully and is pending for approval
      </p>
    </main>
  );
};

export default page;
