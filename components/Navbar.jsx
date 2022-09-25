import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <Link href="/">
        <div className="logo">
          <Image src="/logo.png" alt="logo" width={128} height={77} />
        </div>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/users">
        <a>User Listing</a>
      </Link>
    </nav>
  );
}

export default Navbar;
