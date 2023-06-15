import Link from 'next/link';
import React from 'react';

function NavHeader() {
  return (
    <header className="flex justify-center gap-5 w-full bg-slate-200 p-4 text-lg">
      <Link href="/">home</Link>
      <Link href="/public_page">public page</Link>
      <Link href="/private_page">private page</Link>
      <Link href="/very_fat_page">very fat page</Link>
      <Link href="/login">login</Link>
    </header>
  );
}

export default NavHeader;
