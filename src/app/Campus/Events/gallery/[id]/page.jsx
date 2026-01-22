import { notFound } from "next/navigation";
import { eventsData } from "@/static/eventsData";
import ScrollTop from "./ScrollTop";
import Image from "next/image";

export default async function GalleryPage({ params }) {
  // ✅ params is async in Next 15
  const { id } = await params;
  const eventId = Number(id);

  const event = eventsData.find((e) => e.id === eventId);

  if (!event) {
    notFound();
  }

  return (
    <>
      <ScrollTop />
      <section className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="">
          {/* HEADER */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              {event.title}
            </h1>
            <p className="mt-3 text-gray-600 max-w-7xl mx-auto">
              {event.description}
            </p>
          </div>

          {/* GALLERY */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {event.images.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl shadow hover:shadow-lg transition"
              >
                <Image
                  src={img}
                  alt={`${event.title} image ${i + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover object-top transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 768px) 50vw,
                         (max-width: 1024px) 33vw,
                         33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
