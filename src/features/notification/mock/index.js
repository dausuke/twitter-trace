import {Avators} from '@/features/mock';

export default [
  {
    body: 'フォローされました',
    users: [
      {
        name: '田中太郎',
        avator: Avators.Avator_A,
      },
    ],
  },
  {
    body: 'フォローされました',
    users: [
      {
        name: '田中太郎',
        avator: Avators.Avator_A,
      },
      {
        name: '山田太郎',
        avator: Avators.Avator_B,
      },
    ],
  },
  {
    body: 'フォローされました',
    users: [
      {
        name: '田中太郎',
        avator: Avators.Avator_A,
      },
      {
        name: '山田太郎',
        avator: Avators.Avator_B,
      },
      {
        name: '鈴木太郎',
        avator: Avators.Avator_C,
      },
    ],
  },
];
