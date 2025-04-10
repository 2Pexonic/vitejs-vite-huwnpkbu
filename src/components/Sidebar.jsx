import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  DocumentTextIcon,
  CreditCardIcon,
  UserIcon,
  WalletIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: HomeIcon, label: 'Dashboard' },
    { path: '/dashboard/apply', icon: DocumentTextIcon, label: 'Apply for Loan' },
    { path: '/dashboard/payments', icon: CreditCardIcon, label: 'Payments' },
    { path: '/dashboard/profile', icon: UserIcon, label: 'Profile' },
    { path: '/dashboard/wallet', icon: WalletIcon, label: 'Wallet' },
    { path: '/dashboard/settings', icon: Cog6ToothIcon, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-lg">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-indigo-600">LoanBerry</h2>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 ${
                location.pathname === item.path ? 'bg-indigo-50 text-indigo-600' : ''
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
