import { response } from 'express';
import axios from "axios";
/**
 * Receber code (string)
 * Recuperar o access_token no github
 * Recuperar infos do user no github
 * Verificar se o usuário existe no DB
 * ---- SIM = Gera um token
 * ---- NÃO = Cria no DB, gera um token
 * Retornar o token com as infos do user
 */

interface IAccessTokenResponse {
  access_token: string;
}

class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token";

    const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        "Accept": "application/json"
      }
    });

    const response = await axios.get("");

    return response.data;
  }
}

export { AuthenticateUserService } ;