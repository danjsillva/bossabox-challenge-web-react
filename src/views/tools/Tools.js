import React from "react";

export default function Tools(props) {
  return (
    <>
      <h3>Tools</h3>

      <form>
        <div className="form-row">
          <div className="col-4">
            <input type="text" className="form-control" placeholder="search" />
          </div>

          <div className="col-4">
            <label class="form-check mt-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              search in tags only
            </label>
          </div>

          <div className="col-2 offset-2">
            <button type="submit" className="btn btn-primary btn-block">
              + Add
            </button>
          </div>
        </div>
      </form>

      <div className="card my-3">
        <div className="card-body">
          <h4>Notion</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <span class="badge badge-pill badge-light mr-2">Development</span>
          <span class="badge badge-pill badge-light mr-2">NodeJS</span>
          <span class="badge badge-pill badge-light mr-2">ReactJS</span>
        </div>
      </div>
      <div className="card my-3">
        <div className="card-body">
          <h4>Notion</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <span class="badge badge-pill badge-light mr-2">Development</span>
          <span class="badge badge-pill badge-light mr-2">NodeJS</span>
          <span class="badge badge-pill badge-light mr-2">ReactJS</span>
        </div>
      </div>
    </>
  );
}
