import { Button } from "@/components/ui/button";

const sampleAction = async () => {
  "use server";
  console.log("throw an action");
};

export default async function Home() {
  return (
    <main className="h-svh flex flex-col gap-6 items-center justify-center">
      <h1 className="font-semibold text-4xl">Nextjs Clean Starter</h1>

      <form action={sampleAction}>
        <Button className="cursor-pointer" variant="outline">
          click me to throw something or not
        </Button>
      </form>
    </main>
  );
}
