<template>
<div class="character" v-if="loaded">
    <!-- Wrapper -->
    <form class="wrapper" @submit.prevent="send">
        <label for="headerImage" style="cursor:pointer">
            <HeaderImage :src="compHeader" v-if="loaded"/>
        </label>
        <input type="hidden" name="header" :value="JSON.stringify(header)">
        <input type="file" id="headerImage" accept="image/*" style="display:none" @change="changeHeader($event)">
        <input type="text" placeholder="caption" v-model="header.caption">

        <router-link :to="{ name:'character', params:{ name:editLookup } }" v-if="editLookup != null && editLookup != ''">Go to Character Page</router-link>


        <!-- Details -->
        <div class="character__details">
            <div class="image">
                <label for="profileImage" style="cursor:pointer">
                    <input type="hidden" name="profile" v-model="profile">
                    <img :src="compProfile" alt="profile" v-if="loaded"> 
                    <input type="file" id="profileImage" accept="image/*" style="display:none" @change="changeProfile($event)">
                </label>
            </div>
            <div class="image">
                <label for="thumbnailImage" style="cursor:pointer">
                    <input type="hidden" name="thumbnail" v-model="thumbnail">
                    <img :src="compThumbnail" alt="character image" v-if="loaded">
                    <input type="file" id="thumbnailImage" accept="image/*" style="display:none" @change="changeThumbnail($event)">
                </label>
            </div>
            <div class="header">
                <div class="header__title">
                    <input type="text" name="lookup" v-model="lookup" placeholder="Lookup" required>
                    <input type="text" name="firstName" v-model="firstName" placeholder="First Name" required>
                    <input type="text" name="middleName" v-model="middleName" placeholder="Middle Name">
                    <input type="text" name="lastName" v-model="lastName" placeholder="Last Name">
                </div>
                <div class="side">
                    <div class="header__maiden">
                        <input type="text" name="maidenName" v-model="maidenName" placeholder="Maiden Name">
                    </div>
                    <div class="header__pronunction">
                        <input type="text" name="pronunciation" v-model="pronunciation" placeholder="pronunciation">
                    </div>
                </div>
            </div>
            <!-- Details -->
            <div class="details">
                <!-- Preferred Name -->
                <div class="detail">
                    <div class="title">Preferred Name</div>
                    <div class="detail__content">
                        <input type="text" name="preferredName" v-model="preferredName">
                    </div>
                </div>
                <!-- Nick Name -->
                <div class="detail">
                    <div class="title">Nickname</div>
                    <div class="detail__content">
                        <input type="text" name="nickName" v-model="nickName">
                    </div>
                </div>
                <!-- Age -->
                <div class="detail">
                    <div class="title">Age</div>
                    <input type="hidden" name="age" :value="JSON.stringify(age)">
                    <div class="detail__content">
                        <input type="number" min=-1 v-model="age.local">
                        <input type="number" min=-1 v-model="age.global">
                    </div>
                </div>
                <!-- Gender -->
                <div class="detail">
                    <div class="title">Gender</div>
                    <input type="hidden" name="gender" :value="JSON.stringify(gender)">
                    <div class="detail__content">
                        <select v-model="gender.lookup" @change="updateSelectData($event, 'gender')">
                            <option value="genderMale">Male</option>
                            <option value="genderFemale">Female</option>
                            <option value="genderGenderless">Genderless</option>
                            <option value="genderGenderfluid">Gender-Fluid</option>
                            <option value="">Unknown</option>
                            <option value="other">Other</option>
                        </select>
                        <div class="other" v-if="gender.lookup == 'other'">
                            <input type="text" v-model="gender.key" placeholder="Gender" required>
                            <input type="text" v-model="gender.other" placeholder="genderName">
                        </div>
                    </div>
                </div>
                <!-- Type -->
                <div class="detail">
                    <div class="title">Type</div>
                    <input type="hidden" name="typeMod" :value="JSON.stringify(typeMod)">
                    <input type="hidden" name="typeBase" :value="JSON.stringify(typeBase)">
                    <div class="detail__content">
                        <!-- Modifier -->
                        <div class="modifier">
                            <select v-model="typeMod.lookup" @change="updateSelectData($event, 'typeMod')">
                                <option value="">None</option>
                                <option value="typeModFire">Fire</option>
                                <option value="typeModWater">Water</option>
                                <option value="typeModElectric">Electric</option>
                                <option value="typeModPoison">Poison</option>
                                <option value="typeModSea">Sea</option>
                                <option value="typeModSky">Sky</option>
                                <option value="typeModNature">Nature</option>
                                <option value="other">Other</option>
                            </select>
                            <!-- Base -->
                            <select v-model="typeBase.lookup" @change="updateSelectData($event, 'typeBase')">
                                <option value="typeCreature">Creature</option>
                                <option value="typeGuardian">Guardian</option>
                                <option value="typeGod">God</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <!-- /Modifier -->
                        <div class="other" v-if="typeMod.lookup == 'other'">
                            <input type="text" v-model="typeMod.key" placeholder="Modifier" required>
                            <input type="text" v-model="typeMod.other" placeholder="typeModName">
                        </div>
                        <div class="other" v-if="typeBase.lookup == 'other'">
                            <input type="text" v-model="typeBase.key" placeholder="Base" required>
                            <input type="text" v-model="typeBase.other" placeholder="typeName">
                        </div>
                    </div>
                </div>
                <!-- Species -->
                <div class="detail">
                    <div class="title">Species</div>
                    <input type="hidden" name="speciesMod" :value="JSON.stringify(speciesMod)">
                    <input type="hidden" name="speciesBase" :value="JSON.stringify(speciesBase)">
                    <div class="detail__content">
                        <!-- Modifier -->
                        <div class="modifier">
                            <select v-model="speciesMod.lookup" @change="updateSelectData($event, 'speciesMod')">
                                <option value="">None</option>
                                <option value="speciesModRed">Red</option>
                                <option value="speciesModBlue">Blue</option>
                                <option value="speciesModPink">Pink</option>
                                <option value="speciesModGreen">Green</option>
                                <option value="speciesModYellow">Yellow</option>
                                <option value="speciesModPurple">Purple</option>
                                <option value="speciesModBlack">Black</option>
                                <option value="speciesModWhite">White</option>
                                <option value="other">Other</option>
                            </select>
                            <!-- Base -->
                            <select v-model="speciesBase.lookup" @change="updateSelectData($event, 'speciesBase')">
                                <option value="speciesSlugcat">Slugcat</option>
                                <option value="speciesLizard">Lizard</option>
                                <option value="speciesVulture">Vulture</option>
                                <option value="speciesScavenger">Scavenger</option>
                                <option value="speciesLantern">Lantern Mouse</option>
                                <option value="speciesIterator">Iterator</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <!-- /Modifier -->
                        <div class="other" v-if="speciesMod.lookup == 'other'">
                            <input type="text" v-model="speciesMod.key" placeholder="Modifier" required>
                            <input type="text" v-model="speciesMod.other" placeholder="speciesModName">
                        </div>
                        <div class="other" v-if="speciesBase.lookup == 'other'">
                            <input type="text" v-model="speciesBase.key" placeholder="Base" required>
                            <input type="text" v-model="speciesBase.other" placeholder="speciesName">
                        </div>
                    </div>
                </div>
                <!-- Birthplace -->
                <div class="detail">
                    <div class="title">Birthplace</div>
                    <input type="hidden" name="birthplace" :value="JSON.stringify(birthplace)">
                    <div class="detail__content lookup">
                        <input type="text" v-model="birthplace.key" placeholder="Birthplace">
                        <input type="text" v-model="birthplace.lookup" placeholder="Lookup">
                    </div>
                </div>
                <!-- Home -->
                <div class="detail">
                    <div class="title">Home</div>
                    <input type="hidden" name="home" :value="JSON.stringify(home)">
                    <div class="detail__content lookup">
                        <input type="text" v-model="home.key" placeholder="Home">
                        <input type="text" v-model="home.lookup" placeholder="Lookup">
                    </div>
                </div>
                <!-- Career -->
                <div class="detail">
                    <div class="title">Career</div>
                    <div class="detail__content">
                        <input type="text" name="career" v-model="career">
                    </div>
                </div>
                <!-- Status -->
                <div class="detail">
                    <div class="title">Status</div>
                    <input type="hidden" name="status" :value="JSON.stringify(status)">
                    <div class="detail__content">
                        <select v-model="status.lookup" @change="updateSelectData($event, 'status')">
                            <option value="statusLiving">Living</option>
                            <option value="statusStasis">Stasis</option>
                            <option value="statusDeceased">Deceased</option>
                            <option value="">Unknown</option>
                            <option value="other">Other</option>
                        </select>
                        <div class="other" v-if="status.lookup == 'other'">
                            <input type="text" v-model="status.key" placeholder="Status" required>
                            <input type="text" v-model="status.other" placeholder="statusName">
                        </div>
                    </div>
                </div>
                <!-- Role -->
                <div class="detail">
                    <div class="title">Role</div>
                    <input type="hidden" name="role" :value="JSON.stringify(role)">
                    <div class="detail__content">
                        <select v-model="role.lookup" @change="updateSelectData($event, 'role')">
                            <option value="roleProtagonist">Protagonist</option>
                            <option value="roleProtagonistSupport">Supporting Character (Protagonist)</option>
                            <option value="roleAntagonist">Antagonist</option>
                            <option value="roleAntagonistSupport">Supporting Character (Antagonist)</option>
                            <option value="">Scenario Dependant</option>
                            <option value="">Unknown</option>
                            <option value="other">Other</option>
                        </select>
                        <div class="other" v-if="role.lookup == 'other'">
                            <input type="text" v-model="role.key" placeholder="Role" required>
                            <input type="text" v-model="role.other" placeholder="roleName">
                        </div>
                    </div>
                </div>
                <br>
                <!-- Height -->
                <div class="detail">
                    <div class="title">Height</div>
                    <div class="detail__content">
                        <input type="text" name="height" v-model="height" :pattern="heightPattern">
                    </div>
                </div>
                <!-- Weight -->
                <div class="detail">
                    <div class="title">Weight</div>
                    <div class="detail__content">
                        <input type="text" name="weight" v-model="weight" :pattern="weightPattern">
                    </div>
                </div>
                <!-- Spritial Alignment -->
                <div class="detail">
                    <div class="title">Spiritual Alignment</div>
                    <input type="hidden" name="spirituality" :value="JSON.stringify(spirituality)">
                    <div class="detail__content">
                        <select v-model="spirituality.lookup" @change="updateSelectData($event, 'spirituality')">
                            <option value="spiritualitySolaris">Solaris</option>
                            <option value="spiritualityLunabelle">Lunabelle</option>
                            <option value="spiritualityNightwalker">Nightwalker</option>
                            <option value="spiritualityMix">Mix</option>
                            <option value="">None</option>
                            <option value="">Unknown</option>
                            <option value="other">Other</option>
                        </select>
                        <div class="other" v-if="spirituality.lookup == 'other'">
                            <input type="text" v-model="spirituality.key" placeholder="Alignment" required>
                            <input type="text" v-model="spirituality.other" placeholder="spiritualityName">
                        </div>
                    </div>
                </div>
                <!-- Sexuality -->
                <div class="detail">
                    <div class="title">Sexuality</div>
                    <input type="hidden" name="sexuality" :value="JSON.stringify(sexuality)">
                    <div class="detail__content">
                        <select v-model="sexuality.lookup" @change="updateSelectData($event, 'sexuality')">
                            <option value="sexualityHeterosexual">Heterosexual</option>
                            <option value="sexualityHomosexual">Homosexual</option>
                            <option value="sexualityBisexual">Bisexual</option>
                            <option value="sexualityPansexual">Pansexual</option>
                            <option value="sexualityAsexual">Asexual</option>
                            <option value="">Unknown</option>
                            <option value="other">Other</option>
                        </select>
                        <div class="other" v-if="sexuality.lookup == 'other'">
                            <input type="text" v-model="sexuality.key" placeholder="Sexuality" required>
                            <input type="text" v-model="sexuality.other" placeholder="sexualityName">
                        </div>
                    </div>
                </div>
                <!-- Sexual Preference -->
                <div class="detail">
                    <div class="title">Sexual Preference</div>
                    <input type="hidden" name="sexualPreference" :value="JSON.stringify(sexualPreference)">
                    <div class="detail__content">
                        <select v-model="sexualPreference.lookup" @change="updateSelectData($event, 'sexualPreference')">
                            <option value="">None</option>
                            <option value="sexualPrefMale">Males</option>
                            <option value="sexualPrefFemale">Females</option>
                            <option value="sexualPrefBoth">Both</option>
                            <option value="">Unknown</option>
                            <option value="other">Other</option>
                        </select>
                        <div class="other" v-if="sexualPreference.lookup == 'other'">
                            <input type="text" v-model="sexualPreference.key" placeholder="Sexual Preference" required>
                            <input type="text" v-model="sexualPreference.other" placeholder="sexualPrefName">
                        </div>
                    </div>
                </div>
                <!-- Birthday -->
                <div class="detail">
                    <div class="title">Birthday</div>
                    <div class="detail__content">
                        <input type="date" name="birthday" v-model="birthday" min="2000-01-01" max="2000-12-31">
                    </div>
                </div>
                <!-- Aliases -->
                <div class="detail">
                    <div class="title">Aliases</div>
                    <input type="hidden" name="aliases" :value="JSON.stringify(aliases)">
                    <div class="detail__content" v-drag-and-drop>
                        <ul class="list">
                            <li class="list__item alias" v-for="(alias, i) in aliases" :key="i">
                                <input type="text" placeholder="Alias Name" v-model="alias.key" required>
                                <input type="text" placeholder="Lookup" v-model="alias.lookup">
                                <button class="list__item__delete" @click.prevent="killAlias(i)">X</button>
                            </li>
                        </ul>
                        <button @click.prevent="addAlias()">Add Alias</button>
                    </div>
                </div>
            </div>
            <!-- /Details -->
        </div>
        <!-- /Details -->

        <!-- Info -->
        <div class="character__info">
            <!-- Short Description -->
            <section class="block" id="shortDescription">
                <h2 class="block__header">Short Description</h2>
                <div class="block__content" >
                    <input type="hidden" name="shortDescription" :value="shortDescription">
                    <Editor :text="rawShortDescription" useEditor="false" @updated="shortDescription = $event" />
                </div>
            </section>
            <!-- Description -->
            <section class="block" id="description">
                <h2 class="block__header">Description</h2>
                <div class="block__content">
                    <input type="hidden" name="description" :value="description">
                    <Editor :text="rawDescription" @updated="description = $event" />
                </div>
            </section>
            <!-- History -->
            <section class="block" id="history">
                <h2 class="block__header">History</h2>
                <div class="block__content">
                    <input type="hidden" name="history" :value="history">
                    <Editor :text="rawHistory" @updated="history = $event" />
                </div>
            </section>
            <!-- Characteristics -->
            <section class="block" id="characteristics">
                <h2 class="block__header">Characteristics</h2>
                <div class="block__content">
                    <input type="hidden" name="characteristics" :value="characteristics">
                    <Editor :text="rawCharacteristics" @updated="characteristics = $event" />
                </div>
            </section>
            <!-- Other -->
            <section class="block" id="other">
                <h2 class="block__header">Other</h2>
                <div class="block__content">
                    <!-- Quotes -->
                    <section class="sub-block" id="quotes">
                        <h2 class="sub-block__header">Quotes</h2>
                        <input type="hidden" name="quotes" :value="JSON.stringify(quotes)">
                        <div class="sub-block__content">
                            <ul class="list" v-drag-and-drop>
                                <li class="list__item quote" v-for="(quote, i) in quotes" :key="i">
                                    <input type="text" placeholder="Quote" v-model="quote.key" required>
                                    <button class="list__item__delete" @click.prevent="killQuote(i)">X</button>
                                </li>
                            </ul>
                            <button @click.prevent="addQuote()">Add Quote</button>
                        </div>
                    </section>
                    <!-- Trivia -->
                    <section class="sub-block" id="trivia">
                        <h2 class="sub-block__header">Trivia</h2>
                        <input type="hidden" name="trivia" :value="JSON.stringify(trivia)">
                        <div class="sub-block__content">
                            <ul class="list" v-drag-and-drop>
                                <li class="list__item trivia" v-for="(triv, i) in trivia" :key="i">
                                    <input type="text" placeholder="trivia" v-model="triv.key" required>
                                    <button class="list__item__delete" @click.prevent="killTrivia(i)">X</button>
                                </li>
                            </ul>
                            <button @click.prevent="addTrivia()">Add Trivia</button>
                        </div>
                    </section>
                    <!-- Genetic Breakdown -->
                    <section class="sub-block" id="genetic-breakdown">
                        <h2 class="sub-block__header">Genetic Breakdown</h2>
                        <div class="sub-block__content">
                            Genetic Breakdown Genetic Breakdown Genetic Breakdown
                        </div>
                    </section>
                </div>
            </section>
            <!-- Relationships -->
            <section class="block" id="relationships">
                <h2 class="block__header">Relationships</h2>
                <input type="hidden" name="relationships" :value="JSON.stringify(relationships)">
                <div class="block__content">
                    <!-- Family -->
                    <section class="sub-block" id="family">
                        <h2 class="sub-block__header">Family</h2>
                        <div class="sub-block__content">
                            <ul class="list" v-drag-and-drop>
                                <li class="list__item list__item--relation family" v-for="(el, i) in relationships.family" :key="i">
                                    <input type="text" placeholder="Name" v-model="el.key" required>
                                    <input type="text" placeholder="Relation" v-model="el.relation">
                                    <input type="text" placeholder="Lookup" v-model="el.lookup">
                                    <button class="list__item__delete" @click.prevent="killRelationship('family', i)">X</button>
                                </li>
                            </ul>
                            <button @click.prevent="addRelationship('family')">Add Family</button>
                        </div>
                    </section>
                    <!-- Friends -->
                    <section class="sub-block" id="friends">
                        <h2 class="sub-block__header">Friends</h2>
                        <div class="sub-block__content">
                            <ul class="list" v-drag-and-drop>
                                <li class="list__item list__item--relation friends" v-for="(el, i) in relationships.friends" :key="i">
                                    <input type="text" placeholder="Name" v-model="el.key" required>
                                    <input type="text" placeholder="Relation" v-model="el.relation">
                                    <input type="text" placeholder="Lookup" v-model="el.lookup">
                                    <button class="list__item__delete" @click.prevent="killRelationship('friends', i)">X</button>
                                </li>
                            </ul>
                            <button @click.prevent="addRelationship('friends')">Add Friend</button>
                        </div>
                    </section>
                    <!-- Acquaintances -->
                    <section class="sub-block" id="acquaintances">
                        <h2 class="sub-block__header">Acquaintances</h2>
                        <div class="sub-block__content">
                            <ul class="list" v-drag-and-drop>
                                <li class="list__item list__item--relation acquaintances" v-for="(el, i) in relationships.acquaintances" :key="i">
                                    <input type="text" placeholder="Name" v-model="el.key" required>
                                    <input type="text" placeholder="Relation" v-model="el.relation">
                                    <input type="text" placeholder="Lookup" v-model="el.lookup">
                                    <button class="list__item__delete" @click.prevent="killRelationship('acquaintances', i)">X</button>
                                </li>
                            </ul>
                            <button @click.prevent="addRelationship('acquaintances')">Add Acquaintance</button>
                        </div>
                    </section>
                    <!-- Enemies -->
                    <section class="sub-block" id="Enemies">
                        <h2 class="sub-block__header">Enemies</h2>
                        <div class="sub-block__content">
                            <ul class="list" v-drag-and-drop>
                                <li class="list__item list__item--relation enemies" v-for="(el, i) in relationships.enemies" :key="i">
                                    <input type="text" placeholder="Name" v-model="el.key" required>
                                    <input type="text" placeholder="Relation" v-model="el.relation">
                                    <input type="text" placeholder="Lookup" v-model="el.lookup">
                                    <button class="list__item__delete" @click.prevent="killRelationship('enemies', i)">X</button>
                                </li>
                            </ul>
                            <button @click.prevent="addRelationship('enemies')">Add Enemy</button>
                        </div>
                    </section>
                </div>
            </section>
        </div>
        <!-- /Info -->

        <input type="submit" :value="(editLookup == '' || editLookup == null) ? 'Create' : 'Update'">
        
    </form>
    <!-- /Wrapper -->
    <!-- <Lightbox title="Hello World!" content="Hello" :details="[
        {route:'character', key:'jane doe', title:'Jane Doe'}, 
        {route:'about', title:'Hello'}, 
        {route:'', title:'World'}
    ]" /> -->
