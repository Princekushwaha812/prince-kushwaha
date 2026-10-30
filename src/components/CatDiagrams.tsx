import React from 'react';

interface DiagramProps {
  type: 'circle_geom' | 'cube_dice' | 'parabola_graph' | 'venn_survey' | 'hexagon_geom' | 'concentric_circles';
  className?: string;
}

export const CatDiagram: React.FC<DiagramProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'cube_dice':
      return (
        <div className={`p-4 bg-white border border-gray-200 rounded-md shadow-xs max-w-sm mx-auto ${className}`}>
          <div className="text-xs font-semibold text-gray-500 mb-2 text-center">3×3×3 Cube of 27 Identical Dice</div>
          <svg viewBox="0 0 280 240" className="w-full h-auto">
            {/* Front Face (Digit 1) */}
            <g transform="translate(40, 90)">
              <polygon points="0,0 120,0 120,120 0,120" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
              {/* Grid lines */}
              <line x1="40" y1="0" x2="40" y2="120" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="80" y1="0" x2="80" y2="120" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="0" y1="40" x2="120" y2="40" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="0" y1="80" x2="120" y2="80" stroke="#cbd5e1" strokeWidth="1.5" />
              {/* Digit 1 on all 9 front faces */}
              {[20, 60, 100].map((x) =>
                [25, 65, 105].map((y) => (
                  <text key={`${x}-${y}`} x={x} y={y} textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">
                    1
                  </text>
                ))
              )}
              <text x="60" y="50" textAnchor="middle" fontSize="11" fill="#2563eb" fontWeight="bold">Face A</text>
            </g>

            {/* Top Face (Digit 2) */}
            <g transform="translate(40, 90)">
              <polygon points="0,0 60,-50 180,-50 120,0" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
              {/* Grid lines for top */}
              <line x1="40" y1="0" x2="100" y2="-50" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="80" y1="0" x2="140" y2="-50" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="20" y1="-16.6" x2="140" y2="-16.6" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="40" y1="-33.3" x2="160" y2="-33.3" stroke="#cbd5e1" strokeWidth="1.5" />
              {/* Digit 2 on top face */}
              {[
                { x: 30, y: -8 }, { x: 70, y: -8 }, { x: 110, y: -8 },
                { x: 50, y: -25 }, { x: 90, y: -25 }, { x: 130, y: -25 },
                { x: 70, y: -42 }, { x: 110, y: -42 }, { x: 150, y: -42 }
              ].map((pos, idx) => (
                <text key={idx} x={pos.x} y={pos.y} textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
                  2
                </text>
              ))}
              <text x="90" y="-30" textAnchor="middle" fontSize="11" fill="#2563eb" fontWeight="bold">Face B</text>
            </g>

            {/* Right Face (Digit 3) */}
            <g transform="translate(160, 90)">
              <polygon points="0,0 60,-50 60,70 0,120" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
              {/* Grid lines for right */}
              <line x1="0" y1="40" x2="60" y2="-10" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="0" y1="80" x2="60" y2="30" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="20" y1="-16.6" x2="20" y2="103.3" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="40" y1="-33.3" x2="40" y2="86.6" stroke="#cbd5e1" strokeWidth="1.5" />
              {/* Digit 3 on right face */}
              {[
                { x: 10, y: 30 }, { x: 30, y: 15 }, { x: 50, y: 0 },
                { x: 10, y: 70 }, { x: 30, y: 55 }, { x: 50, y: 40 },
                { x: 10, y: 110 }, { x: 30, y: 95 }, { x: 50, y: 80 }
              ].map((pos, idx) => (
                <text key={idx} x={pos.x} y={pos.y} textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
                  3
                </text>
              ))}
              <text x="30" y="60" textAnchor="middle" fontSize="11" fill="#2563eb" fontWeight="bold">Face C</text>
            </g>

            {/* Arrows pointing to opposite faces */}
            <text x="30" y="60" fontSize="11" fill="#dc2626" fontWeight="bold">D(4) ←</text>
            <text x="145" y="25" fontSize="11" fill="#dc2626" fontWeight="bold">F(6) ↓</text>
            <text x="225" y="180" fontSize="11" fill="#dc2626" fontWeight="bold">← E(5)</text>
          </svg>
          <div className="text-[11px] text-gray-500 mt-1 text-center italic">
            Opposite faces sum to 7: A(1) ↔ 6, B(2) ↔ 5, C(3) ↔ 4
          </div>
        </div>
      );

    case 'circle_geom':
      return (
        <div className={`p-4 bg-white border border-gray-200 rounded-md shadow-xs max-w-sm mx-auto ${className}`}>
          <div className="text-xs font-semibold text-gray-500 mb-2 text-center">Geometry: Circle with Isosceles Triangles</div>
          <svg viewBox="0 0 280 200" className="w-full h-auto">
            {/* Circle 1 */}
            <circle cx="90" cy="100" r="50" fill="none" stroke="#2563eb" strokeWidth="2" />
            {/* Circle 2 */}
            <circle cx="170" cy="100" r="50" fill="none" stroke="#2563eb" strokeWidth="2" />

            {/* Vertices & lines */}
            <line x1="90" y1="50" x2="90" y2="150" stroke="#0f172a" strokeWidth="2" /> {/* P to Q */}
            <line x1="170" y1="50" x2="170" y2="150" stroke="#0f172a" strokeWidth="2" /> {/* R to S */}
            <line x1="90" y1="50" x2="130" y2="100" stroke="#64748b" strokeWidth="1.5" /> {/* P to T */}
            <line x1="90" y1="150" x2="130" y2="100" stroke="#64748b" strokeWidth="1.5" /> {/* Q to T */}
            <line x1="170" y1="50" x2="130" y2="100" stroke="#64748b" strokeWidth="1.5" /> {/* R to T */}
            <line x1="170" y1="150" x2="130" y2="100" stroke="#64748b" strokeWidth="1.5" /> {/* S to T */}

            {/* Tangent WQ */}
            <line x1="30" y1="160" x2="110" y2="160" stroke="#dc2626" strokeWidth="2" />
            {/* Point U on circle */}
            <line x1="45" y1="100" x2="90" y2="150" stroke="#059669" strokeWidth="1.5" />

            {/* Labels */}
            <text x="90" y="42" textAnchor="middle" fontWeight="bold" fontSize="13">P</text>
            <text x="90" y="170" textAnchor="middle" fontWeight="bold" fontSize="13">Q</text>
            <text x="170" y="42" textAnchor="middle" fontWeight="bold" fontSize="13">R</text>
            <text x="170" y="170" textAnchor="middle" fontWeight="bold" fontSize="13">S</text>
            <text x="130" y="95" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#2563eb">T</text>
            <text x="225" y="105" textAnchor="middle" fontWeight="bold" fontSize="13">V</text>
            <text x="35" y="100" textAnchor="middle" fontWeight="bold" fontSize="13">U</text>
            <text x="25" y="170" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#dc2626">W</text>
          </svg>
        </div>
      );

    case 'hexagon_geom':
      return (
        <div className={`p-4 bg-white border border-gray-200 rounded-md shadow-xs max-w-sm mx-auto ${className}`}>
          <div className="text-xs font-semibold text-gray-500 mb-2 text-center">Regular Hexagon & Medial Triangle</div>
          <svg viewBox="0 0 240 220" className="w-full h-auto">
            {/* Regular Hexagon ABCDEF */}
            {/* Center (120, 110), R = 85 */}
            {/* A: 180°, B: 120°, C: 60°, D: 0°, E: 300°, F: 240° */}
            <polygon
              points="35,110 77.5,36.4 162.5,36.4 205,110 162.5,183.6 77.5,183.6"
              fill="#f8fafc"
              stroke="#0f172a"
              strokeWidth="2"
            />
            {/* Equilateral triangle ACE: A(35,110), C(162.5, 36.4), E(162.5, 183.6) */}
            <polygon
              points="35,110 162.5,36.4 162.5,183.6"
              fill="#dbeafe"
              fillOpacity="0.4"
              stroke="#2563eb"
              strokeWidth="2"
            />
            {/* Medial triangle PQR joining midpoints of AC, CE, EA */}
            {/* Mid AC = (98.75, 73.2), Mid CE = (162.5, 110), Mid EA = (98.75, 146.8) */}
            <polygon
              points="98.75,73.2 162.5,110 98.75,146.8"
              fill="#93c5fd"
              stroke="#1d4ed8"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            {/* Labels */}
            <text x="20" y="115" fontWeight="bold" fontSize="13">A</text>
            <text x="70" y="28" fontWeight="bold" fontSize="13">B</text>
            <text x="170" y="28" fontWeight="bold" fontSize="13">C</text>
            <text x="215" y="115" fontWeight="bold" fontSize="13">D</text>
            <text x="170" y="200" fontWeight="bold" fontSize="13">E</text>
            <text x="70" y="200" fontWeight="bold" fontSize="13">F</text>

            <circle cx="98.75" cy="73.2" r="3.5" fill="#dc2626" />
            <text x="92" y="66" fontWeight="bold" fontSize="11" fill="#dc2626">P</text>
            <circle cx="162.5" cy="110" r="3.5" fill="#dc2626" />
            <text x="172" y="114" fontWeight="bold" fontSize="11" fill="#dc2626">Q</text>
            <circle cx="98.75" cy="146.8" r="3.5" fill="#dc2626" />
            <text x="92" y="160" fontWeight="bold" fontSize="11" fill="#dc2626">R</text>
          </svg>
        </div>
      );

    case 'concentric_circles':
      return (
        <div className={`p-4 bg-white border border-gray-200 rounded-md shadow-xs max-w-sm mx-auto ${className}`}>
          <div className="text-xs font-semibold text-gray-500 mb-2 text-center">Four Congruent Intersecting Circles</div>
          <svg viewBox="0 0 240 240" className="w-full h-auto">
            {/* Four circles of radius 50 passing through center (120, 120) */}
            {/* Circle 1 (Top): center (120, 85) */}
            <circle cx="120" cy="85" r="45" fill="none" stroke="#64748b" strokeWidth="1.5" />
            {/* Circle 2 (Bottom): center (120, 155) */}
            <circle cx="120" cy="155" r="45" fill="none" stroke="#64748b" strokeWidth="1.5" />
            {/* Circle 3 (Left): center (85, 120) */}
            <circle cx="85" cy="120" r="45" fill="none" stroke="#64748b" strokeWidth="1.5" />
            {/* Circle 4 (Right): center (155, 120) */}
            <circle cx="155" cy="120" r="45" fill="none" stroke="#64748b" strokeWidth="1.5" />

            {/* Outer red boundary highlight */}
            <circle cx="120" cy="85" r="45" fill="none" stroke="#dc2626" strokeWidth="3" strokeDasharray="90 190" strokeDashoffset="45" />
            <circle cx="155" cy="120" r="45" fill="none" stroke="#dc2626" strokeWidth="3" strokeDasharray="90 190" strokeDashoffset="115" />
            <circle cx="120" cy="155" r="45" fill="none" stroke="#dc2626" strokeWidth="3" strokeDasharray="90 190" strokeDashoffset="185" />
            <circle cx="85" cy="120" r="45" fill="none" stroke="#dc2626" strokeWidth="3" strokeDasharray="90 190" strokeDashoffset="255" />

            <line x1="120" y1="85" x2="155" y2="120" stroke="#2563eb" strokeDasharray="2 2" strokeWidth="1.5" />
            <text x="145" y="95" fontSize="10" fill="#2563eb" fontWeight="bold">r = 6 cm</text>
          </svg>
        </div>
      );

    case 'parabola_graph':
      return (
        <div className={`p-4 bg-white border border-gray-200 rounded-md shadow-xs max-w-md mx-auto ${className}`}>
          <div className="text-xs font-semibold text-gray-500 mb-2 text-center">Cost & Sales Revenue Quadratic Functions</div>
          <svg viewBox="0 0 300 200" className="w-full h-auto">
            {/* Grid lines */}
            {[40, 80, 120, 160, 200, 240, 280].map((x) => (
              <line key={x} x1={x} y1="20" x2={x} y2="170" stroke="#f1f5f9" strokeWidth="1" />
            ))}
            {[30, 60, 90, 120, 150].map((y) => (
              <line key={y} x1="30" y1={y} x2="280" y2={y} stroke="#f1f5f9" strokeWidth="1" />
            ))}

            {/* Axes */}
            <line x1="30" y1="170" x2="285" y2="170" stroke="#475569" strokeWidth="1.5" />
            <line x1="30" y1="15" x2="30" y2="170" stroke="#475569" strokeWidth="1.5" />

            {/* Cost Parabola (U shaped, Red): y = x^2 - 8x + 18, min at x=4, y=2 */}
            <path
              d="M 35,50 Q 80,120 150,150 T 265,30"
              fill="none"
              stroke="#dc2626"
              strokeWidth="2.5"
            />
            {/* Sales Revenue Parabola (Inverted U, Blue): y = 6x - x^2 + 8, max at x=3, y=17 */}
            <path
              d="M 35,160 Q 120,40 220,165"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2.5"
            />

            {/* Intersection points */}
            <circle cx="70" cy="115" r="4" fill="#059669" />
            <circle cx="210" cy="115" r="4" fill="#059669" />

            {/* Labels */}
            <text x="220" y="30" fill="#dc2626" fontSize="11" fontWeight="bold">Cost (x² - 8x + 18)</text>
            <text x="125" y="45" fill="#2563eb" fontSize="11" fontWeight="bold">Revenue (6x - x² + 8)</text>
            <text x="240" y="185" fill="#475569" fontSize="10">Packets (x)</text>
            <text x="10" y="25" fill="#475569" fontSize="10">Rs ('00)</text>
            <text x="70" y="130" fill="#059669" fontSize="9" fontWeight="bold">x=0.807</text>
            <text x="200" y="130" fill="#059669" fontSize="9" fontWeight="bold">x=6.192</text>
          </svg>
        </div>
      );

    case 'venn_survey':
      return (
        <div className={`p-4 bg-white border border-gray-200 rounded-md shadow-xs max-w-md mx-auto ${className}`}>
          <div className="text-xs font-semibold text-gray-500 mb-2 text-center">Town 'X' Survey Distributions</div>
          <div className="grid grid-cols-2 gap-2">
            {/* Drinks Venn */}
            <div className="border border-gray-100 rounded-sm p-2 text-center">
              <div className="text-[11px] font-bold text-gray-700 mb-1">Drinks (Tea / Coffee)</div>
              <svg viewBox="0 0 160 110" className="w-full h-auto">
                <circle cx="60" cy="55" r="35" fill="#fed7aa" fillOpacity="0.4" stroke="#ea580c" strokeWidth="1.5" />
                <circle cx="100" cy="55" r="35" fill="#bfdbfe" fillOpacity="0.4" stroke="#2563eb" strokeWidth="1.5" />
                <text x="45" y="58" fontSize="10" fontWeight="bold">Tea: x</text>
                <text x="80" y="58" fontSize="10" fontWeight="bold" fill="#7c2d12">z=72</text>
                <text x="115" y="58" fontSize="10" fontWeight="bold">Cof: y</text>
                <rect x="5" y="5" width="150" height="98" fill="none" stroke="#94a3b8" strokeDasharray="3 3" />
                <text x="15" y="95" fontSize="9" fill="#64748b">w = 24 (neither)</text>
              </svg>
            </div>
            {/* Games Venn */}
            <div className="border border-gray-100 rounded-sm p-2 text-center">
              <div className="text-[11px] font-bold text-gray-700 mb-1">Games (Ckt, Fb, Hky)</div>
              <svg viewBox="0 0 160 110" className="w-full h-auto">
                <circle cx="65" cy="45" r="28" fill="#bbf7d0" fillOpacity="0.3" stroke="#16a34a" strokeWidth="1.2" />
                <circle cx="95" cy="45" r="28" fill="#fef08a" fillOpacity="0.3" stroke="#ca8a04" strokeWidth="1.2" />
                <circle cx="80" cy="72" r="28" fill="#fbcfe8" fillOpacity="0.3" stroke="#db2777" strokeWidth="1.2" />
                <text x="50" y="40" fontSize="9" fontWeight="bold">C(a)</text>
                <text x="110" y="40" fontSize="9" fontWeight="bold">F(b)</text>
                <text x="80" y="94" fontSize="9" fontWeight="bold">H(c)</text>
                <rect x="5" y="5" width="150" height="98" fill="none" stroke="#94a3b8" strokeDasharray="3 3" />
                <text x="15" y="95" fontSize="9" fill="#64748b">h = 168 (none)</text>
              </svg>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
