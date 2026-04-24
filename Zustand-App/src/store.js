import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      tasks: [],
      draggedTask: null,

      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      setDraggedTask: (task) => set({ draggedTask: task }),

      moveTask: (task, newState) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === task.id ? { ...t, state: newState } : t
          ),
        })),
    }),
    {
      name: "zustand",
    }
  )
);