import React from 'react';

function TwibbonPage() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">Twibbon</h1>
      <p className="text-lg mb-6">Click below to go to the Twibbon page:</p>
      <a
        href="https://drive.google.com/drive/u/0/folders/1h6PlSsctbXiuEBiFK48IGuedZVnc2VR7"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-full font-medium text-xl hover:bg-[#59C287] transition-colors duration-300"
      >
        Go to Twibbon
      </a>
    </div>
  );
}

export default TwibbonPage;
