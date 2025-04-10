import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoanApplication() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: '',
    email: '',
    phone: '',
    address: '',
    
    // Employment
    employmentType: '',
    employerName: '',
    monthlyIncome: '',
    workExperience: '',
    
    // Documents
    idProof: null,
    addressProof: null,
    bankStatements: null,
    salarySlips: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const steps = [
    { number: 1, name: 'Personal Info', status: currentStep === 1 ? 'current' : currentStep > 1 ? 'complete' : 'upcoming' },
    { number: 2, name: 'Employment', status: currentStep === 2 ? 'current' : currentStep > 2 ? 'complete' : 'upcoming' },
    { number: 3, name: 'Documents', status: currentStep === 3 ? 'current' : currentStep > 3 ? 'complete' : 'upcoming' },
    { number: 4, name: 'Review', status: currentStep === 4 ? 'current' : 'upcoming' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Loan Application Progress</h1>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step.status === 'complete'
                    ? 'bg-indigo-600 text-white'
                    : step.status === 'current'
                    ? 'bg-indigo-200 text-indigo-600'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step.status === 'complete' ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  step.number
                )}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-900">
                {step.name}
              </span>
              {index < steps.length - 1 && (
                <div className="w-full h-0.5 mx-4 bg-gray-200">
                  <div
                    className={`h-full ${
                      step.status === 'complete' ? 'bg-indigo-600' : ''
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Steps */}
      <div className="card">
        {currentStep === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="3"
                  className="input-field"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Employment Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Employment Type
                </label>
                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="salaried">Salaried</option>
                  <option value="self-employed">Self Employed</option>
                  <option value="business">Business Owner</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Employer Name
                </label>
                <input
                  type="text"
                  name="employerName"
                  value={formData.employerName}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Monthly Income
                </label>
                <input
                  type="number"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Work Experience (years)
                </label>
                <input
                  type="number"
                  name="workExperience"
                  value={formData.workExperience}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Required Documents</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ID Proof
                </label>
                <input
                  type="file"
                  name="idProof"
                  onChange={handleFileChange}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address Proof
                </label>
                <input
                  type="file"
                  name="addressProof"
                  onChange={handleFileChange}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bank Statements (Last 3 months)
                </label>
                <input
                  type="file"
                  name="bankStatements"
                  onChange={handleFileChange}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Salary Slips (Last 3 months)
                </label>
                <input
                  type="file"
                  name="salarySlips"
                  onChange={handleFileChange}
                  className="mt-1 block w-full"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Review Application</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-medium">{formData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium">{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-medium">{formData.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="font-medium">{formData.address}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Employment Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Employment Type</p>
                    <p className="font-medium">{formData.employmentType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Employer</p>
                    <p className="font-medium">{formData.employerName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Monthly Income</p>
                    <p className="font-medium">₹{formData.monthlyIncome}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="font-medium">{formData.workExperience} years</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Documents Uploaded</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li className={formData.idProof ? 'text-green-600' : 'text-red-600'}>
                    ID Proof: {formData.idProof ? 'Uploaded' : 'Not uploaded'}
                  </li>
                  <li className={formData.addressProof ? 'text-green-600' : 'text-red-600'}>
                    Address Proof: {formData.addressProof ? 'Uploaded' : 'Not uploaded'}
                  </li>
                  <li className={formData.bankStatements ? 'text-green-600' : 'text-red-600'}>
                    Bank Statements: {formData.bankStatements ? 'Uploaded' : 'Not uploaded'}
                  </li>
                  <li className={formData.salarySlips ? 'text-green-600' : 'text-red-600'}>
                    Salary Slips: {formData.salarySlips ? 'Uploaded' : 'Not uploaded'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-between">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </button>
          )}
          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="ml-auto px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="ml-auto px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700"
            >
              Submit Application
            </button>
          )}
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Application Submitted Successfully!
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Thank you for applying. Our team will review your application and contact you within 24 hours.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoanApplication;