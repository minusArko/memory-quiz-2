import { defineStore } from "pinia";
import { computed, ref } from "vue";
import ProblemData from "../problem-data";
import TrigProblem from "../trig-problem";

export const useStore = defineStore("store", () => {
    const selectedMode = ref("practice");

    const selectedSkills = ref<string[]>([]);

    const problems  = ref<ProblemData[]>([]);

    function generateProblems() {
        problems.value = TrigProblem.generate(10) ?? [];
    }

    return {
        selectedMode,
        selectedSkills,
        problems,
        generateProblems,
        //maxTime,
        //currentTime,
        //isRunning,
        //start,
        //stop,
    }
});
