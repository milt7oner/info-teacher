import { defineCollection, z } from "astro:content";

const events = defineCollection({
  type: "content",
  schema: z.object({
    events: z.array(z.object({
      date: z.string(),
      title: z.string(),
      color: z.string(),
      description: z.string(),
    })),
  }),
});


const grades = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    teacher: z.object({
      name: z.string(),
      subject: z.string(),
      photo: z.string(),
      age: z.number(),
      birthday: z.string(), // Si quieres, se puede hacer más estricto con z.string().date()
      address: z.string(),
      schedule: z.string(),
      favorites: z.object({
        color: z.string(),
        food: z.string(),
        pet: z.string(),
        music: z.string(),
        movie: z.string(),
        season: z.string(),
        place: z.string(),
        sports: z.string(),
        subject: z.string(),
      }),
    }),
  }),
});

export const collections = {
  events,
  grades, // 👈 este es el nombre de la colección
};
