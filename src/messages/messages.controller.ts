import { Body, Controller, Delete, Get, Post, Put, Headers } from '@nestjs/common';
import { Message, MessageDocument } from 'src/schemas/messenger.schema';
import { AuthService } from 'src/services/auth/auth.service';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(
        private MessSV: MessagesService, private authService: AuthService
    ){}

    // @RestController(){
    //     @Autowired
    //     private note:;
    // }

    @Post()
    public async createMessage(@Body() body:any,@Headers ('Authorization') idToken: string){
        console.log(idToken);
        console.log(body);
        let verifiedToken = await this.authService.verifyToken(idToken);
        body.user = verifiedToken.uid;
        console.log(verifiedToken);
        this.MessSV.insertMessage(body);
    }

    @Get()
    getMessages(){
        return this.MessSV.getAll();  }
    // @Get()
    // getMessages(@Body() id: string){
    //     return this.MessSV.getbyid(id);
    // }
    // @Get()
    // getMessages(@Body('sdt') sdt: string){
    //     console.log(sdt);
    //     return this.MessSV.getById(sdt);    
    // }
    @Put()
    update(@Body() mess: any){
        console.log(mess)
        return this.MessSV.update(mess.id,mess.contents);
    }
    // @Delete()
    // del(@Body('sdt') body: string){
    //     console.log(body);
    //     return this.MessSV.del(body)
    // }
    @Delete()
    del(@Body('id') id: any){
        console.log(id);
        return this.MessSV.Del(id)
        
    }

   
 
   
}
