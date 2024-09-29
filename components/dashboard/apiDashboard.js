import { supabase } from "../../lib/supabase";

export async function getListingsForUser(userId) {
  const { data: cars, error } = await supabase
    .from("cars")
    .select("*")
    .eq("profile_id", userId);

  if (error) {
    throw new Error("Trenutno nije moguće pokazati oglase");
  }

  return cars;
}
