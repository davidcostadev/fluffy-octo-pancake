import { objectType } from 'nexus';
import { User } from 'nexus-prisma';

export const UserType = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.nonNull.field('id', { type: 'UUID' });
    t.field(User.email);
    t.field(User.firstName);
    t.field(User.lastName);
    t.field(User.lastLogin);
    t.field(User.createdAt);
    t.field(User.updatedAt);
  },
});

export const UserSingleResult = objectType({
  name: 'UserSingleResult',
  definition(t) {
    t.field('data', { type: 'User' });
  },
});
