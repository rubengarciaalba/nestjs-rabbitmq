import { ClientsModule, Transport } from '@nestjs/microservices';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
  	controllers: [UsersController],
  	imports: [
    	ClientsModule.register([
		{
        	name: 'SAYONARA_BABY',
        	transport: Transport.RMQ,
        	options: {
				urls: ['amqp://localhost:5672'],
				queue: 'messages_queue',
				queueOptions: {
					durable: false
				}
        	}
      	}])
  	]
})
export class UsersModule {}
