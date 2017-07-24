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
                gifts:[],
                state: stateSvc.state
            };
        },
        ready: function() {
            this.getGifts()
        },
        methods: {
            getGifts: function() {
                var self = this;
                $http.get('https://jsonplaceholder.typicode.com/todos').then(function (response) {
                   if(response.status==200){
                       self.$data.gifts = response.data;
                   }
                });
            }
        },

    }
</script>