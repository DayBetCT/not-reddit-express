import { app } from "app";
import supertest from "supertest";

describe("get posts", () => {
  it("should list all posts", async () => {
    const res = await supertest(app()).get("/posts");
    console.log(res);
  });

  it("should get a post", async () => {
    const res = await supertest(app()).get("/posts/1");
    console.log(res);
  });
});
