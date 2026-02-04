import Button from "@/Components/Navbar/UiElements/Button";

export default function Home() {
  return (
    <div>
      <h2>Hello! This is Home Page</h2>
      {/* link */}
      <Button href='/blog' outline>Blog</Button>
    </div>
  );
}
