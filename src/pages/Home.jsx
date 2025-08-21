import React from 'react'

const Home = () => {



    const email = 'thedivinepatrick@gmail.com';
    const subject = 'Collab For Woo';
    const body = 'Whatxup Bro! I am interested in collaborating on the Woo project.';

    const handleSendEmail = () => {
        window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    };


    return (
        <div className="bg-[#f1f5f9] min-h-screen">
            {/* Homepage Section */}
            <div id="homepage" className=" flex items-center justify-center px-4 py-12">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Main Heading and Subheading */}
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                        Get Converting Ads In An Instant!
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-light text-gray-800 mb-8 leading-tight">
                        Your Product Serves People. They Should Know It!
                    </h2>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-gray-700 mb-12 font-medium">
                        This Tools Helps Us Tell Them!
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <button className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-[#296eec] hover:bg-[#296eec]/60 text-white rounded-full cursor-pointer">
                            Create Ads
                        </button>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div id="about" className="px-4 py-16 bg-[#f1f5f9]">
                <div className="max-w-4xl mx-auto">
                    {/* Main Heading and Subheading */}
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-4 leading-tight">
                        Our Ads Should Convert. People Should Believe.
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-light text-gray-800 text-center mb-16 leading-tight">
                        Because We are Helping People!
                    </h2>

                    {/* Section Heading */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wide">
                        THINGS TO KNOW ABOUT WOO
                    </h3>

                    {/* My List */}
                    <div className="space-y-6 text-gray-700">
                        <p className="text-base md:text-lg leading-relaxed">
                            The Current Ad Generation Framework is powered By ALEX HORMOZIS' VALUE EQUATION
                        </p>

                        <p className="text-base md:text-lg leading-relaxed">
                            The WOO Application is in its early Stage of Development. More Ad frameworks will be added subsequently
                        </p>

                        <p className="text-base md:text-lg leading-relaxed border-b border-gray-300 pb-4">
                            I am Open to Collaborate with developers Interested in the expansion of this tool. Send me an
                            <button className='pl-2 items-center justify-center text-[#296eec] hover:bg-[#296eec]/60  cursor-pointer' onClick={handleSendEmail}> Email</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home