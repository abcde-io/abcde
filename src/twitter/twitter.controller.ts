import { Controller, Post, Get, Query, Req } from '@nestjs/common';
import { WebhookService } from './services/webhook.service';
import { AuthService } from './services/auth.service';
import { Request } from 'express';
import { TwitterResponseToken } from './interfaces/twitter-response-token.interface';

@Controller('twitter')
export class TwitterController {
  constructor(
    private readonly webhookService: WebhookService,
    private readonly authService: AuthService,
  ) {}

  @Get('webhook')
  challenge(@Query('crc_token') crc_token: string): TwitterResponseToken {
    return this.webhookService.generateChallengeResponse(
      crc_token,
      this.authService.OAUTH.consumerSecret,
    );
  }

  @Post('webhook')
  webhook(@Req() request: Request): string {
    console.log(request.body);
    return '200 OK';
  }
}
