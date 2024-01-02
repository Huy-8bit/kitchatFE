import React from "react";
import NewFriend from "./NewFriend";
import Friend from "./Friend";

function RightBar() {
  return (
    <div
      className="Frame427321135"
      style={{
        width: 324,
        height: 965,
        paddingLeft: 28,
        paddingRight: 28,
        paddingTop: 24,
        paddingBottom: 24,
        background: "#1E1F23",
        borderRadius: 12,
        border: "1px #292B31 solid",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 28,
        display: "inline-flex",
      }}
    >
      <div
        className="Frame427321121"
        style={{
          alignSelf: "stretch",
          height: 372,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 32,
          display: "flex",
        }}
      >
        <div
          className="NewFriendSuggestion"
          style={{
            alignSelf: "stretch",
            color: "rgba(255, 255, 255, 0.50)",
            fontSize: 20,
            fontFamily: "SF Pro Display-Regular",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          New friend suggestion
        </div>
        <div
          className="Frame427321120"
          style={{
            alignSelf: "stretch",
            height: 316,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 24,
            display: "flex",
          }}
        >
          <NewFriend />
          <NewFriend />
          <NewFriend />
          <NewFriend />
          <NewFriend />
        </div>
      </div>
      <div
        className="Vector2168"
        style={{ alignSelf: "stretch", height: 0, border: "1px #444444 solid" }}
      ></div>
      <div
        className="MyFriend"
        style={{
          alignSelf: "stretch",
          color: "rgba(255, 255, 255, 0.50)",
          fontSize: 20,
          fontFamily: "SF Pro Display",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        My friend
      </div>
      <div
        className="Frame427321120"
        style={{
          alignSelf: "stretch",
          height: 316,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 24,
          display: "flex",
        }}
      >
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  );
}

export default RightBar;
