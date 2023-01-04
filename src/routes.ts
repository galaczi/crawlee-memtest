import { sleep, createPlaywrightRouter } from 'crawlee';

export const router = createPlaywrightRouter();

router.addDefaultHandler(async ({ log }) => {
    log.info(`waiting for 20 minutes`);
    await sleep(20 * 60 * 1000)
});