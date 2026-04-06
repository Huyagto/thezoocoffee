// Optional Redis client - non-blocking, no crash
let redisClient = null;

const initRedis = () => {
    try {
        const { createClient } = require('redis');
        redisClient = createClient({
            url: process.env.REDIS_URL || 'redis://localhost:6379',
        });

        redisClient.on('error', (err) => console.log('Redis Error (ignored):', err.message));
        redisClient.on('connect', () => console.log('Redis connected'));

        // Don't auto-connect, use lazy connect
    } catch (error) {
        console.log('Redis not required - using memory cache');
    }
};

initRedis();

module.exports = redisClient;
