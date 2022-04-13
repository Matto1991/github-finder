import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ repositories }) => {
  return repositories.map((repo) => <RepoItem repository={repo} key={repo.id} />);
};

Repos.propTypes = {
  repositories: PropTypes.array.isRequired,
};
export default Repos;
