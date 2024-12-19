import { useEffect, useState } from "react";
import { Repo } from "../utils/type";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { CiStar } from "react-icons/ci";
import { GoRepoForked } from "react-icons/go";

const UserRepos = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const { login } = useParams();
  const { loading, setLoading, setUser, setErrorMessage } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${login}/repos`);
        if (!res.ok) throw new Error("Response status: " + res.status);
        const json = await res.json();
        setRepos(sortReposByStars(json));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadRepos();
  }, []);

  const sortReposByStars = (repos: Repo[]): Repo[] => {
    let finalRepos = repos;
    finalRepos.sort((a, b) => a.stargazers_count - b.stargazers_count);
    finalRepos.reverse();
    finalRepos = finalRepos.slice(0, 5);
    return finalRepos;
  };

  const handleBackBtn = () => {
    setUser(null);
    setErrorMessage("");
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleBackBtn}>Voltar</button>
      {loading ? (
        <p>Carregando repositórios...</p>
      ) : repos.length === 0 ? (
        <p>Esse usuário não possui repositórios</p>
      ) : (
        repos.map((repo) => (
          <div>
            <h5>{repo.name}</h5>
            <p>{`</> ${repo.language}`}</p>
            <div>
              <p>
                <CiStar /> {repo.stargazers_count}
              </p>
              <p>
                <GoRepoForked />
                {repo.forks_count}
              </p>
            </div>
            <Link to={repo.html_url} target="blank">
              Ver código
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default UserRepos;
