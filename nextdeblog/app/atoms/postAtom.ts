import { Post, User } from '@prisma/client';
import { atom } from 'recoil';

export const postsAtom = atom<Post[]>({
  key: 'postsAtom',
  default: [],
});


export const postWithUserAtom = atom<Array<Post & {user: User}>>({
  key: 'postWithUserAtom',
  default: [],
});
