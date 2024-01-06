<script>
  import { onMount } from "svelte";

    let caldata = "";
    onMount (async ()=> {
        const fetchData = await fetch("http://localhost:3000/coal")
        fetchData.json().then(data => {
            caldata = data["data"]
            console.log(caldata)
        })

    })

    
</script>

{#if caldata}
{#each caldata as data }
    <h1>{data["post_id"]}. {data["title"]}</h1>
    <p>{data["content"]}</p>
{/each}

{/if}
