import {Tag} from './tag';
import {User} from './user';

export class Post {
  title: string;
  body: string;
  tags: Array<Tag>;
  user: User;
  created_at: string;
}
