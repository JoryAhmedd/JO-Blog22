import SignUp from "@/Components/SignUp/SignUpForm";

export const metadata = {
  title: "login",
  description: "log into your account using your email and password",
};

export default function LoginPage() {
  return (
    <div>
      <SignUp login />
    </div>
  );
}
