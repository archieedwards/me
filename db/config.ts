import { defineDb, defineTable, column } from "astro:db";

const Subscriber = defineTable({
  columns: {
    email: column.text({ primaryKey: true }),
  },
});

export default defineDb({
  tables: { Subscriber },
});
