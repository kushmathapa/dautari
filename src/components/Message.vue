<template>
    <div class="message">
        <span v-if="!sender"> {{ name }} </span>
        <div class="flex" :class="sender ? 'flex-row-reverse' : ''">
            <Image class="mt-1" :src="imageUrl" />
            <div class="p-5 rounded-2xl rounded-tl-none w-3/4" :class="!sender ? 'bg-white text-black': 'bg-green-50 text-green-900'">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
import Image from './Image.vue'
export default {
    components: { Image },
    props: {
        name: { type: String, default: ''},
        imageUrl: { type: String, default: ''},
        sender: { type: Boolean, default: false}
    }
}
</script>