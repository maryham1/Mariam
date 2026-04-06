import supabase from "./supabase";
export async function getProject() {
  const { data, error } = await supabase
    .from("portfolio")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("project could not be loaded");
  }
  return data;
}
