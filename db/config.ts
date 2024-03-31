import { defineDb, defineTable, column } from "astro:db";

const Subscriber = defineTable({
  columns: {
    name: column.text(),
    email: column.text({ primaryKey: true }),
  },
});

export default defineDb({
  tables: { Subscriber },
});
