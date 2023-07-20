import React from "react";
import '../Component/Fade.css';

function FadeInUp(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section-up ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      <div className={`fade-in-content-up ${isVisible ? 'is-visible' : ''}`}>
        {props.children}
      </div>
    </div>
  );
}

export default FadeInUp;