<script context='module'>
    import usStats from '../data/requests.js';

    export async function preload(){
        try {
            const stats = await usStats();
            return {stats};
        } catch (error) {
            
        }
    }
</script>

<script>
    import CovidChart from "../components/CovidChart.svelte";
    import CovidStat from "../components/CovidStat.svelte";
    import TableContainer from "../components/TableContainer.svelte";
    export let stats;
    console.log(stats, "usStats");
</script>

<svelte:head>
    <title>Covid 19 US</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid 19 - US</h1>
    </div>
</div>

<CovidStat />
<CovidChart />
<TableContainer />