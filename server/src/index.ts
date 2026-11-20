interface Env {
  EMAIL_ADDRESS: string;
}

export default {
  async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext) {
    ctx.waitUntil(new Promise((res) => setTimeout(() => res, 1000)));
  },

  async fetch(request: Request, env: Env): Promise<Response> {
    return new Response(`Hello ${env.EMAIL_ADDRESS}!`);
  },
} satisfies ExportedHandler<Env>;
