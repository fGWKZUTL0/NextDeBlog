import { Post } from '@prisma/client';
import { atom } from 'recoil';
import { UserType } from '../types/user';

export const postsAtom = atom<Post[]>({
  key: 'postsAtom',
  default: [],
});


export const postWithUserAtom = atom<Array<Post & {user: UserType}>>({
  key: 'postWithUserAtom',
  default: [],
});
