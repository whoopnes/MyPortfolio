import React from 'react';

function IgPostPage() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">IG Post</h1>
      <p className="text-lg mb-6">Click below to go to the EcoVation IG Post:</p>
      <a
        href="https://www.instagram.com/p/DKhkWaNzWjr/?igsh=NWgwcWdyc2x5YmNn"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-full font-medium text-xl hover:bg-[#59C287] transition-colors duration-300"
      >
        Go to IG Post
      </a>
    </div>
  );
}

export default IgPostPage;
