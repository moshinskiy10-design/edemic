import type { Metadata } from "next";
import { QuizFlow } from "@/components/quiz/QuizFlow";

export const metadata: Metadata = {
  title: "Free 60-second quiz · Edemic Pets",
  description:
    "Seven questions, one tap each. Find your dog's eater type and get free nutrition guides tuned for Australian households.",
  robots: { index: true, follow: true },
};

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-cream">
      <QuizFlow />
    </main>
  );
}