</div>
</template>

<script>
// @ is an alias to /src
import HeaderImage from '@/components/HeaderImage.vue'
import Editor from '@/components/Editor.vue'
// import Lightbox from '@/components/Lightbox.vue'

import store from '@/store'

export default {
name: 'character-admin',
components: {
    HeaderImage,
    Editor,
    // Lightbox
},
data() {
    return {
        // options
        lookup: '',
        firstName: '',
        middleName: '',
        lastName: '',
        maidenName: '',
        preferredName: '',
        nickName: '',
        pronunciation: '',
        age: {local:-1, global:-1},
        gender: {key:'Male', lookup:'genderMale', other:'', route:'encyclopedia'},
        typeBase: {key:'Spirit', lookup:'typeSpirit', other:'', route:'encyclopedia'},
        typeMod: {key:'None', lookup:'', other:'', route:'encyclopedia'},
        speciesBase: {key:'Human', lookup:'speciesHuman', other:'', route:'encyclopedia'},
        speciesMod: {key:'None', lookup:'', other:'', route:'encyclopedia'},
        birthplace: {key:'', lookup:'', route:'location'},
        home: {key:'', lookup:'', route:'location'},
        career: '',
        status: {key:'Living', lookup:'statusLiving', other:'', route:'encyclopedia'},
        role: {key:'Protagonist', lookup:'roleProtagonist', other:'', route:'encyclopedia'},
        height: `5'5"`,
        weight: '120 lbs',
        spirituality: {key:'Solaris', lookup:'spiritualitySolaris', other:'', route:'encyclopedia'},
        sexuality: {key:'Heterosexual', lookup:'sexualityHeterosexual', other:'', route:'encyclopedia'},
        sexualPreference: {key:'None', lookup:'', other:'', route:'encyclopedia'},
        birthday: '2000-01-01',
        aliases: [],
        quotes: [],
        trivia: [],
        relationships: {
            family: [],
            friends: [],
            acquaintances: [],
            enemies: []
        },
        shortDescription: '',
        description: '',
        history: '',
        characteristics: '',

        rawShortDescription: '',
        rawDescription: '',
        rawHistory: '',
        rawCharacteristics: '',


        /* eslint-disable */
        heightPattern: `^(?!$|.*\'[^\x22]+$)(?:([0-9]+)\')?(?:([0-9]+)\x22?)?$`,
        weightPattern: `^([0-9]+)[\\s](lbs)$`,
        /* eslint-enable */

        header: {src:'', caption: ''},
        profile: '',
        thumbnail: '',

        editLookup: '',
        loaded: false

    }
},
computed: {
    compHeader() {
        return (this.header.src.startsWith('uploads/')) ? require(`@/assets/${this.header.src}`) : (this.header.src != '') ? this.header.src : 'https://dummyimage.com/1600x160/d6a439/000000.png'
    },
    compProfile() {
        return (this.profile.startsWith('uploads/')) ? require(`@/assets/${this.profile}`) : (this.profile != '') ? this.profile : 'https://dummyimage.com/500x600/d6a439/000000.png'
    },
    compThumbnail() {
        return (this.thumbnail.startsWith('uploads/')) ? require(`@/assets/${this.thumbnail}`) : (this.thumbnail != '') ? this.thumbnail : 'https://dummyimage.com/150x150/d6a439/000000.png'
    }
},
created() {
    //look for initial data
    this.editLookup = this.$route.params.name
    if(this.editLookup != '' && this.editLookup != null) {
        this.loaded = false

        //go get the character
        const data = store.getters.getCharacterByLookup(this.editLookup)

        if(data != null) {

            //auto-fill data
            Object.keys(data).forEach(key => {
                //handle birthday separately
                if(key == "birthday") {
                    this[key] = data[key].slice(0, 10)
                }
                else {
                    this[key] = data[key]
                }
            })


            // this.rawShortDescription = data.shortDescription.replace("<span v-if", '<span style="display: none;" v-if')
            // this.rawDescription = data.description.replace("<span v-if", '<span style="display: none;" v-if')
            // this.rawHistory = data.history.replace("<span v-if", '<span style="display: none;" v-if')
            // this.rawCharacteristics = data.characteristics.replace("<span v-if", '<span style="display: none;" v-if')
            this.rawShortDescription = data.shortDescription.replace(/<span v-if/g, '<span style="display: none;" v-if').trim("<div>", "</div>")
            this.rawDescription = data.description.replace(/<span v-if/g, '<span style="display: none;" v-if').trim("<div>", "</div>")
            this.rawHistory = data.history.replace(/<span v-if/g, '<span style="display: none;" v-if').trim("<div>", "</div>")
            this.rawCharacteristics = data.characteristics.replace(/<span v-if/g, '<span style="display: none;" v-if').trim("<div>", "</div>")

            this.loaded = true

            // console.log(data)
            // console.log(this.rawDescription)
        }

        //go get data
        // let route = `http://localhost:4000/characters/${this.editLookup}`;
        // this.axios.get(route).then(response => {
        //     // eslint-disable-next-line
        //     console.log(response.data)
        //     let data = response.data

        //     //auto-fill data
        //     Object.keys(data).forEach(key => {
        //         //handle birthday separately
        //         if(key == "birthday") {
        //             this[key] = data[key].slice(0, 10)
        //         }
        //         else {
        //             this[key] = data[key]
        //         }
        //     })


        //     this.rawShortDescription = data.shortDescription
        //     this.rawDescription = data.description
        //     this.rawHistory = data.history
        //     this.rawCharacteristics = data.characteristics

        //     this.loaded = true
            

        // });

    }
    else this.loaded = true
},
methods: {
    updateSelectData(e, varName) {
        //reset other to none
        this[varName].other = ''
        this[varName].key = e.target.options[e.target.selectedIndex].text
    },
    addAlias() {
        this.aliases.push({key:'', lookup:'', route:'character'})
    },
    killAlias(index) {
        this.aliases.splice(index, 1)
    },

    addQuote() {
        this.quotes.push({key:''})
    },
    killQuote(index) {
        this.quotes.splice(index, 1)
    },
    addTrivia() {
        this.trivia.push({key:''})
    },
    killTrivia(index) {
        this.trivia.splice(index, 1)
    },
    addRelationship(genre) {
        this.relationships[genre].push({key:'', relation:'', lookup:'', route:'character'})
    },
    killRelationship(genre, index) {
        this.relationships[genre].splice(index, 1)
    },

    // Image Methods
    changeHeader(e) {
        //load the image and set headerSrc
        if(e.target.files && e.target.files[0]) {
            let reader = new FileReader()
            reader.onload = (ev) => {
                this.header.src = ev.target.result
            }
            reader.readAsDataURL(e.target.files[0])
        }
    },
    changeProfile(e) {
        //load the image and set headerSrc
        if(e.target.files && e.target.files[0]) {
            let reader = new FileReader()
            reader.onload = (ev) => {
                this.profile = ev.target.result
            }
            reader.readAsDataURL(e.target.files[0])
        }
    },
    changeThumbnail(e) {
        //load the image and set headerSrc
        if(e.target.files && e.target.files[0]) {
            let reader = new FileReader()
            reader.onload = (ev) => {
                this.thumbnail = ev.target.result
            }
            reader.readAsDataURL(e.target.files[0])
        }
    },


    send() {
        const form = document.forms[0]

        //get the form data
        let data = {}
        for( let i = 0; i < form.elements.length; i++) {
            let el = form.elements[i]
            let item = {key:el.name, value:el.value}
            if(item.key == "") continue
            //layered
            if(item.value.startsWith("{") || item.value.startsWith("[")) item.value = JSON.parse(item.value)
            data[item.key] = item.value
        }

        //pre-compile editor data
        //remove the router-link styles
        data.shortDescription = data.shortDescription.replace('style="color: blue;"', '').replace('style="display: none;"', '').replace(/<div>/g, '').replace(/<\/div>/g, '')
        data.description = data.description.replace('style="color: blue;"', '').replace('style="display: none;"', '').replace(/<div>/g, '').replace(/<\/div>/g, '')
        data.history = data.history.replace('style="color: blue;"', '').replace('style="display: none;"', '').replace(/<div>/g, '').replace(/<\/div>/g, '')
        data.characteristics = data.characteristics.replace('style="color: blue;"', '').replace('style="display: none;"', '').replace(/<div>/g, '').replace(/<\/div>/g, '')

        // eslint-disable-next-line
        console.log(data)
        // eslint-disable-next-line
        console.log("LOOKUP: ", this.editLookup)

        // this.addRoute('hello', 'world')

        // Store.addRoute
        
        // console.log(this.$refs.description.$refs.content.innerHTML)

        //handle data
        // ----------- CREATE
        if(this.editLookup == '' || this.editLookup == null) {
            // eslint-disable-next-line
            console.log("Adding")
            store.commit('addCharacter', {data, callback:() => {
                //add the route
                store.commit('addRoute', {lookup:data.lookup, route:'character'})
                //re-route to characters page
                this.$router.push({name: 'characters'})
            }})

        }
        // ----------- UPDATE
        else {
            const lookup = this.editLookup
            store.commit('updateCharacter', {lookup, data, callback:() => {
                //add the route
                store.commit('addRoute', {lookup:data.lookup, route:'character'})
                //re-route to character page
                this.$router.push({name: 'character', params: { name:data.lookup} })
            }})

            // //send to axios
            // let route = `http://localhost:4000/characters/update/${this.editLookup}`
            // this.axios.post(route, data)
            //     .then(() => {
            //         //add the route
            //         addRoute({lookup:data.lookup, route:'character'})
            //         //re-query character for store
            //         let route = `http://localhost:4000/characters/${data.lookup}`
            //         this.axios.get(route).then(response => {
            //             const lookup = this.editLookup
            //             const data = response.data
            //             //update store
            //             store.commit('updateCharacter', {lookup, data})

            //             //re-route to character page
            //             this.$router.push({name: 'character', params: { name:data.lookup} })
            //         })
            //     })

        }

        


    },

    /**Adds a route to the routes table. */
    addRoute(lookup, route) {
        let handle = "https://js-v-database.herokuapp.com/routes/add"
        this.axios.post(handle, {lookup, route})
            .then(() => {
                // eslint-disable-next-line
                console.log("ADDED ROUTE!")
            })
    }
}
}
</script>


