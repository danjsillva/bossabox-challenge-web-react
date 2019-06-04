import React, { useState, useEffect } from "react";

import API from "../../config/api";

export default function Tools(props) {
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isTagsOnly, setIsTagsOnly] = useState(false);

  useEffect(() => {
    fetchTools({});
  }, []);

  const fetchTools = async ({ title = "", tags = "" }) => {
    let response = (await API.get(`/tools?title=${title}&tags=${tags}`)).data;

    setTools(response);
    setFilteredTools(response);
  };

  const handleSearchTextChange = event => {
    let newSearchText = event.target.value;
    setSearchText(newSearchText);

    handleFilterTools({ searchText: newSearchText });
  };

  const handleIsTagsOnlyChange = event => {
    let newIsTagsOnly = event.target.checked;
    setIsTagsOnly(newIsTagsOnly);

    handleFilterTools({ searchText, isTagsOnly: newIsTagsOnly });
  };

  const handleFilterTools = ({ searchText, isTagsOnly = false }) => {
    let newFilteredTools = tools.filter(
      tool =>
        (!isTagsOnly &&
          tool.title.toLowerCase().search(searchText.toLowerCase()) !== -1) ||
        JSON.stringify(tool.tags)
          .toLowerCase()
          .search(searchText.toLowerCase()) !== -1
    );

    setFilteredTools(newFilteredTools);
  };

  return (
    <>
      <h3 className="font-weight-bold">Tools</h3>

      <div className="form-row">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="search"
            value={searchText}
            onChange={e => {
              handleSearchTextChange(e);
            }}
          />
        </div>

        <div className="col-4">
          <label className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              value={isTagsOnly}
              onChange={e => handleIsTagsOnlyChange(e)}
            />
            search in tags only
          </label>
        </div>

        <div className="col-2 offset-2">
          <button type="button" className="btn btn-primary btn-block">
            + Add
          </button>
        </div>
      </div>

      {filteredTools.length > 0 &&
        filteredTools.map((tool, index) => (
          <div className="card my-3" key={tool.id}>
            <div className="card-body">
              <a href={tool.link} target="blank">
                <h4>{tool.title}</h4>
              </a>

              <p>{tool.description}</p>
              <div className="form-row">
                <div className="col-10">
                  {tool.tags.length > 0 &&
                    tool.tags.map(tag => (
                      <span
                        className="badge badge-pill badge-light mr-2"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                </div>

                <div className="col-2">
                  <button className="btn btn-sm btn-outline-danger btn-block">
                    Remover
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
