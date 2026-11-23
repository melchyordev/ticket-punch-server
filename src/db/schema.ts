import { sql } from "drizzle-orm";
import { check, index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const entityTypes = ["DESTINATION", "PARK", "ATTRACTION", "SHOW", "RESTAURANT"] as const;

export const entities = sqliteTable(
  "entities",
  {
    id: text("id").primaryKey(),
    parentId: text("parent_id"),
    destinationId: text("destination_id"),
    entityType: text("entity_type", { enum: entityTypes }).notNull(),
    name: text("name").notNull(),
    inactiveAt: integer("inactive_at", { mode: "timestamp_ms" }),
  },
  (table) => [
    check(
      "entity_type_check",
      sql`${table.entityType} IN (${sql.join(
        entityTypes.map((v) => sql`${v}`),
        sql`, `,
      )})`,
    ),
    index("idx_entities_parent").on(table.parentId),
    index("idx_entities_destination").on(table.destinationId),
    index("idx_entities_type").on(table.entityType),
    index("idx_entities_inactive").on(table.inactiveAt),
  ],
);
