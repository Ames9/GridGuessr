declare module "react-simple-maps" {
  import * as React from "react";

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: Record<string, unknown>;
    style?: React.CSSProperties;
    className?: string;
    onClick?: (event: React.MouseEvent<SVGElement> & { latLng: [number, number] }) => void;
    children?: React.ReactNode;
    [key: string]: unknown;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (data: { geographies: object[] }) => React.ReactNode;
  }

  export interface GeographyProps {
    key?: string;
    geography: object;
    onClick?: (geo: object, event: React.MouseEvent) => void;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
    [key: string]: unknown;
  }

  export interface MarkerProps {
    coordinates: [number, number];
    children?: React.ReactNode;
    [key: string]: unknown;
  }

  export interface LineProps {
    from: [number, number];
    to: [number, number];
    stroke?: string;
    strokeWidth?: number;
    strokeLinecap?: string;
    strokeDasharray?: string;
    [key: string]: unknown;
  }

  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    children?: React.ReactNode;
    [key: string]: unknown;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyProps>;
  export const Marker: React.FC<MarkerProps>;
  export const Line: React.FC<LineProps>;
  export const ZoomableGroup: React.FC<ZoomableGroupProps>;
}
