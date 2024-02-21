import supabase from "./supabaseConnection";

export async function FindAll() {
  try {
    const { data: data1, error: error1 } = await supabase
      .from("Goods")
      .select("*");
    if (error1) throw error1;
    return [...data1];
  } catch (error) {
    console.error("FindAll", error);
  }
}
export async function Insert(value) {
  try {
    const { data, error } = await supabase.from("Goods").insert([value]).select();
    if (error) throw error;
    console.log("Insert", data);
  } catch (error) {
    console.error("Insert", error);
  }
}

// export async function UpdateStatus(id, value) {
//   try {
//     let updateData = {
//       status: value,
//     };
//     updateData =
//       value === StatusEnum.Processing
//         ? {
//             ...updateData,
//             processDate: value === StatusEnum.Processing ? new Date() : null,
//           }
//         : {
//             ...updateData,
//             finishedDate: value === StatusEnum.Done ? new Date() : null,
//           };
//     const { error } = await supabase
//       .from("mainTable")
//       .update(updateData)
//       .eq("id", id);
//     if (error) throw error;
//     console.log("Update");
//   } catch (error) {
//     console.error("Update", error);
//   }
// }

// export async function UpdateRow(value) {
//   try {
//     const { error } = await supabase
//       .from("mainTable")
//       .update(value)
//       .eq("id", value.id);
//     if (error) throw error;
//     console.log("Update");
//   } catch (error) {
//     console.error("Update", error);
//   }
// }
// export async function DeleteById(value) {
//   try {
//     const { error } = await supabase.from("mainTable").delete().eq("id", value);
//     if (error) throw error;
//     console.log("Delete");
//   } catch (error) {
//     console.error("Delete", error);
//   }
// }