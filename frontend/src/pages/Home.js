import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600">
      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-xl mx-auto text-center">
            <div class="inline-flex px-5 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
                <p class="text-sm font-semibold tracking-widest text-white uppercase">Trained With Kernel Ridge Regression</p>
            </div>
            <h2 class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Future Oil Price Powered by Machine Learning</h2>
            <p class="mt-6 text-base leading-relaxed text-gray-600">Let powerful A.I future-proof your business and help you always stay one step ahead of your competition.</p>
        </div>

        <div class="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
            <div class="transition-all duration-200 bg-white hover:shadow-xl">
                <div class="py-10 px-9">
                    <svg class="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <h3 class="mt-8 text-lg font-semibold text-black">User Interaction</h3>
                    <p class="mt-4 text-base text-gray-600">Every user can appreciate a friendly approachable interface. The form is clear, simple, and efficient.</p>
                </div>
            </div>

            <div class="transition-all duration-200 bg-white hover:shadow-xl">
                <div class="py-10 px-9">
                    <svg class="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    <h3 class="mt-8 text-lg font-semibold text-black">Automation</h3>
                    <p class="mt-4 text-base text-gray-600">Data processing automation is relevant with today's fast-paced environment. Streamlining calculations is the only way to stay up to speed.</p>
                </div>
            </div>

            <div class="transition-all duration-200 bg-white hover:shadow-xl">
                <div class="py-10 px-9">
                    <svg class="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 class="mt-8 text-lg font-semibold text-black">Secure Data</h3>
                    <p class="mt-4 text-base text-gray-600">Data is handled strictly through APIs that keep the data flow pipelines away from databases, streaminling the calculation processes simultaneously.</p>
                </div>
            </div>
        </div>
    </div>
</section>

      
    </div>
  );
}

export default Home;