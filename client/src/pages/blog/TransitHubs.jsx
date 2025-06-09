import { Link } from "react-router-dom";

const TransitHubs = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold text-green-800 mb-4">
        Reimagining Transit Hubs: The Future of Connected Cities
      </h1>
      <p className="text-sm text-gray-500 mb-10">By Testa DeNevill · June 2025</p>
      <img
        src="/assets/transithub4.png"
        alt="Transit hub"
        className="w-full h-auto object-contain rounded-lg shadow-md mb-10"
      />
      <p className="mb-6">
        In a future where cities are more interconnected than ever, transit hubs will be the nerve centers that ensure accessibility, reduce congestion, and empower equitable urban movement.
      </p>
      <p className="mb-6">
        These hubs aren’t just for switching between buses and trains — they integrate walking, biking, autonomous shuttles, and micromobility. They also serve as social, economic, and digital hotspots.
      </p>
      <p className="mb-6">
        Rethinking their design with sustainability, flexibility, and community in mind allows cities to support dense, mixed-use neighborhoods and strengthen regional connectivity.
      </p>
      <p className="mb-6">
        Tomorrow’s transit hub is not just infrastructure — it’s an ecosystem, essential for the fluid operation of the smart, green city.
      </p>
      <Link
        to="/blog"
        className="text-green-600 hover:underline text-sm mt-8 block"
      >
        ← Back to Blog
      </Link>
    </section>
  );
};

export default TransitHubs;