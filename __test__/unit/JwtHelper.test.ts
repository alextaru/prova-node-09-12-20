import JwtHelper from "../../src/helpers/JwtHelper";
import jwt from 'jsonwebtoken'
import { TokenJwtInterface } from '../../src/interfaces/TokenJwtInterface'

const public_key = process.env.SECRET_KEY || 'jwtsecretkey'

describe('Testa o helper jwt', () => {
  it('Deve criar um token e olhar se conte o id nele', async () => {
      const token = JwtHelper.encode(1);
      const data = jwt.verify(token, public_key);
      const { idUser } = data as TokenJwtInterface;
      expect(idUser).toEqual(1);
  });
});
