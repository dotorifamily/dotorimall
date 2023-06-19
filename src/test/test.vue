
<template>
    <section class="visual">
        <div>Visual 영역</div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    int DataTransfer,
    emits : {
        addBook( payload: {bookName :string }) {
            return payload.bookName.length > 0
        }
    },
    methods: {
        onSubmit () {
            this.$emit('addBook', {
                bookName : 'string'
            })
        }
    }
});

</script>
<style scoped>
    

</style>