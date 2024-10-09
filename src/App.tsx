import { useState } from 'react';
import axios from 'axios';
import './App.css'

type Repository = {
  id: number;
  full_name: string;
  html_url: string;
  description: string;
};

function App() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [keyword, setKeyword] = useState('');

  const handleFormSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.get<{ items: Repository[] }>(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(response => setRepos(response.data.items))
    .catch(err => console.error(err));
  }
  
  return (
    <>
    
      <div className='card'>
        <h1>React REST Github App</h1>

        <form onSubmit={handleFormSubmit}>
          <label htmlFor='keyword'>Keyword</label>
          <input id="keyword" name="keyword" value={keyword} onChange={e => setKeyword(e.target.value)}  />
          <button type="submit" >Fetch</button>
        </form>
      </div>
      {repos.length === 0 ? (
        <div className='card'>
        <p>No data available</p>
        </div>
      ) : (
        <>
            {repos.map((repo) => (
            <div key={repo.id} className='card'>
               <h2>{repo.full_name}</h2>
               <a href={repo.html_url}>{repo.html_url}</a>
               <p>{repo.description}</p>
            </div>
            ))}
        </>
      )}
    </>
  )
}

export default App
