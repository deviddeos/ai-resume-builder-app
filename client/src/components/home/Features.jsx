import React from 'react'
import { Zap } from "lucide-react";
import Title from './Title';

const Features = () => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div id='feature' className='flex flex-col items-center my-10 scroll-mt-12'>

      <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-4 py-1.5">
        <Zap width={14}/>
        <span>Smart Resume Building</span>
      </div>

      <Title 
        title='Create AI-Powered Resumes' 
        description='Build, edit, and enhance professional resumes effortlessly using intelligent AI tools, real-time preview, and modern templates.' 
      />

      <div className="flex flex-col md:flex-row items-center justify-center xl:-mt-10">
        <img 
          className="max-w-2xl w-full xl:-ml-32" 
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" 
          alt="" 
        />

        <div 
          className="px-4 md:px-0" 
          onMouseEnter={() => setIsHover(true)} 
          onMouseLeave={() => setIsHover(false)}
        >

          {/* Feature 1 */}
          <div className={"flex items-center justify-center gap-6 max-w-md group cursor-pointer"}>
            <div className={`p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300 flex gap-4 rounded-xl transition-colors ${!isHover ? 'border-violet-300 bg-violet-100' : ''}`}>
              
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6 stroke-violet-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z" />
              </svg>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">AI Content Enhancement</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Improve your resume with AI-powered suggestions, smart summaries, and optimized content for better job opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
              
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6 stroke-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M12 3v18" />
                <path d="M3 12h18" />
              </svg>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">Upload & Auto-Parse Resume</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Upload your existing PDF resume and let AI automatically extract and populate your details into the builder.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
              
              <svg className="size-6 stroke-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">Export & Share Easily</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Download your resume as a professional PDF or share it instantly via a public link with recruiters.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

    </div>
  )
}

export default Features;