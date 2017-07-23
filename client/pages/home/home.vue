<template>
    <div id="home" class="container">
        <div>
            <h4 class="text-center">Welcome to your gifts list !</h4>

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
        }
    }
</script>