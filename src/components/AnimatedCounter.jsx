import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, useTransform, motion } from 'framer-motion';

export default function AnimatedCounter({ value, duration = 2.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-5%' });

  // Parse: "200+", "99.9%", "24/7", "5yr"
  const strValue = String(value);
  const numericMatch = strValue.match(/[\d.]+/);

  const numericPart = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = numericMatch ? strValue.substring(0, numericMatch.index) : '';
  const suffix = numericMatch ? strValue.substring(numericMatch.index + numericMatch[0].length) : strValue;
  const isDecimal = numericMatch && numericMatch[0].includes('.');
  const decimals = isDecimal ? numericMatch[0].split('.')[1].length : 0;

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 40,
    damping: 15,
    mass: 0.8
  });

  const displayValue = useTransform(springValue, (current) => current.toFixed(decimals));

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericPart);
    }
  }, [isInView, numericPart, motionValue]);

  return (
    <span ref={ref} style={{ display: 'inline-flex', alignItems: 'center' }}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}
