"use client";

import { useRef } from "react";
import { geoCentroid, geoAlbersUsa, geoPath } from "d3-geo";

// Same projection params as ComposableMap (800×600 viewBox, scale 1000)
const stateProjection = geoAlbersUsa().scale(1000).translate([400, 300]);
const statePathGen = geoPath(stateProjection);
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  ZoomableGroup,
} from "react-simple-maps";
import { LatLng, RoundResult } from "@/hooks/useGameState";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

interface GridMapProps {
  onPinPlace: (lat: number, lng: number) => void;
  currentPin: LatLng | null;
  result: RoundResult | null;
  interactive: boolean;
  showStateLabels?: boolean;
}

export default function GridMap({ onPinPlace, currentPin, result, interactive, showStateLabels = false }: GridMapProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!interactive) return;

    const svg = svgRef.current;
    if (!svg) return;

    // The first <g> child of the ComposableMap SVG is the zoomable group wrapper from react-simple-maps
    const gElement = svg.querySelector("g.rsm-zoomable-group") || svg.querySelector("g");
    if (!gElement) return;

    // Use SVG matrix math to map the screen click to the exact inner <g> coordinates
    const point = svg.createSVGPoint();
    point.x = e.clientX;
    point.y = e.clientY;
    
    // @ts-ignore - gElement has getScreenCTM
    const ctm = gElement.getScreenCTM();
    if (!ctm) return;
    
    // Map screen coordinate to the internal SVG coordinate (handles zoom & pan)
    const inverseCTM = ctm.inverse();
    const transformedPoint = point.matrixTransform(inverseCTM);

    // react-simple-maps default geographic bounds (800x600 size)
    const scale = 1000;
    const tx = 800 / 2;
    const ty = 600 / 2;

    const px = transformedPoint.x;
    const py = transformedPoint.y;

    import("d3-geo").then(({ geoAlbersUsa }) => {
      const proj = geoAlbersUsa().scale(scale).translate([tx, ty]);
      const coords = proj.invert?.([px, py]);
      if (coords) {
        onPinPlace(coords[1], coords[0]); // [lng, lat] → (lat, lng)
      }
    });
  };

  return (
    <div className="relative w-full rounded-2xl border border-slate-200 shadow-md bg-white">
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
        style={{ width: "100%", height: "100%", overflow: "visible" }}
        className="w-full aspect-[1.7/1]"
        // @ts-ignore — react-simple-maps passes ref down to SVG
        ref={svgRef}
        onClick={handleSvgClick as (e: React.MouseEvent<SVGElement>) => void}
      >
        <ZoomableGroup maxZoom={32}>
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: object[] }) =>
              geographies.map((geo: { rsmKey?: string; properties?: { name?: string } } & object) => {
                const centroid = geoCentroid(geo as Parameters<typeof geoCentroid>[0]);
                const projected = showStateLabels && geo.properties?.name
                  ? stateProjection(centroid)
                  : null;
                // Scale font size proportional to the state's SVG area
                const area = projected ? statePathGen.area(geo as Parameters<typeof statePathGen.area>[0]) : 0;
                const fontSize = Math.max(3.5, Math.min(8, Math.sqrt(area) * 0.1));
                // Wrap multi-word names onto 2 lines for small states
                const stateName = geo.properties!.name as string;
                const words = stateName.split(" ");
                const multiLine = fontSize < 6 && words.length > 1;
                return (
                  <g key={(geo as { rsmKey: string }).rsmKey}>
                    <Geography
                      geography={geo}
                      style={{
                        default: {
                          fill: "#f3f4f6",
                          stroke: "#ffffff",
                          strokeWidth: 1.2,
                          outline: "none",
                        },
                        hover: {
                          fill: interactive ? "#e2e8f0" : "#f3f4f6",
                          stroke: "#ffffff",
                          strokeWidth: 1.2,
                          outline: "none",
                          cursor: interactive ? "crosshair" : "default",
                        },
                        pressed: {
                          fill: "#cbd5e1",
                          outline: "none",
                        },
                      }}
                    />
                    {projected && (
                      <text
                        x={projected[0]}
                        y={projected[1]}
                        fontSize={fontSize}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#64748b"
                        style={{ pointerEvents: "none", userSelect: "none" }}
                      >
                        {multiLine ? (
                          <>
                            <tspan x={projected[0]} dy={`-${fontSize * 0.6}px`}>{words[0]}</tspan>
                            <tspan x={projected[0]} dy={`${fontSize * 1.2}px`}>{words.slice(1).join(" ")}</tspan>
                          </>
                        ) : stateName}
                      </text>
                    )}
                  </g>
                );
              })
            }
          </Geographies>

          {/* Dashed line from user pin to answer */}
          {result && (
            <Line
              from={[result.userPin.lng, result.userPin.lat]}
              to={[result.stadium.lng, result.stadium.lat]}
              stroke="#fbbf24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="5 4"
            />
          )}

          {/* Correct answer marker */}
          {result && (
            <Marker coordinates={[result.stadium.lng, result.stadium.lat]}>
              <g>
                <circle r={10} fill="#ef4444" stroke="#fff" strokeWidth={2.5} opacity={0.95} className="drop-shadow-sm" />
                <circle r={4} fill="#fff" />
              </g>
            </Marker>
          )}

          {/* User pin */}
          {currentPin && (
            <Marker coordinates={[currentPin.lng, currentPin.lat]}>
              <g>
                <circle r={10} fill="#3b82f6" stroke="#fff" strokeWidth={2.5} opacity={0.95} className="drop-shadow-sm" />
                <circle r={4} fill="#fff" />
              </g>
            </Marker>
          )}
        </ZoomableGroup>
      </ComposableMap>

      {interactive && !currentPin && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none">
          <p className="text-xs text-slate-500 bg-white/90 px-4 py-2 rounded-full shadow-sm font-semibold border border-slate-100">
            🗺️ Click on the map to drop a pin
          </p>
        </div>
      )}

      {interactive && currentPin && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none">
          <p className="text-xs text-blue-600 bg-white/90 px-4 py-2 rounded-full shadow-sm font-semibold border border-blue-100">
            📍 Confirm your pin or click elsewhere to move it
          </p>
        </div>
      )}
    </div>
  );
}
