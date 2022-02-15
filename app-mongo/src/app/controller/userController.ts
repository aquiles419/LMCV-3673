import { Request, Response } from 'express';

import { producer } from '../../kafka/client';

import User from '../model/User';
// const User = require('../model/User');

class UserController {
  async store(req: Request, res: Response): Promise<void> {
    const data = await User.create(req.body);

    // create msg kafka
    await producer.connect();
    await producer.send({
      topic: 'new-user',
      messages: [{ value: JSON.stringify(data), key: String(data._id) }],
    });

    await producer.disconnect();

    //end userController
    res.json(data);
  }

  async index(_req: Request, res: Response): Promise<void> {
    const data = await User.find();

    res.json(data);
  }
}

// module.exports = new UserController();
export default new UserController();
