import React from "react";

export default function Tool(props) {
  return (
    <div className="card my-3">
      <div className="card-body">
        <a href={props.tool.link} target="blank">
          <h4>{props.tool.title}</h4>
        </a>

        <p>{props.tool.description}</p>
        <div className="form-row">
          <div className="col-10">
            {props.tool.tags.length > 0 &&
              props.tool.tags.map(tag => (
                <span className="badge badge-pill badge-light mr-2" key={tag}>
                  #{tag}
                </span>
              ))}
          </div>

          <div className="col-2">
            <button
              className="btn btn-sm btn-outline-danger btn-block"
              onClick={e => props.onRemoveClick(props.tool)}
            >
              <i className="fa fa-times" /> Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
