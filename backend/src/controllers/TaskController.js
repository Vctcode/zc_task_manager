// import TaskService from '../ser/vices/task/Task.service.js';

import taskService from '../services/task/Task.service.js';

export default class TaskController {
  static async create(req, res, next) {
    try {
      // Request validation required

      const result = await taskService.create(req.body);

      return res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }

  static async assign(req, res, next) {
    try {
      // Request validation required
      const id = req.params.task_id;

      const result = await taskService.assign(id, req.body);

      return res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }

  static async reassign(req, res, next) {
    try {
      // Request validation required
      const id = req.params.assigned_task_id;

      const result = await taskService.reassign(id, req.body);

      return res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }
}
