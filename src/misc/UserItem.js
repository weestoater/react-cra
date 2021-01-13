import React from "react";

function UserItem(props) {
  return (
    <>
      <div className="user">
        <p className="name">
          {props.item.name.title} {props.item.name.first} {props.item.name.last}
        </p>
      </div>
    </>
  );
}

export default UserItem;
