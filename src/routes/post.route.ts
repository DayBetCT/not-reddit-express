import { PostController } from 'controllers/post.controller';
import { BaseRoute } from './base.route';

export class PostRouter extends BaseRoute {
  private endpoint = '/posts';
  private postController = new PostController();

  constructor() {
    super();
    this.router.get(this.endpoint, this.postController.index);
    this.router.get(`${this.endpoint}/:postId`, this.postController.show);
    this.router.post(this.endpoint, this.postController.store);
    this.router.patch(`${this.endpoint}/:postId`, this.postController.update);
    this.router.delete(`${this.endpoint}/:postId`, this.postController.destroy);
  }
}
