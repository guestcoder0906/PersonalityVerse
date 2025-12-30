
import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export const WebSimViewer: React.FC = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  // Using the requested URL for Personality Quiz Generator
  const TARGET_URL = "https://personalityverse--frog.on.websim.com/";

  const handleReload = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      {/* Control Overlay - Top Right */}
      <div className="absolute top-4 right-4 z-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
         <button 
          onClick={handleReload}
          className="p-2 bg-black/50 backdrop-blur text-white/70 hover:text-white rounded-full hover:bg-indigo-600 transition-all border border-white/10"
          title="Reload App"
        >
          <RefreshCw size={20} />
        </button>
      </div>

      {/* 
          CROP & ZOOM CONTAINER
          We make the iframe slightly larger than its container.
          Since it's anchored top-left, only the bottom and right edges get "cut".
          We use a scale factor to effectively zoom into the content.
      */}
      <div className="w-full h-full overflow-hidden relative">
        <iframe
          key={refreshKey}
          src={TARGET_URL}
          title="Personality Quiz Generator"
          style={{
            width: '105.5%',
            height: '105.5%',
            border: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            transformOrigin: 'top left',
            display: 'block'
          }}
          // Sandbox permissions needed for the app to run
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-pointer-lock"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};
