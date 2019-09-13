import { Module } from '@nestjs/common';
import { TwitterController } from './twitter.controller';
import { TwitterService } from './twitter.service';
import { AuthService } from './services/auth.service';
import { WebhookService } from './services/webhook.service';

@Module({
  controllers: [TwitterController],
  providers: [TwitterService, AuthService, WebhookService],
})
export class TwitterModule {}
