
const Resume = () => {
    const resumePdfUrl = '../../assets/Resume.pdf';

    return (
        <div className="bg-blue-950/60 ">
            <div className="container mx-auto py-12">
                <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">My Resume</h2>
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                        </div>
                        <p className="text-gray-700">You can view and download my resume below.</p>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                        <a
                            href={resumePdfUrl}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded inline-flex items-center transition duration-300"
                            download="Nusrat_Jahan_Resume.pdf"
                        >
                            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                            Download PDF
                        </a>
                    </div>
                    <div className="text-gray-600 text-sm">
                        <p>If you have any trouble downloading or viewing the resume, please contact me at <a href="mailto:nusratjahan3657r@gmail.com" className="text-blue-500">nusratjahan3657r@gmail.com</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;