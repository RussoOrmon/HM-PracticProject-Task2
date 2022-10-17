import React from "react";
import "./UsersItem.css";
import Card from "./Card/Card";


function UsersItem(props) {
  return (
    <Card className="containerMain">
      <div
        className="containerCard"
        style={{
          backgroundColor: props.colorWallpaper,
          width: "250px",
          height: "90px",
        }}
      >
        <img className="imageUser" src={props.userImg} alt=" Img " />

        <span className="nameUser">
          {" "}
          <strong>{props.userName}</strong>
          {props.id}{" "}
        </span>
        <p> About </p>
        <p> {props.userInfo} </p>
      </div>
    </Card>
  );
}
export default UsersItem;
