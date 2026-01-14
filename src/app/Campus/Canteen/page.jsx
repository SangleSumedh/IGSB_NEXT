import React from 'react'
import Image from 'next/image'

function Page() {
  // Assuming activeSection is part of your component logic
  const activeSection = "Canteen"; // This would come from your state/props

  return (
    <div>
      {/* Your other sections would be here */}
      
      {activeSection === "Canteen" ? (
        // Canteen-specific content
        <div className="max-w-full mx-auto px-6 py-16">
          <div className="w-full bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-8 text-center">Canteen @ IGSB</h2>
            
            {/* Canteen Images Grid */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6">Our Canteen Facilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Canteen1", "Canteen2", "Canteen3", "Canteen4", "Canteen5", "Canteen6"].map((item) => (
                  <div key={item} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                    <div className="relative h-84  bg-gray-200 flex items-center justify-center">
                      <Image
                        src={`/Facilities/${item}.webp`}
                        alt={`${item}`}
                        fill
                        className="object-cover object-center"
                        unoptimized={true}
                      />
                      <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
                        {/* Optional overlay content */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-md md:text-lg text-gray-700">
                Our canteen offers a variety of delicious, hygienic, and affordable food options 
                to cater to diverse tastes and dietary preferences of students and staff.
              </p>
            </div>
          </div>
        </div>
      ) : (
        // Other sections would be rendered here
        <div>Other section content</div>
      )}
    </div>
  )
}

export default Page