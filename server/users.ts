"use server";
import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";
import { eq } from "drizzle-orm/sql/expressions/conditions";
import { User } from "@/db/schema";

export async function getUsers() { 
    try {
        const allUsers = await db.select().from(todo);
        return allUsers
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
 }

 export async function creaUser(user: Omit<User, "id" | "createdAt" | "updatedAt">) {
    try {
        const newUser = await db.insert(todo).values(user);
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
 }

export async function UpdateUser(id: string, user: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>) {
    try {
        const updatedUser = await db.update(todo).set(user).where(eq(todo.id, id));
        return updatedUser;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
}
