import { Module } from '@nestjs/common';
import { ReceiverModule } from './receiver/receiver.module';

@Module({
    imports: [ReceiverModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
