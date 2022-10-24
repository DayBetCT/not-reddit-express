import { Post } from '@models/post.model';
import { NextFunction, Request, Response } from 'express';

export const indexPost = async (request: Request, response: Response) => {
  const posts = await Post.findAll({ paranoid: false }).catch();

  return response.status(200).json({ data: posts });
};

export const showPost = async (request: Request, response: Response) => {
  const post = await Post.findByPk(request.params.postId);

  if (!post?.get()) {
    return response.status(404).json({ message: 'post does not exist' });
  }

  return response.status(200).json({ data: post });
};

export const updatePost = (request: Request, response: Response) => {
  response.status(200).json({ message: 'updatePost' });
};

export const storePost = (request: Request, response: Response) => {
  response.status(200).json({ message: 'storePost' });
};

export const destroyPost = async (request: Request, response: Response) => {
  const post = await Post.findByPk(request.params.postId);

  if (!post?.get()) {
    return response.status(404).json({ message: 'post does not exist' });
  }

  post.destroy();

  return response.status(200).json({ data: post });
};
