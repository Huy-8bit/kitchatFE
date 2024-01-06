import React from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

function NewFriend() {
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
      <div className="logo-shortcut">
        <div className="main">
          <img
            src="https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg"
            alt="Twitter"
          />
        </div>
      </div>
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
          className="FitriNur"
          style={{
            alignSelf: "stretch",
            color: "white",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Fitri Nur
        </div>
        <div
          className="Fitrinur"
          style={{
            alignSelf: "stretch",
            color: "#767676",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          @fitrinur_
        </div>
      </div>
      <div
        className="Frame427321136"
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 8,
          paddingBottom: 8,
          background: "rgba(49, 106, 255, 0.30)",
          borderRadius: 100,
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 4,
          display: "flex",
        }}
      >
        <PersonAddAltIcon
          className="VuesaxBulkUserAdd"
          style={{
            width: 14,
            height: 14,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            className="UserAdd"
            style={{ width: 14, height: 14, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 14,
                height: 14,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0,
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 10.6,
                height: 4.67,
                left: 1.7,
                top: 8.17,
                position: "absolute",
                opacity: 0.4,
                background: "#316AFF",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 4.67,
                height: 4.67,
                left: 8.17,
                top: 7.58,
                position: "absolute",
                background: "#316AFF",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.83,
                height: 5.83,
                left: 4.08,
                top: 1.17,
                position: "absolute",
                background: "#316AFF",
              }}
            ></div>
          </div>
        </PersonAddAltIcon>
        <div
          className="AddFriend"
          style={{
            color: "#316AFF",
            fontSize: 12,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Add friend
        </div>
      </div>
    </div>
  );
}

export default NewFriend;
