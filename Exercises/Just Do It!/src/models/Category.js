import typeorm from 'typeorm';

const {EntitySchema} = typeorm;

export default new EntitySchema({
  name: 'Category',
  tableName: 'categories',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    url: {
      type: 'varchar',
    },
    text: {
      type: 'varchar',
    },
  },
  relations: {
    user: {
      target: 'User',
      type: 'many-to-one',
      joinColumn: true,
      inverseSide: 'users',
    },
    task: {
      target: 'Task',
      type: 'one-to-many',
      cascade: true,
      inverseSide: 'task',
    },
  },
});
