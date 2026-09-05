import { ImageResponse } from "next/og";

export const alt = "Arbourview Georgetown Prices";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(165deg, #101833 0%, #1E2C4E 58%, #243556 100%)",
          padding: "64px",
          color: "#FFFDF9",
          fontFamily: "ui-serif, Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 16,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#B87A33",
            marginBottom: 16,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Pre-construction · Georgetown, Ontario · Price Tracker
        </div>
        <div style={{ fontSize: 56, lineHeight: 1.1, fontWeight: 600, maxWidth: 980 }}>
          Arbourview Georgetown Prices
        </div>
        <div
          style={{
            marginTop: 20,
            width: 80,
            height: 3,
            background: "#B87A33",
          }}
        />
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            maxWidth: 880,
            color: "#F1EEE4",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Townhomes and detached WideLot™ homes by Mattamy Homes in Halton Hills.
        </div>
      </div>
    ),
    { ...size },
  );
}
