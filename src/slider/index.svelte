<script>
    import { onMount } from 'svelte'
    import { initComparisons } from './index'

    import './styles.less'

    let img_forest = 'images/img_forest.jpg'
    let img_snow = 'images/img_snow.jpg'

    onMount(() => {
        initComparisons()
    })
</script>

<div class="img-comp-container">
    <div class="img-comp-img">
        <img src={img_snow} width="300" height="200" alt="" />
    </div>
    <div class="img-comp-img img-comp-overlay">
        <img src={img_forest} width="300" height="200" alt="" />
    </div>
</div>
