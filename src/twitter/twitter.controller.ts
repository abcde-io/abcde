import { Controller, Post, Get, Query, Req } from '@nestjs/common';
import { WebhookService } from './services/webhook.service';
import { AuthService } from './services/auth.service';
import { Request } from 'express';

@Controller('twitter')
export class TwitterController {
  constructor(
    private readonly webhookService: WebhookService,
    private readonly authService: AuthService,
  ) {}

  @Get('webhook')
  challenge(@Query('crc_token') crc_token: string): string {
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
