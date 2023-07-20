import React from "react";
import '../Component/Fade.css';

function FadeInDown(props) {
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
      className={`fade-in-section-down ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      <div className={`fade-in-content-down ${isVisible ? 'is-visible' : ''}`}>
        {props.children}
      </div>
    </div>
  );
}

export default FadeInDown;