import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardContent className="text-center">
        <h1 className="text-5xl">Next.js Starter</h1>
        <p className="text-xl">A simple starter for Next.js</p>
      </CardContent>
    </Card>
  );
}
