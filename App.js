import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const blackSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      },
      {
        threshold: 0.3, // Adjusted for smoother transition
      }
    );

    if (blackSectionRef.current) {
      observer.observe(blackSectionRef.current);
    }

    return () => {
      if (blackSectionRef.current) {
        observer.unobserve(blackSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="App">
      {/* White Section */}
      <section className="white-section">
        <div className="content">
          <h1>Welcome</h1>
          <p>This is the white section</p>
          <p>Scroll down to see the transition effect</p>
        </div>
      </section>

      {/* Black Section */}
      <section className="black-section" ref={blackSectionRef}>
        <div className="content">
          <h1>Discover</h1>
          <p>This is the black section</p>
        </div>
      </section>
    </div>
  );
}

export default App;
