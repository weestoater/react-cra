import React from "react";

function NewsItem(props) {
  return (
    <div className="col-sm-12 mb-3">
      <div className="card" key={props.key}>
        <div className="card-header">{props.item.title}</div>
        <div className="card-body">
          <img src={props.item.urlToImage} alt="" className="news-img" />
          {props.item.description}
          <br />
          <hr />
          <small>
            Read the{" "}
            <a
              href={props.item.url}
              target="_blank"
              without
              rel="noopener noreferrer"
              title={props.item.title}
            >
              full article{" "}
              <i className="fa fa-external-link" aria-hidden="true" />
            </a>
          </small>
        </div>
        <div className="card-footer">
          <small>
            By <b>{props.item.author}</b> of {props.item.source.name}
          </small>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
