import Results from "@/Components/Results/Results";
import { notFound } from "next/navigation";

export default async function GradePage({ params }) {
  const { grade } = await params;
  if (grade < 1 || grade > 3) notFound();

  return <Results grade={grade} />;
}
