"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommit = void 0;
const simple_git_1 = __importDefault(require("simple-git"));
const axios_1 = __importDefault(require("axios"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = process.env.REPO_OWNER;
const REPO_NAME = process.env.REPO_NAME;
const git = (0, simple_git_1.default)();
const getCommit = async (req, res) => {
    try {
        const response = await axios_1.default.get(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/commits`, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
            },
        });
        const commits = response.data.map((commit) => ({
            hash: commit.sha,
            author: commit.commit.author.name,
            date: commit.commit.author.date,
            message: commit.commit.message,
        }));
        res.json(commits);
    }
    catch (error) {
        console.error("error fetching commits", error);
        res.status(500).json({ error: "Failed to fetch commit" });
    }
};
exports.getCommit = getCommit;
