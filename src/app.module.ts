import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClinicaModule } from './clinicas/clinicas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://projetoxico63430:RHLdV4UOMhnXokvC@nuvem.kqruf5p.mongodb.net/?retryWrites=true&w=majority&appName=nuvem',
    ),

    ClinicaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
