const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});
const sub = redisClient.duplicate();

// intentionally slow to simulate complicated worker backend
function fib(index){
  if (index===0) return 0;
  if (index<=2) return 1;
  return (fib(index-1) + fib(index-2));
}

//get fib value for new indices
sub.on('message', (channel, message) => {
  console.log("Fib req", message);
  redisClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert');
