import { Post } from "@models/post.model";
import { app } from "@src/app";
import supertest from "supertest";
import { faker } from "@faker-js/faker";

describe("get posts", () => {
  it("should list all posts", async () => {
    const res = await supertest(app()).get("/posts").expect(200);

    expect(res.body.data.length).not.toEqual(0);
  });

  it("should get a post", async () => {
    const res = await supertest(app()).get("/posts/20").expect(200);

    expect(res.body.data).toMatchObject({
      id: expect.any(Number),
      text: expect.any(String),
      created_at: expect.any(String),
      updated_at: expect.any(String),
    });
  });
});

describe("manage posts", () => {
  it("should create a post", async () => {
    const text = faker.lorem.sentence(5);

    await supertest(app())
      .post("/posts")
      .set("Content-type", "application/json")
      .send({ text })
      .expect(200);

    const post = await Post.findOne({ where: { text } });

    expect(post).not.toBeNull();
    expect(post?.get()).toHaveProperty("text", text);
  });

  it("should update a post", async () => {
    const text = faker.lorem.sentence(5);

    await supertest(app())
      .put("/posts/20")
      .set("Content-type", "application/json")
      .send({ text })
      .expect(200);

    const post = await Post.findOne({ where: { text } });

    expect(post).not.toBeNull();
    expect(post?.get()).toHaveProperty("text", text);
  });

  // TODO prepare data before each test
  // it("should delete a post", async () => {
  //   await supertest(app()).delete("/posts/10000").expect(204);

  //   const post = await Post.findOne({ where: { id: 10000 }, paranoid: false });

  //   expect(post).not.toBeNull();
  //   expect(post?.get()).toHaveProperty("deleted_at", expect.any(Date));
  // });
});
