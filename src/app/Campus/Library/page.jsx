import React from 'react'
import Image from 'next/image'

function Page() {
  // This would typically come from state/props in your actual implementation
  const activeSection = "Library"; // Change to "Canteen" to see canteen section

  return (
    <div>
      {activeSection === "Canteen" ? (
        // Canteen-specific content
        <div className="max-w-full mx-auto px-6 py-16">
          <div className="w-full bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-8 text-center">Canteen @ IGSB</h2>
            
            {/* Canteen Images Grid */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6">Our Canteen Facilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Canteen1","Canteen2","Canteen3","Canteen4","Canteen5","Canteen6"].map((item) => (
                  <div key={item} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                    <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                      <Image
                        src={`/Facilities/${item}.webp`}
                        alt={`${item}`}
                        fill
                        className="object-cover"
                        unoptimized={true}
                      />
                      <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
                       
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
      ) : activeSection === "Library" ? (
        // Library-specific content
        <div className="max-w-full mx-auto px-6 py-16">
          <div className="w-full bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-8 text-center">Library @ IGSB</h2>
            
            <div className="mb-8">
              <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-4">
                The Library at Indira Global School of Business (IGSB) is a vibrant hub of academic resources, supporting the MBA programme with a rich and diverse collection of learning materials, with a comprehensive collection of physical and digital learning materials.
              </p>
              <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-4">
                Our library boasts a rich repository of 9150 books and 33 journals and 6 daily newspapers spanning various domains of management, business, and allied disciplines. We utilize Koha, an advanced integrated library management software, to streamline operations and enhance user experience.
              </p>
              <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-4">
                IGSB is also a proud member and access of DELNET, J-Gate, NDLI Club and Jayakar Library providing students and faculty access to a vast network of digital resources and scholarly content. Additionally, our digital library includes eBook collections from leading publishers such as Tata McGraw-Hill and Pearson, ensuring that learners have access to high-quality academic content anytime, anywhere.
              </p>
              <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-8">
                We also offer the student copy of Mint newspaper, a leading business daily, to keep students updated with current affairs, market insights, and economic developments—an essential resource for aspiring business leaders.
              </p>
              <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                The library is committed to fostering a culture of research, innovation, and lifelong learning.
              </p>
            </div>

            {/* Library Images Grid - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {/* Image 1 */}
              <div className="relative w-full h-84 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/Facilities/Lib1.jpg"
                  alt="Library Facility 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  unoptimized={true}
                />
              </div>

              {/* Image 2 */}
              <div className="relative w-full h-84 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/Facilities/Lib4.jpg"
                  alt="Library Facility 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  unoptimized={true}
                />
              </div>

              {/* Image 3 */}
              <div className="relative w-full h-84 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/Facilities/Lib3.jpg"
                  alt="Library Facility 3"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  unoptimized={true}
                />
              </div>

              {/* Image 4 */}
              <div className="relative w-full h-84 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/Facilities/Lib2.jpg"
                  alt="Library Facility 4"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  unoptimized={true}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Default section when neither Canteen nor Library is active
        <div className="max-w-full mx-auto px-6 py-16">
          <div className="w-full bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-8 text-center">
              Select a Facility
            </h2>
            <p className="text-center text-gray-600">
              Please select either Canteen or Library from the navigation to view facility details.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page