<style scoped lang="scss">
@import '../../globals';

$block-colour: mix($main-colour, $light-colour, 30);
$block-colour-2: mix($accent-colour, $light-colour, 10);

.breadcrumbs {
    padding: 3px 10px;
}


.character {
    width: inherit;

    &__details {
        // background: $accent-colour;
        padding-bottom: 1px;

        @media #{$size-medium} {
            padding-top: 5px;
        }

        .image {
            @include display-flex();
            justify-content: center;
            max-width: 500px;
            box-sizing: border-box;
            margin: 0 auto;
            
            img {
                display: block;
                width: 100%;
                max-width: 500px;
                object-fit: cover;
                margin: 0 auto;
            }
        }

        .header {
            @include display-flex();
            flex-flow: column;
            font-size: 1.3em;

            .side {
                background: $block-colour;
                margin: 5px;
                padding: 5px;
                padding-left: 5px;
                font-weight: 300;
                border-left: solid 4px $main-colour;
                box-sizing: border-box;
            }

            &__title {
                background: $dark-colour;
                padding: 5px 24px;
                font-size: 1.4em;
                box-sizing: border-box;
                text-align: center;
                color: white;
            }
        }
        .details {
            background: $light-colour;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 5px;
            margin: 5px;
            padding: 5px;
            box-sizing: border-box;
            
            .detail {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 5px;
                color: $accent-colour;
                font-size: 1.1em;
                font-weight: 400;

                &__content {
                    @include display-flex;
                    flex-flow: column;
                    padding: 0;

                    &.lookup {
                        @media #{$size-large} {
                            display: grid;
                            grid-template-columns: 1fr 180px;
                        }
                    }

                    .modifier {
                        @include display-flex
                    }

                    .other {
                        @include display-flex();
                        flex-flow: column;
                        padding: 0;

                        @media #{$size-medium} {
                            display: grid;
                            grid-template-columns:  1fr 140px;
                        }
                    }
                }

                .title {
                    text-align: right;
                    color: black;
                    font-weight: 300;
                }
            }
        }
    }

    &__info {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5px;

        @media #{$size-large} {
            display: block;
        }

        .block {
            max-width: 100%;
            
            @media #{$size-medium} {
                margin-left: 5px;
            }

            &__header {
                background: $dark-colour;
                padding: 5px 10px;
                margin: 0;
                color: white;
                font-weight: 300;
                box-sizing: border-box;

                @media #{$size-medium} {
                    width: 85vw;
                }
                @media #{$size-large} {
                    width: 25vw;
                }
            }

            &__content {
                padding: 10px 15px;
                font-weight: 300;
                box-sizing: border-box;
            }
        }

        .sub-block {
            &__header {
                background: $accent-colour;
                padding: 5px 15px;
                margin: 0 -15px;
                color: white;
                font-size: 1.2em;
                font-weight: 300;
                box-sizing: border-box;

                @media #{$size-medium} {
                    width: 45vw;
                }

                @media #{$size-large} {
                    width: 20vw;
                }
            }

            &__content {
                padding: 5px 0;
                box-sizing: border-box;
            }
        }
    }

    .list {
        @include display-flex();
        flex-flow: column;
        padding: 0;
        margin: 0;
        padding-bottom: 10px;

        &__item {
            @include display-flex();
            flex-flow: column;
            padding: 0;
            margin-bottom: 5px;
            border-left: solid 10px $accent-colour;
            transition: border-color ease 0.5s;

            &__delete {
                background: #b84040;
                color: white;
                border: solid 1px grey;
                user-select: none;
                outline: none;
                cursor: pointer;
            }

            &:focus,
            &:hover {
                border-color: $main-colour;
                outline: none;
            }

            @media #{$size-medium} {
                display: grid;
                grid-template-columns:  1fr 140px 30px;
            }

            &.quote {
                @media #{$size-medium} {
                    display: grid;
                    grid-template-columns:  1fr 30px;
                }
            }

            &--relation {
                @media #{$size-medium} {
                    display: grid;
                    grid-template-columns: 2fr 2fr 1fr 30px;
                }
            }
        }
    }
}
</style>