import StopWatch from "@/Components/Timers/StopWatch";

export const metadata = {
  title: "Timers",
  description: "Here you can find very nice stop watch and countdown timer",
};

export default function TimersPage() {
  return (
    <div>
      <StopWatch />
    </div>
  );
}
