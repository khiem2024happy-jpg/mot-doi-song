import Link from 'next/link';
export function Footer(){return <footer className="mt-24 border-t border-[#ddd5c8]"><div className="shell py-10 text-sm text-muted flex flex-wrap justify-between gap-4"><p>© {new Date().getFullYear()} Một Đời Sống · Hiểu cuộc đời. Suy ngẫm về cách sống.</p><Link href="/feed.xml">RSS</Link></div></footer>}
