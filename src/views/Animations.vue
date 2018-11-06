<template>
    <div>
            
        <h1>Animations</h1>
        <hr>
        <v-btn color="warning" @click="show = !show">Show Alert</v-btn>
        <br><br>
        <transition name="fade">
            <v-card v-if="show">This is some info</v-card>
        </transition>

        <transition name="slide" type="animation">
            <v-card v-if="show">This is some info</v-card>
        </transition>

        <transition name="slide" type="animation">
            <v-card v-if="show">This is some info</v-card>
        </transition>

        <hr>
        <button @click="addItem">Add Item</button>
        <transition-group name="fade">

            <li 
                class="list-group-item" 
                v-for="(number,index) in numbers" 
                @click="removeItem"
                style="cursor"
                :key="number">{{number}}</li>
        </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            numbers: [1, 2, 3, 4, 5]
        }
    },
    methods: {
        addItem () {
            const pos = Math.floor(Math.random()*this.numbers.length);
            this.numbers.splice(pos, 0, this.numbers.length+1);
        },
        removeItem(index) {
            this.numbers.splice(index, 1);
        }
    }
}
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }
    
    .fade-leave {
        /*opacity: 1;*/
    }

    .fade-leave-active {
        transition: opacity 2s;
        opacity: 0;
        position: absolute;
    }

    .fade-move {
        transition: transform 1s;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        } to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        } to {
            transform: translateY(20px);
        }
    }
</style>

