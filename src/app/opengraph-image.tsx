import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#131b25",
          color: "#f3f0e6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              backgroundColor: "#93aa85",
            }}
          />
          <div
            style={{
              fontSize: "22px",
              textTransform: "uppercase",
              letterSpacing: "6px",
              color: "#93aa85",
            }}
          >
            Supply Chain &amp; Operations Advisory
          </div>
        </div>
        <div
          style={{
            fontSize: "84px",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-2px",
          }}
        >
          Cloon Operations Advisory
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: "30px",
            color: "#a2adba",
            maxWidth: "900px",
          }}
        >
          Practical supply chain and operations advisory led by Conor Lee.
        </div>
      </div>
    ),
    { ...size }
  );
}
