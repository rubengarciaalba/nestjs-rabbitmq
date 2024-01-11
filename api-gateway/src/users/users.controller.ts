import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
	constructor(@Inject('SAYONARA_BABY') private client: ClientProxy) {}

	@Post()
	async createUser(
		@Body('username') username: string,
		@Body('description') description: string,
	) {
		console.log(username);
		console.log(description);
		
		this.client.emit<any>('messages_queue', { username, description });
		
		return {
			username,
			description,
		};
	}
}
