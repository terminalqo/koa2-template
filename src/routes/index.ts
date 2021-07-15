import * as Koa from "koa";
import Router from "@koa/router";

const router = new Router();

router.get("/", async (ctx: Koa.Context, next: Koa.Next) => {
  await ctx.render("index", {
    title: "Hello Koa 212!",
  });
});

router.get("/string", async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

export default router;
