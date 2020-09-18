import {
  Kafka,
  KafkaConfig,
  Admin,
  AdminConfig,
  RecordMetadata,
} from 'kafkajs';
import { IQueueRepository } from '../../domain/repositories/IQueueRepository';

export class KafkaProducerBaseRepository<T> implements IQueueRepository<T> {
  private admin: Admin;
  private client: Kafka;
  private readonly clientId: string;
  private readonly brokers: Array<string>;
  private readonly topic: string;

  constructor(clientId: string, brokers: Array<string>, topic: string) {
    this.clientId = clientId;
    this.brokers = brokers;
    this.topic = topic;

    const options: KafkaConfig = {
      brokers: this.brokers,
      clientId: this.clientId,
    };

    this.client = new Kafka(options);

    const adminOptions: AdminConfig = {
      retry: {
        retries: 2,
      },
    };

    this.admin = this.client.admin(adminOptions);
  }

  private sendMessage = async (topic: string, payload: T): Promise<RecordMetadata[] | void> => {
    const producer = this.client.producer();
    await producer.connect();
    const sendResponse = await producer.send({
      topic,
      messages: [{ value: JSON.stringify(payload) }],
    })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((e) => console.error(`Error producer ${e.message}`));
    await producer.disconnect();
    return sendResponse;
  };

  create(body: T): void {
    if (this.topic != null) {
      this.sendMessage(this.topic, body)
        .catch((e) => console.error(`Error producer ${e.message}`));
    }
  }
}
