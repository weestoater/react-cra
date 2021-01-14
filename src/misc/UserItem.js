import React from "react";

function UserItem(props) {
  return (
    <>
      <div className="user col-sm-12 mb-3" key={props.key}>
        <img src={props.item.picture.large} alt="" className="picture" />
        <p className="name">
          <span class="badge badge-info">{props.item.nat}</span>{" "}
          {props.item.name.title} {props.item.name.first} {props.item.name.last}
        </p>
        <address className="address">
          {props.item.location.street.number} {props.item.location.street.name}{" "}
          <br />
          {props.item.location.city}
          <br />
          {props.item.location.state}, {props.item.location.country}
          <br />
          {props.item.location.postcode}
        </address>
        <p className="contact">
          <i className="fa fa-mobile" aria-hidden="true" />{" "}
          <a href={`tel:${props.item.cell}`}>{props.item.cell}</a>
          <br />
          <i className="fa fa-phone" aria-hidden="true" />{" "}
          <a href={`tel:${props.item.phone}`}>{props.item.phone}</a>
          <br />
          <i className="fa fa-envelope" aria-hidden="true" />{" "}
          <a href={`mailto:${props.item.email}`}>{props.item.email}</a>
        </p>
      </div>
    </>
  );
}

export default UserItem;
