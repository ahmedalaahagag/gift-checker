<template>
    <div id="home" class="container">
        <div>
            <h4 class="text-center">Welcome to your gifts list !</h4>
                <div v-for="(index,gift) in gifts">
                    <span class="col-md-6" v-bind:style="[gift.bought==true ? {'text-decoration':'line-through'}:{}]">{{gift.title}}</span>
                    <button class="btn btn-xs btn-success col-md-1 action-btn" @click="giftBought(index)">
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
                // TODO : HTTP request to get from server
                $http.get('http://localhost:8008/gifts').then(function (response) {
                    console.log(response.data);
                   if(response.status==200){
                       self.$data.gifts = response.data;
                   }
                });
            },
            giftBought:function (index) {
                // TODO : HTTP request to set the bought value
                this.$data.gifts[index].bought=true;
            }
        },

    }
</script>