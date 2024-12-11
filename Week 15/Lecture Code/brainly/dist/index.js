"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("./db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requireBody = zod_1.z.object({
        username: zod_1.z.string().min(5),
        password: zod_1.z.string().min(5),
        firstName: zod_1.z.string().min(3),
        lastName: zod_1.z.string().min(3),
    });
    const parseDataWithSuccess = requireBody.safeParse(req.body);
    if (!parseDataWithSuccess.success) {
        res.status(400).json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }
    const { username, password, firstName, lastName } = req.body;
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        yield db_1.UserModel.create({
            username: username,
            password: hashedPassword,
        });
        res.status(200).json({
            message: "User signed up",
        });
    }
    catch (e) {
        res.status(411).json({
            message: "user already exist",
        });
    }
}));
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requireBody = zod_1.z.object({
        username: zod_1.z.string().email(),
        password: zod_1.z.string().min(6),
    });
    const parseDataWithSuccess = requireBody.safeParse(req.body);
    if (!parseDataWithSuccess) {
        res.status(400).json({
            message: "Incorrect Cridential",
        });
        return;
    }
    const { username, password } = req.body;
    const Find = yield db_1.UserModel.findOne({
        username
    });
    if (!Find) {
        res.status(403).json({
            message: "Invalid Credentials!",
        });
        return;
    }
    const passwordMatch = yield bcrypt_1.default.compare(password, Find.password);
    if (!passwordMatch) {
        res.status(403).json({
            message: "Invalid Credentials!",
        });
        return;
    }
    if (passwordMatch) {
        const token = jsonwebtoken_1.default.sign({
            id: Find._id
        }, config_1.JWT_Token_pass);
        // { expiresIn: "1h" }
        res.status(200).json({
            token,
        });
    }
    else {
        res.status(403).json({
            message: "Invalid Credentials!",
        });
    }
}));
app.post("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const link = req.body.link;
    const title = req.body.title;
    yield db_1.ContentModel.create({
        link,
        title,
        //@ts-ignore
        UserId: req.userId,
        tags: []
    });
    res.json({
        message: "Content added"
    });
}));
app.get("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    const content = yield db_1.ContentModel.find({
        UserId: userId
    });
    res.json({
        content
    });
}));
app.delete("/api/v1/content", (req, res) => {
});
app.post("/api/v1/brain/:share", (req, res) => {
});
app.get("/api/v1/brain/:shareLink", (req, res) => {
});
app.listen(3000);
