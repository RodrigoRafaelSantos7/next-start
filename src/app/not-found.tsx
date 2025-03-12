import { RiErrorWarningLine } from "@remixicon/react";

import { Card, CardContent } from "@/components/ui/card";

function NotFound() {
  return (
    <div className="container-wrapper h-full">
      <div className="container items-center">
        <Card className="mx-auto max-w-2xl">
          <CardContent className="h-full text-center">
            <h1 className="text-5xl font-bold">
              <RiErrorWarningLine className="inline-block h-10 w-10 text-red-500" />{" "}
              404 - Page Not Found
            </h1>
            <p className="text-xl">
              The page you are looking for does not exist.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default NotFound;
