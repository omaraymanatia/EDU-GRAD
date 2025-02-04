import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { db } from "@db";
import { exams, grades } from "@db/schema";
import { eq } from "drizzle-orm";

export function registerRoutes(app: Express): Server {
  setupAuth(app);

  // Professor routes
  app.post("/api/exams", async (req, res) => {
    if (!req.isAuthenticated() || req.user.role !== "professor") {
      return res.sendStatus(403);
    }
    
    const exam = await db.insert(exams).values({
      ...req.body,
      professorId: req.user.id
    }).returning();
    
    res.status(201).json(exam[0]);
  });

  app.get("/api/professor/exams", async (req, res) => {
    if (!req.isAuthenticated() || req.user.role !== "professor") {
      return res.sendStatus(403);
    }
    
    const professorExams = await db.select()
      .from(exams)
      .where(eq(exams.professorId, req.user.id));
    
    res.json(professorExams);
  });

  // Student routes
  app.get("/api/student/grades", async (req, res) => {
    if (!req.isAuthenticated() || req.user.role !== "student") {
      return res.sendStatus(403);
    }
    
    const studentGrades = await db.select()
      .from(grades)
      .where(eq(grades.studentId, req.user.id));
    
    res.json(studentGrades);
  });

  const httpServer = createServer(app);
  return httpServer;
}
