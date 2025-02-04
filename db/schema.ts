import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").unique().notNull(),
  password: text("password").notNull(),
  role: text("role", { enum: ["professor", "student"] }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const exams = pgTable("exams", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  professorId: integer("professor_id").references(() => users.id).notNull(),
  filePath: text("file_path").notNull(),
  answerKey: jsonb("answer_key").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const grades = pgTable("grades", {
  id: serial("id").primaryKey(),
  examId: integer("exam_id").references(() => exams.id).notNull(),
  studentId: integer("student_id").references(() => users.id).notNull(),
  score: integer("score").notNull(),
  feedback: text("feedback"),
  aiProbability: integer("ai_probability").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull()
});

export const examRelations = relations(exams, ({ one, many }) => ({
  professor: one(users, {
    fields: [exams.professorId],
    references: [users.id],
  }),
  grades: many(grades),
}));

export const gradesRelations = relations(grades, ({ one }) => ({
  exam: one(exams, {
    fields: [grades.examId],
    references: [exams.id],
  }),
  student: one(users, {
    fields: [grades.studentId],
    references: [users.id],
  }),
}));

export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);
export const insertExamSchema = createInsertSchema(exams);
export const selectExamSchema = createSelectSchema(exams);
export const insertGradeSchema = createInsertSchema(grades);
export const selectGradeSchema = createSelectSchema(grades);

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
export type InsertExam = typeof exams.$inferInsert;
export type SelectExam = typeof exams.$inferSelect;
export type InsertGrade = typeof grades.$inferInsert;
export type SelectGrade = typeof grades.$inferSelect;
