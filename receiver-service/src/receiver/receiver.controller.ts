import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('receiver')
export class ReceiverController {
	@MessagePattern('messages_queue')
	async handleUserCreated(user) {
		console.log(user);
	}
}
