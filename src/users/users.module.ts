import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExampleMiddleware } from './middleware/example/example.middleware';
import { AnotherMiddleware } from './middlewares/another/another.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes("users").apply(AnotherMiddleware).forRoutes("users")
  }
}
