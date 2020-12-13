import React from "react";

function NewsItem(props) {
  return (
    <div div className="col-lg-6 sm-12 mb-2">
      <div className="card" key={props.key}>
        <div className="card-header">
          <small className="text-info">{props.item.title}</small>
        </div>
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
              full article <i className="fa fa-external-link" />
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
