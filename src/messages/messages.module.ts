import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { Message, MessageSchema } from 'src/schemas/messenger.schema';
import { AuthService } from 'src/services/auth/auth.service';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Message.name, schema: MessageSchema },
        ])
    ],
    controllers: [MessagesController],
    providers: [MessagesService,AuthService]
})
export class MessagesModule { }
