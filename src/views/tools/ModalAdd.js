import React, { useState, useEffect } from "react";

export default function ModalAdd(props) {
  const [tool, setTool] = useState({});

  useEffect(() => {
    setTool({
      title: "",
      link: "",
      description: "",
      tags: ""
    });
  }, []);

  if (props.modalOpen) {
    return (
      <div className="modal-container">
        <div className="modal-wrapper card">
          <div className="card-body bt">
            <slot name="body">
              <h4>
                <i className="fa fa-plus mr-3" /> Add new tool
              </h4>

              <div className="form-row">
                <div className="col-12">
                  <div className="form-group">
                    <label>Tool name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={tool.title}
                      onChange={e =>
                        setTool({ ...tool, title: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label>Tool link</label>
                    <input
                      type="text"
                      className="form-control"
                      value={tool.link}
                      onChange={e => setTool({ ...tool, link: e.target.value })}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label>Tool description</label>
                    <textarea
                      className="form-control"
                      value={tool.description}
                      onChange={e =>
                        setTool({ ...tool, description: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label>Tags</label>
                    <input
                      type="text"
                      className="form-control"
                      value={tool.tags}
                      onChange={e => setTool({ ...tool, tags: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-3 offset-6">
                  <button
                    className="btn btn-secondary btn-block"
                    onClick={e => props.onCancel()}
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={e => props.onConfirm(tool)}
                    disabled={!tool.title || !tool.link || !tool.description}
                  >
                    Add tool
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
