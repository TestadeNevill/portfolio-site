import { Link } from "react-router-dom";

const Transshipment = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold text-green-800 mb-4">
        Designing Cities for the Future: The Crucial Role of Transshipment
      </h1>
      <p className="text-sm text-gray-500 mb-10">By Testa DeNevill · June 2025</p>
      <img
        src="/assets/transshipment6.png"
        alt="Transshipment hub"
        className="w-full h-auto object-contain rounded-lg shadow-md mb-10"
      />
      <p className="mb-6">
        In the evolving landscape of urban development, <strong>transshipment</strong>
        —the process of transferring goods from one mode of transportation to another
        at intermediate points—has emerged as a pivotal element in shaping efficient,
        sustainable, and resilient cities.
      </p>
      <p className="mb-6">
        As urban populations swell and the demand for goods intensifies, integrating
        transshipment hubs into urban planning becomes essential to streamline logistics,
        reduce congestion, and minimize environmental impact.
      </p>
      <p className="mb-6">
        Transshipment hubs serve as critical nodes that facilitate the seamless movement
        of goods, enabling cities to manage supply chains effectively while adapting to
        the constraints of urban environments.
      </p>
      <p className="mb-6">
        By strategically positioning these hubs, cities can optimize freight distribution,
        support economic growth, and enhance the quality of urban life.
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

export default Transshipment;
