import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>Alpha Images</h1>
      <Link href="/">Home</Link>
      <Link href="/first">First</Link>
      <Link href="/second">Second</Link>
    </nav>
  );
}
