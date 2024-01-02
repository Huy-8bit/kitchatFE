import React from "react";

function Friend() {
  return (
    <div
      className="Frame427321116"
      style={{
        width: 268,
        height: 44,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 16,
        display: "inline-flex",
      }}
    >
      <div
        className="Ellipse1636"
        style={{
          width: 38,
          height: 38,
          background: "#D9D9D9",
          borderRadius: 9999,
        }}
      />
      <div
        className="Frame427321115"
        style={{
          flex: "1 1 0",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 8,
          display: "inline-flex",
        }}
      >
        <div
          className="Dimas"
          style={{
            alignSelf: "stretch",
            color: "white",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Dimas{" "}
        </div>
        <div
          className="LastActiveRicently"
          style={{
            alignSelf: "stretch",
            color: "#767676",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Last active ricently
        </div>
      </div>
      <div
        className="Frame427321124"
        style={{
          width: 23,
          height: 23,
          padding: 8,
          background: "#FF313D",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          display: "flex",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 10,
            fontFamily: "Inter",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          3
        </div>
      </div>
    </div>
  );
}

export default Friend;
