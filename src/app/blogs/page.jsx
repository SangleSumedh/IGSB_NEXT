import React from "react";
import Image from "next/image";
import Link from "next/link";

// Blog Data Structure
const blogs = [
  {
    day: "17",
    month: "March",
    year: "2025",
    title:
      "Gudhi Padwa & Success: Learning the Art of New Beginnings with Dr. Tarita Shankar",
    href: "https://arth-bodh-igsbpune.blogspot.com/2025/03/gudhi-padwa-success-learning-art-of-new.html",
    image: "/IGSB/blogs/gudhi-padwa.png",
  },
  {
    day: "03",
    month: "February",
    year: "2025",
    title: "Budget 2025-26: A Blueprint for a Viksit Bharat",
    href: "https://arth-bodh-igsbpune.blogspot.com/2025/01/budget-2025-26-blueprint-for-viksit.html",
    image: "/IGSB/blogs/budget-2025-26.png",
  },
  {
    day: "10",
    month: "January",
    year: "2025",
    title: "Sikho India!",
    href: "https://arth-bodh-igsbpune.blogspot.com/2025/02/sikho-india.html",
    image: "/IGSB/blogs/sikho-india.png",
  },
  {
    day: "11",
    month: "April",
    year: "2024",
    title: "The Buzz on Indian Startups: A city to city breakdown",
    href: "https://arth-bodh-igsbpune.blogspot.com/2024/04/ever-heard-of-all-these-cool-indian.html",
    image: "/IGSB/blogs/indian-startups.png",
  },
  {
    day: "01",
    month: "March",
    year: "2024",
    title:
      "Responsibility Accounting – A Suggested Tool for Performance Measurement in the MSMEs",
    href: "https://arth-bodh-igsbpune.blogspot.com/2024/04/responsibility-accounting-suggested.html",
    image: "/IGSB/blogs/responsibility-accounting.png",
  },
  {
    day: "11",
    month: "February",
    year: "2024",
    title: "The Dynamic Role of AI in the Marketing Mix",
    href: "https://arth-bodh-igsbpune.blogspot.com/2024/02/the-dynamic-role-of-ai-in-marketing-mix.html",
    image: "/IGSB/blogs/ai-marketing.png",
  },
  {
    day: "04",
    month: "January",
    year: "2024",
    title: "NEP 2020",
    href: "https://arth-bodh-igsbpune.blogspot.com/2024/01/nep-2020.html",
    image: "/IGSB/blogs/nep-2020.png",
  },
  {
    day: "05",
    month: "December",
    year: "2023",
    title: "Digital ROI – The Value of Digital Investments!",
    href: "https://arth-bodh-igsbpune.blogspot.com/2024/04/digital-roi-value-of-digital-investments.html",
    image: "/IGSB/blogs/digital-roi.png",
  },
  {
    day: "15",
    month: "November",
    year: "2023",
    title: "The Impact of Social Media on Mental Health",
    href: "https://arth-bodh-igsbpune.blogspot.com/2024/04/the-impact-of-social-media-on-mental.html",
    image: "/IGSB/blogs/social-media-mental-health.png",
  },
  {
    day: "16",
    month: "October",
    year: "2023",
    title: "Sustainable Employability with a Green Perspective",
    href: "https://arth-bodh-igsbpune.blogspot.com/2024/04/sustainable-employability-with-green.html",
    image: "/IGSB/blogs/sustainable-employability.png",
  },
  {
    day: "08",
    month: "September",
    year: "2023",
    title: "Brand You-nique: Mastering Personal Branding for MBA Mavericks",
    href: "https://arth-bodh-igsbpune.blogspot.com/2023/09/brand-you-nique-mastering-personal.html",
    image: "/IGSB/blogs/personal-branding.png",
  },
  {
    day: "24",
    month: "August",
    year: "2023",
    title:
      "Revolutionizing the Banking Industry with Robotic Process Automation (RPA)",
    href: "https://arth-bodh-igsbpune.blogspot.com/2023/08/revolutionizing-banking-industry-with.html",
    image: "/IGSB/blogs/rpa-banking.png",
  },
  {
    day: "17",
    month: "August",
    year: "2023",
    title: "Role of Financial Calculators in Wealth Planning",
    href: "https://arth-bodh-igsbpune.blogspot.com/2023/08/role-of-financial-calculators-in-wealth.html",
    image: "/IGSB/blogs/financial-calculators.png",
  },
  {
    day: "13",
    month: "August",
    year: "2023",
    title:
      "A Day to Take Control of Your Finances – National Financial Awareness Day",
    href: "https://arth-bodh-igsbpune.blogspot.com/2023/08/a-day-to-take-control-of-your-finances.html",
    image: "/IGSB/blogs/financial-awareness-day.png",
  },
  {
    day: "10",
    month: "August",
    year: "2023",
    title: "Green Investing in the Stock Market: A Sustainable Future",
    href: "https://arth-bodh-igsbpune.blogspot.com/2023/08/green-investing-in-stock-market.html",
    image: "/IGSB/blogs/green-investing.png",
  },
  {
    day: "01",
    month: "August",
    year: "2023",
    title:
      "AI and Relevance of Management Education in Changing Business Environment",
    href: "https://igsbpune.blogspot.com/2023/08/artificial-intelligence-and-relevance.html",
    image: "/IGSB/blogs/ai-management.png",
  },
  {
    day: "21",
    month: "July",
    year: "2023",
    title: "A Big Business Starts Small",
    href: "https://igsbpune.blogspot.com/2023/07/a-big-business-starts-small.html",
    image: "/IGSB/blogs/big-business.png",
  },
  {
    day: "14",
    month: "July",
    year: "2023",
    title: "Fintech – Revolutionizing the Future of Finance",
    href: "https://igsbpune.blogspot.com/2023/07/fintech-revolutionizing-future-of.html",
    image: "/IGSB/blogs/fintech.png",
  },
  {
    day: "04",
    month: "July",
    year: "2023",
    title: "Gain an Edge while pursuing MBA: Learn a Foreign Language",
    href: "https://igsbpune.blogspot.com/2023/07/gain-edge-while-pursuing-mba-learn.html",
    image: "/IGSB/blogs/foreign-language.png",
  },
  {
    day: "27",
    month: "June",
    year: "2023",
    title:
      "Navigating the Future: Exploring the National Logistics Policy 2022",
    href: "https://igsbpune.blogspot.com/2023/06/navigating-future-exploring-national.html",
    image: "/IGSB/blogs/logistics-policy.png",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12  pl-4">
          <h1 className="text-4xl font-bold text-gray-900">IGSB Blog Posts</h1>
          <p className="text-gray-600 mt-2">
            Latest updates, news, and academic articles from our experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group flex flex-col h-full bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                  {blog.day} {blog.month} {blog.year}
                </p>

                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 mb-4 group-hover:text-secondary transition-colors">
                  {blog.title}
                </h3>

                {/* Link Section */}
                <div className="mt-auto pt-4">
                  <Link
                    href={blog.href}
                    target="_blank"
                    className="inline-flex items-center text-sm font-bold text-gray-900 hover:gap-2 transition-all"
                  >
                    Read More
                    <span className="ml-1 text-secondary">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
