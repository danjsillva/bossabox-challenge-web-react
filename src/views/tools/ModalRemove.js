import React from "react";

export default function ModalRemove(props) {
  if (props.modalOpen) {
    return (
      <div className="modal-container">
        <div className="modal-wrapper card">
          <div className="card-body bt">
            <slot name="body">
              <h4 className="font-weight-bold">
                <i className="fa fa-times mr-3" /> Remove tool
              </h4>

              <p>
                Are you sure you want to remove <b>{props.tool.title}</b>?
              </p>

              <div className="form-row">
                <div className="col-3 offset-6">
                  <button
                    className="btn btn-outline-primary btn-block"
                    onClick={e => props.onCancel()}
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={e => props.onConfirm(props.tool)}
                    disabled={!props.tool.id}
                  >
                    Yes, remove
                  </button>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
