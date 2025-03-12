import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container-wrapper h-full">
      <div className="container items-center">
        <Card className="mx-auto max-w-md">
          <CardContent className="h-full text-center">
            <h1 className="text-5xl font-bold">Next.js Starter</h1>
            <p className="text-xl">A simple starter for Next.js</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
