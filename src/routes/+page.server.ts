import {superValidate} from "sveltekit-superforms";
import {z} from "zod";
import {zod} from "sveltekit-superforms/adapters";

const schema = z.object({
    id: z.string(),
    options: z.record(z.string(), z.object({
        label: z.string().refine(value => value.length > 0, {
            message: "Label is required",
        }),
    })),
})

let row = {
    id: "1",
    options: {
        "1": {
            label: "Option 1",
        },
        "2": {
            label: "",
        },
    }
}

export const load = async () => {
    const form = await superValidate(row, zod(schema));

    return {form}
};