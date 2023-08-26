// client/src/components/CommitList.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios'

interface Commit {
  hash: string;
  author: string;
  date: string;
  message: string;
}

const CommitList: React.FC = () => {
    const [commits, setCommits] = useState<Commit[]>([]);

    useEffect(() => {
        axios
          .get('/api/commits')
          .then(response => {
            console.log('Response Data:', response.data); 
            setCommits(response.data);
          })
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
