import Link from 'next/link';
export default function Header() {
return(
<header className='flex item-center justify-between'>
        <Link className="text-green-800 font-bold text-3xl" href="">BreezeCart</Link>
        <nav className='flex gap-8  items-center text-green-300 font-semibold'>
          <Link href={''} className='transform transition-transform duration-300 hover:scale-125'>Home</Link>
          <Link href={''} className='transform transition-transform duration-300 hover:scale-125'>Menu</Link>
          <Link href={''} className='transform transition-transform duration-300 hover:scale-125'>About</Link>
          <Link href={''} className='transform transition-transform duration-300 hover:scale-125'>Contact Me</Link>
          <Link href={''} className='bg-green-800 px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-125'>LogIn</Link>
        </nav>
      </header>
);
}