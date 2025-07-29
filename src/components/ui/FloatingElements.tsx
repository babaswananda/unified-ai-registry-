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
  const animationRef = useRef<number>(0);
  const initializedRef = useRef(false);

  const elementSymbols = ["•", "•", "•", "•", "•", "•", "•", "•", "•", "•"];

  // Generate stable elements with unique IDs
  useEffect(() => {
    // Only initialize once
    if (initializedRef.current) return;
    
    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth || window.innerWidth;
    const height = container.offsetHeight || window.innerHeight;

    // Create elements with deterministic but unique positions
    const newElements: FloatingElement[] = [];
    for (let i = 0; i < count; i++) {
      // Use a seeded random approach for more stability
      const uniqueSeed = i * 1000;
      const pseudoRandom = (seed: number) => ((seed * 9301 + 49297) % 233280) / 233280;
      
      newElements.push({
        id: i + 1, // Ensure IDs are never 0
        x: pseudoRandom(uniqueSeed) * width,
        y: pseudoRandom(uniqueSeed + 1) * height,
        size: pseudoRandom(uniqueSeed + 2) * 20 + 15,
        speed: pseudoRandom(uniqueSeed + 3) * 0.5 + 0.2,
        opacity: pseudoRandom(uniqueSeed + 4) * 0.3 + 0.1,
        rotation: pseudoRandom(uniqueSeed + 5) * 360,
        rotationSpeed: (pseudoRandom(uniqueSeed + 6) - 0.5) * 2,
        element: elementSymbols[Math.floor(pseudoRandom(uniqueSeed + 7) * elementSymbols.length)]
      });
    }
    
    elementsRef.current = newElements;
    initializedRef.current = true;
  }, [count]);

  // Animation loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container || elementsRef.current.length === 0) return;

    // Create elements in the DOM
    elementsRef.current.forEach(element => {
      const existingElement = container.querySelector(`[data-element-id="${element.id}"]`);
      if (!existingElement) {
        const div = document.createElement('div');
        div.className = 'floating-element';
        div.setAttribute('data-element-id', element.id.toString());
        div.textContent = element.element;
        div.style.position = 'absolute';
        div.style.left = `${element.x}px`;
        div.style.top = `${element.y}px`;
        div.style.fontSize = `${element.size}px`;
        div.style.opacity = element.opacity.toString();
        div.style.transform = `rotate(${element.rotation}deg)`;
        div.style.transition = 'transform 0.1s ease-out';
        div.style.pointerEvents = 'none';
        div.style.userSelect = 'none';
        container.appendChild(div);
      }
    });

    // Update element positions
    const updateElements = () => {
      const width = container.offsetWidth || window.innerWidth;
      const height = container.offsetHeight || window.innerHeight;
      
      elementsRef.current.forEach(element => {
        element.y -= element.speed;
        element.rotation += element.rotationSpeed;
        
        // Reset when element goes off screen
        if (element.y < -50) {
          element.y = height + 50;
          element.x = Math.random() * width;
        }
        
        // Update DOM element
        const domElement = container.querySelector(`[data-element-id="${element.id}"]`);
        if (domElement) {
          domElement.setAttribute('style', `
            position: absolute;
            left: ${element.x}px;
            top: ${element.y}px;
            font-size: ${element.size}px;
            opacity: ${element.opacity};
            transform: rotate(${element.rotation}deg);
            transition: transform 0.1s ease-out;
            pointer-events: none;
            user-select: none;
          `);
        }
      });
      
      animationRef.current = requestAnimationFrame(updateElements);
    };

    // Start animation
    updateElements();

    // Handle window resize
    const handleResize = () => {
      const width = container.offsetWidth || window.innerWidth;
      const height = container.offsetHeight || window.innerHeight;
      
      elementsRef.current.forEach((element, index) => {
        // Use the same pseudoRandom function for consistency
        const uniqueSeed = index * 1000;
        const pseudoRandom = (seed: number) => ((seed * 9301 + 49297) % 233280) / 233280;
        
        element.x = pseudoRandom(uniqueSeed) * width;
        element.y = pseudoRandom(uniqueSeed + 1) * height;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      
      // Clean up DOM elements on unmount
      const elements = container.querySelectorAll('.floating-element');
      elements.forEach(el => container.removeChild(el));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    />
  );
}
