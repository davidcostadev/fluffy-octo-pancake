import { objectType } from 'nexus';

export const AuthLoginResult = objectType({
  name: 'AuthLoginResult',
  definition(t) {
    t.nonNull.string('token');
    t.nonNull.field('user', { type: 'User' });
  },
});

export const AuthSessionUpdateResult = objectType({
  name: 'AuthSessionUpdateResult',
  definition(t) {
    t.nonNull.string('token');
    t.nonNull.field('user', { type: 'UserSingleResult' });
  },
});
