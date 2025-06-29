import React from 'react';

// Sadya (Traditional Feast) Icon
export const SadyaIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 24, 
  className = "" 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    {/* Banana leaf base */}
    <ellipse cx="12" cy="16" rx="10" ry="6" fill="currentColor" opacity="0.3"/>
    
    {/* Rice mound */}
    <ellipse cx="12" cy="14" rx="3" ry="2" fill="currentColor"/>
    
    {/* Side dishes */}
    <circle cx="7" cy="13" r="1.5" fill="currentColor" opacity="0.7"/>
    <circle cx="17" cy="13" r="1.5" fill="currentColor" opacity="0.7"/>
    <circle cx="9" cy="16" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="15" cy="16" r="1" fill="currentColor" opacity="0.6"/>
    
    {/* Payasam bowl */}
    <ellipse cx="12" cy="10" rx="2" ry="1.5" fill="currentColor" opacity="0.8"/>
    
    {/* Pickle and sides */}
    <circle cx="6" cy="16" r="0.8" fill="currentColor" opacity="0.5"/>
    <circle cx="18" cy="16" r="0.8" fill="currentColor" opacity="0.5"/>
  </svg>
);

// Cultural Events (Kathakali Mask) Icon
export const CulturalIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 24, 
  className = "" 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    {/* Kathakali headdress */}
    <path d="M12 2 L8 6 L16 6 Z" fill="currentColor"/>
    <path d="M7 6 L17 6 L16 8 L8 8 Z" fill="currentColor" opacity="0.8"/>
    
    {/* Face */}
    <ellipse cx="12" cy="12" rx="5" ry="6" fill="currentColor" opacity="0.6"/>
    
    {/* Eyes */}
    <ellipse cx="10" cy="10" rx="1" ry="1.5" fill="currentColor"/>
    <ellipse cx="14" cy="10" rx="1" ry="1.5" fill="currentColor"/>
    
    {/* Nose */}
    <path d="M12 11 L11 13 L13 13 Z" fill="currentColor"/>
    
    {/* Mouth decoration */}
    <ellipse cx="12" cy="15" rx="2" ry="1" fill="currentColor" opacity="0.7"/>
    
    {/* Side decorations */}
    <circle cx="7" cy="12" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="17" cy="12" r="1" fill="currentColor" opacity="0.5"/>
  </svg>
);

// Thiruvathira (Dancing Women) Icon
export const ThiruvathiraIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 24, 
  className = "" 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    {/* Central dancer */}
    <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
    <ellipse cx="12" cy="12" rx="2" ry="4" fill="currentColor" opacity="0.8"/>
    <path d="M10 10 L8 8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M14 10 L16 8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    
    {/* Left dancer */}
    <circle cx="6" cy="7" r="1" fill="currentColor" opacity="0.6"/>
    <ellipse cx="6" cy="12" rx="1.5" ry="3" fill="currentColor" opacity="0.5"/>
    <path d="M5 10 L3 9" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
    
    {/* Right dancer */}
    <circle cx="18" cy="7" r="1" fill="currentColor" opacity="0.6"/>
    <ellipse cx="18" cy="12" rx="1.5" ry="3" fill="currentColor" opacity="0.5"/>
    <path d="M19 10 L21 9" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
    
    {/* Circle formation indicator */}
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3"/>
  </svg>
);

// Coconut Palm Icon
export const CoconutPalmIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 24, 
  className = "" 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    {/* Trunk */}
    <rect x="11" y="8" width="2" height="14" fill="currentColor" opacity="0.8"/>
    
    {/* Palm fronds */}
    <path d="M12 8 Q8 4 4 6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 8 Q16 4 20 6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 8 Q6 2 2 4" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
    <path d="M12 8 Q18 2 22 4" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
    <path d="M12 8 Q10 2 6 3" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
    <path d="M12 8 Q14 2 18 3" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
    
    {/* Coconuts */}
    <circle cx="10" cy="9" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="14" cy="9" r="1" fill="currentColor" opacity="0.6"/>
  </svg>
);

// Traditional Lamp Icon
export const LampIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 24, 
  className = "" 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    {/* Lamp base */}
    <ellipse cx="12" cy="18" rx="6" ry="2" fill="currentColor" opacity="0.6"/>
    <ellipse cx="12" cy="16" rx="4" ry="1.5" fill="currentColor" opacity="0.7"/>
    
    {/* Lamp body */}
    <ellipse cx="12" cy="14" rx="3" ry="2" fill="currentColor"/>
    
    {/* Wick */}
    <rect x="11.5" y="12" width="1" height="2" fill="currentColor"/>
    
    {/* Flame */}
    <path d="M12 12 Q11 10 12 8 Q13 10 12 12" fill="currentColor" opacity="0.8"/>
    
    {/* Light rays */}
    <path d="M12 8 L12 6" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M15 9 L16.5 7.5" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M9 9 L7.5 7.5" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M15.5 12 L17.5 12" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M8.5 12 L6.5 12" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
);

// Pookalam (Flower Arrangement) Icon
export const PookkalamIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 24, 
  className = "" 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    {/* Outer ring */}
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
    
    {/* Flower petals - outer */}
    <circle cx="12" cy="4" r="1.5" fill="currentColor" opacity="0.7"/>
    <circle cx="18.4" cy="7.6" r="1.5" fill="currentColor" opacity="0.7"/>
    <circle cx="18.4" cy="16.4" r="1.5" fill="currentColor" opacity="0.7"/>
    <circle cx="12" cy="20" r="1.5" fill="currentColor" opacity="0.7"/>
    <circle cx="5.6" cy="16.4" r="1.5" fill="currentColor" opacity="0.7"/>
    <circle cx="5.6" cy="7.6" r="1.5" fill="currentColor" opacity="0.7"/>
    
    {/* Inner ring */}
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
    
    {/* Inner petals */}
    <circle cx="12" cy="8" r="1" fill="currentColor" opacity="0.8"/>
    <circle cx="15.2" cy="10.4" r="1" fill="currentColor" opacity="0.8"/>
    <circle cx="15.2" cy="13.6" r="1" fill="currentColor" opacity="0.8"/>
    <circle cx="12" cy="16" r="1" fill="currentColor" opacity="0.8"/>
    <circle cx="8.8" cy="13.6" r="1" fill="currentColor" opacity="0.8"/>
    <circle cx="8.8" cy="10.4" r="1" fill="currentColor" opacity="0.8"/>
    
    {/* Center */}
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);