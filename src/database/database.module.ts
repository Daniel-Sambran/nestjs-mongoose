import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      // user: 'user',
      // pass: 'pass'
      dbName: 'example_db',
    }),
  ],
})
export class DatabaseModule {}
