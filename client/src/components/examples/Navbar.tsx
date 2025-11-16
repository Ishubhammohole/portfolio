import { Navbar } from "../Navbar";
import { ThemeProvider } from "../ThemeProvider";

export default function NavbarExample() {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="h-screen" />
    </ThemeProvider>
  );
}
