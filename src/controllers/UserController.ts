import { Request, Response } from 'express'

const users = [
  {
    id: 1,
    name: "João",
    username: "joao",
    email: "joao@gmail.com"
  }
];

class UserController {
    index(req: Request, res: Response) {
      return res.json(users);
    }

    store(req: Request, res: Response) {
      let body = "";
        req.on("data", chunk => {
          body += chunk.toString(); // convert Buffer to string
        });
        req.on("end", () => {
          users.push(JSON.parse(body));
          res.end("ok");
        });
    }

    update(req: Request, res: Response) {
      let body: any = "";
      const url = req.url;
      req.on("data", chunk => {
        body += chunk.toString(); // convert Buffer to string
      });
      req.on("end", () => {
        var id = url.split("/")[2];
        var user = users.find(el => {
          return el.id === parseInt(id);
        });
        body = JSON.parse(body);
        user.name = body.name;
        user.username = body.username;
        user.email = body.email;

        res.end("ok");
        //res.write(JSON.stringify(users));
      });
    }

    destroy(req: Request, res: Response) {
      const url = req.url;
      const id = url.split("/")[2];
      const index = users.findIndex(el => {
        return el.id === parseInt(id);
      });

      users.splice(index, 1);
      if (index === -1) {
        res.statusCode = 404;
      }
    }
}
  
export default new UserController();