// client/src/components/CommitList.tsx

import React, { useState, useEffect } from 'react';

interface Commit {
  hash: string;
  author: string;
  date: string;
  message: string;
}

const CommitList: React.FC = () => {
  const [commits, setCommits] = useState<Commit[]>([]);

  useEffect(() => {
    fetch('/api/commits')
      .then(response => response.json())
      .then(data => setCommits(data))
      .catch(error => console.error('Error fetching commits', error));
  }, []);

  return (
    <div>
      <h2>Git Commit History</h2>
      <ul>
        {commits.map(commit => (
          <li key={commit.hash}>
            <strong>{commit.author}</strong> - {commit.message} ({commit.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommitList;
