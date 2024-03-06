<script lang="ts"
        setup>
        import { getData } from '@/api/useFetch';
        import { IWorkoutModel } from '@/models/IWorkoutModel';
        import { useUserStore } from '@/store/userStore';
        import { useModalStore } from '@/store/modalStore';
        import { onBeforeMount, onMounted, ref } from 'vue';

        const workoutData = ref<IWorkoutModel[] | null>([]);
        const workoutDataErrors = ref(false);

        onBeforeMount(async () => {

          const { data, hasError } = await getData<IWorkoutModel[]>(
            'http://127.0.0.1:8080/workouts/get-users-workouts?email=' + localStorage.getItem('email')
          );

          workoutData.value = data.value;
          workoutDataErrors.value = hasError.value;
          if (data.value!.length > 1) {
            useModalStore().setCreateWorkoutModalValue(false)
          }
        });
</script>

<template>
  <div class="card-wrapper container-fluid ">
    <div v-for="item in workoutData"
         class="cards bg-light shadow "
         style="--bs-bg-opacity: 0.3">
      <h3 class="font text-white">{{ item.name }}</h3>
    </div>

  </div>



  <p v-for="item in workoutData">{{ item.name }}</p>
</template>

<style lang="css"
       scoped>
      @import "../../assets/css/components/workout-components/workout-card-component.css"
    </style>