import { Injectable } from '@nestjs/common';
import { TwitterOauth } from '../interfaces/twitter-oauth.interface';

@Injectable()
export class AuthService {
  OAUTH: TwitterOauth = {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    token: process.env.TWITTER_ACCESS_TOKEN,
    tokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  };

  WEBHOOK_ENV: string = process.env.TWITTER_WEBHOOK_ENV;
}
