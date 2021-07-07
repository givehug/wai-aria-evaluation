<script>
  export let library;
</script>

<div class="container">
  <h1>Framework - Svelte</h1>
  <h2>Library - {library}</h2>

  <div class="cards">
    <div class="card">
      <h4 class="cardTitle">1. Accordion</h4>
      <div class="cardContent">
        <slot name="accordion">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">2. Alert</h4>
      <div class="cardContent">
        <slot name="alert">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">3. AlertDialog</h4>
      <div class="cardContent">
        <slot name="alertdialog">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">4. Breadcrumbs</h4>
      <div class="cardContent">
        <slot name="breadcrumbs">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">5. Button</h4>
      <div class="cardContent">
        <slot name="button">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">6. Carousel</h4>
      <div class="cardContent">
        <slot name="carousel">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">7. Checkbox</h4>
      <div class="cardContent">
        <slot name="checkbox">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">8. Combobox</h4>
      <div class="cardContent">
        <slot name="combobox">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">9. Dialog</h4>
      <div class="cardContent">
        <slot name="dialog">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">10. Disclosure</h4>
      <div class="cardContent">
        <slot name="disclosure">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">11. Feed</h4>
      <div class="cardContent">
        <slot name="feed">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">12. Link</h4>
      <div class="cardContent">
        <slot name="link">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">13. Listbox</h4>
      <div class="cardContent">
        <slot name="listbox">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">14. Menu</h4>
      <div class="cardContent">
        <slot name="menu">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">15. MenuButton</h4>
      <div class="cardContent">
        <slot name="menubutton">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">16. RadioGroup</h4>
      <div class="cardContent">
        <slot name="radiogroup">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">17. Slider</h4>
      <div class="cardContent">
        <slot name="slider">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">18. MultiThumbSlider</h4>
      <div class="cardContent">
        <slot name="multithumbslider">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">19. Spinbutton</h4>
      <div class="cardContent">
        <slot name="spinbutton">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">20. Table</h4>
      <div class="cardContent">
        <slot name="table">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">21. Tabs</h4>
      <div class="cardContent">
        <slot name="tabs">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">22. Toolbar</h4>
      <div class="cardContent">
        <slot name="toolbar">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">23. Tooltip</h4>
      <div class="cardContent">
        <slot name="tooltip">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">24. TreeView</h4>
      <div class="cardContent">
        <slot name="treeview">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">25. TreeGrid</h4>
      <div class="cardContent">
        <slot name="treegrid">not available</slot>
      </div>
    </div>

    <div class="card">
      <h4 class="cardTitle">26. WindowSplitter</h4>
      <div class="cardContent">
        <slot name="windowsplitter">not available</slot>
      </div>
    </div>
  </div>
</div>

<style scoped>
  .container {
    margin: 0 auto;
    width: '100%';
    max-width: 1200px;
    min-height: 100vh;
    padding: 0 1rem;
    height: 100vh;
  }

  .cards {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .card {
    border: 1px solid #a0a0a0;
    display: flex;
    position: relative;
    min-height: 100px;
    width: 48%;
    margin-bottom: 50px;
    padding: 50px 10px 20px;
  }

  .cardTitle {
    border-right: 1px solid #a0a0a0;
    border-bottom: 1px solid #a0a0a0;
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px 10px;
    margin: 0;
  }

  .cardContent {
    flex: 1;
  }
</style>
