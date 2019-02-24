<template>
    <div class="admin">
        <section class="characters">
            <h1>Characters</h1>
            <router-link :to="{name: 'admin-character' }">Add Character</router-link>
            <div class="list" v-show="characters.length > 0">
                <router-link :to="{ name:'admin-character-edit', params:{name:ch.lookup} }" class="item" v-for="(ch, i) in characters" :key="i">
                    <div class="item__title" v-html="ch.firstName"></div>
                    <div class="item__lookup" v-html="ch.lookup"></div>
                </router-link>
            </div>
        </section>
    </div>
</template>



<script>
export default {
    data() {
        return {
            characters: []
        }
    },
    created() {
        //go get data
        let route = 'https://js-v-database.herokuapp.com/characters';
        this.axios.get(route).then(response => {
            // eslint-disable-next-line
            console.log(response.data)
            this.characters = response.data
        });
    }
}
</script>
