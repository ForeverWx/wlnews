<template>
    <div id="app">
        <!--        <div id="nav">-->
        <!--            &lt;!&ndash;            <router-link to="/">Home</router-link> |&ndash;&gt;-->
        <!--            &lt;!&ndash;            <router-link to="/about">About</router-link>&ndash;&gt;-->
        <!--&lt;!&ndash;            <router-link to="/Home">Home</router-link>&ndash;&gt;-->
        <!--        </div>-->
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
    };
</script>
<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /* margin-top: 60px; */
    }
</style>
