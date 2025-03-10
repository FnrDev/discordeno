import { delay } from "../util/utils.ts";
import { GatewayManager } from "./gateway_manager.ts";

export async function processGatewayQueue(gateway: GatewayManager, id: number) {
  const shard = gateway.shards.get(id);
  // If no items or its already processing then exit
  if (!shard?.queue.length || shard.processingQueue) return;

  shard.processingQueue = true;

  while (shard.queue.length) {
    if (shard.ws.readyState !== WebSocket.OPEN) {
      shard.processingQueue = false;
      return;
    }

    const now = Date.now();
    if (now - shard.queueStartedAt >= 60000) {
      shard.queueStartedAt = now;
      shard.queueCounter = 0;
    }

    // Send a request that is next in line
    const request = shard.queue.shift();
    if (!request) return;

    gateway.debug("GW RAW_SEND", shard.id, request);

    shard.ws.send(JSON.stringify(request));

    // Counter is useful for preventing 120/m requests.
    shard.queueCounter++;

    // Handle if the requests have been maxed
    if (shard.queueCounter >= 116) {
      gateway.debug("GW MAX_REQUESTS", {
        message: "Max gateway requests per minute reached setting timeout for one minute",
        shardId: shard.id,
      });
      await delay(60000);
      shard.queueCounter = 0;
      continue;
    }
  }

  shard.processingQueue = false;
}
