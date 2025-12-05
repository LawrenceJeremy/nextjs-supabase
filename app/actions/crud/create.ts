import { supabase } from "@/lib/supabaseClient";
import { Post } from "@/types/post";

export async function create(post: Post) {
    const { error } = await supabase.from("post").insert({
        message: post.message
    })

    if (error) return { success: false }

    return {success: true}
}