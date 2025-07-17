"use client";

import { useEffect, useRef } from "react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  element: string;
}

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export default function FloatingElements({ 
  count = 15,
  className = ""
}: FloatingElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<FloatingElement[]>([]);
  const animationRef = useRef<number>();

  const elements = ["⚡", "🌐", "🔗", "💻", "🚀", "⭐", "🔮", "💎", "🎯", "🛡️"];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createFloatingElement = (id: number): FloatingElement => ({
      id,
      x: Math.random() * container.offsetWidth,
      y: Math.random() * container.offsetHeight,
      size: Math.random() * 20 + 15,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.3 + 0.1,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      element: elements[Math.floor(Math.random() * elements.length)]
    });

    const initElements = () => {
      elementsRef.current = Array.from({ length: count }, (_, i) => createFloatingElement(i));
    };

    const updateElements = () => {
      elementsRef.current.forEach(element => {
        element.y -= element.speed;
        element.rotation += element.rotationSpeed;
        
        // Reset when element goes off screen
        if (element.y < -50) {
          element.y = container.offsetHeight + 50;
          element.x = Math.random() * container.offsetWidth;
        }
      });
    };

    const renderElements = () => {
      const existingElements = container.querySelectorAll('.floating-element');
      existingElements.forEach(el => el.remove());

      elementsRef.current.forEach(element => {
        const div = document.createElement('div');
        div.className = 'floating-element absolute pointer-events-none select-none';
        div.style.left = `${element.x}px`;
        div.style.top = `${element.y}px`;
        div.style.fontSize = `${element.size}px`;
        div.style.opacity = element.opacity.toString();
        div.style.transform = `rotate(${element.rotation}deg)`;
        div.style.transition = 'transform 0.1s ease-out';
        div.textContent = element.element;
        container.appendChild(div);
      });
    };

    const animate = () => {
      updateElements();
      renderElements();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      initElements();
    };

    initElements();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    />
  );
}
