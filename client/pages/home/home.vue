<template>
    <div id="home" class="container">
        <div>
            <h4 class="text-center">Welcome to your gifts list !</h4>
                <div v-for="gift in gifts">
                    <span class="col-md-6" v-bind:style="[gift.completed==true ? {'text-decoration':'line-through'}:{}]">{{gift.title}}</span>
                    <button class="btn btn-xs btn-danger col-md-1 action-btn" @click="">
                        <i class="fa fa-trash-o fa-icon-fix"></i>
                    </button>
                    <button class="btn btn-xs btn-success col-md-1 action-btn" @click="">
                        <i class="fa fa-shopping-cart fa-icon-fix"></i>
                    </button>
                    <br>
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