import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    StudentModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'MasteryDevelopment1',
      database: 'Homer',
      entities: ['dist/**/*.entity{.ts,.js}'],
      logging: false,
      synchronize: true,
      extra: {
        trustServerCertificate: true,
      },
    }),
  ],
  providers: [],
})
export class AppModule {}
