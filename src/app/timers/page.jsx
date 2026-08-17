import StopWatch from "@/Components/Timers/StopWatch";
import Countdown from "@/Components/Timers/Countdown";

export const metadata = {
  title: "Timers",
  description: "Here you can find very nice stop watch and countdown timer",
};

export default function TimersPage() {
  return (
    <div>
      <StopWatch />
      <Countdown duration={8_000} />
    </div>
  );
}
