
import { HealthPackageCard } from "@/components/HealthPackageCard";

const Index = () => {
  // Package details data
  const packages = [
    {
      title: "Veera Gold Health Checkup",
      tests: [
        "Complete Blood Picture",
        "Peripheral Smear Examination",
        "ESR",
        "CUE & Microscopy",
        "Thyroid Function Tests",
        "Kidney Function Tests"
      ],
      originalPrice: 4500,
      offerPrice: 1400
    },
    {
      title: "Veera Platinum Health Checkup",
      tests: [
        "Complete Blood Picture",
        "Peripheral Smear Examination",
        "ESR",
        "CUE & Microscopy",
        "Thyroid Function Tests",
        "Kidney Function Tests"
      ],
      originalPrice: 2400,
      offerPrice: 900
    },
    {
      title: "Veera Diabetic Health Checkup",
      tests: [
        "Complete Blood Picture",
        "Peripheral Smear Examination",
        "ESR",
        "CUE & Microscopy",
        "Thyroid Function Tests",
        "Kidney Function Tests"
      ],
      originalPrice: 1800,
      offerPrice: 700
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="py-6 px-4 md:px-12">
        <div className="max-w-5xl mx-auto">
          <img 
            src="/lovable-uploads/8209f927-c028-4e45-8916-c0952e33b6cd.png" 
            alt="Veera Hospitals Logo" 
            className="h-24 mx-auto"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-veera-blue mb-4">
            Health Checkup Campaign
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">Join us on <span className="font-bold">May 4th</span> for exclusive health checkup packages</p>
          <div className="inline-block bg-veera-green text-white px-6 py-3 rounded-full text-lg font-bold mb-8">
            Up to 90% off on all tests
          </div>
          <p className="text-gray-600 md:w-3/4 mx-auto">
            Take charge of your health with our comprehensive health checkup packages designed to detect potential health issues early and help you maintain optimal health.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 px-4 md:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-veera-blue mb-8 text-center">Our Health Checkup Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <HealthPackageCard
                key={index}
                title={pkg.title}
                tests={pkg.tests}
                originalPrice={pkg.originalPrice}
                offerPrice={pkg.offerPrice}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-4 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-veera-blue mb-8 text-center">Why Choose Veera Hospitals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-veera-blue rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
              <p className="text-gray-600">Our team of experienced healthcare professionals are committed to providing the best care.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-veera-green rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Labs</h3>
              <p className="text-gray-600">State-of-the-art facilities and equipment for accurate and reliable test results.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-veera-lightblue rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Results</h3>
              <p className="text-gray-600">Minimal waiting time for appointments and quick turnaround for test results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-veera-blue text-white py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Veera Hospitals - A Unit of Veera Hospitals</h3>
          <p className="mb-2">Book your health checkup today!</p>
          <p>&copy; {new Date().getFullYear()} Veera Hospitals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
