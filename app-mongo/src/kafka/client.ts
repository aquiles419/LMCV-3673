import { Kafka } from 'kafkajs';
// const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9093'],
});

export const producer = kafka.producer();
