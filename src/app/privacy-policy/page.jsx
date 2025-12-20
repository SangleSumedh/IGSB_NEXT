import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-sm rounded-xl p-8 md:p-12">
        {/* Header */}
        <header className="border-b border-gray-100 pb-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Privacy Statement
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Indira Global School of Business (IGSB) respects the privacy of all
            visitors to our website. Through the course of operations, we
            collect information about visitors through multiple methods and for
            a number of reasons.
          </p>
        </header>

        {/* Content Sections */}
        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Anonymous Information
            </h2>
            <p>
              Anonymous information concerning the browsing habits of our
              visitors is collected to inform future design decisions that
              enhance the user experience. This anonymous user information is
              collected through third-party vendors, including Google, that
              specialize in website analytics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Personal Information
            </h2>
            <p className="mb-4">
              Any personal or contact information voluntarily shared by users
              through online forms is protected through internal processes and
              is never sold to third parties. During regular operations, we do
              store some contact information in third-party service providers
              that we use regularly for communication purposes.
            </p>
            <p className="mb-4">
              When you voluntarily send us electronic mail or fill out a form,
              we keep a record of this information to respond appropriately. We
              collect information from you only when you register on our site or
              submit a form. When doing so, you may be asked to enter your name,
              email address, or phone number. However, you may also visit our
              site anonymously.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 italic">
              In case you have submitted your personal information and contact
              details, we reserve the right to contact you via Call, SMS, Email,
              or WhatsApp about our products and offers—even if your number is
              registered under DND (Do Not Disturb).
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Links</h2>
            <p>
              Our website contains links to other websites. Please note that
              when you follow these links, you are entering another website and
              our privacy policy is no longer in effect. We encourage you to
              read the privacy statements of these linked sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Cookies
            </h2>
            <p>
              We track our website traffic through the Google Analytics
              platform. We, and third-party vendors including Google, use
              cookies stored on your computer to report how interactions with
              advertising and advertising services are related to our website
              traffic.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Changes
            </h2>
            <p>
              Our Privacy Statement may change from time to time. We will update
              any changes on this page and, if the changes are significant, we
              may provide a more prominent notice.
            </p>
          </section>

          <section className="bg-secondary text-white rounded-lg p-8 text-center">
            <h2 className="text-xl font-semibold mb-2">Questions?</h2>
            <p className="mb-6 text-gray-300">
              If you have any questions about this statement, please reach out
              to us.
            </p>
            <Link
              href="mailto:info@indiraigsb.edu.in"
              className="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              info@indiraigsb.edu.in
            </Link>
          </section>
        </div>

        {/* Footer Note */}
        <footer className="mt-12 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
          Last Updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
