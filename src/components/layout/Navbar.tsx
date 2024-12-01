import { CreditCard, PiggyBank, Wallet2 } from 'lucide-react';
import { Link } from '@/components/ui/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-rose-500">C</span>
              <span className="text-xl font-semibold">comparabien</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/ahorros" className="flex items-center space-x-1 text-gray-700 hover:text-rose-500">
              <PiggyBank className="h-5 w-5" />
              <span>Ahorros</span>
            </Link>
            <Link href="/prestamos" className="flex items-center space-x-1 text-gray-700 hover:text-rose-500">
              <Wallet2 className="h-5 w-5" />
              <span>Préstamos</span>
            </Link>
            <Link href="/tarjetas" className="flex items-center space-x-1 text-gray-700 hover:text-rose-500">
              <CreditCard className="h-5 w-5" />
              <span>Tarjetas</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}