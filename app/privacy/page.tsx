import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="w-full">
      <div className="mx-8 max-w-2xl py-20 sm:mx-auto">
        <h1 className="mb-8 text-5xl font-bold">Privacy Policy</h1>
        <div className="prose mx-auto max-w-6xl text-base leading-7 text-black mb-8 dark:text-white">
          <p>
            Your privacy is important to us. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website. Please read this
            policy carefully to understand our views and practices regarding your personal data and
            how we treat it.
          </p>
          
          <h2>Information We Collect</h2>
          <p>
            We collect information about you in a variety of ways. The information we may collect on
            this website includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name,
              email address, and contact details, which you voluntarily give to us when registering or
              expressing interest in our services.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our website, including
              details about your visits, pages viewed, and the resources you access. This information
              may include traffic data, location data, and other communication data.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies, beacons, tags, and
              scripts to collect and track information about your interaction with our site.
            </li>
          </ul>

          <h2>How We Use Information</h2>
          <p>
            The information we collect is used in the following ways:
          </p>
          <ul>
            <li>To provide, operate, and maintain our website.</li>
            <li>To improve, personalize, and expand our website and its services.</li>
            <li>To understand and analyze how you use our website.</li>
            <li>To communicate with you, including customer service, providing updates, and other
              information related to the website.</li>
            <li>To send you promotional communications, such as newsletters and offers, if you have
              opted-in to receive them.</li>
          </ul>

          <h2>Sharing Your Information</h2>
          <p>
            We do not share your personal information with third parties except as described in this
            policy. We may share information with:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We may share your information with third-party
              vendors and service providers that perform services on our behalf, such as hosting,
              analytics, and marketing.
            </li>
            <li>
              <strong>Legal Obligations:</strong> We may disclose your information if required by law
              or in response to valid requests by public authorities (e.g., a court or a government
              agency).
            </li>
          </ul>

          <h2>Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your
            personal information. However, please be aware that despite our efforts, no security
            measures are perfect or impenetrable, and no method of data transmission can be
            guaranteed against any interception or other type of misuse.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal
            information:
          </p>
          <ul>
            <li>The right to access – You have the right to request copies of your personal data.</li>
            <li>The right to rectification – You have the right to request that we correct any
              information you believe is inaccurate.</li>
            <li>The right to erasure – You have the right to request that we erase your personal
              data, under certain conditions.</li>
            <li>The right to restrict processing – You have the right to request that we restrict
              the processing of your personal data, under certain conditions.</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time to reflect changes to our practices or
            for other operational, legal, or regulatory reasons. You are encouraged to review this
            policy periodically to stay informed about how we protect your information.
          </p>
        </div>
        <p className="text-sm italic">This document was last updated on April 20, 2023.</p>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
