import React from "react";

function UserItem(props) {
  return (
    <>
      <div className="user" key={props.key}>
        <p className="name">
          {props.item.name.title} {props.item.name.first} {props.item.name.last}
        </p>
        <img src={props.item.picture.medium} className="picture" />
        <address className="address">
          {props.item.location.street.number} {props.item.location.street.name}{" "}
          <br />
          {props.item.location.city}
          <br />
          {props.item.location.state}, {props.item.location.country}
          <br />
          {props.item.location.postcode}
        </address>
        <p className="mobile">
          <i className="fa fa-2x fa-mobile text-info" />
          <a href={`tel:${props.item.cell}`}> {props.item.cell}</a>
        </p>

        <p className="email">
          <i className="fa fa-envelope text-info" />
          <a href={`mailto:${props.item.email}`}> {props.item.email}</a>
        </p>
      </div>
    </>
  );
}

export default UserItem;
