<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body {
    font: normal 16px "Helvetica Neue", Arial, sans-serif;
    color: #fff;
    margin: 0;
    width: 100%;
    background: #FF6666;
    overflow-x: hidden;
}

#app {
    margin: 4rem auto;
    padding: 2rem 3rem 3rem;
    max-width: 500px;
    overflow: hidden;
}

h1 {
    font-weight: normal;
    font-size: 2.6rem;
    letter-spacing: 0.05em;
    border-bottom: 1px solid rgba(255, 255, 255, .3);
}

h1 span {
    display: block;
    font-size: 0.8rem;
    margin-bottom: 0.7rem;
    margin-left: 3px;
    margin-top: 0.2rem;
}

ul {
    padding: 0;
    list-style: none;
}

.item {
    margin: 0 -200% 4px;
    padding: 1.1rem 200%;
    background: #ff7873;
}

.item span[role=link] {
    width: 100%;
    margin: 0 -200% 4px;
    padding: 0 200%;
    cursor: pointer;
    width: 100%;
    display: inline-block;
}

.item section {
    border-top: 1px solid rgba(255, 255, 255, .3);
    margin-top: 1.1rem;
    padding-top: 1.1rem;
    overflow: auto;
    text-align: center;
}

.btn {
    padding: .2rem 0;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, .3);
    color: #FFF;
    margin: 0 2.5px;
    float: left;
    text-decoration: none;
    background: none;
    cursor: pointer;
    transition: background .5s ease;
    font: normal 16px "Helvetica Neue", Arial, sans-serif;
}

.btn:hover {
    background: #FF6666;
    transition: background .5s ease;
}

@media (max-height: 700px) {
    #app {
        margin: 0rem auto;
    }
}
</style>
