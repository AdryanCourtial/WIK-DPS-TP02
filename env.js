"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnv = getEnv;
const _env_json_1 = __importDefault(require("./../.env.json"));
function getEnv(env) {
    try {
        const reponse = _env_json_1.default[env];
        return reponse;
    }
    catch (error) {
        throw new Error("Une erreur est survenue lors de la récupération de la variable d'environement " + env);
    }
}
