import { Post } from '@prisma/client';
import { atom } from 'recoil';

export const postsAtom = atom<Post[]>({
  key: 'postsAtom',
  default: [],
});
