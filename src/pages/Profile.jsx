import { useState } from 'react';

function Profile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    address: '123 Main St, Mumbai',
    employment: 'Employed',
    income: '75000',
    bankAccount: 'XXXX-XXXX-1234',
  });

  const [preferences, setPreferences] = useState({
    communicationFrequency: 'weekly',
    paymentDate: '15th',
    autoPay: true,
  });

  const [bankAccounts, setBankAccounts] = useState([
    {
      id: 1,
      name: 'Primary Checking',
      bank: 'Chase Bank',
      accountNumber: '****4321',
      isPrimary: true,
    },
  ]);

  const [newBankAccount, setNewBankAccount] = useState({
    accountName: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update
  };

  const handleAddBankAccount = (e) => {
    e.preventDefault();
    // Handle adding new bank account
    setBankAccounts([...bankAccounts, { ...newBankAccount, id: Date.now() }]);
    setNewBankAccount({ accountName: '', bankName: '', accountNumber: '', ifscCode: '' });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            activeTab === 'profile'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('profile')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Profile</span>
        </button>

        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            activeTab === 'bank'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('bank')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          <span>Bank Accounts</span>
        </button>

        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            activeTab === 'preferences'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('preferences')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Preferences</span>
        </button>

        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            activeTab === 'security'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('security')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Security</span>
        </button>
      </div>

      {/* Profile Section */}
      {activeTab === 'profile' && (
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  value={profile.firstName}
                  onChange={(e) =>
                    setProfile({ ...profile, firstName: e.target.value })
                  }
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  value={profile.lastName}
                  onChange={(e) =>
                    setProfile({ ...profile, lastName: e.target.value })
                  }
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                  className="input-field"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  value={profile.address}
                  onChange={(e) =>
                    setProfile({ ...profile, address: e.target.value })
                  }
                  rows="3"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Employment Status
                </label>
                <select
                  value={profile.employment}
                  onChange={(e) =>
                    setProfile({ ...profile, employment: e.target.value })
                  }
                  className="input-field"
                >
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self Employed</option>
                  <option value="business">Business Owner</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Monthly Income (₹)
                </label>
                <input
                  type="number"
                  value={profile.income}
                  onChange={(e) =>
                    setProfile({ ...profile, income: e.target.value })
                  }
                  className="input-field"
                />
              </div>
            </div>

            <div className="mt-6">
              <button type="submit" className="btn-primary">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Bank Accounts Section */}
      {activeTab === 'bank' && (
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Bank Accounts</h2>
          <p className="text-gray-600 mb-6">Manage your linked bank accounts</p>

          {/* Existing Bank Accounts */}
          <div className="space-y-4 mb-8">
            {bankAccounts.map((account) => (
              <div
                key={account.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{account.name}</h3>
                  <p className="text-sm text-gray-600">
                    {account.bank} - {account.accountNumber}
                  </p>
                </div>
                {account.isPrimary && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Primary
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Add New Bank Account Form */}
          <div>
            <h3 className="text-lg font-medium mb-4">Add New Bank Account</h3>
            <form onSubmit={handleAddBankAccount} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Account Name
                  </label>
                  <input
                    type="text"
                    value={newBankAccount.accountName}
                    onChange={(e) =>
                      setNewBankAccount({
                        ...newBankAccount,
                        accountName: e.target.value,
                      })
                    }
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    value={newBankAccount.bankName}
                    onChange={(e) =>
                      setNewBankAccount({
                        ...newBankAccount,
                        bankName: e.target.value,
                      })
                    }
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Account Number
                  </label>
                  <input
                    type="text"
                    value={newBankAccount.accountNumber}
                    onChange={(e) =>
                      setNewBankAccount({
                        ...newBankAccount,
                        accountNumber: e.target.value,
                      })
                    }
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    value={newBankAccount.ifscCode}
                    onChange={(e) =>
                      setNewBankAccount({
                        ...newBankAccount,
                        ifscCode: e.target.value,
                      })
                    }
                    className="input-field"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary">
                Add Bank Account
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Preferences Section */}
      {activeTab === 'preferences' && (
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Loan Preferences</h2>
          <p className="text-gray-600 mb-6">
            Customize your loan communication and payment preferences
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Communication Frequency
              </label>
              <select
                value={preferences.communicationFrequency}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    communicationFrequency: e.target.value,
                  })
                }
                className="input-field"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Date
              </label>
              <select
                value={preferences.paymentDate}
                onChange={(e) =>
                  setPreferences({ ...preferences, paymentDate: e.target.value })
                }
                className="input-field"
              >
                <option value="1st">1st</option>
                <option value="5th">5th</option>
                <option value="10th">10th</option>
                <option value="15th">15th</option>
                <option value="20th">20th</option>
                <option value="25th">25th</option>
              </select>
            </div>

            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={preferences.autoPay}
                  onChange={(e) =>
                    setPreferences({ ...preferences, autoPay: e.target.checked })
                  }
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm font-medium text-gray-700">
                  Enable Auto Pay
                </span>
              </label>
              <p className="text-sm text-gray-500 mt-1 ml-7">
                Automatically deduct monthly payments from your primary bank account
              </p>
            </div>

            <div className="pt-4">
              <button type="button" className="btn-primary">
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Security Section */}
      {activeTab === 'security' && (
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
          <p className="text-gray-600 mb-6">
            Manage your account security and authentication
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Password</h3>
              <button className="btn-primary">Change Password</button>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <button className="btn-primary">Enable 2FA</button>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-medium mb-4">Login History</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium">Mumbai, India</p>
                    <p className="text-gray-600">Chrome on Windows</p>
                  </div>
                  <p className="text-gray-600">2 hours ago</p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium">Delhi, India</p>
                    <p className="text-gray-600">Safari on iPhone</p>
                  </div>
                  <p className="text-gray-600">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;