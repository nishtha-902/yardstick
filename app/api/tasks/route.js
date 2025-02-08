import { NextResponse } from 'next/server';
import { connectDB } from '@/app/api/lib/db';
import Task from '@/app/api/models/Task';

export async function GET() {
  await connectDB();
  const tasks = await Task.find();
  return NextResponse.json(tasks);
}

export async function POST(req) {
  await connectDB();
  const { title, description, dueDate } = await req.json();
  const newTask = new Task({ title, description, dueDate, completed: false });
  await newTask.save();
  return NextResponse.json(newTask);
}

export async function PUT(req) {
  await connectDB();
  const { id, title, description, dueDate, completed } = await req.json();
  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { title, description, dueDate, completed },
    { new: true }
  );
  return NextResponse.json(updatedTask);
}

export async function DELETE(req) {
  await connectDB();
  const { id } = await req.json();
  await Task.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Task deleted' });
}