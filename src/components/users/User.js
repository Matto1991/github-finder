import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

const User = ({  match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      hireable:
      {hireable ? (
        <FontAwesomeIcon icon={faCheck} color="green" />
      ) : (
        <FontAwesomeIcon icon={faXmark} color="red" />
      )}
      <div className="card.grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>

          <p>Location: {location}</p>
        </div>
        {bio && (
          <>
            <h3>Bio</h3>
            <p>{bio}</p>
          </>
        )}
        <a href={html_url} className="btn btn-dark my-1">
          Visit Github Profile
        </a>
        <ul>
          <li>
            {login && (
              <>
                <strong>Username: </strong> {login}
              </>
            )}
          </li>

          <li>
            {company && (
              <>
                <strong>Company: </strong> {company}
              </>
            )}
          </li>

          <li>
            {blog && (
              <>
                <strong>Website: </strong> {blog}
              </>
            )}
          </li>
        </ul>

        <div></div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public repos: {public_repos}</div>
        <div className="badge badge-dark">Public_gists: {public_gists}</div>
      </div>
      <Repos repositories={repos} />
    </>
  );
};

export default User;
