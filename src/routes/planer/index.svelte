<script>
import { enhance } from "$lib/form";

    const date = new Date('2022-08-10');
    export let data;
</script>

<div>
    {data}
    <form
        action="/planer"
        method="post"
        use:enhance={{
        result: async ({ form }) => {
            form.reset();
        }
        }}
    >
    <input name="title" aria-label="Add todo" placeholder="title" required />
    <input name="description" aria-label="description" placeholder="title" required />
    <input type="hidden" name="date" value={date} />
    <input type="time" name="start_date" />
    <input type="hidden" value={1} name="color" >
    <input type="submit" value="done"/>
  </form>
</div>