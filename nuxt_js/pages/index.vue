<template>
        <div>
                <h2>HOME</h2>
                <div>
                        <button @click="fetchSingleTask" :class="{ active: activeTab === 'singleTask' }">Single Task</button>
                        <button @click="fetchAllTasks" :class="{ active: activeTab === 'allTasks' }">All Tasks</button>
                </div>
                <div v-if="activeTab === 'singleTask'">
                        <h3>Single Task</h3>
                        <div v-if="tasks.length">
                                <p>Task: {{ tasks[0].name }}</p>
                        </div>
                        <div v-else>
                                <p>No tasks found</p>
                        </div>
                </div>
                <div v-else-if="activeTab === 'allTasks'">
                        <h3>All Tasks</h3>
                        <ul>
                                <li v-for="task in tasks" :key="task.id">
                                        {{ task.name }}
                                </li>
                        </ul>
                </div>
        </div>
</template>
      
<script>
import tasksApi from '~/services/tasks';

export default {
        data() {
                return {
                        tasks: [],
                        activeTab: 'singleTask',
                };
        },
        methods: {
                async fetchSingleTask() {
                        this.activeTab = 'singleTask';
                        try {
                                const tasks = await tasksApi.getTasks();
                                this.tasks = tasks.slice(0, 1); // Get the first task only
                        } catch (error) {
                                console.error('Error fetching single task:', error);
                        }
                },
                async fetchAllTasks() {
                        this.activeTab = 'allTasks';
                        try {
                                this.tasks = await tasksApi.getTasks();
                        } catch (error) {
                                console.error('Error fetching all tasks:', error);
                        }
                },
        },
        created() {
                this.fetchSingleTask(); // Fetch single task on page load
        },
};
</script>
      
<style scoped>
.active {
        background-color: #ccc;
}
</style>
      