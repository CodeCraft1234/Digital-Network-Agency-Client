import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container lg:mt-32 mt-16 mx-auto p-6 md:p-10 lg:p-16 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Privacy Policy
      </h1>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
        At <span className="font-semibold">Digital Network</span>, we prioritize
        your privacy and are committed to safeguarding any personal information
        you share with us. Our Privacy Policy outlines how we collect, use, and
        protect your data, ensuring transparency and trust in our digital
        services.
      </p>

      {/* Information We Collect Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Information We Collect
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          We may collect personal information, such as your name, email
          address, phone number, or other details when you:
        </p>
        <ul className="list-disc pl-5 text-gray-700 text-base md:text-lg leading-relaxed space-y-2">
          <li>Visit our website.</li>
          <li>Subscribe to our services or newsletters.</li>
          <li>Contact us for support or inquiries.</li>
        </ul>
      </section>

      {/* How We Use Your Information Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-base md:text-lg leading-relaxed space-y-2">
          <li>Provide and enhance our digital services.</li>
          <li>Respond to your queries and support requests.</li>
          <li>Personalize your experience with tailored recommendations.</li>
          <li>Communicate updates, offers, or changes in services.</li>
        </ul>
      </section>

      {/* Data Protection Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Data Protection
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          We implement strict security measures to protect your personal
          information from unauthorized access, alteration, or misuse. All data
          is stored securely, and access is limited to authorized personnel
          only.
        </p>
      </section>

      {/* Cookies and Tracking Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Cookies and Tracking
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Digital Network may use cookies to improve user experience and analyze
          website traffic. Cookies allow us to remember your preferences and
          provide a seamless browsing experience. You can manage or disable
          cookies through your browser settings.
        </p>
      </section>

      {/* Third-Party Sharing Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Third-Party Sharing
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          We do not sell, trade, or share your personal information with third
          parties without your consent, except when required by law or to
          provide services through trusted partners.
        </p>
      </section>

      {/* Your Rights Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
        <ul className="list-disc pl-5 text-gray-700 text-base md:text-lg leading-relaxed space-y-2">
          <li>Access, update, or delete your personal information.</li>
          <li>Opt out of marketing communications.</li>
          <li>Request details on how your data is handled.</li>
        </ul>
      </section>

      {/* Policy Updates Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Policy Updates</h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Digital Network may update this Privacy Policy periodically. Any
          changes will be communicated on our website to keep you informed.
        </p>
      </section>

      {/* Contact Us Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          For any questions or concerns about our Privacy Policy, please
          contact us at:
        </p>
        <ul className="list-none text-gray-700 mt-4 space-y-2">
          <li>
            <span className="font-semibold">E-mail:</span> info@digitalnetwork.com
          </li>
          <li>
            <span className="font-semibold">Phone:</span> +8801753-531417
          </li>
        </ul>
      </section>

      <p className="text-gray-700 font-bold mt-10 text-center">
        We value your trust and remain dedicated to ensuring your privacy is
        protected while engaging with our services.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
