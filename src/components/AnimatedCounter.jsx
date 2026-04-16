import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, useTransform, motion } from 'framer-motion';

export default function AnimatedCounter({ value, duration = 2.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  // Parse the value: e.g. "200+", "99.9%", "1M+", "50m", "24/7"
  const strValue = String(value);
  const numericMatch = strValue.match(/[\d.]+/);
  
  const numericPart = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = numericMatch ? strValue.substring(0, numericMatch.index) : '';
  const suffix = numericMatch ? strValue.substring(numericMatch.index + numericMatch[0].length) : '';
  const isDecimal = numericMatch && numericMatch[0].includes('.');
  const decimals = isDecimal ? numericMatch[0].split('.')[1].length : 0;

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  const displayValue = useTransform(springValue, (latest) => {
    return Number(latest).toFixed(decimals);
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericPart);
    }
  }, [isInView, numericPart, motionValue]);

  return (
    <span ref={ref} className="animated-counter" style={{ display: 'inline-flex', alignItems: 'center' }}>
      {prefix}<motion.span>{displayValue}</motion.span>{suffix}
    </span>
  );
}
