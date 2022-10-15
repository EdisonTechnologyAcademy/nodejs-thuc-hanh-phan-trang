"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const users = [
    {
        id: 1,
        full_name: "Kendre Abelevitz"
    },
    {
        id: 2,
        full_name: "Rona Walas"
    },
    {
        id: 3,
        full_name: "Myrtle Baser"
    },
    {
        id: 4,
        full_name: "Washington Walklot"
    },
    {
        id: 5,
        full_name: "Jo De Domenici"
    },
    {
        id: 6,
        full_name: "Lief Mungham"
    },
    {
        id: 7,
        full_name: "Raquel Donlon"
    },
    {
        id: 8,
        full_name: "Vivien Wedmore."
    },
    {
        id: 9,
        full_name: "Andrei Hubach"
    },
    {
        id: 10,
        full_name: "Coral Bunney"
    },
    {
        id: 11,
        full_name: "Lanny Simco"
    },
    {
        id: 12,
        full_name: "Loralie Bransdon"
    },
    {
        id: 13,
        full_name: "Rad Aubert"
    },
    {
        id: 14,
        full_name: "Kit Branno"
    },
    {
        id: 15,
        full_name: "Quillan Bondar"
    },
    {
        id: 16,
        full_name: "Averil Dafforne"
    },
    {
        id: 17,
        full_name: "Caroljean Grattan"
    },
    {
        id: 18,
        full_name: "Abbie McCurtin"
    },
    {
        id: 19,
        full_name: "Rosalia Plowell"
    },
    {
        id: 20,
        full_name: "Juli Grieve"
    }
];
const PORT = 3000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get("/users", (req, res) => {
    res.json(users);
});
app.get("/users/paginate", paginatedResults(users), (req, res) => {
    res.json(res.paginatedResults);
});
function paginatedResults(model) {
    return (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const results = {};
        if (endIndex < model.length) {
            results.next = {
                page: page + 1,
                limit: limit
            };
        }
        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            };
        }
        results.results = model.slice(startIndex, endIndex);
        res.paginatedResults = results;
        next();
    };
}
app.listen(PORT, () => {
    console.log("App running with port: " + PORT);
});
//# sourceMappingURL=index.js.map