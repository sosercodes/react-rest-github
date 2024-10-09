# React REST Github 

React REST Github app uses the GitHub API to search for repositories by keyword. 

The user enters a keyword and shows repositories that contain that keyword. 

Technologies used:

- React
- Axios for requests
- TypeScript

## Install

First things first.

```bash
npm install
```

Then install axios.

```bash
npm install axios
```

Now...

```bash
npm run dev
```

## Configure Port

Update Vite configuration `vite.config.ts`.

```bash
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
```

## Remove unused things

Remove the unused things.

## Add Axios

You can get repositories with a certain _keyword_g using the ithub api.

```bash
curl https://api.github.com/search/repositories?q=react
```

## The 'Repository' result

The result contains an array with the following fields.

```javascript
type Repository = {
  id: number;
  full_name: string;
  html_url: string;
  description: string;
};
```

## Add some state for result and keyword

```typscript
const [repos, setRepos] = useState<Repository[]>([]);
const [keyword, setKeyword] = useState('');
```

## Add Input field and button

Create a form for the search term.

```typescript
<form onSubmit={handleFormSubmit}>
  <input value={keyword} onChange={e => setKeyword(e.target.value)}  />
  <button type="submit" onSubmit={handleFormSubmit}>Fetch</button>
</form>
```

## Use Axios

Now add the `handleFormSubmit`.


```typescript
const handleFormSubmit = async (e) => {
  e.preventDefault();
  axios.get<{ items: Repository[] }>(`https://api.github.com/search/repositories?q=${keyword}`)
  .then(response => setRepos(response.data.items))
  .catch(err => console.error(err));
}
```

## Add the result

Now we need a div where we put the result.

```typescript
<div key={repo.id} className='card'>
    <h2>{repo.full_name}</h2>
    <a href={repo.html_url}>{repo.html_url}</a>
    <p>{repo.description}</p>
</div>
```

