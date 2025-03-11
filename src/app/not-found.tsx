import { RiFileUnknowLine } from "@remixicon/react";

import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardContent>
        <p className="flex items-center justify-center gap-2 text-2xl">
          <RiFileUnknowLine />
          This page cannot be found.
        </p>
      </CardContent>
    </Card>
  );
}
