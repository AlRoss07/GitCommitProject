import { Request, Response } from "express";
import simpleGit from "simple-git";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = process.env.REPO_OWNER;
const REPO_NAME = process.env.REPO_NAME;

const git = simpleGit();

export const getCommit = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/commits`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );

    const commits = response.data.map((commit: any) => ({
      hash: commit.sha,
      author: commit.commit.author.name,
      date: commit.commit.author.date,
      message: commit.commit.message,
    }));

    res.json(commits);
  } catch (error) {
    console.error("error fetching commits", error);
    res.status(500).json({ error: "Failed to fetch commit" });
  }
};
