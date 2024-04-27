import { mutationField } from 'nexus';

export const AuthLogoutMutation = mutationField('authLogout', {
  type: 'String',
  args: {},
  resolve: async () => {
    return 'OK';
  },
});
