// components/Gist.js
function Gist() {
    return (
      <div className="gist-container">
        <iframe 
          src="https://gist.github.com/henriquemarlon/6ed36a81b1507d977cacb1870abacc18.pibb-" 
          width="100%">
        </iframe>
        <style jsx>{`
          iframe {
            height: 80vh;
            width: 100%; 
          }
        `}</style>
      </div>
    );
  }
  
  export default Gist;
  