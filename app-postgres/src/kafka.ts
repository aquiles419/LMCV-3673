// const { Kafka } = require('kafkajs')
import { Kafka, logLevel } from 'kafkajs';

import { create } from './database/config';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9093'],
  logLevel: logLevel.ERROR,
});

//Consumer
const consumer = kafka.consumer({ groupId: 'test-group' });

consumer.connect();
consumer.subscribe({ topic: 'new-user', fromBeginning: true });

consumer.run({
  eachMessage: async ({ message }) => {
    // aqui é onde chegam as mensagens
    // posso fazer o que quiser com a mensagem que chega

    // dentro do message tem várias coisas...
    // dentro do message.value é onde está a mensagem
    // é bom verificar se existe algum value dentro antes de trabalhar com ele
    if (message.value) {
      // aqui a gente sabe que tem uma mensagem dentro
      // a mensagem vem no formato Buffer, por isso precisamos converter para string
      console.info(`Nova mensagem: key ${message.key} | offset ${message.offset}`);
      const data = JSON.parse(message.value.toString());

      await create(data);
    }
  },
});
