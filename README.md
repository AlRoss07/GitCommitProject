# Git Commit Project

A project to fetch and display GitHub commit history for a repository.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Folder Structure](#folder-structure)


## Description

The Git Commit Project is a web application that allows users to fetch and display the commit history of a GitHub repository. It utilizes the GitHub API to retrieve commit data and provides a user-friendly interface for viewing the commit details.

## Features

- Fetches and displays the commit history of a GitHub repository.
- Provides details such as commit hash, author, date, and message.
- Built with TypeScript, Express.js, React, and Axios.
- Well-structured codebase for easy maintenance and future enhancements.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AlRoss07/GitCommitProject.git
   cd GitCommitProject
   
2. Install backend dependencies:
   cd server
   npm install

3. Install frontend dependencies:
   cd client
   yarn add
   
5. Set up environment variables:
   GITHUB_TOKEN=your_github_token
   REPO_OWNER=repository_owner
   REPO_NAME=repository_name
   
6. Start the development server:
   # In the server directory
      npm run start

  # In the client directory
    yarn run dev

## Usage

  1. Open your browser and navigate to http://localhost:3000 to view the Git Commit Project interface.

  2. The interface will display the commit history of the specified repository.

## API Documentation

The backend of this project uses the GitHub API to fetch commit data. The endpoint used is:

--bash
  GET /api/commits

No additional parameters are required for this endpoint. It returns an array of commit objects.

## Folder Structure

server: Contains the Express.js backend code.
client: Contains the React frontend code.
dist: Compiled TypeScript code.


   

   
