import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type MessageDocument = Message & Document;

@Schema()
export class Message{
    @Prop()
    title: string;
  
    @Prop()
    contents: string;

    @Prop()
    deadline: string;

    @Prop()
    sdt: string;
    
}
export const MessageSchema = SchemaFactory.createForClass(Message);