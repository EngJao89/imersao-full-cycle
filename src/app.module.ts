import { Module } from '@nestjs/common';
import { MongooseModule }from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:root@localhost:27017/tweets?authSource=admin',
      {
        useNewUrlParser: true,
      },
    ),
    TweetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
