import React from 'react';

/**
 * AI SIMLAB Logo Component
 * Modern Interdisciplinary Simulation Lab Emblem
 * 6-facet geometric nexus connecting Law, Economics, Management, Business, Language & Commerce
 * Clean, executive aesthetic with deep navy, ice-blue, and pure white accents.
 */
export default function LogoSimLab({ size = 'default', showSlogan = false, className = '' }) {
  // size: 'sm' (navbar 34px), 'default' (46px), 'lg' (76px), 'xl' (120px hero emblem)
  const dimensions = {
    sm: { box: 34, iconBox: 22, titleSize: 13.5, subSize: 8, gap: 10 },
    default: { box: 46, iconBox: 28, titleSize: 16, subSize: 9.5, gap: 12 },
    lg: { box: 76, iconBox: 48, titleSize: 22, subSize: 12, gap: 16 },
    xl: { box: 110, iconBox: 72, titleSize: 28, subSize: 13.5, gap: 20 }
  }[size] || { box: 46, iconBox: 28, titleSize: 16, subSize: 9.5, gap: 12 };

  return (
    <div 
      className={`simlab-logo-container ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: `${dimensions.gap}px`, 
        textDecoration: 'none',
        userSelect: 'none'
      }}
    >
      {/* Visual Emblem SVG - 6-Node Interdisciplinary Nexus */}
      <div 
        style={{ 
          position: 'relative', 
          width: dimensions.box, 
          height: dimensions.box,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <svg 
          viewBox="0 0 100 100" 
          width={dimensions.box} 
          height={dimensions.box}
          style={{ 
            overflow: 'visible',
            filter: 'drop-shadow(0 4px 14px rgba(2, 132, 199, 0.28))'
          }}
        >
          <defs>
            {/* Dark Shield Base Gradient */}
            <linearGradient id="crestBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="100%" stopColor="#050814" />
            </linearGradient>

            {/* Facet Gradients */}
            <linearGradient id="facetTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.45" />
            </linearGradient>

            <linearGradient id="facetRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="facetLeft" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#1E293B" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="facetBottom" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>

            {/* Core Neural Spark Gradient */}
            <radialGradient id="neuralCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Hexagonal Outer Frame */}
          <polygon 
            points="50,6 88,28 88,72 50,94 12,72 12,28" 
            fill="url(#crestBaseGrad)" 
            stroke="rgba(56, 189, 248, 0.45)" 
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Inner Geometric Facets Connecting 6 Disciplines */}
          {/* Top-Center to Middle (Law / Pháp lý) */}
          <polygon 
            points="50,6 50,50 12,28" 
            fill="url(#facetLeft)" 
            stroke="rgba(56, 189, 248, 0.25)" 
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <polygon 
            points="50,6 88,28 50,50" 
            fill="url(#facetTop)" 
            stroke="rgba(56, 189, 248, 0.35)" 
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Right Facet (Commerce & Economics) */}
          <polygon 
            points="88,28 88,72 50,50" 
            fill="url(#facetRight)" 
            stroke="rgba(99, 102, 241, 0.3)" 
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Bottom Facets (Management & Business) */}
          <polygon 
            points="50,50 88,72 50,94" 
            fill="url(#facetBottom)" 
            stroke="rgba(56, 189, 248, 0.2)" 
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <polygon 
            points="50,50 50,94 12,72" 
            fill="url(#facetBottom)" 
            stroke="rgba(56, 189, 248, 0.25)" 
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Left Facet (Languages & Culture) */}
          <polygon 
            points="12,28 50,50 12,72" 
            fill="url(#facetLeft)" 
            stroke="rgba(56, 189, 248, 0.2)" 
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Inner Dynamic Inset Nexus */}
          <polygon 
            points="50,22 74,36 74,64 50,78 26,64 26,36" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.4)" 
            strokeWidth="1.2" 
            strokeDasharray="3 2"
          />

          {/* 6 Discipline Nodes (Connecting Points) */}
          <circle cx="50" cy="6" r="3.2" fill="#38BDF8" />
          <circle cx="88" cy="28" r="3.2" fill="#818CF8" />
          <circle cx="88" cy="72" r="3.2" fill="#38BDF8" />
          <circle cx="50" cy="94" r="3.2" fill="#818CF8" />
          <circle cx="12" cy="72" r="3.2" fill="#38BDF8" />
          <circle cx="12" cy="28" r="3.2" fill="#818CF8" />

          {/* Central AI Core - Simulation Heart */}
          <circle cx="50" cy="50" r="12" fill="url(#neuralCoreGlow)" />
          
          {/* Central 4-point Diamond Star */}
          <path 
            d="M 50 38 L 53 47 L 62 50 L 53 53 L 50 62 L 47 53 L 38 50 L 47 47 Z" 
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Typography Block */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span 
            style={{ 
              fontSize: `${dimensions.titleSize}px`, 
              fontWeight: 800, 
              letterSpacing: '-0.02em', 
              color: '#F8FAFC',
              textTransform: 'uppercase',
              lineHeight: 1.1
            }}
          >
            AI SIMLAB
          </span>
        </div>

        <span 
          style={{ 
            fontSize: `${dimensions.subSize}px`, 
            fontWeight: 600, 
            letterSpacing: '0.14em', 
            color: '#94A3B8', 
            textTransform: 'uppercase',
            marginTop: '2px',
            lineHeight: 1
          }}
        >
          INTERDISCIPLINARY LAB
        </span>

        {showSlogan && (
          <span 
            style={{ 
              fontSize: '11px', 
              fontWeight: 600, 
              color: '#38BDF8',
              letterSpacing: '0.04em', 
              marginTop: '5px',
              textTransform: 'uppercase'
            }}
          >
            BỨT PHÁ GIỚI HẠN - THẮP LỬA THÀNH CÔNG
          </span>
        )}
      </div>
    </div>
  );
}
