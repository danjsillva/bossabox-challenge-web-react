import React, { useState, useEffect } from "react";

import Tool from "./Tool";
import ModalAdd from "./ModalAdd";
import ModalRemove from "./ModalRemove";

import ToolService from "../../services/ToolService";

export default function Tools(props) {
  const [tools, setTools] = useState([]);
  const [tool, setTool] = useState({});
  const [filteredTools, setFilteredTools] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isTagsOnly, setIsTagsOnly] = useState(false);
  const [modalRemoveOpen, setModalRemoveOpen] = useState(false);
  const [modalAddOpen, setModalAddOpen] = useState(false);

  useEffect(() => {
    fetchTools({});
  }, []);

  const fetchTools = async params => {
    let newTools = await ToolService.fetchTools(params);

    setTools(newTools);
    setFilteredTools(newTools);
  };

  const saveTool = async params => {
    let newTool = await ToolService.saveTool(params);

    setSearchText("");
    setIsTagsOnly(false);

    fetchTools({});
  };

  const removeTool = async params => {
    let newTool = await ToolService.removeTool(params);

    setSearchText("");
    setIsTagsOnly(false);

    fetchTools({});
  };

  const handleSearchTextChange = event => {
    let newSearchText = event.target.value;
    setSearchText(newSearchText);

    handleToolsFilter({ tools, searchText: newSearchText, isTagsOnly });
  };

  const handleIsTagsOnlyChange = event => {
    let newIsTagsOnly = event.target.checked;
    setIsTagsOnly(newIsTagsOnly);

    handleToolsFilter({ tools, searchText, isTagsOnly: newIsTagsOnly });
  };

  const handleToolsFilter = ({ tools, searchText, isTagsOnly }) => {
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

  const handleAddClick = () => {
    setModalAddOpen(true);
  };

  const handleModalAddConfirm = tool => {
    saveTool({ data: { ...tool, tags: tool.tags.split(" ") } });

    setModalAddOpen(false);
  };

  const handleRemoveClick = tool => {
    setTool(tool);
    setModalRemoveOpen(true);
  };

  const handleModalRemoveConfirm = tool => {
    removeTool({ id: tool.id });

    setModalRemoveOpen(false);
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
              type="checkbox"
              className="form-check-input"
              value={isTagsOnly}
              onChange={e => handleIsTagsOnlyChange(e)}
            />
            search in tags only
          </label>
        </div>

        <div className="col-2 offset-2">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={e => handleAddClick()}
          >
            <i className="fa fa-plus" /> Add
          </button>
        </div>
      </div>

      <ModalAdd
        modalOpen={modalAddOpen}
        onConfirm={tool => handleModalAddConfirm(tool)}
        onCancel={() => setModalAddOpen(false)}
      />

      <ModalRemove
        tool={tool}
        modalOpen={modalRemoveOpen}
        onConfirm={tool => handleModalRemoveConfirm(tool)}
        onCancel={() => setModalRemoveOpen(false)}
      />

      {filteredTools.length > 0 &&
        filteredTools.map((tool, index) => (
          <Tool
            key={tool.title + index}
            tool={tool}
            index={index}
            onRemoveClick={tool => handleRemoveClick(tool)}
          />
        ))}
    </>
  );
}
