import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repository }) => {
  return (
    <div className="card">
      <h3>
        <a href={repository.html_url}>{repository.name}</a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repository: PropTypes.object.isRequired,
};
export default RepoItem;
