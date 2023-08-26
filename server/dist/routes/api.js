"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CommitController_1 = require("../controller/CommitController");
const router = express_1.default.Router();
router.get('/api/commits', CommitController_1.getCommit);
exports.default = router;
