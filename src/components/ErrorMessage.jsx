import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        color: "#b00020",
        fontWeight: "600"
      }}
    >
      <p>{message}</p>
      <p style={{ fontSize: "14px", opacity: 0.8 }}>
        Please try again later.
      </p>
    </div>
  );
}
