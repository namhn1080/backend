import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from 'src/schemas/messenger.schema';

@Injectable()
export class MessagesService {

    constructor(@InjectModel(Message.name) private messageModel: Model<MessageDocument>){}
    insertMessage(body:any){
        let messageModel = new this.messageModel(body);
        messageModel.save();
        return "successfull!"
    }
    getAll(){
        return this.messageModel.find().exec();
    }
    getbyid(id :string){
        return this.messageModel.findById(id).exec();
    }
    // getById(sdt: string){
    //     return this.messageModel.find({sdt:{$eq:sdt}})//gte
    // }
    update(sdt, mess:any){
        return this.messageModel.findOneAndUpdate({sdt: sdt },{contents:mess })
    }

    // del(sdt:string){
    //     return this.messageModel.find(sdt);
    // }

    async Del(id){
        try {
            let del = await this.messageModel.findByIdAndDelete(id)
            return del;
        } catch (error) {
            return error;
        }
    }





}
