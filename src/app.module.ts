import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { AuthService } from './services/auth/auth.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://namhn:binbin123...@cluster0.cruvjfn.mongodb.net/?retryWrites=true&w=majority'),
    MessagesModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
