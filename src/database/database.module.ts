import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dsambran:atlas123@cluster0.jpo7gsh.mongodb.net',
      {
        // user: 'user',
        // pass: 'pass'
        dbName: 'example_db',
      },
    ),
  ],
})
export class DatabaseModule {}
