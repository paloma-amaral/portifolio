import { ImageResponse } from "next/og";

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0e0d0c",
          color: "#f2ede8",
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 700 }}>Paloma Amaral</div>
        <div style={{ fontSize: 40, marginTop: 16, color: "#b98ea7" }}>
          Analista Financeiro e de Processos
        </div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#9b948d" }}>
          Financeiro e fiscal de 5 empresas · sistema de gestão em produção
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
