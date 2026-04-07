import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-blue-900 text-white p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold">AIQueenVida Digital Hub</h1>
          <p className="mt-3 text-lg">
            Sell digital products, capture leads, and grow your business.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <section className="bg-white rounded-2xl shadow p-6 mb-6">
          <h2 className="text-2xl font-bold mb-3">Welcome</h2>
          <p>
            Your app is now connected and ready for the next setup steps.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Sample Product</h2>
          <div className="border rounded-xl p-4">
            <h3 className="text-xl font-semibold">Grant Writing Playbook</h3>
            <p className="mt-2 text-slate-600">
              A practical guide to finding grants, writing proposals, and building funding confidence.
            </p>
            <p className="mt-3 font-bold">$47</p>
            <a
              href="https://www.paypal.com/ncp/payment/SGQKZVNZDSQ5Q"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold px-5 py-3 rounded-xl"
            >
              Buy Now
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
