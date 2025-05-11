import { Button } from "@/components/ui/button";

const sampleAction = async () => {
  "use server";
  console.log("throw an action");
};

const SampleForm = ({ btnLabel }: { btnLabel: string }) => {
  return (
    <form action={sampleAction}>
      <Button type="submit" variant="outline">
        {btnLabel}
      </Button>
    </form>
  );
};

export default async function Home() {
  return (
    <main className="full-page-centered gap-5">
      <h1 className="title">Nextjs Clean Starter</h1>
      <SampleForm btnLabel="click me to throw something or not" />
    </main>
  );
}
