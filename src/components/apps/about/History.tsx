import Image from "next/image"

const History = () => {
  return (
    <div className="flex-1 flex flex-col items-center text-white p-6">
      <div className="w-full max-w-4xl">
        <div className="font-medium relative text-3xl mt-2 md:mt-4 mb-8 py-3 text-center">
          Work Experience
          <div className="absolute pt-px bg-gradient-to-r from-transparent via-white to-transparent mt-px top-full w-full">
            <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
            <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
          </div>
        </div>

        <div>
          <div className="space-y-12">
            {/* Upwork - Left aligned */}
            {/* <div
              className=" group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm hover:border-gray-700/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="p-6 space-y-5">

                <div className="flex gap-4 items-start flex-1">
                  <Image
                    src={"/images/career/upwork.svg"}
                    alt="Upwork"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain mt-1"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      Freelance Software Engineer
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-semibold text-gray-300 mb-1">
                        Upwork
                      </p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        2023.09 – Present
                      </div>
                    </div>
                  </div>
                </div>


                <div className="">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Specializing in Mobile Full Stack development and Trading System Engineering.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <Image
                          src={"/images/career/top_rated.svg"}
                          alt="Top Rated"
                          width={16}
                          height={16}
                          className="w-4 h-4 object-contain inline-block mr-2"
                        />
                        Top-Rated with a 98% job success rate and over $100K in completed contracts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Innovatech Dynamics - Right aligned */}
            <div
              className=" float-right group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm hover:border-gray-700/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="p-6 space-y-5">

                <div className="flex gap-4 items-start flex-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-blue-300 font-bold text-sm">ID</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      Mobile Software Engineer
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-lg font-semibold text-gray-300 mb-1">
                        Innovatech Dynamics
                      </p>
                      <p className="text-gray-300 text-sm">
                        Tokyo, JP – Remote
                      </p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        2023.01 – 2024.12
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  Focused on developing and maintaining enterprise-level mobile applications with emphasis on performance, usability, and reliability. Collaborated with UI/UX, backend, and product teams in an agile environment.
                </p>

                {/* Roles & Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Roles & Responsibilities:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Built and maintained cross-platform mobile apps using modern frameworks (React Native / Flutter)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Integrated RESTful and GraphQL APIs for dynamic, data-driven features
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Enhanced app performance, startup time, and stability through profiling and optimization
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Conducted code reviews and contributed to documentation and development standards
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Participated in feature planning, roadmap discussions, and technical decision-making
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Achievements:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Delivered three major releases on schedule, each with significant UX improvements
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Increased app performance scores by 25% through optimization and caching
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Supported transition from monolithic to modular app architecture
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* NexTech Solutions - Left aligned */}
            <div
              className=" group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm hover:border-gray-700/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="p-6 space-y-5">

                <div className="flex gap-4 items-start flex-1">
                  <Image
                    src={"/images/career/nextech.png"}
                    alt="Nextech"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain mt-1"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      Lead Mobile Developer
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-semibold text-gray-300 mb-1">
                        NexTech Solutions LLC
                      </p>
                      San Francisco, US – Remote
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        2018.05 – 2022.12
                      </div>
                    </div>
                  </div>
                </div>
                {/* Overview */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  Joined the company as a Full Stack Developer, contributing to both backend APIs and web platforms. In mid-2020, promoted to Lead Mobile Developer to manage and expand the company&#39;s mobile development division. Oversaw design, architecture, and delivery of several high-performance mobile applications.
                </p>

                {/* Team Structure */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Team Structure:</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Led a 4-member team consisting of two mobile developers (iOS/Android), one UI/UX designer, and one QA engineer. Collaborated closely with backend engineers, product managers, and clients.
                  </p>
                </div>

                {/* Roles & Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Roles & Responsibilities:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Designed mobile app architectures using scalable, modular, and reusable components
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Managed project sprints, task allocation, and performance reviews using Agile/Scrum methodologies
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Implemented CI/CD pipelines for faster, more reliable app releases
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Reviewed code, enforced best practices, and guided junior developers
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Coordinated cross-platform consistency between Android and iOS versions
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Worked with product teams to define features, prioritize tasks, and meet delivery deadlines
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Achievements:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Launched multiple mobile products that reached thousands of users with high retention rates
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Reduced development cycle by 30% through improved workflow and automation
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Mentored junior engineers, leading to two internal promotions
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Received recognition from the executive team for delivering high-quality, stable releases
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Independent Projects - Right aligned */}
            <div
              className=" float-right group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm hover:border-gray-700/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="p-6 space-y-5">
                <div className="flex gap-4 items-start flex-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-green-300 font-bold text-sm">FS</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      Full Stack Web Developer
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-lg font-semibold text-gray-300 mb-1">
                        Independent Marketing & Sales Projects
                      </p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        2018.01 – 2023.05
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  Designed, developed, and maintained more than 100 websites for marketing and sales campaigns. Handled every stage of the development lifecycle — from requirements gathering and UI/UX planning to deployment and post-launch support. Actively worked with small businesses and agencies to improve their online presence and conversion rates.
                </p>

                {/* Roles & Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Roles & Responsibilities:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Planned and built responsive, SEO-optimized websites using modern frontend and backend technologies
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Integrated CMS platforms (WordPress, custom admin panels) for client-side content management
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Implemented analytics, A/B testing, and performance optimizations to support marketing campaigns
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Provided continuous technical maintenance, bug fixes, and scalability improvements
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Handled hosting environments, domain management, and deployment pipelines
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Achievements:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Delivered 100+ fully functional marketing websites for diverse industries
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Improved average website load speed by 40% through performance tuning
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Established long-term relationships with repeat clients due to reliability and results
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History