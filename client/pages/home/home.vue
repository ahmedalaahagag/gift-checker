<template>
    <div id="home" class="container">
        <div>
            <h4 class="text-center">Welcome to your gifts list !</h4>
            <div v-for="gift in gifts">
                {{gift.title}}
            </div>
        </div>
    </div>
</template>

<style lang="sass" src="./home.scss"></style>

<script type="text/babel">
    import _ from 'lodash';
    import $http from 'axios';
    import stateSvc from '../../components/state/stateService.js';
    export default {
        data: function()
        {
            return {
                state: stateSvc.state
            };
        },
        methods: {
            getGifts: function() {
                console.log("HERE");
                $http.get('https://jsonplaceholder.typicode.com/todos').then(function (response) {
                    console.log(response);
                });
            }
        },
        created:{
        },
    }
</script>