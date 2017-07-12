<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header" >
                        <p>
                            {{ status.user.name }} Said...
                        </p>
                        <p>
                            {{ status.created_at | ago | capitalize }}
                            <!--{{ postedOn(status) }}-->
                        </p>
                    </div>
                        <div class="message-body" v-text="status.body">
                        <span class="help is-danger" v-text=""></span>
                    </div>
                </div>
                <add-to-stream @completed="addStatus"></add-to-stream>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import Status from '../models/Status';
    import AddToStream from '../components/AddtoStream';

    export default {
        components: { AddToStream },
        data(){
            return {
                statuses:[]
            }
        },
        filters:{
            ago(date){
                return moment(date).fromNow()
            },
            capitalize(value){
                return value.toUpperCase();
            }
        },

        created() {
            Status.all()
                .then(({data}) => this.statuses = data )
        },

        methods:{

            addStatus(status){
                this.statuses.unshift(status);

                alert('Your status was added to the stream ')
                window.scrollTo(0,0)
            }

        }


// Commented by filter use
//        methods:{
//            postedOn(status){
//                return moment(status.created_at).fromNow()
//            }
//        }
    }
</script>
