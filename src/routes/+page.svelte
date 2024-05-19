<script>
    import {superForm} from "sveltekit-superforms";

    /** @type {import('./$types').PageData} */
    export let data

    const {form, enhance} = superForm(data.form, {
        dataType: 'json'
    })
</script>

<h1>Nested data validation issue</h1>

<form action="?/save" method="post" use:enhance>
    {#each Object.entries($form.options) as [id] (id)}
        <div>
            <label for="label-{id}">Label</label>
            <input bind:value={$form.options[id].label} id="label" required type="text">
        </div>
    {/each}
    <p>
        <button type="submit">Save</button>
    </p>
</form>
