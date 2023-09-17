<script setup>
import FeedCard from './FeedCard.vue';
</script>
<template>
    <div class="p-5 w-full">
        <div class="prose max-w-none my-3">
            <h1>
                Feed
            </h1>
        </div>
        <div class="w-full">
            <div class="mx-auto" v-masonry fit-width="true" horizontal-order="true" transition-duration="0.3s"
                stagger="0.03s" item-selector=".grid-item">

                <FeedCard description="Endorsement day at @SahanaGuitars!" title="Sahana Guitars Pic!"
                    image="/src/assets/images/profilepic.jpg" />
                <FeedCard description="In-front of people @GuitarShop, join us for the next workshop!"
                    title="Mantra Guitar Clinic!" image="/src/assets/images/cover_image.jpg" />
                <FeedCard description="Thank you @WaveMagazine for featuring winners of @DeepakMoktanCompetition2019!"
                    title="Wave Magazine Photoshoot!" image="/src/assets/images/highlight1.jpg" />
                <FeedCard description="This is the face of concentration! @KarmaRecords!" title="Karma Records Session!"
                    image="/src/assets/images/studioimage.jpg" />
                <FeedCard description="Recording my entry for #RockPujariContest @SahanaGuitars!"
                    title="Recording for 'Rock Pujari Competition'!" image="/src/assets/images/feedimage1.jpg" />
                <FeedCard
                    description="Was awesome performing in-front of a crowd that's curious to learn! Woop! @GuitarShop @GuitarWorkshop"
                    title="Mantra Guitar Clinic!" image="/src/assets/images/cover_image.jpg" />
                <FeedCard description="@KarmaRecords, Recording Damien Rice's 'Cannonball'!"
                    title="Recording a Damien Rice cover!" image="/src/assets/images/acousticguitar.jpg" />
                <FeedCard description="Thank you @GuitarShop for hosting us!" title="Mantra Guitar Workshop!"
                    image="/src/assets/images/cover_image.jpg" />
                <FeedCard description="Check out @WaveMagazine this April! I'm in it!" title="Wave Magazine 2019!"
                    image="/src/assets/images/highlight1.jpg" />

            </div>
        </div>
    </div>
</template>